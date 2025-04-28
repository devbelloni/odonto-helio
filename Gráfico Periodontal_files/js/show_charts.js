// show_charts.js
// Módulo para gerenciar a exibição de gráficos periodontais (Chart 1, Chart 2 e gráfico sobreposto)

// Função para exibir ou resetar o Chart 1
function show_chart1 (event, jsonObj1) {
  if (event.shiftKey) {
    const shouldContinue = confirm(
      'Do you really want to delete this periodontal chart?'
    )
    if (shouldContinue) {
      const jsonPath = '../common/json/json_template.json'
      fetch(jsonPath)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON.')
          }
          return response.json()
        })
        .then(data => {
          window.jsonObj1 = data
          renderChart(data)
          updateChart1Buttons('reset')
          updateChartStates({
            chart1: false,
            showChart1: false,
            showChart2: false,
            showSuperimposedChart: false
          })
          changePocketColors()
        })
        .catch(error => {
          console.error('Erro ao carregar o JSON:', error)
          alert('Falha ao resetar o gráfico. Tente novamente.')
        })
    }
  } else {
    if (showChart2) {
      const jsonString = form_to_JSON()
      if (jsonString) {
        window.jsonObj2 = JSON.parse(jsonString)
      } else {
        console.warn('Não foi possível salvar os dados do Chart 2.')
      }
    }
    renderChart(jsonObj1)
    updateChart1Buttons('show')
    updateChartStates({
      showChart1: true,
      showChart2: false,
      showSuperimposedChart: false
    })
    changePocketColors()
  }
}

// Função para exibir ou resetar o Chart 2
function show_chart2 (event, jsonObj2) {
  if (event.shiftKey) {
    const shouldContinue = confirm(
      'Do you really want to delete this periodontal chart?'
    )
    if (shouldContinue) {
      const jsonPath = '../common/json/json_template.json'
      fetch(jsonPath)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON.')
          }
          return response.json()
        })
        .then(data => {
          window.jsonObj2 = data
          renderChart(data)
          updateChart2Buttons('reset')
          updateChartStates({
            chart2: false,
            showChart1: false,
            showChart2: false,
            showSuperimposedChart: false
          })
          changePocketColors()
        })
        .catch(error => {
          console.error('Erro ao carregar o JSON:', error)
          alert('Falha ao resetar o gráfico. Tente novamente.')
        })
    }
  } else {
    if (showChart1) {
      const jsonString = form_to_JSON()
      if (jsonString) {
        window.jsonObj1 = JSON.parse(jsonString)
      } else {
        console.warn('Não foi possível salvar os dados do Chart 1.')
      }
    }
    renderChart(jsonObj2)
    updateChart2Buttons('show')
    updateChartStates({
      showChart1: false,
      showChart2: true,
      showSuperimposedChart: false
    })
    changePocketColors()
  }
}

// Função para exibir o gráfico sobreposto (Chart 1 e Chart 2 combinados)
function show_superimposed_chart () {
  if (showChart1) {
    const jsonString = form_to_JSON()
    if (jsonString) {
      window.jsonObj1 = JSON.parse(jsonString)
    } else {
      console.warn('Não foi possível salvar os dados do Chart 1.')
    }
  } else if (showChart2) {
    const jsonString = form_to_JSON()
    if (jsonString) {
      window.jsonObj2 = JSON.parse(jsonString)
    } else {
      console.warn('Não foi possível salvar os dados do Chart 2.')
    }
  }

  render_form(window.jsonObj2)
  assignSuperimposedJsonDataToObject(window.jsonObj1)
  assignJsonDataToObject(window.jsonObj2)
  render_pi_pd_bop()
  render_superimposed_form(window.jsonObj1)
  render_superimposed_analysis(window.jsonObj1, window.jsonObj2)
  render_superimposed_pi_pd_bop(window.jsonObj1, window.jsonObj2)
  initializeSuperimposed3DEnvironment()
  render_superimposedSurfaces()
  updateSuperimposedButtons()
  applySuperimposedStyles()
  disableFormInteractions()
  updateChartStates({
    showChart1: false,
    showChart2: false,
    showSuperimposedChart: true
  })
}

// Função para ajustar as cores dos elementos visuais do gráfico periodontal
function changePocketColors () {
  applyStyles('.svg_periodontal_chart .pocket', {
    fill: '#000080',
    fillOpacity: 0.5
  })
  applyStyles('.svg_periodontal_chart .attachment_level', {
    stroke: '#0000FF',
    strokeOpacity: 1
  })
  applyStyles('.svg_periodontal_chart .gingival_margin', {
    stroke: '#FF0000',
    strokeOpacity: 1
  })
  const superimposedChartDiv = document.querySelector(
    '.svg_superimposed_periodontal_chart'
  )
  if (superimposedChartDiv) {
    superimposedChartDiv.style.opacity = 0
  } else {
    console.warn('Contêiner do gráfico sobreposto não encontrado.')
  }
  enableFormInteractions()
}

// Funções auxiliares

// Renderiza o gráfico com base nos dados fornecidos
function renderChart (jsonObj) {
  render_form(jsonObj)
  assignJsonDataToObject(jsonObj)
  initialize3DEnvironment()
  render_surfaces()
  render_pi_pd_bop()
  render_analysis(jsonObj)
  renderEmptyBaderstenTable()
  renderEmptyBaderstenChart()
  renderEmptyRamseierTable()
  renderEmptyRamseierChart()
}

// Atualiza os botões para o Chart 1
function updateChart1Buttons (action) {
  const buttonsConfig = [
    {
      id: 'menu_button_show_chart1',
      display: action === 'reset' ? 'none' : 'block',
      backgroundColor: action === 'show' ? 'lightgreen' : '#F9F9F9',
      pointerEvents: 'auto'
    },
    {
      id: 'menu_button_load_from_hd',
      display: action === 'reset' ? 'block' : null,
      backgroundColor: '#F9F9F9',
      color: 'black',
      pointerEvents: 'auto',
      imgSrc: '../img/svg/fa/download-chart-regular.svg'
    },
    {
      id: 'menu_button_qr',
      pointerEvents: 'auto',
      imgSrc: '../img/svg/fa/qrcode-solid.svg'
    },
    {
      id: 'menu_button_show_chart2',
      backgroundColor: showChart2 ? '#F9F9F9' : null
    },
    {
      id: 'menu_button_load_superimposed_from_hd',
      display: !chart2 ? 'block' : null,
      backgroundColor: '#F9F9F9',
      color: 'lightgrey',
      pointerEvents: 'none',
      imgSrc: '../img/svg/fa/grey-download-chart-solid.svg'
    },
    {
      id: 'menu_button_show_superimposed_chart',
      display: 'block',
      backgroundColor: '#F9F9F9',
      color: 'lightgrey',
      pointerEvents: 'none',
      imgSrc: '../img/svg/fa/grey-clone-solid.svg'
    },
    {
      id: 'menu_button_save_to_hd',
      color: action === 'show' || showSuperimposedChart ? 'black' : null,
      pointerEvents: action === 'show' || showSuperimposedChart ? 'auto' : null,
      imgSrc:
        action === 'show' || showSuperimposedChart
          ? '../img/svg/fa/download-solid.svg'
          : null
    }
  ]
  updateButtons(buttonsConfig)
}

// Atualiza os botões para o Chart 2
function updateChart2Buttons (action) {
  const buttonsConfig = [
    {
      id: 'menu_button_show_chart2',
      display: action === 'reset' ? 'none' : 'block',
      backgroundColor: action === 'show' ? 'lightgreen' : '#F9F9F9',
      pointerEvents: 'auto'
    },
    {
      id: 'menu_button_load_superimposed_from_hd',
      display: action === 'reset' ? 'block' : null,
      backgroundColor: '#F9F9F9',
      color: action === 'reset' ? 'black' : 'lightgrey',
      pointerEvents: action === 'reset' ? 'auto' : 'none',
      imgSrc:
        action === 'reset'
          ? '../img/svg/fa/download-chart-solid.svg'
          : '../img/svg/fa/grey-download-chart-regular.svg'
    },
    {
      id: 'menu_button_qr',
      pointerEvents: 'auto',
      imgSrc: '../img/svg/fa/qrcode-solid.svg'
    },
    {
      id: 'menu_button_show_chart1',
      backgroundColor: showChart1 ? '#F9F9F9' : null
    },
    {
      id: 'menu_button_show_superimposed_chart',
      display: 'block',
      backgroundColor: '#F9F9F9',
      color: 'lightgrey',
      pointerEvents: 'none',
      imgSrc: '../img/svg/fa/grey-clone-solid.svg'
    },
    {
      id: 'menu_button_save_to_hd',
      color: action === 'show' || showSuperimposedChart ? 'black' : null,
      pointerEvents: action === 'show' || showSuperimposedChart ? 'auto' : null,
      imgSrc:
        action === 'show' || showSuperimposedChart
          ? '../img/svg/fa/download-solid.svg'
          : null
    }
  ]
  updateButtons(buttonsConfig)
}

// Atualiza os botões para o gráfico sobreposto
function updateSuperimposedButtons () {
  const buttonsConfig = [
    { id: 'menu_button_show_chart1', backgroundColor: '#F9F9F9' },
    { id: 'menu_button_show_chart2', backgroundColor: '#F9F9F9' },
    {
      id: 'menu_button_show_superimposed_chart',
      backgroundColor: 'lightgreen'
    },
    {
      id: 'menu_button_save_to_hd',
      color: 'lightgrey',
      pointerEvents: 'none',
      imgSrc: '../img/svg/fa/grey-download-solid.svg'
    },
    {
      id: 'menu_button_load_from_hd',
      color: 'lightgrey',
      pointerEvents: 'none',
      imgSrc: '../img/svg/fa/grey-download-chart-regular.svg'
    },
    {
      id: 'menu_button_load_superimposed_from_hd',
      color: 'lightgrey',
      pointerEvents: 'none',
      imgSrc: '../img/svg/fa/grey-download-chart-solid.svg'
    },
    {
      id: 'menu_button_qr',
      pointerEvents: 'none',
      imgSrc: '../img/svg/fa/grey-qrcode-solid.svg'
    }
  ]
  updateButtons(buttonsConfig)
}

// Atualiza os estados das variáveis globais de controle de gráficos
function updateChartStates (states) {
  if (states.chart1 !== undefined) chart1 = states.chart1
  if (states.chart2 !== undefined) chart2 = states.chart2
  if (states.showChart1 !== undefined) showChart1 = states.showChart1
  if (states.showChart2 !== undefined) showChart2 = states.showChart2
  if (states.showSuperimposedChart !== undefined)
    showSuperimposedChart = states.showSuperimposedChart
}

// Aplica estilos a elementos DOM
function applyStyles (selector, styles) {
  const elements = document.querySelectorAll(selector)
  if (!elements.length) {
    console.warn(`Nenhum elemento encontrado para o seletor: ${selector}`)
    return
  }
  elements.forEach(element => {
    Object.entries(styles).forEach(([key, value]) => {
      element.style[key] = value
    })
  })
}

// Aplica estilos específicos para o gráfico sobreposto
function applySuperimposedStyles () {
  applyStyles('.svg_periodontal_chart .pocket', {
    fill: '#0000BB',
    fillOpacity: 0.5
  })
  applyStyles('.svg_periodontal_chart .attachment_level', {
    stroke: '#0000FF',
    strokeOpacity: 1
  })
  applyStyles('.svg_periodontal_chart .gingival_margin', {
    stroke: '#FF0000',
    strokeOpacity: 1
  })
  applyStyles('.svg_superimposed_periodontal_chart .pocket', {
    fill: '#01BB00',
    fillOpacity: 0.2
  })
  applyStyles(
    '.svg_superimposed_periodontal_chart .attachment_level, .svg_superimposed_periodontal_chart .gingival_margin',
    { stroke: '#01BB00', strokeOpacity: 1 }
  )
  const superimposedChartDiv = document.querySelector(
    '.svg_superimposed_periodontal_chart'
  )
  if (superimposedChartDiv) {
    superimposedChartDiv.style.opacity = 1
  } else {
    console.warn('Contêiner do gráfico sobreposto não encontrado.')
  }
}

// Atualiza os botões com base na configuração fornecida
function updateButtons (config) {
  config.forEach(button => {
    const element = document.getElementById(button.id)
    if (!element) {
      console.warn(`Botão com ID ${button.id} não encontrado.`)
      return
    }
    Object.entries(button).forEach(([key, value]) => {
      if (key !== 'id' && key !== 'imgSrc' && value !== null) {
        element.style[key] = value
      }
      if (key === 'imgSrc' && value) {
        const img = element.querySelector('img')
        if (img) {
          img.src = value
        } else {
          console.warn(`Imagem não encontrada no botão ${button.id}.`)
        }
      }
    })
  })
}

// Desativa interações com elementos do formulário
function disableFormInteractions () {
  const elements = document.querySelectorAll('input, select, textarea, div')
  const exceptions = [
    'side_menu',
    'select_button',
    'menu_button',
    'modal',
    'modal-content',
    'download_button',
    'close_button',
    'reset_camera_button',
    'play_pause_button',
    'render_ar_button',
    'download_gltf_button',
    'close_threejs_button',
    'video-container'
  ]
  const exceptionIds = [
    'form_periodontal_chart',
    'svg_periodontal_chart',
    'threejs_modal'
  ]
  elements.forEach(element => {
    if (
      !exceptions.some(cls => element.classList.contains(cls)) &&
      !exceptionIds.includes(element.id)
    ) {
      element.style.pointerEvents = 'none'
    }
  })
  ;[
    'threejs_modal',
    'reset_camera_button',
    'play_pause_button',
    'download_gltf_button'
  ].forEach(id => {
    const element = document.getElementById(id)
    if (element) element.style.pointerEvents = 'auto'
  })
  const formElements = document.querySelectorAll('input, select, textarea')
  formElements.forEach(element => {
    element.disabled = true
  })
}

// Ativa interações com elementos do formulário
function enableFormInteractions () {
  const elements = document.querySelectorAll('input, select, textarea, div')
  const exceptions = [
    'side_menu',
    'select_button',
    'menu_button',
    'modal',
    'modal-content',
    'download_button',
    'close_button',
    'video-container'
  ]
  const exceptionIds = ['form_periodontal_chart', 'svg_periodontal_chart']
  elements.forEach(element => {
    if (
      !exceptions.some(cls => element.classList.contains(cls)) &&
      !exceptionIds.includes(element.id)
    ) {
      element.style.pointerEvents = 'auto'
    }
  })
  const formElements = document.querySelectorAll('input, select, textarea')
  formElements.forEach(element => {
    element.disabled = false
  })
}
