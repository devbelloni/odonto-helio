// Formular rendern
// Dieser Code rendert die blauen Flächen der übergelagerten (superimposed) Messungen.
function render_form (jsonObj1) {
  // Setzen Sie zuerst alle Flächenwerte zurück
  resetToothAreas()

  // Überschreiben der leeren Werte mit den Werten aus dem JavaScript-Objekt
  date = decodeURIComponent(jsonObj1.date)
  document.forms[0]['date'].value = date
  patient_last_name = decodeURIComponent(jsonObj1.patient_last_name)
  document.forms[0]['patient_last_name'].value = patient_last_name
  patient_first_name = decodeURIComponent(jsonObj1.patient_first_name)
  document.forms[0]['patient_first_name'].value = patient_first_name
  patient_dob = decodeURIComponent(jsonObj1.patient_dob)
  document.forms[0]['patient_dob'].value = patient_dob

  initial_exam = jsonObj1.initial_exam
  reevaluation = jsonObj1.reevaluation

  document.getElementById('initial_exam_tab').style.display = 'none'
  document.getElementById('reevaluation_tab').style.display = 'none'

  if (initial_exam == 1) {
    document.getElementById('initial_exam_tab').style.display = 'block'
  }

  if (reevaluation == 1) {
    document.getElementById('reevaluation_tab').style.display = 'block'
  }

  input_reevaluation = decodeURIComponent(jsonObj1.input_reevaluation)
  document.forms[0]['input_reevaluation'].value = input_reevaluation

  clinician = decodeURIComponent(jsonObj1.clinician)
  document.forms[0]['clinician'].value = clinician

  tooth_18 = Number(jsonObj1.tooth_18)
  mobility_18 = Number(jsonObj1.mobility_18)
  Furkation_18_b = Number(jsonObj1.furcation_18_b)
  Furkation_18_dp = Number(jsonObj1.furcation_18_dp)
  Furkation_18_mp = Number(jsonObj1.furcation_18_mp)
  Implantat_18 = Number(jsonObj1.implant_18)
  bop_18_db = Number(jsonObj1.bop_18_db)
  bop_18_b = Number(jsonObj1.bop_18_b)
  bop_18_mb = Number(jsonObj1.bop_18_mb)
  pi_18_db = Number(jsonObj1.pi_18_db)
  pi_18_b = Number(jsonObj1.pi_18_b)
  pi_18_mb = Number(jsonObj1.pi_18_mb)
  bop_18_dp = Number(jsonObj1.bop_18_dp)
  bop_18_p = Number(jsonObj1.bop_18_p)
  bop_18_mp = Number(jsonObj1.bop_18_mp)
  pi_18_dp = Number(jsonObj1.pi_18_dp)
  pi_18_p = Number(jsonObj1.pi_18_p)
  pi_18_mp = Number(jsonObj1.pi_18_mp)
  gm_18_db = Number(jsonObj1.gm_18_db)
  gm_18_b = Number(jsonObj1.gm_18_b)
  gm_18_mb = Number(jsonObj1.gm_18_mb)
  pd_18_db = Number(jsonObj1.pd_18_db)
  pd_18_b = Number(jsonObj1.pd_18_b)
  pd_18_mb = Number(jsonObj1.pd_18_mb)
  gm_18_dp = Number(jsonObj1.gm_18_dp)
  gm_18_p = Number(jsonObj1.gm_18_p)
  gm_18_mp = Number(jsonObj1.gm_18_mp)
  pd_18_dp = Number(jsonObj1.pd_18_dp)
  pd_18_p = Number(jsonObj1.pd_18_p)
  pd_18_mp = Number(jsonObj1.pd_18_mp)
  note_18 = decodeURIComponent(jsonObj1.note_18)

  document.forms[0]['mobility_18'].value = mobility_18
  document.forms[0]['pd_18_db'].value = pd_18_db
  document.forms[0]['pd_18_b'].value = pd_18_b
  document.forms[0]['pd_18_mb'].value = pd_18_mb
  document.forms[0]['gm_18_db'].value = gm_18_db
  document.forms[0]['gm_18_b'].value = gm_18_b
  document.forms[0]['gm_18_mb'].value = gm_18_mb
  document.forms[0]['pd_18_dp'].value = pd_18_dp
  document.forms[0]['pd_18_p'].value = pd_18_p
  document.forms[0]['pd_18_mp'].value = pd_18_mp
  document.forms[0]['gm_18_dp'].value = gm_18_dp
  document.forms[0]['gm_18_p'].value = gm_18_p
  document.forms[0]['gm_18_mp'].value = gm_18_mp
  document.forms[0]['note_18'].value = note_18

  toggle_implant_18()
  toggle_implant_18()
  toggle_tooth_18()
  change_probing_18()
  toggle_tooth_18()
  //change_probing_18();

  tooth_17 = Number(jsonObj1.tooth_17)
  mobility_17 = Number(jsonObj1.mobility_17)
  Furkation_17_b = Number(jsonObj1.furcation_17_b)
  Furkation_17_dp = Number(jsonObj1.furcation_17_dp)
  Furkation_17_mp = Number(jsonObj1.furcation_17_mp)
  Implantat_17 = Number(jsonObj1.implant_17)
  bop_17_db = Number(jsonObj1.bop_17_db)
  bop_17_b = Number(jsonObj1.bop_17_b)
  bop_17_mb = Number(jsonObj1.bop_17_mb)
  pi_17_db = Number(jsonObj1.pi_17_db)
  pi_17_b = Number(jsonObj1.pi_17_b)
  pi_17_mb = Number(jsonObj1.pi_17_mb)
  bop_17_dp = Number(jsonObj1.bop_17_dp)
  bop_17_p = Number(jsonObj1.bop_17_p)
  bop_17_mp = Number(jsonObj1.bop_17_mp)
  pi_17_dp = Number(jsonObj1.pi_17_dp)
  pi_17_p = Number(jsonObj1.pi_17_p)
  pi_17_mp = Number(jsonObj1.pi_17_mp)
  gm_17_db = Number(jsonObj1.gm_17_db)
  gm_17_b = Number(jsonObj1.gm_17_b)
  gm_17_mb = Number(jsonObj1.gm_17_mb)
  pd_17_db = Number(jsonObj1.pd_17_db)
  pd_17_b = Number(jsonObj1.pd_17_b)
  pd_17_mb = Number(jsonObj1.pd_17_mb)
  gm_17_dp = Number(jsonObj1.gm_17_dp)
  gm_17_p = Number(jsonObj1.gm_17_p)
  gm_17_mp = Number(jsonObj1.gm_17_mp)
  pd_17_dp = Number(jsonObj1.pd_17_dp)
  pd_17_p = Number(jsonObj1.pd_17_p)
  pd_17_mp = Number(jsonObj1.pd_17_mp)
  note_17 = decodeURIComponent(jsonObj1.note_17)

  document.forms[0]['mobility_17'].value = mobility_17
  document.forms[0]['pd_17_db'].value = pd_17_db
  document.forms[0]['pd_17_b'].value = pd_17_b
  document.forms[0]['pd_17_mb'].value = pd_17_mb
  document.forms[0]['gm_17_db'].value = gm_17_db
  document.forms[0]['gm_17_b'].value = gm_17_b
  document.forms[0]['gm_17_mb'].value = gm_17_mb
  document.forms[0]['pd_17_dp'].value = pd_17_dp
  document.forms[0]['pd_17_p'].value = pd_17_p
  document.forms[0]['pd_17_mp'].value = pd_17_mp
  document.forms[0]['gm_17_dp'].value = gm_17_dp
  document.forms[0]['gm_17_p'].value = gm_17_p
  document.forms[0]['gm_17_mp'].value = gm_17_mp
  document.forms[0]['note_17'].value = note_17

  toggle_implant_17()
  toggle_implant_17()
  toggle_tooth_17()
  change_probing_17()
  toggle_tooth_17()
  //change_probing_17();

  tooth_16 = Number(jsonObj1.tooth_16)
  mobility_16 = Number(jsonObj1.mobility_16)
  Furkation_16_b = Number(jsonObj1.furcation_16_b)
  Furkation_16_dp = Number(jsonObj1.furcation_16_dp)
  Furkation_16_mp = Number(jsonObj1.furcation_16_mp)
  Implantat_16 = Number(jsonObj1.implant_16)
  bop_16_db = Number(jsonObj1.bop_16_db)
  bop_16_b = Number(jsonObj1.bop_16_b)
  bop_16_mb = Number(jsonObj1.bop_16_mb)
  pi_16_db = Number(jsonObj1.pi_16_db)
  pi_16_b = Number(jsonObj1.pi_16_b)
  pi_16_mb = Number(jsonObj1.pi_16_mb)
  bop_16_dp = Number(jsonObj1.bop_16_dp)
  bop_16_p = Number(jsonObj1.bop_16_p)
  bop_16_mp = Number(jsonObj1.bop_16_mp)
  pi_16_dp = Number(jsonObj1.pi_16_dp)
  pi_16_p = Number(jsonObj1.pi_16_p)
  pi_16_mp = Number(jsonObj1.pi_16_mp)
  gm_16_db = Number(jsonObj1.gm_16_db)
  gm_16_b = Number(jsonObj1.gm_16_b)
  gm_16_mb = Number(jsonObj1.gm_16_mb)
  pd_16_db = Number(jsonObj1.pd_16_db)
  pd_16_b = Number(jsonObj1.pd_16_b)
  pd_16_mb = Number(jsonObj1.pd_16_mb)
  gm_16_dp = Number(jsonObj1.gm_16_dp)
  gm_16_p = Number(jsonObj1.gm_16_p)
  gm_16_mp = Number(jsonObj1.gm_16_mp)
  pd_16_dp = Number(jsonObj1.pd_16_dp)
  pd_16_p = Number(jsonObj1.pd_16_p)
  pd_16_mp = Number(jsonObj1.pd_16_mp)
  note_16 = decodeURIComponent(jsonObj1.note_16)

  document.forms[0]['mobility_16'].value = mobility_16
  document.forms[0]['pd_16_db'].value = pd_16_db
  document.forms[0]['pd_16_b'].value = pd_16_b
  document.forms[0]['pd_16_mb'].value = pd_16_mb
  document.forms[0]['gm_16_db'].value = gm_16_db
  document.forms[0]['gm_16_b'].value = gm_16_b
  document.forms[0]['gm_16_mb'].value = gm_16_mb
  document.forms[0]['pd_16_dp'].value = pd_16_dp
  document.forms[0]['pd_16_p'].value = pd_16_p
  document.forms[0]['pd_16_mp'].value = pd_16_mp
  document.forms[0]['gm_16_dp'].value = gm_16_dp
  document.forms[0]['gm_16_p'].value = gm_16_p
  document.forms[0]['gm_16_mp'].value = gm_16_mp
  document.forms[0]['note_16'].value = note_16

  toggle_implant_16()
  toggle_implant_16()
  toggle_tooth_16()
  change_probing_16()
  toggle_tooth_16()
  //change_probing_16();

  tooth_15 = Number(jsonObj1.tooth_15)
  mobility_15 = Number(jsonObj1.mobility_15)
  Implantat_15 = Number(jsonObj1.implant_15)
  bop_15_db = Number(jsonObj1.bop_15_db)
  bop_15_b = Number(jsonObj1.bop_15_b)
  bop_15_mb = Number(jsonObj1.bop_15_mb)
  pi_15_db = Number(jsonObj1.pi_15_db)
  pi_15_b = Number(jsonObj1.pi_15_b)
  pi_15_mb = Number(jsonObj1.pi_15_mb)
  bop_15_dp = Number(jsonObj1.bop_15_dp)
  bop_15_p = Number(jsonObj1.bop_15_p)
  bop_15_mp = Number(jsonObj1.bop_15_mp)
  pi_15_dp = Number(jsonObj1.pi_15_dp)
  pi_15_p = Number(jsonObj1.pi_15_p)
  pi_15_mp = Number(jsonObj1.pi_15_mp)
  gm_15_db = Number(jsonObj1.gm_15_db)
  gm_15_b = Number(jsonObj1.gm_15_b)
  gm_15_mb = Number(jsonObj1.gm_15_mb)
  pd_15_db = Number(jsonObj1.pd_15_db)
  pd_15_b = Number(jsonObj1.pd_15_b)
  pd_15_mb = Number(jsonObj1.pd_15_mb)
  gm_15_dp = Number(jsonObj1.gm_15_dp)
  gm_15_p = Number(jsonObj1.gm_15_p)
  gm_15_mp = Number(jsonObj1.gm_15_mp)
  pd_15_dp = Number(jsonObj1.pd_15_dp)
  pd_15_p = Number(jsonObj1.pd_15_p)
  pd_15_mp = Number(jsonObj1.pd_15_mp)
  note_15 = decodeURIComponent(jsonObj1.note_15)

  document.forms[0]['mobility_15'].value = mobility_15
  document.forms[0]['pd_15_db'].value = pd_15_db
  document.forms[0]['pd_15_b'].value = pd_15_b
  document.forms[0]['pd_15_mb'].value = pd_15_mb
  document.forms[0]['gm_15_db'].value = gm_15_db
  document.forms[0]['gm_15_b'].value = gm_15_b
  document.forms[0]['gm_15_mb'].value = gm_15_mb
  document.forms[0]['pd_15_dp'].value = pd_15_dp
  document.forms[0]['pd_15_p'].value = pd_15_p
  document.forms[0]['pd_15_mp'].value = pd_15_mp
  document.forms[0]['gm_15_dp'].value = gm_15_dp
  document.forms[0]['gm_15_p'].value = gm_15_p
  document.forms[0]['gm_15_mp'].value = gm_15_mp
  document.forms[0]['note_15'].value = note_15

  toggle_implant_15()
  toggle_implant_15()
  toggle_tooth_15()
  change_probing_15()
  toggle_tooth_15()
  //change_probing_15();

  tooth_14 = Number(jsonObj1.tooth_14)
  mobility_14 = Number(jsonObj1.mobility_14)
  Furkation_14_dp = Number(jsonObj1.furcation_14_dp)
  Furkation_14_mp = Number(jsonObj1.furcation_14_mp)
  Implantat_14 = Number(jsonObj1.implant_14)
  bop_14_db = Number(jsonObj1.bop_14_db)
  bop_14_b = Number(jsonObj1.bop_14_b)
  bop_14_mb = Number(jsonObj1.bop_14_mb)
  pi_14_db = Number(jsonObj1.pi_14_db)
  pi_14_b = Number(jsonObj1.pi_14_b)
  pi_14_mb = Number(jsonObj1.pi_14_mb)
  bop_14_dp = Number(jsonObj1.bop_14_dp)
  bop_14_p = Number(jsonObj1.bop_14_p)
  bop_14_mp = Number(jsonObj1.bop_14_mp)
  pi_14_dp = Number(jsonObj1.pi_14_dp)
  pi_14_p = Number(jsonObj1.pi_14_p)
  pi_14_mp = Number(jsonObj1.pi_14_mp)
  gm_14_db = Number(jsonObj1.gm_14_db)
  gm_14_b = Number(jsonObj1.gm_14_b)
  gm_14_mb = Number(jsonObj1.gm_14_mb)
  pd_14_db = Number(jsonObj1.pd_14_db)
  pd_14_b = Number(jsonObj1.pd_14_b)
  pd_14_mb = Number(jsonObj1.pd_14_mb)
  gm_14_dp = Number(jsonObj1.gm_14_dp)
  gm_14_p = Number(jsonObj1.gm_14_p)
  gm_14_mp = Number(jsonObj1.gm_14_mp)
  pd_14_dp = Number(jsonObj1.pd_14_dp)
  pd_14_p = Number(jsonObj1.pd_14_p)
  pd_14_mp = Number(jsonObj1.pd_14_mp)
  note_14 = decodeURIComponent(jsonObj1.note_14)

  document.forms[0]['mobility_14'].value = mobility_14
  document.forms[0]['pd_14_db'].value = pd_14_db
  document.forms[0]['pd_14_b'].value = pd_14_b
  document.forms[0]['pd_14_mb'].value = pd_14_mb
  document.forms[0]['gm_14_db'].value = gm_14_db
  document.forms[0]['gm_14_b'].value = gm_14_b
  document.forms[0]['gm_14_mb'].value = gm_14_mb
  document.forms[0]['pd_14_dp'].value = pd_14_dp
  document.forms[0]['pd_14_p'].value = pd_14_p
  document.forms[0]['pd_14_mp'].value = pd_14_mp
  document.forms[0]['gm_14_dp'].value = gm_14_dp
  document.forms[0]['gm_14_p'].value = gm_14_p
  document.forms[0]['gm_14_mp'].value = gm_14_mp
  document.forms[0]['note_14'].value = note_14

  toggle_implant_14()
  toggle_implant_14()
  toggle_tooth_14()
  change_probing_14()
  toggle_tooth_14()
  //change_probing_14();

  tooth_13 = Number(jsonObj1.tooth_13)
  mobility_13 = Number(jsonObj1.mobility_13)
  Implantat_13 = Number(jsonObj1.implant_13)
  bop_13_db = Number(jsonObj1.bop_13_db)
  bop_13_b = Number(jsonObj1.bop_13_b)
  bop_13_mb = Number(jsonObj1.bop_13_mb)
  pi_13_db = Number(jsonObj1.pi_13_db)
  pi_13_b = Number(jsonObj1.pi_13_b)
  pi_13_mb = Number(jsonObj1.pi_13_mb)
  bop_13_dp = Number(jsonObj1.bop_13_dp)
  bop_13_p = Number(jsonObj1.bop_13_p)
  bop_13_mp = Number(jsonObj1.bop_13_mp)
  pi_13_dp = Number(jsonObj1.pi_13_dp)
  pi_13_p = Number(jsonObj1.pi_13_p)
  pi_13_mp = Number(jsonObj1.pi_13_mp)
  gm_13_db = Number(jsonObj1.gm_13_db)
  gm_13_b = Number(jsonObj1.gm_13_b)
  gm_13_mb = Number(jsonObj1.gm_13_mb)
  pd_13_db = Number(jsonObj1.pd_13_db)
  pd_13_b = Number(jsonObj1.pd_13_b)
  pd_13_mb = Number(jsonObj1.pd_13_mb)
  gm_13_dp = Number(jsonObj1.gm_13_dp)
  gm_13_p = Number(jsonObj1.gm_13_p)
  gm_13_mp = Number(jsonObj1.gm_13_mp)
  pd_13_dp = Number(jsonObj1.pd_13_dp)
  pd_13_p = Number(jsonObj1.pd_13_p)
  pd_13_mp = Number(jsonObj1.pd_13_mp)
  note_13 = decodeURIComponent(jsonObj1.note_13)

  document.forms[0]['mobility_13'].value = mobility_13
  document.forms[0]['pd_13_db'].value = pd_13_db
  document.forms[0]['pd_13_b'].value = pd_13_b
  document.forms[0]['pd_13_mb'].value = pd_13_mb
  document.forms[0]['gm_13_db'].value = gm_13_db
  document.forms[0]['gm_13_b'].value = gm_13_b
  document.forms[0]['gm_13_mb'].value = gm_13_mb
  document.forms[0]['pd_13_dp'].value = pd_13_dp
  document.forms[0]['pd_13_p'].value = pd_13_p
  document.forms[0]['pd_13_mp'].value = pd_13_mp
  document.forms[0]['gm_13_dp'].value = gm_13_dp
  document.forms[0]['gm_13_p'].value = gm_13_p
  document.forms[0]['gm_13_mp'].value = gm_13_mp
  document.forms[0]['note_13'].value = note_13

  toggle_implant_13()
  toggle_implant_13()
  toggle_tooth_13()
  change_probing_13()
  toggle_tooth_13()
  //change_probing_13();

  tooth_12 = Number(jsonObj1.tooth_12)
  mobility_12 = Number(jsonObj1.mobility_12)
  Implantat_12 = Number(jsonObj1.implant_12)
  bop_12_db = Number(jsonObj1.bop_12_db)
  bop_12_b = Number(jsonObj1.bop_12_b)
  bop_12_mb = Number(jsonObj1.bop_12_mb)
  pi_12_db = Number(jsonObj1.pi_12_db)
  pi_12_b = Number(jsonObj1.pi_12_b)
  pi_12_mb = Number(jsonObj1.pi_12_mb)
  bop_12_dp = Number(jsonObj1.bop_12_dp)
  bop_12_p = Number(jsonObj1.bop_12_p)
  bop_12_mp = Number(jsonObj1.bop_12_mp)
  pi_12_dp = Number(jsonObj1.pi_12_dp)
  pi_12_p = Number(jsonObj1.pi_12_p)
  pi_12_mp = Number(jsonObj1.pi_12_mp)
  gm_12_db = Number(jsonObj1.gm_12_db)
  gm_12_b = Number(jsonObj1.gm_12_b)
  gm_12_mb = Number(jsonObj1.gm_12_mb)
  pd_12_db = Number(jsonObj1.pd_12_db)
  pd_12_b = Number(jsonObj1.pd_12_b)
  pd_12_mb = Number(jsonObj1.pd_12_mb)
  gm_12_dp = Number(jsonObj1.gm_12_dp)
  gm_12_p = Number(jsonObj1.gm_12_p)
  gm_12_mp = Number(jsonObj1.gm_12_mp)
  pd_12_dp = Number(jsonObj1.pd_12_dp)
  pd_12_p = Number(jsonObj1.pd_12_p)
  pd_12_mp = Number(jsonObj1.pd_12_mp)
  note_12 = decodeURIComponent(jsonObj1.note_12)

  document.forms[0]['mobility_12'].value = mobility_12
  document.forms[0]['pd_12_db'].value = pd_12_db
  document.forms[0]['pd_12_b'].value = pd_12_b
  document.forms[0]['pd_12_mb'].value = pd_12_mb
  document.forms[0]['gm_12_db'].value = gm_12_db
  document.forms[0]['gm_12_b'].value = gm_12_b
  document.forms[0]['gm_12_mb'].value = gm_12_mb
  document.forms[0]['pd_12_dp'].value = pd_12_dp
  document.forms[0]['pd_12_p'].value = pd_12_p
  document.forms[0]['pd_12_mp'].value = pd_12_mp
  document.forms[0]['gm_12_dp'].value = gm_12_dp
  document.forms[0]['gm_12_p'].value = gm_12_p
  document.forms[0]['gm_12_mp'].value = gm_12_mp
  document.forms[0]['note_12'].value = note_12

  toggle_implant_12()
  toggle_implant_12()
  toggle_tooth_12()
  change_probing_12()
  toggle_tooth_12()
  //change_probing_12();

  tooth_11 = Number(jsonObj1.tooth_11)
  mobility_11 = Number(jsonObj1.mobility_11)
  Implantat_11 = Number(jsonObj1.implant_11)
  bop_11_db = Number(jsonObj1.bop_11_db)
  bop_11_b = Number(jsonObj1.bop_11_b)
  bop_11_mb = Number(jsonObj1.bop_11_mb)
  pi_11_db = Number(jsonObj1.pi_11_db)
  pi_11_b = Number(jsonObj1.pi_11_b)
  pi_11_mb = Number(jsonObj1.pi_11_mb)
  bop_11_dp = Number(jsonObj1.bop_11_dp)
  bop_11_p = Number(jsonObj1.bop_11_p)
  bop_11_mp = Number(jsonObj1.bop_11_mp)
  pi_11_dp = Number(jsonObj1.pi_11_dp)
  pi_11_p = Number(jsonObj1.pi_11_p)
  pi_11_mp = Number(jsonObj1.pi_11_mp)
  gm_11_db = Number(jsonObj1.gm_11_db)
  gm_11_b = Number(jsonObj1.gm_11_b)
  gm_11_mb = Number(jsonObj1.gm_11_mb)
  pd_11_db = Number(jsonObj1.pd_11_db)
  pd_11_b = Number(jsonObj1.pd_11_b)
  pd_11_mb = Number(jsonObj1.pd_11_mb)
  gm_11_dp = Number(jsonObj1.gm_11_dp)
  gm_11_p = Number(jsonObj1.gm_11_p)
  gm_11_mp = Number(jsonObj1.gm_11_mp)
  pd_11_dp = Number(jsonObj1.pd_11_dp)
  pd_11_p = Number(jsonObj1.pd_11_p)
  pd_11_mp = Number(jsonObj1.pd_11_mp)
  note_11 = decodeURIComponent(jsonObj1.note_11)

  document.forms[0]['mobility_11'].value = mobility_11
  document.forms[0]['pd_11_db'].value = pd_11_db
  document.forms[0]['pd_11_b'].value = pd_11_b
  document.forms[0]['pd_11_mb'].value = pd_11_mb
  document.forms[0]['gm_11_db'].value = gm_11_db
  document.forms[0]['gm_11_b'].value = gm_11_b
  document.forms[0]['gm_11_mb'].value = gm_11_mb
  document.forms[0]['pd_11_dp'].value = pd_11_dp
  document.forms[0]['pd_11_p'].value = pd_11_p
  document.forms[0]['pd_11_mp'].value = pd_11_mp
  document.forms[0]['gm_11_dp'].value = gm_11_dp
  document.forms[0]['gm_11_p'].value = gm_11_p
  document.forms[0]['gm_11_mp'].value = gm_11_mp
  document.forms[0]['note_11'].value = note_11

  toggle_implant_11()
  toggle_implant_11()
  toggle_tooth_11()
  change_probing_11()
  toggle_tooth_11()
  //change_probing_11();

  tooth_28 = Number(jsonObj1.tooth_28)
  mobility_28 = Number(jsonObj1.mobility_28)
  Furkation_28_b = Number(jsonObj1.furcation_28_b)
  Furkation_28_dp = Number(jsonObj1.furcation_28_dp)
  Furkation_28_mp = Number(jsonObj1.furcation_28_mp)
  Implantat_28 = Number(jsonObj1.implant_28)
  bop_28_db = Number(jsonObj1.bop_28_db)
  bop_28_b = Number(jsonObj1.bop_28_b)
  bop_28_mb = Number(jsonObj1.bop_28_mb)
  pi_28_db = Number(jsonObj1.pi_28_db)
  pi_28_b = Number(jsonObj1.pi_28_b)
  pi_28_mb = Number(jsonObj1.pi_28_mb)
  bop_28_dp = Number(jsonObj1.bop_28_dp)
  bop_28_p = Number(jsonObj1.bop_28_p)
  bop_28_mp = Number(jsonObj1.bop_28_mp)
  pi_28_dp = Number(jsonObj1.pi_28_dp)
  pi_28_p = Number(jsonObj1.pi_28_p)
  pi_28_mp = Number(jsonObj1.pi_28_mp)
  gm_28_db = Number(jsonObj1.gm_28_db)
  gm_28_b = Number(jsonObj1.gm_28_b)
  gm_28_mb = Number(jsonObj1.gm_28_mb)
  pd_28_db = Number(jsonObj1.pd_28_db)
  pd_28_b = Number(jsonObj1.pd_28_b)
  pd_28_mb = Number(jsonObj1.pd_28_mb)
  gm_28_dp = Number(jsonObj1.gm_28_dp)
  gm_28_p = Number(jsonObj1.gm_28_p)
  gm_28_mp = Number(jsonObj1.gm_28_mp)
  pd_28_dp = Number(jsonObj1.pd_28_dp)
  pd_28_p = Number(jsonObj1.pd_28_p)
  pd_28_mp = Number(jsonObj1.pd_28_mp)
  note_28 = decodeURIComponent(jsonObj1.note_28)

  document.forms[0]['mobility_28'].value = mobility_28
  document.forms[0]['pd_28_db'].value = pd_28_db
  document.forms[0]['pd_28_b'].value = pd_28_b
  document.forms[0]['pd_28_mb'].value = pd_28_mb
  document.forms[0]['gm_28_db'].value = gm_28_db
  document.forms[0]['gm_28_b'].value = gm_28_b
  document.forms[0]['gm_28_mb'].value = gm_28_mb
  document.forms[0]['pd_28_dp'].value = pd_28_dp
  document.forms[0]['pd_28_p'].value = pd_28_p
  document.forms[0]['pd_28_mp'].value = pd_28_mp
  document.forms[0]['gm_28_dp'].value = gm_28_dp
  document.forms[0]['gm_28_p'].value = gm_28_p
  document.forms[0]['gm_28_mp'].value = gm_28_mp
  document.forms[0]['note_28'].value = note_28

  toggle_implant_28()
  toggle_implant_28()
  toggle_tooth_28()
  change_probing_28()
  toggle_tooth_28()
  //change_probing_28();

  tooth_27 = Number(jsonObj1.tooth_27)
  mobility_27 = Number(jsonObj1.mobility_27)
  Furkation_27_b = Number(jsonObj1.furcation_27_b)
  Furkation_27_dp = Number(jsonObj1.furcation_27_dp)
  Furkation_27_mp = Number(jsonObj1.furcation_27_mp)
  Implantat_27 = Number(jsonObj1.implant_27)
  bop_27_db = Number(jsonObj1.bop_27_db)
  bop_27_b = Number(jsonObj1.bop_27_b)
  bop_27_mb = Number(jsonObj1.bop_27_mb)
  pi_27_db = Number(jsonObj1.pi_27_db)
  pi_27_b = Number(jsonObj1.pi_27_b)
  pi_27_mb = Number(jsonObj1.pi_27_mb)
  bop_27_dp = Number(jsonObj1.bop_27_dp)
  bop_27_p = Number(jsonObj1.bop_27_p)
  bop_27_mp = Number(jsonObj1.bop_27_mp)
  pi_27_dp = Number(jsonObj1.pi_27_dp)
  pi_27_p = Number(jsonObj1.pi_27_p)
  pi_27_mp = Number(jsonObj1.pi_27_mp)
  gm_27_db = Number(jsonObj1.gm_27_db)
  gm_27_b = Number(jsonObj1.gm_27_b)
  gm_27_mb = Number(jsonObj1.gm_27_mb)
  pd_27_db = Number(jsonObj1.pd_27_db)
  pd_27_b = Number(jsonObj1.pd_27_b)
  pd_27_mb = Number(jsonObj1.pd_27_mb)
  gm_27_dp = Number(jsonObj1.gm_27_dp)
  gm_27_p = Number(jsonObj1.gm_27_p)
  gm_27_mp = Number(jsonObj1.gm_27_mp)
  pd_27_dp = Number(jsonObj1.pd_27_dp)
  pd_27_p = Number(jsonObj1.pd_27_p)
  pd_27_mp = Number(jsonObj1.pd_27_mp)
  note_27 = decodeURIComponent(jsonObj1.note_27)

  document.forms[0]['mobility_27'].value = mobility_27
  document.forms[0]['pd_27_db'].value = pd_27_db
  document.forms[0]['pd_27_b'].value = pd_27_b
  document.forms[0]['pd_27_mb'].value = pd_27_mb
  document.forms[0]['gm_27_db'].value = gm_27_db
  document.forms[0]['gm_27_b'].value = gm_27_b
  document.forms[0]['gm_27_mb'].value = gm_27_mb
  document.forms[0]['pd_27_dp'].value = pd_27_dp
  document.forms[0]['pd_27_p'].value = pd_27_p
  document.forms[0]['pd_27_mp'].value = pd_27_mp
  document.forms[0]['gm_27_dp'].value = gm_27_dp
  document.forms[0]['gm_27_p'].value = gm_27_p
  document.forms[0]['gm_27_mp'].value = gm_27_mp
  document.forms[0]['note_27'].value = note_27

  toggle_implant_27()
  toggle_implant_27()
  toggle_tooth_27()
  change_probing_27()
  toggle_tooth_27()
  //change_probing_27();

  tooth_26 = Number(jsonObj1.tooth_26)
  mobility_26 = Number(jsonObj1.mobility_26)
  Furkation_26_b = Number(jsonObj1.furcation_26_b)
  Furkation_26_dp = Number(jsonObj1.furcation_26_dp)
  Furkation_26_mp = Number(jsonObj1.furcation_26_mp)
  Implantat_26 = Number(jsonObj1.implant_26)
  bop_26_db = Number(jsonObj1.bop_26_db)
  bop_26_b = Number(jsonObj1.bop_26_b)
  bop_26_mb = Number(jsonObj1.bop_26_mb)
  pi_26_db = Number(jsonObj1.pi_26_db)
  pi_26_b = Number(jsonObj1.pi_26_b)
  pi_26_mb = Number(jsonObj1.pi_26_mb)
  bop_26_dp = Number(jsonObj1.bop_26_dp)
  bop_26_p = Number(jsonObj1.bop_26_p)
  bop_26_mp = Number(jsonObj1.bop_26_mp)
  pi_26_dp = Number(jsonObj1.pi_26_dp)
  pi_26_p = Number(jsonObj1.pi_26_p)
  pi_26_mp = Number(jsonObj1.pi_26_mp)
  gm_26_db = Number(jsonObj1.gm_26_db)
  gm_26_b = Number(jsonObj1.gm_26_b)
  gm_26_mb = Number(jsonObj1.gm_26_mb)
  pd_26_db = Number(jsonObj1.pd_26_db)
  pd_26_b = Number(jsonObj1.pd_26_b)
  pd_26_mb = Number(jsonObj1.pd_26_mb)
  gm_26_dp = Number(jsonObj1.gm_26_dp)
  gm_26_p = Number(jsonObj1.gm_26_p)
  gm_26_mp = Number(jsonObj1.gm_26_mp)
  pd_26_dp = Number(jsonObj1.pd_26_dp)
  pd_26_p = Number(jsonObj1.pd_26_p)
  pd_26_mp = Number(jsonObj1.pd_26_mp)
  note_26 = decodeURIComponent(jsonObj1.note_26)

  document.forms[0]['mobility_26'].value = mobility_26
  document.forms[0]['pd_26_db'].value = pd_26_db
  document.forms[0]['pd_26_b'].value = pd_26_b
  document.forms[0]['pd_26_mb'].value = pd_26_mb
  document.forms[0]['gm_26_db'].value = gm_26_db
  document.forms[0]['gm_26_b'].value = gm_26_b
  document.forms[0]['gm_26_mb'].value = gm_26_mb
  document.forms[0]['pd_26_dp'].value = pd_26_dp
  document.forms[0]['pd_26_p'].value = pd_26_p
  document.forms[0]['pd_26_mp'].value = pd_26_mp
  document.forms[0]['gm_26_dp'].value = gm_26_dp
  document.forms[0]['gm_26_p'].value = gm_26_p
  document.forms[0]['gm_26_mp'].value = gm_26_mp
  document.forms[0]['note_26'].value = note_26

  toggle_implant_26()
  toggle_implant_26()
  toggle_tooth_26()
  change_probing_26()
  toggle_tooth_26()
  //change_probing_26();

  tooth_25 = Number(jsonObj1.tooth_25)
  mobility_25 = Number(jsonObj1.mobility_25)
  Implantat_25 = Number(jsonObj1.implant_25)
  bop_25_db = Number(jsonObj1.bop_25_db)
  bop_25_b = Number(jsonObj1.bop_25_b)
  bop_25_mb = Number(jsonObj1.bop_25_mb)
  pi_25_db = Number(jsonObj1.pi_25_db)
  pi_25_b = Number(jsonObj1.pi_25_b)
  pi_25_mb = Number(jsonObj1.pi_25_mb)
  bop_25_dp = Number(jsonObj1.bop_25_dp)
  bop_25_p = Number(jsonObj1.bop_25_p)
  bop_25_mp = Number(jsonObj1.bop_25_mp)
  pi_25_dp = Number(jsonObj1.pi_25_dp)
  pi_25_p = Number(jsonObj1.pi_25_p)
  pi_25_mp = Number(jsonObj1.pi_25_mp)
  gm_25_db = Number(jsonObj1.gm_25_db)
  gm_25_b = Number(jsonObj1.gm_25_b)
  gm_25_mb = Number(jsonObj1.gm_25_mb)
  pd_25_db = Number(jsonObj1.pd_25_db)
  pd_25_b = Number(jsonObj1.pd_25_b)
  pd_25_mb = Number(jsonObj1.pd_25_mb)
  gm_25_dp = Number(jsonObj1.gm_25_dp)
  gm_25_p = Number(jsonObj1.gm_25_p)
  gm_25_mp = Number(jsonObj1.gm_25_mp)
  pd_25_dp = Number(jsonObj1.pd_25_dp)
  pd_25_p = Number(jsonObj1.pd_25_p)
  pd_25_mp = Number(jsonObj1.pd_25_mp)
  note_25 = decodeURIComponent(jsonObj1.note_25)

  document.forms[0]['mobility_25'].value = mobility_25
  document.forms[0]['pd_25_db'].value = pd_25_db
  document.forms[0]['pd_25_b'].value = pd_25_b
  document.forms[0]['pd_25_mb'].value = pd_25_mb
  document.forms[0]['gm_25_db'].value = gm_25_db
  document.forms[0]['gm_25_b'].value = gm_25_b
  document.forms[0]['gm_25_mb'].value = gm_25_mb
  document.forms[0]['pd_25_dp'].value = pd_25_dp
  document.forms[0]['pd_25_p'].value = pd_25_p
  document.forms[0]['pd_25_mp'].value = pd_25_mp
  document.forms[0]['gm_25_dp'].value = gm_25_dp
  document.forms[0]['gm_25_p'].value = gm_25_p
  document.forms[0]['gm_25_mp'].value = gm_25_mp
  document.forms[0]['note_25'].value = note_25

  toggle_implant_25()
  toggle_implant_25()
  toggle_tooth_25()
  change_probing_25()
  toggle_tooth_25()
  //change_probing_25();

  tooth_24 = Number(jsonObj1.tooth_24)
  mobility_24 = Number(jsonObj1.mobility_24)
  Furkation_24_dp = Number(jsonObj1.furcation_24_dp)
  Furkation_24_mp = Number(jsonObj1.furcation_24_mp)
  Implantat_24 = Number(jsonObj1.implant_24)
  bop_24_db = Number(jsonObj1.bop_24_db)
  bop_24_b = Number(jsonObj1.bop_24_b)
  bop_24_mb = Number(jsonObj1.bop_24_mb)
  pi_24_db = Number(jsonObj1.pi_24_db)
  pi_24_b = Number(jsonObj1.pi_24_b)
  pi_24_mb = Number(jsonObj1.pi_24_mb)
  bop_24_dp = Number(jsonObj1.bop_24_dp)
  bop_24_p = Number(jsonObj1.bop_24_p)
  bop_24_mp = Number(jsonObj1.bop_24_mp)
  pi_24_dp = Number(jsonObj1.pi_24_dp)
  pi_24_p = Number(jsonObj1.pi_24_p)
  pi_24_mp = Number(jsonObj1.pi_24_mp)
  gm_24_db = Number(jsonObj1.gm_24_db)
  gm_24_b = Number(jsonObj1.gm_24_b)
  gm_24_mb = Number(jsonObj1.gm_24_mb)
  pd_24_db = Number(jsonObj1.pd_24_db)
  pd_24_b = Number(jsonObj1.pd_24_b)
  pd_24_mb = Number(jsonObj1.pd_24_mb)
  gm_24_dp = Number(jsonObj1.gm_24_dp)
  gm_24_p = Number(jsonObj1.gm_24_p)
  gm_24_mp = Number(jsonObj1.gm_24_mp)
  pd_24_dp = Number(jsonObj1.pd_24_dp)
  pd_24_p = Number(jsonObj1.pd_24_p)
  pd_24_mp = Number(jsonObj1.pd_24_mp)
  note_24 = decodeURIComponent(jsonObj1.note_24)

  document.forms[0]['mobility_24'].value = mobility_24
  document.forms[0]['pd_24_db'].value = pd_24_db
  document.forms[0]['pd_24_b'].value = pd_24_b
  document.forms[0]['pd_24_mb'].value = pd_24_mb
  document.forms[0]['gm_24_db'].value = gm_24_db
  document.forms[0]['gm_24_b'].value = gm_24_b
  document.forms[0]['gm_24_mb'].value = gm_24_mb
  document.forms[0]['pd_24_dp'].value = pd_24_dp
  document.forms[0]['pd_24_p'].value = pd_24_p
  document.forms[0]['pd_24_mp'].value = pd_24_mp
  document.forms[0]['gm_24_dp'].value = gm_24_dp
  document.forms[0]['gm_24_p'].value = gm_24_p
  document.forms[0]['gm_24_mp'].value = gm_24_mp
  document.forms[0]['note_24'].value = note_24

  toggle_implant_24()
  toggle_implant_24()
  toggle_tooth_24()
  change_probing_24()
  toggle_tooth_24()
  //change_probing_24();

  tooth_23 = Number(jsonObj1.tooth_23)
  mobility_23 = Number(jsonObj1.mobility_23)
  Implantat_23 = Number(jsonObj1.implant_23)
  bop_23_db = Number(jsonObj1.bop_23_db)
  bop_23_b = Number(jsonObj1.bop_23_b)
  bop_23_mb = Number(jsonObj1.bop_23_mb)
  pi_23_db = Number(jsonObj1.pi_23_db)
  pi_23_b = Number(jsonObj1.pi_23_b)
  pi_23_mb = Number(jsonObj1.pi_23_mb)
  bop_23_dp = Number(jsonObj1.bop_23_dp)
  bop_23_p = Number(jsonObj1.bop_23_p)
  bop_23_mp = Number(jsonObj1.bop_23_mp)
  pi_23_dp = Number(jsonObj1.pi_23_dp)
  pi_23_p = Number(jsonObj1.pi_23_p)
  pi_23_mp = Number(jsonObj1.pi_23_mp)
  gm_23_db = Number(jsonObj1.gm_23_db)
  gm_23_b = Number(jsonObj1.gm_23_b)
  gm_23_mb = Number(jsonObj1.gm_23_mb)
  pd_23_db = Number(jsonObj1.pd_23_db)
  pd_23_b = Number(jsonObj1.pd_23_b)
  pd_23_mb = Number(jsonObj1.pd_23_mb)
  gm_23_dp = Number(jsonObj1.gm_23_dp)
  gm_23_p = Number(jsonObj1.gm_23_p)
  gm_23_mp = Number(jsonObj1.gm_23_mp)
  pd_23_dp = Number(jsonObj1.pd_23_dp)
  pd_23_p = Number(jsonObj1.pd_23_p)
  pd_23_mp = Number(jsonObj1.pd_23_mp)
  note_23 = decodeURIComponent(jsonObj1.note_23)

  document.forms[0]['mobility_23'].value = mobility_23
  document.forms[0]['pd_23_db'].value = pd_23_db
  document.forms[0]['pd_23_b'].value = pd_23_b
  document.forms[0]['pd_23_mb'].value = pd_23_mb
  document.forms[0]['gm_23_db'].value = gm_23_db
  document.forms[0]['gm_23_b'].value = gm_23_b
  document.forms[0]['gm_23_mb'].value = gm_23_mb
  document.forms[0]['pd_23_dp'].value = pd_23_dp
  document.forms[0]['pd_23_p'].value = pd_23_p
  document.forms[0]['pd_23_mp'].value = pd_23_mp
  document.forms[0]['gm_23_dp'].value = gm_23_dp
  document.forms[0]['gm_23_p'].value = gm_23_p
  document.forms[0]['gm_23_mp'].value = gm_23_mp
  document.forms[0]['note_23'].value = note_23

  toggle_implant_23()
  toggle_implant_23()
  toggle_tooth_23()
  change_probing_23()
  toggle_tooth_23()
  //change_probing_23();

  tooth_22 = Number(jsonObj1.tooth_22)
  mobility_22 = Number(jsonObj1.mobility_22)
  Implantat_22 = Number(jsonObj1.implant_22)
  bop_22_db = Number(jsonObj1.bop_22_db)
  bop_22_b = Number(jsonObj1.bop_22_b)
  bop_22_mb = Number(jsonObj1.bop_22_mb)
  pi_22_db = Number(jsonObj1.pi_22_db)
  pi_22_b = Number(jsonObj1.pi_22_b)
  pi_22_mb = Number(jsonObj1.pi_22_mb)
  bop_22_dp = Number(jsonObj1.bop_22_dp)
  bop_22_p = Number(jsonObj1.bop_22_p)
  bop_22_mp = Number(jsonObj1.bop_22_mp)
  pi_22_dp = Number(jsonObj1.pi_22_dp)
  pi_22_p = Number(jsonObj1.pi_22_p)
  pi_22_mp = Number(jsonObj1.pi_22_mp)
  gm_22_db = Number(jsonObj1.gm_22_db)
  gm_22_b = Number(jsonObj1.gm_22_b)
  gm_22_mb = Number(jsonObj1.gm_22_mb)
  pd_22_db = Number(jsonObj1.pd_22_db)
  pd_22_b = Number(jsonObj1.pd_22_b)
  pd_22_mb = Number(jsonObj1.pd_22_mb)
  gm_22_dp = Number(jsonObj1.gm_22_dp)
  gm_22_p = Number(jsonObj1.gm_22_p)
  gm_22_mp = Number(jsonObj1.gm_22_mp)
  pd_22_dp = Number(jsonObj1.pd_22_dp)
  pd_22_p = Number(jsonObj1.pd_22_p)
  pd_22_mp = Number(jsonObj1.pd_22_mp)
  note_22 = decodeURIComponent(jsonObj1.note_22)

  document.forms[0]['mobility_22'].value = mobility_22
  document.forms[0]['pd_22_db'].value = pd_22_db
  document.forms[0]['pd_22_b'].value = pd_22_b
  document.forms[0]['pd_22_mb'].value = pd_22_mb
  document.forms[0]['gm_22_db'].value = gm_22_db
  document.forms[0]['gm_22_b'].value = gm_22_b
  document.forms[0]['gm_22_mb'].value = gm_22_mb
  document.forms[0]['pd_22_dp'].value = pd_22_dp
  document.forms[0]['pd_22_p'].value = pd_22_p
  document.forms[0]['pd_22_mp'].value = pd_22_mp
  document.forms[0]['gm_22_dp'].value = gm_22_dp
  document.forms[0]['gm_22_p'].value = gm_22_p
  document.forms[0]['gm_22_mp'].value = gm_22_mp
  document.forms[0]['note_22'].value = note_22

  toggle_implant_22()
  toggle_implant_22()
  toggle_tooth_22()
  change_probing_22()
  toggle_tooth_22()
  //change_probing_22();

  tooth_21 = Number(jsonObj1.tooth_21)
  mobility_21 = Number(jsonObj1.mobility_21)
  Implantat_21 = Number(jsonObj1.implant_21)
  bop_21_db = Number(jsonObj1.bop_21_db)
  bop_21_b = Number(jsonObj1.bop_21_b)
  bop_21_mb = Number(jsonObj1.bop_21_mb)
  pi_21_db = Number(jsonObj1.pi_21_db)
  pi_21_b = Number(jsonObj1.pi_21_b)
  pi_21_mb = Number(jsonObj1.pi_21_mb)
  bop_21_dp = Number(jsonObj1.bop_21_dp)
  bop_21_p = Number(jsonObj1.bop_21_p)
  bop_21_mp = Number(jsonObj1.bop_21_mp)
  pi_21_dp = Number(jsonObj1.pi_21_dp)
  pi_21_p = Number(jsonObj1.pi_21_p)
  pi_21_mp = Number(jsonObj1.pi_21_mp)
  gm_21_db = Number(jsonObj1.gm_21_db)
  gm_21_b = Number(jsonObj1.gm_21_b)
  gm_21_mb = Number(jsonObj1.gm_21_mb)
  pd_21_db = Number(jsonObj1.pd_21_db)
  pd_21_b = Number(jsonObj1.pd_21_b)
  pd_21_mb = Number(jsonObj1.pd_21_mb)
  gm_21_dp = Number(jsonObj1.gm_21_dp)
  gm_21_p = Number(jsonObj1.gm_21_p)
  gm_21_mp = Number(jsonObj1.gm_21_mp)
  pd_21_dp = Number(jsonObj1.pd_21_dp)
  pd_21_p = Number(jsonObj1.pd_21_p)
  pd_21_mp = Number(jsonObj1.pd_21_mp)
  note_21 = decodeURIComponent(jsonObj1.note_21)

  document.forms[0]['mobility_21'].value = mobility_21
  document.forms[0]['pd_21_db'].value = pd_21_db
  document.forms[0]['pd_21_b'].value = pd_21_b
  document.forms[0]['pd_21_mb'].value = pd_21_mb
  document.forms[0]['gm_21_db'].value = gm_21_db
  document.forms[0]['gm_21_b'].value = gm_21_b
  document.forms[0]['gm_21_mb'].value = gm_21_mb
  document.forms[0]['pd_21_dp'].value = pd_21_dp
  document.forms[0]['pd_21_p'].value = pd_21_p
  document.forms[0]['pd_21_mp'].value = pd_21_mp
  document.forms[0]['gm_21_dp'].value = gm_21_dp
  document.forms[0]['gm_21_p'].value = gm_21_p
  document.forms[0]['gm_21_mp'].value = gm_21_mp
  document.forms[0]['note_21'].value = note_21

  toggle_implant_21()
  toggle_implant_21()
  toggle_tooth_21()
  change_probing_21()
  toggle_tooth_21()
  //change_probing_21();

  tooth_38 = Number(jsonObj1.tooth_38)

  mobility_38 = Number(jsonObj1.mobility_38)
  Furkation_38_b = Number(jsonObj1.furcation_38_b)
  Furkation_38_l = Number(jsonObj1.furcation_38_l)
  Implantat_38 = Number(jsonObj1.implant_38)
  bop_38_db = Number(jsonObj1.bop_38_db)
  bop_38_b = Number(jsonObj1.bop_38_b)
  bop_38_mb = Number(jsonObj1.bop_38_mb)
  pi_38_db = Number(jsonObj1.pi_38_db)
  pi_38_b = Number(jsonObj1.pi_38_b)
  pi_38_mb = Number(jsonObj1.pi_38_mb)
  bop_38_dl = Number(jsonObj1.bop_38_dl)
  bop_38_l = Number(jsonObj1.bop_38_l)
  bop_38_ml = Number(jsonObj1.bop_38_ml)
  pi_38_dl = Number(jsonObj1.pi_38_dl)
  pi_38_l = Number(jsonObj1.pi_38_l)
  pi_38_ml = Number(jsonObj1.pi_38_ml)
  gm_38_db = Number(jsonObj1.gm_38_db)
  gm_38_b = Number(jsonObj1.gm_38_b)
  gm_38_mb = Number(jsonObj1.gm_38_mb)
  pd_38_db = Number(jsonObj1.pd_38_db)
  pd_38_b = Number(jsonObj1.pd_38_b)
  pd_38_mb = Number(jsonObj1.pd_38_mb)
  gm_38_dl = Number(jsonObj1.gm_38_dl)
  gm_38_l = Number(jsonObj1.gm_38_l)
  gm_38_ml = Number(jsonObj1.gm_38_ml)
  pd_38_dl = Number(jsonObj1.pd_38_dl)
  pd_38_l = Number(jsonObj1.pd_38_l)
  pd_38_ml = Number(jsonObj1.pd_38_ml)
  note_38 = decodeURIComponent(jsonObj1.note_38)

  document.forms[0]['mobility_38'].value = mobility_38
  document.forms[0]['pd_38_db'].value = pd_38_db
  document.forms[0]['pd_38_b'].value = pd_38_b
  document.forms[0]['pd_38_mb'].value = pd_38_mb
  document.forms[0]['gm_38_db'].value = gm_38_db
  document.forms[0]['gm_38_b'].value = gm_38_b
  document.forms[0]['gm_38_mb'].value = gm_38_mb
  document.forms[0]['pd_38_dl'].value = pd_38_dl
  document.forms[0]['pd_38_l'].value = pd_38_l
  document.forms[0]['pd_38_ml'].value = pd_38_ml
  document.forms[0]['gm_38_dl'].value = gm_38_dl
  document.forms[0]['gm_38_l'].value = gm_38_l
  document.forms[0]['gm_38_ml'].value = gm_38_ml
  document.forms[0]['note_38'].value = note_38

  toggle_implant_38()
  toggle_implant_38()
  toggle_tooth_38()
  change_probing_38()
  toggle_tooth_38()
  //change_probing_38();

  tooth_37 = Number(jsonObj1.tooth_37)
  mobility_37 = Number(jsonObj1.mobility_37)
  Furkation_37_b = Number(jsonObj1.furcation_37_b)
  Furkation_37_l = Number(jsonObj1.furcation_37_l)
  Implantat_37 = Number(jsonObj1.implant_37)
  bop_37_db = Number(jsonObj1.bop_37_db)
  bop_37_b = Number(jsonObj1.bop_37_b)
  bop_37_mb = Number(jsonObj1.bop_37_mb)
  pi_37_db = Number(jsonObj1.pi_37_db)
  pi_37_b = Number(jsonObj1.pi_37_b)
  pi_37_mb = Number(jsonObj1.pi_37_mb)
  bop_37_dl = Number(jsonObj1.bop_37_dl)
  bop_37_l = Number(jsonObj1.bop_37_l)
  bop_37_ml = Number(jsonObj1.bop_37_ml)
  pi_37_dl = Number(jsonObj1.pi_37_dl)
  pi_37_l = Number(jsonObj1.pi_37_l)
  pi_37_ml = Number(jsonObj1.pi_37_ml)
  gm_37_db = Number(jsonObj1.gm_37_db)
  gm_37_b = Number(jsonObj1.gm_37_b)
  gm_37_mb = Number(jsonObj1.gm_37_mb)
  pd_37_db = Number(jsonObj1.pd_37_db)
  pd_37_b = Number(jsonObj1.pd_37_b)
  pd_37_mb = Number(jsonObj1.pd_37_mb)
  gm_37_dl = Number(jsonObj1.gm_37_dl)
  gm_37_l = Number(jsonObj1.gm_37_l)
  gm_37_ml = Number(jsonObj1.gm_37_ml)
  pd_37_dl = Number(jsonObj1.pd_37_dl)
  pd_37_l = Number(jsonObj1.pd_37_l)
  pd_37_ml = Number(jsonObj1.pd_37_ml)
  note_37 = decodeURIComponent(jsonObj1.note_37)

  document.forms[0]['mobility_37'].value = mobility_37
  document.forms[0]['pd_37_db'].value = pd_37_db
  document.forms[0]['pd_37_b'].value = pd_37_b
  document.forms[0]['pd_37_mb'].value = pd_37_mb
  document.forms[0]['gm_37_db'].value = gm_37_db
  document.forms[0]['gm_37_b'].value = gm_37_b
  document.forms[0]['gm_37_mb'].value = gm_37_mb
  document.forms[0]['pd_37_dl'].value = pd_37_dl
  document.forms[0]['pd_37_l'].value = pd_37_l
  document.forms[0]['pd_37_ml'].value = pd_37_ml
  document.forms[0]['gm_37_dl'].value = gm_37_dl
  document.forms[0]['gm_37_l'].value = gm_37_l
  document.forms[0]['gm_37_ml'].value = gm_37_ml
  document.forms[0]['note_37'].value = note_37

  toggle_implant_37()
  toggle_implant_37()
  toggle_tooth_37()
  change_probing_37()
  toggle_tooth_37()
  //change_probing_37();

  tooth_36 = Number(jsonObj1.tooth_36)
  mobility_36 = Number(jsonObj1.mobility_36)
  Furkation_36_b = Number(jsonObj1.furcation_36_b)
  Furkation_36_l = Number(jsonObj1.furcation_36_l)
  Implantat_36 = Number(jsonObj1.implant_36)
  bop_36_db = Number(jsonObj1.bop_36_db)
  bop_36_b = Number(jsonObj1.bop_36_b)
  bop_36_mb = Number(jsonObj1.bop_36_mb)
  pi_36_db = Number(jsonObj1.pi_36_db)
  pi_36_b = Number(jsonObj1.pi_36_b)
  pi_36_mb = Number(jsonObj1.pi_36_mb)
  bop_36_dl = Number(jsonObj1.bop_36_dl)
  bop_36_l = Number(jsonObj1.bop_36_l)
  bop_36_ml = Number(jsonObj1.bop_36_ml)
  pi_36_dl = Number(jsonObj1.pi_36_dl)
  pi_36_l = Number(jsonObj1.pi_36_l)
  pi_36_ml = Number(jsonObj1.pi_36_ml)
  gm_36_db = Number(jsonObj1.gm_36_db)
  gm_36_b = Number(jsonObj1.gm_36_b)
  gm_36_mb = Number(jsonObj1.gm_36_mb)
  pd_36_db = Number(jsonObj1.pd_36_db)
  pd_36_b = Number(jsonObj1.pd_36_b)
  pd_36_mb = Number(jsonObj1.pd_36_mb)
  gm_36_dl = Number(jsonObj1.gm_36_dl)
  gm_36_l = Number(jsonObj1.gm_36_l)
  gm_36_ml = Number(jsonObj1.gm_36_ml)
  pd_36_dl = Number(jsonObj1.pd_36_dl)
  pd_36_l = Number(jsonObj1.pd_36_l)
  pd_36_ml = Number(jsonObj1.pd_36_ml)
  note_36 = decodeURIComponent(jsonObj1.note_36)

  document.forms[0]['mobility_36'].value = mobility_36
  document.forms[0]['pd_36_db'].value = pd_36_db
  document.forms[0]['pd_36_b'].value = pd_36_b
  document.forms[0]['pd_36_mb'].value = pd_36_mb
  document.forms[0]['gm_36_db'].value = gm_36_db
  document.forms[0]['gm_36_b'].value = gm_36_b
  document.forms[0]['gm_36_mb'].value = gm_36_mb
  document.forms[0]['pd_36_dl'].value = pd_36_dl
  document.forms[0]['pd_36_l'].value = pd_36_l
  document.forms[0]['pd_36_ml'].value = pd_36_ml
  document.forms[0]['gm_36_dl'].value = gm_36_dl
  document.forms[0]['gm_36_l'].value = gm_36_l
  document.forms[0]['gm_36_ml'].value = gm_36_ml
  document.forms[0]['note_36'].value = note_36

  toggle_implant_36()
  toggle_implant_36()
  toggle_tooth_36()
  change_probing_36()
  toggle_tooth_36()
  //change_probing_36();

  tooth_35 = Number(jsonObj1.tooth_35)
  mobility_35 = Number(jsonObj1.mobility_35)
  Implantat_35 = Number(jsonObj1.implant_35)
  bop_35_db = Number(jsonObj1.bop_35_db)
  bop_35_b = Number(jsonObj1.bop_35_b)
  bop_35_mb = Number(jsonObj1.bop_35_mb)
  pi_35_db = Number(jsonObj1.pi_35_db)
  pi_35_b = Number(jsonObj1.pi_35_b)
  pi_35_mb = Number(jsonObj1.pi_35_mb)
  bop_35_dl = Number(jsonObj1.bop_35_dl)
  bop_35_l = Number(jsonObj1.bop_35_l)
  bop_35_ml = Number(jsonObj1.bop_35_ml)
  pi_35_dl = Number(jsonObj1.pi_35_dl)
  pi_35_l = Number(jsonObj1.pi_35_l)
  pi_35_ml = Number(jsonObj1.pi_35_ml)
  gm_35_db = Number(jsonObj1.gm_35_db)
  gm_35_b = Number(jsonObj1.gm_35_b)
  gm_35_mb = Number(jsonObj1.gm_35_mb)
  pd_35_db = Number(jsonObj1.pd_35_db)
  pd_35_b = Number(jsonObj1.pd_35_b)
  pd_35_mb = Number(jsonObj1.pd_35_mb)
  gm_35_dl = Number(jsonObj1.gm_35_dl)
  gm_35_l = Number(jsonObj1.gm_35_l)
  gm_35_ml = Number(jsonObj1.gm_35_ml)
  pd_35_dl = Number(jsonObj1.pd_35_dl)
  pd_35_l = Number(jsonObj1.pd_35_l)
  pd_35_ml = Number(jsonObj1.pd_35_ml)
  note_35 = decodeURIComponent(jsonObj1.note_35)

  document.forms[0]['mobility_35'].value = mobility_35
  document.forms[0]['pd_35_db'].value = pd_35_db
  document.forms[0]['pd_35_b'].value = pd_35_b
  document.forms[0]['pd_35_mb'].value = pd_35_mb
  document.forms[0]['gm_35_db'].value = gm_35_db
  document.forms[0]['gm_35_b'].value = gm_35_b
  document.forms[0]['gm_35_mb'].value = gm_35_mb
  document.forms[0]['pd_35_dl'].value = pd_35_dl
  document.forms[0]['pd_35_l'].value = pd_35_l
  document.forms[0]['pd_35_ml'].value = pd_35_ml
  document.forms[0]['gm_35_dl'].value = gm_35_dl
  document.forms[0]['gm_35_l'].value = gm_35_l
  document.forms[0]['gm_35_ml'].value = gm_35_ml
  document.forms[0]['note_35'].value = note_35

  toggle_implant_35()
  toggle_implant_35()
  toggle_tooth_35()
  change_probing_35()
  toggle_tooth_35()
  //change_probing_35();

  tooth_34 = Number(jsonObj1.tooth_34)
  mobility_34 = Number(jsonObj1.mobility_34)
  Implantat_34 = Number(jsonObj1.implant_34)
  bop_34_db = Number(jsonObj1.bop_34_db)
  bop_34_b = Number(jsonObj1.bop_34_b)
  bop_34_mb = Number(jsonObj1.bop_34_mb)
  pi_34_db = Number(jsonObj1.pi_34_db)
  pi_34_b = Number(jsonObj1.pi_34_b)
  pi_34_mb = Number(jsonObj1.pi_34_mb)
  bop_34_dl = Number(jsonObj1.bop_34_dl)
  bop_34_l = Number(jsonObj1.bop_34_l)
  bop_34_ml = Number(jsonObj1.bop_34_ml)
  pi_34_dl = Number(jsonObj1.pi_34_dl)
  pi_34_l = Number(jsonObj1.pi_34_l)
  pi_34_ml = Number(jsonObj1.pi_34_ml)
  gm_34_db = Number(jsonObj1.gm_34_db)
  gm_34_b = Number(jsonObj1.gm_34_b)
  gm_34_mb = Number(jsonObj1.gm_34_mb)
  pd_34_db = Number(jsonObj1.pd_34_db)
  pd_34_b = Number(jsonObj1.pd_34_b)
  pd_34_mb = Number(jsonObj1.pd_34_mb)
  gm_34_dl = Number(jsonObj1.gm_34_dl)
  gm_34_l = Number(jsonObj1.gm_34_l)
  gm_34_ml = Number(jsonObj1.gm_34_ml)
  pd_34_dl = Number(jsonObj1.pd_34_dl)
  pd_34_l = Number(jsonObj1.pd_34_l)
  pd_34_ml = Number(jsonObj1.pd_34_ml)
  note_34 = decodeURIComponent(jsonObj1.note_34)

  document.forms[0]['mobility_34'].value = mobility_34
  document.forms[0]['pd_34_db'].value = pd_34_db
  document.forms[0]['pd_34_b'].value = pd_34_b
  document.forms[0]['pd_34_mb'].value = pd_34_mb
  document.forms[0]['gm_34_db'].value = gm_34_db
  document.forms[0]['gm_34_b'].value = gm_34_b
  document.forms[0]['gm_34_mb'].value = gm_34_mb
  document.forms[0]['pd_34_dl'].value = pd_34_dl
  document.forms[0]['pd_34_l'].value = pd_34_l
  document.forms[0]['pd_34_ml'].value = pd_34_ml
  document.forms[0]['gm_34_dl'].value = gm_34_dl
  document.forms[0]['gm_34_l'].value = gm_34_l
  document.forms[0]['gm_34_ml'].value = gm_34_ml
  document.forms[0]['note_34'].value = note_34

  toggle_implant_34()
  toggle_implant_34()
  toggle_tooth_34()
  change_probing_34()
  toggle_tooth_34()
  //change_probing_34();

  tooth_33 = Number(jsonObj1.tooth_33)
  mobility_33 = Number(jsonObj1.mobility_33)
  Implantat_33 = Number(jsonObj1.implant_33)
  bop_33_db = Number(jsonObj1.bop_33_db)
  bop_33_b = Number(jsonObj1.bop_33_b)
  bop_33_mb = Number(jsonObj1.bop_33_mb)
  pi_33_db = Number(jsonObj1.pi_33_db)
  pi_33_b = Number(jsonObj1.pi_33_b)
  pi_33_mb = Number(jsonObj1.pi_33_mb)
  bop_33_dl = Number(jsonObj1.bop_33_dl)
  bop_33_l = Number(jsonObj1.bop_33_l)
  bop_33_ml = Number(jsonObj1.bop_33_ml)
  pi_33_dl = Number(jsonObj1.pi_33_dl)
  pi_33_l = Number(jsonObj1.pi_33_l)
  pi_33_ml = Number(jsonObj1.pi_33_ml)
  gm_33_db = Number(jsonObj1.gm_33_db)
  gm_33_b = Number(jsonObj1.gm_33_b)
  gm_33_mb = Number(jsonObj1.gm_33_mb)
  pd_33_db = Number(jsonObj1.pd_33_db)
  pd_33_b = Number(jsonObj1.pd_33_b)
  pd_33_mb = Number(jsonObj1.pd_33_mb)
  gm_33_dl = Number(jsonObj1.gm_33_dl)
  gm_33_l = Number(jsonObj1.gm_33_l)
  gm_33_ml = Number(jsonObj1.gm_33_ml)
  pd_33_dl = Number(jsonObj1.pd_33_dl)
  pd_33_l = Number(jsonObj1.pd_33_l)
  pd_33_ml = Number(jsonObj1.pd_33_ml)
  note_33 = decodeURIComponent(jsonObj1.note_33)

  document.forms[0]['mobility_33'].value = mobility_33
  document.forms[0]['pd_33_db'].value = pd_33_db
  document.forms[0]['pd_33_b'].value = pd_33_b
  document.forms[0]['pd_33_mb'].value = pd_33_mb
  document.forms[0]['gm_33_db'].value = gm_33_db
  document.forms[0]['gm_33_b'].value = gm_33_b
  document.forms[0]['gm_33_mb'].value = gm_33_mb
  document.forms[0]['pd_33_dl'].value = pd_33_dl
  document.forms[0]['pd_33_l'].value = pd_33_l
  document.forms[0]['pd_33_ml'].value = pd_33_ml
  document.forms[0]['gm_33_dl'].value = gm_33_dl
  document.forms[0]['gm_33_l'].value = gm_33_l
  document.forms[0]['gm_33_ml'].value = gm_33_ml
  document.forms[0]['note_33'].value = note_33

  toggle_implant_33()
  toggle_implant_33()
  toggle_tooth_33()
  change_probing_33()
  toggle_tooth_33()
  //change_probing_33();

  tooth_32 = Number(jsonObj1.tooth_32)
  mobility_32 = Number(jsonObj1.mobility_32)
  Implantat_32 = Number(jsonObj1.implant_32)
  bop_32_db = Number(jsonObj1.bop_32_db)
  bop_32_b = Number(jsonObj1.bop_32_b)
  bop_32_mb = Number(jsonObj1.bop_32_mb)
  pi_32_db = Number(jsonObj1.pi_32_db)
  pi_32_b = Number(jsonObj1.pi_32_b)
  pi_32_mb = Number(jsonObj1.pi_32_mb)
  bop_32_dl = Number(jsonObj1.bop_32_dl)
  bop_32_l = Number(jsonObj1.bop_32_l)
  bop_32_ml = Number(jsonObj1.bop_32_ml)
  pi_32_dl = Number(jsonObj1.pi_32_dl)
  pi_32_l = Number(jsonObj1.pi_32_l)
  pi_32_ml = Number(jsonObj1.pi_32_ml)
  gm_32_db = Number(jsonObj1.gm_32_db)
  gm_32_b = Number(jsonObj1.gm_32_b)
  gm_32_mb = Number(jsonObj1.gm_32_mb)
  pd_32_db = Number(jsonObj1.pd_32_db)
  pd_32_b = Number(jsonObj1.pd_32_b)
  pd_32_mb = Number(jsonObj1.pd_32_mb)
  gm_32_dl = Number(jsonObj1.gm_32_dl)
  gm_32_l = Number(jsonObj1.gm_32_l)
  gm_32_ml = Number(jsonObj1.gm_32_ml)
  pd_32_dl = Number(jsonObj1.pd_32_dl)
  pd_32_l = Number(jsonObj1.pd_32_l)
  pd_32_ml = Number(jsonObj1.pd_32_ml)
  note_32 = decodeURIComponent(jsonObj1.note_32)

  document.forms[0]['mobility_32'].value = mobility_32
  document.forms[0]['pd_32_db'].value = pd_32_db
  document.forms[0]['pd_32_b'].value = pd_32_b
  document.forms[0]['pd_32_mb'].value = pd_32_mb
  document.forms[0]['gm_32_db'].value = gm_32_db
  document.forms[0]['gm_32_b'].value = gm_32_b
  document.forms[0]['gm_32_mb'].value = gm_32_mb
  document.forms[0]['pd_32_dl'].value = pd_32_dl
  document.forms[0]['pd_32_l'].value = pd_32_l
  document.forms[0]['pd_32_ml'].value = pd_32_ml
  document.forms[0]['gm_32_dl'].value = gm_32_dl
  document.forms[0]['gm_32_l'].value = gm_32_l
  document.forms[0]['gm_32_ml'].value = gm_32_ml
  document.forms[0]['note_32'].value = note_32

  toggle_implant_32()
  toggle_implant_32()
  toggle_tooth_32()
  change_probing_32()
  toggle_tooth_32()
  //change_probing_32();

  tooth_31 = Number(jsonObj1.tooth_31)
  mobility_31 = Number(jsonObj1.mobility_31)
  Implantat_31 = Number(jsonObj1.implant_31)
  bop_31_db = Number(jsonObj1.bop_31_db)
  bop_31_b = Number(jsonObj1.bop_31_b)
  bop_31_mb = Number(jsonObj1.bop_31_mb)
  pi_31_db = Number(jsonObj1.pi_31_db)
  pi_31_b = Number(jsonObj1.pi_31_b)
  pi_31_mb = Number(jsonObj1.pi_31_mb)
  bop_31_dl = Number(jsonObj1.bop_31_dl)
  bop_31_l = Number(jsonObj1.bop_31_l)
  bop_31_ml = Number(jsonObj1.bop_31_ml)
  pi_31_dl = Number(jsonObj1.pi_31_dl)
  pi_31_l = Number(jsonObj1.pi_31_l)
  pi_31_ml = Number(jsonObj1.pi_31_ml)
  gm_31_db = Number(jsonObj1.gm_31_db)
  gm_31_b = Number(jsonObj1.gm_31_b)
  gm_31_mb = Number(jsonObj1.gm_31_mb)
  pd_31_db = Number(jsonObj1.pd_31_db)
  pd_31_b = Number(jsonObj1.pd_31_b)
  pd_31_mb = Number(jsonObj1.pd_31_mb)
  gm_31_dl = Number(jsonObj1.gm_31_dl)
  gm_31_l = Number(jsonObj1.gm_31_l)
  gm_31_ml = Number(jsonObj1.gm_31_ml)
  pd_31_dl = Number(jsonObj1.pd_31_dl)
  pd_31_l = Number(jsonObj1.pd_31_l)
  pd_31_ml = Number(jsonObj1.pd_31_ml)
  note_31 = decodeURIComponent(jsonObj1.note_31)

  document.forms[0]['mobility_31'].value = mobility_31
  document.forms[0]['pd_31_db'].value = pd_31_db
  document.forms[0]['pd_31_b'].value = pd_31_b
  document.forms[0]['pd_31_mb'].value = pd_31_mb
  document.forms[0]['gm_31_db'].value = gm_31_db
  document.forms[0]['gm_31_b'].value = gm_31_b
  document.forms[0]['gm_31_mb'].value = gm_31_mb
  document.forms[0]['pd_31_dl'].value = pd_31_dl
  document.forms[0]['pd_31_l'].value = pd_31_l
  document.forms[0]['pd_31_ml'].value = pd_31_ml
  document.forms[0]['gm_31_dl'].value = gm_31_dl
  document.forms[0]['gm_31_l'].value = gm_31_l
  document.forms[0]['gm_31_ml'].value = gm_31_ml
  document.forms[0]['note_31'].value = note_31

  toggle_implant_31()
  toggle_implant_31()
  toggle_tooth_31()
  change_probing_31()
  toggle_tooth_31()
  //change_probing_31();

  tooth_48 = Number(jsonObj1.tooth_48)
  mobility_48 = Number(jsonObj1.mobility_48)
  Furkation_48_b = Number(jsonObj1.furcation_48_b)
  Furkation_48_l = Number(jsonObj1.furcation_48_l)
  Implantat_48 = Number(jsonObj1.implant_48)
  bop_48_db = Number(jsonObj1.bop_48_db)
  bop_48_b = Number(jsonObj1.bop_48_b)
  bop_48_mb = Number(jsonObj1.bop_48_mb)
  pi_48_db = Number(jsonObj1.pi_48_db)
  pi_48_b = Number(jsonObj1.pi_48_b)
  pi_48_mb = Number(jsonObj1.pi_48_mb)
  bop_48_dl = Number(jsonObj1.bop_48_dl)
  bop_48_l = Number(jsonObj1.bop_48_l)
  bop_48_ml = Number(jsonObj1.bop_48_ml)
  pi_48_dl = Number(jsonObj1.pi_48_dl)
  pi_48_l = Number(jsonObj1.pi_48_l)
  pi_48_ml = Number(jsonObj1.pi_48_ml)
  gm_48_db = Number(jsonObj1.gm_48_db)
  gm_48_b = Number(jsonObj1.gm_48_b)
  gm_48_mb = Number(jsonObj1.gm_48_mb)
  pd_48_db = Number(jsonObj1.pd_48_db)
  pd_48_b = Number(jsonObj1.pd_48_b)
  pd_48_mb = Number(jsonObj1.pd_48_mb)
  gm_48_dl = Number(jsonObj1.gm_48_dl)
  gm_48_l = Number(jsonObj1.gm_48_l)
  gm_48_ml = Number(jsonObj1.gm_48_ml)
  pd_48_dl = Number(jsonObj1.pd_48_dl)
  pd_48_l = Number(jsonObj1.pd_48_l)
  pd_48_ml = Number(jsonObj1.pd_48_ml)
  note_48 = decodeURIComponent(jsonObj1.note_48)

  document.forms[0]['mobility_48'].value = mobility_48
  document.forms[0]['pd_48_db'].value = pd_48_db
  document.forms[0]['pd_48_b'].value = pd_48_b
  document.forms[0]['pd_48_mb'].value = pd_48_mb
  document.forms[0]['gm_48_db'].value = gm_48_db
  document.forms[0]['gm_48_b'].value = gm_48_b
  document.forms[0]['gm_48_mb'].value = gm_48_mb
  document.forms[0]['pd_48_dl'].value = pd_48_dl
  document.forms[0]['pd_48_l'].value = pd_48_l
  document.forms[0]['pd_48_ml'].value = pd_48_ml
  document.forms[0]['gm_48_dl'].value = gm_48_dl
  document.forms[0]['gm_48_l'].value = gm_48_l
  document.forms[0]['gm_48_ml'].value = gm_48_ml
  document.forms[0]['note_48'].value = note_48

  toggle_implant_48()
  toggle_implant_48()
  toggle_tooth_48()
  change_probing_48()
  toggle_tooth_48()
  //change_probing_48();

  tooth_47 = Number(jsonObj1.tooth_47)
  mobility_47 = Number(jsonObj1.mobility_47)
  Furkation_47_b = Number(jsonObj1.furcation_47_b)
  Furkation_47_l = Number(jsonObj1.furcation_47_l)
  Implantat_47 = Number(jsonObj1.implant_47)
  bop_47_db = Number(jsonObj1.bop_47_db)
  bop_47_b = Number(jsonObj1.bop_47_b)
  bop_47_mb = Number(jsonObj1.bop_47_mb)
  pi_47_db = Number(jsonObj1.pi_47_db)
  pi_47_b = Number(jsonObj1.pi_47_b)
  pi_47_mb = Number(jsonObj1.pi_47_mb)
  bop_47_dl = Number(jsonObj1.bop_47_dl)
  bop_47_l = Number(jsonObj1.bop_47_l)
  bop_47_ml = Number(jsonObj1.bop_47_ml)
  pi_47_dl = Number(jsonObj1.pi_47_dl)
  pi_47_l = Number(jsonObj1.pi_47_l)
  pi_47_ml = Number(jsonObj1.pi_47_ml)
  gm_47_db = Number(jsonObj1.gm_47_db)
  gm_47_b = Number(jsonObj1.gm_47_b)
  gm_47_mb = Number(jsonObj1.gm_47_mb)
  pd_47_db = Number(jsonObj1.pd_47_db)
  pd_47_b = Number(jsonObj1.pd_47_b)
  pd_47_mb = Number(jsonObj1.pd_47_mb)
  gm_47_dl = Number(jsonObj1.gm_47_dl)
  gm_47_l = Number(jsonObj1.gm_47_l)
  gm_47_ml = Number(jsonObj1.gm_47_ml)
  pd_47_dl = Number(jsonObj1.pd_47_dl)
  pd_47_l = Number(jsonObj1.pd_47_l)
  pd_47_ml = Number(jsonObj1.pd_47_ml)
  note_47 = decodeURIComponent(jsonObj1.note_47)

  document.forms[0]['mobility_47'].value = mobility_47
  document.forms[0]['pd_47_db'].value = pd_47_db
  document.forms[0]['pd_47_b'].value = pd_47_b
  document.forms[0]['pd_47_mb'].value = pd_47_mb
  document.forms[0]['gm_47_db'].value = gm_47_db
  document.forms[0]['gm_47_b'].value = gm_47_b
  document.forms[0]['gm_47_mb'].value = gm_47_mb
  document.forms[0]['pd_47_dl'].value = pd_47_dl
  document.forms[0]['pd_47_l'].value = pd_47_l
  document.forms[0]['pd_47_ml'].value = pd_47_ml
  document.forms[0]['gm_47_dl'].value = gm_47_dl
  document.forms[0]['gm_47_l'].value = gm_47_l
  document.forms[0]['gm_47_ml'].value = gm_47_ml
  document.forms[0]['note_47'].value = note_47

  toggle_implant_47()
  toggle_implant_47()
  toggle_tooth_47()
  change_probing_47()
  toggle_tooth_47()
  //change_probing_47();

  tooth_46 = Number(jsonObj1.tooth_46)
  mobility_46 = Number(jsonObj1.mobility_46)
  Furkation_46_b = Number(jsonObj1.furcation_46_b)
  Furkation_46_l = Number(jsonObj1.furcation_46_l)
  Implantat_46 = Number(jsonObj1.implant_46)
  bop_46_db = Number(jsonObj1.bop_46_db)
  bop_46_b = Number(jsonObj1.bop_46_b)
  bop_46_mb = Number(jsonObj1.bop_46_mb)
  pi_46_db = Number(jsonObj1.pi_46_db)
  pi_46_b = Number(jsonObj1.pi_46_b)
  pi_46_mb = Number(jsonObj1.pi_46_mb)
  bop_46_dl = Number(jsonObj1.bop_46_dl)
  bop_46_l = Number(jsonObj1.bop_46_l)
  bop_46_ml = Number(jsonObj1.bop_46_ml)
  pi_46_dl = Number(jsonObj1.pi_46_dl)
  pi_46_l = Number(jsonObj1.pi_46_l)
  pi_46_ml = Number(jsonObj1.pi_46_ml)
  gm_46_db = Number(jsonObj1.gm_46_db)
  gm_46_b = Number(jsonObj1.gm_46_b)
  gm_46_mb = Number(jsonObj1.gm_46_mb)
  pd_46_db = Number(jsonObj1.pd_46_db)
  pd_46_b = Number(jsonObj1.pd_46_b)
  pd_46_mb = Number(jsonObj1.pd_46_mb)
  gm_46_dl = Number(jsonObj1.gm_46_dl)
  gm_46_l = Number(jsonObj1.gm_46_l)
  gm_46_ml = Number(jsonObj1.gm_46_ml)
  pd_46_dl = Number(jsonObj1.pd_46_dl)
  pd_46_l = Number(jsonObj1.pd_46_l)
  pd_46_ml = Number(jsonObj1.pd_46_ml)
  note_46 = decodeURIComponent(jsonObj1.note_46)

  document.forms[0]['mobility_46'].value = mobility_46
  document.forms[0]['pd_46_db'].value = pd_46_db
  document.forms[0]['pd_46_b'].value = pd_46_b
  document.forms[0]['pd_46_mb'].value = pd_46_mb
  document.forms[0]['gm_46_db'].value = gm_46_db
  document.forms[0]['gm_46_b'].value = gm_46_b
  document.forms[0]['gm_46_mb'].value = gm_46_mb
  document.forms[0]['pd_46_dl'].value = pd_46_dl
  document.forms[0]['pd_46_l'].value = pd_46_l
  document.forms[0]['pd_46_ml'].value = pd_46_ml
  document.forms[0]['gm_46_dl'].value = gm_46_dl
  document.forms[0]['gm_46_l'].value = gm_46_l
  document.forms[0]['gm_46_ml'].value = gm_46_ml
  document.forms[0]['note_46'].value = note_46

  toggle_implant_46()
  toggle_implant_46()
  toggle_tooth_46()
  change_probing_46()
  toggle_tooth_46()
  //change_probing_46();

  tooth_45 = Number(jsonObj1.tooth_45)
  mobility_45 = Number(jsonObj1.mobility_45)
  Implantat_45 = Number(jsonObj1.implant_45)
  bop_45_db = Number(jsonObj1.bop_45_db)
  bop_45_b = Number(jsonObj1.bop_45_b)
  bop_45_mb = Number(jsonObj1.bop_45_mb)
  pi_45_db = Number(jsonObj1.pi_45_db)
  pi_45_b = Number(jsonObj1.pi_45_b)
  pi_45_mb = Number(jsonObj1.pi_45_mb)
  bop_45_dl = Number(jsonObj1.bop_45_dl)
  bop_45_l = Number(jsonObj1.bop_45_l)
  bop_45_ml = Number(jsonObj1.bop_45_ml)
  pi_45_dl = Number(jsonObj1.pi_45_dl)
  pi_45_l = Number(jsonObj1.pi_45_l)
  pi_45_ml = Number(jsonObj1.pi_45_ml)
  gm_45_db = Number(jsonObj1.gm_45_db)
  gm_45_b = Number(jsonObj1.gm_45_b)
  gm_45_mb = Number(jsonObj1.gm_45_mb)
  pd_45_db = Number(jsonObj1.pd_45_db)
  pd_45_b = Number(jsonObj1.pd_45_b)
  pd_45_mb = Number(jsonObj1.pd_45_mb)
  gm_45_dl = Number(jsonObj1.gm_45_dl)
  gm_45_l = Number(jsonObj1.gm_45_l)
  gm_45_ml = Number(jsonObj1.gm_45_ml)
  pd_45_dl = Number(jsonObj1.pd_45_dl)
  pd_45_l = Number(jsonObj1.pd_45_l)
  pd_45_ml = Number(jsonObj1.pd_45_ml)
  note_45 = decodeURIComponent(jsonObj1.note_45)

  document.forms[0]['mobility_45'].value = mobility_45
  document.forms[0]['pd_45_db'].value = pd_45_db
  document.forms[0]['pd_45_b'].value = pd_45_b
  document.forms[0]['pd_45_mb'].value = pd_45_mb
  document.forms[0]['gm_45_db'].value = gm_45_db
  document.forms[0]['gm_45_b'].value = gm_45_b
  document.forms[0]['gm_45_mb'].value = gm_45_mb
  document.forms[0]['pd_45_dl'].value = pd_45_dl
  document.forms[0]['pd_45_l'].value = pd_45_l
  document.forms[0]['pd_45_ml'].value = pd_45_ml
  document.forms[0]['gm_45_dl'].value = gm_45_dl
  document.forms[0]['gm_45_l'].value = gm_45_l
  document.forms[0]['gm_45_ml'].value = gm_45_ml
  document.forms[0]['note_45'].value = note_45

  toggle_implant_45()
  toggle_implant_45()
  toggle_tooth_45()
  change_probing_45()
  toggle_tooth_45()
  //change_probing_45();

  tooth_44 = Number(jsonObj1.tooth_44)
  mobility_44 = Number(jsonObj1.mobility_44)
  Implantat_44 = Number(jsonObj1.implant_44)
  bop_44_db = Number(jsonObj1.bop_44_db)
  bop_44_b = Number(jsonObj1.bop_44_b)
  bop_44_mb = Number(jsonObj1.bop_44_mb)
  pi_44_db = Number(jsonObj1.pi_44_db)
  pi_44_b = Number(jsonObj1.pi_44_b)
  pi_44_mb = Number(jsonObj1.pi_44_mb)
  bop_44_dl = Number(jsonObj1.bop_44_dl)
  bop_44_l = Number(jsonObj1.bop_44_l)
  bop_44_ml = Number(jsonObj1.bop_44_ml)
  pi_44_dl = Number(jsonObj1.pi_44_dl)
  pi_44_l = Number(jsonObj1.pi_44_l)
  pi_44_ml = Number(jsonObj1.pi_44_ml)
  gm_44_db = Number(jsonObj1.gm_44_db)
  gm_44_b = Number(jsonObj1.gm_44_b)
  gm_44_mb = Number(jsonObj1.gm_44_mb)
  pd_44_db = Number(jsonObj1.pd_44_db)
  pd_44_b = Number(jsonObj1.pd_44_b)
  pd_44_mb = Number(jsonObj1.pd_44_mb)
  gm_44_dl = Number(jsonObj1.gm_44_dl)
  gm_44_l = Number(jsonObj1.gm_44_l)
  gm_44_ml = Number(jsonObj1.gm_44_ml)
  pd_44_dl = Number(jsonObj1.pd_44_dl)
  pd_44_l = Number(jsonObj1.pd_44_l)
  pd_44_ml = Number(jsonObj1.pd_44_ml)
  note_44 = decodeURIComponent(jsonObj1.note_44)

  document.forms[0]['mobility_44'].value = mobility_44
  document.forms[0]['pd_44_db'].value = pd_44_db
  document.forms[0]['pd_44_b'].value = pd_44_b
  document.forms[0]['pd_44_mb'].value = pd_44_mb
  document.forms[0]['gm_44_db'].value = gm_44_db
  document.forms[0]['gm_44_b'].value = gm_44_b
  document.forms[0]['gm_44_mb'].value = gm_44_mb
  document.forms[0]['pd_44_dl'].value = pd_44_dl
  document.forms[0]['pd_44_l'].value = pd_44_l
  document.forms[0]['pd_44_ml'].value = pd_44_ml
  document.forms[0]['gm_44_dl'].value = gm_44_dl
  document.forms[0]['gm_44_l'].value = gm_44_l
  document.forms[0]['gm_44_ml'].value = gm_44_ml
  document.forms[0]['note_44'].value = note_44

  toggle_implant_44()
  toggle_implant_44()
  toggle_tooth_44()
  change_probing_44()
  toggle_tooth_44()
  //change_probing_44();

  tooth_43 = Number(jsonObj1.tooth_43)
  mobility_43 = Number(jsonObj1.mobility_43)
  Implantat_43 = Number(jsonObj1.implant_43)
  bop_43_db = Number(jsonObj1.bop_43_db)
  bop_43_b = Number(jsonObj1.bop_43_b)
  bop_43_mb = Number(jsonObj1.bop_43_mb)
  pi_43_db = Number(jsonObj1.pi_43_db)
  pi_43_b = Number(jsonObj1.pi_43_b)
  pi_43_mb = Number(jsonObj1.pi_43_mb)
  bop_43_dl = Number(jsonObj1.bop_43_dl)
  bop_43_l = Number(jsonObj1.bop_43_l)
  bop_43_ml = Number(jsonObj1.bop_43_ml)
  pi_43_dl = Number(jsonObj1.pi_43_dl)
  pi_43_l = Number(jsonObj1.pi_43_l)
  pi_43_ml = Number(jsonObj1.pi_43_ml)
  gm_43_db = Number(jsonObj1.gm_43_db)
  gm_43_b = Number(jsonObj1.gm_43_b)
  gm_43_mb = Number(jsonObj1.gm_43_mb)
  pd_43_db = Number(jsonObj1.pd_43_db)
  pd_43_b = Number(jsonObj1.pd_43_b)
  pd_43_mb = Number(jsonObj1.pd_43_mb)
  gm_43_dl = Number(jsonObj1.gm_43_dl)
  gm_43_l = Number(jsonObj1.gm_43_l)
  gm_43_ml = Number(jsonObj1.gm_43_ml)
  pd_43_dl = Number(jsonObj1.pd_43_dl)
  pd_43_l = Number(jsonObj1.pd_43_l)
  pd_43_ml = Number(jsonObj1.pd_43_ml)
  note_43 = decodeURIComponent(jsonObj1.note_43)

  document.forms[0]['mobility_43'].value = mobility_43
  document.forms[0]['pd_43_db'].value = pd_43_db
  document.forms[0]['pd_43_b'].value = pd_43_b
  document.forms[0]['pd_43_mb'].value = pd_43_mb
  document.forms[0]['gm_43_db'].value = gm_43_db
  document.forms[0]['gm_43_b'].value = gm_43_b
  document.forms[0]['gm_43_mb'].value = gm_43_mb
  document.forms[0]['pd_43_dl'].value = pd_43_dl
  document.forms[0]['pd_43_l'].value = pd_43_l
  document.forms[0]['pd_43_ml'].value = pd_43_ml
  document.forms[0]['gm_43_dl'].value = gm_43_dl
  document.forms[0]['gm_43_l'].value = gm_43_l
  document.forms[0]['gm_43_ml'].value = gm_43_ml
  document.forms[0]['note_43'].value = note_43

  toggle_implant_43()
  toggle_implant_43()
  toggle_tooth_43()
  change_probing_43()
  toggle_tooth_43()
  //change_probing_43();

  tooth_42 = Number(jsonObj1.tooth_42)
  mobility_42 = Number(jsonObj1.mobility_42)
  Implantat_42 = Number(jsonObj1.implant_42)
  bop_42_db = Number(jsonObj1.bop_42_db)
  bop_42_b = Number(jsonObj1.bop_42_b)
  bop_42_mb = Number(jsonObj1.bop_42_mb)
  pi_42_db = Number(jsonObj1.pi_42_db)
  pi_42_b = Number(jsonObj1.pi_42_b)
  pi_42_mb = Number(jsonObj1.pi_42_mb)
  bop_42_dl = Number(jsonObj1.bop_42_dl)
  bop_42_l = Number(jsonObj1.bop_42_l)
  bop_42_ml = Number(jsonObj1.bop_42_ml)
  pi_42_dl = Number(jsonObj1.pi_42_dl)
  pi_42_l = Number(jsonObj1.pi_42_l)
  pi_42_ml = Number(jsonObj1.pi_42_ml)
  gm_42_db = Number(jsonObj1.gm_42_db)
  gm_42_b = Number(jsonObj1.gm_42_b)
  gm_42_mb = Number(jsonObj1.gm_42_mb)
  pd_42_db = Number(jsonObj1.pd_42_db)
  pd_42_b = Number(jsonObj1.pd_42_b)
  pd_42_mb = Number(jsonObj1.pd_42_mb)
  gm_42_dl = Number(jsonObj1.gm_42_dl)
  gm_42_l = Number(jsonObj1.gm_42_l)
  gm_42_ml = Number(jsonObj1.gm_42_ml)
  pd_42_dl = Number(jsonObj1.pd_42_dl)
  pd_42_l = Number(jsonObj1.pd_42_l)
  pd_42_ml = Number(jsonObj1.pd_42_ml)
  note_42 = decodeURIComponent(jsonObj1.note_42)

  document.forms[0]['mobility_42'].value = mobility_42
  document.forms[0]['pd_42_db'].value = pd_42_db
  document.forms[0]['pd_42_b'].value = pd_42_b
  document.forms[0]['pd_42_mb'].value = pd_42_mb
  document.forms[0]['gm_42_db'].value = gm_42_db
  document.forms[0]['gm_42_b'].value = gm_42_b
  document.forms[0]['gm_42_mb'].value = gm_42_mb
  document.forms[0]['pd_42_dl'].value = pd_42_dl
  document.forms[0]['pd_42_l'].value = pd_42_l
  document.forms[0]['pd_42_ml'].value = pd_42_ml
  document.forms[0]['gm_42_dl'].value = gm_42_dl
  document.forms[0]['gm_42_l'].value = gm_42_l
  document.forms[0]['gm_42_ml'].value = gm_42_ml
  document.forms[0]['note_42'].value = note_42

  toggle_implant_42()
  toggle_implant_42()
  toggle_tooth_42()
  change_probing_42()
  toggle_tooth_42()
  //change_probing_42();

  tooth_41 = Number(jsonObj1.tooth_41)
  mobility_41 = Number(jsonObj1.mobility_41)
  Implantat_41 = Number(jsonObj1.implant_41)
  bop_41_db = Number(jsonObj1.bop_41_db)
  bop_41_b = Number(jsonObj1.bop_41_b)
  bop_41_mb = Number(jsonObj1.bop_41_mb)
  pi_41_db = Number(jsonObj1.pi_41_db)
  pi_41_b = Number(jsonObj1.pi_41_b)
  pi_41_mb = Number(jsonObj1.pi_41_mb)
  bop_41_dl = Number(jsonObj1.bop_41_dl)
  bop_41_l = Number(jsonObj1.bop_41_l)
  bop_41_ml = Number(jsonObj1.bop_41_ml)
  pi_41_dl = Number(jsonObj1.pi_41_dl)
  pi_41_l = Number(jsonObj1.pi_41_l)
  pi_41_ml = Number(jsonObj1.pi_41_ml)
  gm_41_db = Number(jsonObj1.gm_41_db)
  gm_41_b = Number(jsonObj1.gm_41_b)
  gm_41_mb = Number(jsonObj1.gm_41_mb)
  pd_41_db = Number(jsonObj1.pd_41_db)
  pd_41_b = Number(jsonObj1.pd_41_b)
  pd_41_mb = Number(jsonObj1.pd_41_mb)
  gm_41_dl = Number(jsonObj1.gm_41_dl)
  gm_41_l = Number(jsonObj1.gm_41_l)
  gm_41_ml = Number(jsonObj1.gm_41_ml)
  pd_41_dl = Number(jsonObj1.pd_41_dl)
  pd_41_l = Number(jsonObj1.pd_41_l)
  pd_41_ml = Number(jsonObj1.pd_41_ml)
  note_41 = decodeURIComponent(jsonObj1.note_41)

  document.forms[0]['mobility_41'].value = mobility_41
  document.forms[0]['pd_41_db'].value = pd_41_db
  document.forms[0]['pd_41_b'].value = pd_41_b
  document.forms[0]['pd_41_mb'].value = pd_41_mb
  document.forms[0]['gm_41_db'].value = gm_41_db
  document.forms[0]['gm_41_b'].value = gm_41_b
  document.forms[0]['gm_41_mb'].value = gm_41_mb
  document.forms[0]['pd_41_dl'].value = pd_41_dl
  document.forms[0]['pd_41_l'].value = pd_41_l
  document.forms[0]['pd_41_ml'].value = pd_41_ml
  document.forms[0]['gm_41_dl'].value = gm_41_dl
  document.forms[0]['gm_41_l'].value = gm_41_l
  document.forms[0]['gm_41_ml'].value = gm_41_ml
  document.forms[0]['note_41'].value = note_41

  toggle_implant_41()
  toggle_implant_41()
  toggle_tooth_41()
  change_probing_41()
  toggle_tooth_41()
  //change_probing_41();

  calc()
}
