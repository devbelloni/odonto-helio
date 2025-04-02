	// Definition der Variablen für das Formular
		var tooth_43 = 1;
		var Implantat_43 = 0;
		var bop_43_db = 0;
		var bop_43_b = 0;
		var bop_43_mb = 0;
		var pi_43_db = 0;
		var pi_43_b = 0;
		var pi_43_mb = 0;
		var bop_43_dl = 0;
		var bop_43_l = 0;
		var bop_43_ml = 0;
		var pi_43_dl = 0;
		var pi_43_l = 0;
		var pi_43_ml = 0;
		var gm_43_db = 0;
		var gm_43_b = 0;
		var gm_43_mb = 0;
		var pd_43_db = 0;
		var pd_43_b = 0;
		var pd_43_mb = 0;
		var gm_43_dl = 0;
		var gm_43_l = 0;
		var gm_43_ml = 0;
		var pd_43_dl = 0;
		var pd_43_l = 0;
		var pd_43_ml = 0;

	function clear_data_43() {
        if (tooth_43 == 1) {
			gm_43_db = 0;
			gm_43_b = 0;
			gm_43_mb = 0;
			pd_43_db = 0;
			pd_43_b = 0;
			pd_43_mb = 0;
	
				document.getElementById('gm_43_db_txt').value = 0;
				document.getElementById('gm_43_b_txt').value = 0;
				document.getElementById('gm_43_mb_txt').value = 0;
				
				document.getElementById('pd_43_db_txt').value = 0;
				document.getElementById('pd_43_b_txt').value = 0;
				document.getElementById('pd_43_mb_txt').value = 0;
			
				document.forms[0]["pd_43_db"].style.color = 'black'
				document.forms[0]["pd_43_b"].style.color = 'black'
				document.forms[0]["pd_43_mb"].style.color = 'black'
			
			gm_43_dl = 0;
			gm_43_l = 0;
			gm_43_ml = 0;
			pd_43_dl = 0;
			pd_43_l = 0;
			pd_43_ml = 0;

				document.getElementById('gm_43_dl_txt').value = 0;
				document.getElementById('gm_43_l_txt').value = 0;
				document.getElementById('gm_43_ml_txt').value = 0;
				
				document.getElementById('pd_43_dl_txt').value = 0;
				document.getElementById('pd_43_l_txt').value = 0;
				document.getElementById('pd_43_ml_txt').value = 0;

				document.forms[0]["pd_43_dl"].style.color = 'black'
				document.forms[0]["pd_43_l"].style.color = 'black'
				document.forms[0]["pd_43_ml"].style.color = 'black'
			
			change_probing_43();
			
			mobility_43 = 0;

				document.getElementById('mobility_43_txt').value = "0";

			note_43 = "";

				document.getElementById('note_43_txt').value = "";
	
			bop_43_db = 0;
			bop_43_b = 0;
			bop_43_mb = 0;
					
			bop_43_dl = 0;
			bop_43_l = 0;
			bop_43_ml = 0;
					
				document.getElementById('bop_43_db_rectangle').style.display = 'none';
				document.getElementById('bop_43_b_rectangle').style.display = 'none';
				document.getElementById('bop_43_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_43_dl_rectangle').style.display = 'none';
				document.getElementById('bop_43_l_rectangle').style.display = 'none';
				document.getElementById('bop_43_ml_rectangle').style.display = 'none';
				
			pi_43_db = 0;
			pi_43_b = 0;
			pi_43_mb = 0;
					
			pi_43_dl = 0;
			pi_43_l = 0;
			pi_43_ml = 0;

				document.getElementById('pi_43_db_rectangle').style.display = 'none';
				document.getElementById('pi_43_b_rectangle').style.display = 'none';
				document.getElementById('pi_43_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_43_dl_rectangle').style.display = 'none';
				document.getElementById('pi_43_l_rectangle').style.display = 'none';
				document.getElementById('pi_43_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_43() {
		if (tooth_43 === 1) {
			tooth_43 = 0;
			document.getElementById('tooth_line_43_b').style.display = 'block';
			document.getElementById('tooth_line_43_l').style.display = 'block';
			
			document.getElementById('mobility_43_txt').style.display = 'none';
			
			document.getElementById('implantat_43_btn').style.display = 'none';
			document.getElementById('implantat_43_tab').style.display = 'none';
			document.getElementById('implantat_43_b_image').style.display = 'none';
			document.getElementById('implantat_43_l_image').style.display = 'none';
			
			document.getElementById('gm_43_db_txt').style.display = 'none';
			document.getElementById('gm_43_b_txt').style.display = 'none';
			document.getElementById('gm_43_mb_txt').style.display = 'none';
			
			document.getElementById('pd_43_db_txt').style.display = 'none';
			document.getElementById('pd_43_b_txt').style.display = 'none';
			document.getElementById('pd_43_mb_txt').style.display = 'none';
			
			document.getElementById('gm_43_dl_txt').style.display = 'none';
			document.getElementById('gm_43_l_txt').style.display = 'none';
			document.getElementById('gm_43_ml_txt').style.display = 'none';
			
			document.getElementById('pd_43_dl_txt').style.display = 'none';
			document.getElementById('pd_43_l_txt').style.display = 'none';
			document.getElementById('pd_43_ml_txt').style.display = 'none';
			
			document.getElementById('bop_43_db_rectangle').style.display = 'none';
			document.getElementById('bop_43_b_rectangle').style.display = 'none';
			document.getElementById('bop_43_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_43_dl_rectangle').style.display = 'none';
			document.getElementById('bop_43_l_rectangle').style.display = 'none';
			document.getElementById('bop_43_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_43_db_btn').style.display = 'none';
			document.getElementById('bop_43_b_btn').style.display = 'none';
			document.getElementById('bop_43_mb_btn').style.display = 'none';
			
			document.getElementById('bop_43_dl_btn').style.display = 'none';
			document.getElementById('bop_43_l_btn').style.display = 'none';
			document.getElementById('bop_43_ml_btn').style.display = 'none';
			
			document.getElementById('pi_43_db_rectangle').style.display = 'none';
			document.getElementById('pi_43_b_rectangle').style.display = 'none';
			document.getElementById('pi_43_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_43_dl_rectangle').style.display = 'none';
			document.getElementById('pi_43_l_rectangle').style.display = 'none';
			document.getElementById('pi_43_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_43_db_btn').style.display = 'none';
			document.getElementById('pi_43_b_btn').style.display = 'none';
			document.getElementById('pi_43_mb_btn').style.display = 'none';
			
			document.getElementById('pi_43_dl_btn').style.display = 'none';
			document.getElementById('pi_43_l_btn').style.display = 'none';
			document.getElementById('pi_43_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_43_b').style.display = 'none';
			document.getElementById('polyline_al_43_b').style.display = 'none';
			document.getElementById('polyline_gm_43_b').style.display = 'none';
			
			document.getElementById('polygon_43_l').style.display = 'none';
			document.getElementById('polyline_al_43_l').style.display = 'none';
			document.getElementById('polyline_gm_43_l').style.display = 'none';
			
			document.getElementById('polygon_inter_44_43_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_44_43_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_44_43_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_44_43_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_44_43_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_44_43_l').style.display = 'none';            
            
			document.getElementById('polygon_inter_43_42_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_43_42_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_43_42_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_43_42_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_43_42_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_43_42_l').style.display = 'none';            
			
			document.getElementById('note_43_txt').style.display = 'none';
		}
		else if (Implantat_43 !== 1) {
			tooth_43 = 1;
			document.getElementById('tooth_line_43_b').style.display = 'none';
			document.getElementById('tooth_line_43_l').style.display = 'none';

			document.getElementById('mobility_43_txt').style.display = 'block';

			document.getElementById('implantat_43_btn').style.display = 'block';

			document.getElementById('gm_43_db_txt').style.display = 'block';
			document.getElementById('gm_43_b_txt').style.display = 'block';
			document.getElementById('gm_43_mb_txt').style.display = 'block';
			
			document.getElementById('pd_43_db_txt').style.display = 'block';
			document.getElementById('pd_43_b_txt').style.display = 'block';
			document.getElementById('pd_43_mb_txt').style.display = 'block';
			
			document.getElementById('gm_43_dl_txt').style.display = 'block';
			document.getElementById('gm_43_l_txt').style.display = 'block';
			document.getElementById('gm_43_ml_txt').style.display = 'block';
			
			document.getElementById('pd_43_dl_txt').style.display = 'block';
			document.getElementById('pd_43_l_txt').style.display = 'block';
			document.getElementById('pd_43_ml_txt').style.display = 'block';
			
			document.getElementById('note_43_txt').style.display = 'block';

			document.getElementById('polygon_43_b').style.display = 'block';
			document.getElementById('polyline_al_43_b').style.display = 'block';
			document.getElementById('polyline_gm_43_b').style.display = 'block';
			
			document.getElementById('polygon_43_l').style.display = 'block';
			document.getElementById('polyline_al_43_l').style.display = 'block';
			document.getElementById('polyline_gm_43_l').style.display = 'block';

            if (tooth_44 == 1 && tooth_43 == 1) {
				document.getElementById('polygon_inter_44_43_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_44_43_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_44_43_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_44_43_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_44_43_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_44_43_l').style.display = 'block';            
            }
            
            if (tooth_43 == 1 && tooth_42 == 1) {
				document.getElementById('polygon_inter_43_42_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_43_42_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_43_42_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_43_42_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_43_42_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_43_42_l').style.display = 'block';            
            }

			document.getElementById('bop_43_db_btn').style.display = 'block';
			document.getElementById('bop_43_b_btn').style.display = 'block';
			document.getElementById('bop_43_mb_btn').style.display = 'block';

			document.getElementById('bop_43_dl_btn').style.display = 'block';
			document.getElementById('bop_43_l_btn').style.display = 'block';
			document.getElementById('bop_43_ml_btn').style.display = 'block';
			
			if (bop_43_db == 1) {
				document.getElementById('bop_43_db_rectangle').style.display = 'block';
			}
			if (bop_43_b == 1) {
				document.getElementById('bop_43_b_rectangle').style.display = 'block';
			}
			if (bop_43_mb == 1) {
				document.getElementById('bop_43_mb_rectangle').style.display = 'block';
			}
			if (bop_43_dl == 1) {
				document.getElementById('bop_43_dl_rectangle').style.display = 'block';
			}
			if (bop_43_l == 1) {
				document.getElementById('bop_43_l_rectangle').style.display = 'block';
			}
			if (bop_43_ml == 1) {
				document.getElementById('bop_43_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_43_db_btn').style.display = 'block';
			document.getElementById('pi_43_b_btn').style.display = 'block';
			document.getElementById('pi_43_mb_btn').style.display = 'block';

			document.getElementById('pi_43_dl_btn').style.display = 'block';
			document.getElementById('pi_43_l_btn').style.display = 'block';
			document.getElementById('pi_43_ml_btn').style.display = 'block';
			
			if (pi_43_db == 1) {
				document.getElementById('pi_43_db_rectangle').style.display = 'block';
			}
			if (pi_43_b == 1) {
				document.getElementById('pi_43_b_rectangle').style.display = 'block';
			}
			if (pi_43_mb == 1) {
				document.getElementById('pi_43_mb_rectangle').style.display = 'block';
			}
			if (pi_43_dl == 1) {
				document.getElementById('pi_43_dl_rectangle').style.display = 'block';
			}
			if (pi_43_l == 1) {
				document.getElementById('pi_43_l_rectangle').style.display = 'block';
			}
			if (pi_43_ml == 1) {
				document.getElementById('pi_43_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_43 == 1) {
			tooth_43 = 1;
			document.getElementById('tooth_line_43_b').style.display = 'none';
			document.getElementById('tooth_line_43_l').style.display = 'none';

			document.getElementById('mobility_43_txt').style.display = 'block';
			
			document.getElementById('note_43_txt').style.display = 'block';

			document.getElementById('implantat_43_btn').style.display = 'block';
			document.getElementById('implantat_43_tab').style.display = 'block';
			document.getElementById('implantat_43_b_image').style.display = 'block';
			document.getElementById('implantat_43_l_image').style.display = 'block';

			document.getElementById('gm_43_db_txt').style.display = 'block';
			document.getElementById('gm_43_b_txt').style.display = 'block';
			document.getElementById('gm_43_mb_txt').style.display = 'block';
			
			document.getElementById('pd_43_db_txt').style.display = 'block';
			document.getElementById('pd_43_b_txt').style.display = 'block';
			document.getElementById('pd_43_mb_txt').style.display = 'block';
			
			document.getElementById('gm_43_dl_txt').style.display = 'block';
			document.getElementById('gm_43_l_txt').style.display = 'block';
			document.getElementById('gm_43_ml_txt').style.display = 'block';
			
			document.getElementById('pd_43_dl_txt').style.display = 'block';
			document.getElementById('pd_43_l_txt').style.display = 'block';
			document.getElementById('pd_43_ml_txt').style.display = 'block';

			document.getElementById('polygon_43_b').style.display = 'block';
			document.getElementById('polyline_al_43_b').style.display = 'block';
			document.getElementById('polyline_gm_43_b').style.display = 'block';
			
			document.getElementById('polygon_43_l').style.display = 'block';
			document.getElementById('polyline_al_43_l').style.display = 'block';
			document.getElementById('polyline_gm_43_l').style.display = 'block';
 
            if (tooth_44 == 1 && tooth_43 == 1) {
				document.getElementById('polygon_inter_44_43_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_44_43_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_44_43_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_44_43_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_44_43_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_44_43_l').style.display = 'block';            
            }
            
            if (tooth_43 == 1 && tooth_42 == 1) {
				document.getElementById('polygon_inter_43_42_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_43_42_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_43_42_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_43_42_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_43_42_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_43_42_l').style.display = 'block';            
            }

			document.getElementById('bop_43_db_btn').style.display = 'block';
			document.getElementById('bop_43_b_btn').style.display = 'block';
			document.getElementById('bop_43_mb_btn').style.display = 'block';

			document.getElementById('bop_43_dl_btn').style.display = 'block';
			document.getElementById('bop_43_l_btn').style.display = 'block';
			document.getElementById('bop_43_ml_btn').style.display = 'block';
			
			document.getElementById('pi_43_db_btn').style.display = 'block';
			document.getElementById('pi_43_b_btn').style.display = 'block';
			document.getElementById('pi_43_mb_btn').style.display = 'block';

			document.getElementById('pi_43_dl_btn').style.display = 'block';
			document.getElementById('pi_43_l_btn').style.display = 'block';
			document.getElementById('pi_43_ml_btn').style.display = 'block';
			
			if (bop_43_db == 1) {
				document.getElementById('bop_43_db_rectangle').style.display = 'block';
			}
			if (bop_43_b == 1) {
				document.getElementById('bop_43_b_rectangle').style.display = 'block';
			}
			if (bop_43_mb == 1) {
				document.getElementById('bop_43_mb_rectangle').style.display = 'block';
			}
			if (bop_43_dl == 1) {
				document.getElementById('bop_43_dl_rectangle').style.display = 'block';
			}
			if (bop_43_l == 1) {
				document.getElementById('bop_43_l_rectangle').style.display = 'block';
			}
			if (bop_43_ml == 1) {
				document.getElementById('bop_43_ml_rectangle').style.display = 'block';
			}
			
			if (pi_43_db == 1) {
				document.getElementById('pi_43_db_rectangle').style.display = 'block';
			}
			if (pi_43_b == 1) {
				document.getElementById('pi_43_b_rectangle').style.display = 'block';
			}
			if (pi_43_mb == 1) {
				document.getElementById('pi_43_mb_rectangle').style.display = 'block';
			}
			if (pi_43_dl == 1) {
				document.getElementById('pi_43_dl_rectangle').style.display = 'block';
			}
			if (pi_43_l == 1) {
				document.getElementById('pi_43_l_rectangle').style.display = 'block';
			}
			if (pi_43_ml == 1) {
				document.getElementById('pi_43_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_43();
	}

	function toggle_implant_43() {
		if (Implantat_43 == 0) {
			Implantat_43 = 1;
			
			document.getElementById('implantat_43_b_image').style.display = 'block';
			document.getElementById('implantat_43_l_image').style.display = 'block';
			document.getElementById('implantat_43_tab').style.display = 'block';
		}
		else {
			Implantat_43 = 0;
			
			document.getElementById('implantat_43_b_image').style.display = 'none';
			document.getElementById('implantat_43_l_image').style.display = 'none';
			document.getElementById('implantat_43_tab').style.display = 'none';
		}
	}

	function toggle_bop_43_db() {
		if (bop_43_db == 0) {
			bop_43_db = 1;
			document.getElementById('bop_43_db_rectangle').style.display = 'block';
		}
		else {
			bop_43_db = 0;
			document.getElementById('bop_43_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_43_b() {
		if (bop_43_b == 0) {
			bop_43_b = 1;
			document.getElementById('bop_43_b_rectangle').style.display = 'block';
		}
		else {
			bop_43_b = 0;
			document.getElementById('bop_43_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_43_mb() {
		if (bop_43_mb == 0) {
			bop_43_mb = 1;
			document.getElementById('bop_43_mb_rectangle').style.display = 'block';
		}
		else {
			bop_43_mb = 0;
			document.getElementById('bop_43_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_43_db() {
		if (pi_43_db == 0) {
			pi_43_db = 1;
			document.getElementById('pi_43_db_rectangle').style.display = 'block';
		}
		else {
			pi_43_db = 0;
			document.getElementById('pi_43_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_43_b() {
		if (pi_43_b == 0) {
			pi_43_b = 1;
			document.getElementById('pi_43_b_rectangle').style.display = 'block';
		}
		else {
			pi_43_b = 0;
			document.getElementById('pi_43_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_43_mb() {
		if (pi_43_mb == 0) {
			pi_43_mb = 1;
			document.getElementById('pi_43_mb_rectangle').style.display = 'block';
		}
		else {
			pi_43_mb = 0;
			document.getElementById('pi_43_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_43_dl() {
		if (bop_43_dl == 0) {
			bop_43_dl = 1;
			document.getElementById('bop_43_dl_rectangle').style.display = 'block';
		}
		else {
			bop_43_dl = 0;
			document.getElementById('bop_43_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_43_l() {
		if (bop_43_l == 0) {
			bop_43_l = 1;
			document.getElementById('bop_43_l_rectangle').style.display = 'block';
		}
		else {
			bop_43_l = 0;
			document.getElementById('bop_43_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_43_ml() {
		if (bop_43_ml == 0) {
			bop_43_ml = 1;
			document.getElementById('bop_43_ml_rectangle').style.display = 'block';
		}
		else {
			bop_43_ml = 0;
			document.getElementById('bop_43_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_43_dl() {
		if (pi_43_dl == 0) {
			pi_43_dl = 1;
			document.getElementById('pi_43_dl_rectangle').style.display = 'block';
		}
		else {
			pi_43_dl = 0;
			document.getElementById('pi_43_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_43_l() {
		if (pi_43_l == 0) {
			pi_43_l = 1;
			document.getElementById('pi_43_l_rectangle').style.display = 'block';
		}
		else {
			pi_43_l = 0;
			document.getElementById('pi_43_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_43_ml() {
		if (pi_43_ml == 0) {
			pi_43_ml = 1;
			document.getElementById('pi_43_ml_rectangle').style.display = 'block';
		}
		else {
			pi_43_ml = 0;
			document.getElementById('pi_43_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_43() {
		if (tooth_43 == 1) {
			
		// Variablen aus dem Formular
			pd_43_db = document.forms[0]["pd_43_db"].value;
			pd_43_b = document.forms[0]["pd_43_b"].value;
			pd_43_mb = document.forms[0]["pd_43_mb"].value;

			if (document.forms[0]["pd_43_dl"].value > 3) {document.forms[0]["pd_43_dl"].style.color = 'red';} else {document.forms[0]["pd_43_dl"].style.color = 'black'};
			if (document.forms[0]["pd_43_l"].value > 3) {document.forms[0]["pd_43_l"].style.color = 'red';} else {document.forms[0]["pd_43_l"].style.color = 'black'};
			if (document.forms[0]["pd_43_ml"].value > 3) {document.forms[0]["pd_43_ml"].style.color = 'red';} else {document.forms[0]["pd_43_ml"].style.color = 'black'};
			
			gm_43_db = document.forms[0]["gm_43_db"].value;
			gm_43_b = document.forms[0]["gm_43_b"].value;
			gm_43_mb = document.forms[0]["gm_43_mb"].value;
			
			pd_43_dl = document.forms[0]["pd_43_dl"].value;
			pd_43_l = document.forms[0]["pd_43_l"].value;
			pd_43_ml = document.forms[0]["pd_43_ml"].value;

			if (document.forms[0]["pd_43_db"].value > 3) {document.forms[0]["pd_43_db"].style.color = 'red';} else {document.forms[0]["pd_43_db"].style.color = 'black'};
			if (document.forms[0]["pd_43_b"].value > 3) {document.forms[0]["pd_43_b"].style.color = 'red';} else {document.forms[0]["pd_43_b"].style.color = 'black'};
			if (document.forms[0]["pd_43_mb"].value > 3) {document.forms[0]["pd_43_mb"].style.color = 'red';} else {document.forms[0]["pd_43_mb"].style.color = 'black'};
			
			gm_43_dl = document.forms[0]["gm_43_dl"].value;
			gm_43_l = document.forms[0]["gm_43_l"].value;
			gm_43_ml = document.forms[0]["gm_43_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 43 (bukkal) in der Bitmap
			var x_db_43 = 570;							// distal 43
			var x_mb_43 = 592;							// mesial 43
			var x_b_43 = (x_db_43 + x_mb_43)/2;			// bukkal 43
			
		// Set der horizontalen Koordinaten von Zahn 43 (lingual) in der Bitmap
			var x_dl_43 = 570;							// distal 43
			var x_ml_43 = 590;							// mesial 43
			var x_l_43 = (x_dl_43 + x_ml_43)/2;			// lingual 43
			
		// Set der vertikalen Koordinaten von Zahn 43 (bukkal) aus dem Formular
			var y_gm_43_db = gm_UK_b - 6.05 * gm_43_db;	// Margo Gingivae distobukkal 43
			var y_gm_43_b = gm_UK_b - 6.05 * gm_43_b;	// Margo Gingivae bukkal 43
			var y_gm_43_mb = gm_UK_b - 6.05 * gm_43_mb;	// Margo Gingivae mesiobukkal 43
			var y_pd_43_db = 6.05 * pd_43_db;			// Sondierungstiefe distobukkal 43
			var y_pd_43_b = 6.05 * pd_43_b;				// Sondierungstiefe bukkal 43
			var y_pd_43_mb = 6.05 * pd_43_mb;			// Sondierungstiefe mesiobukkal 43
			
		// Set der vertikalen Koordinaten von Zahn 43 (lingual) aus dem Formular
			var y_gm_43_dl = gm_UK_l + 6.05 * gm_43_dl;	// Margo Gingivae distolingual 43
			var y_gm_43_l = gm_UK_l + 6.05 * gm_43_l;	// Margo Gingivae lingual 43
			var y_gm_43_ml = gm_UK_l + 6.05 * gm_43_ml;	// Margo Gingivae mesiolingual 43
			var y_pd_43_dl = 6.05 * pd_43_dl;			// Sondierungstiefe distolingual 43
			var y_pd_43_l = 6.05 * pd_43_l;				// Sondierungstiefe lingual 43
			var y_pd_43_ml = 6.05 * pd_43_ml;			// Sondierungstiefe mesiolingual 43
			
		// Berechnung des Attachmentniveaus 43 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_43_db = y_gm_43_db + y_pd_43_db;	// Attachmentniveau distobukkal 43
			var y_al_43_b = y_gm_43_b + y_pd_43_b;		// Attachmentniveau bukkal 43
			var y_al_43_mb = y_gm_43_mb + y_pd_43_mb;	// Attachmentniveau mesiobukkal 43
			
		// Berechnung des Attachmentniveaus 43 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_43_dl = y_gm_43_dl - y_pd_43_dl;	// Attachmentniveau distolingual 43
			var y_al_43_l = y_gm_43_l - y_pd_43_l;		// Attachmentniveau lingual 43
			var y_al_43_ml = y_gm_43_ml - y_pd_43_ml;	// Attachmentniveau mesiolingual 43

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[43].storeCoordinates(
				x_db_43, x_mb_43, x_dl_43, x_ml_43, x_b_43, x_l_43,
				y_gm_43_db, y_gm_43_b, y_gm_43_mb, y_pd_43_db, y_pd_43_b, y_pd_43_mb,
				y_gm_43_dl, y_gm_43_l, y_gm_43_ml, y_pd_43_dl, y_pd_43_l, y_pd_43_ml,
				y_al_43_db, y_al_43_b, y_al_43_mb, y_al_43_dl, y_al_43_l, y_al_43_ml
			);

		// Parodontaltasche 43 bukkal zeichnen
			var string = 
				x_db_43 + ", " + y_al_43_db + "  " + 
				x_b_43 + ", " + y_al_43_b + "  " + 
				x_mb_43 + ", " + y_al_43_mb + "  " + 
				x_mb_43 + ", " + y_gm_43_mb + "  " + 
				x_b_43 + ", " + y_gm_43_b + "  " + 
				x_db_43 + ", " + y_gm_43_db;
			document.getElementById("polygon_43_b").setAttribute("points", string);
		// Attachmentniveau 43 bukkal zeichnen
			var string = 
				x_db_43 + ", " + y_al_43_db + "  " + 
				x_b_43 + ", " + y_al_43_b + "  " + 
				x_mb_43 + ", " + y_al_43_mb;
			document.getElementById("polyline_al_43_b").setAttribute("points", string);
		// Margo Gingivae 43 bukkal zeichnen
			var string =
				x_db_43 + ", " + y_gm_43_db + "  " + 
				x_b_43 + ", " + y_gm_43_b + "  " + 
				x_mb_43 + ", " + y_gm_43_mb;
			document.getElementById("polyline_gm_43_b").setAttribute("points", string);

		// Parodontaltasche 43 lingual zeichnen
			var string = 
				x_dl_43 + ", " + y_al_43_dl + "  " + 
				x_l_43 + ", " + y_al_43_l + "  " + 
				x_ml_43 + ", " + y_al_43_ml + "  " + 
				x_ml_43 + ", " + y_gm_43_ml + "  " + 
				x_l_43 + ", " + y_gm_43_l + "  " + 
				x_dl_43 + ", " + y_gm_43_dl;
			document.getElementById("polygon_43_l").setAttribute("points", string);
		// Attachmentniveau 43 lingual zeichnen
			var string = 
				x_dl_43 + ", " + y_al_43_dl + "  " + 
				x_l_43 + ", " + y_al_43_l + "  " + 
				x_ml_43 + ", " + y_al_43_ml;
			document.getElementById("polyline_al_43_l").setAttribute("points", string);
		// Margo Gingivae 43 lingual zeichnen
			var string =
				x_dl_43 + ", " + y_gm_43_dl + "  " + 
				x_l_43 + ", " + y_gm_43_l + "  " + 
				x_ml_43 + ", " + y_gm_43_ml;
			document.getElementById("polyline_gm_43_l").setAttribute("points", string);
		}
        if (tooth_43 == 1 && tooth_42 == 1) {

            pd_42_db = document.forms[0]["pd_42_db"].value;
			gm_42_db = document.forms[0]["gm_42_db"].value;
			
			pd_42_dl = document.forms[0]["pd_42_dl"].value;
			gm_42_dl = document.forms[0]["gm_42_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 42 (bukkal) in der Bitmap
			var x_db_42 = 610;							// distal 42
			
		// Set der horizontalen Koordinaten von Zahn 42 (lingual) in der Bitmap
			var x_dl_42 = 607;							// distal 42
			
		// Set der vertikalen Koordinaten von Zahn 42 (bukkal) aus dem Formular
			var y_gm_42_db = gm_UK_b - 6.05 * gm_42_db;	// Margo Gingivae distobukkal 42
			var y_pd_42_db = 6.05 * pd_42_db;			// Sondierungstiefe distobukkal 42
			
		// Set der vertikalen Koordinaten von Zahn 42 (lingual) aus dem Formular
			var y_gm_42_dl = gm_UK_l + 6.05 * gm_42_dl;	// Margo Gingivae distolingual 42
			var y_pd_42_dl = 6.05 * pd_42_dl;			// Sondierungstiefe distolingual 42
			
		// Berechnung des Attachmentniveaus 42 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_42_db = y_gm_42_db + y_pd_42_db;	// Attachmentniveau distobukkal 42
			
		// Berechnung des Attachmentniveaus 42 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_42_dl = y_gm_42_dl - y_pd_42_dl;	// Attachmentniveau distolingual 42

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
        if (tooth_44 == 1 && tooth_43 == 1) {

            pd_44_mb = document.forms[0]["pd_44_mb"].value;
			gm_44_mb = document.forms[0]["gm_44_mb"].value;
			
			pd_44_ml = document.forms[0]["pd_44_ml"].value;
			gm_44_ml = document.forms[0]["gm_44_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 44 (bukkal) in der Bitmap
			var x_mb_44 = 553;							// mesial 44
			
		// Set der horizontalen Koordinaten von Zahn 44 (lingual) in der Bitmap
			var x_ml_44 = 553;							// mesial 44
			
		// Set der vertikalen Koordinaten von Zahn 44 (bukkal) aus dem Formular
			var y_gm_44_mb = gm_UK_b - 6.05 * gm_44_mb;	// Margo Gingivae mesiobukkal 44
			var y_pd_44_mb = 6.05 * pd_44_mb;			// Sondierungstiefe mesiobukkal 44
			
		// Set der vertikalen Koordinaten von Zahn 44 (lingual) aus dem Formular
			var y_gm_44_ml = gm_UK_l + 6.05 * gm_44_ml;	// Margo Gingivae mesiolingual 44
			var y_pd_44_ml = 6.05 * pd_44_ml;			// Sondierungstiefe mesiolingual 44
			
		// Berechnung des Attachmentniveaus 44 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_44_mb = y_gm_44_mb + y_pd_44_mb;	// Attachmentniveau mesiobukkal 44
			
		// Berechnung des Attachmentniveaus 44 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_44_ml = y_gm_44_ml - y_pd_44_ml;	// Attachmentniveau mesiolingual 44

		// Parodontaltasche inter_44_43 bukkal zeichnen
			var string = 
				x_mb_44 + ", " + y_al_44_mb + "  " + 
				x_db_43 + ", " + y_al_43_db + "  " + 
				x_db_43 + ", " + y_gm_43_db + "  " + 
				x_mb_44 + ", " + y_gm_44_mb;
			document.getElementById("polygon_inter_44_43_b").setAttribute("points", string);
		// Attachmentniveau inter_44_43 bukkal zeichnen
			var string = 
				x_mb_44 + ", " + y_al_44_mb + "  " + 
				x_db_43 + ", " + y_al_43_db;
			document.getElementById("polyline_al_inter_44_43_b").setAttribute("points", string);
		// Margo Gingivae inter_44_43 bukkal zeichnen
			var string =
				x_mb_44 + ", " + y_gm_44_mb + "  " + 
				x_db_43 + ", " + y_gm_43_db;
			document.getElementById("polyline_gm_inter_44_43_b").setAttribute("points", string);

        // Parodontaltasche inter_44_43 lingual zeichnen
			var string = 
				x_ml_44 + ", " + y_al_44_ml + "  " + 
				x_dl_43 + ", " + y_al_43_dl + "  " + 
				x_dl_43 + ", " + y_gm_43_dl + "  " + 
				x_ml_44 + ", " + y_gm_44_ml;
			document.getElementById("polygon_inter_44_43_l").setAttribute("points", string);
		// Attachmentniveau inter_44_43 lingual zeichnen
			var string = 
				x_ml_44 + ", " + y_al_44_ml + "  " + 
				x_dl_43 + ", " + y_al_43_dl;
			document.getElementById("polyline_al_inter_44_43_l").setAttribute("points", string);
		// Margo Gingivae inter_44_43 lingual zeichnen
			var string =
				x_ml_44 + ", " + y_gm_44_ml + "  " + 
				x_dl_43 + ", " + y_gm_43_dl;
			document.getElementById("polyline_gm_inter_44_43_l").setAttribute("points", string);
		}
	}