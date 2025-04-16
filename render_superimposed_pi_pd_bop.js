// Renderiza PI e BOP sobrepostos a partir de dois objetos JSON

// Mapeamento de cores para valores de PI e BOP
const COLOR_MAP = {
  red: {
    0: '#F2F2F2',
    1: '#FFE0E0',
    2: '#FFC0C0',
    3: '#FF8D8D',
    4: '#FF5C5C',
    5: '#FF0000',
    6: '#D80000'
  },
  blue: {
    0: '#F2F2F2',
    1: '#E0E0FF',
    2: '#C0C0FF',
    3: '#8D8DFF',
    4: '#5C5CFF',
    5: '#0000FF',
    6: '#0000D8'
  }
}

// Lista de dentes para verificação
const TEETH = [
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48'
]

// Posições dos dentes para PI e BOP
const POSITIONS = {
  pi: ['d', 'b', 'm', 'p', 'l'],
  bop: ['d', 'b', 'm', 'p', 'l']
}

// Filtra dados de um objeto JSON
function filterData (data, factor) {
  const dataFiltered = {}
  for (const key in data) {
    if (key.startsWith('bop_') || key.startsWith('pi_')) {
      dataFiltered[key] = parseInt(data[key], 10) * factor
    }
  }
  return dataFiltered
}

// Combina dados de dois objetos JSON
function combineData (data1, data2) {
  const combinedData = {}
  for (const key in { ...data1, ...data2 }) {
    combinedData[key] = (data1[key] || 0) + (data2[key] || 0)
  }
  return combinedData
}

// Agrega os dados combinados
function aggregateData (combinedData) {
  const aggregatedData = {}
  for (const key in combinedData) {
    const newKey =
      key.substring(0, key.lastIndexOf('_') + 1) +
      key[key.lastIndexOf('_') + 1][0]
    aggregatedData[newKey] = (aggregatedData[newKey] || 0) + combinedData[key]
  }
  return aggregatedData
}

// Obtém a cor com base no valor e tipo
function getColor (sum, type) {
  const colorType = type.startsWith('bop_') ? 'red' : 'blue'
  return COLOR_MAP[colorType][Math.min(sum, 6)] || COLOR_MAP[colorType][0]
}

// Converte a chave para o formato correto
function convertKey (key) {
  return key.replace(/^(pi_|bop_)/, '$1').replace(/_(\d{2})_/, '_q$1')
}

// Aplica cor cinza a elementos SVG de dentes ausentes
function markMissingTeeth (data) {
  TEETH.forEach(tooth => {
    if (data[`tooth_${tooth}`] === 0) {
      POSITIONS.pi.forEach(pos => {
        const piElement = document.getElementById(`pi_q${tooth}${pos}`)
        if (piElement) piElement.style.fill = '#828282'
      })
      POSITIONS.bop.forEach(pos => {
        const bopElement = document.getElementById(`bop_q${tooth}${pos}`)
        if (bopElement) bopElement.style.fill = '#828282'
      })
    }
  })
}

// Atualiza os valores de PI e BOP no modal
function updateModalValues () {
  const form = document.forms[0]
  if (!form) {
    console.error('Formulário não encontrado.')
    return
  }
  document.getElementById('modal_pi_date').textContent =
    form['input_date'].value
  document.getElementById('modal_pd_bop_date').textContent =
    form['input_date'].value
  document.getElementById('modal_pi_perc').textContent =
    form['output_mean_pi'].value
  document.getElementById('modal_bop_perc').textContent =
    form['output_mean_bop'].value
}

// Renderiza PI e BOP sobrepostos
function renderSuperimposedPiPdBop (jsonObj1, jsonObj2) {
  // Valida se os objetos JSON são válidos e contêm dados esperados
  if (!jsonObj1 || !jsonObj2 || !jsonObj1.tooth_18 || !jsonObj2.tooth_18) {
    console.error('Dados inválidos para renderSuperimposedPiPdBop.')
    return
  }

  // Filtra os dados dos dois objetos JSON
  const filteredData1 = filterData(jsonObj1, 1)
  const filteredData2 = filterData(jsonObj2, 2)

  // Combina os dados filtrados
  const combinedData = combineData(filteredData1, filteredData2)

  // Agrega os dados combinados
  const aggregatedData = aggregateData(combinedData)

  // Adiciona cor e nova chave aos dados agregados
  for (const key in aggregatedData) {
    const newKey = convertKey(key)
    aggregatedData[key] = {
      value: aggregatedData[key],
      color: getColor(aggregatedData[key], key),
      newKey: newKey
    }
  }

  // Colore os elementos SVG com base nos dados agregados
  for (const key in aggregatedData) {
    const element = document.getElementById(aggregatedData[key].newKey)
    if (element) {
      element.style.fill = aggregatedData[key].color
    } else {
      console.warn(
        `Elemento SVG com ID ${aggregatedData[key].newKey} não encontrado.`
      )
    }
  }

  // Marca dentes ausentes com cor cinza
  markMissingTeeth(jsonObj2)

  // Atualiza os valores no modal
  updateModalValues()
}
