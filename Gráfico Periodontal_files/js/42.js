	// Definition der Variablen für das Formular
		var tooth_42 = 1;
		var Implantat_42 = 0;
		var bop_42_db = 0;
		var bop_42_b = 0;
		var bop_42_mb = 0;
		var pi_42_db = 0;
		var pi_42_b = 0;
		var pi_42_mb = 0;
		var bop_42_dl = 0;
		var bop_42_l = 0;
		var bop_42_ml = 0;
		var pi_42_dl = 0;
		var pi_42_l = 0;
		var pi_42_ml = 0;
		var gm_42_db = 0;
		var gm_42_b = 0;
		var gm_42_mb = 0;
		var pd_42_db = 0;
		var pd_42_b = 0;
		var pd_42_mb = 0;
		var gm_42_dl = 0;
		var gm_42_l = 0;
		var gm_42_ml = 0;
		var pd_42_dl = 0;
		var pd_42_l = 0;
		var pd_42_ml = 0;

	function clear_data_42() {
        if (tooth_42 == 1) {
			gm_42_db = 0;
			gm_42_b = 0;
			gm_42_mb = 0;
			pd_42_db = 0;
			pd_42_b = 0;
			pd_42_mb = 0;
	
				document.getElementById('gm_42_db_txt').value = 0;
				document.getElementById('gm_42_b_txt').value = 0;
				document.getElementById('gm_42_mb_txt').value = 0;
				
				document.getElementById('pd_42_db_txt').value = 0;
				document.getElementById('pd_42_b_txt').value = 0;
				document.getElementById('pd_42_mb_txt').value = 0;
			
				document.forms[0]["pd_42_db"].style.color = 'black'
				document.forms[0]["pd_42_b"].style.color = 'black'
				document.forms[0]["pd_42_mb"].style.color = 'black'
			
			gm_42_dl = 0;
			gm_42_l = 0;
			gm_42_ml = 0;
			pd_42_dl = 0;
			pd_42_l = 0;
			pd_42_ml = 0;

				document.getElementById('gm_42_dl_txt').value = 0;
				document.getElementById('gm_42_l_txt').value = 0;
				document.getElementById('gm_42_ml_txt').value = 0;
				
				document.getElementById('pd_42_dl_txt').value = 0;
				document.getElementById('pd_42_l_txt').value = 0;
				document.getElementById('pd_42_ml_txt').value = 0;

				document.forms[0]["pd_42_dl"].style.color = 'black'
				document.forms[0]["pd_42_l"].style.color = 'black'
				document.forms[0]["pd_42_ml"].style.color = 'black'
			
			change_probing_42();
			
			mobility_42 = 0;

				document.getElementById('mobility_42_txt').value = "0";

			note_42 = "";

				document.getElementById('note_42_txt').value = "";
	
			bop_42_db = 0;
			bop_42_b = 0;
			bop_42_mb = 0;
					
			bop_42_dl = 0;
			bop_42_l = 0;
			bop_42_ml = 0;
					
				document.getElementById('bop_42_db_rectangle').style.display = 'none';
				document.getElementById('bop_42_b_rectangle').style.display = 'none';
				document.getElementById('bop_42_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_42_dl_rectangle').style.display = 'none';
				document.getElementById('bop_42_l_rectangle').style.display = 'none';
				document.getElementById('bop_42_ml_rectangle').style.display = 'none';
				
			pi_42_db = 0;
			pi_42_b = 0;
			pi_42_mb = 0;
					
			pi_42_dl = 0;
			pi_42_l = 0;
			pi_42_ml = 0;

				document.getElementById('pi_42_db_rectangle').style.display = 'none';
				document.getElementById('pi_42_b_rectangle').style.display = 'none';
				document.getElementById('pi_42_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_42_dl_rectangle').style.display = 'none';
				document.getElementById('pi_42_l_rectangle').style.display = 'none';
				document.getElementById('pi_42_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_42() {
		if (tooth_42 === 1) {
			tooth_42 = 0;
			document.getElementById('tooth_line_42_b').style.display = 'block';
			document.getElementById('tooth_line_42_l').style.display = 'block';
			
			document.getElementById('mobility_42_txt').style.display = 'none';
			
			document.getElementById('implantat_42_btn').style.display = 'none';
			document.getElementById('implantat_42_tab').style.display = 'none';
			document.getElementById('implantat_42_b_image').style.display = 'none';
			document.getElementById('implantat_42_l_image').style.display = 'none';
			
			document.getElementById('gm_42_db_txt').style.display = 'none';
			document.getElementById('gm_42_b_txt').style.display = 'none';
			document.getElementById('gm_42_mb_txt').style.display = 'none';
			
			document.getElementById('pd_42_db_txt').style.display = 'none';
			document.getElementById('pd_42_b_txt').style.display = 'none';
			document.getElementById('pd_42_mb_txt').style.display = 'none';
			
			document.getElementById('gm_42_dl_txt').style.display = 'none';
			document.getElementById('gm_42_l_txt').style.display = 'none';
			document.getElementById('gm_42_ml_txt').style.display = 'none';
			
			document.getElementById('pd_42_dl_txt').style.display = 'none';
			document.getElementById('pd_42_l_txt').style.display = 'none';
			document.getElementById('pd_42_ml_txt').style.display = 'none';
			
			document.getElementById('bop_42_db_rectangle').style.display = 'none';
			document.getElementById('bop_42_b_rectangle').style.display = 'none';
			document.getElementById('bop_42_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_42_dl_rectangle').style.display = 'none';
			document.getElementById('bop_42_l_rectangle').style.display = 'none';
			document.getElementById('bop_42_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_42_db_btn').style.display = 'none';
			document.getElementById('bop_42_b_btn').style.display = 'none';
			document.getElementById('bop_42_mb_btn').style.display = 'none';
			
			document.getElementById('bop_42_dl_btn').style.display = 'none';
			document.getElementById('bop_42_l_btn').style.display = 'none';
			document.getElementById('bop_42_ml_btn').style.display = 'none';
			
			document.getElementById('pi_42_db_rectangle').style.display = 'none';
			document.getElementById('pi_42_b_rectangle').style.display = 'none';
			document.getElementById('pi_42_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_42_dl_rectangle').style.display = 'none';
			document.getElementById('pi_42_l_rectangle').style.display = 'none';
			document.getElementById('pi_42_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_42_db_btn').style.display = 'none';
			document.getElementById('pi_42_b_btn').style.display = 'none';
			document.getElementById('pi_42_mb_btn').style.display = 'none';
			
			document.getElementById('pi_42_dl_btn').style.display = 'none';
			document.getElementById('pi_42_l_btn').style.display = 'none';
			document.getElementById('pi_42_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_42_b').style.display = 'none';
			document.getElementById('polyline_al_42_b').style.display = 'none';
			document.getElementById('polyline_gm_42_b').style.display = 'none';
			
			document.getElementById('polygon_42_l').style.display = 'none';
			document.getElementById('polyline_al_42_l').style.display = 'none';
			document.getElementById('polyline_gm_42_l').style.display = 'none';
			
			document.getElementById('polygon_inter_43_42_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_43_42_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_43_42_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_43_42_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_43_42_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_43_42_l').style.display = 'none';            
            
			document.getElementById('polygon_inter_42_41_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_42_41_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_42_41_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_42_41_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_42_41_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_42_41_l').style.display = 'none';            
			
			document.getElementById('note_42_txt').style.display = 'none';
		}
		else if (Implantat_42 !== 1) {
			tooth_42 = 1;
			document.getElementById('tooth_line_42_b').style.display = 'none';
			document.getElementById('tooth_line_42_l').style.display = 'none';

			document.getElementById('mobility_42_txt').style.display = 'block';

			document.getElementById('implantat_42_btn').style.display = 'block';

			document.getElementById('gm_42_db_txt').style.display = 'block';
			document.getElementById('gm_42_b_txt').style.display = 'block';
			document.getElementById('gm_42_mb_txt').style.display = 'block';
			
			document.getElementById('pd_42_db_txt').style.display = 'block';
			document.getElementById('pd_42_b_txt').style.display = 'block';
			document.getElementById('pd_42_mb_txt').style.display = 'block';
			
			document.getElementById('gm_42_dl_txt').style.display = 'block';
			document.getElementById('gm_42_l_txt').style.display = 'block';
			document.getElementById('gm_42_ml_txt').style.display = 'block';
			
			document.getElementById('pd_42_dl_txt').style.display = 'block';
			document.getElementById('pd_42_l_txt').style.display = 'block';
			document.getElementById('pd_42_ml_txt').style.display = 'block';
			
			document.getElementById('note_42_txt').style.display = 'block';

			document.getElementById('polygon_42_b').style.display = 'block';
			document.getElementById('polyline_al_42_b').style.display = 'block';
			document.getElementById('polyline_gm_42_b').style.display = 'block';
			
			document.getElementById('polygon_42_l').style.display = 'block';
			document.getElementById('polyline_al_42_l').style.display = 'block';
			document.getElementById('polyline_gm_42_l').style.display = 'block';

            if (tooth_43 == 1 && tooth_42 == 1) {
				document.getElementById('polygon_inter_43_42_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_43_42_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_43_42_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_43_42_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_43_42_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_43_42_l').style.display = 'block';            
            }
            
            if (tooth_42 == 1 && tooth_41 == 1) {
				document.getElementById('polygon_inter_42_41_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_42_41_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_42_41_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_42_41_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_42_41_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_42_41_l').style.display = 'block';            
            }

			document.getElementById('bop_42_db_btn').style.display = 'block';
			document.getElementById('bop_42_b_btn').style.display = 'block';
			document.getElementById('bop_42_mb_btn').style.display = 'block';

			document.getElementById('bop_42_dl_btn').style.display = 'block';
			document.getElementById('bop_42_l_btn').style.display = 'block';
			document.getElementById('bop_42_ml_btn').style.display = 'block';
			
			if (bop_42_db == 1) {
				document.getElementById('bop_42_db_rectangle').style.display = 'block';
			}
			if (bop_42_b == 1) {
				document.getElementById('bop_42_b_rectangle').style.display = 'block';
			}
			if (bop_42_mb == 1) {
				document.getElementById('bop_42_mb_rectangle').style.display = 'block';
			}
			if (bop_42_dl == 1) {
				document.getElementById('bop_42_dl_rectangle').style.display = 'block';
			}
			if (bop_42_l == 1) {
				document.getElementById('bop_42_l_rectangle').style.display = 'block';
			}
			if (bop_42_ml == 1) {
				document.getElementById('bop_42_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_42_db_btn').style.display = 'block';
			document.getElementById('pi_42_b_btn').style.display = 'block';
			document.getElementById('pi_42_mb_btn').style.display = 'block';

			document.getElementById('pi_42_dl_btn').style.display = 'block';
			document.getElementById('pi_42_l_btn').style.display = 'block';
			document.getElementById('pi_42_ml_btn').style.display = 'block';
			
			if (pi_42_db == 1) {
				document.getElementById('pi_42_db_rectangle').style.display = 'block';
			}
			if (pi_42_b == 1) {
				document.getElementById('pi_42_b_rectangle').style.display = 'block';
			}
			if (pi_42_mb == 1) {
				document.getElementById('pi_42_mb_rectangle').style.display = 'block';
			}
			if (pi_42_dl == 1) {
				document.getElementById('pi_42_dl_rectangle').style.display = 'block';
			}
			if (pi_42_l == 1) {
				document.getElementById('pi_42_l_rectangle').style.display = 'block';
			}
			if (pi_42_ml == 1) {
				document.getElementById('pi_42_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_42 == 1) {
			tooth_42 = 1;
			document.getElementById('tooth_line_42_b').style.display = 'none';
			document.getElementById('tooth_line_42_l').style.display = 'none';

			document.getElementById('mobility_42_txt').style.display = 'block';
			
			document.getElementById('note_42_txt').style.display = 'block';

			document.getElementById('implantat_42_btn').style.display = 'block';
			document.getElementById('implantat_42_tab').style.display = 'block';
			document.getElementById('implantat_42_b_image').style.display = 'block';
			document.getElementById('implantat_42_l_image').style.display = 'block';

			document.getElementById('gm_42_db_txt').style.display = 'block';
			document.getElementById('gm_42_b_txt').style.display = 'block';
			document.getElementById('gm_42_mb_txt').style.display = 'block';
			
			document.getElementById('pd_42_db_txt').style.display = 'block';
			document.getElementById('pd_42_b_txt').style.display = 'block';
			document.getElementById('pd_42_mb_txt').style.display = 'block';
			
			document.getElementById('gm_42_dl_txt').style.display = 'block';
			document.getElementById('gm_42_l_txt').style.display = 'block';
			document.getElementById('gm_42_ml_txt').style.display = 'block';
			
			document.getElementById('pd_42_dl_txt').style.display = 'block';
			document.getElementById('pd_42_l_txt').style.display = 'block';
			document.getElementById('pd_42_ml_txt').style.display = 'block';

			document.getElementById('polygon_42_b').style.display = 'block';
			document.getElementById('polyline_al_42_b').style.display = 'block';
			document.getElementById('polyline_gm_42_b').style.display = 'block';
			
			document.getElementById('polygon_42_l').style.display = 'block';
			document.getElementById('polyline_al_42_l').style.display = 'block';
			document.getElementById('polyline_gm_42_l').style.display = 'block';

            if (tooth_43 == 1 && tooth_42 == 1) {
				document.getElementById('polygon_inter_43_42_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_43_42_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_43_42_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_43_42_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_43_42_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_43_42_l').style.display = 'block';            
            }
            
            if (tooth_42 == 1 && tooth_41 == 1) {
				document.getElementById('polygon_inter_42_41_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_42_41_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_42_41_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_42_41_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_42_41_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_42_41_l').style.display = 'block';            
            }

			document.getElementById('bop_42_db_btn').style.display = 'block';
			document.getElementById('bop_42_b_btn').style.display = 'block';
			document.getElementById('bop_42_mb_btn').style.display = 'block';

			document.getElementById('bop_42_dl_btn').style.display = 'block';
			document.getElementById('bop_42_l_btn').style.display = 'block';
			document.getElementById('bop_42_ml_btn').style.display = 'block';
			
			document.getElementById('pi_42_db_btn').style.display = 'block';
			document.getElementById('pi_42_b_btn').style.display = 'block';
			document.getElementById('pi_42_mb_btn').style.display = 'block';

			document.getElementById('pi_42_dl_btn').style.display = 'block';
			document.getElementById('pi_42_l_btn').style.display = 'block';
			document.getElementById('pi_42_ml_btn').style.display = 'block';
			
			if (bop_42_db == 1) {
				document.getElementById('bop_42_db_rectangle').style.display = 'block';
			}
			if (bop_42_b == 1) {
				document.getElementById('bop_42_b_rectangle').style.display = 'block';
			}
			if (bop_42_mb == 1) {
				document.getElementById('bop_42_mb_rectangle').style.display = 'block';
			}
			if (bop_42_dl == 1) {
				document.getElementById('bop_42_dl_rectangle').style.display = 'block';
			}
			if (bop_42_l == 1) {
				document.getElementById('bop_42_l_rectangle').style.display = 'block';
			}
			if (bop_42_ml == 1) {
				document.getElementById('bop_42_ml_rectangle').style.display = 'block';
			}
			
			if (pi_42_db == 1) {
				document.getElementById('pi_42_db_rectangle').style.display = 'block';
			}
			if (pi_42_b == 1) {
				document.getElementById('pi_42_b_rectangle').style.display = 'block';
			}
			if (pi_42_mb == 1) {
				document.getElementById('pi_42_mb_rectangle').style.display = 'block';
			}
			if (pi_42_dl == 1) {
				document.getElementById('pi_42_dl_rectangle').style.display = 'block';
			}
			if (pi_42_l == 1) {
				document.getElementById('pi_42_l_rectangle').style.display = 'block';
			}
			if (pi_42_ml == 1) {
				document.getElementById('pi_42_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_42();
	}

	function toggle_implant_42() {
		if (Implantat_42 == 0) {
			Implantat_42 = 1;
			
			document.getElementById('implantat_42_b_image').style.display = 'block';
			document.getElementById('implantat_42_l_image').style.display = 'block';
			document.getElementById('implantat_42_tab').style.display = 'block';
		}
		else {
			Implantat_42 = 0;
			
			document.getElementById('implantat_42_b_image').style.display = 'none';
			document.getElementById('implantat_42_l_image').style.display = 'none';
			document.getElementById('implantat_42_tab').style.display = 'none';
		}
	}

	function toggle_bop_42_db() {
		if (bop_42_db == 0) {
			bop_42_db = 1;
			document.getElementById('bop_42_db_rectangle').style.display = 'block';
		}
		else {
			bop_42_db = 0;
			document.getElementById('bop_42_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_42_b() {
		if (bop_42_b == 0) {
			bop_42_b = 1;
			document.getElementById('bop_42_b_rectangle').style.display = 'block';
		}
		else {
			bop_42_b = 0;
			document.getElementById('bop_42_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_42_mb() {
		if (bop_42_mb == 0) {
			bop_42_mb = 1;
			document.getElementById('bop_42_mb_rectangle').style.display = 'block';
		}
		else {
			bop_42_mb = 0;
			document.getElementById('bop_42_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_42_db() {
		if (pi_42_db == 0) {
			pi_42_db = 1;
			document.getElementById('pi_42_db_rectangle').style.display = 'block';
		}
		else {
			pi_42_db = 0;
			document.getElementById('pi_42_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_42_b() {
		if (pi_42_b == 0) {
			pi_42_b = 1;
			document.getElementById('pi_42_b_rectangle').style.display = 'block';
		}
		else {
			pi_42_b = 0;
			document.getElementById('pi_42_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_42_mb() {
		if (pi_42_mb == 0) {
			pi_42_mb = 1;
			document.getElementById('pi_42_mb_rectangle').style.display = 'block';
		}
		else {
			pi_42_mb = 0;
			document.getElementById('pi_42_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_42_dl() {
		if (bop_42_dl == 0) {
			bop_42_dl = 1;
			document.getElementById('bop_42_dl_rectangle').style.display = 'block';
		}
		else {
			bop_42_dl = 0;
			document.getElementById('bop_42_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_42_l() {
		if (bop_42_l == 0) {
			bop_42_l = 1;
			document.getElementById('bop_42_l_rectangle').style.display = 'block';
		}
		else {
			bop_42_l = 0;
			document.getElementById('bop_42_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_42_ml() {
		if (bop_42_ml == 0) {
			bop_42_ml = 1;
			document.getElementById('bop_42_ml_rectangle').style.display = 'block';
		}
		else {
			bop_42_ml = 0;
			document.getElementById('bop_42_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_42_dl() {
		if (pi_42_dl == 0) {
			pi_42_dl = 1;
			document.getElementById('pi_42_dl_rectangle').style.display = 'block';
		}
		else {
			pi_42_dl = 0;
			document.getElementById('pi_42_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_42_l() {
		if (pi_42_l == 0) {
			pi_42_l = 1;
			document.getElementById('pi_42_l_rectangle').style.display = 'block';
		}
		else {
			pi_42_l = 0;
			document.getElementById('pi_42_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_42_ml() {
		if (pi_42_ml == 0) {
			pi_42_ml = 1;
			document.getElementById('pi_42_ml_rectangle').style.display = 'block';
		}
		else {
			pi_42_ml = 0;
			document.getElementById('pi_42_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_42() {
		if (tooth_42 == 1) {
			
		// Variablen aus dem Formular
			pd_42_db = document.forms[0]["pd_42_db"].value;
			pd_42_b = document.forms[0]["pd_42_b"].value;
			pd_42_mb = document.forms[0]["pd_42_mb"].value;

			if (document.forms[0]["pd_42_dl"].value > 3) {document.forms[0]["pd_42_dl"].style.color = 'red';} else {document.forms[0]["pd_42_dl"].style.color = 'black'};
			if (document.forms[0]["pd_42_l"].value > 3) {document.forms[0]["pd_42_l"].style.color = 'red';} else {document.forms[0]["pd_42_l"].style.color = 'black'};
			if (document.forms[0]["pd_42_ml"].value > 3) {document.forms[0]["pd_42_ml"].style.color = 'red';} else {document.forms[0]["pd_42_ml"].style.color = 'black'};
			
			gm_42_db = document.forms[0]["gm_42_db"].value;
			gm_42_b = document.forms[0]["gm_42_b"].value;
			gm_42_mb = document.forms[0]["gm_42_mb"].value;
			
			pd_42_dl = document.forms[0]["pd_42_dl"].value;
			pd_42_l = document.forms[0]["pd_42_l"].value;
			pd_42_ml = document.forms[0]["pd_42_ml"].value;

			if (document.forms[0]["pd_42_db"].value > 3) {document.forms[0]["pd_42_db"].style.color = 'red';} else {document.forms[0]["pd_42_db"].style.color = 'black'};
			if (document.forms[0]["pd_42_b"].value > 3) {document.forms[0]["pd_42_b"].style.color = 'red';} else {document.forms[0]["pd_42_b"].style.color = 'black'};
			if (document.forms[0]["pd_42_mb"].value > 3) {document.forms[0]["pd_42_mb"].style.color = 'red';} else {document.forms[0]["pd_42_mb"].style.color = 'black'};
			
			gm_42_dl = document.forms[0]["gm_42_dl"].value;
			gm_42_l = document.forms[0]["gm_42_l"].value;
			gm_42_ml = document.forms[0]["gm_42_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 42 (bukkal) in der Bitmap
			var x_db_42 = 610;							// distal 42
			var x_mb_42 = 629;							// mesial 42
			var x_b_42 = (x_db_42 + x_mb_42)/2;			// bukkal 42
			
		// Set der horizontalen Koordinaten von Zahn 42 (lingual) in der Bitmap
			var x_dl_42 = 607;							// distal 42
			var x_ml_42 = 625;							// mesial 42
			var x_l_42 = (x_dl_42 + x_ml_42)/2;			// lingual 42
			
		// Set der vertikalen Koordinaten von Zahn 42 (bukkal) aus dem Formular
			var y_gm_42_db = gm_UK_b - 6.05 * gm_42_db;	// Margo Gingivae distobukkal 42
			var y_gm_42_b = gm_UK_b - 6.05 * gm_42_b;	// Margo Gingivae bukkal 42
			var y_gm_42_mb = gm_UK_b - 6.05 * gm_42_mb;	// Margo Gingivae mesiobukkal 42
			var y_pd_42_db = 6.05 * pd_42_db;			// Sondierungstiefe distobukkal 42
			var y_pd_42_b = 6.05 * pd_42_b;				// Sondierungstiefe bukkal 42
			var y_pd_42_mb = 6.05 * pd_42_mb;			// Sondierungstiefe mesiobukkal 42
			
		// Set der vertikalen Koordinaten von Zahn 42 (lingual) aus dem Formular
			var y_gm_42_dl = gm_UK_l + 6.05 * gm_42_dl;	// Margo Gingivae distolingual 42
			var y_gm_42_l = gm_UK_l + 6.05 * gm_42_l;	// Margo Gingivae lingual 42
			var y_gm_42_ml = gm_UK_l + 6.05 * gm_42_ml;	// Margo Gingivae mesiolingual 42
			var y_pd_42_dl = 6.05 * pd_42_dl;			// Sondierungstiefe distolingual 42
			var y_pd_42_l = 6.05 * pd_42_l;				// Sondierungstiefe lingual 42
			var y_pd_42_ml = 6.05 * pd_42_ml;			// Sondierungstiefe mesiolingual 42
			
		// Berechnung des Attachmentniveaus 42 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_42_db = y_gm_42_db + y_pd_42_db;	// Attachmentniveau distobukkal 42
			var y_al_42_b = y_gm_42_b + y_pd_42_b;		// Attachmentniveau bukkal 42
			var y_al_42_mb = y_gm_42_mb + y_pd_42_mb;	// Attachmentniveau mesiobukkal 42
			
		// Berechnung des Attachmentniveaus 42 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_42_dl = y_gm_42_dl - y_pd_42_dl;	// Attachmentniveau distolingual 42
			var y_al_42_l = y_gm_42_l - y_pd_42_l;		// Attachmentniveau lingual 42
			var y_al_42_ml = y_gm_42_ml - y_pd_42_ml;	// Attachmentniveau mesiolingual 42

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[42].storeCoordinates(
				x_db_42, x_mb_42, x_dl_42, x_ml_42, x_b_42, x_l_42,
				y_gm_42_db, y_gm_42_b, y_gm_42_mb, y_pd_42_db, y_pd_42_b, y_pd_42_mb,
				y_gm_42_dl, y_gm_42_l, y_gm_42_ml, y_pd_42_dl, y_pd_42_l, y_pd_42_ml,
				y_al_42_db, y_al_42_b, y_al_42_mb, y_al_42_dl, y_al_42_l, y_al_42_ml
			);

		// Parodontaltasche 42 bukkal zeichnen
			var string = 
				x_db_42 + ", " + y_al_42_db + "  " + 
				x_b_42 + ", " + y_al_42_b + "  " + 
				x_mb_42 + ", " + y_al_42_mb + "  " + 
				x_mb_42 + ", " + y_gm_42_mb + "  " + 
				x_b_42 + ", " + y_gm_42_b + "  " + 
				x_db_42 + ", " + y_gm_42_db;
			document.getElementById("polygon_42_b").setAttribute("points", string);
		// Attachmentniveau 42 bukkal zeichnen
			var string = 
				x_db_42 + ", " + y_al_42_db + "  " + 
				x_b_42 + ", " + y_al_42_b + "  " + 
				x_mb_42 + ", " + y_al_42_mb;
			document.getElementById("polyline_al_42_b").setAttribute("points", string);
		// Margo Gingivae 42 bukkal zeichnen
			var string =
				x_db_42 + ", " + y_gm_42_db + "  " + 
				x_b_42 + ", " + y_gm_42_b + "  " + 
				x_mb_42 + ", " + y_gm_42_mb;
			document.getElementById("polyline_gm_42_b").setAttribute("points", string);

		// Parodontaltasche 42 lingual zeichnen
			var string = 
				x_dl_42 + ", " + y_al_42_dl + "  " + 
				x_l_42 + ", " + y_al_42_l + "  " + 
				x_ml_42 + ", " + y_al_42_ml + "  " + 
				x_ml_42 + ", " + y_gm_42_ml + "  " + 
				x_l_42 + ", " + y_gm_42_l + "  " + 
				x_dl_42 + ", " + y_gm_42_dl;
			document.getElementById("polygon_42_l").setAttribute("points", string);
		// Attachmentniveau 42 lingual zeichnen
			var string = 
				x_dl_42 + ", " + y_al_42_dl + "  " + 
				x_l_42 + ", " + y_al_42_l + "  " + 
				x_ml_42 + ", " + y_al_42_ml;
			document.getElementById("polyline_al_42_l").setAttribute("points", string);
		// Margo Gingivae 42 lingual zeichnen
			var string =
				x_dl_42 + ", " + y_gm_42_dl + "  " + 
				x_l_42 + ", " + y_gm_42_l + "  " + 
				x_ml_42 + ", " + y_gm_42_ml;
			document.getElementById("polyline_gm_42_l").setAttribute("points", string);
		}
        if (tooth_42 == 1 && tooth_41 == 1) {

            pd_41_db = document.forms[0]["pd_41_db"].value;
			gm_41_db = document.forms[0]["gm_41_db"].value;
			
			pd_41_dl = document.forms[0]["pd_41_dl"].value;
			gm_41_dl = document.forms[0]["gm_41_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 41 (bukkal) in der Bitmap
			var x_db_41 = 643;							// distal 41
			
		// Set der horizontalen Koordinaten von Zahn 41 (lingual) in der Bitmap
			var x_dl_41 = 642;							// distal 41
			
		// Set der vertikalen Koordinaten von Zahn 41 (bukkal) aus dem Formular
			var y_gm_41_db = gm_UK_b - 6.05 * gm_41_db;	// Margo Gingivae distobukkal 41
			var y_pd_41_db = 6.05 * pd_41_db;			// Sondierungstiefe distobukkal 41
			
		// Set der vertikalen Koordinaten von Zahn 41 (lingual) aus dem Formular
			var y_gm_41_dl = gm_UK_l + 6.05 * gm_41_dl;	// Margo Gingivae distolingual 41
			var y_pd_41_dl = 6.05 * pd_41_dl;			// Sondierungstiefe distolingual 41
			
		// Berechnung des Attachmentniveaus 41 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_41_db = y_gm_41_db + y_pd_41_db;	// Attachmentniveau distobukkal 41
			
		// Berechnung des Attachmentniveaus 41 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_41_dl = y_gm_41_dl - y_pd_41_dl;	// Attachmentniveau distolingual 41

		// Parodontaltasche inter_42_41 bukkal zeichnen
			var string = 
				x_mb_42 + ", " + y_al_42_mb + "  " + 
				x_db_41 + ", " + y_al_41_db + "  " + 
				x_db_41 + ", " + y_gm_41_db + "  " + 
				x_mb_42 + ", " + y_gm_42_mb;
			document.getElementById("polygon_inter_42_41_b").setAttribute("points", string);
		// Attachmentniveau inter_42_41 bukkal zeichnen
			var string = 
				x_mb_42 + ", " + y_al_42_mb + "  " + 
				x_db_41 + ", " + y_al_41_db;
			document.getElementById("polyline_al_inter_42_41_b").setAttribute("points", string);
		// Margo Gingivae inter_42_41 bukkal zeichnen
			var string =
				x_mb_42 + ", " + y_gm_42_mb + "  " + 
				x_db_41 + ", " + y_gm_41_db;
			document.getElementById("polyline_gm_inter_42_41_b").setAttribute("points", string);

        // Parodontaltasche inter_42_41 lingual zeichnen
			var string = 
				x_ml_42 + ", " + y_al_42_ml + "  " + 
				x_dl_41 + ", " + y_al_41_dl + "  " + 
				x_dl_41 + ", " + y_gm_41_dl + "  " + 
				x_ml_42 + ", " + y_gm_42_ml;
			document.getElementById("polygon_inter_42_41_l").setAttribute("points", string);
		// Attachmentniveau inter_42_41 lingual zeichnen
			var string = 
				x_ml_42 + ", " + y_al_42_ml + "  " + 
				x_dl_41 + ", " + y_al_41_dl;
			document.getElementById("polyline_al_inter_42_41_l").setAttribute("points", string);
		// Margo Gingivae inter_42_41 lingual zeichnen
			var string =
				x_ml_42 + ", " + y_gm_42_ml + "  " + 
				x_dl_41 + ", " + y_gm_41_dl;
			document.getElementById("polyline_gm_inter_42_41_l").setAttribute("points", string);
		}
        if (tooth_43 == 1 && tooth_42 == 1) {

            pd_43_mb = document.forms[0]["pd_43_mb"].value;
			gm_43_mb = document.forms[0]["gm_43_mb"].value;
			
			pd_43_ml = document.forms[0]["pd_43_ml"].value;
			gm_43_ml = document.forms[0]["gm_43_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 43 (bukkal) in der Bitmap
			var x_mb_43 = 592;							// mesial 43
			
		// Set der horizontalen Koordinaten von Zahn 43 (lingual) in der Bitmap
			var x_ml_43 = 590;							// mesial 43
			
		// Set der vertikalen Koordinaten von Zahn 43 (bukkal) aus dem Formular
			var y_gm_43_mb = gm_UK_b - 6.05 * gm_43_mb;	// Margo Gingivae mesiobukkal 43
			var y_pd_43_mb = 6.05 * pd_43_mb;			// Sondierungstiefe mesiobukkal 43
			
		// Set der vertikalen Koordinaten von Zahn 43 (lingual) aus dem Formular
			var y_gm_43_ml = gm_UK_l + 6.05 * gm_43_ml;	// Margo Gingivae mesiolingual 43
			var y_pd_43_ml = 6.05 * pd_43_ml;			// Sondierungstiefe mesiolingual 43
			
		// Berechnung des Attachmentniveaus 43 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_43_mb = y_gm_43_mb + y_pd_43_mb;	// Attachmentniveau mesiobukkal 43
			
		// Berechnung des Attachmentniveaus 43 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_43_ml = y_gm_43_ml - y_pd_43_ml;	// Attachmentniveau mesiolingual 43

		// Parodontaltasche inter_43_42 bukkal zeichnen
			var string = 
				x_mb_43 + ", " + y_al_43_mb + "  " + 
				x_db_42 + ", " + y_al_42_db + "  " + 
				x_db_42 + ", " + y_gm_42_db + "  " + 
				x_mb_43 + ", " + y_gm_43_mb;
			document.getElementById("polygon_inter_43_42_b").setAttribute("points", string);
		// Attachmentniveau inter_43_42 bukkal zeichnen
			var string = 
				x_mb_43 + ", " + y_al_43_mb + "  " + 
				x_db_42 + ", " + y_al_42_db;
			document.getElementById("polyline_al_inter_43_42_b").setAttribute("points", string);
		// Margo Gingivae inter_43_42 bukkal zeichnen
			var string =
				x_mb_43 + ", " + y_gm_43_mb + "  " + 
				x_db_42 + ", " + y_gm_42_db;
			document.getElementById("polyline_gm_inter_43_42_b").setAttribute("points", string);

        // Parodontaltasche inter_43_42 lingual zeichnen
			var string = 
				x_ml_43 + ", " + y_al_43_ml + "  " + 
				x_dl_42 + ", " + y_al_42_dl + "  " + 
				x_dl_42 + ", " + y_gm_42_dl + "  " + 
				x_ml_43 + ", " + y_gm_43_ml;
			document.getElementById("polygon_inter_43_42_l").setAttribute("points", string);
		// Attachmentniveau inter_43_42 lingual zeichnen
			var string = 
				x_ml_43 + ", " + y_al_43_ml + "  " + 
				x_dl_42 + ", " + y_al_42_dl;
			document.getElementById("polyline_al_inter_43_42_l").setAttribute("points", string);
		// Margo Gingivae inter_43_42 lingual zeichnen
			var string =
				x_ml_43 + ", " + y_gm_43_ml + "  " + 
				x_dl_42 + ", " + y_gm_42_dl;
			document.getElementById("polyline_gm_inter_43_42_l").setAttribute("points", string);
		}
	}