// Função para salvar os dados no disco
function save_to_hd () {
  const jsonString = form_to_JSON()
  if (!jsonString) {
    console.error('Erro: Não foi possível obter os dados do formulário.')
    alert('Falha ao iniciar o download. Tente novamente.')
    return
  }
  const hiddenElement = document.createElement('a')
  hiddenElement.href =
    'data:application/json;charset=utf-8,' + encodeURIComponent(jsonString)
  hiddenElement.download = 'periodontalchart_data.json'
  hiddenElement.click()
  hiddenElement.remove()
  alert('Download iniciado com sucesso!')
}
