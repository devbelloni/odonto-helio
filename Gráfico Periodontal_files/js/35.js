	// Definition der Variablen für das Formular
		var tooth_35 = 1;
		var Implantat_35 = 0;
		var bop_35_db = 0;
		var bop_35_b = 0;
		var bop_35_mb = 0;
		var pi_35_db = 0;
		var pi_35_b = 0;
		var pi_35_mb = 0;
		var bop_35_dl = 0;
		var bop_35_l = 0;
		var bop_35_ml = 0;
		var pi_35_dl = 0;
		var pi_35_l = 0;
		var pi_35_ml = 0;
		var gm_35_db = 0;
		var gm_35_b = 0;
		var gm_35_mb = 0;
		var pd_35_db = 0;
		var pd_35_b = 0;
		var pd_35_mb = 0;
		var gm_35_dl = 0;
		var gm_35_l = 0;
		var gm_35_ml = 0;
		var pd_35_dl = 0;
		var pd_35_l = 0;
		var pd_35_ml = 0;

	function clear_data_35() {
        if (tooth_35 == 1) {
			gm_35_db = 0;
			gm_35_b = 0;
			gm_35_mb = 0;
			pd_35_db = 0;
			pd_35_b = 0;
			pd_35_mb = 0;
	
				document.getElementById('gm_35_db_txt').value = 0;
				document.getElementById('gm_35_b_txt').value = 0;
				document.getElementById('gm_35_mb_txt').value = 0;
				
				document.getElementById('pd_35_db_txt').value = 0;
				document.getElementById('pd_35_b_txt').value = 0;
				document.getElementById('pd_35_mb_txt').value = 0;
			
				document.forms[0]["pd_35_db"].style.color = 'black'
				document.forms[0]["pd_35_b"].style.color = 'black'
				document.forms[0]["pd_35_mb"].style.color = 'black'
			
			gm_35_dl = 0;
			gm_35_l = 0;
			gm_35_ml = 0;
			pd_35_dl = 0;
			pd_35_l = 0;
			pd_35_ml = 0;

				document.getElementById('gm_35_dl_txt').value = 0;
				document.getElementById('gm_35_l_txt').value = 0;
				document.getElementById('gm_35_ml_txt').value = 0;
				
				document.getElementById('pd_35_dl_txt').value = 0;
				document.getElementById('pd_35_l_txt').value = 0;
				document.getElementById('pd_35_ml_txt').value = 0;

				document.forms[0]["pd_35_dl"].style.color = 'black'
				document.forms[0]["pd_35_l"].style.color = 'black'
				document.forms[0]["pd_35_ml"].style.color = 'black'
			
			change_probing_35();
			
			mobility_35 = 0;

				document.getElementById('mobility_35_txt').value = "0";

			note_35 = "";

				document.getElementById('note_35_txt').value = "";
	
			bop_35_db = 0;
			bop_35_b = 0;
			bop_35_mb = 0;
					
			bop_35_dl = 0;
			bop_35_l = 0;
			bop_35_ml = 0;
					
				document.getElementById('bop_35_db_rectangle').style.display = 'none';
				document.getElementById('bop_35_b_rectangle').style.display = 'none';
				document.getElementById('bop_35_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_35_dl_rectangle').style.display = 'none';
				document.getElementById('bop_35_l_rectangle').style.display = 'none';
				document.getElementById('bop_35_ml_rectangle').style.display = 'none';
				
			pi_35_db = 0;
			pi_35_b = 0;
			pi_35_mb = 0;
					
			pi_35_dl = 0;
			pi_35_l = 0;
			pi_35_ml = 0;

				document.getElementById('pi_35_db_rectangle').style.display = 'none';
				document.getElementById('pi_35_b_rectangle').style.display = 'none';
				document.getElementById('pi_35_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_35_dl_rectangle').style.display = 'none';
				document.getElementById('pi_35_l_rectangle').style.display = 'none';
				document.getElementById('pi_35_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_35() {
		if (tooth_35 === 1) {
			tooth_35 = 0;
			document.getElementById('tooth_line_35_b').style.display = 'block';
			document.getElementById('tooth_line_35_l').style.display = 'block';
			
			document.getElementById('mobility_35_txt').style.display = 'none';
			
			document.getElementById('implantat_35_btn').style.display = 'none';
			document.getElementById('implantat_35_tab').style.display = 'none';
			document.getElementById('implantat_35_b_image').style.display = 'none';
			document.getElementById('implantat_35_l_image').style.display = 'none';
			
			document.getElementById('gm_35_db_txt').style.display = 'none';
			document.getElementById('gm_35_b_txt').style.display = 'none';
			document.getElementById('gm_35_mb_txt').style.display = 'none';
			
			document.getElementById('pd_35_db_txt').style.display = 'none';
			document.getElementById('pd_35_b_txt').style.display = 'none';
			document.getElementById('pd_35_mb_txt').style.display = 'none';
			
			document.getElementById('gm_35_dl_txt').style.display = 'none';
			document.getElementById('gm_35_l_txt').style.display = 'none';
			document.getElementById('gm_35_ml_txt').style.display = 'none';
			
			document.getElementById('pd_35_dl_txt').style.display = 'none';
			document.getElementById('pd_35_l_txt').style.display = 'none';
			document.getElementById('pd_35_ml_txt').style.display = 'none';
						
			document.getElementById('bop_35_db_rectangle').style.display = 'none';
			document.getElementById('bop_35_b_rectangle').style.display = 'none';
			document.getElementById('bop_35_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_35_dl_rectangle').style.display = 'none';
			document.getElementById('bop_35_l_rectangle').style.display = 'none';
			document.getElementById('bop_35_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_35_db_btn').style.display = 'none';
			document.getElementById('bop_35_b_btn').style.display = 'none';
			document.getElementById('bop_35_mb_btn').style.display = 'none';
			
			document.getElementById('bop_35_dl_btn').style.display = 'none';
			document.getElementById('bop_35_l_btn').style.display = 'none';
			document.getElementById('bop_35_ml_btn').style.display = 'none';
			
			document.getElementById('pi_35_db_rectangle').style.display = 'none';
			document.getElementById('pi_35_b_rectangle').style.display = 'none';
			document.getElementById('pi_35_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_35_dl_rectangle').style.display = 'none';
			document.getElementById('pi_35_l_rectangle').style.display = 'none';
			document.getElementById('pi_35_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_35_db_btn').style.display = 'none';
			document.getElementById('pi_35_b_btn').style.display = 'none';
			document.getElementById('pi_35_mb_btn').style.display = 'none';
			
			document.getElementById('pi_35_dl_btn').style.display = 'none';
			document.getElementById('pi_35_l_btn').style.display = 'none';
			document.getElementById('pi_35_ml_btn').style.display = 'none';
			
			
			document.getElementById('polygon_35_b').style.display = 'none';
			document.getElementById('polyline_al_35_b').style.display = 'none';
			document.getElementById('polyline_gm_35_b').style.display = 'none';
			
			document.getElementById('polygon_35_l').style.display = 'none';
			document.getElementById('polyline_al_35_l').style.display = 'none';
			document.getElementById('polyline_gm_35_l').style.display = 'none';
			
			document.getElementById('polygon_inter_36_35_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_36_35_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_36_35_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_36_35_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_36_35_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_36_35_l').style.display = 'none';            
            
			document.getElementById('polygon_inter_35_34_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_35_34_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_35_34_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_35_34_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_35_34_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_35_34_l').style.display = 'none';            
			
			document.getElementById('note_35_txt').style.display = 'none';
		}
		else if (Implantat_35 !== 1) {
			tooth_35 = 1;
			document.getElementById('tooth_line_35_b').style.display = 'none';
			document.getElementById('tooth_line_35_l').style.display = 'none';

			document.getElementById('mobility_35_txt').style.display = 'block';

			document.getElementById('implantat_35_btn').style.display = 'block';

			document.getElementById('gm_35_db_txt').style.display = 'block';
			document.getElementById('gm_35_b_txt').style.display = 'block';
			document.getElementById('gm_35_mb_txt').style.display = 'block';
			
			document.getElementById('pd_35_db_txt').style.display = 'block';
			document.getElementById('pd_35_b_txt').style.display = 'block';
			document.getElementById('pd_35_mb_txt').style.display = 'block';
			
			document.getElementById('gm_35_dl_txt').style.display = 'block';
			document.getElementById('gm_35_l_txt').style.display = 'block';
			document.getElementById('gm_35_ml_txt').style.display = 'block';
			
			document.getElementById('pd_35_dl_txt').style.display = 'block';
			document.getElementById('pd_35_l_txt').style.display = 'block';
			document.getElementById('pd_35_ml_txt').style.display = 'block';
			
			document.getElementById('note_35_txt').style.display = 'block';

			document.getElementById('polygon_35_b').style.display = 'block';
			document.getElementById('polyline_al_35_b').style.display = 'block';
			document.getElementById('polyline_gm_35_b').style.display = 'block';
			
			document.getElementById('polygon_35_l').style.display = 'block';
			document.getElementById('polyline_al_35_l').style.display = 'block';
			document.getElementById('polyline_gm_35_l').style.display = 'block';

            if (tooth_36 == 1 && tooth_35 == 1) {
				document.getElementById('polygon_inter_36_35_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_36_35_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_36_35_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_36_35_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_36_35_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_36_35_l').style.display = 'block';            
            }
            
            if (tooth_35 == 1 && tooth_34 == 1) {
				document.getElementById('polygon_inter_35_34_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_35_34_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_35_34_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_35_34_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_35_34_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_35_34_l').style.display = 'block';            
            }

			document.getElementById('bop_35_db_btn').style.display = 'block';
			document.getElementById('bop_35_b_btn').style.display = 'block';
			document.getElementById('bop_35_mb_btn').style.display = 'block';

			document.getElementById('bop_35_dl_btn').style.display = 'block';
			document.getElementById('bop_35_l_btn').style.display = 'block';
			document.getElementById('bop_35_ml_btn').style.display = 'block';
			
			if (bop_35_db == 1) {
				document.getElementById('bop_35_db_rectangle').style.display = 'block';
			}
			if (bop_35_b == 1) {
				document.getElementById('bop_35_b_rectangle').style.display = 'block';
			}
			if (bop_35_mb == 1) {
				document.getElementById('bop_35_mb_rectangle').style.display = 'block';
			}
			if (bop_35_dl == 1) {
				document.getElementById('bop_35_dl_rectangle').style.display = 'block';
			}
			if (bop_35_l == 1) {
				document.getElementById('bop_35_l_rectangle').style.display = 'block';
			}
			if (bop_35_ml == 1) {
				document.getElementById('bop_35_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_35_db_btn').style.display = 'block';
			document.getElementById('pi_35_b_btn').style.display = 'block';
			document.getElementById('pi_35_mb_btn').style.display = 'block';

			document.getElementById('pi_35_dl_btn').style.display = 'block';
			document.getElementById('pi_35_l_btn').style.display = 'block';
			document.getElementById('pi_35_ml_btn').style.display = 'block';
			
			if (pi_35_db == 1) {
				document.getElementById('pi_35_db_rectangle').style.display = 'block';
			}
			if (pi_35_b == 1) {
				document.getElementById('pi_35_b_rectangle').style.display = 'block';
			}
			if (pi_35_mb == 1) {
				document.getElementById('pi_35_mb_rectangle').style.display = 'block';
			}
			if (pi_35_dl == 1) {
				document.getElementById('pi_35_dl_rectangle').style.display = 'block';
			}
			if (pi_35_l == 1) {
				document.getElementById('pi_35_l_rectangle').style.display = 'block';
			}
			if (pi_35_ml == 1) {
				document.getElementById('pi_35_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_35 == 1) {
			tooth_35 = 1;
			document.getElementById('tooth_line_35_b').style.display = 'none';
			document.getElementById('tooth_line_35_l').style.display = 'none';

			document.getElementById('mobility_35_txt').style.display = 'block';
			
			document.getElementById('note_35_txt').style.display = 'block';

			document.getElementById('implantat_35_btn').style.display = 'block';
			document.getElementById('implantat_35_tab').style.display = 'block';
			document.getElementById('implantat_35_b_image').style.display = 'block';
			document.getElementById('implantat_35_l_image').style.display = 'block';

			document.getElementById('gm_35_db_txt').style.display = 'block';
			document.getElementById('gm_35_b_txt').style.display = 'block';
			document.getElementById('gm_35_mb_txt').style.display = 'block';
			
			document.getElementById('pd_35_db_txt').style.display = 'block';
			document.getElementById('pd_35_b_txt').style.display = 'block';
			document.getElementById('pd_35_mb_txt').style.display = 'block';
			
			document.getElementById('gm_35_dl_txt').style.display = 'block';
			document.getElementById('gm_35_l_txt').style.display = 'block';
			document.getElementById('gm_35_ml_txt').style.display = 'block';
			
			document.getElementById('pd_35_dl_txt').style.display = 'block';
			document.getElementById('pd_35_l_txt').style.display = 'block';
			document.getElementById('pd_35_ml_txt').style.display = 'block';

			document.getElementById('polygon_35_b').style.display = 'block';
			document.getElementById('polyline_al_35_b').style.display = 'block';
			document.getElementById('polyline_gm_35_b').style.display = 'block';
			
			document.getElementById('polygon_35_l').style.display = 'block';
			document.getElementById('polyline_al_35_l').style.display = 'block';
			document.getElementById('polyline_gm_35_l').style.display = 'block';

            if (tooth_36 == 1 && tooth_35 == 1) {
				document.getElementById('polygon_inter_36_35_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_36_35_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_36_35_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_36_35_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_36_35_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_36_35_l').style.display = 'block';            
            }
            
            if (tooth_35 == 1 && tooth_34 == 1) {
				document.getElementById('polygon_inter_35_34_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_35_34_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_35_34_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_35_34_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_35_34_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_35_34_l').style.display = 'block';            
            }

			document.getElementById('bop_35_db_btn').style.display = 'block';
			document.getElementById('bop_35_b_btn').style.display = 'block';
			document.getElementById('bop_35_mb_btn').style.display = 'block';

			document.getElementById('bop_35_dl_btn').style.display = 'block';
			document.getElementById('bop_35_l_btn').style.display = 'block';
			document.getElementById('bop_35_ml_btn').style.display = 'block';
			
			document.getElementById('pi_35_db_btn').style.display = 'block';
			document.getElementById('pi_35_b_btn').style.display = 'block';
			document.getElementById('pi_35_mb_btn').style.display = 'block';

			document.getElementById('pi_35_dl_btn').style.display = 'block';
			document.getElementById('pi_35_l_btn').style.display = 'block';
			document.getElementById('pi_35_ml_btn').style.display = 'block';
			
			if (bop_35_db == 1) {
				document.getElementById('bop_35_db_rectangle').style.display = 'block';
			}
			if (bop_35_b == 1) {
				document.getElementById('bop_35_b_rectangle').style.display = 'block';
			}
			if (bop_35_mb == 1) {
				document.getElementById('bop_35_mb_rectangle').style.display = 'block';
			}
			if (bop_35_dl == 1) {
				document.getElementById('bop_35_dl_rectangle').style.display = 'block';
			}
			if (bop_35_l == 1) {
				document.getElementById('bop_35_l_rectangle').style.display = 'block';
			}
			if (bop_35_ml == 1) {
				document.getElementById('bop_35_ml_rectangle').style.display = 'block';
			}
			
			if (pi_35_db == 1) {
				document.getElementById('pi_35_db_rectangle').style.display = 'block';
			}
			if (pi_35_b == 1) {
				document.getElementById('pi_35_b_rectangle').style.display = 'block';
			}
			if (pi_35_mb == 1) {
				document.getElementById('pi_35_mb_rectangle').style.display = 'block';
			}
			if (pi_35_dl == 1) {
				document.getElementById('pi_35_dl_rectangle').style.display = 'block';
			}
			if (pi_35_l == 1) {
				document.getElementById('pi_35_l_rectangle').style.display = 'block';
			}
			if (pi_35_ml == 1) {
				document.getElementById('pi_35_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_35();
	}

	function toggle_implant_35() {
		if (Implantat_35 == 0) {
			Implantat_35 = 1;
			
			document.getElementById('implantat_35_b_image').style.display = 'block';
			document.getElementById('implantat_35_l_image').style.display = 'block';
			document.getElementById('implantat_35_tab').style.display = 'block';
		}
		else {
			Implantat_35 = 0;
			
			document.getElementById('implantat_35_b_image').style.display = 'none';
			document.getElementById('implantat_35_l_image').style.display = 'none';
			document.getElementById('implantat_35_tab').style.display = 'none';
		}
	}

	function toggle_bop_35_db() {
		if (bop_35_db == 0) {
			bop_35_db = 1;
			document.getElementById('bop_35_db_rectangle').style.display = 'block';
		}
		else {
			bop_35_db = 0;
			document.getElementById('bop_35_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_35_b() {
		if (bop_35_b == 0) {
			bop_35_b = 1;
			document.getElementById('bop_35_b_rectangle').style.display = 'block';
		}
		else {
			bop_35_b = 0;
			document.getElementById('bop_35_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_35_mb() {
		if (bop_35_mb == 0) {
			bop_35_mb = 1;
			document.getElementById('bop_35_mb_rectangle').style.display = 'block';
		}
		else {
			bop_35_mb = 0;
			document.getElementById('bop_35_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_35_db() {
		if (pi_35_db == 0) {
			pi_35_db = 1;
			document.getElementById('pi_35_db_rectangle').style.display = 'block';
		}
		else {
			pi_35_db = 0;
			document.getElementById('pi_35_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_35_b() {
		if (pi_35_b == 0) {
			pi_35_b = 1;
			document.getElementById('pi_35_b_rectangle').style.display = 'block';
		}
		else {
			pi_35_b = 0;
			document.getElementById('pi_35_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_35_mb() {
		if (pi_35_mb == 0) {
			pi_35_mb = 1;
			document.getElementById('pi_35_mb_rectangle').style.display = 'block';
		}
		else {
			pi_35_mb = 0;
			document.getElementById('pi_35_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_35_dl() {
		if (bop_35_dl == 0) {
			bop_35_dl = 1;
			document.getElementById('bop_35_dl_rectangle').style.display = 'block';
		}
		else {
			bop_35_dl = 0;
			document.getElementById('bop_35_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_35_l() {
		if (bop_35_l == 0) {
			bop_35_l = 1;
			document.getElementById('bop_35_l_rectangle').style.display = 'block';
		}
		else {
			bop_35_l = 0;
			document.getElementById('bop_35_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_35_ml() {
		if (bop_35_ml == 0) {
			bop_35_ml = 1;
			document.getElementById('bop_35_ml_rectangle').style.display = 'block';
		}
		else {
			bop_35_ml = 0;
			document.getElementById('bop_35_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_35_dl() {
		if (pi_35_dl == 0) {
			pi_35_dl = 1;
			document.getElementById('pi_35_dl_rectangle').style.display = 'block';
		}
		else {
			pi_35_dl = 0;
			document.getElementById('pi_35_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_35_l() {
		if (pi_35_l == 0) {
			pi_35_l = 1;
			document.getElementById('pi_35_l_rectangle').style.display = 'block';
		}
		else {
			pi_35_l = 0;
			document.getElementById('pi_35_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_35_ml() {
		if (pi_35_ml == 0) {
			pi_35_ml = 1;
			document.getElementById('pi_35_ml_rectangle').style.display = 'block';
		}
		else {
			pi_35_ml = 0;
			document.getElementById('pi_35_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_35() {
		if (tooth_35 == 1) {
			
		// Variablen aus dem Formular
			pd_35_db = document.forms[0]["pd_35_db"].value;
			pd_35_b = document.forms[0]["pd_35_b"].value;
			pd_35_mb = document.forms[0]["pd_35_mb"].value;

			if (document.forms[0]["pd_35_dl"].value > 3) {document.forms[0]["pd_35_dl"].style.color = 'red';} else {document.forms[0]["pd_35_dl"].style.color = 'black'};
			if (document.forms[0]["pd_35_l"].value > 3) {document.forms[0]["pd_35_l"].style.color = 'red';} else {document.forms[0]["pd_35_l"].style.color = 'black'};
			if (document.forms[0]["pd_35_ml"].value > 3) {document.forms[0]["pd_35_ml"].style.color = 'red';} else {document.forms[0]["pd_35_ml"].style.color = 'black'};
			
			gm_35_db = document.forms[0]["gm_35_db"].value;
			gm_35_b = document.forms[0]["gm_35_b"].value;
			gm_35_mb = document.forms[0]["gm_35_mb"].value;
			
			pd_35_dl = document.forms[0]["pd_35_dl"].value;
			pd_35_l = document.forms[0]["pd_35_l"].value;
			pd_35_ml = document.forms[0]["pd_35_ml"].value;

			if (document.forms[0]["pd_35_db"].value > 3) {document.forms[0]["pd_35_db"].style.color = 'red';} else {document.forms[0]["pd_35_db"].style.color = 'black'};
			if (document.forms[0]["pd_35_b"].value > 3) {document.forms[0]["pd_35_b"].style.color = 'red';} else {document.forms[0]["pd_35_b"].style.color = 'black'};
			if (document.forms[0]["pd_35_mb"].value > 3) {document.forms[0]["pd_35_mb"].style.color = 'red';} else {document.forms[0]["pd_35_mb"].style.color = 'black'};
			
			gm_35_dl = document.forms[0]["gm_35_dl"].value;
			gm_35_l = document.forms[0]["gm_35_l"].value;
			gm_35_ml = document.forms[0]["gm_35_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 35 (bukkal) in der Bitmap
			var x_db_35 = 864;							// distal 35
			var x_mb_35 = 845;							// mesial 35
			var x_b_35 = (x_db_35 + x_mb_35)/2;			// bukkal 35
			
		// Set der horizontalen Koordinaten von Zahn 35 (lingual) in der Bitmap
			var x_dl_35 = 868;							// distal 35
			var x_ml_35 = 845;							// mesial 35
			var x_l_35 = (x_dl_35 + x_ml_35)/2;			// lingual 35
			
		// Set der vertikalen Koordinaten von Zahn 35 (bukkal) aus dem Formular
			var y_gm_35_db = gm_UK_b - 6.05 * gm_35_db;	// Margo Gingivae distobukkal 35
			var y_gm_35_b = gm_UK_b - 6.05 * gm_35_b;	// Margo Gingivae bukkal 35
			var y_gm_35_mb = gm_UK_b - 6.05 * gm_35_mb;	// Margo Gingivae mesiobukkal 35
			var y_pd_35_db = 6.05 * pd_35_db;			// Sondierungstiefe distobukkal 35
			var y_pd_35_b = 6.05 * pd_35_b;				// Sondierungstiefe bukkal 35
			var y_pd_35_mb = 6.05 * pd_35_mb;			// Sondierungstiefe mesiobukkal 35
			
		// Set der vertikalen Koordinaten von Zahn 35 (lingual) aus dem Formular
			var y_gm_35_dl = gm_UK_l + 6.05 * gm_35_dl;	// Margo Gingivae distolingual 35
			var y_gm_35_l = gm_UK_l + 6.05 * gm_35_l;	// Margo Gingivae lingual 35
			var y_gm_35_ml = gm_UK_l + 6.05 * gm_35_ml;	// Margo Gingivae mesiolingual 35
			var y_pd_35_dl = 6.05 * pd_35_dl;			// Sondierungstiefe distolingual 35
			var y_pd_35_l = 6.05 * pd_35_l;				// Sondierungstiefe lingual 35
			var y_pd_35_ml = 6.05 * pd_35_ml;			// Sondierungstiefe mesiolingual 35
			
		// Berechnung des Attachmentniveaus 35 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_35_db = y_gm_35_db + y_pd_35_db;	// Attachmentniveau distobukkal 35
			var y_al_35_b = y_gm_35_b + y_pd_35_b;		// Attachmentniveau bukkal 35
			var y_al_35_mb = y_gm_35_mb + y_pd_35_mb;	// Attachmentniveau mesiobukkal 35
			
		// Berechnung des Attachmentniveaus 35 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_35_dl = y_gm_35_dl - y_pd_35_dl;	// Attachmentniveau distolingual 35
			var y_al_35_l = y_gm_35_l - y_pd_35_l;		// Attachmentniveau lingual 35
			var y_al_35_ml = y_gm_35_ml - y_pd_35_ml;	// Attachmentniveau mesiolingual 35

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[35].storeCoordinates(
				x_db_35, x_mb_35, x_dl_35, x_ml_35, x_b_35, x_l_35,
				y_gm_35_db, y_gm_35_b, y_gm_35_mb, y_pd_35_db, y_pd_35_b, y_pd_35_mb,
				y_gm_35_dl, y_gm_35_l, y_gm_35_ml, y_pd_35_dl, y_pd_35_l, y_pd_35_ml,
				y_al_35_db, y_al_35_b, y_al_35_mb, y_al_35_dl, y_al_35_l, y_al_35_ml
			);

		// Parodontaltasche 35 bukkal zeichnen
			var string = 
				x_db_35 + ", " + y_al_35_db + "  " + 
				x_b_35 + ", " + y_al_35_b + "  " + 
				x_mb_35 + ", " + y_al_35_mb + "  " + 
				x_mb_35 + ", " + y_gm_35_mb + "  " + 
				x_b_35 + ", " + y_gm_35_b + "  " + 
				x_db_35 + ", " + y_gm_35_db;
			document.getElementById("polygon_35_b").setAttribute("points", string);
		// Attachmentniveau 35 bukkal zeichnen
			var string = 
				x_db_35 + ", " + y_al_35_db + "  " + 
				x_b_35 + ", " + y_al_35_b + "  " + 
				x_mb_35 + ", " + y_al_35_mb;
			document.getElementById("polyline_al_35_b").setAttribute("points", string);
		// Margo Gingivae 35 bukkal zeichnen
			var string =
				x_db_35 + ", " + y_gm_35_db + "  " + 
				x_b_35 + ", " + y_gm_35_b + "  " + 
				x_mb_35 + ", " + y_gm_35_mb;
			document.getElementById("polyline_gm_35_b").setAttribute("points", string);

		// Parodontaltasche 35 lingual zeichnen
			var string = 
				x_dl_35 + ", " + y_al_35_dl + "  " + 
				x_l_35 + ", " + y_al_35_l + "  " + 
				x_ml_35 + ", " + y_al_35_ml + "  " + 
				x_ml_35 + ", " + y_gm_35_ml + "  " + 
				x_l_35 + ", " + y_gm_35_l + "  " + 
				x_dl_35 + ", " + y_gm_35_dl;
			document.getElementById("polygon_35_l").setAttribute("points", string);
		// Attachmentniveau 35 lingual zeichnen
			var string = 
				x_dl_35 + ", " + y_al_35_dl + "  " + 
				x_l_35 + ", " + y_al_35_l + "  " + 
				x_ml_35 + ", " + y_al_35_ml;
			document.getElementById("polyline_al_35_l").setAttribute("points", string);
		// Margo Gingivae 35 lingual zeichnen
			var string =
				x_dl_35 + ", " + y_gm_35_dl + "  " + 
				x_l_35 + ", " + y_gm_35_l + "  " + 
				x_ml_35 + ", " + y_gm_35_ml;
			document.getElementById("polyline_gm_35_l").setAttribute("points", string);
		}
        if (tooth_35 == 1 && tooth_34 == 1) {

            pd_34_db = document.forms[0]["pd_34_db"].value;
			gm_34_db = document.forms[0]["gm_34_db"].value;
			
			pd_34_dl = document.forms[0]["pd_34_dl"].value;
			gm_34_dl = document.forms[0]["gm_34_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 34 (bukkal) in der Bitmap
			var x_db_34 = 824;							// distal 34
			
		// Set der horizontalen Koordinaten von Zahn 34 (lingual) in der Bitmap
			var x_dl_34 = 827;							// distal 34
			
		// Set der vertikalen Koordinaten von Zahn 34 (bukkal) aus dem Formular
			var y_gm_34_db = gm_UK_b - 6.05 * gm_34_db;	// Margo Gingivae distobukkal 34
			var y_pd_34_db = 6.05 * pd_34_db;			// Sondierungstiefe distobukkal 34
			
		// Set der vertikalen Koordinaten von Zahn 34 (lingual) aus dem Formular
			var y_gm_34_dl = gm_UK_l + 6.05 * gm_34_dl;	// Margo Gingivae distolingual 34
			var y_pd_34_dl = 6.05 * pd_34_dl;			// Sondierungstiefe distolingual 34
			
		// Berechnung des Attachmentniveaus 34 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_34_db = y_gm_34_db + y_pd_34_db;	// Attachmentniveau distobukkal 34
			
		// Berechnung des Attachmentniveaus 34 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_34_dl = y_gm_34_dl - y_pd_34_dl;	// Attachmentniveau distolingual 34

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
        if (tooth_36 == 1 && tooth_35 == 1) {

            pd_36_mb = document.forms[0]["pd_36_mb"].value;
			gm_36_mb = document.forms[0]["gm_36_mb"].value;
			
			pd_36_ml = document.forms[0]["pd_36_ml"].value;
			gm_36_ml = document.forms[0]["gm_36_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 36 (bukkal) in der Bitmap
			var x_mb_36 = 887;							// mesial 36
			
		// Set der horizontalen Koordinaten von Zahn 36 (lingual) in der Bitmap
			var x_ml_36 = 887;							// mesial 36
			
		// Set der vertikalen Koordinaten von Zahn 36 (bukkal) aus dem Formular
			var y_gm_36_mb = gm_UK_b - 6.05 * gm_36_mb;	// Margo Gingivae mesiobukkal 36
			var y_pd_36_mb = 6.05 * pd_36_mb;			// Sondierungstiefe mesiobukkal 36
			
		// Set der vertikalen Koordinaten von Zahn 36 (lingual) aus dem Formular
			var y_gm_36_ml = gm_UK_l + 6.05 * gm_36_ml;	// Margo Gingivae mesiolingual 36
			var y_pd_36_ml = 6.05 * pd_36_ml;			// Sondierungstiefe mesiolingual 36
			
		// Berechnung des Attachmentniveaus 36 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_36_mb = y_gm_36_mb + y_pd_36_mb;	// Attachmentniveau mesiobukkal 36
			
		// Berechnung des Attachmentniveaus 36 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_36_ml = y_gm_36_ml - y_pd_36_ml;	// Attachmentniveau mesiolingual 36

		// Parodontaltasche inter_36_35 bukkal zeichnen
			var string = 
				x_mb_36 + ", " + y_al_36_mb + "  " + 
				x_db_35 + ", " + y_al_35_db + "  " + 
				x_db_35 + ", " + y_gm_35_db + "  " + 
				x_mb_36 + ", " + y_gm_36_mb;
			document.getElementById("polygon_inter_36_35_b").setAttribute("points", string);
		// Attachmentniveau inter_36_35 bukkal zeichnen
			var string = 
				x_mb_36 + ", " + y_al_36_mb + "  " + 
				x_db_35 + ", " + y_al_35_db;
			document.getElementById("polyline_al_inter_36_35_b").setAttribute("points", string);
		// Margo Gingivae inter_36_35 bukkal zeichnen
			var string =
				x_mb_36 + ", " + y_gm_36_mb + "  " + 
				x_db_35 + ", " + y_gm_35_db;
			document.getElementById("polyline_gm_inter_36_35_b").setAttribute("points", string);

        // Parodontaltasche inter_36_35 lingual zeichnen
			var string = 
				x_ml_36 + ", " + y_al_36_ml + "  " + 
				x_dl_35 + ", " + y_al_35_dl + "  " + 
				x_dl_35 + ", " + y_gm_35_dl + "  " + 
				x_ml_36 + ", " + y_gm_36_ml;
			document.getElementById("polygon_inter_36_35_l").setAttribute("points", string);
		// Attachmentniveau inter_36_35 lingual zeichnen
			var string = 
				x_ml_36 + ", " + y_al_36_ml + "  " + 
				x_dl_35 + ", " + y_al_35_dl;
			document.getElementById("polyline_al_inter_36_35_l").setAttribute("points", string);
		// Margo Gingivae inter_36_35 lingual zeichnen
			var string =
				x_ml_36 + ", " + y_gm_36_ml + "  " + 
				x_dl_35 + ", " + y_gm_35_dl;
			document.getElementById("polyline_gm_inter_36_35_l").setAttribute("points", string);
		}
	}