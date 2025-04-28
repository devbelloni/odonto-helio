	// Definition der Variablen für das Formular
		var tooth_32 = 1;
		var Implantat_32 = 0;
		var bop_32_db = 0;
		var bop_32_b = 0;
		var bop_32_mb = 0;
		var pi_32_db = 0;
		var pi_32_b = 0;
		var pi_32_mb = 0;
		var bop_32_dl = 0;
		var bop_32_l = 0;
		var bop_32_ml = 0;
		var pi_32_dl = 0;
		var pi_32_l = 0;
		var pi_32_ml = 0;
		var gm_32_db = 0;
		var gm_32_b = 0;
		var gm_32_mb = 0;
		var pd_32_db = 0;
		var pd_32_b = 0;
		var pd_32_mb = 0;
		var gm_32_dl = 0;
		var gm_32_l = 0;
		var gm_32_ml = 0;
		var pd_32_dl = 0;
		var pd_32_l = 0;
		var pd_32_ml = 0;

	function clear_data_32() {
        if (tooth_32 == 1) {
			gm_32_db = 0;
			gm_32_b = 0;
			gm_32_mb = 0;
			pd_32_db = 0;
			pd_32_b = 0;
			pd_32_mb = 0;
	
				document.getElementById('gm_32_db_txt').value = 0;
				document.getElementById('gm_32_b_txt').value = 0;
				document.getElementById('gm_32_mb_txt').value = 0;
				
				document.getElementById('pd_32_db_txt').value = 0;
				document.getElementById('pd_32_b_txt').value = 0;
				document.getElementById('pd_32_mb_txt').value = 0;
			
				document.forms[0]["pd_32_db"].style.color = 'black'
				document.forms[0]["pd_32_b"].style.color = 'black'
				document.forms[0]["pd_32_mb"].style.color = 'black'
			
			gm_32_dl = 0;
			gm_32_l = 0;
			gm_32_ml = 0;
			pd_32_dl = 0;
			pd_32_l = 0;
			pd_32_ml = 0;

				document.getElementById('gm_32_dl_txt').value = 0;
				document.getElementById('gm_32_l_txt').value = 0;
				document.getElementById('gm_32_ml_txt').value = 0;
				
				document.getElementById('pd_32_dl_txt').value = 0;
				document.getElementById('pd_32_l_txt').value = 0;
				document.getElementById('pd_32_ml_txt').value = 0;

				document.forms[0]["pd_32_dl"].style.color = 'black'
				document.forms[0]["pd_32_l"].style.color = 'black'
				document.forms[0]["pd_32_ml"].style.color = 'black'
			
			change_probing_32();
			
			mobility_32 = 0;

				document.getElementById('mobility_32_txt').value = "0";

			note_32 = "";

				document.getElementById('note_32_txt').value = "";
	
			bop_32_db = 0;
			bop_32_b = 0;
			bop_32_mb = 0;
					
			bop_32_dl = 0;
			bop_32_l = 0;
			bop_32_ml = 0;
					
				document.getElementById('bop_32_db_rectangle').style.display = 'none';
				document.getElementById('bop_32_b_rectangle').style.display = 'none';
				document.getElementById('bop_32_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_32_dl_rectangle').style.display = 'none';
				document.getElementById('bop_32_l_rectangle').style.display = 'none';
				document.getElementById('bop_32_ml_rectangle').style.display = 'none';
				
			pi_32_db = 0;
			pi_32_b = 0;
			pi_32_mb = 0;
					
			pi_32_dl = 0;
			pi_32_l = 0;
			pi_32_ml = 0;

				document.getElementById('pi_32_db_rectangle').style.display = 'none';
				document.getElementById('pi_32_b_rectangle').style.display = 'none';
				document.getElementById('pi_32_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_32_dl_rectangle').style.display = 'none';
				document.getElementById('pi_32_l_rectangle').style.display = 'none';
				document.getElementById('pi_32_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_32() {
		if (tooth_32 === 1) {
			tooth_32 = 0;
			document.getElementById('tooth_line_32_b').style.display = 'block';
			document.getElementById('tooth_line_32_l').style.display = 'block';
			
			document.getElementById('mobility_32_txt').style.display = 'none';
			
			document.getElementById('implantat_32_btn').style.display = 'none';
			document.getElementById('implantat_32_tab').style.display = 'none';
			document.getElementById('implantat_32_b_image').style.display = 'none';
			document.getElementById('implantat_32_l_image').style.display = 'none';
			
			document.getElementById('gm_32_db_txt').style.display = 'none';
			document.getElementById('gm_32_b_txt').style.display = 'none';
			document.getElementById('gm_32_mb_txt').style.display = 'none';
			
			document.getElementById('pd_32_db_txt').style.display = 'none';
			document.getElementById('pd_32_b_txt').style.display = 'none';
			document.getElementById('pd_32_mb_txt').style.display = 'none';
			
			document.getElementById('gm_32_dl_txt').style.display = 'none';
			document.getElementById('gm_32_l_txt').style.display = 'none';
			document.getElementById('gm_32_ml_txt').style.display = 'none';
			
			document.getElementById('pd_32_dl_txt').style.display = 'none';
			document.getElementById('pd_32_l_txt').style.display = 'none';
			document.getElementById('pd_32_ml_txt').style.display = 'none';
			
			document.getElementById('bop_32_db_rectangle').style.display = 'none';
			document.getElementById('bop_32_b_rectangle').style.display = 'none';
			document.getElementById('bop_32_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_32_dl_rectangle').style.display = 'none';
			document.getElementById('bop_32_l_rectangle').style.display = 'none';
			document.getElementById('bop_32_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_32_db_btn').style.display = 'none';
			document.getElementById('bop_32_b_btn').style.display = 'none';
			document.getElementById('bop_32_mb_btn').style.display = 'none';
			
			document.getElementById('bop_32_dl_btn').style.display = 'none';
			document.getElementById('bop_32_l_btn').style.display = 'none';
			document.getElementById('bop_32_ml_btn').style.display = 'none';
			
			document.getElementById('pi_32_db_rectangle').style.display = 'none';
			document.getElementById('pi_32_b_rectangle').style.display = 'none';
			document.getElementById('pi_32_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_32_dl_rectangle').style.display = 'none';
			document.getElementById('pi_32_l_rectangle').style.display = 'none';
			document.getElementById('pi_32_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_32_db_btn').style.display = 'none';
			document.getElementById('pi_32_b_btn').style.display = 'none';
			document.getElementById('pi_32_mb_btn').style.display = 'none';
			
			document.getElementById('pi_32_dl_btn').style.display = 'none';
			document.getElementById('pi_32_l_btn').style.display = 'none';
			document.getElementById('pi_32_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_32_b').style.display = 'none';
			document.getElementById('polyline_al_32_b').style.display = 'none';
			document.getElementById('polyline_gm_32_b').style.display = 'none';
			
			document.getElementById('polygon_32_l').style.display = 'none';
			document.getElementById('polyline_al_32_l').style.display = 'none';
			document.getElementById('polyline_gm_32_l').style.display = 'none';
			
			document.getElementById('polygon_inter_33_32_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_33_32_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_33_32_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_33_32_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_33_32_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_33_32_l').style.display = 'none';            
            
			document.getElementById('polygon_inter_32_31_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_32_31_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_32_31_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_32_31_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_32_31_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_32_31_l').style.display = 'none';            
			
			document.getElementById('note_32_txt').style.display = 'none';
		}
		else if (Implantat_32 !== 1) {
			tooth_32 = 1;
			document.getElementById('tooth_line_32_b').style.display = 'none';
			document.getElementById('tooth_line_32_l').style.display = 'none';

			document.getElementById('mobility_32_txt').style.display = 'block';

			document.getElementById('implantat_32_btn').style.display = 'block';

			document.getElementById('gm_32_db_txt').style.display = 'block';
			document.getElementById('gm_32_b_txt').style.display = 'block';
			document.getElementById('gm_32_mb_txt').style.display = 'block';
			
			document.getElementById('pd_32_db_txt').style.display = 'block';
			document.getElementById('pd_32_b_txt').style.display = 'block';
			document.getElementById('pd_32_mb_txt').style.display = 'block';
			
			document.getElementById('gm_32_dl_txt').style.display = 'block';
			document.getElementById('gm_32_l_txt').style.display = 'block';
			document.getElementById('gm_32_ml_txt').style.display = 'block';
			
			document.getElementById('pd_32_dl_txt').style.display = 'block';
			document.getElementById('pd_32_l_txt').style.display = 'block';
			document.getElementById('pd_32_ml_txt').style.display = 'block';
			
			document.getElementById('note_32_txt').style.display = 'block';

			document.getElementById('polygon_32_b').style.display = 'block';
			document.getElementById('polyline_al_32_b').style.display = 'block';
			document.getElementById('polyline_gm_32_b').style.display = 'block';
			
			document.getElementById('polygon_32_l').style.display = 'block';
			document.getElementById('polyline_al_32_l').style.display = 'block';
			document.getElementById('polyline_gm_32_l').style.display = 'block';

            if (tooth_33 == 1 && tooth_32 == 1) {
				document.getElementById('polygon_inter_33_32_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_33_32_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_33_32_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_33_32_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_33_32_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_33_32_l').style.display = 'block';            
            }
            
            if (tooth_32 == 1 && tooth_31 == 1) {
				document.getElementById('polygon_inter_32_31_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_32_31_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_32_31_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_32_31_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_32_31_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_32_31_l').style.display = 'block';            
            }
            
			document.getElementById('bop_32_db_btn').style.display = 'block';
			document.getElementById('bop_32_b_btn').style.display = 'block';
			document.getElementById('bop_32_mb_btn').style.display = 'block';

			document.getElementById('bop_32_dl_btn').style.display = 'block';
			document.getElementById('bop_32_l_btn').style.display = 'block';
			document.getElementById('bop_32_ml_btn').style.display = 'block';
			
			if (bop_32_db == 1) {
				document.getElementById('bop_32_db_rectangle').style.display = 'block';
			}
			if (bop_32_b == 1) {
				document.getElementById('bop_32_b_rectangle').style.display = 'block';
			}
			if (bop_32_mb == 1) {
				document.getElementById('bop_32_mb_rectangle').style.display = 'block';
			}
			if (bop_32_dl == 1) {
				document.getElementById('bop_32_dl_rectangle').style.display = 'block';
			}
			if (bop_32_l == 1) {
				document.getElementById('bop_32_l_rectangle').style.display = 'block';
			}
			if (bop_32_ml == 1) {
				document.getElementById('bop_32_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_32_db_btn').style.display = 'block';
			document.getElementById('pi_32_b_btn').style.display = 'block';
			document.getElementById('pi_32_mb_btn').style.display = 'block';

			document.getElementById('pi_32_dl_btn').style.display = 'block';
			document.getElementById('pi_32_l_btn').style.display = 'block';
			document.getElementById('pi_32_ml_btn').style.display = 'block';
			
			if (pi_32_db == 1) {
				document.getElementById('pi_32_db_rectangle').style.display = 'block';
			}
			if (pi_32_b == 1) {
				document.getElementById('pi_32_b_rectangle').style.display = 'block';
			}
			if (pi_32_mb == 1) {
				document.getElementById('pi_32_mb_rectangle').style.display = 'block';
			}
			if (pi_32_dl == 1) {
				document.getElementById('pi_32_dl_rectangle').style.display = 'block';
			}
			if (pi_32_l == 1) {
				document.getElementById('pi_32_l_rectangle').style.display = 'block';
			}
			if (pi_32_ml == 1) {
				document.getElementById('pi_32_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_32 == 1) {
			tooth_32 = 1;
			document.getElementById('tooth_line_32_b').style.display = 'none';
			document.getElementById('tooth_line_32_l').style.display = 'none';

			document.getElementById('mobility_32_txt').style.display = 'block';
			
			document.getElementById('note_32_txt').style.display = 'block';

			document.getElementById('implantat_32_btn').style.display = 'block';
			document.getElementById('implantat_32_tab').style.display = 'block';
			document.getElementById('implantat_32_b_image').style.display = 'block';
			document.getElementById('implantat_32_l_image').style.display = 'block';

			document.getElementById('gm_32_db_txt').style.display = 'block';
			document.getElementById('gm_32_b_txt').style.display = 'block';
			document.getElementById('gm_32_mb_txt').style.display = 'block';
			
			document.getElementById('pd_32_db_txt').style.display = 'block';
			document.getElementById('pd_32_b_txt').style.display = 'block';
			document.getElementById('pd_32_mb_txt').style.display = 'block';
			
			document.getElementById('gm_32_dl_txt').style.display = 'block';
			document.getElementById('gm_32_l_txt').style.display = 'block';
			document.getElementById('gm_32_ml_txt').style.display = 'block';
			
			document.getElementById('pd_32_dl_txt').style.display = 'block';
			document.getElementById('pd_32_l_txt').style.display = 'block';
			document.getElementById('pd_32_ml_txt').style.display = 'block';

			document.getElementById('polygon_32_b').style.display = 'block';
			document.getElementById('polyline_al_32_b').style.display = 'block';
			document.getElementById('polyline_gm_32_b').style.display = 'block';
			
			document.getElementById('polygon_32_l').style.display = 'block';
			document.getElementById('polyline_al_32_l').style.display = 'block';
			document.getElementById('polyline_gm_32_l').style.display = 'block';

            if (tooth_33 == 1 && tooth_32 == 1) {
				document.getElementById('polygon_inter_33_32_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_33_32_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_33_32_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_33_32_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_33_32_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_33_32_l').style.display = 'block';            
            }
            
            if (tooth_32 == 1 && tooth_31 == 1) {
				document.getElementById('polygon_inter_32_31_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_32_31_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_32_31_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_32_31_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_32_31_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_32_31_l').style.display = 'block';            
            }

			document.getElementById('bop_32_db_btn').style.display = 'block';
			document.getElementById('bop_32_b_btn').style.display = 'block';
			document.getElementById('bop_32_mb_btn').style.display = 'block';

			document.getElementById('bop_32_dl_btn').style.display = 'block';
			document.getElementById('bop_32_l_btn').style.display = 'block';
			document.getElementById('bop_32_ml_btn').style.display = 'block';
			
			document.getElementById('pi_32_db_btn').style.display = 'block';
			document.getElementById('pi_32_b_btn').style.display = 'block';
			document.getElementById('pi_32_mb_btn').style.display = 'block';

			document.getElementById('pi_32_dl_btn').style.display = 'block';
			document.getElementById('pi_32_l_btn').style.display = 'block';
			document.getElementById('pi_32_ml_btn').style.display = 'block';
			
			if (bop_32_db == 1) {
				document.getElementById('bop_32_db_rectangle').style.display = 'block';
			}
			if (bop_32_b == 1) {
				document.getElementById('bop_32_b_rectangle').style.display = 'block';
			}
			if (bop_32_mb == 1) {
				document.getElementById('bop_32_mb_rectangle').style.display = 'block';
			}
			if (bop_32_dl == 1) {
				document.getElementById('bop_32_dl_rectangle').style.display = 'block';
			}
			if (bop_32_l == 1) {
				document.getElementById('bop_32_l_rectangle').style.display = 'block';
			}
			if (bop_32_ml == 1) {
				document.getElementById('bop_32_ml_rectangle').style.display = 'block';
			}
			
			if (pi_32_db == 1) {
				document.getElementById('pi_32_db_rectangle').style.display = 'block';
			}
			if (pi_32_b == 1) {
				document.getElementById('pi_32_b_rectangle').style.display = 'block';
			}
			if (pi_32_mb == 1) {
				document.getElementById('pi_32_mb_rectangle').style.display = 'block';
			}
			if (pi_32_dl == 1) {
				document.getElementById('pi_32_dl_rectangle').style.display = 'block';
			}
			if (pi_32_l == 1) {
				document.getElementById('pi_32_l_rectangle').style.display = 'block';
			}
			if (pi_32_ml == 1) {
				document.getElementById('pi_32_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_32();
	}

	function toggle_implant_32() {
		if (Implantat_32 == 0) {
			Implantat_32 = 1;
			
			document.getElementById('implantat_32_b_image').style.display = 'block';
			document.getElementById('implantat_32_l_image').style.display = 'block';
			document.getElementById('implantat_32_tab').style.display = 'block';
		}
		else {
			Implantat_32 = 0;
			
			document.getElementById('implantat_32_b_image').style.display = 'none';
			document.getElementById('implantat_32_l_image').style.display = 'none';
			document.getElementById('implantat_32_tab').style.display = 'none';
		}
	}

	function toggle_bop_32_db() {
		if (bop_32_db == 0) {
			bop_32_db = 1;
			document.getElementById('bop_32_db_rectangle').style.display = 'block';
		}
		else {
			bop_32_db = 0;
			document.getElementById('bop_32_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_32_b() {
		if (bop_32_b == 0) {
			bop_32_b = 1;
			document.getElementById('bop_32_b_rectangle').style.display = 'block';
		}
		else {
			bop_32_b = 0;
			document.getElementById('bop_32_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_32_mb() {
		if (bop_32_mb == 0) {
			bop_32_mb = 1;
			document.getElementById('bop_32_mb_rectangle').style.display = 'block';
		}
		else {
			bop_32_mb = 0;
			document.getElementById('bop_32_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_32_db() {
		if (pi_32_db == 0) {
			pi_32_db = 1;
			document.getElementById('pi_32_db_rectangle').style.display = 'block';
		}
		else {
			pi_32_db = 0;
			document.getElementById('pi_32_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_32_b() {
		if (pi_32_b == 0) {
			pi_32_b = 1;
			document.getElementById('pi_32_b_rectangle').style.display = 'block';
		}
		else {
			pi_32_b = 0;
			document.getElementById('pi_32_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_32_mb() {
		if (pi_32_mb == 0) {
			pi_32_mb = 1;
			document.getElementById('pi_32_mb_rectangle').style.display = 'block';
		}
		else {
			pi_32_mb = 0;
			document.getElementById('pi_32_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_32_dl() {
		if (bop_32_dl == 0) {
			bop_32_dl = 1;
			document.getElementById('bop_32_dl_rectangle').style.display = 'block';
		}
		else {
			bop_32_dl = 0;
			document.getElementById('bop_32_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_32_l() {
		if (bop_32_l == 0) {
			bop_32_l = 1;
			document.getElementById('bop_32_l_rectangle').style.display = 'block';
		}
		else {
			bop_32_l = 0;
			document.getElementById('bop_32_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_32_ml() {
		if (bop_32_ml == 0) {
			bop_32_ml = 1;
			document.getElementById('bop_32_ml_rectangle').style.display = 'block';
		}
		else {
			bop_32_ml = 0;
			document.getElementById('bop_32_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_32_dl() {
		if (pi_32_dl == 0) {
			pi_32_dl = 1;
			document.getElementById('pi_32_dl_rectangle').style.display = 'block';
		}
		else {
			pi_32_dl = 0;
			document.getElementById('pi_32_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_32_l() {
		if (pi_32_l == 0) {
			pi_32_l = 1;
			document.getElementById('pi_32_l_rectangle').style.display = 'block';
		}
		else {
			pi_32_l = 0;
			document.getElementById('pi_32_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_32_ml() {
		if (pi_32_ml == 0) {
			pi_32_ml = 1;
			document.getElementById('pi_32_ml_rectangle').style.display = 'block';
		}
		else {
			pi_32_ml = 0;
			document.getElementById('pi_32_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_32() {
		if (tooth_32 == 1) {
			
		// Variablen aus dem Formular
			pd_32_db = document.forms[0]["pd_32_db"].value;
			pd_32_b = document.forms[0]["pd_32_b"].value;
			pd_32_mb = document.forms[0]["pd_32_mb"].value;

			if (document.forms[0]["pd_32_dl"].value > 3) {document.forms[0]["pd_32_dl"].style.color = 'red';} else {document.forms[0]["pd_32_dl"].style.color = 'black'};
			if (document.forms[0]["pd_32_l"].value > 3) {document.forms[0]["pd_32_l"].style.color = 'red';} else {document.forms[0]["pd_32_l"].style.color = 'black'};
			if (document.forms[0]["pd_32_ml"].value > 3) {document.forms[0]["pd_32_ml"].style.color = 'red';} else {document.forms[0]["pd_32_ml"].style.color = 'black'};
			
			gm_32_db = document.forms[0]["gm_32_db"].value;
			gm_32_b = document.forms[0]["gm_32_b"].value;
			gm_32_mb = document.forms[0]["gm_32_mb"].value;
			
			pd_32_dl = document.forms[0]["pd_32_dl"].value;
			pd_32_l = document.forms[0]["pd_32_l"].value;
			pd_32_ml = document.forms[0]["pd_32_ml"].value;

			if (document.forms[0]["pd_32_db"].value > 3) {document.forms[0]["pd_32_db"].style.color = 'red';} else {document.forms[0]["pd_32_db"].style.color = 'black'};
			if (document.forms[0]["pd_32_b"].value > 3) {document.forms[0]["pd_32_b"].style.color = 'red';} else {document.forms[0]["pd_32_b"].style.color = 'black'};
			if (document.forms[0]["pd_32_mb"].value > 3) {document.forms[0]["pd_32_mb"].style.color = 'red';} else {document.forms[0]["pd_32_mb"].style.color = 'black'};
			
			gm_32_dl = document.forms[0]["gm_32_dl"].value;
			gm_32_l = document.forms[0]["gm_32_l"].value;
			gm_32_ml = document.forms[0]["gm_32_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 32 (bukkal) in der Bitmap
			var x_db_32 = 748;							// distal 32
			var x_mb_32 = 728;							// mesial 32
			var x_b_32 = (x_db_32 + x_mb_32)/2;			// bukkal 32
			
		// Set der horizontalen Koordinaten von Zahn 32 (lingual) in der Bitmap
			var x_dl_32 = 751;							// distal 32
			var x_ml_32 = 733;							// mesial 32
			var x_l_32 = (x_dl_32 + x_ml_32)/2;			// lingual 32
			
		// Set der vertikalen Koordinaten von Zahn 32 (bukkal) aus dem Formular
			var y_gm_32_db = gm_UK_b - 6.05 * gm_32_db;	// Margo Gingivae distobukkal 32
			var y_gm_32_b = gm_UK_b - 6.05 * gm_32_b;	// Margo Gingivae bukkal 32
			var y_gm_32_mb = gm_UK_b - 6.05 * gm_32_mb;	// Margo Gingivae mesiobukkal 32
			var y_pd_32_db = 6.05 * pd_32_db;			// Sondierungstiefe distobukkal 32
			var y_pd_32_b = 6.05 * pd_32_b;				// Sondierungstiefe bukkal 32
			var y_pd_32_mb = 6.05 * pd_32_mb;			// Sondierungstiefe mesiobukkal 32
			
		// Set der vertikalen Koordinaten von Zahn 32 (lingual) aus dem Formular
			var y_gm_32_dl = gm_UK_l + 6.05 * gm_32_dl;	// Margo Gingivae distolingual 32
			var y_gm_32_l = gm_UK_l + 6.05 * gm_32_l;	// Margo Gingivae lingual 32
			var y_gm_32_ml = gm_UK_l + 6.05 * gm_32_ml;	// Margo Gingivae mesiolingual 32
			var y_pd_32_dl = 6.05 * pd_32_dl;			// Sondierungstiefe distolingual 32
			var y_pd_32_l = 6.05 * pd_32_l;				// Sondierungstiefe lingual 32
			var y_pd_32_ml = 6.05 * pd_32_ml;			// Sondierungstiefe mesiolingual 32
			
		// Berechnung des Attachmentniveaus 32 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_32_db = y_gm_32_db + y_pd_32_db;	// Attachmentniveau distobukkal 32
			var y_al_32_b = y_gm_32_b + y_pd_32_b;		// Attachmentniveau bukkal 32
			var y_al_32_mb = y_gm_32_mb + y_pd_32_mb;	// Attachmentniveau mesiobukkal 32
			
		// Berechnung des Attachmentniveaus 32 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_32_dl = y_gm_32_dl - y_pd_32_dl;	// Attachmentniveau distolingual 32
			var y_al_32_l = y_gm_32_l - y_pd_32_l;		// Attachmentniveau lingual 32
			var y_al_32_ml = y_gm_32_ml - y_pd_32_ml;	// Attachmentniveau mesiolingual 32

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[32].storeCoordinates(
				x_db_32, x_mb_32, x_dl_32, x_ml_32, x_b_32, x_l_32,
				y_gm_32_db, y_gm_32_b, y_gm_32_mb, y_pd_32_db, y_pd_32_b, y_pd_32_mb,
				y_gm_32_dl, y_gm_32_l, y_gm_32_ml, y_pd_32_dl, y_pd_32_l, y_pd_32_ml,
				y_al_32_db, y_al_32_b, y_al_32_mb, y_al_32_dl, y_al_32_l, y_al_32_ml
			);

		// Parodontaltasche 32 bukkal zeichnen
			var string = 
				x_db_32 + ", " + y_al_32_db + "  " + 
				x_b_32 + ", " + y_al_32_b + "  " + 
				x_mb_32 + ", " + y_al_32_mb + "  " + 
				x_mb_32 + ", " + y_gm_32_mb + "  " + 
				x_b_32 + ", " + y_gm_32_b + "  " + 
				x_db_32 + ", " + y_gm_32_db;
			document.getElementById("polygon_32_b").setAttribute("points", string);
		// Attachmentniveau 32 bukkal zeichnen
			var string = 
				x_db_32 + ", " + y_al_32_db + "  " + 
				x_b_32 + ", " + y_al_32_b + "  " + 
				x_mb_32 + ", " + y_al_32_mb;
			document.getElementById("polyline_al_32_b").setAttribute("points", string);
		// Margo Gingivae 32 bukkal zeichnen
			var string =
				x_db_32 + ", " + y_gm_32_db + "  " + 
				x_b_32 + ", " + y_gm_32_b + "  " + 
				x_mb_32 + ", " + y_gm_32_mb;
			document.getElementById("polyline_gm_32_b").setAttribute("points", string);

		// Parodontaltasche 32 lingual zeichnen
			var string = 
				x_dl_32 + ", " + y_al_32_dl + "  " + 
				x_l_32 + ", " + y_al_32_l + "  " + 
				x_ml_32 + ", " + y_al_32_ml + "  " + 
				x_ml_32 + ", " + y_gm_32_ml + "  " + 
				x_l_32 + ", " + y_gm_32_l + "  " + 
				x_dl_32 + ", " + y_gm_32_dl;
			document.getElementById("polygon_32_l").setAttribute("points", string);
		// Attachmentniveau 32 lingual zeichnen
			var string = 
				x_dl_32 + ", " + y_al_32_dl + "  " + 
				x_l_32 + ", " + y_al_32_l + "  " + 
				x_ml_32 + ", " + y_al_32_ml;
			document.getElementById("polyline_al_32_l").setAttribute("points", string);
		// Margo Gingivae 32 lingual zeichnen
			var string =
				x_dl_32 + ", " + y_gm_32_dl + "  " + 
				x_l_32 + ", " + y_gm_32_l + "  " + 
				x_ml_32 + ", " + y_gm_32_ml;
			document.getElementById("polyline_gm_32_l").setAttribute("points", string);
		}
        if (tooth_32 == 1 && tooth_31 == 1) {

            pd_31_db = document.forms[0]["pd_31_db"].value;
			gm_31_db = document.forms[0]["gm_31_db"].value;
			
			pd_31_dl = document.forms[0]["pd_31_dl"].value;
			gm_31_dl = document.forms[0]["gm_31_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 31 (bukkal) in der Bitmap
			var x_db_31 = 714;							// distal 31
			
		// Set der horizontalen Koordinaten von Zahn 31 (lingual) in der Bitmap
			var x_dl_31 = 715;							// distal 31
			
		// Set der vertikalen Koordinaten von Zahn 31 (bukkal) aus dem Formular
			var y_gm_31_db = gm_UK_b - 6.05 * gm_31_db;	// Margo Gingivae distobukkal 31
			var y_pd_31_db = 6.05 * pd_31_db;			// Sondierungstiefe distobukkal 31
			
		// Set der vertikalen Koordinaten von Zahn 31 (lingual) aus dem Formular
			var y_gm_31_dl = gm_UK_l + 6.05 * gm_31_dl;	// Margo Gingivae distolingual 31
			var y_pd_31_dl = 6.05 * pd_31_dl;			// Sondierungstiefe distolingual 31
			
		// Berechnung des Attachmentniveaus 31 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_31_db = y_gm_31_db + y_pd_31_db;	// Attachmentniveau distobukkal 31
			
		// Berechnung des Attachmentniveaus 31 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_31_dl = y_gm_31_dl - y_pd_31_dl;	// Attachmentniveau distolingual 31

		// Parodontaltasche inter_32_31 bukkal zeichnen
			var string = 
				x_mb_32 + ", " + y_al_32_mb + "  " + 
				x_db_31 + ", " + y_al_31_db + "  " + 
				x_db_31 + ", " + y_gm_31_db + "  " + 
				x_mb_32 + ", " + y_gm_32_mb;
			document.getElementById("polygon_inter_32_31_b").setAttribute("points", string);
		// Attachmentniveau inter_32_31 bukkal zeichnen
			var string = 
				x_mb_32 + ", " + y_al_32_mb + "  " + 
				x_db_31 + ", " + y_al_31_db;
			document.getElementById("polyline_al_inter_32_31_b").setAttribute("points", string);
		// Margo Gingivae inter_32_31 bukkal zeichnen
			var string =
				x_mb_32 + ", " + y_gm_32_mb + "  " + 
				x_db_31 + ", " + y_gm_31_db;
			document.getElementById("polyline_gm_inter_32_31_b").setAttribute("points", string);

        // Parodontaltasche inter_32_31 lingual zeichnen
			var string = 
				x_ml_32 + ", " + y_al_32_ml + "  " + 
				x_dl_31 + ", " + y_al_31_dl + "  " + 
				x_dl_31 + ", " + y_gm_31_dl + "  " + 
				x_ml_32 + ", " + y_gm_32_ml;
			document.getElementById("polygon_inter_32_31_l").setAttribute("points", string);
		// Attachmentniveau inter_32_31 lingual zeichnen
			var string = 
				x_ml_32 + ", " + y_al_32_ml + "  " + 
				x_dl_31 + ", " + y_al_31_dl;
			document.getElementById("polyline_al_inter_32_31_l").setAttribute("points", string);
		// Margo Gingivae inter_32_31 lingual zeichnen
			var string =
				x_ml_32 + ", " + y_gm_32_ml + "  " + 
				x_dl_31 + ", " + y_gm_31_dl;
			document.getElementById("polyline_gm_inter_32_31_l").setAttribute("points", string);
		}
        if (tooth_33 == 1 && tooth_32 == 1) {

            pd_33_mb = document.forms[0]["pd_33_mb"].value;
			gm_33_mb = document.forms[0]["gm_33_mb"].value;
			
			pd_33_ml = document.forms[0]["pd_33_ml"].value;
			gm_33_ml = document.forms[0]["gm_33_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 33 (bukkal) in der Bitmap
			var x_mb_33 = 766;							// mesial 33
			
		// Set der horizontalen Koordinaten von Zahn 33 (lingual) in der Bitmap
			var x_ml_33 = 767;							// mesial 33
			
		// Set der vertikalen Koordinaten von Zahn 33 (bukkal) aus dem Formular
			var y_gm_33_mb = gm_UK_b - 6.05 * gm_33_mb;	// Margo Gingivae mesiobukkal 33
			var y_pd_33_mb = 6.05 * pd_33_mb;			// Sondierungstiefe mesiobukkal 33
			
		// Set der vertikalen Koordinaten von Zahn 33 (lingual) aus dem Formular
			var y_gm_33_ml = gm_UK_l + 6.05 * gm_33_ml;	// Margo Gingivae mesiolingual 33
			var y_pd_33_ml = 6.05 * pd_33_ml;			// Sondierungstiefe mesiolingual 33
			
		// Berechnung des Attachmentniveaus 33 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_33_mb = y_gm_33_mb + y_pd_33_mb;	// Attachmentniveau mesiobukkal 33
			
		// Berechnung des Attachmentniveaus 33 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_33_ml = y_gm_33_ml - y_pd_33_ml;	// Attachmentniveau mesiolingual 33

		// Parodontaltasche inter_33_32 bukkal zeichnen
			var string = 
				x_mb_33 + ", " + y_al_33_mb + "  " + 
				x_db_32 + ", " + y_al_32_db + "  " + 
				x_db_32 + ", " + y_gm_32_db + "  " + 
				x_mb_33 + ", " + y_gm_33_mb;
			document.getElementById("polygon_inter_33_32_b").setAttribute("points", string);
		// Attachmentniveau inter_33_32 bukkal zeichnen
			var string = 
				x_mb_33 + ", " + y_al_33_mb + "  " + 
				x_db_32 + ", " + y_al_32_db;
			document.getElementById("polyline_al_inter_33_32_b").setAttribute("points", string);
		// Margo Gingivae inter_33_32 bukkal zeichnen
			var string =
				x_mb_33 + ", " + y_gm_33_mb + "  " + 
				x_db_32 + ", " + y_gm_32_db;
			document.getElementById("polyline_gm_inter_33_32_b").setAttribute("points", string);

        // Parodontaltasche inter_33_32 lingual zeichnen
			var string = 
				x_ml_33 + ", " + y_al_33_ml + "  " + 
				x_dl_32 + ", " + y_al_32_dl + "  " + 
				x_dl_32 + ", " + y_gm_32_dl + "  " + 
				x_ml_33 + ", " + y_gm_33_ml;
			document.getElementById("polygon_inter_33_32_l").setAttribute("points", string);
		// Attachmentniveau inter_33_32 lingual zeichnen
			var string = 
				x_ml_33 + ", " + y_al_33_ml + "  " + 
				x_dl_32 + ", " + y_al_32_dl;
			document.getElementById("polyline_al_inter_33_32_l").setAttribute("points", string);
		// Margo Gingivae inter_33_32 lingual zeichnen
			var string =
				x_ml_33 + ", " + y_gm_33_ml + "  " + 
				x_dl_32 + ", " + y_gm_32_dl;
			document.getElementById("polyline_gm_inter_33_32_l").setAttribute("points", string);
		}
	}