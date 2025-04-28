THREE.OrbitControls = function(object, domElement) {
    // Verifica se domElement é fornecido
    if (domElement === undefined) console.warn('THREE.OrbitControls: O parâmetro "domElement" é obrigatório.');
    if (domElement === document) console.error('THREE.OrbitControls: "document" não deve ser usado como "domElement". Use "renderer.domElement".');

    // Configurações básicas
    this.object = object;
    this.domElement = domElement;
    this.enabled = true;
    this.target = new THREE.Vector3();

    // Limites de distância e zoom
    this.minDistance = 0;
    this.maxDistance = Infinity;
    this.minZoom = 0;
    this.maxZoom = Infinity;

    // Limites de ângulos
    this.minPolarAngle = 0;
    this.maxPolarAngle = Math.PI;
    this.minAzimuthAngle = -Infinity;
    this.maxAzimuthAngle = Infinity;

    // Opções de controle
    this.enableDamping = false;
    this.dampingFactor = 0.05;
    this.enableZoom = true;
    this.zoomSpeed = 1.0;
    this.enableRotate = true;
    this.rotateSpeed = 1.0;
    this.enablePan = true;
    this.panSpeed = 1.0;
    this.screenSpacePanning = true;
    this.keyPanSpeed = 7.0;
    this.autoRotate = false;
    this.autoRotateSpeed = 2.0;
    this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
    this.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
    this.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };

    // Estado inicial
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;
    this._domElementKeyEvents = null;

    // Métodos públicos
    this.getPolarAngle = () => spherical.phi;
    this.getAzimuthalAngle = () => spherical.theta;
    this.listenToKeyEvents = (domElement) => {
        domElement.addEventListener('keydown', onKeyDown);
        this._domElementKeyEvents = domElement;
    };
    this.saveState = () => {
        scope.target0.copy(scope.target);
        scope.position0.copy(scope.object.position);
        scope.zoom0 = scope.object.zoom;
    };
    this.reset = () => {
        scope.target.copy(scope.target0);
        scope.object.position.copy(scope.position0);
        scope.object.zoom = scope.zoom0;
        scope.object.updateProjectionMatrix();
        scope.dispatchEvent(changeEvent);
        scope.update();
        state = STATE.NONE;
    };
    this.update = (() => {
        const offset = new THREE.Vector3();
        const quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
        const quatInverse = quat.clone().invert();
        const lastPosition = new THREE.Vector3();
        const lastQuaternion = new THREE.Quaternion();
        const twoPI = 2 * Math.PI;

        return function() {
            const position = scope.object.position;
            offset.copy(position).sub(scope.target);
            offset.applyQuaternion(quat);
            spherical.setFromVector3(offset);

            if (scope.autoRotate && state === STATE.NONE) rotateLeft(getAutoRotationAngle());
            if (scope.enableDamping) {
                spherical.theta += sphericalDelta.theta * scope.dampingFactor;
                spherical.phi += sphericalDelta.phi * scope.dampingFactor;
            } else {
                spherical.theta += sphericalDelta.theta;
                spherical.phi += sphericalDelta.phi;
            }

            // Restrições de ângulo azimuthal
            let min = scope.minAzimuthAngle;
            let max = scope.maxAzimuthAngle;
            if (isFinite(min) && isFinite(max)) {
                if (min < -Math.PI) min += twoPI; else if (min > Math.PI) min -= twoPI;
                if (max < -Math.PI) max += twoPI; else if (max > Math.PI) max -= twoPI;
                spherical.theta = min <= max ? Math.max(min, Math.min(max, spherical.theta)) : 
                    (spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta));
            }

            // Restrições de ângulo polar
            spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
            spherical.makeSafe();
            spherical.radius *= scale;
            spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

            // Ajuste de panning
            if (scope.enableDamping) scope.target.addScaledVector(panOffset, scope.dampingFactor);
            else scope.target.add(panOffset);

            offset.setFromSpherical(spherical);
            offset.applyQuaternion(quatInverse);
            position.copy(scope.target).add(offset);
            scope.object.lookAt(scope.target);

            if (scope.enableDamping) {
                sphericalDelta.theta *= (1 - scope.dampingFactor);
                sphericalDelta.phi *= (1 - scope.dampingFactor);
                panOffset.multiplyScalar(1 - scope.dampingFactor);
            } else {
                sphericalDelta.set(0, 0, 0);
                panOffset.set(0, 0, 0);
            }

            scale = 1;
            if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS ||
                8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
                scope.dispatchEvent(changeEvent);
                lastPosition.copy(scope.object.position);
                lastQuaternion.copy(scope.object.quaternion);
                zoomChanged = false;
                return true;
            }
            return false;
        };
    })();
    this.dispose = () => {
        scope.domElement.removeEventListener('contextmenu', onContextMenu);
        scope.domElement.removeEventListener('pointerdown', onPointerDown);
        scope.domElement.removeEventListener('wheel', onMouseWheel);
        scope.domElement.removeEventListener('touchstart', onTouchStart);
        scope.domElement.removeEventListener('touchend', onTouchEnd);
        scope.domElement.removeEventListener('touchmove', onTouchMove);
        scope.domElement.ownerDocument.removeEventListener('pointermove', onPointerMove);
        scope.domElement.ownerDocument.removeEventListener('pointerup', onPointerUp);
        if (scope._domElementKeyEvents) scope._domElementKeyEvents.removeEventListener('keydown', onKeyDown);
    };

    // Variáveis internas
    const scope = this;
    const changeEvent = { type: 'change' };
    const startEvent = { type: 'start' };
    const endEvent = { type: 'end' };
    const STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 };
    let state = STATE.NONE;
    const EPS = 0.000001;
    const spherical = new THREE.Spherical();
    const sphericalDelta = new THREE.Spherical();
    let scale = 1;
    const panOffset = new THREE.Vector3();
    let zoomChanged = false;
    const rotateStart = new THREE.Vector2();
    const rotateEnd = new THREE.Vector2();
    const rotateDelta = new THREE.Vector2();
    const panStart = new THREE.Vector2();
    const panEnd = new THREE.Vector2();
    const panDelta = new THREE.Vector2();
    const dollyStart = new THREE.Vector2();
    const dollyEnd = new THREE.Vector2();
    const dollyDelta = new THREE.Vector2();

    // Funções auxiliares
    const getAutoRotationAngle = () => 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    const getZoomScale = () => Math.pow(0.95, scope.zoomSpeed);
    const rotateLeft = (angle) => { sphericalDelta.theta -= angle; };
    const rotateUp = (angle) => { sphericalDelta.phi -= angle; };
    const panLeft = (() => {
        const v = new THREE.Vector3();
        return (distance, objectMatrix) => {
            v.setFromMatrixColumn(objectMatrix, 0);
            v.multiplyScalar(-distance);
            panOffset.add(v);
        };
    })();
    const panUp = (() => {
        const v = new THREE.Vector3();
        return (distance, objectMatrix) => {
            v.setFromMatrixColumn(objectMatrix, scope.screenSpacePanning ? 1 : 0);
            if (!scope.screenSpacePanning) v.crossVectors(scope.object.up, v);
            v.multiplyScalar(distance);
            panOffset.add(v);
        };
    })();
    const pan = (() => {
        const offset = new THREE.Vector3();
        return (deltaX, deltaY) => {
            const element = scope.domElement;
            if (scope.object.isPerspectiveCamera) {
                const position = scope.object.position;
                offset.copy(position).sub(scope.target);
                const targetDistance = offset.length() * Math.tan((scope.object.fov / 2) * Math.PI / 180.0);
                panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
                panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
            } else if (scope.object.isOrthographicCamera) {
                panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
                panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
            } else {
                console.warn('Aviso: OrbitControls.js encontrou um tipo de câmera desconhecido - panning desativado.');
                scope.enablePan = false;
            }
        };
    })();
    const dollyOut = (dollyScale) => {
        if (scope.object.isPerspectiveCamera) scale /= dollyScale;
        else if (scope.object.isOrthographicCamera) {
            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
            scope.object.updateProjectionMatrix();
            zoomChanged = true;
        } else {
            console.warn('Aviso: OrbitControls.js encontrou um tipo de câmera desconhecido - zoom desativado.');
            scope.enableZoom = false;
        }
    };
    const dollyIn = (dollyScale) => {
        if (scope.object.isPerspectiveCamera) scale *= dollyScale;
        else if (scope.object.isOrthographicCamera) {
            scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
            scope.object.updateProjectionMatrix();
            zoomChanged = true;
        } else {
            console.warn('Aviso: OrbitControls.js encontrou um tipo de câmera desconhecido - zoom desativado.');
            scope.enableZoom = false;
        }
    };

    // Callbacks de eventos
    const handleMouseDownRotate = (event) => { rotateStart.set(event.clientX, event.clientY); };
    const handleMouseDownDolly = (event) => { dollyStart.set(event.clientX, event.clientY); };
    const handleMouseDownPan = (event) => { panStart.set(event.clientX, event.clientY); };
    const handleMouseMoveRotate = (event) => {
        rotateEnd.set(event.clientX, event.clientY);
        rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
        const element = scope.domElement;
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
        rotateStart.copy(rotateEnd);
        scope.update();
    };
    const handleMouseMoveDolly = (event) => {
        dollyEnd.set(event.clientX, event.clientY);
        dollyDelta.subVectors(dollyEnd, dollyStart);
        if (dollyDelta.y > 0) dollyOut(getZoomScale());
        else if (dollyDelta.y < 0) dollyIn(getZoomScale());
        dollyStart.copy(dollyEnd);
        scope.update();
    };
    const handleMouseMovePan = (event) => {
        panEnd.set(event.clientX, event.clientY);
        panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
        pan(panDelta.x, panDelta.y);
        panStart.copy(panEnd);
        scope.update();
    };
    const handleMouseUp = () => {};
    const handleMouseWheel = (event) => {
        if (event.deltaY < 0) dollyIn(getZoomScale());
        else if (event.deltaY > 0) dollyOut(getZoomScale());
        scope.update();
    };
    const handleKeyDown = (event) => {
        let needsUpdate = false;
        switch (event.keyCode) {
            case scope.keys.UP: pan(0, scope.keyPanSpeed); needsUpdate = true; break;
            case scope.keys.BOTTOM: pan(0, -scope.keyPanSpeed); needsUpdate = true; break;
            case scope.keys.LEFT: pan(scope.keyPanSpeed, 0); needsUpdate = true; break;
            case scope.keys.RIGHT: pan(-scope.keyPanSpeed, 0); needsUpdate = true; break;
        }
        if (needsUpdate) {
            event.preventDefault();
            scope.update();
        }
    };
    const handleTouchStartRotate = (event) => {
        if (event.touches.length === 1) rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
        else {
            const x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
            const y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
            rotateStart.set(x, y);
        }
    };
    const handleTouchStartPan = (event) => {
        if (event.touches.length === 1) panStart.set(event.touches[0].pageX, event.touches[0].pageY);
        else {
            const x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
            const y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
            panStart.set(x, y);
        }
    };
    const handleTouchStartDolly = (event) => {
        const dx = event.touches[0].pageX - event.touches[1].pageX;
        const dy = event.touches[0].pageY - event.touches[1].pageY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        dollyStart.set(0, distance);
    };
    const handleTouchStartDollyPan = (event) => {
        if (scope.enableZoom) handleTouchStartDolly(event);
        if (scope.enablePan) handleTouchStartPan(event);
    };
    const handleTouchStartDollyRotate = (event) => {
        if (scope.enableZoom) handleTouchStartDolly(event);
        if (scope.enableRotate) handleTouchStartRotate(event);
    };
    const handleTouchMoveRotate = (event) => {
        if (event.touches.length === 1) rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
        else {
            const x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
            const y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
            rotateEnd.set(x, y);
        }
        rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
        const element = scope.domElement;
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
        rotateStart.copy(rotateEnd);
    };
    const handleTouchMovePan = (event) => {
        if (event.touches.length === 1) panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
        else {
            const x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
            const y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
            panEnd.set(x, y);
        }
        panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
        pan(panDelta.x, panDelta.y);
        panStart.copy(panEnd);
    };
    const handleTouchMoveDolly = (event) => {
        const dx = event.touches[0].pageX - event.touches[1].pageX;
        const dy = event.touches[0].pageY - event.touches[1].pageY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        dollyEnd.set(0, distance);
        dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
        dollyOut(dollyDelta.y);
        dollyStart.copy(dollyEnd);
    };
    const handleTouchMoveDollyPan = (event) => {
        if (scope.enableZoom) handleTouchMoveDolly(event);
        if (scope.enablePan) handleTouchMovePan(event);
    };
    const handleTouchMoveDollyRotate = (event) => {
        if (scope.enableZoom) handleTouchMoveDolly(event);
        if (scope.enableRotate) handleTouchMoveRotate(event);
    };
    const handleTouchEnd = () => {};

    // Manipuladores de eventos
    const onPointerDown = (event) => {
        if (!scope.enabled) return;
        switch (event.pointerType) {
            case 'mouse':
            case 'pen': onMouseDown(event); break;
        }
    };
    const onPointerMove = (event) => {
        if (!scope.enabled) return;
        switch (event.pointerType) {
            case 'mouse':
            case 'pen': onMouseMove(event); break;
        }
    };
    const onPointerUp = (event) => {
        switch (event.pointerType) {
            case 'mouse':
            case 'pen': onMouseUp(event); break;
        }
    };
    const onMouseDown = (event) => {
        event.preventDefault();
        scope.domElement.focus ? scope.domElement.focus() : window.focus();
        let mouseAction;
        switch (event.button) {
            case 0: mouseAction = scope.mouseButtons.LEFT; break;
            case 1: mouseAction = scope.mouseButtons.MIDDLE; break;
            case 2: mouseAction = scope.mouseButtons.RIGHT; break;
            default: mouseAction = -1;
        }
        switch (mouseAction) {
            case THREE.MOUSE.DOLLY:
                if (!scope.enableZoom) return;
                handleMouseDownDolly(event);
                state = STATE.DOLLY;
                break;
            case THREE.MOUSE.ROTATE:
                if (event.ctrlKey || event.metaKey || event.shiftKey) {
                    if (!scope.enablePan) return;
                    handleMouseDownPan(event);
                    state = STATE.PAN;
                } else {
                    if (!scope.enableRotate) return;
                    handleMouseDownRotate(event);
                    state = STATE.ROTATE;
                }
                break;
            case THREE.MOUSE.PAN:
                if (event.ctrlKey || event.metaKey || event.shiftKey) {
                    if (!scope.enableRotate) return;
                    handleMouseDownRotate(event);
                    state = STATE.ROTATE;
                } else {
                    if (!scope.enablePan) return;
                    handleMouseDownPan(event);
                    state = STATE.PAN;
                }
                break;
            default: state = STATE.NONE;
        }
        if (state !== STATE.NONE) {
            scope.domElement.ownerDocument.addEventListener('pointermove', onPointerMove);
            scope.domElement.ownerDocument.addEventListener('pointerup', onPointerUp);
            scope.dispatchEvent(startEvent);
        }
    };
    const onMouseMove = (event) => {
        if (!scope.enabled) return;
        event.preventDefault();
        switch (state) {
            case STATE.ROTATE: if (!scope.enableRotate) return; handleMouseMoveRotate(event); break;
            case STATE.DOLLY: if (!scope.enableZoom) return; handleMouseMoveDolly(event); break;
            case STATE.PAN: if (!scope.enablePan) return; handleMouseMovePan(event); break;
        }
    };
    const onMouseUp = (event) => {
        scope.domElement.ownerDocument.removeEventListener('pointermove', onPointerMove);
        scope.domElement.ownerDocument.removeEventListener('pointerup', onPointerUp);
        if (!scope.enabled) return;
        handleMouseUp(event);
        scope.dispatchEvent(endEvent);
        state = STATE.NONE;
    };
    const onMouseWheel = (event) => {
        if (!scope.enabled || !scope.enableZoom || (state !== STATE.NONE && state !== STATE.ROTATE)) return;
        event.preventDefault();
        event.stopPropagation();
        scope.dispatchEvent(startEvent);
        handleMouseWheel(event);
        scope.dispatchEvent(endEvent);
    };
    const onTouchStart = (event) => {
        if (!scope.enabled) return;
        event.preventDefault();
        switch (event.touches.length) {
            case 1:
                switch (scope.touches.ONE) {
                    case THREE.TOUCH.ROTATE:
                        if (!scope.enableRotate) return;
                        handleTouchStartRotate(event);
                        state = STATE.TOUCH_ROTATE;
                        break;
                    case THREE.TOUCH.PAN:
                        if (!scope.enablePan) return;
                        handleTouchStartPan(event);
                        state = STATE.TOUCH_PAN;
                        break;
                    default: state = STATE.NONE;
                }
                break;
            case 2:
                switch (scope.touches.TWO) {
                    case THREE.TOUCH.DOLLY_PAN:
                        if (!scope.enableZoom && !scope.enablePan) return;
                        handleTouchStartDollyPan(event);
                        state = STATE.TOUCH_DOLLY_PAN;
                        break;
                    case THREE.TOUCH.DOLLY_ROTATE:
                        if (!scope.enableZoom && !scope.enableRotate) return;
                        handleTouchStartDollyRotate(event);
                        state = STATE.TOUCH_DOLLY_ROTATE;
                        break;
                    default: state = STATE.NONE;
                }
                break;
            default: state = STATE.NONE;
        }
        if (state !== STATE.NONE) scope.dispatchEvent(startEvent);
    };
    const onTouchMove = (event) => {
        if (!scope.enabled) return;
        event.preventDefault();
        event.stopPropagation();
        switch (state) {
            case STATE.TOUCH_ROTATE: if (!scope.enableRotate) return; handleTouchMoveRotate(event); scope.update(); break;
            case STATE.TOUCH_PAN: if (!scope.enablePan) return; handleTouchMovePan(event); scope.update(); break;
            case STATE.TOUCH_DOLLY_PAN: if (!scope.enableZoom && !scope.enablePan) return; handleTouchMoveDollyPan(event); scope.update(); break;
            case STATE.TOUCH_DOLLY_ROTATE: if (!scope.enableZoom && !scope.enableRotate) return; handleTouchMoveDollyRotate(event); scope.update(); break;
            default: state = STATE.NONE;
        }
    };
    const onTouchEnd = (event) => {
        if (!scope.enabled) return;
        handleTouchEnd(event);
        scope.dispatchEvent(endEvent);
        state = STATE.NONE;
    };
    const onContextMenu = (event) => {
        if (!scope.enabled) return;
        event.preventDefault();
    };

    // Adiciona listeners de eventos
    scope.domElement.addEventListener('contextmenu', onContextMenu);
    scope.domElement.addEventListener('pointerdown', onPointerDown);
    scope.domElement.addEventListener('wheel', onMouseWheel);
    scope.domElement.addEventListener('touchstart', onTouchStart);
    scope.domElement.addEventListener('touchend', onTouchEnd);
    scope.domElement.addEventListener('touchmove', onTouchMove);

    // Atualiza na inicialização
    this.update();
};

THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

THREE.MapControls = function(object, domElement) {
    // Chama OrbitControls com herança
    THREE.OrbitControls.call(this, object, domElement);
    this.screenSpacePanning = false;
    this.mouseButtons.LEFT = THREE.MOUSE.PAN;
    this.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
    this.touches.ONE = THREE.TOUCH.PAN;
    this.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
};

THREE.MapControls.prototype = Object.create(THREE.EventDispatcher.prototype);
THREE.MapControls.prototype.constructor = THREE.MapControls;