	// Definition der Variablen für das Formular
		var tooth_34 = 1;
		var Implantat_34 = 0;
		var bop_34_db = 0;
		var bop_34_b = 0;
		var bop_34_mb = 0;
		var pi_34_db = 0;
		var pi_34_b = 0;
		var pi_34_mb = 0;
		var bop_34_dl = 0;
		var bop_34_l = 0;
		var bop_34_ml = 0;
		var pi_34_dl = 0;
		var pi_34_l = 0;
		var pi_34_ml = 0;
		var gm_34_db = 0;
		var gm_34_b = 0;
		var gm_34_mb = 0;
		var pd_34_db = 0;
		var pd_34_b = 0;
		var pd_34_mb = 0;
		var gm_34_dl = 0;
		var gm_34_l = 0;
		var gm_34_ml = 0;
		var pd_34_dl = 0;
		var pd_34_l = 0;
		var pd_34_ml = 0;

	function clear_data_34() {
        if (tooth_34 == 1) {
			gm_34_db = 0;
			gm_34_b = 0;
			gm_34_mb = 0;
			pd_34_db = 0;
			pd_34_b = 0;
			pd_34_mb = 0;
	
				document.getElementById('gm_34_db_txt').value = 0;
				document.getElementById('gm_34_b_txt').value = 0;
				document.getElementById('gm_34_mb_txt').value = 0;
				
				document.getElementById('pd_34_db_txt').value = 0;
				document.getElementById('pd_34_b_txt').value = 0;
				document.getElementById('pd_34_mb_txt').value = 0;
			
				document.forms[0]["pd_34_db"].style.color = 'black'
				document.forms[0]["pd_34_b"].style.color = 'black'
				document.forms[0]["pd_34_mb"].style.color = 'black'
			
			gm_34_dl = 0;
			gm_34_l = 0;
			gm_34_ml = 0;
			pd_34_dl = 0;
			pd_34_l = 0;
			pd_34_ml = 0;

				document.getElementById('gm_34_dl_txt').value = 0;
				document.getElementById('gm_34_l_txt').value = 0;
				document.getElementById('gm_34_ml_txt').value = 0;
				
				document.getElementById('pd_34_dl_txt').value = 0;
				document.getElementById('pd_34_l_txt').value = 0;
				document.getElementById('pd_34_ml_txt').value = 0;

				document.forms[0]["pd_34_dl"].style.color = 'black'
				document.forms[0]["pd_34_l"].style.color = 'black'
				document.forms[0]["pd_34_ml"].style.color = 'black'
			
			change_probing_34();
			
			mobility_34 = 0;

				document.getElementById('mobility_34_txt').value = "0";

			note_34 = "";

				document.getElementById('note_34_txt').value = "";
	
			bop_34_db = 0;
			bop_34_b = 0;
			bop_34_mb = 0;
					
			bop_34_dl = 0;
			bop_34_l = 0;
			bop_34_ml = 0;
					
				document.getElementById('bop_34_db_rectangle').style.display = 'none';
				document.getElementById('bop_34_b_rectangle').style.display = 'none';
				document.getElementById('bop_34_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_34_dl_rectangle').style.display = 'none';
				document.getElementById('bop_34_l_rectangle').style.display = 'none';
				document.getElementById('bop_34_ml_rectangle').style.display = 'none';
				
			pi_34_db = 0;
			pi_34_b = 0;
			pi_34_mb = 0;
					
			pi_34_dl = 0;
			pi_34_l = 0;
			pi_34_ml = 0;

				document.getElementById('pi_34_db_rectangle').style.display = 'none';
				document.getElementById('pi_34_b_rectangle').style.display = 'none';
				document.getElementById('pi_34_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_34_dl_rectangle').style.display = 'none';
				document.getElementById('pi_34_l_rectangle').style.display = 'none';
				document.getElementById('pi_34_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_34() {
		if (tooth_34 === 1) {
			tooth_34 = 0;
			document.getElementById('tooth_line_34_b').style.display = 'block';
			document.getElementById('tooth_line_34_l').style.display = 'block';
			
			document.getElementById('mobility_34_txt').style.display = 'none';
			
			document.getElementById('implantat_34_btn').style.display = 'none';
			document.getElementById('implantat_34_tab').style.display = 'none';
			document.getElementById('implantat_34_b_image').style.display = 'none';
			document.getElementById('implantat_34_l_image').style.display = 'none';
			
			document.getElementById('gm_34_db_txt').style.display = 'none';
			document.getElementById('gm_34_b_txt').style.display = 'none';
			document.getElementById('gm_34_mb_txt').style.display = 'none';
			
			document.getElementById('pd_34_db_txt').style.display = 'none';
			document.getElementById('pd_34_b_txt').style.display = 'none';
			document.getElementById('pd_34_mb_txt').style.display = 'none';
			
			document.getElementById('gm_34_dl_txt').style.display = 'none';
			document.getElementById('gm_34_l_txt').style.display = 'none';
			document.getElementById('gm_34_ml_txt').style.display = 'none';
			
			document.getElementById('pd_34_dl_txt').style.display = 'none';
			document.getElementById('pd_34_l_txt').style.display = 'none';
			document.getElementById('pd_34_ml_txt').style.display = 'none';
			
			document.getElementById('bop_34_db_rectangle').style.display = 'none';
			document.getElementById('bop_34_b_rectangle').style.display = 'none';
			document.getElementById('bop_34_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_34_dl_rectangle').style.display = 'none';
			document.getElementById('bop_34_l_rectangle').style.display = 'none';
			document.getElementById('bop_34_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_34_db_btn').style.display = 'none';
			document.getElementById('bop_34_b_btn').style.display = 'none';
			document.getElementById('bop_34_mb_btn').style.display = 'none';
			
			document.getElementById('bop_34_dl_btn').style.display = 'none';
			document.getElementById('bop_34_l_btn').style.display = 'none';
			document.getElementById('bop_34_ml_btn').style.display = 'none';
			
			document.getElementById('pi_34_db_rectangle').style.display = 'none';
			document.getElementById('pi_34_b_rectangle').style.display = 'none';
			document.getElementById('pi_34_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_34_dl_rectangle').style.display = 'none';
			document.getElementById('pi_34_l_rectangle').style.display = 'none';
			document.getElementById('pi_34_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_34_db_btn').style.display = 'none';
			document.getElementById('pi_34_b_btn').style.display = 'none';
			document.getElementById('pi_34_mb_btn').style.display = 'none';
			
			document.getElementById('pi_34_dl_btn').style.display = 'none';
			document.getElementById('pi_34_l_btn').style.display = 'none';
			document.getElementById('pi_34_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_34_b').style.display = 'none';
			document.getElementById('polyline_al_34_b').style.display = 'none';
			document.getElementById('polyline_gm_34_b').style.display = 'none';
			
			document.getElementById('polygon_34_l').style.display = 'none';
			document.getElementById('polyline_al_34_l').style.display = 'none';
			document.getElementById('polyline_gm_34_l').style.display = 'none';
			
			document.getElementById('polygon_inter_35_34_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_35_34_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_35_34_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_35_34_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_35_34_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_35_34_l').style.display = 'none';            
            
			document.getElementById('polygon_inter_34_33_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_34_33_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_34_33_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_34_33_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_34_33_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_34_33_l').style.display = 'none';            
			
			document.getElementById('note_34_txt').style.display = 'none';
		}
		else if (Implantat_34 !== 1) {
			tooth_34 = 1;
			document.getElementById('tooth_line_34_b').style.display = 'none';
			document.getElementById('tooth_line_34_l').style.display = 'none';

			document.getElementById('mobility_34_txt').style.display = 'block';

			document.getElementById('implantat_34_btn').style.display = 'block';

			document.getElementById('gm_34_db_txt').style.display = 'block';
			document.getElementById('gm_34_b_txt').style.display = 'block';
			document.getElementById('gm_34_mb_txt').style.display = 'block';
			
			document.getElementById('pd_34_db_txt').style.display = 'block';
			document.getElementById('pd_34_b_txt').style.display = 'block';
			document.getElementById('pd_34_mb_txt').style.display = 'block';
			
			document.getElementById('gm_34_dl_txt').style.display = 'block';
			document.getElementById('gm_34_l_txt').style.display = 'block';
			document.getElementById('gm_34_ml_txt').style.display = 'block';
			
			document.getElementById('pd_34_dl_txt').style.display = 'block';
			document.getElementById('pd_34_l_txt').style.display = 'block';
			document.getElementById('pd_34_ml_txt').style.display = 'block';
			
			document.getElementById('note_34_txt').style.display = 'block';

			document.getElementById('polygon_34_b').style.display = 'block';
			document.getElementById('polyline_al_34_b').style.display = 'block';
			document.getElementById('polyline_gm_34_b').style.display = 'block';
			
			document.getElementById('polygon_34_l').style.display = 'block';
			document.getElementById('polyline_al_34_l').style.display = 'block';
			document.getElementById('polyline_gm_34_l').style.display = 'block';

            if (tooth_35 == 1 && tooth_34 == 1) {
				document.getElementById('polygon_inter_35_34_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_35_34_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_35_34_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_35_34_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_35_34_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_35_34_l').style.display = 'block';            
            }
            
            if (tooth_34 == 1 && tooth_33 == 1) {
				document.getElementById('polygon_inter_34_33_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_34_33_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_34_33_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_34_33_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_34_33_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_34_33_l').style.display = 'block';            
            }

			document.getElementById('bop_34_db_btn').style.display = 'block';
			document.getElementById('bop_34_b_btn').style.display = 'block';
			document.getElementById('bop_34_mb_btn').style.display = 'block';

			document.getElementById('bop_34_dl_btn').style.display = 'block';
			document.getElementById('bop_34_l_btn').style.display = 'block';
			document.getElementById('bop_34_ml_btn').style.display = 'block';
			
			if (bop_34_db == 1) {
				document.getElementById('bop_34_db_rectangle').style.display = 'block';
			}
			if (bop_34_b == 1) {
				document.getElementById('bop_34_b_rectangle').style.display = 'block';
			}
			if (bop_34_mb == 1) {
				document.getElementById('bop_34_mb_rectangle').style.display = 'block';
			}
			if (bop_34_dl == 1) {
				document.getElementById('bop_34_dl_rectangle').style.display = 'block';
			}
			if (bop_34_l == 1) {
				document.getElementById('bop_34_l_rectangle').style.display = 'block';
			}
			if (bop_34_ml == 1) {
				document.getElementById('bop_34_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_34_db_btn').style.display = 'block';
			document.getElementById('pi_34_b_btn').style.display = 'block';
			document.getElementById('pi_34_mb_btn').style.display = 'block';

			document.getElementById('pi_34_dl_btn').style.display = 'block';
			document.getElementById('pi_34_l_btn').style.display = 'block';
			document.getElementById('pi_34_ml_btn').style.display = 'block';
			
			if (pi_34_db == 1) {
				document.getElementById('pi_34_db_rectangle').style.display = 'block';
			}
			if (pi_34_b == 1) {
				document.getElementById('pi_34_b_rectangle').style.display = 'block';
			}
			if (pi_34_mb == 1) {
				document.getElementById('pi_34_mb_rectangle').style.display = 'block';
			}
			if (pi_34_dl == 1) {
				document.getElementById('pi_34_dl_rectangle').style.display = 'block';
			}
			if (pi_34_l == 1) {
				document.getElementById('pi_34_l_rectangle').style.display = 'block';
			}
			if (pi_34_ml == 1) {
				document.getElementById('pi_34_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_34 == 1) {
			tooth_34 = 1;
			document.getElementById('tooth_line_34_b').style.display = 'none';
			document.getElementById('tooth_line_34_l').style.display = 'none';

			document.getElementById('mobility_34_txt').style.display = 'block';
			
			document.getElementById('note_34_txt').style.display = 'block';

			document.getElementById('implantat_34_btn').style.display = 'block';
			document.getElementById('implantat_34_tab').style.display = 'block';
			document.getElementById('implantat_34_b_image').style.display = 'block';
			document.getElementById('implantat_34_l_image').style.display = 'block';

			document.getElementById('gm_34_db_txt').style.display = 'block';
			document.getElementById('gm_34_b_txt').style.display = 'block';
			document.getElementById('gm_34_mb_txt').style.display = 'block';
			
			document.getElementById('pd_34_db_txt').style.display = 'block';
			document.getElementById('pd_34_b_txt').style.display = 'block';
			document.getElementById('pd_34_mb_txt').style.display = 'block';
			
			document.getElementById('gm_34_dl_txt').style.display = 'block';
			document.getElementById('gm_34_l_txt').style.display = 'block';
			document.getElementById('gm_34_ml_txt').style.display = 'block';
			
			document.getElementById('pd_34_dl_txt').style.display = 'block';
			document.getElementById('pd_34_l_txt').style.display = 'block';
			document.getElementById('pd_34_ml_txt').style.display = 'block';

			document.getElementById('polygon_34_b').style.display = 'block';
			document.getElementById('polyline_al_34_b').style.display = 'block';
			document.getElementById('polyline_gm_34_b').style.display = 'block';
			
			document.getElementById('polygon_34_l').style.display = 'block';
			document.getElementById('polyline_al_34_l').style.display = 'block';
			document.getElementById('polyline_gm_34_l').style.display = 'block';

            if (tooth_35 == 1 && tooth_34 == 1) {
				document.getElementById('polygon_inter_35_34_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_35_34_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_35_34_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_35_34_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_35_34_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_35_34_l').style.display = 'block';            
            }
            
            if (tooth_34 == 1 && tooth_33 == 1) {
				document.getElementById('polygon_inter_34_33_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_34_33_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_34_33_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_34_33_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_34_33_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_34_33_l').style.display = 'block';            
            }
            
			document.getElementById('bop_34_db_btn').style.display = 'block';
			document.getElementById('bop_34_b_btn').style.display = 'block';
			document.getElementById('bop_34_mb_btn').style.display = 'block';

			document.getElementById('bop_34_dl_btn').style.display = 'block';
			document.getElementById('bop_34_l_btn').style.display = 'block';
			document.getElementById('bop_34_ml_btn').style.display = 'block';
			
			document.getElementById('pi_34_db_btn').style.display = 'block';
			document.getElementById('pi_34_b_btn').style.display = 'block';
			document.getElementById('pi_34_mb_btn').style.display = 'block';

			document.getElementById('pi_34_dl_btn').style.display = 'block';
			document.getElementById('pi_34_l_btn').style.display = 'block';
			document.getElementById('pi_34_ml_btn').style.display = 'block';
			
			if (bop_34_db == 1) {
				document.getElementById('bop_34_db_rectangle').style.display = 'block';
			}
			if (bop_34_b == 1) {
				document.getElementById('bop_34_b_rectangle').style.display = 'block';
			}
			if (bop_34_mb == 1) {
				document.getElementById('bop_34_mb_rectangle').style.display = 'block';
			}
			if (bop_34_dl == 1) {
				document.getElementById('bop_34_dl_rectangle').style.display = 'block';
			}
			if (bop_34_l == 1) {
				document.getElementById('bop_34_l_rectangle').style.display = 'block';
			}
			if (bop_34_ml == 1) {
				document.getElementById('bop_34_ml_rectangle').style.display = 'block';
			}
			
			if (pi_34_db == 1) {
				document.getElementById('pi_34_db_rectangle').style.display = 'block';
			}
			if (pi_34_b == 1) {
				document.getElementById('pi_34_b_rectangle').style.display = 'block';
			}
			if (pi_34_mb == 1) {
				document.getElementById('pi_34_mb_rectangle').style.display = 'block';
			}
			if (pi_34_dl == 1) {
				document.getElementById('pi_34_dl_rectangle').style.display = 'block';
			}
			if (pi_34_l == 1) {
				document.getElementById('pi_34_l_rectangle').style.display = 'block';
			}
			if (pi_34_ml == 1) {
				document.getElementById('pi_34_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_34();
	}

	function toggle_implant_34() {
		if (Implantat_34 == 0) {
			Implantat_34 = 1;
			
			document.getElementById('implantat_34_b_image').style.display = 'block';
			document.getElementById('implantat_34_l_image').style.display = 'block';
			document.getElementById('implantat_34_tab').style.display = 'block';
		}
		else {
			Implantat_34 = 0;
			
			document.getElementById('implantat_34_b_image').style.display = 'none';
			document.getElementById('implantat_34_l_image').style.display = 'none';
			document.getElementById('implantat_34_tab').style.display = 'none';
		}
	}

	function toggle_bop_34_db() {
		if (bop_34_db == 0) {
			bop_34_db = 1;
			document.getElementById('bop_34_db_rectangle').style.display = 'block';
		}
		else {
			bop_34_db = 0;
			document.getElementById('bop_34_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_34_b() {
		if (bop_34_b == 0) {
			bop_34_b = 1;
			document.getElementById('bop_34_b_rectangle').style.display = 'block';
		}
		else {
			bop_34_b = 0;
			document.getElementById('bop_34_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_34_mb() {
		if (bop_34_mb == 0) {
			bop_34_mb = 1;
			document.getElementById('bop_34_mb_rectangle').style.display = 'block';
		}
		else {
			bop_34_mb = 0;
			document.getElementById('bop_34_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_34_db() {
		if (pi_34_db == 0) {
			pi_34_db = 1;
			document.getElementById('pi_34_db_rectangle').style.display = 'block';
		}
		else {
			pi_34_db = 0;
			document.getElementById('pi_34_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_34_b() {
		if (pi_34_b == 0) {
			pi_34_b = 1;
			document.getElementById('pi_34_b_rectangle').style.display = 'block';
		}
		else {
			pi_34_b = 0;
			document.getElementById('pi_34_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_34_mb() {
		if (pi_34_mb == 0) {
			pi_34_mb = 1;
			document.getElementById('pi_34_mb_rectangle').style.display = 'block';
		}
		else {
			pi_34_mb = 0;
			document.getElementById('pi_34_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_34_dl() {
		if (bop_34_dl == 0) {
			bop_34_dl = 1;
			document.getElementById('bop_34_dl_rectangle').style.display = 'block';
		}
		else {
			bop_34_dl = 0;
			document.getElementById('bop_34_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_34_l() {
		if (bop_34_l == 0) {
			bop_34_l = 1;
			document.getElementById('bop_34_l_rectangle').style.display = 'block';
		}
		else {
			bop_34_l = 0;
			document.getElementById('bop_34_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_34_ml() {
		if (bop_34_ml == 0) {
			bop_34_ml = 1;
			document.getElementById('bop_34_ml_rectangle').style.display = 'block';
		}
		else {
			bop_34_ml = 0;
			document.getElementById('bop_34_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_34_dl() {
		if (pi_34_dl == 0) {
			pi_34_dl = 1;
			document.getElementById('pi_34_dl_rectangle').style.display = 'block';
		}
		else {
			pi_34_dl = 0;
			document.getElementById('pi_34_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_34_l() {
		if (pi_34_l == 0) {
			pi_34_l = 1;
			document.getElementById('pi_34_l_rectangle').style.display = 'block';
		}
		else {
			pi_34_l = 0;
			document.getElementById('pi_34_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_34_ml() {
		if (pi_34_ml == 0) {
			pi_34_ml = 1;
			document.getElementById('pi_34_ml_rectangle').style.display = 'block';
		}
		else {
			pi_34_ml = 0;
			document.getElementById('pi_34_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_34() {
		if (tooth_34 == 1) {
			
		// Variablen aus dem Formular
			pd_34_db = document.forms[0]["pd_34_db"].value;
			pd_34_b = document.forms[0]["pd_34_b"].value;
			pd_34_mb = document.forms[0]["pd_34_mb"].value;

			if (document.forms[0]["pd_34_dl"].value > 3) {document.forms[0]["pd_34_dl"].style.color = 'red';} else {document.forms[0]["pd_34_dl"].style.color = 'black'};
			if (document.forms[0]["pd_34_l"].value > 3) {document.forms[0]["pd_34_l"].style.color = 'red';} else {document.forms[0]["pd_34_l"].style.color = 'black'};
			if (document.forms[0]["pd_34_ml"].value > 3) {document.forms[0]["pd_34_ml"].style.color = 'red';} else {document.forms[0]["pd_34_ml"].style.color = 'black'};
			
			gm_34_db = document.forms[0]["gm_34_db"].value;
			gm_34_b = document.forms[0]["gm_34_b"].value;
			gm_34_mb = document.forms[0]["gm_34_mb"].value;
			
			pd_34_dl = document.forms[0]["pd_34_dl"].value;
			pd_34_l = document.forms[0]["pd_34_l"].value;
			pd_34_ml = document.forms[0]["pd_34_ml"].value;

			if (document.forms[0]["pd_34_db"].value > 3) {document.forms[0]["pd_34_db"].style.color = 'red';} else {document.forms[0]["pd_34_db"].style.color = 'black'};
			if (document.forms[0]["pd_34_b"].value > 3) {document.forms[0]["pd_34_b"].style.color = 'red';} else {document.forms[0]["pd_34_b"].style.color = 'black'};
			if (document.forms[0]["pd_34_mb"].value > 3) {document.forms[0]["pd_34_mb"].style.color = 'red';} else {document.forms[0]["pd_34_mb"].style.color = 'black'};
			
			gm_34_dl = document.forms[0]["gm_34_dl"].value;
			gm_34_l = document.forms[0]["gm_34_l"].value;
			gm_34_ml = document.forms[0]["gm_34_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 34 (bukkal) in der Bitmap
			var x_db_34 = 824;							// distal 34
			var x_mb_34 = 805;							// mesial 34
			var x_b_34 = (x_db_34 + x_mb_34)/2;			// bukkal 34
			
		// Set der horizontalen Koordinaten von Zahn 34 (lingual) in der Bitmap
			var x_dl_34 = 827;							// distal 34
			var x_ml_34 = 804;							// mesial 34
			var x_l_34 = (x_dl_34 + x_ml_34)/2;			// lingual 34
			
		// Set der vertikalen Koordinaten von Zahn 34 (bukkal) aus dem Formular
			var y_gm_34_db = gm_UK_b - 6.05 * gm_34_db;	// Margo Gingivae distobukkal 34
			var y_gm_34_b = gm_UK_b - 6.05 * gm_34_b;	// Margo Gingivae bukkal 34
			var y_gm_34_mb = gm_UK_b - 6.05 * gm_34_mb;	// Margo Gingivae mesiobukkal 34
			var y_pd_34_db = 6.05 * pd_34_db;			// Sondierungstiefe distobukkal 34
			var y_pd_34_b = 6.05 * pd_34_b;				// Sondierungstiefe bukkal 34
			var y_pd_34_mb = 6.05 * pd_34_mb;			// Sondierungstiefe mesiobukkal 34
			
		// Set der vertikalen Koordinaten von Zahn 34 (lingual) aus dem Formular
			var y_gm_34_dl = gm_UK_l + 6.05 * gm_34_dl;	// Margo Gingivae distolingual 34
			var y_gm_34_l = gm_UK_l + 6.05 * gm_34_l;	// Margo Gingivae lingual 34
			var y_gm_34_ml = gm_UK_l + 6.05 * gm_34_ml;	// Margo Gingivae mesiolingual 34
			var y_pd_34_dl = 6.05 * pd_34_dl;			// Sondierungstiefe distolingual 34
			var y_pd_34_l = 6.05 * pd_34_l;				// Sondierungstiefe lingual 34
			var y_pd_34_ml = 6.05 * pd_34_ml;			// Sondierungstiefe mesiolingual 34
			
		// Berechnung des Attachmentniveaus 34 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_34_db = y_gm_34_db + y_pd_34_db;	// Attachmentniveau distobukkal 34
			var y_al_34_b = y_gm_34_b + y_pd_34_b;		// Attachmentniveau bukkal 34
			var y_al_34_mb = y_gm_34_mb + y_pd_34_mb;	// Attachmentniveau mesiobukkal 34
			
		// Berechnung des Attachmentniveaus 34 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_34_dl = y_gm_34_dl - y_pd_34_dl;	// Attachmentniveau distolingual 34
			var y_al_34_l = y_gm_34_l - y_pd_34_l;		// Attachmentniveau lingual 34
			var y_al_34_ml = y_gm_34_ml - y_pd_34_ml;	// Attachmentniveau mesiolingual 34

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[34].storeCoordinates(
				x_db_34, x_mb_34, x_dl_34, x_ml_34, x_b_34, x_l_34,
				y_gm_34_db, y_gm_34_b, y_gm_34_mb, y_pd_34_db, y_pd_34_b, y_pd_34_mb,
				y_gm_34_dl, y_gm_34_l, y_gm_34_ml, y_pd_34_dl, y_pd_34_l, y_pd_34_ml,
				y_al_34_db, y_al_34_b, y_al_34_mb, y_al_34_dl, y_al_34_l, y_al_34_ml
			);

		// Parodontaltasche 34 bukkal zeichnen
			var string = 
				x_db_34 + ", " + y_al_34_db + "  " + 
				x_b_34 + ", " + y_al_34_b + "  " + 
				x_mb_34 + ", " + y_al_34_mb + "  " + 
				x_mb_34 + ", " + y_gm_34_mb + "  " + 
				x_b_34 + ", " + y_gm_34_b + "  " + 
				x_db_34 + ", " + y_gm_34_db;
			document.getElementById("polygon_34_b").setAttribute("points", string);
		// Attachmentniveau 34 bukkal zeichnen
			var string = 
				x_db_34 + ", " + y_al_34_db + "  " + 
				x_b_34 + ", " + y_al_34_b + "  " + 
				x_mb_34 + ", " + y_al_34_mb;
			document.getElementById("polyline_al_34_b").setAttribute("points", string);
		// Margo Gingivae 34 bukkal zeichnen
			var string =
				x_db_34 + ", " + y_gm_34_db + "  " + 
				x_b_34 + ", " + y_gm_34_b + "  " + 
				x_mb_34 + ", " + y_gm_34_mb;
			document.getElementById("polyline_gm_34_b").setAttribute("points", string);

		// Parodontaltasche 34 lingual zeichnen
			var string = 
				x_dl_34 + ", " + y_al_34_dl + "  " + 
				x_l_34 + ", " + y_al_34_l + "  " + 
				x_ml_34 + ", " + y_al_34_ml + "  " + 
				x_ml_34 + ", " + y_gm_34_ml + "  " + 
				x_l_34 + ", " + y_gm_34_l + "  " + 
				x_dl_34 + ", " + y_gm_34_dl;
			document.getElementById("polygon_34_l").setAttribute("points", string);
		// Attachmentniveau 34 lingual zeichnen
			var string = 
				x_dl_34 + ", " + y_al_34_dl + "  " + 
				x_l_34 + ", " + y_al_34_l + "  " + 
				x_ml_34 + ", " + y_al_34_ml;
			document.getElementById("polyline_al_34_l").setAttribute("points", string);
		// Margo Gingivae 34 lingual zeichnen
			var string =
				x_dl_34 + ", " + y_gm_34_dl + "  " + 
				x_l_34 + ", " + y_gm_34_l + "  " + 
				x_ml_34 + ", " + y_gm_34_ml;
			document.getElementById("polyline_gm_34_l").setAttribute("points", string);
		}
        if (tooth_34 == 1 && tooth_33 == 1) {

            pd_33_db = document.forms[0]["pd_33_db"].value;
			gm_33_db = document.forms[0]["gm_33_db"].value;
			
			pd_33_dl = document.forms[0]["pd_33_dl"].value;
			gm_33_dl = document.forms[0]["gm_33_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 43 (bukkal) in der Bitmap
			var x_db_33 = 787;							// distal 43
			
		// Set der horizontalen Koordinaten von Zahn 43 (lingual) in der Bitmap
			var x_dl_33 = 787;							// distal 43
			
		// Set der vertikalen Koordinaten von Zahn 43 (bukkal) aus dem Formular
			var y_gm_33_db = gm_UK_b - 6.05 * gm_33_db;	// Margo Gingivae distobukkal 43
			var y_pd_33_db = 6.05 * pd_33_db;			// Sondierungstiefe distobukkal 43
			
		// Set der vertikalen Koordinaten von Zahn 43 (lingual) aus dem Formular
			var y_gm_33_dl = gm_UK_l + 6.05 * gm_33_dl;	// Margo Gingivae distolingual 43
			var y_pd_33_dl = 6.05 * pd_33_dl;			// Sondierungstiefe distolingual 43
			
		// Berechnung des Attachmentniveaus 43 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_33_db = y_gm_33_db + y_pd_33_db;	// Attachmentniveau distobukkal 43
			
		// Berechnung des Attachmentniveaus 43 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_33_dl = y_gm_33_dl - y_pd_33_dl;	// Attachmentniveau distolingual 43

		// Parodontaltasche inter_34_33 bukkal zeichnen
			var string = 
				x_mb_34 + ", " + y_al_34_mb + "  " + 
				x_db_33 + ", " + y_al_33_db + "  " + 
				x_db_33 + ", " + y_gm_33_db + "  " + 
				x_mb_34 + ", " + y_gm_34_mb;
			document.getElementById("polygon_inter_34_33_b").setAttribute("points", string);
		// Attachmentniveau inter_34_33 bukkal zeichnen
			var string = 
				x_mb_34 + ", " + y_al_34_mb + "  " + 
				x_db_33 + ", " + y_al_33_db;
			document.getElementById("polyline_al_inter_34_33_b").setAttribute("points", string);
		// Margo Gingivae inter_34_33 bukkal zeichnen
			var string =
				x_mb_34 + ", " + y_gm_34_mb + "  " + 
				x_db_33 + ", " + y_gm_33_db;
			document.getElementById("polyline_gm_inter_34_33_b").setAttribute("points", string);

        // Parodontaltasche inter_34_33 lingual zeichnen
			var string = 
				x_ml_34 + ", " + y_al_34_ml + "  " + 
				x_dl_33 + ", " + y_al_33_dl + "  " + 
				x_dl_33 + ", " + y_gm_33_dl + "  " + 
				x_ml_34 + ", " + y_gm_34_ml;
			document.getElementById("polygon_inter_34_33_l").setAttribute("points", string);
		// Attachmentniveau inter_34_33 lingual zeichnen
			var string = 
				x_ml_34 + ", " + y_al_34_ml + "  " + 
				x_dl_33 + ", " + y_al_33_dl;
			document.getElementById("polyline_al_inter_34_33_l").setAttribute("points", string);
		// Margo Gingivae inter_34_33 lingual zeichnen
			var string =
				x_ml_34 + ", " + y_gm_34_ml + "  " + 
				x_dl_33 + ", " + y_gm_33_dl;
			document.getElementById("polyline_gm_inter_34_33_l").setAttribute("points", string);
		}
        if (tooth_35 == 1 && tooth_34 == 1) {

            pd_35_mb = document.forms[0]["pd_35_mb"].value;
			gm_35_mb = document.forms[0]["gm_35_mb"].value;
			
			pd_35_ml = document.forms[0]["pd_35_ml"].value;
			gm_35_ml = document.forms[0]["gm_35_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 45 (bukkal) in der Bitmap
			var x_mb_35 = 845;							// mesial 45
			
		// Set der horizontalen Koordinaten von Zahn 45 (lingual) in der Bitmap
			var x_ml_35 = 845;							// mesial 45
			
		// Set der vertikalen Koordinaten von Zahn 45 (bukkal) aus dem Formular
			var y_gm_35_mb = gm_UK_b - 6.05 * gm_35_mb;	// Margo Gingivae mesiobukkal 45
			var y_pd_35_mb = 6.05 * pd_35_mb;			// Sondierungstiefe mesiobukkal 45
			
		// Set der vertikalen Koordinaten von Zahn 45 (lingual) aus dem Formular
			var y_gm_35_ml = gm_UK_l + 6.05 * gm_35_ml;	// Margo Gingivae mesiolingual 45
			var y_pd_35_ml = 6.05 * pd_35_ml;			// Sondierungstiefe mesiolingual 45
			
		// Berechnung des Attachmentniveaus 45 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_35_mb = y_gm_35_mb + y_pd_35_mb;	// Attachmentniveau mesiobukkal 45
			
		// Berechnung des Attachmentniveaus 45 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_35_ml = y_gm_35_ml - y_pd_35_ml;	// Attachmentniveau mesiolingual 45

		// Parodontaltasche inter_35_34 bukkal zeichnen
			var string = 
				x_mb_35 + ", " + y_al_35_mb + "  " + 
				x_db_34 + ", " + y_al_34_db + "  " + 
				x_db_34 + ", " + y_gm_34_db + "  " + 
				x_mb_35 + ", " + y_gm_35_mb;
			document.getElementById("polygon_inter_35_34_b").setAttribute("points", string);
		// Attachmentniveau inter_35_34 bukkal zeichnen
			var string = 
				x_mb_35 + ", " + y_al_35_mb + "  " + 
				x_db_34 + ", " + y_al_34_db;
			document.getElementById("polyline_al_inter_35_34_b").setAttribute("points", string);
		// Margo Gingivae inter_35_34 bukkal zeichnen
			var string =
				x_mb_35 + ", " + y_gm_35_mb + "  " + 
				x_db_34 + ", " + y_gm_34_db;
			document.getElementById("polyline_gm_inter_35_34_b").setAttribute("points", string);

        // Parodontaltasche inter_35_34 lingual zeichnen
			var string = 
				x_ml_35 + ", " + y_al_35_ml + "  " + 
				x_dl_34 + ", " + y_al_34_dl + "  " + 
				x_dl_34 + ", " + y_gm_34_dl + "  " + 
				x_ml_35 + ", " + y_gm_35_ml;
			document.getElementById("polygon_inter_35_34_l").setAttribute("points", string);
		// Attachmentniveau inter_35_34 lingual zeichnen
			var string = 
				x_ml_35 + ", " + y_al_35_ml + "  " + 
				x_dl_34 + ", " + y_al_34_dl;
			document.getElementById("polyline_al_inter_35_34_l").setAttribute("points", string);
		// Margo Gingivae inter_35_34 lingual zeichnen
			var string =
				x_ml_35 + ", " + y_gm_35_ml + "  " + 
				x_dl_34 + ", " + y_gm_34_dl;
			document.getElementById("polyline_gm_inter_35_34_l").setAttribute("points", string);
		}
	}