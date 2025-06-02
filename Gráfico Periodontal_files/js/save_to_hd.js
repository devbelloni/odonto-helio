// Função para salvar os dados do formulário e enviar o JSON para o servidor
function save_to_hd() {
  try {
    const jsonString = form_to_JSON(); // ← verificar se retorna objeto ou string!

    if (!jsonString) {
      console.error('Erro: Não foi possível obter os dados do formulário.');
      alert('Falha ao salvar: Formulário inválido.');
      return;
    }

    console.log('JSON pronto para envio:', jsonString);

    fetch('salvar_periograma.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: typeof jsonString === 'string' ? jsonString : JSON.stringify(jsonString)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      return response.text(); // ← usar text para debug
    })
    .then(text => {
      console.log('Resposta bruta do servidor:', text);
      try {
        const data = JSON.parse(text);
        console.log('Resposta JSON:', data);
        alert(data.mensagem || 'Salvo com sucesso!');
      } catch (e) {
        console.error('Não foi possível converter para JSON:', e);
        alert('Erro: Resposta inesperada do servidor.');
      }
    })
    .catch(err => {
      console.error('Erro ao salvar periograma:', err);
      alert(`Erro ao salvar periograma: ${err.message}`);
    });

  } catch (error) {
    console.error('Erro inesperado ao salvar periograma:', error);
    alert(`Erro inesperado: ${error.message}`);
  }
}
