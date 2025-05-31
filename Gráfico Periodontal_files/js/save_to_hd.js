// Função para salvar os dados no banco de dados
function save_to_hd() {
  const jsonString = form_to_JSON();

  if (!jsonString) {
    console.error('Erro: Não foi possível obter os dados do formulário.');
    alert('Falha ao salvar no banco. Tente novamente.');
    return;
  }

  fetch('salvar_periograma.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonString
  })
    .then(response => response.json())
    .then(resultado => {
      alert(resultado.mensagem);
    })
    .catch(erro => {
      console.error('Erro ao salvar no banco:', erro);
      alert('Erro ao salvar no banco de dados.');
    });
}
