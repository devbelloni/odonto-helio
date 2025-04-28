async function saveFormData() {
  try {
    // Obter os dados do formulário
    const firstName = document.getElementById('input_patient_first_name')?.value?.trim() || '';
    const lastName = document.getElementById('input_patient_last_name')?.value?.trim() || '';
    const nomePaciente = `${firstName} ${lastName}`.trim();
    let dataExame = document.getElementById('input_date')?.value;

    // Validar os campos obrigatórios
    if (!nomePaciente) {
      alert('Por favor, informe o nome completo do paciente.');
      return;
    }
    if (!dataExame) {
      alert('Por favor, informe a data do exame.');
      return;
    }

    // Converter a data do formato DD/MM/AAAA para AAAA-MM-DD
    if (dataExame.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
      const [dia, mes, ano] = dataExame.split('/');
      dataExame = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
    }

    // Validar o formato da data
    const dataExameValida = new Date(dataExame);
    if (isNaN(dataExameValida.getTime())) {
      alert('A data do exame é inválida. Use o formato DD/MM/AAAA (ex.: 11/04/2025).');
      return;
    }

    // Preparar os dados para a tabela Periograma
    const periogramaData = {
      id_paciente: null,
      data_exame: dataExame,
      indice_de_placa: parseFloat(document.getElementById('output_mean_pi')?.value || 0) > 0,
      indice_sangramento_gengival: parseFloat(document.getElementById('output_mean_bop')?.value || 0) > 0,
      profundidade_sondagem: parseFloat(document.getElementById('output_mean_pd')?.value || 0),
      nivel_clinico_insercao: parseFloat(document.getElementById('output_mean_al')?.value || 0),
      sangramento_sondagem: false,
      supuracao: false,
      mobilidade_dentaria: 0,
      furca: null,
      perda_ossea: null,
      recessao_gengival: '',
      observacoes: ''
    };

    // Verificar sangramento_sondagem
    for (let dente = 11; dente <= 48; dente++) {
      if (![19, 20, 29, 30, 39, 40].includes(dente)) {
        const regioes = ['db', 'b', 'mb', 'dp', 'p', 'mp', 'dl', 'l', 'ml'];
        for (const regiao of regioes) {
          const bopElement = document.getElementById(`bop_${dente}_${regiao}_rectangle`);
          if (bopElement && bopElement.style.display !== 'none') {
            periogramaData.sangramento_sondagem = true;
            break;
          }
        }
      }
    }

    // Calcular mobilidade_dentaria (maior valor)
    let maxMobilidade = 0;
    // Corrigido: usar dente++ em vez de d++
    for (let dente = 11; dente <= 48; dente++) {
      if (![19, 20, 29, 30, 39, 40].includes(dente)) {
        const valor = parseInt(document.getElementById(`mobility_${dente}_txt`)?.value || 0, 10);
        if (!isNaN(valor) && valor > maxMobilidade) maxMobilidade = valor;
      }
    }
    periogramaData.mobilidade_dentaria = maxMobilidade;

    // Calcular furca (maior grau)
    let maxFurca = null;
    for (let dente = 11; dente <= 48; dente++) {
      if (![19, 20, 29, 30, 39, 40].includes(dente)) {
        const faces = ['b', 'p', 'dp', 'mp', 'l', 'dl', 'ml'];
        for (const face of faces) {
          for (let grau = 1; grau <= 3; grau++) {
            const furcaElement = document.getElementById(`furkation_${grau}_${dente}_${face}_tab`);
            if (furcaElement && furcaElement.style.display !== 'none') {
              maxFurca = Math.max(maxFurca || 0, grau);
            }
          }
        }
      }
    }
    periogramaData.furca = maxFurca;

    // Concatenar recessao_gengival (GM negativos)
    const recessao = [];
    for (let dente = 11; dente <= 48; dente++) {
      if (![19, 20, 29, 30, 39, 40].includes(dente)) {
        const regioes = ['db', 'b', 'mb', 'dp', 'p', 'mp', 'dl', 'l', 'ml'];
        for (const regiao of regioes) {
          const gmValue = parseFloat(document.getElementById(`gm_${dente}_${regiao}_txt`)?.value || 0);
          if (!isNaN(gmValue) && gmValue < 0) {
            recessao.push(`Dente ${dente} (${regiao}): ${gmValue}mm`);
          }
        }
      }
    }
    periogramaData.recessao_gengival = recessao.join('; ');

    // Concatenar observacoes
    const observacoes = [];
    for (let dente = 11; dente <= 48; dente++) {
      if (![19, 20, 29, 30, 39, 40].includes(dente)) {
        const nota = document.getElementById(`note_${dente}_txt`)?.value?.trim();
        if (nota) observacoes.push(`Dente ${dente}: ${nota}`);
      }
    }
    periogramaData.observacoes = observacoes.join('; ');

    // Obter o formulário
    const form = document.getElementById('periograma_form');
    if (!form) {
      throw new Error('Formulário com ID "periograma_form" não encontrado.');
    }

    // Limpar campos ocultos anteriores (para evitar duplicatas)
    form.querySelectorAll('input[type="hidden"]').forEach(input => input.remove());

    // Função para adicionar um campo oculto
    const addHiddenInput = (name, value) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value ?? '';
      form.appendChild(input);
    };

    // Adicionar os campos ocultos com os dados processados
    addHiddenInput('nome_paciente', nomePaciente);
    addHiddenInput('data_exame', periogramaData.data_exame);
    addHiddenInput('indice_de_placa', periogramaData.indice_de_placa ? 1 : 0);
    addHiddenInput('indice_sangramento_gengival', periogramaData.indice_sangramento_gengival ? 1 : 0);
    addHiddenInput('profundidade_sondagem', periogramaData.profundidade_sondagem);
    addHiddenInput('nivel_clinico_insercao', periogramaData.nivel_clinico_insercao);
    addHiddenInput('sangramento_sondagem', periogramaData.sangramento_sondagem ? 1 : 0);
    addHiddenInput('supuracao', periogramaData.supuracao ? 1 : 0);
    addHiddenInput('mobilidade_dentaria', periogramaData.mobilidade_dentaria);
    addHiddenInput('furca', periogramaData.furca ?? '');
    addHiddenInput('perda_ossea', periogramaData.perda_ossea ?? '');
    addHiddenInput('recessao_gengival', periogramaData.recessao_gengival);
    addHiddenInput('observacoes', periogramaData.observacoes);

    // Garantir que o formulário aponte para o script PHP correto (opcional, se já definido no form)
    form.action = 'save_periograma.php';
    form.method = 'POST';

    // Pequeno delay para garantir que os inputs ocultos estejam no DOM
    await new Promise(resolve => setTimeout(resolve, 50));

    // Enviar o formulário usando requestSubmit (garante o disparo dos handlers de submit, se houverem)
    form.requestSubmit();
  } catch (error) {
    console.error('Erro ao salvar periograma:', error);
    alert(`Erro ao salvar periograma: ${error.message}. Verifique os dados e tente novamente.`);
  }
}
