// Funções utilitárias
function updateFill (elementId, condition1, condition2, color1, color2) {
  const element = document.getElementById(elementId)
  if (element) {
    element.style.fill = condition1 || condition2 ? color1 : color2
  }
}

function clearFormInputs (form, prefix, start, end) {
  for (let i = start; i <= end; i++) {
    document.forms[0][`${prefix}_${i}_db_txt`].value = ''
    document.forms[0][`${prefix}_${i}_b_txt`].value = ''
    document.forms[0][`${prefix}_${i}_mb_txt`].value = ''
    document.forms[0][`${prefix}_${i}_dp_txt`].value = ''
    document.forms[0][`${prefix}_${i}_p_txt`].value = ''
    document.forms[0][`${prefix}_${i}_mp_txt`].value = ''
  }
}

function updatePDValues (tooth, pdPrefix, start, end) {
  for (let i = start; i <= end; i++) {
    if (tooth[i] === 0) {
      document.getElementById(`${pdPrefix}_q${i}d`).style.fill = '#828282'
      document.getElementById(`${pdPrefix}_q${i}b`).style.fill = '#828282'
      document.getElementById(`${pdPrefix}_q${i}m`).style.fill = '#828282'
      document.getElementById(`${pdPrefix}_q${i}p`).style.fill = '#828282'
    } else {
      if (window[`pd_${i}_db`] > 3)
        document.forms[0][`modal_output_pd_${i}_db_txt`].value =
          window[`pd_${i}_db`]
      if (window[`pd_${i}_b`] > 3)
        document.forms[0][`modal_output_pd_${i}_b_txt`].value =
          window[`pd_${i}_b`]
      if (window[`pd_${i}_mb`] > 3)
        document.forms[0][`modal_output_pd_${i}_mb_txt`].value =
          window[`pd_${i}_mb`]
      if (window[`pd_${i}_dp`] > 3)
        document.forms[0][`modal_output_pd_${i}_dp_txt`].value =
          window[`pd_${i}_dp`]
      if (window[`pd_${i}_p`] > 3)
        document.forms[0][`modal_output_pd_${i}_p_txt`].value =
          window[`pd_${i}_p`]
      if (window[`pd_${i}_mp`] > 3)
        document.forms[0][`modal_output_pd_${i}_mp_txt`].value =
          window[`pd_${i}_mp`]
    }
  }
}

// Função principal
function render_pi_pd_bop () {
  // Render PI (11-48)
  function renderPISection (prefix, start, end, useDL = false) {
    for (let i = start; i <= end; i++) {
      updateFill(
        `${prefix}_q${i}d`,
        window[`${prefix}_${i}_db`] == 1 ||
          (useDL
            ? window[`${prefix}_${i}_dl`] == 1
            : window[`${prefix}_${i}_dp`] == 1),
        false,
        'blue',
        '#F2F2F2'
      )
      updateFill(
        `${prefix}_q${i}b`,
        window[`${prefix}_${i}_b`] == 1,
        false,
        'blue',
        '#F2F2F2'
      )
      updateFill(
        `${prefix}_q${i}m`,
        window[`${prefix}_${i}_mb`] == 1 ||
          (useDL
            ? window[`${prefix}_${i}_ml`] == 1
            : window[`${prefix}_${i}_mp`] == 1),
        false,
        'blue',
        '#F2F2F2'
      )
      if (!useDL) {
        updateFill(
          `${prefix}_q${i}p`,
          window[`${prefix}_${i}_p`] == 1,
          false,
          'blue',
          '#F2F2F2'
        )
      } else {
        updateFill(
          `${prefix}_q${i}l`,
          window[`${prefix}_${i}_l`] == 1,
          false,
          'blue',
          '#F2F2F2'
        )
      }
    }
  }
  renderPISection('pi', 11, 28)
  renderPISection('pi', 31, 38, true)
  renderPISection('pi', 41, 48, true)

  // Render BOP (11-48)
  function renderBOPSection (prefix, start, end, useDL = false) {
    for (let i = start; i <= end; i++) {
      // Verifica se as variáveis existem e têm o valor esperado
      const db = window[`${prefix}_${i}_db`] === 1
      const dp = useDL ? false : window[`${prefix}_${i}_dp`] === 1
      const dl = useDL ? window[`${prefix}_${i}_dl`] === 1 : false
      const b = window[`${prefix}_${i}_b`] === 1
      const mb = window[`${prefix}_${i}_mb`] === 1
      const mp = useDL ? false : window[`${prefix}_${i}_mp`] === 1
      const ml = useDL ? window[`${prefix}_${i}_ml`] === 1 : false
      const p = useDL ? false : window[`${prefix}_${i}_p`] === 1
      const l = useDL ? window[`${prefix}_${i}_l`] === 1 : false

      updateFill(
        `${prefix}_q${i}d`,
        db || (useDL ? dl : dp),
        false,
        'red',
        '#F2F2F2'
      )
      updateFill(`${prefix}_q${i}b`, b, false, 'red', '#F2F2F2')
      updateFill(
        `${prefix}_q${i}m`,
        mb || (useDL ? ml : mp),
        false,
        'red',
        '#F2F2F2'
      )
      if (!useDL) {
        updateFill(`${prefix}_q${i}p`, p, false, 'red', '#F2F2F2')
      } else {
        updateFill(`${prefix}_q${i}l`, l, false, 'red', '#F2F2F2')
      }
    }
  }
  renderBOPSection('bop', 11, 28)
  renderBOPSection('bop', 31, 38, true)
  renderBOPSection('bop', 41, 48, true)

  // Limpar formulário
  clearFormInputs(document.forms[0], 'modal_output_pd', 11, 48)

  // Atualizar valores de PD
  updatePDValues(
    [
      'tooth_11',
      'tooth_12',
      'tooth_13',
      'tooth_14',
      'tooth_15',
      'tooth_16',
      'tooth_17',
      'tooth_18',
      'tooth_21',
      'tooth_22',
      'tooth_23',
      'tooth_24',
      'tooth_25',
      'tooth_26',
      'tooth_27',
      'tooth_28',
      'tooth_31',
      'tooth_32',
      'tooth_33',
      'tooth_34',
      'tooth_35',
      'tooth_36',
      'tooth_37',
      'tooth_38',
      'tooth_41',
      'tooth_42',
      'tooth_43',
      'tooth_44',
      'tooth_45',
      'tooth_46',
      'tooth_47',
      'tooth_48'
    ],
    'pi',
    11,
    48
  )

  // Desativar cores se dente ausente (BOP)
  for (let i = 11; i <= 48; i++) {
    if (window[`tooth_${i}`] === 0) {
      ;['d', 'b', 'm', 'p'].forEach(pos => {
        document.getElementById(`bop_q${i}${pos}`).style.fill = '#828282'
      })
      if (i >= 31 && i <= 48) {
        document.getElementById(`bop_q${i}l`).style.fill = '#828282'
      }
    }
  }

  // Atualizar datas e percentuais
  document.getElementById('modal_pi_date').textContent =
    document.forms[0]['input_date'].value
  document.getElementById('modal_pd_bop_date').textContent =
    document.forms[0]['input_date'].value
  document.getElementById('modal_pi_perc').textContent =
    document.forms[0]['output_mean_pi'].value
  document.getElementById('modal_bop_perc').textContent =
    document.forms[0]['output_mean_bop'].value
}
