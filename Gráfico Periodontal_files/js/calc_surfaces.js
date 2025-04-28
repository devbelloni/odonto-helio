// Calcula e exibe as áreas sobrepostas (superimposed surfaces) entre baseline e follow-up
function render_superimposedSurfaces () {
  // Inicializa variáveis para somas das áreas no follow-up
  var gesamtFollowUpFlaecheSumme = 0 // Soma total das áreas no follow-up
  var gesamtFollowUpBukkalLingualFlaecheSumme = 0 // Soma das áreas bucais/linguais no follow-up
  var gesamtFollowUpInterdentalFlaecheSumme = 0 // Soma das áreas interdentais no follow-up

  // Inicializa variáveis para somas das áreas no baseline
  var gesamtBaselineFlaecheSumme = 0 // Soma total das áreas no baseline
  var gesamtBaselineBukkalLingualFlaecheSumme = 0 // Soma das áreas bucais/linguais no baseline
  var gesamtBaselineInterdentalFlaecheSumme = 0 // Soma das áreas interdentais no baseline

  // Inicializa variáveis para percentuais no follow-up em relação ao baseline
  var gesamtFollowUpFlaecheProzent = 0 // Percentual total no follow-up
  var gesamtFollowUpBukkalLingualFlaecheProzent = 0 // Percentual das áreas bucais/linguais no follow-up
  var gesamtFollowUpInterdentalFlaecheProzent = 0 // Percentual das áreas interdentais no follow-up

  // Itera sobre os dentes no objeto pockets (follow-up)
  for (var toothNumber in pockets) {
    if (pockets.hasOwnProperty(toothNumber)) {
      var tooth = pockets[toothNumber]

      if (tooth.present) {
        // Soma as áreas no objeto pockets (follow-up)
        gesamtFollowUpFlaecheSumme += tooth.areas.totalArea / 42.25 // Área total normalizada
        gesamtFollowUpInterdentalFlaecheSumme +=
          (tooth.areas.mesialArea + tooth.areas.distalArea) / 42.25 // Área interdental (mesial + distal)
        gesamtFollowUpBukkalLingualFlaecheSumme +=
          (tooth.areas.distobuccalArea +
            tooth.areas.mesiobuccalArea +
            tooth.areas.distopalatalArea +
            tooth.areas.mesiopalatalArea) /
          42.25 // Área bucal/lingual
      }
    }
  }

  // Itera sobre os dentes no objeto superimposedPockets (baseline)
  for (var toothNumber in superimposedPockets) {
    if (superimposedPockets.hasOwnProperty(toothNumber)) {
      var tooth = superimposedPockets[toothNumber]

      if (tooth.present) {
        // Soma as áreas no objeto superimposedPockets (baseline)
        gesamtBaselineFlaecheSumme += tooth.areas.totalArea / 42.25 // Área total normalizada
        gesamtBaselineInterdentalFlaecheSumme +=
          (tooth.areas.mesialArea + tooth.areas.distalArea) / 42.25 // Área interdental (mesial + distal)
        gesamtBaselineBukkalLingualFlaecheSumme +=
          (tooth.areas.distobuccalArea +
            tooth.areas.mesiobuccalArea +
            tooth.areas.distopalatalArea +
            tooth.areas.mesiopalatalArea) /
          42.25 // Área bucal/lingual
      }
    }
  }

  // Calcula os percentuais do follow-up em relação ao baseline
  gesamtFollowUpFlaecheProzent =
    (gesamtFollowUpFlaecheSumme * 100) / gesamtBaselineFlaecheSumme // Percentual da área total
  gesamtFollowUpBukkalLingualFlaecheProzent =
    (gesamtFollowUpBukkalLingualFlaecheSumme * 100) /
    gesamtBaselineBukkalLingualFlaecheSumme // Percentual da área bucal/lingual
  gesamtFollowUpInterdentalFlaecheProzent =
    (gesamtFollowUpInterdentalFlaecheSumme * 100) /
    gesamtBaselineInterdentalFlaecheSumme // Percentual da área interdental

  // Atualiza a visualização e os textos com os valores calculados
  updateSuperimposedVisualization(
    gesamtFollowUpFlaecheProzent,
    gesamtFollowUpBukkalLingualFlaecheProzent,
    gesamtFollowUpInterdentalFlaecheProzent
  )
  setSuperimposedTotalAreaText(
    gesamtBaselineFlaecheSumme,
    gesamtFollowUpFlaecheSumme,
    gesamtFollowUpFlaecheProzent
  )

  setSuperimposedBukkalLingualAreaText(
    gesamtBaselineBukkalLingualFlaecheSumme,
    gesamtFollowUpBukkalLingualFlaecheSumme,
    gesamtFollowUpBukkalLingualFlaecheProzent
  )
  setSuperimposedInterdentalAreaText(
    gesamtBaselineInterdentalFlaecheSumme,
    gesamtFollowUpInterdentalFlaecheSumme,
    gesamtFollowUpInterdentalFlaecheProzent
  )
}

// Atualiza a visualização das áreas sobrepostas
function updateSuperimposedVisualization (
  gesamtFollowUpFlaecheProzent,
  gesamtFollowUpBukkalLingualFlaecheProzent,
  gesamtFollowUpInterdentalFlaecheProzent
) {
  // Atualiza as visualizações individuais para cada tipo de área
  updateSuperimposedSingleVisualization(
    'square-background',
    'rectangle-overlay',
    'percentage-text',
    gesamtFollowUpFlaecheProzent
  ) // Área total
  updateSuperimposedSingleVisualization(
    'buccallingual-square-background',
    'buccallingual-rectangle-overlay',
    'buccallingual-percentage-text',
    gesamtFollowUpBukkalLingualFlaecheProzent
  ) // Área bucal/lingual
  updateSuperimposedSingleVisualization(
    'interdental-square-background',
    'interdental-rectangle-overlay',
    'interdental-percentage-text',
    gesamtFollowUpInterdentalFlaecheProzent
  ) // Área interdental
}

// Atualiza uma única visualização (quadrado, retângulo e texto) para áreas sobrepostas
function updateSuperimposedSingleVisualization (
  squareId,
  rectangleId,
  textId,
  percentage
) {
  var squareBackground = document.getElementById(squareId) // Elemento de fundo (quadrado)
  var rectangleOverlay = document.getElementById(rectangleId) // Elemento de sobreposição (retângulo)
  var percentageText = document.getElementById(textId) // Elemento de texto do percentual

  // Verifica se o percentual é válido
  if (!isNaN(percentage) && percentage !== null && percentage !== undefined) {
    var roundedPercentage = Math.round(percentage) // Arredonda o percentual
    rectangleOverlay.style.height = roundedPercentage + '%' // Define a altura do retângulo
    percentageText.textContent = roundedPercentage + '%' // Atualiza o texto do percentual

    // Define a cor de fundo do quadrado com base no tipo de área
    if (
      squareId === 'square-background' ||
      squareId === 'buccallingual-square-background'
    ) {
      squareBackground.style.backgroundColor = '#53ff4d' // Verde escuro para áreas totais e bucais/linguais
    } else if (squareId === 'interdental-square-background') {
      squareBackground.style.backgroundColor = '#a0ff99' // Verde claro para áreas interdentais
    }

    // Define a cor de fundo do retângulo com base no tipo de área
    if (
      rectangleId === 'rectangle-overlay' ||
      rectangleId === 'buccallingual-rectangle-overlay'
    ) {
      rectangleOverlay.style.backgroundColor = '#4d4dff' // Azul escuro para áreas totais e bucais/linguais
    } else if (rectangleId === 'interdental-rectangle-overlay') {
      rectangleOverlay.style.backgroundColor = '#a1b1ff' // Azul claro para áreas interdentais
    }
  } else {
    // Caso o percentual seja inválido, reseta a visualização
    rectangleOverlay.style.height = '0%'
    percentageText.textContent = '-'
    squareBackground.style.backgroundColor = '#e7f3fd' // Azul claro para indicar ausência de dados
  }
}

// Atualiza o texto da área total sobreposta
function setSuperimposedTotalAreaText (
  gesamtBaselineFlaecheSumme,
  gesamtFollowUpFlaecheSumme,
  gesamtFollowUpFlaecheProzent
) {
  var beschriftungContainer = document.querySelector(
    '.beschriftung-bop-visualization-container'
  ) // Container do texto

  if (beschriftungContainer) {
    // Atualiza o texto com os valores de baseline e follow-up em cm²
    beschriftungContainer.innerHTML =
      'Baseline: <b>' +
      (gesamtBaselineFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (100%)<br /><br />Acompanhamento: <b>' +
      (gesamtFollowUpFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (' +
      gesamtFollowUpFlaecheProzent.toFixed(1) +
      '%)'
  }
}

// Atualiza o texto das áreas bucais/linguais sobrepostas
function setSuperimposedBukkalLingualAreaText (
  gesamtBaselineBukkalLingualFlaecheSumme,
  gesamtFollowUpBukkalLingualFlaecheSumme,
  gesamtFollowUpBukkalLingualFlaecheProzent
) {
  var beschriftungContainer = document.querySelector(
    '.beschriftung-bop-buccallingual-visualization-container'
  ) // Container do texto

  if (beschriftungContainer) {
    // Atualiza o texto com os valores de baseline e follow-up em cm²
    beschriftungContainer.innerHTML =
      'Externo e interno: <b>' +
      (gesamtBaselineBukkalLingualFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (100%)<br /><br />Acompanhamento: <b>' +
      (gesamtFollowUpBukkalLingualFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (' +
      gesamtFollowUpBukkalLingualFlaecheProzent.toFixed(1) +
      '%)<br /><br /><br />'
  }
}

// Atualiza o texto das áreas interdentais sobrepostas
function setSuperimposedInterdentalAreaText (
  gesamtBaselineInterdentalFlaecheSumme,
  gesamtFollowUpInterdentalFlaecheSumme,
  gesamtFollowUpInterdentalFlaecheProzent
) {
  var beschriftungContainer = document.querySelector(
    '.beschriftung-bop-interdental-visualization-container'
  ) // Container do texto

  if (beschriftungContainer) {
    // Atualiza o texto com os valores de baseline e follow-up em cm²
    beschriftungContainer.innerHTML =
      'Espaços interdentais: <b>' +
      (gesamtBaselineInterdentalFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (100%)<br /><br />Acompanhamento: <b>' +
      (gesamtFollowUpInterdentalFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (' +
      gesamtFollowUpInterdentalFlaecheProzent.toFixed(1) +
      '%)'
  }
}

// Calcula e exibe as áreas com sangramento à sondagem (BOP)
function render_surfaces () {
  // Inicializa variáveis para somas das áreas totais
  var gesamtFlaecheSumme = 0 // Soma total das áreas
  var gesamtBukkalLingualFlaecheSumme = 0 // Soma das áreas bucais/linguais
  var gesamtInterdentalFlaecheSumme = 0 // Soma das áreas interdentais

  // Inicializa variáveis para somas das áreas com BOP positivo
  var gesamtBopPosFlaecheSumme = 0 // Soma total das áreas com BOP
  var bukkalLingualBopPosFlaecheSumme = 0 // Soma das áreas bucais/linguais com BOP
  var interdentalBopPosFlaecheSumme = 0 // Soma das áreas interdentais com BOP

  // Inicializa variáveis para percentuais das áreas com BOP
  var gesamtBopPosFlaecheProzent = 0 // Percentual total com BOP
  var bukkalLingualBopPosFlaecheProzent = 0 // Percentual das áreas bucais/linguais com BOP
  var interdentalBopPosFlaecheProzent = 0 // Percentual das áreas interdentais com BOP

  // Itera sobre os dentes no objeto pockets
  for (var toothNumber in pockets) {
    if (pockets.hasOwnProperty(toothNumber)) {
      var tooth = pockets[toothNumber]

      if (tooth.present) {
        // Reseta os valores de BOP positivo para cada área do dente
        tooth.distobuccalArea.bop_pos = 0
        tooth.mesiobuccalArea.bop_pos = 0
        tooth.distopalatalArea.bop_pos = 0
        tooth.mesiopalatalArea.bop_pos = 0
        tooth.distalArea.bop_pos = 0
        tooth.mesialArea.bop_pos = 0

        // Atribui áreas com BOP positivo com base nos pontos de sondagem
        if (tooth.bop.b === 1) {
          tooth.distobuccalArea.bop_pos = tooth.areas.distobuccalArea // Área distobucal
          tooth.mesiobuccalArea.bop_pos = tooth.areas.mesiobuccalArea // Área mesiobucal
        }
        if (tooth.bop.db === 1) {
          tooth.distobuccalArea.bop_pos = tooth.areas.distobuccalArea // Área distobucal
          tooth.distalArea.bop_pos = tooth.areas.distalArea // Área distal
        }
        if (tooth.bop.mb === 1) {
          tooth.mesiobuccalArea.bop_pos = tooth.areas.mesiobuccalArea // Área mesiobucal
          tooth.mesialArea.bop_pos = tooth.areas.mesialArea // Área mesial
        }

        if (tooth.bop.p === 1 || tooth.bop.l === 1) {
          tooth.distopalatalArea.bop_pos = tooth.areas.distopalatalArea // Área distopalatal
          tooth.mesiopalatalArea.bop_pos = tooth.areas.mesiopalatalArea // Área mesiopalatal
        }
        if (tooth.bop.dp === 1 || tooth.bop.dl === 1) {
          tooth.distopalatalArea.bop_pos = tooth.areas.distopalatalArea // Área distopalatal
          tooth.distalArea.bop_pos = tooth.areas.distalArea // Área distal
        }
        if (tooth.bop.mp === 1 || tooth.bop.ml === 1) {
          tooth.mesiopalatalArea.bop_pos = tooth.areas.mesiopalatalArea // Área mesiopalatal
          tooth.mesialArea.bop_pos = tooth.areas.mesialArea // Área mesial
        }

        // Soma as áreas totais e específicas
        gesamtFlaecheSumme += tooth.areas.totalArea / 42.25 // Área total normalizada
        gesamtBukkalLingualFlaecheSumme +=
          (tooth.areas.distobuccalArea +
            tooth.areas.mesiobuccalArea +
            tooth.areas.distopalatalArea +
            tooth.areas.mesiopalatalArea) /
          42.25 // Área bucal/lingual
        gesamtInterdentalFlaecheSumme +=
          (tooth.areas.mesialArea + tooth.areas.distalArea) / 42.25 // Área interdental

        // Soma as áreas com BOP positivo
        gesamtBopPosFlaecheSumme +=
          (tooth.distobuccalArea.bop_pos +
            tooth.mesiobuccalArea.bop_pos +
            tooth.distopalatalArea.bop_pos +
            tooth.mesiopalatalArea.bop_pos +
            tooth.distalArea.bop_pos +
            tooth.mesialArea.bop_pos) /
          42.25 // Total com BOP
        bukkalLingualBopPosFlaecheSumme +=
          (tooth.distobuccalArea.bop_pos +
            tooth.mesiobuccalArea.bop_pos +
            tooth.distopalatalArea.bop_pos +
            tooth.mesiopalatalArea.bop_pos) /
          42.25 // Bucal/lingual com BOP
        interdentalBopPosFlaecheSumme +=
          (tooth.distalArea.bop_pos + tooth.mesialArea.bop_pos) / 42.25 // Interdental com BOP
      }
    }
  }

  // Calcula os percentuais das áreas com BOP
  gesamtBopPosFlaecheProzent =
    (gesamtBopPosFlaecheSumme * 100) / gesamtFlaecheSumme // Percentual total com BOP
  bukkalLingualBopPosFlaecheProzent =
    (bukkalLingualBopPosFlaecheSumme * 100) / gesamtBukkalLingualFlaecheSumme // Percentual bucal/lingual com BOP
  interdentalBopPosFlaecheProzent =
    (interdentalBopPosFlaecheSumme * 100) / gesamtInterdentalFlaecheSumme // Percentual interdental com BOP

  // Atualiza a visualização e os textos com os valores calculados
  updateBopVisualization(
    gesamtBopPosFlaecheProzent,
    bukkalLingualBopPosFlaecheProzent,
    interdentalBopPosFlaecheProzent
  )

  setTotalAreaText(
    gesamtFlaecheSumme,
    gesamtBopPosFlaecheSumme,
    gesamtBopPosFlaecheProzent
  )
  setBukkalLingualAreaText(
    gesamtBukkalLingualFlaecheSumme,
    bukkalLingualBopPosFlaecheSumme,
    bukkalLingualBopPosFlaecheProzent
  )
  setInterdentalAreaText(
    gesamtInterdentalFlaecheSumme,
    interdentalBopPosFlaecheSumme,
    interdentalBopPosFlaecheProzent
  )
}

// Atualiza a visualização das áreas com BOP
function updateBopVisualization (
  gesamtBopPosFlaecheProzent,
  bukkalLingualBopPosFlaecheProzent,
  interdentalBopPosFlaecheProzent
) {
  // Atualiza as visualizações individuais para cada tipo de área
  updateSingleVisualization(
    'square-background',
    'rectangle-overlay',
    'percentage-text',
    gesamtBopPosFlaecheProzent
  ) // Área total
  updateSingleVisualization(
    'buccallingual-square-background',
    'buccallingual-rectangle-overlay',
    'buccallingual-percentage-text',
    bukkalLingualBopPosFlaecheProzent
  ) // Área bucal/lingual
  updateSingleVisualization(
    'interdental-square-background',
    'interdental-rectangle-overlay',
    'interdental-percentage-text',
    interdentalBopPosFlaecheProzent
  ) // Área interdental
}

// Atualiza uma única visualização (quadrado, retângulo e texto) para áreas com BOP
function updateSingleVisualization (squareId, rectangleId, textId, percentage) {
  var squareBackground = document.getElementById(squareId) // Elemento de fundo (quadrado)
  var rectangleOverlay = document.getElementById(rectangleId) // Elemento de sobreposição (retângulo)
  var percentageText = document.getElementById(textId) // Elemento de texto do percentual

  // Verifica se o percentual é válido
  if (!isNaN(percentage) && percentage !== null && percentage !== undefined) {
    var roundedPercentage = Math.round(percentage) // Arredonda o percentual
    rectangleOverlay.style.height = roundedPercentage + '%' // Define a altura do retângulo
    percentageText.textContent = roundedPercentage + '%' // Atualiza o texto do percentual

    // Define a cor de fundo do quadrado com base no tipo de área
    if (
      squareId === 'square-background' ||
      squareId === 'buccallingual-square-background'
    ) {
      squareBackground.style.backgroundColor = '#4d4dff' // Azul escuro para áreas totais e bucais/linguais
    } else if (squareId === 'interdental-square-background') {
      squareBackground.style.backgroundColor = '#a1b1ff' // Azul claro para áreas interdentais
    }

    // Define a cor de fundo do retângulo com base no tipo de área
    if (
      rectangleId === 'rectangle-overlay' ||
      rectangleId === 'buccallingual-rectangle-overlay'
    ) {
      rectangleOverlay.style.backgroundColor = '#ff4d4d' // Vermelho escuro para áreas totais e bucais/linguais
    } else if (rectangleId === 'interdental-rectangle-overlay') {
      rectangleOverlay.style.backgroundColor = '#ffa3a3' // Vermelho claro para áreas interdentais
    }
  } else {
    // Caso o percentual seja inválido, reseta a visualização
    rectangleOverlay.style.height = '0%'
    percentageText.textContent = '-'
    squareBackground.style.backgroundColor = '#e7f3fd' // Azul claro para indicar ausência de dados
  }
}

// Atualiza o texto da área total com BOP
function setTotalAreaText (
  gesamtFlaecheSumme,
  gesamtBopPosFlaecheSumme,
  gesamtBopPosFlaecheProzent
) {
  var beschriftungContainer = document.querySelector(
    '.beschriftung-bop-visualization-container'
  ) // Container do texto

  if (beschriftungContainer) {
    // Atualiza o texto com os valores totais e inflamados em cm²
    beschriftungContainer.innerHTML =
      'Total: <b>' +
      (gesamtFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (100%)<br /><br />Inflamado: <b>' +
      (gesamtBopPosFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (' +
      gesamtBopPosFlaecheProzent.toFixed(1) +
      '%)'
  }
}

// Atualiza o texto das áreas bucais/linguais com BOP
function setBukkalLingualAreaText (
  gesamtBukkalLingualFlaecheSumme,
  bukkalLingualBopPosFlaecheSumme,
  bukkalLingualBopPosFlaecheProzent
) {
  var beschriftungContainer = document.querySelector(
    '.beschriftung-bop-buccallingual-visualization-container'
  ) // Container do texto

  if (beschriftungContainer) {
    // Atualiza o texto com os valores totais e inflamados em cm²
    beschriftungContainer.innerHTML =
      'Externo e interno: <b>' +
      (gesamtBukkalLingualFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (100%)<br /><br />Inflamado: <b>' +
      (bukkalLingualBopPosFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (' +
      bukkalLingualBopPosFlaecheProzent.toFixed(1) +
      '%)<br /><br /><br />'
  }
}

// Atualiza o texto das áreas interdentais com BOP
function setInterdentalAreaText (
  gesamtInterdentalFlaecheSumme,
  interdentalBopPosFlaecheSumme,
  interdentalBopPosFlaecheProzent
) {
  var beschriftungContainer = document.querySelector(
    '.beschriftung-bop-interdental-visualization-container'
  ) // Container do texto

  if (beschriftungContainer) {
    // Atualiza o texto com os valores totais e inflamados em cm²
    beschriftungContainer.innerHTML =
      'Espaços interdentais: <b>' +
      (gesamtInterdentalFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (100%)<br /><br />Inflamado: <b>' +
      (interdentalBopPosFlaecheSumme / 100).toFixed(1) +
      ' cm<sup>2</sup></b> (' +
      interdentalBopPosFlaecheProzent.toFixed(1) +
      '%)'
  }
}
