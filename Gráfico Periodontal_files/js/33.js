	// Definition der Variablen für das Formular
		var tooth_33 = 1;
		var Implantat_33 = 0;
		var bop_33_db = 0;
		var bop_33_b = 0;
		var bop_33_mb = 0;
		var pi_33_db = 0;
		var pi_33_b = 0;
		var pi_33_mb = 0;
		var bop_33_dl = 0;
		var bop_33_l = 0;
		var bop_33_ml = 0;
		var pi_33_dl = 0;
		var pi_33_l = 0;
		var pi_33_ml = 0;
		var gm_33_db = 0;
		var gm_33_b = 0;
		var gm_33_mb = 0;
		var pd_33_db = 0;
		var pd_33_b = 0;
		var pd_33_mb = 0;
		var gm_33_dl = 0;
		var gm_33_l = 0;
		var gm_33_ml = 0;
		var pd_33_dl = 0;
		var pd_33_l = 0;
		var pd_33_ml = 0;

	function clear_data_33() {
        if (tooth_33 == 1) {
			gm_33_db = 0;
			gm_33_b = 0;
			gm_33_mb = 0;
			pd_33_db = 0;
			pd_33_b = 0;
			pd_33_mb = 0;
	
				document.getElementById('gm_33_db_txt').value = 0;
				document.getElementById('gm_33_b_txt').value = 0;
				document.getElementById('gm_33_mb_txt').value = 0;
				
				document.getElementById('pd_33_db_txt').value = 0;
				document.getElementById('pd_33_b_txt').value = 0;
				document.getElementById('pd_33_mb_txt').value = 0;
			
				document.forms[0]["pd_33_db"].style.color = 'black'
				document.forms[0]["pd_33_b"].style.color = 'black'
				document.forms[0]["pd_33_mb"].style.color = 'black'
			
			gm_33_dl = 0;
			gm_33_l = 0;
			gm_33_ml = 0;
			pd_33_dl = 0;
			pd_33_l = 0;
			pd_33_ml = 0;

				document.getElementById('gm_33_dl_txt').value = 0;
				document.getElementById('gm_33_l_txt').value = 0;
				document.getElementById('gm_33_ml_txt').value = 0;
				
				document.getElementById('pd_33_dl_txt').value = 0;
				document.getElementById('pd_33_l_txt').value = 0;
				document.getElementById('pd_33_ml_txt').value = 0;

				document.forms[0]["pd_33_dl"].style.color = 'black'
				document.forms[0]["pd_33_l"].style.color = 'black'
				document.forms[0]["pd_33_ml"].style.color = 'black'
			
			change_probing_33();
			
			mobility_33 = 0;

				document.getElementById('mobility_33_txt').value = "0";

			note_33 = "";

				document.getElementById('note_33_txt').value = "";
	
			bop_33_db = 0;
			bop_33_b = 0;
			bop_33_mb = 0;
					
			bop_33_dl = 0;
			bop_33_l = 0;
			bop_33_ml = 0;
					
				document.getElementById('bop_33_db_rectangle').style.display = 'none';
				document.getElementById('bop_33_b_rectangle').style.display = 'none';
				document.getElementById('bop_33_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_33_dl_rectangle').style.display = 'none';
				document.getElementById('bop_33_l_rectangle').style.display = 'none';
				document.getElementById('bop_33_ml_rectangle').style.display = 'none';
				
			pi_33_db = 0;
			pi_33_b = 0;
			pi_33_mb = 0;
					
			pi_33_dl = 0;
			pi_33_l = 0;
			pi_33_ml = 0;

				document.getElementById('pi_33_db_rectangle').style.display = 'none';
				document.getElementById('pi_33_b_rectangle').style.display = 'none';
				document.getElementById('pi_33_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_33_dl_rectangle').style.display = 'none';
				document.getElementById('pi_33_l_rectangle').style.display = 'none';
				document.getElementById('pi_33_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_33() {
		if (tooth_33 === 1) {
			tooth_33 = 0;
			document.getElementById('tooth_line_33_b').style.display = 'block';
			document.getElementById('tooth_line_33_l').style.display = 'block';
			
			document.getElementById('mobility_33_txt').style.display = 'none';
			
			document.getElementById('implantat_33_btn').style.display = 'none';
			document.getElementById('implantat_33_tab').style.display = 'none';
			document.getElementById('implantat_33_b_image').style.display = 'none';
			document.getElementById('implantat_33_l_image').style.display = 'none';
			
			document.getElementById('gm_33_db_txt').style.display = 'none';
			document.getElementById('gm_33_b_txt').style.display = 'none';
			document.getElementById('gm_33_mb_txt').style.display = 'none';
			
			document.getElementById('pd_33_db_txt').style.display = 'none';
			document.getElementById('pd_33_b_txt').style.display = 'none';
			document.getElementById('pd_33_mb_txt').style.display = 'none';
			
			document.getElementById('gm_33_dl_txt').style.display = 'none';
			document.getElementById('gm_33_l_txt').style.display = 'none';
			document.getElementById('gm_33_ml_txt').style.display = 'none';
			
			document.getElementById('pd_33_dl_txt').style.display = 'none';
			document.getElementById('pd_33_l_txt').style.display = 'none';
			document.getElementById('pd_33_ml_txt').style.display = 'none';
			
			document.getElementById('bop_33_db_rectangle').style.display = 'none';
			document.getElementById('bop_33_b_rectangle').style.display = 'none';
			document.getElementById('bop_33_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_33_dl_rectangle').style.display = 'none';
			document.getElementById('bop_33_l_rectangle').style.display = 'none';
			document.getElementById('bop_33_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_33_db_btn').style.display = 'none';
			document.getElementById('bop_33_b_btn').style.display = 'none';
			document.getElementById('bop_33_mb_btn').style.display = 'none';
			
			document.getElementById('bop_33_dl_btn').style.display = 'none';
			document.getElementById('bop_33_l_btn').style.display = 'none';
			document.getElementById('bop_33_ml_btn').style.display = 'none';
			
			document.getElementById('pi_33_db_rectangle').style.display = 'none';
			document.getElementById('pi_33_b_rectangle').style.display = 'none';
			document.getElementById('pi_33_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_33_dl_rectangle').style.display = 'none';
			document.getElementById('pi_33_l_rectangle').style.display = 'none';
			document.getElementById('pi_33_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_33_db_btn').style.display = 'none';
			document.getElementById('pi_33_b_btn').style.display = 'none';
			document.getElementById('pi_33_mb_btn').style.display = 'none';
			
			document.getElementById('pi_33_dl_btn').style.display = 'none';
			document.getElementById('pi_33_l_btn').style.display = 'none';
			document.getElementById('pi_33_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_33_b').style.display = 'none';
			document.getElementById('polyline_al_33_b').style.display = 'none';
			document.getElementById('polyline_gm_33_b').style.display = 'none';
			
			document.getElementById('polygon_33_l').style.display = 'none';
			document.getElementById('polyline_al_33_l').style.display = 'none';
			document.getElementById('polyline_gm_33_l').style.display = 'none';
			
			document.getElementById('polygon_inter_34_33_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_34_33_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_34_33_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_34_33_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_34_33_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_34_33_l').style.display = 'none';            
            
			document.getElementById('polygon_inter_33_32_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_33_32_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_33_32_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_33_32_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_33_32_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_33_32_l').style.display = 'none';            
			
			document.getElementById('note_33_txt').style.display = 'none';
		}
		else if (Implantat_33 !== 1) {
			tooth_33 = 1;
			document.getElementById('tooth_line_33_b').style.display = 'none';
			document.getElementById('tooth_line_33_l').style.display = 'none';

			document.getElementById('mobility_33_txt').style.display = 'block';

			document.getElementById('implantat_33_btn').style.display = 'block';

			document.getElementById('gm_33_db_txt').style.display = 'block';
			document.getElementById('gm_33_b_txt').style.display = 'block';
			document.getElementById('gm_33_mb_txt').style.display = 'block';
			
			document.getElementById('pd_33_db_txt').style.display = 'block';
			document.getElementById('pd_33_b_txt').style.display = 'block';
			document.getElementById('pd_33_mb_txt').style.display = 'block';
			
			document.getElementById('gm_33_dl_txt').style.display = 'block';
			document.getElementById('gm_33_l_txt').style.display = 'block';
			document.getElementById('gm_33_ml_txt').style.display = 'block';
			
			document.getElementById('pd_33_dl_txt').style.display = 'block';
			document.getElementById('pd_33_l_txt').style.display = 'block';
			document.getElementById('pd_33_ml_txt').style.display = 'block';
			
			document.getElementById('note_33_txt').style.display = 'block';

			document.getElementById('polygon_33_b').style.display = 'block';
			document.getElementById('polyline_al_33_b').style.display = 'block';
			document.getElementById('polyline_gm_33_b').style.display = 'block';
			
			document.getElementById('polygon_33_l').style.display = 'block';
			document.getElementById('polyline_al_33_l').style.display = 'block';
			document.getElementById('polyline_gm_33_l').style.display = 'block';

            if (tooth_34 == 1 && tooth_33 == 1) {
				document.getElementById('polygon_inter_34_33_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_34_33_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_34_33_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_34_33_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_34_33_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_34_33_l').style.display = 'block';            
            }
            
            if (tooth_33 == 1 && tooth_32 == 1) {
				document.getElementById('polygon_inter_33_32_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_33_32_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_33_32_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_33_32_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_33_32_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_33_32_l').style.display = 'block';            
            }

			document.getElementById('bop_33_db_btn').style.display = 'block';
			document.getElementById('bop_33_b_btn').style.display = 'block';
			document.getElementById('bop_33_mb_btn').style.display = 'block';

			document.getElementById('bop_33_dl_btn').style.display = 'block';
			document.getElementById('bop_33_l_btn').style.display = 'block';
			document.getElementById('bop_33_ml_btn').style.display = 'block';
			
			if (bop_33_db == 1) {
				document.getElementById('bop_33_db_rectangle').style.display = 'block';
			}
			if (bop_33_b == 1) {
				document.getElementById('bop_33_b_rectangle').style.display = 'block';
			}
			if (bop_33_mb == 1) {
				document.getElementById('bop_33_mb_rectangle').style.display = 'block';
			}
			if (bop_33_dl == 1) {
				document.getElementById('bop_33_dl_rectangle').style.display = 'block';
			}
			if (bop_33_l == 1) {
				document.getElementById('bop_33_l_rectangle').style.display = 'block';
			}
			if (bop_33_ml == 1) {
				document.getElementById('bop_33_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_33_db_btn').style.display = 'block';
			document.getElementById('pi_33_b_btn').style.display = 'block';
			document.getElementById('pi_33_mb_btn').style.display = 'block';

			document.getElementById('pi_33_dl_btn').style.display = 'block';
			document.getElementById('pi_33_l_btn').style.display = 'block';
			document.getElementById('pi_33_ml_btn').style.display = 'block';
			
			if (pi_33_db == 1) {
				document.getElementById('pi_33_db_rectangle').style.display = 'block';
			}
			if (pi_33_b == 1) {
				document.getElementById('pi_33_b_rectangle').style.display = 'block';
			}
			if (pi_33_mb == 1) {
				document.getElementById('pi_33_mb_rectangle').style.display = 'block';
			}
			if (pi_33_dl == 1) {
				document.getElementById('pi_33_dl_rectangle').style.display = 'block';
			}
			if (pi_33_l == 1) {
				document.getElementById('pi_33_l_rectangle').style.display = 'block';
			}
			if (pi_33_ml == 1) {
				document.getElementById('pi_33_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_33 == 1) {
			tooth_33 = 1;
			document.getElementById('tooth_line_33_b').style.display = 'none';
			document.getElementById('tooth_line_33_l').style.display = 'none';

			document.getElementById('mobility_33_txt').style.display = 'block';
			
			document.getElementById('note_33_txt').style.display = 'block';

			document.getElementById('implantat_33_btn').style.display = 'block';
			document.getElementById('implantat_33_tab').style.display = 'block';
			document.getElementById('implantat_33_b_image').style.display = 'block';
			document.getElementById('implantat_33_l_image').style.display = 'block';

			document.getElementById('gm_33_db_txt').style.display = 'block';
			document.getElementById('gm_33_b_txt').style.display = 'block';
			document.getElementById('gm_33_mb_txt').style.display = 'block';
			
			document.getElementById('pd_33_db_txt').style.display = 'block';
			document.getElementById('pd_33_b_txt').style.display = 'block';
			document.getElementById('pd_33_mb_txt').style.display = 'block';
			
			document.getElementById('gm_33_dl_txt').style.display = 'block';
			document.getElementById('gm_33_l_txt').style.display = 'block';
			document.getElementById('gm_33_ml_txt').style.display = 'block';
			
			document.getElementById('pd_33_dl_txt').style.display = 'block';
			document.getElementById('pd_33_l_txt').style.display = 'block';
			document.getElementById('pd_33_ml_txt').style.display = 'block';

			document.getElementById('polygon_33_b').style.display = 'block';
			document.getElementById('polyline_al_33_b').style.display = 'block';
			document.getElementById('polyline_gm_33_b').style.display = 'block';
			
			document.getElementById('polygon_33_l').style.display = 'block';
			document.getElementById('polyline_al_33_l').style.display = 'block';
			document.getElementById('polyline_gm_33_l').style.display = 'block';

            if (tooth_34 == 1 && tooth_33 == 1) {
				document.getElementById('polygon_inter_34_33_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_34_33_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_34_33_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_34_33_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_34_33_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_34_33_l').style.display = 'block';            
            }
            
            if (tooth_33 == 1 && tooth_32 == 1) {
				document.getElementById('polygon_inter_33_32_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_33_32_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_33_32_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_33_32_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_33_32_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_33_32_l').style.display = 'block';            
            }        

			document.getElementById('bop_33_db_btn').style.display = 'block';
			document.getElementById('bop_33_b_btn').style.display = 'block';
			document.getElementById('bop_33_mb_btn').style.display = 'block';

			document.getElementById('bop_33_dl_btn').style.display = 'block';
			document.getElementById('bop_33_l_btn').style.display = 'block';
			document.getElementById('bop_33_ml_btn').style.display = 'block';
			
			document.getElementById('pi_33_db_btn').style.display = 'block';
			document.getElementById('pi_33_b_btn').style.display = 'block';
			document.getElementById('pi_33_mb_btn').style.display = 'block';

			document.getElementById('pi_33_dl_btn').style.display = 'block';
			document.getElementById('pi_33_l_btn').style.display = 'block';
			document.getElementById('pi_33_ml_btn').style.display = 'block';
			
			if (bop_33_db == 1) {
				document.getElementById('bop_33_db_rectangle').style.display = 'block';
			}
			if (bop_33_b == 1) {
				document.getElementById('bop_33_b_rectangle').style.display = 'block';
			}
			if (bop_33_mb == 1) {
				document.getElementById('bop_33_mb_rectangle').style.display = 'block';
			}
			if (bop_33_dl == 1) {
				document.getElementById('bop_33_dl_rectangle').style.display = 'block';
			}
			if (bop_33_l == 1) {
				document.getElementById('bop_33_l_rectangle').style.display = 'block';
			}
			if (bop_33_ml == 1) {
				document.getElementById('bop_33_ml_rectangle').style.display = 'block';
			}
			
			if (pi_33_db == 1) {
				document.getElementById('pi_33_db_rectangle').style.display = 'block';
			}
			if (pi_33_b == 1) {
				document.getElementById('pi_33_b_rectangle').style.display = 'block';
			}
			if (pi_33_mb == 1) {
				document.getElementById('pi_33_mb_rectangle').style.display = 'block';
			}
			if (pi_33_dl == 1) {
				document.getElementById('pi_33_dl_rectangle').style.display = 'block';
			}
			if (pi_33_l == 1) {
				document.getElementById('pi_33_l_rectangle').style.display = 'block';
			}
			if (pi_33_ml == 1) {
				document.getElementById('pi_33_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_33();
	}

	function toggle_implant_33() {
		if (Implantat_33 == 0) {
			Implantat_33 = 1;
			
			document.getElementById('implantat_33_b_image').style.display = 'block';
			document.getElementById('implantat_33_l_image').style.display = 'block';
			document.getElementById('implantat_33_tab').style.display = 'block';
		}
		else {
			Implantat_33 = 0;
			
			document.getElementById('implantat_33_b_image').style.display = 'none';
			document.getElementById('implantat_33_l_image').style.display = 'none';
			document.getElementById('implantat_33_tab').style.display = 'none';
		}
	}

	function toggle_bop_33_db() {
		if (bop_33_db == 0) {
			bop_33_db = 1;
			document.getElementById('bop_33_db_rectangle').style.display = 'block';
		}
		else {
			bop_33_db = 0;
			document.getElementById('bop_33_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_33_b() {
		if (bop_33_b == 0) {
			bop_33_b = 1;
			document.getElementById('bop_33_b_rectangle').style.display = 'block';
		}
		else {
			bop_33_b = 0;
			document.getElementById('bop_33_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_33_mb() {
		if (bop_33_mb == 0) {
			bop_33_mb = 1;
			document.getElementById('bop_33_mb_rectangle').style.display = 'block';
		}
		else {
			bop_33_mb = 0;
			document.getElementById('bop_33_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_33_db() {
		if (pi_33_db == 0) {
			pi_33_db = 1;
			document.getElementById('pi_33_db_rectangle').style.display = 'block';
		}
		else {
			pi_33_db = 0;
			document.getElementById('pi_33_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_33_b() {
		if (pi_33_b == 0) {
			pi_33_b = 1;
			document.getElementById('pi_33_b_rectangle').style.display = 'block';
		}
		else {
			pi_33_b = 0;
			document.getElementById('pi_33_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_33_mb() {
		if (pi_33_mb == 0) {
			pi_33_mb = 1;
			document.getElementById('pi_33_mb_rectangle').style.display = 'block';
		}
		else {
			pi_33_mb = 0;
			document.getElementById('pi_33_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_33_dl() {
		if (bop_33_dl == 0) {
			bop_33_dl = 1;
			document.getElementById('bop_33_dl_rectangle').style.display = 'block';
		}
		else {
			bop_33_dl = 0;
			document.getElementById('bop_33_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_33_l() {
		if (bop_33_l == 0) {
			bop_33_l = 1;
			document.getElementById('bop_33_l_rectangle').style.display = 'block';
		}
		else {
			bop_33_l = 0;
			document.getElementById('bop_33_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_33_ml() {
		if (bop_33_ml == 0) {
			bop_33_ml = 1;
			document.getElementById('bop_33_ml_rectangle').style.display = 'block';
		}
		else {
			bop_33_ml = 0;
			document.getElementById('bop_33_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_33_dl() {
		if (pi_33_dl == 0) {
			pi_33_dl = 1;
			document.getElementById('pi_33_dl_rectangle').style.display = 'block';
		}
		else {
			pi_33_dl = 0;
			document.getElementById('pi_33_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_33_l() {
		if (pi_33_l == 0) {
			pi_33_l = 1;
			document.getElementById('pi_33_l_rectangle').style.display = 'block';
		}
		else {
			pi_33_l = 0;
			document.getElementById('pi_33_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_33_ml() {
		if (pi_33_ml == 0) {
			pi_33_ml = 1;
			document.getElementById('pi_33_ml_rectangle').style.display = 'block';
		}
		else {
			pi_33_ml = 0;
			document.getElementById('pi_33_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_33() {
		if (tooth_33 == 1) {
			
		// Variablen aus dem Formular
			pd_33_db = document.forms[0]["pd_33_db"].value;
			pd_33_b = document.forms[0]["pd_33_b"].value;
			pd_33_mb = document.forms[0]["pd_33_mb"].value;

			if (document.forms[0]["pd_33_dl"].value > 3) {document.forms[0]["pd_33_dl"].style.color = 'red';} else {document.forms[0]["pd_33_dl"].style.color = 'black'};
			if (document.forms[0]["pd_33_l"].value > 3) {document.forms[0]["pd_33_l"].style.color = 'red';} else {document.forms[0]["pd_33_l"].style.color = 'black'};
			if (document.forms[0]["pd_33_ml"].value > 3) {document.forms[0]["pd_33_ml"].style.color = 'red';} else {document.forms[0]["pd_33_ml"].style.color = 'black'};
			
			gm_33_db = document.forms[0]["gm_33_db"].value;
			gm_33_b = document.forms[0]["gm_33_b"].value;
			gm_33_mb = document.forms[0]["gm_33_mb"].value;
			
			pd_33_dl = document.forms[0]["pd_33_dl"].value;
			pd_33_l = document.forms[0]["pd_33_l"].value;
			pd_33_ml = document.forms[0]["pd_33_ml"].value;

			if (document.forms[0]["pd_33_db"].value > 3) {document.forms[0]["pd_33_db"].style.color = 'red';} else {document.forms[0]["pd_33_db"].style.color = 'black'};
			if (document.forms[0]["pd_33_b"].value > 3) {document.forms[0]["pd_33_b"].style.color = 'red';} else {document.forms[0]["pd_33_b"].style.color = 'black'};
			if (document.forms[0]["pd_33_mb"].value > 3) {document.forms[0]["pd_33_mb"].style.color = 'red';} else {document.forms[0]["pd_33_mb"].style.color = 'black'};
			
			gm_33_dl = document.forms[0]["gm_33_dl"].value;
			gm_33_l = document.forms[0]["gm_33_l"].value;
			gm_33_ml = document.forms[0]["gm_33_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 33 (bukkal) in der Bitmap
			var x_db_33 = 787;							// distal 33
			var x_mb_33 = 766;							// mesial 33
			var x_b_33 = (x_db_33 + x_mb_33)/2;			// bukkal 33
			
		// Set der horizontalen Koordinaten von Zahn 33 (lingual) in der Bitmap
			var x_dl_33 = 787;							// distal 33
			var x_ml_33 = 767;							// mesial 33
			var x_l_33 = (x_dl_33 + x_ml_33)/2;			// lingual 33
			
		// Set der vertikalen Koordinaten von Zahn 33 (bukkal) aus dem Formular
			var y_gm_33_db = gm_UK_b - 6.05 * gm_33_db;	// Margo Gingivae distobukkal 33
			var y_gm_33_b = gm_UK_b - 6.05 * gm_33_b;	// Margo Gingivae bukkal 33
			var y_gm_33_mb = gm_UK_b - 6.05 * gm_33_mb;	// Margo Gingivae mesiobukkal 33
			var y_pd_33_db = 6.05 * pd_33_db;			// Sondierungstiefe distobukkal 33
			var y_pd_33_b = 6.05 * pd_33_b;				// Sondierungstiefe bukkal 33
			var y_pd_33_mb = 6.05 * pd_33_mb;			// Sondierungstiefe mesiobukkal 33
			
		// Set der vertikalen Koordinaten von Zahn 33 (lingual) aus dem Formular
			var y_gm_33_dl = gm_UK_l + 6.05 * gm_33_dl;	// Margo Gingivae distolingual 33
			var y_gm_33_l = gm_UK_l + 6.05 * gm_33_l;	// Margo Gingivae lingual 33
			var y_gm_33_ml = gm_UK_l + 6.05 * gm_33_ml;	// Margo Gingivae mesiolingual 33
			var y_pd_33_dl = 6.05 * pd_33_dl;			// Sondierungstiefe distolingual 33
			var y_pd_33_l = 6.05 * pd_33_l;				// Sondierungstiefe lingual 33
			var y_pd_33_ml = 6.05 * pd_33_ml;			// Sondierungstiefe mesiolingual 33
			
		// Berechnung des Attachmentniveaus 33 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_33_db = y_gm_33_db + y_pd_33_db;	// Attachmentniveau distobukkal 33
			var y_al_33_b = y_gm_33_b + y_pd_33_b;		// Attachmentniveau bukkal 33
			var y_al_33_mb = y_gm_33_mb + y_pd_33_mb;	// Attachmentniveau mesiobukkal 33
			
		// Berechnung des Attachmentniveaus 33 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_33_dl = y_gm_33_dl - y_pd_33_dl;	// Attachmentniveau distolingual 33
			var y_al_33_l = y_gm_33_l - y_pd_33_l;		// Attachmentniveau lingual 33
			var y_al_33_ml = y_gm_33_ml - y_pd_33_ml;	// Attachmentniveau mesiolingual 33

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[33].storeCoordinates(
				x_db_33, x_mb_33, x_dl_33, x_ml_33, x_b_33, x_l_33,
				y_gm_33_db, y_gm_33_b, y_gm_33_mb, y_pd_33_db, y_pd_33_b, y_pd_33_mb,
				y_gm_33_dl, y_gm_33_l, y_gm_33_ml, y_pd_33_dl, y_pd_33_l, y_pd_33_ml,
				y_al_33_db, y_al_33_b, y_al_33_mb, y_al_33_dl, y_al_33_l, y_al_33_ml
			);

		// Parodontaltasche 33 bukkal zeichnen
			var string = 
				x_db_33 + ", " + y_al_33_db + "  " + 
				x_b_33 + ", " + y_al_33_b + "  " + 
				x_mb_33 + ", " + y_al_33_mb + "  " + 
				x_mb_33 + ", " + y_gm_33_mb + "  " + 
				x_b_33 + ", " + y_gm_33_b + "  " + 
				x_db_33 + ", " + y_gm_33_db;
			document.getElementById("polygon_33_b").setAttribute("points", string);
		// Attachmentniveau 33 bukkal zeichnen
			var string = 
				x_db_33 + ", " + y_al_33_db + "  " + 
				x_b_33 + ", " + y_al_33_b + "  " + 
				x_mb_33 + ", " + y_al_33_mb;
			document.getElementById("polyline_al_33_b").setAttribute("points", string);
		// Margo Gingivae 33 bukkal zeichnen
			var string =
				x_db_33 + ", " + y_gm_33_db + "  " + 
				x_b_33 + ", " + y_gm_33_b + "  " + 
				x_mb_33 + ", " + y_gm_33_mb;
			document.getElementById("polyline_gm_33_b").setAttribute("points", string);

		// Parodontaltasche 33 lingual zeichnen
			var string = 
				x_dl_33 + ", " + y_al_33_dl + "  " + 
				x_l_33 + ", " + y_al_33_l + "  " + 
				x_ml_33 + ", " + y_al_33_ml + "  " + 
				x_ml_33 + ", " + y_gm_33_ml + "  " + 
				x_l_33 + ", " + y_gm_33_l + "  " + 
				x_dl_33 + ", " + y_gm_33_dl;
			document.getElementById("polygon_33_l").setAttribute("points", string);
		// Attachmentniveau 33 lingual zeichnen
			var string = 
				x_dl_33 + ", " + y_al_33_dl + "  " + 
				x_l_33 + ", " + y_al_33_l + "  " + 
				x_ml_33 + ", " + y_al_33_ml;
			document.getElementById("polyline_al_33_l").setAttribute("points", string);
		// Margo Gingivae 33 lingual zeichnen
			var string =
				x_dl_33 + ", " + y_gm_33_dl + "  " + 
				x_l_33 + ", " + y_gm_33_l + "  " + 
				x_ml_33 + ", " + y_gm_33_ml;
			document.getElementById("polyline_gm_33_l").setAttribute("points", string);
		}
        if (tooth_33 == 1 && tooth_32 == 1) {

            pd_32_db = document.forms[0]["pd_32_db"].value;
			gm_32_db = document.forms[0]["gm_32_db"].value;
			
			pd_32_dl = document.forms[0]["pd_32_dl"].value;
			gm_32_dl = document.forms[0]["gm_32_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 32 (bukkal) in der Bitmap
			var x_db_32 = 748;							// distal 32
			
		// Set der horizontalen Koordinaten von Zahn 32 (lingual) in der Bitmap
			var x_dl_32 = 751;							// distal 32
			
		// Set der vertikalen Koordinaten von Zahn 32 (bukkal) aus dem Formular
			var y_gm_32_db = gm_UK_b - 6.05 * gm_32_db;	// Margo Gingivae distobukkal 32
			var y_pd_32_db = 6.05 * pd_32_db;			// Sondierungstiefe distobukkal 32
			
		// Set der vertikalen Koordinaten von Zahn 32 (lingual) aus dem Formular
			var y_gm_32_dl = gm_UK_l + 6.05 * gm_32_dl;	// Margo Gingivae distolingual 32
			var y_pd_32_dl = 6.05 * pd_32_dl;			// Sondierungstiefe distolingual 32
			
		// Berechnung des Attachmentniveaus 32 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_32_db = y_gm_32_db + y_pd_32_db;	// Attachmentniveau distobukkal 32
			
		// Berechnung des Attachmentniveaus 32 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_32_dl = y_gm_32_dl - y_pd_32_dl;	// Attachmentniveau distolingual 32

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
        if (tooth_34 == 1 && tooth_33 == 1) {

            pd_34_mb = document.forms[0]["pd_34_mb"].value;
			gm_34_mb = document.forms[0]["gm_34_mb"].value;
			
			pd_34_ml = document.forms[0]["pd_34_ml"].value;
			gm_34_ml = document.forms[0]["gm_34_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 34 (bukkal) in der Bitmap
			var x_mb_34 = 805;							// mesial 34
			
		// Set der horizontalen Koordinaten von Zahn 34 (lingual) in der Bitmap
			var x_ml_34 = 804;							// mesial 34
			
		// Set der vertikalen Koordinaten von Zahn 34 (bukkal) aus dem Formular
			var y_gm_34_mb = gm_UK_b - 6.05 * gm_34_mb;	// Margo Gingivae mesiobukkal 34
			var y_pd_34_mb = 6.05 * pd_34_mb;			// Sondierungstiefe mesiobukkal 34
			
		// Set der vertikalen Koordinaten von Zahn 34 (lingual) aus dem Formular
			var y_gm_34_ml = gm_UK_l + 6.05 * gm_34_ml;	// Margo Gingivae mesiolingual 34
			var y_pd_34_ml = 6.05 * pd_34_ml;			// Sondierungstiefe mesiolingual 34
			
		// Berechnung des Attachmentniveaus 34 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_34_mb = y_gm_34_mb + y_pd_34_mb;	// Attachmentniveau mesiobukkal 34
			
		// Berechnung des Attachmentniveaus 34 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_34_ml = y_gm_34_ml - y_pd_34_ml;	// Attachmentniveau mesiolingual 34

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
	}