// Função para abrir o modal de análise
function open_analysis() {
    const modal_analysis = document.getElementById("modal_analysis");
    modal_analysis.style.display = 'block';

    // Verifica o estado dos gráficos e renderiza a análise correspondente
    if (showSuperimposedChart) {
        render_superimposed_analysis(jsonObj1, jsonObj2);
    } else if (showChart2) {
        const jsonString = form_to_JSON();
        jsonObj2 = JSON.parse(jsonString);
        render_analysis(jsonObj2);
    } else {
        const jsonString = form_to_JSON();
        jsonObj1 = JSON.parse(jsonString);
        render_analysis(jsonObj1);
    }

    // Fecha o modal ao clicar fora dele
    window.onclick = (event_analysis) => {
        if (event_analysis.target === modal_analysis) {
            modal_analysis.style.display = 'none';
        }
    };
}

// Função para fechar o modal de análise
function close_analysis() {
    document.getElementById('modal_analysis').style.display = 'none';
}

// Função para abrir o modal de configurações
function open_settings() {
    const modal_settings = document.getElementById("modal_settings");
    modal_settings.style.display = 'block';

    // Fecha o modal ao clicar fora dele
    window.onclick = (event_settings) => {
        if (event_settings.target === modal_settings) {
            modal_settings.style.display = 'none';
        }
    };
}

// Função para fechar o modal de configurações
function close_settings() {
    document.getElementById('modal_settings').style.display = 'none';
}

// Função para abrir o modal de ST/BOP
function open_pd_bop() {
    const modal_pd_bop = document.getElementById("modal_pd_bop");
    modal_pd_bop.style.display = 'block';

    // Verifica o estado do gráfico superposto e renderiza os dados ST/BOP
    if (showSuperimposedChart) {
        render_superimposed_pi_pd_bop(jsonObj1, jsonObj2);
    } else {
        render_pi_pd_bop();
    }

    // Restaura os objetos JSON de backup
    jsonObj1 = backupJsonObj1;
    jsonObj2 = backupJsonObj2;

    // Fecha o modal ao clicar fora dele
    window.onclick = (event_pd_bop) => {
        if (event_pd_bop.target === modal_pd_bop) {
            modal_pd_bop.style.display = 'none';
        }
    };
}

// Função para fechar o modal de ST/BOP
function close_pd_bop() {
    document.getElementById('modal_pd_bop').style.display = 'none';
}

// Função para abrir o modal de QR code
function open_qr() {
    const modal_qr = document.getElementById("modal_qr");
    modal_qr.style.display = 'block';

    // Gera e exibe o QR code com os dados comprimidos do formulário
    const compressedjsonString = form_to_compressed_JSON();
    const qr_igm_src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${compressedjsonString}`;
    document.getElementById("qr_img").src = qr_igm_src;

    // Configura o botão para abrir o URL do QR code
    const qr_report_url = compressedjsonString;
    const qr_button_url = `window.open('${qr_report_url}')`;
    document.getElementById('open_button_qr').setAttribute('onclick', qr_button_url);

    // Fecha o modal ao clicar fora dele
    window.onclick = (event_qr) => {
        if (event_qr.target === modal_qr) {
            modal_qr.style.display = 'none';
        }
    };
}

// Função para fechar o modal de QR code
function close_qr() {
    document.getElementById('modal_qr').style.display = 'none';
}

// Função para abrir o modal de visualização 3D
function open_threejs() {
    const modal_threejs = document.getElementById("modal_threejs");
    modal_threejs.style.display = 'block';

    // Verifica o estado do gráfico e inicializa o ambiente 3D
    if (showChart2) {
        const jsonString = form_to_JSON();
        jsonObj2 = JSON.parse(jsonString);
        assignJsonDataToObject(jsonObj2);
        initialize3DEnvironment();
        render_surfaces();
    } else if (!showSuperimposedChart) {
        const jsonString = form_to_JSON();
        jsonObj1 = JSON.parse(jsonString);
        assignJsonDataToObject(jsonObj1);
        initialize3DEnvironment();
        render_surfaces();
    }

    // Reseta a câmera para a posição inicial
    resetCamera();

    // Fecha o modal ao clicar fora dele
    window.onclick = (event_threejs) => {
        if (event_threejs.target === modal_threejs) {
            modal_threejs.style.display = 'none';
        }
    };
}

// Função para fechar o modal de visualização 3D
function close_threejs() {
    document.getElementById('modal_threejs').style.display = 'none';
}

// Função para abrir o modal de contato
function open_contact() {
    const modal_contact = document.getElementById("modal_contact");
    modal_contact.style.display = 'block';

    // Fecha o modal ao clicar fora dele
    window.onclick = (event_contact) => {
        if (event_contact.target === modal_contact) {
            modal_contact.style.display = 'none';
        }
    };
}

// Função para fechar o modal de contato
function close_contact() {
    document.getElementById('modal_contact').style.display = 'none';
}

// Função para abrir o modal de YouTube
function open_youtube() {
    const modal_youtube = document.getElementById("modal_youtube");
    modal_youtube.style.display = 'block';

    // Fecha o modal ao clicar fora dele
    window.onclick = (event_youtube) => {
        if (event_youtube.target === modal_youtube) {
            modal_youtube.style.display = 'none';
        }
    };
}

// Função para fechar o modal de YouTube
function close_youtube() {
    document.getElementById('modal_youtube').style.display = 'none';
}