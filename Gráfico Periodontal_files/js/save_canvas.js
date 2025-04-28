function saveCanvas (varx, vary, varw, varh) {
  document.getElementById('side_menu').style.display = 'none'
  document.getElementById('download-frame-ok-uk').style.display = 'none'

  html2canvas(document.querySelector('#form_periodontal_chart'), {
    width: varw,
    height: varh,
    x: varx,
    y: vary
  }).then(canvas => {
    var link = document.createElement('a')
    link.download = 'chart-perio-tools.png'
    link.href = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
    link.click()
  })

  document.getElementById('side_menu').style.display = 'block'
  document.getElementById('download-frame-ok-uk').style.display = 'block'
}
