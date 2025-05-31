// load from hd
function load_from_hd() {
    // Função para criar e exibir o modal dinâmico
    function criarModalPaciente(pacientes) {
        // Cria o overlay
        const overlay = document.createElement('div');
        overlay.id = 'modalOverlay';
        overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 999;';
        document.body.appendChild(overlay);

        // Cria o modal
        const modal = document.createElement('div');
        modal.id = 'modalSelecionarPaciente';
        modal.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0,0,0,0.5); z-index: 1000;';
        
        // Título
        const titulo = document.createElement('h3');
        titulo.textContent = 'Selecionar Paciente';
        modal.appendChild(titulo);

        // Dropdown
        const select = document.createElement('select');
        select.id = 'selectPacienteId';
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Selecione um paciente';
        select.appendChild(defaultOption);

        // Preenche o dropdown com IDs
        pacientes.forEach(id => {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = `Paciente ${id}`; // Personalize se houver nomes
            select.appendChild(option);
        });
        modal.appendChild(select);

        // Div para botões
        const divBotoes = document.createElement('div');
        divBotoes.style.marginTop = '10px';
        
        // Botão Confirmar
        const btnConfirmar = document.createElement('button');
        btnConfirmar.textContent = 'Confirmar';
        btnConfirmar.onclick = confirmarSelecaoPaciente;
        divBotoes.appendChild(btnConfirmar);

        // Botão Cancelar
        const btnCancelar = document.createElement('button');
        btnCancelar.textContent = 'Cancelar';
        btnCancelar.onclick = fecharModalPaciente;
        btnCancelar.style.marginLeft = '10px';
        divBotoes.appendChild(btnCancelar);

        modal.appendChild(divBotoes);
        document.body.appendChild(modal);
    }

    // Função para fechar o modal
    window.fecharModalPaciente = function() {
        const modal = document.getElementById('modalSelecionarPaciente');
        const overlay = document.getElementById('modalOverlay');
        if (modal) modal.remove();
        if (overlay) overlay.remove();
    };

    // Função para confirmar a seleção
    window.confirmarSelecaoPaciente = function() {
        const select = document.getElementById('selectPacienteId');
        if (!select) {
            console.error("Dropdown 'selectPacienteId' não encontrado");
            alert("Erro: Dropdown de seleção não encontrado.");
            return;
        }

        const pacienteId = select.value;
        if (!pacienteId) {
            alert("Por favor, selecione um paciente.");
            return;
        }

        console.log("Carregando periograma para paciente ID:", pacienteId);

        fetch(`buscar_periograma_json.php?id_paciente=${encodeURIComponent(pacienteId)}`)
            .then(response => {
                console.log("Resposta do servidor:", response.status, response.statusText);
                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(dados => {
                console.log("Dados recebidos:", dados);

                if (dados && dados.erro) {
                    console.warn("Erro retornado pelo servidor:", dados.erro);
                    alert(`Erro: ${dados.erro}`);
                    return;
                }

                if (!dados || typeof dados !== 'object' || Array.isArray(dados)) {
                    console.error("Dados inválidos:", dados);
                    alert("Formato de dados inválido retornado do banco.");
                    return;
                }

                console.log("Estrutura do JSON:", JSON.stringify(Object.keys(dados), null, 2));

                jsonObj1 = dados;
                backupJsonObj1 = JSON.parse(JSON.stringify(dados));

                renderingChart1();
                fecharModalPaciente(); // Fecha o modal
            })
            .catch(erro => {
                console.error("Erro no fetch:", erro.message);
                alert("Erro ao carregar dados do banco. Verifique a conexão ou o ID do paciente.");
            });
    };

    // Busca a lista de pacientes
    fetch('listar_pacientes.php')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                console.warn("Erro ao listar pacientes:", data.erro);
                alert(`Erro: ${data.erro}`);
                return;
            }

            if (!data.pacientes || data.pacientes.length === 0) {
                console.warn("Nenhum paciente encontrado");
                alert("Nenhum paciente disponível para seleção.");
                return;
            }

            criarModalPaciente(data.pacientes);
        })
        .catch(erro => {
            console.error("Erro ao buscar lista de pacientes:", erro.message);
            alert("Erro ao carregar lista de pacientes. Verifique a conexão.");
        });
}

// Função de renderização (mantida do código antigo)
function renderingChart1() {
    console.log("Iniciando renderingChart1 com jsonObj1:", jsonObj1);

    // Renderiza o formulário
    const formPromise = render_form(jsonObj1); // Captura o retorno de render_form
    assignJsonDataToObject(jsonObj1);

    // Aguarda render_form se for assíncrono
    Promise.resolve(formPromise).then(() => {
        console.log("render_form concluído, chamando render_pi_pd_bop");
        render_pi_pd_bop(); // Chama após o formulário estar pronto
        initialize3DEnvironment();
        render_surfaces();
        render_analysis(jsonObj1);
        renderEmptyBaderstenTable();
        renderEmptyBaderstenChart();
        renderEmptyRamseierTable();
        renderEmptyRamseierChart();

        // Manipulação de botões
        var button = document.getElementById('menu_button_show_chart1');
        if (button) {
            button.style.display = 'block';
            button.style.backgroundColor = 'lightgreen';
            button.style.pointerEvents = 'auto';
        } else {
            console.warn("Botão 'menu_button_show_chart1' não encontrado");
        }

        button = document.getElementById('menu_button_save_to_hd');
        if (button) {
            button.style.color = 'black';
            button.style.pointerEvents = 'auto';
            var image = button.querySelector('img');
            if (image) {
                image.src = '../img/svg fa/download-solid.svg';
            } else {
                console.warn("Imagem em 'menu_button_save_to_hd' não encontrada");
            }
        } else {
            console.warn("Botão 'menu_button_save_to_hd' não encontrado");
        }

        button = document.getElementById('menu_button_load_from_hd');
        if (button) {
            button.style.display = 'none';
        } else {
            console.warn("Botão 'menu_button_load_from_hd' não encontrado");
        }

        button = document.getElementById('menu_button_load_superimposed_from_hd');
        if (button) {
            button.style.color = 'black';
            button.style.pointerEvents = 'auto';
            var image = button.querySelector('img');
            if (image) {
                image.src = '../img/svg/fa/download-chart-solid.svg';
            } else {
                console.warn("Imagem em 'menu_button_load_superimposed_from_hd' não encontrada");
            }
        } else {
            console.warn("Botão 'menu_button_load_superimposed_from_hd' não encontrado");
        }

        if (showChart2) {
            button = document.getElementById('menu_button_show_chart2');
            if (button) {
                button.style.backgroundColor = '#F9F9F9';
            } else {
                console.warn("Botão 'menu_button_show_chart2' não encontrado");
            }
        }

        chart1 = true;

        if (chart1 && chart2) {
            button = document.getElementById('menu_button_show_supperimposed_chart');
            if (button) {
                button.style.color = 'black';
                button.style.pointerEvents = 'auto';
                image = button.querySelector('img');
                if (image) {
                    image.src = '../img/svg/fa/clone-solid.svg';
                } else {
                    console.warn("Imagem em 'menu_button_show_supperimposed_chart' não encontrada");
                }
            } else {
                console.warn("Botão 'menu_button_show_supperimposed_chart' não encontrado");
            }
        }

        showChart1 = true;
        showChart2 = false;
        showSuperimposedChart = false;

        console.log("renderingChart1 concluído");
    }).catch(err => {
        console.error("Erro em renderingChart1:", err);
    });
}