// Função para renderizar a análise de dados odontológicos a partir de um objeto JSON
function render_analysis (jsonObj1) {
  // Filtra chaves que começam com 'bop_' e 'pd_' para identificar dentes presentes
  let bop_keys = Object.keys(jsonObj1).filter(key => key.startsWith('bop_')) // Lista de chaves 'bop_'
  let pd_keys = Object.keys(jsonObj1).filter(key => key.startsWith('pd_')) // Lista de chaves 'pd_'
  let bop_tooth_numbers = bop_keys.map(key => key.split('_')[1]) // Extrai números dos dentes das chaves 'bop_'
  let pd_tooth_numbers = pd_keys.map(key => key.split('_')[1]) // Extrai números dos dentes das chaves 'pd_'
  let num_bop_present = bop_tooth_numbers.filter(
    tooth_number => jsonObj1[`tooth_${tooth_number}`] == '1'
  ).length // Conta dentes presentes (valor '1') para 'bop_'
  let num_pd_present = pd_tooth_numbers.filter(
    tooth_number => jsonObj1[`tooth_${tooth_number}`] == '1'
  ).length // Conta dentes presentes (valor '1') para 'pd_'

  // Conta chaves 'bop_' e 'pi_' com valor '1' e dente presente
  let num_bop_present_value_1 = Object.entries(jsonObj1).filter(
    ([key, value]) =>
      key.startsWith('bop_') &&
      value == '1' &&
      jsonObj1[`tooth_${key.split('_')[1]}`] == '1'
  ).length // Conta 'bop_' com valor '1' e dente presente
  let num_pi_present_value_1 = Object.entries(jsonObj1).filter(
    ([key, value]) =>
      key.startsWith('pi_') &&
      value == '1' &&
      jsonObj1[`tooth_${key.split('_')[1]}`] == '1'
  ).length // Conta 'pi_' com valor '1' e dente presente

  // Calcula percentuais de 'bop_' e 'pi_' com valor '1'
  let percentage_bop_value_1 = (num_bop_present_value_1 / num_bop_present) * 100 // Percentual de 'bop_' com valor '1'
  let percentage_pi_value_1 = (num_pi_present_value_1 / num_bop_present) * 100 // Percentual de 'pi_' com valor '1'

  // Conta chaves 'pd_' com valores '5', '4' e maior que '5' para dentes presentes
  let num_pd_present_value_5 = Object.entries(jsonObj1).filter(
    ([key, value]) =>
      key.startsWith('pd_') &&
      value == '5' &&
      jsonObj1[`tooth_${key.split('_')[1]}`] == '1'
  ).length // Conta 'pd_' com valor '5' e dente presente
  let num_pd_present_value_4 = Object.entries(jsonObj1).filter(
    ([key, value]) =>
      key.startsWith('pd_') &&
      value == '4' &&
      jsonObj1[`tooth_${key.split('_')[1]}`] == '1'
  ).length // Conta 'pd_' com valor '4' e dente presente
  let num_pd_present_value_greater_5 = Object.entries(jsonObj1).filter(
    ([key, value]) =>
      key.startsWith('pd_') &&
      parseInt(value) > 5 &&
      jsonObj1[`tooth_${key.split('_')[1]}`] == '1'
  ).length // Conta 'pd_' com valor maior que '5' e dente presente

  // Calcula percentuais de 'pd_' para valores '5', '4' e maior que '5'
  let percentage_pd_value_5 = (num_pd_present_value_5 / num_pd_present) * 100 // Percentual de 'pd_' com valor '5'
  let percentage_pd_value_4 = (num_pd_present_value_4 / num_pd_present) * 100 // Percentual de 'pd_' com valor '4'
  let percentage_pd_value_greater_5 =
    (num_pd_present_value_greater_5 / num_pd_present) * 100 // Percentual de 'pd_' com valor maior que '5'

  // Calcula médias de 'pd_' e 'gm_' para dentes presentes
  let pd_values = Object.entries(jsonObj1)
    .filter(
      ([key, value]) =>
        key.startsWith('pd_') && jsonObj1[`tooth_${key.split('_')[1]}`] == '1'
    )
    .map(([key, value]) => parseInt(value)) // Valores de 'pd_' para dentes presentes
  let gm_values = Object.entries(jsonObj1)
    .filter(
      ([key, value]) =>
        key.startsWith('gm_') && jsonObj1[`tooth_${key.split('_')[1]}`] == '1'
    )
    .map(([key, value]) => parseInt(value)) // Valores de 'gm_' para dentes presentes
  let average_pd = pd_values.reduce((a, b) => a + b, 0) / pd_values.length // Média dos valores de 'pd_'
  let average_gm = gm_values.reduce((a, b) => a + b, 0) / gm_values.length // Média dos valores de 'gm_'

  // Conta o número total de dentes presentes
  let num_teeth_present = Object.entries(jsonObj1).filter(
    ([key, value]) => key.startsWith('tooth_') && value == '1'
  ).length // Total de dentes com valor '1'
  let average_cal = -1 * (average_pd - average_gm) // Calcula CAL (nível de inserção clínica) como -(média pd - média gm)

  // Insere os valores calculados nos elementos HTML da análise
  document.getElementById('date1').textContent = jsonObj1.date // Define a data no elemento 'date1'
  document.getElementById('date2').textContent = jsonObj1.date // Define a data no elemento 'date2'
  document.getElementById('var1').textContent = num_teeth_present // Número de dentes presentes
  document.getElementById('var2').textContent = Math.round(
    percentage_pi_value_1
  ) // Percentual de 'pi_' arredondado
  document.getElementById('var3').textContent = percentage_pd_value_4.toFixed(1) // Percentual de 'pd_' com valor '4'
  document.getElementById('var4').textContent = percentage_pd_value_5.toFixed(1) // Percentual de 'pd_' com valor '5'
  document.getElementById('var5').textContent =
    percentage_pd_value_greater_5.toFixed(1) // Percentual de 'pd_' com valor maior que '5'
  document.getElementById('var6').textContent = average_pd.toFixed(1) // Média de 'pd_'
  document.getElementById('var7').textContent = average_gm.toFixed(1) // Média de 'gm_'
  document.getElementById('var8').textContent = average_cal.toFixed(1) // Valor de CAL
  document.getElementById('var9').textContent = Math.round(
    percentage_bop_value_1
  ) // Percentual de 'bop_' arredondado

  // Ajusta a largura das barras visuais no modal de análise
  var piElement = document.getElementById('pi')
  piElement.style.width = Math.round(percentage_pi_value_1 * 3) + 'px' // Largura da barra de 'pi_'
  var piElement = document.getElementById('fourmm')
  piElement.style.width = percentage_pd_value_4.toFixed(1) * 3 + 'px' // Largura da barra de 'pd_' com valor '4'
  var piElement = document.getElementById('fivemm')
  piElement.style.width = percentage_pd_value_5.toFixed(1) * 3 + 'px' // Largura da barra de 'pd_' com valor '5'
  var piElement = document.getElementById('afivemm')
  piElement.style.width = percentage_pd_value_greater_5.toFixed(1) * 3 + 'px' // Largura da barra de 'pd_' com valor maior que '5'
  var piElement = document.getElementById('bop')
  piElement.style.width = Math.round(percentage_bop_value_1 * 3) + 'px' // Largura da barra de 'bop_'

  // Limpa os elementos HTML da segunda análise (caso não haja dados secundários)
  document.getElementById('seconddate1').textContent = '' // Limpa 'seconddate1'
  document.getElementById('seconddate2').textContent = '' // Limpa 'seconddate2'
  document.getElementById('secondvar1').textContent = '' // Limpa 'secondvar1'
  document.getElementById('secondvar2').textContent = '' // Limpa 'secondvar2'
  document.getElementById('secondvar3').textContent = '' // Limpa 'secondvar3'
  document.getElementById('secondvar4').textContent = '' // Limpa 'secondvar4'
  document.getElementById('secondvar5').textContent = '' // Limpa 'secondvar5'
  document.getElementById('secondvar6').textContent = '' // Limpa 'secondvar6'
  document.getElementById('secondvar7').textContent = '' // Limpa 'secondvar7'
  document.getElementById('secondvar8').textContent = '' // Limpa 'secondvar8'
  document.getElementById('secondvar9').textContent = '' // Limpa 'secondvar9'

  // Zera a largura das barras visuais da segunda análise
  piElement = document.getElementById('secondpi')
  piElement.style.width = '0px' // Zera largura de 'secondpi'
  piElement = document.getElementById('secondfourmm')
  piElement.style.width = '0px' // Zera largura de 'secondfourmm'
  piElement = document.getElementById('secondfivemm')
  piElement.style.width = '0px' // Zera largura de 'secondfivemm'
  piElement = document.getElementById('secondafivemm')
  piElement.style.width = '0px' // Zera largura de 'secondafivemm'
  piElement = document.getElementById('secondbop')
  piElement.style.width = '0px' // Zera largura de 'secondbop'
}
