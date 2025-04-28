// render_threejs.js
// Módulo para renderizar gráficos periodontais em 3D usando Three.js

// Variáveis globais
let scene, camera, renderer, controls
let animationFrameId
let isAnimationPlaying = true

// Configurações de posições dos dentes
const toothPositions = {
  11: { xOffset: 0, zOffset: 0, yRotation: -0.1 },
  12: { xOffset: 0, zOffset: 0, yRotation: -0.4 },
  13: { xOffset: 0, zOffset: 0, yRotation: -0.6 },
  14: { xOffset: 0, zOffset: 0, yRotation: -0.7 },
  15: { xOffset: -0.2, zOffset: 0, yRotation: -0.9 },
  16: { xOffset: -0.6, zOffset: 0, yRotation: -1.1 },
  17: { xOffset: -1.2, zOffset: 0, yRotation: -1.3 },
  18: { xOffset: -1.9, zOffset: 0, yRotation: -1.5 },
  21: { xOffset: 0, zOffset: 0, yRotation: 0.1 },
  22: { xOffset: 0, zOffset: 0, yRotation: 0.4 },
  23: { xOffset: 0, zOffset: 0, yRotation: 0.6 },
  24: { xOffset: 0, zOffset: 0, yRotation: 0.7 },
  25: { xOffset: 0.2, zOffset: 0, yRotation: 0.9 },
  26: { xOffset: 0.6, zOffset: 0, yRotation: 1.1 },
  27: { xOffset: 1.2, zOffset: 0, yRotation: 1.3 },
  28: { xOffset: 1.9, zOffset: 0, yRotation: 1.5 },
  31: { xOffset: 0, zOffset: 0, yRotation: 0.1 },
  32: { xOffset: 0, zOffset: 0, yRotation: 0.4 },
  33: { xOffset: 0, zOffset: 0, yRotation: 0.6 },
  34: { xOffset: 0, zOffset: 0, yRotation: 0.7 },
  35: { xOffset: 0.2, zOffset: 0, yRotation: 0.9 },
  36: { xOffset: 0.6, zOffset: 0, yRotation: 1.1 },
  37: { xOffset: 1.2, zOffset: 0, yRotation: 1.3 },
  38: { xOffset: 1.9, zOffset: 0, yRotation: 1.5 },
  41: { xOffset: 0, zOffset: 0, yRotation: -0.1 },
  42: { xOffset: 0, zOffset: 0, yRotation: -0.4 },
  43: { xOffset: 0, zOffset: 0, yRotation: -0.6 },
  44: { xOffset: 0, zOffset: 0, yRotation: -0.7 },
  45: { xOffset: -0.2, zOffset: 0, yRotation: -0.9 },
  46: { xOffset: -0.6, zOffset: 0, yRotation: -1.1 },
  47: { xOffset: -1.2, zOffset: 0, yRotation: -1.3 },
  48: { xOffset: -1.9, zOffset: 0, yRotation: -1.5 }
}

// Exporta a cena como arquivo GLTF
function exportScene () {
  if (!scene) {
    console.error('Cena não inicializada.')
    return
  }
  const exporter = new THREE.GLTFExporter()
  exporter.parse(
    scene,
    gltf => {
      const gltfString = JSON.stringify(gltf)
      const blob = new Blob([gltfString], { type: 'text/plain' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'scene.gltf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
    },
    { binary: false },
    error => {
      console.error('Erro ao exportar a cena:', error)
      alert('Falha ao exportar a cena. Verifique o console para mais detalhes.')
    }
  )
}

// Exporta a cena para visualização em AR
function exportSceneToAR () {
  if (!scene) {
    console.error('Cena não inicializada.')
    return
  }
  const exporter = new THREE.GLTFExporter()
  exporter.parse(
    scene,
    gltf => {
      const gltfString = JSON.stringify(gltf)
      const base64Encoded = btoa(unescape(encodeURIComponent(gltfString)))
      const dataUri = 'data:application/octet-stream;base64,' + base64Encoded
      const modelViewer = document.querySelector('model-viewer')
      if (modelViewer) {
        modelViewer.src = dataUri
      } else {
        console.error('Elemento <model-viewer> não encontrado.')
      }
    },
    { binary: false },
    error => {
      console.error('Erro ao exportar a cena para AR:', error)
      alert(
        'Falha ao exportar a cena para AR. Verifique o console para mais detalhes.'
      )
    }
  )
}

// Desenha uma linha em forma de ferradura
function drawHorseshoeLine (radius, yOffset, zOffset, color) {
  const points = []
  const angleStep = Math.PI / 20
  for (let angle = 0; angle <= Math.PI; angle += angleStep) {
    points.push(
      new THREE.Vector3(
        radius * Math.cos(angle),
        yOffset,
        radius * Math.sin(angle) + zOffset
      )
    )
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  const material = new THREE.LineBasicMaterial({ color })
  const line = new THREE.Line(geometry, material)
  scene.add(line)
  return line
}

// Reseta a posição e rotação da câmera
function resetCamera () {
  if (!camera || !controls) {
    console.warn('Câmera ou controles não inicializados.')
    return
  }
  camera.position.set(-4.557234662107485, 5.707731258588391, 3.6693071528164074)
  camera.rotation.set(
    -0.7502251056739929,
    -0.59868862698796,
    -0.48364076767519576
  )
  camera.updateProjectionMatrix()
  controls.target.set(
    0.17756233020217607,
    1.178885826640126,
    -1.412923568387541
  )
  controls.update()
}

// Alterna entre play e pause da animação
function playPauseThreeJs () {
  if (!controls || typeof isAnimationPlaying === 'undefined') {
    console.warn('Controles ou estado de animação não inicializados.')
    return
  }
  const playPauseButton = document.getElementById('play_pause_button')
  if (!playPauseButton) {
    console.warn('Botão de play/pause não encontrado.')
    return
  }
  isAnimationPlaying = !isAnimationPlaying
  controls.autoRotate = isAnimationPlaying
  playPauseButton.innerHTML = isAnimationPlaying
    ? '<img src="../Gráfico Periodontal_files/svg/pause-solid.svg" height="14">'
    : '<img src="../Gráfico Periodontal_files/svg/play-solid.svg" height="14">'
}

// Determina a cor do trapézio com base nos dados de BOP (Bleeding on Probing)
function getColorForTrapezoid (tooth, trapezoidType) {
  let isRed = false
  let color
  switch (trapezoidType) {
    case 'bukkalDistal':
      isRed = tooth.bop.db === 1 || tooth.bop.b === 1
      color = isRed ? 0xff0000 : 0x0000ff
      break
    case 'bukkalMesial':
      isRed = tooth.bop.b === 1 || tooth.bop.mb === 1
      color = isRed ? 0xff0000 : 0x0000ff
      break
    case 'palatinalDistal':
      isRed =
        tooth.bop.dp === 1 ||
        tooth.bop.p === 1 ||
        tooth.bop.dl === 1 ||
        tooth.bop.l === 1
      color = isRed ? 0xff0000 : 0x0000ff
      break
    case 'palatinalMesial':
      isRed =
        tooth.bop.mp === 1 ||
        tooth.bop.p === 1 ||
        tooth.bop.ml === 1 ||
        tooth.bop.l === 1
      color = isRed ? 0xff0000 : 0x0000ff
      break
    case 'verbindungDistal':
      isRed = tooth.bop.dp === 1 || tooth.bop.dl === 1 || tooth.bop.db === 1
      color = isRed ? 0xff7c7c : 0x788fff
      break
    case 'verbindungMesial':
      isRed = tooth.bop.mp === 1 || tooth.bop.ml === 1 || tooth.bop.mb === 1
      color = isRed ? 0xff7c7c : 0x788fff
      break
    default:
      color = 0x0000ff
  }
  return color
}

// Inicializa o ambiente 3D
function initialize3DEnvironment () {
  console.log('Inicializando ambiente 3D...')
  if (!setupScene()) {
    console.error('Falha ao configurar a cena. Abortando inicialização.')
    return
  }
  setupOrientationHelpers()
  drawJawLines()
  if (!pockets || Object.keys(pockets).length === 0) {
    console.warn(
      'Dados de "pockets" não encontrados ou vazios. Adicionando apenas elementos básicos.'
    )
  } else {
    createToothTrapezoids(pockets, getColorForTrapezoid)
  }
  startAnimation()
}

// Inicializa o ambiente 3D para o gráfico sobreposto
function initializeSuperimposed3DEnvironment () {
  console.log('Inicializando ambiente 3D sobreposto...')
  if (!setupScene()) {
    console.error('Falha ao configurar a cena. Abortando inicialização.')
    return
  }
  setupOrientationHelpers()
  drawJawLines()
  if (!pockets || Object.keys(pockets).length === 0) {
    console.warn('Dados de "pockets" não encontrados ou vazios.')
  } else {
    createToothTrapezoids(pockets, () => 0x0000ff)
  }
  if (!superimposedPockets || Object.keys(superimposedPockets).length === 0) {
    console.warn('Dados de "superimposedPockets" não encontrados ou vazios.')
  } else {
    createToothTrapezoids(superimposedPockets, () => 0x09ff00, 0x90ee90)
  }
  startAnimation()
}

// Configura a cena, câmera, renderer e controles
function setupScene () {
  console.log('Configurando cena...')
  const threejsContainer = document.getElementById('threejs_modal')
  if (!threejsContainer) {
    console.error(
      'Contêiner threejs_modal não encontrado. Verifique se o elemento existe no DOM.'
    )
    return false
  }

  // Usa o canvas existente no HTML
  const existingCanvas = threejsContainer.querySelector('canvas')
  if (!existingCanvas) {
    console.error('Canvas não encontrado dentro de threejs_modal.')
    return false
  }

  // Garante que o canvas tenha as dimensões corretas
  existingCanvas.width = 968
  existingCanvas.height = 600
  existingCanvas.style.width = '968px'
  existingCanvas.style.height = '600px'
  existingCanvas.style.display = 'block'

  // Verifica se o contêiner tem dimensões válidas
  const rect = threejsContainer.getBoundingClientRect()
  if (rect.width === 0 || rect.height === 0) {
    console.warn(
      'Contêiner threejs_modal tem dimensões zeradas. Ajustando para 968x600.'
    )
    threejsContainer.style.width = '968px'
    threejsContainer.style.height = '600px'
  }

  if (!scene) {
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    console.log('Cena criada com fundo branco.')
  } else {
    while (scene.children.length > 0) {
      scene.remove(scene.children[0])
    }
    console.log('Cena limpa.')
  }

  if (!camera) {
    camera = new THREE.PerspectiveCamera(75, 968 / 600, 0.1, 1000)
    camera.position.set(
      -4.557234662107485,
      5.707731258588391,
      3.6693071528164074
    )
    camera.rotation.set(
      -0.7502251056739929,
      -0.59868862698796,
      -0.48364076767519576
    )
    console.log('Câmera criada e posicionada.')
  }

  if (!renderer) {
    renderer = new THREE.WebGLRenderer({
      canvas: existingCanvas, // Usa o canvas existente
      preserveDrawingBuffer: true,
      antialias: true
    })
    renderer.setSize(968, 600)
    console.log('Renderer criado e configurado com o canvas existente.')
  }

  if (!controls) {
    controls = new THREE.OrbitControls(camera, existingCanvas)
    controls.target.set(
      0.17756233020217607,
      1.178885826640126,
      -1.412923568387541
    )
    controls.autoRotate = true
    controls.autoRotateSpeed = -0.5
    controls.addEventListener('start', () => {
      controls.autoRotate = false
      isAnimationPlaying = false
      const playPauseButton = document.getElementById('play_pause_button')
      if (playPauseButton) {
        playPauseButton.innerHTML =
          '<img src="../Gráfico Periodontal_files/svg/play-solid.svg" height="14">'
      }
    })
    console.log('Controles OrbitControls criados.')
  }

  controls.update()
  return true
}

// Configura os ajudantes de orientação (plano, grade, eixos)
function setupOrientationHelpers () {
  console.log('Configurando ajudantes de orientação...')
  const planeGeometry = new THREE.PlaneGeometry(10, 10)
  const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xe0e0e0,
    side: THREE.DoubleSide
  })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.rotation.x = -Math.PI / 2
  plane.position.y = 0
  scene.add(plane)
  console.log('Plano adicionado.')

  const gridHelper = new THREE.GridHelper(10, 10)
  gridHelper.position.y = 0
  scene.add(gridHelper)
  console.log('Grade adicionada.')

  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)
  console.log('Eixos adicionados.')
}

// Desenha as linhas dos maxilares
function drawJawLines () {
  console.log('Desenhando linhas dos maxilares...')
  const upperJawRadius = 3.5
  const lowerJawRadius = 3
  const upperJawYOffset = 4.2
  const lowerJawYOffset = 1.8
  const zOffset = -2
  drawHorseshoeLine(upperJawRadius, upperJawYOffset, zOffset, 0x000000)
  drawHorseshoeLine(lowerJawRadius, lowerJawYOffset, zOffset, 0x000000)
  console.log('Linhas dos maxilares desenhadas.')
}

// Cria trapézios para os dentes
function createToothTrapezoids (
  pocketData,
  getColorFunc,
  verbindungColor = 0x788fff
) {
  console.log('Criando trapézios para os dentes...')
  for (const toothNumber in pocketData) {
    const tooth = pocketData[toothNumber]
    const toothData = toothPositions[toothNumber]
    if (!toothData || !tooth.present) {
      console.log(`Zahn ${toothNumber} não presente ou sem dados. Pulando.`)
      continue
    }

    const coordinates = tooth.coordinates
    if (!coordinates) {
      console.warn(
        `Coordenadas não encontradas para o dente ${toothNumber}. Pulando.`
      )
      continue
    }

    const isUpperJaw = tooth.jaw === 'upper'
    const { scaleFactor, offsetX, offsetY, additionalYOffsetValue } =
      getToothOffsets(isUpperJaw)
    const toothGroup = new THREE.Group()

    const trapezoids = [
      {
        type: 'bukkalDistal',
        coords: [
          { x: coordinates.x_db, y: coordinates.y_gm_db, z: 1, mirrorY: true },
          { x: coordinates.x_b, y: coordinates.y_gm_b, z: 1, mirrorY: true },
          { x: coordinates.x_b, y: coordinates.y_al_b, z: 1, mirrorY: true },
          { x: coordinates.x_db, y: coordinates.y_al_db, z: 1, mirrorY: true }
        ]
      },
      {
        type: 'bukkalMesial',
        coords: [
          { x: coordinates.x_b, y: coordinates.y_gm_b, z: 1, mirrorY: true },
          { x: coordinates.x_mb, y: coordinates.y_gm_mb, z: 1, mirrorY: true },
          { x: coordinates.x_mb, y: coordinates.y_al_mb, z: 1, mirrorY: true },
          { x: coordinates.x_b, y: coordinates.y_al_b, z: 1, mirrorY: true }
        ]
      },
      {
        type: 'palatinalDistal',
        coords: [
          {
            x: coordinates.x_dp,
            y: coordinates.y_gm_dp,
            z: -1,
            addYOffset: true
          },
          {
            x: coordinates.x_p,
            y: coordinates.y_gm_p,
            z: -1,
            addYOffset: true
          },
          {
            x: coordinates.x_p,
            y: coordinates.y_al_p,
            z: -1,
            addYOffset: true
          },
          {
            x: coordinates.x_dp,
            y: coordinates.y_al_dp,
            z: -1,
            addYOffset: true
          }
        ]
      },
      {
        type: 'palatinalMesial',
        coords: [
          {
            x: coordinates.x_p,
            y: coordinates.y_gm_p,
            z: -1,
            addYOffset: true
          },
          {
            x: coordinates.x_mp,
            y: coordinates.y_gm_mp,
            z: -1,
            addYOffset: true
          },
          {
            x: coordinates.x_mp,
            y: coordinates.y_al_mp,
            z: -1,
            addYOffset: true
          },
          { x: coordinates.x_p, y: coordinates.y_al_p, z: -1, addYOffset: true }
        ]
      },
      {
        type: 'verbindungDistal',
        coords: [
          { x: coordinates.x_db, y: coordinates.y_gm_db, z: 1, mirrorY: true },
          { x: coordinates.x_db, y: coordinates.y_al_db, z: 1, mirrorY: true },
          {
            x: coordinates.x_dp,
            y: coordinates.y_al_dp,
            z: -1,
            addYOffset: true
          },
          {
            x: coordinates.x_dp,
            y: coordinates.y_gm_dp,
            z: -1,
            addYOffset: true
          }
        ],
        colorOverride: verbindungColor
      },
      {
        type: 'verbindungMesial',
        coords: [
          { x: coordinates.x_mb, y: coordinates.y_gm_mb, z: 1, mirrorY: true },
          {
            x: coordinates.x_mp,
            y: coordinates.y_gm_mp,
            z: -1,
            addYOffset: true
          },
          {
            x: coordinates.x_mp,
            y: coordinates.y_al_mp,
            z: -1,
            addYOffset: true
          },
          { x: coordinates.x_mb, y: coordinates.y_al_mb, z: 1, mirrorY: true }
        ],
        colorOverride: verbindungColor
      }
    ]

    trapezoids.forEach(({ type, coords, colorOverride }) => {
      const vertices = new Float32Array(
        coords.flatMap(coord => {
          const scaled = scaleAndCenterCoordinates(
            coord.x,
            coord.y,
            coord.z,
            scaleFactor,
            offsetX,
            offsetY,
            coord.addYOffset,
            coord.mirrorY,
            additionalYOffsetValue
          )
          return [scaled.x, scaled.y, scaled.z]
        })
      )
      const color = colorOverride || getColorFunc(tooth, type)
      const { trapezoidMesh, edge } = createTrapezoid(vertices, color)
      toothGroup.add(trapezoidMesh, edge)
    })

    toothGroup.position.set(toothData.xOffset, 0, toothData.zOffset)
    toothGroup.rotation.y = toothData.yRotation
    if (verbindungColor === 0x90ee90) {
      toothGroup.scale.set(1.001, 1, 1.001)
    }
    scene.add(toothGroup)
    console.log(`Trapézios criados para o dente ${toothNumber}.`)
  }
}

// Cria um trapézio com bordas
function createTrapezoid (vertices, color) {
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3)
  )
  geometry.setIndex([0, 1, 2, 2, 3, 0])
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.7,
    side: THREE.DoubleSide
  })
  const trapezoidMesh = new THREE.Mesh(geometry, material)
  const edgeGeometry = new THREE.EdgesGeometry(geometry)
  const edgeMaterial = new THREE.LineBasicMaterial({
    color: 0x666666,
    linewidth: 1
  })
  const edge = new THREE.LineSegments(edgeGeometry, edgeMaterial)
  return { trapezoidMesh, edge }
}

// Escala e centraliza as coordenadas
function scaleAndCenterCoordinates (
  x,
  y,
  z,
  scaleFactor,
  offsetX,
  offsetY,
  addAdditionalYOffset = false,
  shouldMirrorY = false,
  additionalYOffsetValue
) {
  let newY = shouldMirrorY ? -y : y
  if (addAdditionalYOffset) {
    newY -= additionalYOffsetValue
  }
  return {
    x: (x - offsetX) / scaleFactor,
    y: (newY + offsetY) / scaleFactor,
    z: z / 5
  }
}

// Obtém os offsets para os dentes
function getToothOffsets (isUpperJaw) {
  return {
    scaleFactor: 100,
    offsetX: 680,
    offsetY: isUpperJaw ? 1000 : 1500,
    additionalYOffsetValue: isUpperJaw ? 1275 : 2500
  }
}

// Inicia a animação
function startAnimation () {
  console.log('Iniciando animação...')
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)
    if (controls) {
      controls.update()
    } else {
      console.warn('Controles não inicializados durante a animação.')
    }
    if (renderer && scene && camera) {
      renderer.render(scene, camera)
    } else {
      console.warn(
        'Renderer, cena ou câmera não inicializados durante a animação.'
      )
    }
  }
  animate()
  console.log('Loop de animação iniciado.')
}

// Reseta as áreas dos dentes
function resetToothAreas () {
  if (!pockets) {
    console.warn('Dados de "pockets" não encontrados.')
    return
  }
  for (const toothNumber in pockets) {
    if (Object.prototype.hasOwnProperty.call(pockets, toothNumber)) {
      pockets[toothNumber].initializeAreas()
    }
  }
}

// Reseta as áreas dos dentes no gráfico sobreposto
function resetSuperimposedToothAreas () {
  if (!superimposedPockets) {
    console.warn('Dados de "superimposedPockets" não encontrados.')
    return
  }
  for (const toothNumber in superimposedPockets) {
    if (
      Object.prototype.hasOwnProperty.call(superimposedPockets, toothNumber)
    ) {
      superimposedPockets[toothNumber].initializeAreas()
    }
  }
}
