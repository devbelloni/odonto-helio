// Análise e renderização de dados superimpostos

const CATEGORIES = ['≤2', '3', '4', '5', '6', '7', '8', '9', '≥10']
const SUFFIXES = ['_db', '_b', '_mb', '_dp', '_p', '_mp', '_dl', '_l', '_ml']

function countPresentKeys (jsonObj, prefix) {
  return Object.keys(jsonObj)
    .filter(key => key.startsWith(prefix))
    .map(key => key.split('_')[1])
    .filter(tooth => jsonObj[`tooth_${tooth}`] == '1').length
}

function countValueKeys (jsonObj, prefix, value) {
  return Object.entries(jsonObj).filter(
    ([key, val]) =>
      key.startsWith(prefix) &&
      val == value &&
      jsonObj[`tooth_${key.split('_')[1]}`] == '1'
  ).length
}

function calculateAverages (jsonObj, prefix) {
  const values = Object.entries(jsonObj)
    .filter(
      ([key, _]) =>
        key.startsWith(prefix) && jsonObj[`tooth_${key.split('_')[1]}`] == '1'
    )
    .map(([_, val]) => parseInt(val))
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0
}

function renderAnalysis (jsonObj, dateId, varPrefix, piId) {
  const numTeeth = Object.entries(jsonObj).filter(
    ([key, val]) => key.startsWith('tooth_') && val == '1'
  ).length
  const bopPresent = countPresentKeys(jsonObj, 'bop_')
  const pdPresent = countPresentKeys(jsonObj, 'pd_')
  const bopValue1 = countValueKeys(jsonObj, 'bop_', '1')
  const piValue1 = countValueKeys(jsonObj, 'pi_', '1')
  const pdValue4 = countValueKeys(jsonObj, 'pd_', '4')
  const pdValue5 = countValueKeys(jsonObj, 'pd_', '5')
  const pdGreater5 = Object.entries(jsonObj).filter(
    ([key, val]) =>
      key.startsWith('pd_') &&
      parseInt(val) > 5 &&
      jsonObj[`tooth_${key.split('_')[1]}`] == '1'
  ).length
  const avgPd = calculateAverages(jsonObj, 'pd_')
  const avgGm = calculateAverages(jsonObj, 'gm_')
  const avgCal = -1 * (avgPd - avgGm)

  document.getElementById(dateId).textContent = jsonObj.date
  document.getElementById(`${varPrefix}1`).textContent = numTeeth
  document.getElementById(`${varPrefix}2`).textContent = Math.round(
    (piValue1 / bopPresent) * 100
  )
  document.getElementById(`${varPrefix}3`).textContent = (
    (pdValue4 / pdPresent) *
    100
  ).toFixed(1)
  document.getElementById(`${varPrefix}4`).textContent = (
    (pdValue5 / pdPresent) *
    100
  ).toFixed(1)
  document.getElementById(`${varPrefix}5`).textContent = (
    (pdGreater5 / pdPresent) *
    100
  ).toFixed(1)
  document.getElementById(`${varPrefix}6`).textContent = avgPd.toFixed(1)
  document.getElementById(`${varPrefix}7`).textContent = avgGm.toFixed(1)
  document.getElementById(`${varPrefix}8`).textContent = avgCal.toFixed(1)
  document.getElementById(`${varPrefix}9`).textContent = Math.round(
    (bopValue1 / bopPresent) * 100
  )

  document.getElementById(piId).style.width =
    Math.round((piValue1 / bopPresent) * 100 * 3) + 'px'
  document.getElementById(`${piId.slice(0, -2)}fourmm`).style.width =
    ((pdValue4 / pdPresent) * 100 * 3).toFixed(1) + 'px'
  document.getElementById(`${piId.slice(0, -2)}fivemm`).style.width =
    ((pdValue5 / pdPresent) * 100 * 3).toFixed(1) + 'px'
  document.getElementById(`${piId.slice(0, -2)}afivemm`).style.width =
    ((pdGreater5 / pdPresent) * 100 * 3).toFixed(1) + 'px'
  document.getElementById(`${piId.slice(0, -2)}bop`).style.width =
    Math.round((bopValue1 / bopPresent) * 100 * 3) + 'px'
}

function render_superimposed_analysis (jsonObj1, jsonObj2) {
  if (!jsonObj1.tooth_18 || !jsonObj2.tooth_18) return

  renderAnalysis(jsonObj1, 'date1', 'var', 'pi')
  renderAnalysis(jsonObj2, 'seconddate1', 'secondvar', 'secondpi')

  calculateBaderstenAnalysis(jsonObj1, jsonObj2)
  calculateRamseierAnalysis(jsonObj1, jsonObj2)
  renderRamseierTable(jsonObj1, jsonObj2)
}

function renderBaderstenChart (categories) {
  const container = document.getElementById('BaderstenChartContainer')
  container.innerHTML = ''
  const order = ['≤2', '3', '4', '5', '6', '7', '8', '9', '≥10']
  const wValues = [2, 3, 4, 5, 6, 7, 8, 9, 10]
  const mValues = order.map(cat =>
    categories[cat].length
      ? categories[cat].reduce((a, b) => a + b, 0) / categories[cat].length
      : 0
  )
  const validCount = order.map(
    cat => categories[cat].filter(change => !isNaN(change)).length
  )

  const maxHeight = 300
  order.forEach((cat, i) => {
    const bar = document.createElement('div')
    bar.className = 'badersten-bar'
    const dKat = document.createElement('div')
    dKat.className = 'd_kat'
    const mKat = document.createElement('div')
    mKat.className = 'm_kat'

    if (isNaN(mValues[i]) || (mValues[i] === 0 && validCount[i] === 0)) {
      dKat.style.height = `${wValues[i] * (100 / 10)}px`
      dKat.style.backgroundColor = '#E7F3FD'
      mKat.style.height = `${wValues[i] * (100 / 10)}px`
      mKat.style.backgroundColor = '#E7F3FD'
    } else if (mValues[i] === 0 && validCount[i] > 0) {
      dKat.style.height = `${wValues[i] * (100 / 10)}px`
      dKat.style.backgroundColor = '#0069CD'
      mKat.style.height = `${wValues[i] * (100 / 10)}px`
      mKat.style.backgroundColor = '#0069CD'
    } else if (mValues[i] > 0) {
      dKat.style.height = `${wValues[i] * (100 / 5)}px`
      dKat.style.backgroundColor = '#0069CD'
      mKat.style.height = `${mValues[i] * (maxHeight / 10) * (2 / 3)}px`
      mKat.style.backgroundColor = '#CD0000'
    } else {
      const dValue = wValues[i] + mValues[i]
      dKat.style.height = `${dValue * (maxHeight / 10) * (2 / 3)}px`
      dKat.style.backgroundColor = '#0069CD'
      mKat.style.height = `${mValues[i] * (100 / 5) * -1}px`
      mKat.style.backgroundColor = '#5FFF82'
    }

    bar.appendChild(dKat)
    bar.appendChild(mKat)
    container.appendChild(bar)
  })
}

function calculateBaderstenAnalysis (jsonObj1, jsonObj2) {
  const teethPresent = Object.keys(jsonObj2)
    .filter(key => key.startsWith('tooth_') && jsonObj2[key] === '1')
    .map(key => key.split('_')[1])
  const pdBefore = {}
  const pdAfter = {}
  teethPresent.forEach(tooth =>
    SUFFIXES.forEach(s => {
      const k = `pd_${tooth}${s}`
      pdBefore[k] = parseInt(jsonObj1[k])
      pdAfter[k] = parseInt(jsonObj2[k])
    })
  )
  const changes = {}
  for (let k in pdBefore) changes[k] = pdAfter[k] - pdBefore[k]
  const categories = CATEGORIES.reduce((acc, cat) => ((acc[cat] = []), acc), {})
  for (let k in pdBefore) {
    const v = pdBefore[k]
    ;(v <= 2
      ? categories['≤2']
      : v === 3
      ? categories['3']
      : v === 4
      ? categories['4']
      : v === 5
      ? categories['5']
      : v === 6
      ? categories['6']
      : v === 7
      ? categories['7']
      : v === 8
      ? categories['8']
      : v === 9
      ? categories['9']
      : categories['≥10']
    ).push(changes[k])
  }
  const table = document.querySelector('#BaderstenAnalysisTable tbody')
  table.innerHTML = ''
  CATEGORIES.forEach(cat => {
    const changes = categories[cat]
    const row = document.createElement('tr')
    if (changes.length) {
      const valid = changes.filter(c => !isNaN(c))
      row.innerHTML = valid.length
        ? `
                <td>${cat}</td>
                <td>${(
                  parseFloat(cat) +
                  valid.reduce((a, b) => a + b, 0) / valid.length
                ).toFixed(2)}</td>
                <td>${(valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(
                  2
                )}</td>
                <td>${valid.length}</td>
            `
        : `
                <td>${cat}</td><td>-</td><td>-</td><td>0</td>
            `
    } else row.innerHTML = `<td>${cat}</td><td>-</td><td>-</td><td>0</td>`
    table.appendChild(row)
  })
  renderBaderstenChart(categories)
}

function renderEmptyBaderstenTable () {
  const categories = CATEGORIES.reduce(
    (acc, cat) => ((acc[cat] = [0]), acc),
    {}
  )
  const table = document.querySelector('#BaderstenAnalysisTable tbody')
  table.innerHTML = ''
  CATEGORIES.forEach(cat => {
    const row = document.createElement('tr')
    row.innerHTML = `<td>${cat}</td><td>-</td><td>-</td><td>0</td>`
    table.appendChild(row)
  })
}

function renderEmptyBaderstenChart () {
  renderBaderstenChart(
    CATEGORIES.reduce((acc, cat) => ((acc[cat] = []), acc), {})
  )
}

function calculateRamseierAnalysis (jsonObj1, jsonObj2) {
  const teethPresent = Object.keys(jsonObj2)
    .filter(key => key.startsWith('tooth_') && jsonObj2[key] === '1')
    .map(key => key.split('_')[1])
  function getKeys (tooth) {
    return SUFFIXES.map(s => `pd_${tooth}${s}`)
  }
  const keysPresent = teethPresent
    .flatMap(getKeys)
    .filter(k => jsonObj2.hasOwnProperty(k))
  const bopPercentages = CATEGORIES.reduce((acc, cat) => {
    const filter =
      cat === '≤2'
        ? v => v <= 2 && v > 0
        : cat === '≥10'
        ? v => v >= 10
        : v => v == parseInt(cat)
    const bopBefore = keysPresent.filter(
      k =>
        filter(parseInt(jsonObj1[k])) &&
        jsonObj1[`bop_${k.split('_')[1]}_${k.split('_')[2]}`] === '1'
    ).length
    const bopAfter = keysPresent.filter(
      k =>
        filter(parseInt(jsonObj2[k])) &&
        jsonObj2[`bop_${k.split('_')[1]}_${k.split('_')[2]}`] === '1'
    ).length
    const totalBefore = keysPresent.filter(k =>
      filter(parseInt(jsonObj1[k]))
    ).length
    const totalAfter = keysPresent.filter(k =>
      filter(parseInt(jsonObj2[k]))
    ).length
    acc[cat] = {
      before: totalBefore ? (bopBefore / totalBefore) * 100 : 0,
      after: totalAfter ? (bopAfter / totalAfter) * 100 : 0
    }
    return acc
  }, {})
  for (let cat in bopPercentages) {
    bopPercentages[cat].diff =
      bopPercentages[cat].after - bopPercentages[cat].before
    bopPercentages[cat].remaining = 100 - bopPercentages[cat].before
  }
  const container = document.querySelector('.ramseier-chart-container')
  container.innerHTML = ''
  const maxHeight = 300
  CATEGORIES.forEach(cat => {
    const bar = document.createElement('div')
    bar.classList.add('ramseier-bar')
    const after = document.createElement('div')
    after.classList.add('ramseier-segment', 'after')
    after.style.height = (bopPercentages[cat].after / 150) * maxHeight + 'px'
    const diff = document.createElement('div')
    diff.classList.add('ramseier-segment', 'diff')
    if (bopPercentages[cat].diff < 0)
      diff.style.height =
        (Math.abs(bopPercentages[cat].diff) / 150) * maxHeight + 'px'
    const remaining = document.createElement('div')
    remaining.classList.add('ramseier-segment', 'remaining')
    const rem =
      100 -
      bopPercentages[cat].after -
      (bopPercentages[cat].diff < 0 ? Math.abs(bopPercentages[cat].diff) : 0)
    remaining.style.height = (rem / 150) * maxHeight + 'px'
    bar.appendChild(after)
    bar.appendChild(diff)
    bar.appendChild(remaining)
    container.appendChild(bar)
  })
  const xValues = CATEGORIES.map(cat =>
    cat === '≤2' ? 2 : cat === '≥10' ? 10 : parseInt(cat)
  )
  const yValues = CATEGORIES.map(cat => bopPercentages[cat].after).filter(
    v => v !== 0
  )
  const xFiltered = xValues.filter(
    (_, i) => bopPercentages[CATEGORIES[i]].after !== 0
  )
  const r = jStat.corrcoeff(xFiltered, yValues)
  const n = xFiltered.length
  const tStat = r * Math.sqrt((n - 2) / (1 - r * r))
  const pValue = 1 - 2 * (1 - tDistCDF(Math.abs(tStat), n - 2))
  const z = 0.5 * Math.log((1 + r) / (1 - r))
  const SEz = 1 / Math.sqrt(n - 3)
  const zLower = z - 1.96 * SEz
  const zUpper = z + 1.96 * SEz
  const rLower = (Math.exp(2 * zLower) - 1) / (Math.exp(2 * zLower) + 1)
  const rUpper = (Math.exp(2 * zUpper) - 1) / (Math.exp(2 * zUpper) + 1)
  document.getElementById(
    'yourFirstContainerId'
  ).innerHTML = `<p><b>Correlation and Distribution</b><p>Pearson r = ${r.toFixed(
    2
  )}, df = ${n - 2 >= 0 ? n - 2 : 'NaN'}, <i>p = ${pValue.toFixed(
    4
  )}</i>, 95% CI: [${rLower.toFixed(4)}, ${rUpper.toFixed(4)}]</p>`
}

function tDistCDF (t, df) {
  let x = df / (df + t * t)
  return t < 0 ? betai(df / 2, 0.5, x) / 2 : 1 - betai(df / 2, 0.5, x) / 2
}
function betai (a, b, x) {
  return x < (a + 1) / (a + b + 2)
    ? (Math.exp(
        gammln(a + b) -
          gammln(a) -
          gammln(b) +
          a * Math.log(x) +
          b * Math.log(1 - x)
      ) *
        betacf(a, b, x)) /
        a
    : 1 -
        (Math.exp(
          gammln(a + b) -
            gammln(a) -
            gammln(b) +
            a * Math.log(x) +
            b * Math.log(1 - x)
        ) *
          betacf(b, a, 1 - x)) /
          b
}
function gammln (xx) {
  const cof = [
    76.18009172947146, -86.50532032941677, 24.01409824083091,
    -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5
  ]
  let y = xx,
    tmp = y + 5.5 - (y + 0.5) * Math.log(y + 5.5)
  let ser = 1
  for (let j = 0; j <= 5; j++) ser += cof[j] / ++y
  return -tmp + Math.log((2.5066282746310005 * ser) / y)
}
function betacf (a, b, x) {
  const MAXIT = 100,
    EPS = 3e-7,
    FPMIN = 1e-30
  let qab = a + b,
    qap = a + 1,
    qam = a - 1,
    c = 1,
    d = 1 - (qab * x) / qap,
    h = d ? 1 / d : 1 / FPMIN
  for (let m = 1; m <= MAXIT; m++) {
    let m2 = 2 * m,
      aa = (m * (b - m) * x) / ((qam + m2) * (a + m2))
    d = 1 + aa * d
    c = 1 + aa / c
    d = 1 / d
    h *= d * c
    aa = ((-(a + m) * (qab + m)) / ((a + m2) * (qap + m2))) * x
    d = 1 + aa * d
    c = 1 + aa / c
    d = 1 / d
    if (Math.abs(d * c - 1) < EPS) break
  }
  return h
}

function renderEmptyRamseierChart () {
  calculateRamseierAnalysis(
    {},
    CATEGORIES.reduce(
      (acc, cat) => (
        (acc[cat] = { before: 0, after: 0, diff: 0, remaining: 100 }), acc
      ),
      {}
    )
  )
}

function renderRamseierTable (jsonObj1, jsonObj2) {
  const teethPresent = Object.keys(jsonObj2).filter(
    key => key.startsWith('tooth_') && jsonObj2[key] == 1
  )
  const counters = {
    pd_reduced: { bop_reduced: 0, bop_same: 0, bop_increased: 0 },
    pd_same: { bop_reduced: 0, bop_same: 0, bop_increased: 0 },
    pd_increased: { bop_reduced: 0, bop_same: 0, bop_increased: 0 }
  }
  teethPresent.forEach(tooth =>
    SUFFIXES.forEach(s => {
      const pdKey = `pd_${tooth.split('_')[1]}${s}`,
        bopKey = `bop_${tooth.split('_')[1]}${s}`
      if (jsonObj1[pdKey] && jsonObj2[pdKey]) {
        const pdChange = jsonObj2[pdKey] - jsonObj1[pdKey],
          bopChange = jsonObj2[bopKey] - jsonObj1[bopKey]
        const pdCat =
          pdChange < 0
            ? 'pd_reduced'
            : pdChange === 0
            ? 'pd_same'
            : 'pd_increased'
        const bopCat =
          bopChange < 0
            ? 'bop_reduced'
            : bopChange === 0
            ? 'bop_same'
            : 'bop_increased'
        counters[pdCat][bopCat]++
      }
    })
  )
  const observed = [
    [
      counters.pd_reduced.bop_reduced,
      counters.pd_reduced.bop_same,
      counters.pd_reduced.bop_increased
    ],
    [
      counters.pd_same.bop_reduced,
      counters.pd_same.bop_same,
      counters.pd_same.bop_increased
    ],
    [
      counters.pd_increased.bop_reduced,
      counters.pd_increased.bop_same,
      counters.pd_increased.bop_increased
    ]
  ]
  const rowSums = observed.map(r => r.reduce((a, b) => a + b, 0))
  const colSums = observed[0].map((_, i) =>
    observed.reduce((s, r) => s + r[i], 0)
  )
  const grandTotal = rowSums.reduce((a, b) => a + b, 0)
  const expected = observed.map((_, i) =>
    observed[i].map((_, j) => (rowSums[i] * colSums[j]) / grandTotal)
  )
  const chi = chiSquare(observed, expected)
  const df = 4
  const pValue = 1 - jStat.chisquare.cdf(chi, df)
  const tableHTML = `<table id='RamseierAnalysisTable'><thead><tr><th>PD / BOP</th><th>BOP reduced</th><th>BOP unchanged</th><th>BOP increased</th></tr></thead><tbody>${Object.entries(
    {
      pd_reduced: 'PD reduced',
      pd_same: 'PD unchanged',
      pd_increased: 'PD increased'
    }
  )
    .map(
      ([k, v]) =>
        `<tr><td>${v}</td><td>${counters[k].bop_reduced}</td><td>${counters[k].bop_same}</td><td>${counters[k].bop_increased}</td></tr>`
    )
    .join('')}</tbody></table>`
  document.getElementById('yourSecondContainerId').innerHTML = tableHTML
  document.getElementById(
    'yourStatsContainerId'
  ).innerHTML = `<p>χ<sup>2</sup> = ${chi.toFixed(
    4
  )}, df = ${df}, <i>p = ${pValue.toFixed(4)}</i></p>`
}

function chiSquare (observed, expected) {
  return observed.reduce(
    (sum, row, i) =>
      sum +
      row.reduce(
        (s, v, j) => s + Math.pow(v - expected[i][j], 2) / expected[i][j],
        0
      ),
    0
  )
}

function renderEmptyRamseierTable () {
  const counters = {
    pd_reduced: { bop_reduced: 0, bop_same: 0, bop_increased: 0 },
    pd_same: { bop_reduced: 0, bop_same: 0, bop_increased: 0 },
    pd_increased: { bop_reduced: 0, bop_same: 0, bop_increased: 0 }
  }
  const tableHTML = `<table id='RamseierAnalysisTable'><thead><tr><th>PD / BOP</th><th>BOP reduced</th><th>BOP unchanged</th><th>BOP increased</th></tr></thead><tbody>${Object.entries(
    {
      pd_reduced: 'PD reduced',
      pd_same: 'PD unchanged',
      pd_increased: 'PD increased'
    }
  )
    .map(
      ([k, v]) =>
        `<tr><td>${v}</td><td>${counters[k].bop_reduced}</td><td>${counters[k].bop_same}</td><td>${counters[k].bop_increased}</td></tr>`
    )
    .join('')}</tbody></table>`
  document.getElementById('yourSecondContainerId').innerHTML = tableHTML
  document.getElementById(
    'yourStatsContainerId'
  ).innerHTML = `<p>χ<sup>2</sup> = NaN, df = NaN, <i>p = NaN</i></p>`
}

window.addEventListener('load', renderEmptyBaderstenTable)
window.addEventListener('load', renderEmptyBaderstenChart)
window.addEventListener('load', renderEmptyRamseierTable)
window.addEventListener('load', renderEmptyRamseierChart)
