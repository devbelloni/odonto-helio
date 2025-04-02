// Função principal para realizar cálculos odontológicos
function calc () {
  // Lista de dentes por quadrante (1 a 4) usando a notação FDI
  const teethQuadrants = {
    quadrant1: [18, 17, 16, 15, 14, 13, 12, 11], // Quadrante superior direito
    quadrant2: [28, 27, 26, 25, 24, 23, 22, 21], // Quadrante superior esquerdo
    quadrant3: [38, 37, 36, 35, 34, 33, 32, 31], // Quadrante inferior esquerdo
    quadrant4: [48, 47, 46, 45, 44, 43, 42, 41] // Quadrante inferior direito
  }

  // Calcula o número total de dentes presentes somando os valores de cada quadrante
  let num_teeth_1 = teethQuadrants.quadrant1.reduce(
    (sum, tooth) => sum + (window[`tooth_${tooth}`] || 0),
    0
  )
  let num_teeth_2 = teethQuadrants.quadrant2.reduce(
    (sum, tooth) => sum + (window[`tooth_${tooth}`] || 0),
    0
  )
  let num_teeth_3 = teethQuadrants.quadrant3.reduce(
    (sum, tooth) => sum + (window[`tooth_${tooth}`] || 0),
    0
  )
  let num_teeth_4 = teethQuadrants.quadrant4.reduce(
    (sum, tooth) => sum + (window[`tooth_${tooth}`] || 0),
    0
  )
  let num_teeth = num_teeth_1 + num_teeth_2 + num_teeth_3 + num_teeth_4 // Total de dentes presentes

  // Função auxiliar para calcular a soma de PD (profundidade de sondagem) para um dente
  function calculatePdSum (toothNumber) {
    if (window[`tooth_${toothNumber}`] != 1) return 0 // Retorna 0 se o dente não estiver presente

    // Define os pontos de medição dependendo do quadrante (superior ou inferior)
    const isUpperQuadrant = toothNumber < 30 // Dentes superiores (quadrantes 1 e 2)
    const points = isUpperQuadrant
      ? ['db', 'b', 'mb', 'dp', 'p', 'mp'] // Pontos para dentes superiores
      : ['db', 'b', 'mb', 'dl', 'l', 'ml'] // Pontos para dentes inferiores

    // Soma os valores de PD para cada ponto do dente
    return points.reduce((sum, point) => {
      const value = window[`pd_${toothNumber}_${point}`] || 0
      return sum + (parseInt(value) || 0)
    }, 0)
  }

  // Calcula a soma de PD para todos os dentes
  let sum_pd = 0
  for (const quadrant in teethQuadrants) {
    teethQuadrants[quadrant].forEach(tooth => {
      window[`sum_pd_${tooth}`] = calculatePdSum(tooth) // Armazena a soma para cada dente
      sum_pd += window[`sum_pd_${tooth}`] // Adiciona à soma total
    })
  }

  // Calcula a média de PD (profundidade de sondagem) com arredondamento
  let pd_average = num_teeth > 0 ? (10 * sum_pd) / (num_teeth * 6) : 0
  pd_average = Math.round(pd_average) / 10 // Arredonda para uma casa decimal

  // Atualiza o campo de saída com a média de PD
  document.forms[0]['output_mean_pd'].value = num_teeth > 0 ? pd_average : 0

  // Função auxiliar para calcular a soma de AL (nível de inserção clínica) para um dente
  function calculateAlSum (toothNumber) {
    if (window[`tooth_${toothNumber}`] != 1) return 0 // Retorna 0 se o dente não estiver presente

    // Define os pontos de medição dependendo do quadrante
    const isUpperQuadrant = toothNumber < 30
    const points = isUpperQuadrant
      ? ['db', 'b', 'mb', 'dp', 'p', 'mp']
      : ['db', 'b', 'mb', 'dl', 'l', 'ml']

    // Calcula AL como GM - PD para cada ponto do dente
    return points.reduce((sum, point) => {
      const gm = parseInt(window[`gm_${toothNumber}_${point}`] || 0)
      const pd = parseInt(window[`pd_${toothNumber}_${point}`] || 0)
      return sum + (gm - pd)
    }, 0)
  }

  // Calcula a soma de AL para todos os dentes
  let sum_al = 0
  for (const quadrant in teethQuadrants) {
    teethQuadrants[quadrant].forEach(tooth => {
      window[`sum_al_${tooth}`] = calculateAlSum(tooth) // Armazena a soma para cada dente
      sum_al += window[`sum_al_${tooth}`] // Adiciona à soma total
    })
  }

  // Calcula a média de AL com arredondamento
  let al_average = num_teeth > 0 ? (10 * sum_al) / (num_teeth * 6) : 0
  al_average = Math.round(al_average) / 10 // Arredonda para uma casa decimal

  // Atualiza o campo de saída com a média de AL
  document.forms[0]['output_mean_al'].value = num_teeth > 0 ? al_average : 0

  // Função auxiliar para calcular a soma de PI (índice de placa) para um dente
  function calculatePiSum (toothNumber) {
    if (window[`tooth_${toothNumber}`] != 1) return 0 // Retorna 0 se o dente não estiver presente

    // Define os pontos de medição dependendo do quadrante
    const isUpperQuadrant = toothNumber < 30
    const points = isUpperQuadrant
      ? ['db', 'b', 'mb', 'dp', 'p', 'mp']
      : ['db', 'b', 'mb', 'dl', 'l', 'ml']

    // Soma os valores de PI para cada ponto do dente
    return points.reduce((sum, point) => {
      const value = window[`pi_${toothNumber}_${point}`] || 0
      return sum + (parseInt(value) || 0)
    }, 0)
  }

  // Calcula a soma de PI para todos os dentes
  let num_pi = 0
  for (const quadrant in teethQuadrants) {
    teethQuadrants[quadrant].forEach(tooth => {
      window[`num_pi_${tooth}`] = calculatePiSum(tooth) // Armazena a soma para cada dente
      num_pi += window[`num_pi_${tooth}`] // Adiciona à soma total
    })
  }

  // Calcula o percentual de PI com arredondamento
  let pi_percent = num_teeth > 0 ? (num_pi * 100) / (num_teeth * 6) : 0
  pi_percent = Math.round(pi_percent) // Arredonda para o inteiro mais próximo

  // Atualiza o campo de saída com o percentual de PI
  document.forms[0]['output_mean_pi'].value = num_teeth > 0 ? pi_percent : 0

  // Função auxiliar para calcular a soma de BOP (sangramento à sondagem) para um dente
  function calculateBopSum (toothNumber) {
    if (window[`tooth_${toothNumber}`] != 1) return 0 // Retorna 0 se o dente não estiver presente

    // Define os pontos de medição dependendo do quadrante
    const isUpperQuadrant = toothNumber < 30
    const points = isUpperQuadrant
      ? ['db', 'b', 'mb', 'dp', 'p', 'mp']
      : ['db', 'b', 'mb', 'dl', 'l', 'ml']

    // Soma os valores de BOP para cada ponto do dente
    return points.reduce((sum, point) => {
      const value = window[`bop_${toothNumber}_${point}`] || 0
      return sum + (parseInt(value) || 0)
    }, 0)
  }

  // Calcula a soma de BOP para todos os dentes
  let num_bop = 0
  for (const quadrant in teethQuadrants) {
    teethQuadrants[quadrant].forEach(tooth => {
      window[`num_bop_${tooth}`] = calculateBopSum(tooth) // Armazena a soma para cada dente
      num_bop += window[`num_bop_${tooth}`] // Adiciona à soma total
    })
  }

  // Calcula o percentual de BOP com arredondamento
  let bop_percent = num_teeth > 0 ? (num_bop * 100) / (num_teeth * 6) : 0
  bop_percent = Math.round(bop_percent) // Arredonda para o inteiro mais próximo

  // Atualiza o campo de saída com o percentual de BOP
  document.forms[0]['output_mean_bop'].value = num_teeth > 0 ? bop_percent : 0
}
