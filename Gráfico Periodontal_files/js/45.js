	// Definition der Variablen für das Formular
		var tooth_45 = 1;
		var Implantat_45 = 0;
		var bop_45_db = 0;
		var bop_45_b = 0;
		var bop_45_mb = 0;
		var pi_45_db = 0;
		var pi_45_b = 0;
		var pi_45_mb = 0;
		var bop_45_dl = 0;
		var bop_45_l = 0;
		var bop_45_ml = 0;
		var pi_45_dl = 0;
		var pi_45_l = 0;
		var pi_45_ml = 0;
		var gm_45_db = 0;
		var gm_45_b = 0;
		var gm_45_mb = 0;
		var pd_45_db = 0;
		var pd_45_b = 0;
		var pd_45_mb = 0;
		var gm_45_dl = 0;
		var gm_45_l = 0;
		var gm_45_ml = 0;
		var pd_45_dl = 0;
		var pd_45_l = 0;
		var pd_45_ml = 0;

	function clear_data_45() {
        if (tooth_45 == 1) {
			gm_45_db = 0;
			gm_45_b = 0;
			gm_45_mb = 0;
			pd_45_db = 0;
			pd_45_b = 0;
			pd_45_mb = 0;
	
				document.getElementById('gm_45_db_txt').value = 0;
				document.getElementById('gm_45_b_txt').value = 0;
				document.getElementById('gm_45_mb_txt').value = 0;
				
				document.getElementById('pd_45_db_txt').value = 0;
				document.getElementById('pd_45_b_txt').value = 0;
				document.getElementById('pd_45_mb_txt').value = 0;
			
				document.forms[0]["pd_45_db"].style.color = 'black'
				document.forms[0]["pd_45_b"].style.color = 'black'
				document.forms[0]["pd_45_mb"].style.color = 'black'
			
			gm_45_dl = 0;
			gm_45_l = 0;
			gm_45_ml = 0;
			pd_45_dl = 0;
			pd_45_l = 0;
			pd_45_ml = 0;

				document.getElementById('gm_45_dl_txt').value = 0;
				document.getElementById('gm_45_l_txt').value = 0;
				document.getElementById('gm_45_ml_txt').value = 0;
				
				document.getElementById('pd_45_dl_txt').value = 0;
				document.getElementById('pd_45_l_txt').value = 0;
				document.getElementById('pd_45_ml_txt').value = 0;

				document.forms[0]["pd_45_dl"].style.color = 'black'
				document.forms[0]["pd_45_l"].style.color = 'black'
				document.forms[0]["pd_45_ml"].style.color = 'black'
			
			change_probing_45();
			
			mobility_45 = 0;

				document.getElementById('mobility_45_txt').value = "0";

			note_45 = "";

				document.getElementById('note_45_txt').value = "";
	
			bop_45_db = 0;
			bop_45_b = 0;
			bop_45_mb = 0;
					
			bop_45_dl = 0;
			bop_45_l = 0;
			bop_45_ml = 0;
					
				document.getElementById('bop_45_db_rectangle').style.display = 'none';
				document.getElementById('bop_45_b_rectangle').style.display = 'none';
				document.getElementById('bop_45_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_45_dl_rectangle').style.display = 'none';
				document.getElementById('bop_45_l_rectangle').style.display = 'none';
				document.getElementById('bop_45_ml_rectangle').style.display = 'none';
				
			pi_45_db = 0;
			pi_45_b = 0;
			pi_45_mb = 0;
					
			pi_45_dl = 0;
			pi_45_l = 0;
			pi_45_ml = 0;

				document.getElementById('pi_45_db_rectangle').style.display = 'none';
				document.getElementById('pi_45_b_rectangle').style.display = 'none';
				document.getElementById('pi_45_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_45_dl_rectangle').style.display = 'none';
				document.getElementById('pi_45_l_rectangle').style.display = 'none';
				document.getElementById('pi_45_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_45() {
		if (tooth_45 === 1) {
			tooth_45 = 0;
			document.getElementById('tooth_line_45_b').style.display = 'block';
			document.getElementById('tooth_line_45_l').style.display = 'block';
			
			document.getElementById('mobility_45_txt').style.display = 'none';
			
			document.getElementById('implantat_45_btn').style.display = 'none';
			document.getElementById('implantat_45_tab').style.display = 'none';
			document.getElementById('implantat_45_b_image').style.display = 'none';
			document.getElementById('implantat_45_l_image').style.display = 'none';
			
			document.getElementById('gm_45_db_txt').style.display = 'none';
			document.getElementById('gm_45_b_txt').style.display = 'none';
			document.getElementById('gm_45_mb_txt').style.display = 'none';
			
			document.getElementById('pd_45_db_txt').style.display = 'none';
			document.getElementById('pd_45_b_txt').style.display = 'none';
			document.getElementById('pd_45_mb_txt').style.display = 'none';
			
			document.getElementById('gm_45_dl_txt').style.display = 'none';
			document.getElementById('gm_45_l_txt').style.display = 'none';
			document.getElementById('gm_45_ml_txt').style.display = 'none';
			
			document.getElementById('pd_45_dl_txt').style.display = 'none';
			document.getElementById('pd_45_l_txt').style.display = 'none';
			document.getElementById('pd_45_ml_txt').style.display = 'none';
			
			document.getElementById('bop_45_db_rectangle').style.display = 'none';
			document.getElementById('bop_45_b_rectangle').style.display = 'none';
			document.getElementById('bop_45_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_45_dl_rectangle').style.display = 'none';
			document.getElementById('bop_45_l_rectangle').style.display = 'none';
			document.getElementById('bop_45_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_45_db_btn').style.display = 'none';
			document.getElementById('bop_45_b_btn').style.display = 'none';
			document.getElementById('bop_45_mb_btn').style.display = 'none';
			
			document.getElementById('bop_45_dl_btn').style.display = 'none';
			document.getElementById('bop_45_l_btn').style.display = 'none';
			document.getElementById('bop_45_ml_btn').style.display = 'none';
			
			document.getElementById('pi_45_db_rectangle').style.display = 'none';
			document.getElementById('pi_45_b_rectangle').style.display = 'none';
			document.getElementById('pi_45_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_45_dl_rectangle').style.display = 'none';
			document.getElementById('pi_45_l_rectangle').style.display = 'none';
			document.getElementById('pi_45_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_45_db_btn').style.display = 'none';
			document.getElementById('pi_45_b_btn').style.display = 'none';
			document.getElementById('pi_45_mb_btn').style.display = 'none';
			
			document.getElementById('pi_45_dl_btn').style.display = 'none';
			document.getElementById('pi_45_l_btn').style.display = 'none';
			document.getElementById('pi_45_ml_btn').style.display = 'none';
			
			
			document.getElementById('polygon_45_b').style.display = 'none';
			document.getElementById('polyline_al_45_b').style.display = 'none';
			document.getElementById('polyline_gm_45_b').style.display = 'none';
			
			document.getElementById('polygon_45_l').style.display = 'none';
			document.getElementById('polyline_al_45_l').style.display = 'none';
			document.getElementById('polyline_gm_45_l').style.display = 'none';
			
			document.getElementById('polygon_inter_46_45_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_46_45_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_46_45_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_46_45_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_46_45_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_46_45_l').style.display = 'none';            
            
			document.getElementById('polygon_inter_45_44_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_45_44_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_45_44_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_45_44_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_45_44_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_45_44_l').style.display = 'none';            
			
			document.getElementById('note_45_txt').style.display = 'none';
		}
		else if (Implantat_45 !== 1) {
			tooth_45 = 1;
			document.getElementById('tooth_line_45_b').style.display = 'none';
			document.getElementById('tooth_line_45_l').style.display = 'none';

			document.getElementById('mobility_45_txt').style.display = 'block';

			document.getElementById('implantat_45_btn').style.display = 'block';

			document.getElementById('gm_45_db_txt').style.display = 'block';
			document.getElementById('gm_45_b_txt').style.display = 'block';
			document.getElementById('gm_45_mb_txt').style.display = 'block';
			
			document.getElementById('pd_45_db_txt').style.display = 'block';
			document.getElementById('pd_45_b_txt').style.display = 'block';
			document.getElementById('pd_45_mb_txt').style.display = 'block';
			
			document.getElementById('gm_45_dl_txt').style.display = 'block';
			document.getElementById('gm_45_l_txt').style.display = 'block';
			document.getElementById('gm_45_ml_txt').style.display = 'block';
			
			document.getElementById('pd_45_dl_txt').style.display = 'block';
			document.getElementById('pd_45_l_txt').style.display = 'block';
			document.getElementById('pd_45_ml_txt').style.display = 'block';
			
			document.getElementById('note_45_txt').style.display = 'block';

			document.getElementById('polygon_45_b').style.display = 'block';
			document.getElementById('polyline_al_45_b').style.display = 'block';
			document.getElementById('polyline_gm_45_b').style.display = 'block';
			
			document.getElementById('polygon_45_l').style.display = 'block';
			document.getElementById('polyline_al_45_l').style.display = 'block';
			document.getElementById('polyline_gm_45_l').style.display = 'block';

            if (tooth_46 == 1 && tooth_45 == 1) {
				document.getElementById('polygon_inter_46_45_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_46_45_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_46_45_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_46_45_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_46_45_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_46_45_l').style.display = 'block';            
            }
            
            if (tooth_45 == 1 && tooth_44 == 1) {
				document.getElementById('polygon_inter_45_44_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_45_44_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_45_44_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_45_44_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_45_44_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_45_44_l').style.display = 'block';            
            }

			document.getElementById('bop_45_db_btn').style.display = 'block';
			document.getElementById('bop_45_b_btn').style.display = 'block';
			document.getElementById('bop_45_mb_btn').style.display = 'block';

			document.getElementById('bop_45_dl_btn').style.display = 'block';
			document.getElementById('bop_45_l_btn').style.display = 'block';
			document.getElementById('bop_45_ml_btn').style.display = 'block';
			
			if (bop_45_db == 1) {
				document.getElementById('bop_45_db_rectangle').style.display = 'block';
			}
			if (bop_45_b == 1) {
				document.getElementById('bop_45_b_rectangle').style.display = 'block';
			}
			if (bop_45_mb == 1) {
				document.getElementById('bop_45_mb_rectangle').style.display = 'block';
			}
			if (bop_45_dl == 1) {
				document.getElementById('bop_45_dl_rectangle').style.display = 'block';
			}
			if (bop_45_l == 1) {
				document.getElementById('bop_45_l_rectangle').style.display = 'block';
			}
			if (bop_45_ml == 1) {
				document.getElementById('bop_45_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_45_db_btn').style.display = 'block';
			document.getElementById('pi_45_b_btn').style.display = 'block';
			document.getElementById('pi_45_mb_btn').style.display = 'block';

			document.getElementById('pi_45_dl_btn').style.display = 'block';
			document.getElementById('pi_45_l_btn').style.display = 'block';
			document.getElementById('pi_45_ml_btn').style.display = 'block';
			
			if (pi_45_db == 1) {
				document.getElementById('pi_45_db_rectangle').style.display = 'block';
			}
			if (pi_45_b == 1) {
				document.getElementById('pi_45_b_rectangle').style.display = 'block';
			}
			if (pi_45_mb == 1) {
				document.getElementById('pi_45_mb_rectangle').style.display = 'block';
			}
			if (pi_45_dl == 1) {
				document.getElementById('pi_45_dl_rectangle').style.display = 'block';
			}
			if (pi_45_l == 1) {
				document.getElementById('pi_45_l_rectangle').style.display = 'block';
			}
			if (pi_45_ml == 1) {
				document.getElementById('pi_45_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_45 == 1) {
			tooth_45 = 1;
			document.getElementById('tooth_line_45_b').style.display = 'none';
			document.getElementById('tooth_line_45_l').style.display = 'none';

			document.getElementById('mobility_45_txt').style.display = 'block';
			
			document.getElementById('note_45_txt').style.display = 'block';

			document.getElementById('implantat_45_btn').style.display = 'block';
			document.getElementById('implantat_45_tab').style.display = 'block';
			document.getElementById('implantat_45_b_image').style.display = 'block';
			document.getElementById('implantat_45_l_image').style.display = 'block';

			document.getElementById('gm_45_db_txt').style.display = 'block';
			document.getElementById('gm_45_b_txt').style.display = 'block';
			document.getElementById('gm_45_mb_txt').style.display = 'block';
			
			document.getElementById('pd_45_db_txt').style.display = 'block';
			document.getElementById('pd_45_b_txt').style.display = 'block';
			document.getElementById('pd_45_mb_txt').style.display = 'block';
			
			document.getElementById('gm_45_dl_txt').style.display = 'block';
			document.getElementById('gm_45_l_txt').style.display = 'block';
			document.getElementById('gm_45_ml_txt').style.display = 'block';
			
			document.getElementById('pd_45_dl_txt').style.display = 'block';
			document.getElementById('pd_45_l_txt').style.display = 'block';
			document.getElementById('pd_45_ml_txt').style.display = 'block';

			document.getElementById('polygon_45_b').style.display = 'block';
			document.getElementById('polyline_al_45_b').style.display = 'block';
			document.getElementById('polyline_gm_45_b').style.display = 'block';
			
			document.getElementById('polygon_45_l').style.display = 'block';
			document.getElementById('polyline_al_45_l').style.display = 'block';
			document.getElementById('polyline_gm_45_l').style.display = 'block';

            if (tooth_46 == 1 && tooth_45 == 1) {
				document.getElementById('polygon_inter_46_45_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_46_45_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_46_45_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_46_45_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_46_45_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_46_45_l').style.display = 'block';            
            }
            
            if (tooth_45 == 1 && tooth_44 == 1) {
				document.getElementById('polygon_inter_45_44_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_45_44_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_45_44_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_45_44_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_45_44_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_45_44_l').style.display = 'block';            
            }
            
			document.getElementById('bop_45_db_btn').style.display = 'block';
			document.getElementById('bop_45_b_btn').style.display = 'block';
			document.getElementById('bop_45_mb_btn').style.display = 'block';

			document.getElementById('bop_45_dl_btn').style.display = 'block';
			document.getElementById('bop_45_l_btn').style.display = 'block';
			document.getElementById('bop_45_ml_btn').style.display = 'block';
			
			document.getElementById('pi_45_db_btn').style.display = 'block';
			document.getElementById('pi_45_b_btn').style.display = 'block';
			document.getElementById('pi_45_mb_btn').style.display = 'block';

			document.getElementById('pi_45_dl_btn').style.display = 'block';
			document.getElementById('pi_45_l_btn').style.display = 'block';
			document.getElementById('pi_45_ml_btn').style.display = 'block';
			
			if (bop_45_db == 1) {
				document.getElementById('bop_45_db_rectangle').style.display = 'block';
			}
			if (bop_45_b == 1) {
				document.getElementById('bop_45_b_rectangle').style.display = 'block';
			}
			if (bop_45_mb == 1) {
				document.getElementById('bop_45_mb_rectangle').style.display = 'block';
			}
			if (bop_45_dl == 1) {
				document.getElementById('bop_45_dl_rectangle').style.display = 'block';
			}
			if (bop_45_l == 1) {
				document.getElementById('bop_45_l_rectangle').style.display = 'block';
			}
			if (bop_45_ml == 1) {
				document.getElementById('bop_45_ml_rectangle').style.display = 'block';
			}
			
			if (pi_45_db == 1) {
				document.getElementById('pi_45_db_rectangle').style.display = 'block';
			}
			if (pi_45_b == 1) {
				document.getElementById('pi_45_b_rectangle').style.display = 'block';
			}
			if (pi_45_mb == 1) {
				document.getElementById('pi_45_mb_rectangle').style.display = 'block';
			}
			if (pi_45_dl == 1) {
				document.getElementById('pi_45_dl_rectangle').style.display = 'block';
			}
			if (pi_45_l == 1) {
				document.getElementById('pi_45_l_rectangle').style.display = 'block';
			}
			if (pi_45_ml == 1) {
				document.getElementById('pi_45_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_45();
	}
	
	function toggle_implant_45() {
		if (Implantat_45 == 0) {
			Implantat_45 = 1;
			
			document.getElementById('implantat_45_b_image').style.display = 'block';
			document.getElementById('implantat_45_l_image').style.display = 'block';
			document.getElementById('implantat_45_tab').style.display = 'block';
		}
		else {
			Implantat_45 = 0;
			
			document.getElementById('implantat_45_b_image').style.display = 'none';
			document.getElementById('implantat_45_l_image').style.display = 'none';
			document.getElementById('implantat_45_tab').style.display = 'none';
		}
	}

	function toggle_bop_45_db() {
		if (bop_45_db == 0) {
			bop_45_db = 1;
			document.getElementById('bop_45_db_rectangle').style.display = 'block';
		}
		else {
			bop_45_db = 0;
			document.getElementById('bop_45_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_45_b() {
		if (bop_45_b == 0) {
			bop_45_b = 1;
			document.getElementById('bop_45_b_rectangle').style.display = 'block';
		}
		else {
			bop_45_b = 0;
			document.getElementById('bop_45_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_45_mb() {
		if (bop_45_mb == 0) {
			bop_45_mb = 1;
			document.getElementById('bop_45_mb_rectangle').style.display = 'block';
		}
		else {
			bop_45_mb = 0;
			document.getElementById('bop_45_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_45_db() {
		if (pi_45_db == 0) {
			pi_45_db = 1;
			document.getElementById('pi_45_db_rectangle').style.display = 'block';
		}
		else {
			pi_45_db = 0;
			document.getElementById('pi_45_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_45_b() {
		if (pi_45_b == 0) {
			pi_45_b = 1;
			document.getElementById('pi_45_b_rectangle').style.display = 'block';
		}
		else {
			pi_45_b = 0;
			document.getElementById('pi_45_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_45_mb() {
		if (pi_45_mb == 0) {
			pi_45_mb = 1;
			document.getElementById('pi_45_mb_rectangle').style.display = 'block';
		}
		else {
			pi_45_mb = 0;
			document.getElementById('pi_45_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_45_dl() {
		if (bop_45_dl == 0) {
			bop_45_dl = 1;
			document.getElementById('bop_45_dl_rectangle').style.display = 'block';
		}
		else {
			bop_45_dl = 0;
			document.getElementById('bop_45_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_45_l() {
		if (bop_45_l == 0) {
			bop_45_l = 1;
			document.getElementById('bop_45_l_rectangle').style.display = 'block';
		}
		else {
			bop_45_l = 0;
			document.getElementById('bop_45_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_45_ml() {
		if (bop_45_ml == 0) {
			bop_45_ml = 1;
			document.getElementById('bop_45_ml_rectangle').style.display = 'block';
		}
		else {
			bop_45_ml = 0;
			document.getElementById('bop_45_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_45_dl() {
		if (pi_45_dl == 0) {
			pi_45_dl = 1;
			document.getElementById('pi_45_dl_rectangle').style.display = 'block';
		}
		else {
			pi_45_dl = 0;
			document.getElementById('pi_45_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_45_l() {
		if (pi_45_l == 0) {
			pi_45_l = 1;
			document.getElementById('pi_45_l_rectangle').style.display = 'block';
		}
		else {
			pi_45_l = 0;
			document.getElementById('pi_45_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_45_ml() {
		if (pi_45_ml == 0) {
			pi_45_ml = 1;
			document.getElementById('pi_45_ml_rectangle').style.display = 'block';
		}
		else {
			pi_45_ml = 0;
			document.getElementById('pi_45_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_45() {
		if (tooth_45 == 1) {
			
		// Variablen aus dem Formular
			pd_45_db = document.forms[0]["pd_45_db"].value;
			pd_45_b = document.forms[0]["pd_45_b"].value;
			pd_45_mb = document.forms[0]["pd_45_mb"].value;

			if (document.forms[0]["pd_45_dl"].value > 3) {document.forms[0]["pd_45_dl"].style.color = 'red';} else {document.forms[0]["pd_45_dl"].style.color = 'black'};
			if (document.forms[0]["pd_45_l"].value > 3) {document.forms[0]["pd_45_l"].style.color = 'red';} else {document.forms[0]["pd_45_l"].style.color = 'black'};
			if (document.forms[0]["pd_45_ml"].value > 3) {document.forms[0]["pd_45_ml"].style.color = 'red';} else {document.forms[0]["pd_45_ml"].style.color = 'black'};
			
			gm_45_db = document.forms[0]["gm_45_db"].value;
			gm_45_b = document.forms[0]["gm_45_b"].value;
			gm_45_mb = document.forms[0]["gm_45_mb"].value;
			
			pd_45_dl = document.forms[0]["pd_45_dl"].value;
			pd_45_l = document.forms[0]["pd_45_l"].value;
			pd_45_ml = document.forms[0]["pd_45_ml"].value;

			if (document.forms[0]["pd_45_db"].value > 3) {document.forms[0]["pd_45_db"].style.color = 'red';} else {document.forms[0]["pd_45_db"].style.color = 'black'};
			if (document.forms[0]["pd_45_b"].value > 3) {document.forms[0]["pd_45_b"].style.color = 'red';} else {document.forms[0]["pd_45_b"].style.color = 'black'};
			if (document.forms[0]["pd_45_mb"].value > 3) {document.forms[0]["pd_45_mb"].style.color = 'red';} else {document.forms[0]["pd_45_mb"].style.color = 'black'};
			
			gm_45_dl = document.forms[0]["gm_45_dl"].value;
			gm_45_l = document.forms[0]["gm_45_l"].value;
			gm_45_ml = document.forms[0]["gm_45_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 45 (bukkal) in der Bitmap
			var x_db_45 = 492;							// distal 45
			var x_mb_45 = 513;							// mesial 45
			var x_b_45 = (x_db_45 + x_mb_45)/2;			// bukkal 45
			
		// Set der horizontalen Koordinaten von Zahn 45 (lingual) in der Bitmap
			var x_dl_45 = 489;							// distal 45
			var x_ml_45 = 513;							// mesial 45
			var x_l_45 = (x_dl_45 + x_ml_45)/2;			// lingual 45
			
		// Set der vertikalen Koordinaten von Zahn 45 (bukkal) aus dem Formular
			var y_gm_45_db = gm_UK_b - 6.05 * gm_45_db;	// Margo Gingivae distobukkal 45
			var y_gm_45_b = gm_UK_b - 6.05 * gm_45_b;	// Margo Gingivae bukkal 45
			var y_gm_45_mb = gm_UK_b - 6.05 * gm_45_mb;	// Margo Gingivae mesiobukkal 45
			var y_pd_45_db = 6.05 * pd_45_db;			// Sondierungstiefe distobukkal 45
			var y_pd_45_b = 6.05 * pd_45_b;				// Sondierungstiefe bukkal 45
			var y_pd_45_mb = 6.05 * pd_45_mb;			// Sondierungstiefe mesiobukkal 45
			
		// Set der vertikalen Koordinaten von Zahn 45 (lingual) aus dem Formular
			var y_gm_45_dl = gm_UK_l + 6.05 * gm_45_dl;	// Margo Gingivae distolingual 45
			var y_gm_45_l = gm_UK_l + 6.05 * gm_45_l;	// Margo Gingivae lingual 45
			var y_gm_45_ml = gm_UK_l + 6.05 * gm_45_ml;	// Margo Gingivae mesiolingual 45
			var y_pd_45_dl = 6.05 * pd_45_dl;			// Sondierungstiefe distolingual 45
			var y_pd_45_l = 6.05 * pd_45_l;				// Sondierungstiefe lingual 45
			var y_pd_45_ml = 6.05 * pd_45_ml;			// Sondierungstiefe mesiolingual 45
			
		// Berechnung des Attachmentniveaus 45 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_45_db = y_gm_45_db + y_pd_45_db;	// Attachmentniveau distobukkal 45
			var y_al_45_b = y_gm_45_b + y_pd_45_b;		// Attachmentniveau bukkal 45
			var y_al_45_mb = y_gm_45_mb + y_pd_45_mb;	// Attachmentniveau mesiobukkal 45
			
		// Berechnung des Attachmentniveaus 45 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_45_dl = y_gm_45_dl - y_pd_45_dl;	// Attachmentniveau distolingual 45
			var y_al_45_l = y_gm_45_l - y_pd_45_l;		// Attachmentniveau lingual 45
			var y_al_45_ml = y_gm_45_ml - y_pd_45_ml;	// Attachmentniveau mesiolingual 45

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[45].storeCoordinates(
				x_db_45, x_mb_45, x_dl_45, x_ml_45, x_b_45, x_l_45,
				y_gm_45_db, y_gm_45_b, y_gm_45_mb, y_pd_45_db, y_pd_45_b, y_pd_45_mb,
				y_gm_45_dl, y_gm_45_l, y_gm_45_ml, y_pd_45_dl, y_pd_45_l, y_pd_45_ml,
				y_al_45_db, y_al_45_b, y_al_45_mb, y_al_45_dl, y_al_45_l, y_al_45_ml
			);

		// Parodontaltasche 45 bukkal zeichnen
			var string = 
				x_db_45 + ", " + y_al_45_db + "  " + 
				x_b_45 + ", " + y_al_45_b + "  " + 
				x_mb_45 + ", " + y_al_45_mb + "  " + 
				x_mb_45 + ", " + y_gm_45_mb + "  " + 
				x_b_45 + ", " + y_gm_45_b + "  " + 
				x_db_45 + ", " + y_gm_45_db;
			document.getElementById("polygon_45_b").setAttribute("points", string);
		// Attachmentniveau 45 bukkal zeichnen
			var string = 
				x_db_45 + ", " + y_al_45_db + "  " + 
				x_b_45 + ", " + y_al_45_b + "  " + 
				x_mb_45 + ", " + y_al_45_mb;
			document.getElementById("polyline_al_45_b").setAttribute("points", string);
		// Margo Gingivae 45 bukkal zeichnen
			var string =
				x_db_45 + ", " + y_gm_45_db + "  " + 
				x_b_45 + ", " + y_gm_45_b + "  " + 
				x_mb_45 + ", " + y_gm_45_mb;
			document.getElementById("polyline_gm_45_b").setAttribute("points", string);

		// Parodontaltasche 45 lingual zeichnen
			var string = 
				x_dl_45 + ", " + y_al_45_dl + "  " + 
				x_l_45 + ", " + y_al_45_l + "  " + 
				x_ml_45 + ", " + y_al_45_ml + "  " + 
				x_ml_45 + ", " + y_gm_45_ml + "  " + 
				x_l_45 + ", " + y_gm_45_l + "  " + 
				x_dl_45 + ", " + y_gm_45_dl;
			document.getElementById("polygon_45_l").setAttribute("points", string);
		// Attachmentniveau 45 lingual zeichnen
			var string = 
				x_dl_45 + ", " + y_al_45_dl + "  " + 
				x_l_45 + ", " + y_al_45_l + "  " + 
				x_ml_45 + ", " + y_al_45_ml;
			document.getElementById("polyline_al_45_l").setAttribute("points", string);
		// Margo Gingivae 45 lingual zeichnen
			var string =
				x_dl_45 + ", " + y_gm_45_dl + "  " + 
				x_l_45 + ", " + y_gm_45_l + "  " + 
				x_ml_45 + ", " + y_gm_45_ml;
			document.getElementById("polyline_gm_45_l").setAttribute("points", string);
		}
        if (tooth_45 == 1 && tooth_44 == 1) {

            pd_44_db = document.forms[0]["pd_44_db"].value;
			gm_44_db = document.forms[0]["gm_44_db"].value;
			
			pd_44_dl = document.forms[0]["pd_44_dl"].value;
			gm_44_dl = document.forms[0]["gm_44_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 44 (bukkal) in der Bitmap
			var x_db_44 = 533;							// distal 44
			
		// Set der horizontalen Koordinaten von Zahn 44 (lingual) in der Bitmap
			var x_dl_44 = 531;							// distal 44
			
		// Set der vertikalen Koordinaten von Zahn 44 (bukkal) aus dem Formular
			var y_gm_44_db = gm_UK_b - 6.05 * gm_44_db;	// Margo Gingivae distobukkal 44
			var y_pd_44_db = 6.05 * pd_44_db;			// Sondierungstiefe distobukkal 44
			
		// Set der vertikalen Koordinaten von Zahn 44 (lingual) aus dem Formular
			var y_gm_44_dl = gm_UK_l + 6.05 * gm_44_dl;	// Margo Gingivae distolingual 44
			var y_pd_44_dl = 6.05 * pd_44_dl;			// Sondierungstiefe distolingual 44
			
		// Berechnung des Attachmentniveaus 44 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_44_db = y_gm_44_db + y_pd_44_db;	// Attachmentniveau distobukkal 44
			
		// Berechnung des Attachmentniveaus 44 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_44_dl = y_gm_44_dl - y_pd_44_dl;	// Attachmentniveau distolingual 44

		// Parodontaltasche inter_45_44 bukkal zeichnen
			var string = 
				x_mb_45 + ", " + y_al_45_mb + "  " + 
				x_db_44 + ", " + y_al_44_db + "  " + 
				x_db_44 + ", " + y_gm_44_db + "  " + 
				x_mb_45 + ", " + y_gm_45_mb;
			document.getElementById("polygon_inter_45_44_b").setAttribute("points", string);
		// Attachmentniveau inter_45_44 bukkal zeichnen
			var string = 
				x_mb_45 + ", " + y_al_45_mb + "  " + 
				x_db_44 + ", " + y_al_44_db;
			document.getElementById("polyline_al_inter_45_44_b").setAttribute("points", string);
		// Margo Gingivae inter_45_44 bukkal zeichnen
			var string =
				x_mb_45 + ", " + y_gm_45_mb + "  " + 
				x_db_44 + ", " + y_gm_44_db;
			document.getElementById("polyline_gm_inter_45_44_b").setAttribute("points", string);

        // Parodontaltasche inter_45_44 lingual zeichnen
			var string = 
				x_ml_45 + ", " + y_al_45_ml + "  " + 
				x_dl_44 + ", " + y_al_44_dl + "  " + 
				x_dl_44 + ", " + y_gm_44_dl + "  " + 
				x_ml_45 + ", " + y_gm_45_ml;
			document.getElementById("polygon_inter_45_44_l").setAttribute("points", string);
		// Attachmentniveau inter_45_44 lingual zeichnen
			var string = 
				x_ml_45 + ", " + y_al_45_ml + "  " + 
				x_dl_44 + ", " + y_al_44_dl;
			document.getElementById("polyline_al_inter_45_44_l").setAttribute("points", string);
		// Margo Gingivae inter_45_44 lingual zeichnen
			var string =
				x_ml_45 + ", " + y_gm_45_ml + "  " + 
				x_dl_44 + ", " + y_gm_44_dl;
			document.getElementById("polyline_gm_inter_45_44_l").setAttribute("points", string);
		}
        if (tooth_46 == 1 && tooth_45 == 1) {

            pd_46_mb = document.forms[0]["pd_46_mb"].value;
			gm_46_mb = document.forms[0]["gm_46_mb"].value;
			
			pd_46_ml = document.forms[0]["pd_46_ml"].value;
			gm_46_ml = document.forms[0]["gm_46_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
			var x_mb_46 = 469;							// mesial 46
			
		// Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
			var x_ml_46 = 469;							// mesial 46
			
		// Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
			var y_gm_46_mb = gm_UK_b - 6.05 * gm_46_mb;	// Margo Gingivae mesiobukkal 46
			var y_pd_46_mb = 6.05 * pd_46_mb;			// Sondierungstiefe mesiobukkal 46
			
		// Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
			var y_gm_46_ml = gm_UK_l + 6.05 * gm_46_ml;	// Margo Gingivae mesiolingual 46
			var y_pd_46_ml = 6.05 * pd_46_ml;			// Sondierungstiefe mesiolingual 46
			
		// Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_46_mb = y_gm_46_mb + y_pd_46_mb;	// Attachmentniveau mesiobukkal 46
			
		// Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_46_ml = y_gm_46_ml - y_pd_46_ml;	// Attachmentniveau mesiolingual 46

		// Parodontaltasche inter_46_45 bukkal zeichnen
			var string = 
				x_mb_46 + ", " + y_al_46_mb + "  " + 
				x_db_45 + ", " + y_al_45_db + "  " + 
				x_db_45 + ", " + y_gm_45_db + "  " + 
				x_mb_46 + ", " + y_gm_46_mb;
			document.getElementById("polygon_inter_46_45_b").setAttribute("points", string);
		// Attachmentniveau inter_46_45 bukkal zeichnen
			var string = 
				x_mb_46 + ", " + y_al_46_mb + "  " + 
				x_db_45 + ", " + y_al_45_db;
			document.getElementById("polyline_al_inter_46_45_b").setAttribute("points", string);
		// Margo Gingivae inter_46_45 bukkal zeichnen
			var string =
				x_mb_46 + ", " + y_gm_46_mb + "  " + 
				x_db_45 + ", " + y_gm_45_db;
			document.getElementById("polyline_gm_inter_46_45_b").setAttribute("points", string);

        // Parodontaltasche inter_46_45 lingual zeichnen
			var string = 
				x_ml_46 + ", " + y_al_46_ml + "  " + 
				x_dl_45 + ", " + y_al_45_dl + "  " + 
				x_dl_45 + ", " + y_gm_45_dl + "  " + 
				x_ml_46 + ", " + y_gm_46_ml;
			document.getElementById("polygon_inter_46_45_l").setAttribute("points", string);
		// Attachmentniveau inter_46_45 lingual zeichnen
			var string = 
				x_ml_46 + ", " + y_al_46_ml + "  " + 
				x_dl_45 + ", " + y_al_45_dl;
			document.getElementById("polyline_al_inter_46_45_l").setAttribute("points", string);
		// Margo Gingivae inter_46_45 lingual zeichnen
			var string =
				x_ml_46 + ", " + y_gm_46_ml + "  " + 
				x_dl_45 + ", " + y_gm_45_dl;
			document.getElementById("polyline_gm_inter_46_45_l").setAttribute("points", string);
		}
	}