// Define as ordens dos dentes para o maxilar superior (OK) e inferior (UK)
const TEETH_ORDER_OK = [
  18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28
]
const TEETH_ORDER_UK = [
  48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38
]

// Função genérica para focar no primeiro dente presente
function focusFirstPresentTooth (teethOrder, prefix, suffix, jaw, teethData) {
  // Itera sobre os dentes na ordem especificada
  for (let tooth of teethOrder) {
    // Verifica se o dente está presente (valor 1) no objeto teethData
    if (teethData[`tooth_${tooth}`] == 1) {
      // Determina o sufixo com base no dente e na região (bucal, lingual/palatina, etc.)
      let adjustedSuffix = suffix
      if (prefix === 'gm' || prefix === 'pd') {
        if (jaw === 'OK') {
          // Para o maxilar superior (OK), usa 'db' (disto-bucal) para dentes 18-11 e 'mb' (mesio-bucal) para 21-28
          adjustedSuffix =
            tooth >= 11 && tooth <= 18 ? `_${suffix}` : `_m${suffix.charAt(1)}`
        } else if (jaw === 'UK') {
          // Para o maxilar inferior (UK), usa 'db' (disto-bucal) para dentes 48-41 e 'mb' (mesio-bucal) para 31-38
          adjustedSuffix =
            tooth >= 41 && tooth <= 48 ? `_${suffix}` : `_m${suffix.charAt(1)}`
        }
      }
      // Monta o ID do elemento (ex.: "mobility_18_txt", "gm_18_db_txt")
      const elementId = `${prefix}_${tooth}${adjustedSuffix}_txt`
      const element = document.getElementById(elementId)
      // Verifica se o elemento existe antes de focar
      if (element) {
        element.focus()
        return true // Sai da função após focar no primeiro dente presente
      } else {
        console.warn(`Elemento com ID ${elementId} não encontrado.`)
      }
    }
  }
  // Se nenhum dente estiver presente, exibe uma mensagem no console
  console.warn(`Nenhum dente presente encontrado para ${jaw}.`)
  return false
}

// Funções específicas que utilizam a função genérica
function select_mobility_OK () {
  focusFirstPresentTooth(TEETH_ORDER_OK, 'mobility', '', 'OK', window)
}

function select_gm_b_OK () {
  focusFirstPresentTooth(TEETH_ORDER_OK, 'gm', 'db', 'OK', window)
}

function select_pd_b_OK () {
  focusFirstPresentTooth(TEETH_ORDER_OK, 'pd', 'db', 'OK', window)
}

function select_gm_p_OK () {
  focusFirstPresentTooth(TEETH_ORDER_OK, 'gm', 'dp', 'OK', window)
}

function select_pd_p_OK () {
  focusFirstPresentTooth(TEETH_ORDER_OK, 'pd', 'dp', 'OK', window)
}

function select_gm_l_UK () {
  focusFirstPresentTooth(TEETH_ORDER_UK, 'gm', 'dl', 'UK', window)
}

function select_pd_l_UK () {
  focusFirstPresentTooth(TEETH_ORDER_UK, 'pd', 'dl', 'UK', window)
}

function select_gm_b_UK () {
  focusFirstPresentTooth(TEETH_ORDER_UK, 'gm', 'db', 'UK', window)
}

function select_pd_b_UK () {
  focusFirstPresentTooth(TEETH_ORDER_UK, 'pd', 'db', 'UK', window)
}

function select_mobility_UK () {
  focusFirstPresentTooth(TEETH_ORDER_UK, 'mobility', '', 'UK', window)
}
