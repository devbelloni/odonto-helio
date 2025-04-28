// Renderiza áreas de dentes sobrepostas a partir de um objeto JSON

// Lista de dentes e posições
const TEETH = [
  '18',
  '17',
  '16',
  '15',
  '14',
  '13',
  '12',
  '11',
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
const POSITIONS = ['db', 'b', 'mb', 'dp', 'p', 'mp', 'dl', 'l', 'ml']

// Reseta áreas de dentes sobrepostos
function resetSuperimposedToothAreas () {
  TEETH.forEach(tooth => {
    ;['b', 'p', 'l'].forEach(side => {
      const polygon = document.getElementById(`s_polygon_${tooth}_${side}`)
      const polylineAl = document.getElementById(
        `s_polyline_al_${tooth}_${side}`
      )
      const polylineGm = document.getElementById(
        `s_polyline_gm_${tooth}_${side}`
      )
      if (polygon) polygon.style.display = 'none'
      if (polylineAl) polylineAl.style.display = 'none'
      if (polylineGm) polylineGm.style.display = 'none'
    })
    ;['18_17', '17_16', '47_46', '46_45', '48_47'].forEach(inter => {
      ;['b', 'p', 'l'].forEach(side => {
        const polygonInter = document.getElementById(
          `s_polygon_inter_${inter}_${side}`
        )
        const polylineAlInter = document.getElementById(
          `s_polyline_al_inter_${inter}_${side}`
        )
        const polylineGmInter = document.getElementById(
          `s_polyline_gm_inter_${inter}_${side}`
        )
        if (polygonInter) polygonInter.style.display = 'none'
        if (polylineAlInter) polylineAlInter.style.display = 'none'
        if (polylineGmInter) polylineGmInter.style.display = 'none'
      })
    })
  })
}

// Extrai coordenadas horizontais para um dente
function getHorizontalCoords (tooth, jsonObj2) {
  const x = {}
  const prefix = `x_${tooth}_`
  x.db = parseInt(jsonObj2[`${prefix}db`] || 0)
  x.mb = parseInt(jsonObj2[`${prefix}mb`] || 0)
  x.dp = parseInt(jsonObj2[`${prefix}dp`] || 0)
  x.mp = parseInt(jsonObj2[`${prefix}mp`] || 0)
  x.dl = parseInt(jsonObj2[`${prefix}dl`] || 0)
  x.ml = parseInt(jsonObj2[`${prefix}ml`] || 0)
  x.b = (x.db + x.mb) / 2
  x.p = (x.dp + x.mp) / 2
  x.l = (x.dl + x.ml) / 2
  return x
}

// Calcula coordenadas verticais para um dente
function getVerticalCoords (tooth, jsonObj2, side) {
  const y = {}
  const gmPrefix = `gm_${tooth}_${side}`
  const pdPrefix = `pd_${tooth}_${side}`
  const baseY = side.includes('p')
    ? 'gm_OK_p'
    : side.includes('l')
    ? 'gm_UK_l'
    : side.includes('b')
    ? 'gm_OK_b'
    : 'gm_UK_b'
  const factor = side.includes('p') || side.includes('l') ? -1 : 1
  const scale =
    side.includes('46') || side.includes('47') || side.includes('48')
      ? 6.05
      : 6.5

  y.gm =
    parseInt(jsonObj2[baseY] || 0) +
    factor * scale * parseInt(jsonObj2[`${gmPrefix}`] || 0)
  y.pd = scale * parseInt(jsonObj2[`${pdPrefix}`] || 0)
  y.al = y.gm + (side.includes('p') || side.includes('l') ? y.pd : -y.pd)
  return y
}

// Renderiza dente individual
function renderTooth (tooth, jsonObj2) {
  if (Number(jsonObj2[`tooth_${tooth}`]) !== 1) {
    return
  }

  const x = getHorizontalCoords(tooth, jsonObj2)
  ;['b', 'p', 'l'].forEach(side => {
    const y = getVerticalCoords(tooth, jsonObj2, `${side}`)
    const coords = {
      gm: [x.db, y.gm.db, x.b, y.gm.b, x.mb, y.gm.mb],
      pd: [x.db, y.pd.db, x.b, y.pd.b, x.mb, y.pd.mb],
      al: [x.db, y.al.db, x.b, y.al.b, x.mb, y.al.mb]
    }

    if (side === 'p' || side === 'b') {
      coords.gm.push(x.mp, y.gm.mp)
      coords.pd.push(x.mp, y.pd.mp)
      coords.al.push(x.mp, y.al.mp)
    } else {
      coords.gm.push(x.ml, y.gm.ml)
      coords.pd.push(x.ml, y.pd.ml)
      coords.al.push(x.ml, y.al.ml)
    }

    superimposedPockets[tooth].storeCoordinates(
      x.db,
      x.mb,
      x.dp,
      x.mp,
      x.b,
      x.p,
      y.gm.db,
      y.gm.b,
      y.gm.mb,
      y.pd.dp,
      y.pd.p,
      y.pd.mp,
      y.gm.dp,
      y.gm.p,
      y.gm.mp,
      y.pd.dl,
      y.pd.l,
      y.pd.ml,
      y.al.db,
      y.al.b,
      y.al.mb,
      y.al.dp,
      y.al.p,
      y.al.mp
    )

    const polygonId = `s_polygon_${tooth}_${side}`
    const polylineAlId = `s_polyline_al_${tooth}_${side}`
    const polylineGmId = `s_polyline_gm_${tooth}_${side}`

    document.getElementById(polygonId).setAttribute(
      'points',
      `
            ${x.db}, ${y.al.db} ${x.b}, ${y.al.b} ${x.mb}, ${y.al.mb}
            ${x.mb}, ${y.gm.mb} ${x.b}, ${y.gm.b} ${x.db}, ${y.gm.db}
        `.trim()
    )
    document
      .getElementById(polylineAlId)
      .setAttribute(
        'points',
        `${x.db}, ${y.al.db} ${x.b}, ${y.al.b} ${x.mb}, ${y.al.mb}`
      )
    document
      .getElementById(polylineGmId)
      .setAttribute(
        'points',
        `${x.db}, ${y.gm.db} ${x.b}, ${y.gm.b} ${x.mb}, ${y.gm.mb}`
      )
    document.getElementById(polygonId).style.display = 'block'
    document.getElementById(polylineAlId).style.display = 'block'
    document.getElementById(polylineGmId).style.display = 'block'
  })
}

// Renderiza área interdentária
function renderInterTooth (tooth1, tooth2, jsonObj2) {
  if (
    Number(jsonObj2[`tooth_${tooth1}`]) !== 1 ||
    Number(jsonObj2[`tooth_${tooth2}`]) !== 1
  ) {
    return
  }

  const x1 = getHorizontalCoords(tooth1, jsonObj2)
  const x2 = getHorizontalCoords(tooth2, jsonObj2)
  const y1 = getVerticalCoords(tooth1, jsonObj2, `${tooth1}_b`)
  const y2 = getVerticalCoords(tooth2, jsonObj2, `${tooth2}_b`)
  ;['b', 'p', 'l'].forEach(side => {
    const polygonId = `s_polygon_inter_${tooth1}_${tooth2}_${side}`
    const polylineAlId = `s_polyline_al_inter_${tooth1}_${tooth2}_${side}`
    const polylineGmId = `s_polyline_gm_inter_${tooth1}_${tooth2}_${side}`

    document.getElementById(polygonId).setAttribute(
      'points',
      `
            ${x1.mb}, ${y1.al.mb} ${x2.db}, ${y2.al.db}
            ${x2.db}, ${y2.gm.db} ${x1.mb}, ${y1.gm.mb}
        `.trim()
    )
    document
      .getElementById(polylineAlId)
      .setAttribute('points', `${x1.mb}, ${y1.al.mb} ${x2.db}, ${y2.al.db}`)
    document
      .getElementById(polylineGmId)
      .setAttribute('points', `${x1.mb}, ${y1.gm.mb} ${x2.db}, ${y2.gm.db}`)
    document.getElementById(polygonId).style.display = 'block'
    document.getElementById(polylineAlId).style.display = 'block'
    document.getElementById(polylineGmId).style.display = 'block'
  })
}

// Renderiza formulário sobreposto
function render_superimposed_form (jsonObj2) {
  if (!jsonObj2 || !jsonObj2.tooth_18) {
    console.error('Dados inválidos para render_superimposed_form.')
    return
  }

  resetSuperimposedToothAreas()

  document.getElementById('initial_exam_tab').style.display =
    jsonObj2.initial_exam === 1 ? 'block' : 'none'
  document.getElementById('reevaluation_tab').style.display =
    jsonObj2.reevaluation === 1 ? 'block' : 'none'

  renderTooth('18', jsonObj2)
  renderInterTooth('18', '17', jsonObj2)
  renderTooth('17', jsonObj2)
  renderInterTooth('17', '16', jsonObj2)
  renderTooth('48', jsonObj2)
  renderInterTooth('48', '47', jsonObj2)
  renderTooth('47', jsonObj2)
  renderInterTooth('47', '46', jsonObj2)
  renderTooth('46', jsonObj2)
  renderInterTooth('46', '45', jsonObj2)
}
