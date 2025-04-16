	// Definition der Variablen für das Formular
		var tooth_12 = 1;
		var Implantat_12 = 0;
		var bop_12_db = 0;
		var bop_12_b = 0;
		var bop_12_mb = 0;
		var pi_12_db = 0;
		var pi_12_b = 0;
		var pi_12_mb = 0;
		var bop_12_dp = 0;
		var bop_12_p = 0;
		var bop_12_mp = 0;
		var pi_12_dp = 0;
		var pi_12_p = 0;
		var pi_12_mp = 0;
		var gm_12_db = 0;
		var gm_12_b = 0;
		var gm_12_mb = 0;
		var pd_12_db = 0;
		var pd_12_b = 0;
		var pd_12_mb = 0;
		var gm_12_dp = 0;
		var gm_12_p = 0;
		var gm_12_mp = 0;
		var pd_12_dp = 0;
		var pd_12_p = 0;
		var pd_12_mp = 0;

	function clear_data_12() {
        if (tooth_12 == 1) {
			gm_12_db = 0;
			gm_12_b = 0;
			gm_12_mb = 0;
			pd_12_db = 0;
			pd_12_b = 0;
			pd_12_mb = 0;
	
				document.getElementById('gm_12_db_txt').value = 0;
				document.getElementById('gm_12_b_txt').value = 0;
				document.getElementById('gm_12_mb_txt').value = 0;
				
				document.getElementById('pd_12_db_txt').value = 0;
				document.getElementById('pd_12_b_txt').value = 0;
				document.getElementById('pd_12_mb_txt').value = 0;
			
				document.forms[0]["pd_12_db"].style.color = 'black'
				document.forms[0]["pd_12_b"].style.color = 'black'
				document.forms[0]["pd_12_mb"].style.color = 'black'
			
			gm_12_dp = 0;
			gm_12_p = 0;
			gm_12_mp = 0;
			pd_12_dp = 0;
			pd_12_p = 0;
			pd_12_mp = 0;

				document.getElementById('gm_12_dp_txt').value = 0;
				document.getElementById('gm_12_p_txt').value = 0;
				document.getElementById('gm_12_mp_txt').value = 0;
				
				document.getElementById('pd_12_dp_txt').value = 0;
				document.getElementById('pd_12_p_txt').value = 0;
				document.getElementById('pd_12_mp_txt').value = 0;

				document.forms[0]["pd_12_dp"].style.color = 'black'
				document.forms[0]["pd_12_p"].style.color = 'black'
				document.forms[0]["pd_12_mp"].style.color = 'black'
			
			change_probing_12();
			
			mobility_12 = 0;

				document.getElementById('mobility_12_txt').value = "0";

			note_12 = "";

				document.getElementById('note_12_txt').value = "";
	
			bop_12_db = 0;
			bop_12_b = 0;
			bop_12_mb = 0;
					
			bop_12_dp = 0;
			bop_12_p = 0;
			bop_12_mp = 0;
					
				document.getElementById('bop_12_db_rectangle').style.display = 'none';
				document.getElementById('bop_12_b_rectangle').style.display = 'none';
				document.getElementById('bop_12_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_12_dp_rectangle').style.display = 'none';
				document.getElementById('bop_12_p_rectangle').style.display = 'none';
				document.getElementById('bop_12_mp_rectangle').style.display = 'none';
				
			pi_12_db = 0;
			pi_12_b = 0;
			pi_12_mb = 0;
					
			pi_12_dp = 0;
			pi_12_p = 0;
			pi_12_mp = 0;

				document.getElementById('pi_12_db_rectangle').style.display = 'none';
				document.getElementById('pi_12_b_rectangle').style.display = 'none';
				document.getElementById('pi_12_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_12_dp_rectangle').style.display = 'none';
				document.getElementById('pi_12_p_rectangle').style.display = 'none';
				document.getElementById('pi_12_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_12() {
		if (tooth_12 === 1) {
			tooth_12 = 0;
			document.getElementById('tooth_line_12_b').style.display = 'block';
			document.getElementById('tooth_line_12_p').style.display = 'block';
			
			document.getElementById('mobility_12_txt').style.display = 'none';
			
			document.getElementById('implantat_12_btn').style.display = 'none';
			document.getElementById('implantat_12_tab').style.display = 'none';
			document.getElementById('implantat_12_b_image').style.display = 'none';
			document.getElementById('implantat_12_p_image').style.display = 'none';

			document.getElementById('gm_12_db_txt').style.display = 'none';
			document.getElementById('gm_12_b_txt').style.display = 'none';
			document.getElementById('gm_12_mb_txt').style.display = 'none';
			
			document.getElementById('pd_12_db_txt').style.display = 'none';
			document.getElementById('pd_12_b_txt').style.display = 'none';
			document.getElementById('pd_12_mb_txt').style.display = 'none';
			
			document.getElementById('gm_12_dp_txt').style.display = 'none';
			document.getElementById('gm_12_p_txt').style.display = 'none';
			document.getElementById('gm_12_mp_txt').style.display = 'none';
			
			document.getElementById('pd_12_dp_txt').style.display = 'none';
			document.getElementById('pd_12_p_txt').style.display = 'none';
			document.getElementById('pd_12_mp_txt').style.display = 'none';
						
			document.getElementById('bop_12_db_rectangle').style.display = 'none';
			document.getElementById('bop_12_b_rectangle').style.display = 'none';
			document.getElementById('bop_12_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_12_dp_rectangle').style.display = 'none';
			document.getElementById('bop_12_p_rectangle').style.display = 'none';
			document.getElementById('bop_12_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_12_db_btn').style.display = 'none';
			document.getElementById('bop_12_b_btn').style.display = 'none';
			document.getElementById('bop_12_mb_btn').style.display = 'none';
			
			document.getElementById('bop_12_dp_btn').style.display = 'none';
			document.getElementById('bop_12_p_btn').style.display = 'none';
			document.getElementById('bop_12_mp_btn').style.display = 'none';
			
			document.getElementById('pi_12_db_rectangle').style.display = 'none';
			document.getElementById('pi_12_b_rectangle').style.display = 'none';
			document.getElementById('pi_12_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_12_dp_rectangle').style.display = 'none';
			document.getElementById('pi_12_p_rectangle').style.display = 'none';
			document.getElementById('pi_12_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_12_db_btn').style.display = 'none';
			document.getElementById('pi_12_b_btn').style.display = 'none';
			document.getElementById('pi_12_mb_btn').style.display = 'none';
			
			document.getElementById('pi_12_dp_btn').style.display = 'none';
			document.getElementById('pi_12_p_btn').style.display = 'none';
			document.getElementById('pi_12_mp_btn').style.display = 'none';
			
			
			document.getElementById('polygon_12_b').style.display = 'none';
			document.getElementById('polyline_al_12_b').style.display = 'none';
			document.getElementById('polyline_gm_12_b').style.display = 'none';
			
			document.getElementById('polygon_12_p').style.display = 'none';
			document.getElementById('polyline_al_12_p').style.display = 'none';
			document.getElementById('polyline_gm_12_p').style.display = 'none';
			
			document.getElementById('polygon_inter_13_12_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_13_12_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_13_12_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_13_12_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_13_12_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_13_12_p').style.display = 'none';            
            
			document.getElementById('polygon_inter_12_11_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_12_11_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_12_11_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_12_11_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_12_11_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_12_11_p').style.display = 'none';            
			
			document.getElementById('note_12_txt').style.display = 'none';
		}
		else if (Implantat_12 !== 1) {
			tooth_12 = 1;
			document.getElementById('tooth_line_12_b').style.display = 'none';
			document.getElementById('tooth_line_12_p').style.display = 'none';

			document.getElementById('mobility_12_txt').style.display = 'block';

			document.getElementById('implantat_12_btn').style.display = 'block';

			document.getElementById('gm_12_db_txt').style.display = 'block';
			document.getElementById('gm_12_b_txt').style.display = 'block';
			document.getElementById('gm_12_mb_txt').style.display = 'block';
			
			document.getElementById('pd_12_db_txt').style.display = 'block';
			document.getElementById('pd_12_b_txt').style.display = 'block';
			document.getElementById('pd_12_mb_txt').style.display = 'block';
			
			document.getElementById('gm_12_dp_txt').style.display = 'block';
			document.getElementById('gm_12_p_txt').style.display = 'block';
			document.getElementById('gm_12_mp_txt').style.display = 'block';
			
			document.getElementById('pd_12_dp_txt').style.display = 'block';
			document.getElementById('pd_12_p_txt').style.display = 'block';
			document.getElementById('pd_12_mp_txt').style.display = 'block';
			
			document.getElementById('note_12_txt').style.display = 'block';

			document.getElementById('polygon_12_b').style.display = 'block';
			document.getElementById('polyline_al_12_b').style.display = 'block';
			document.getElementById('polyline_gm_12_b').style.display = 'block';
			
			document.getElementById('polygon_12_p').style.display = 'block';
			document.getElementById('polyline_al_12_p').style.display = 'block';
			document.getElementById('polyline_gm_12_p').style.display = 'block';

            if (tooth_13 == 1 && tooth_12 == 1) {
				document.getElementById('polygon_inter_13_12_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_13_12_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_13_12_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_13_12_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_13_12_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_13_12_p').style.display = 'block';            
            }
            
            if (tooth_12 == 1 && tooth_11 == 1) {
				document.getElementById('polygon_inter_12_11_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_12_11_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_12_11_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_12_11_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_12_11_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_12_11_p').style.display = 'block';            
            }

			document.getElementById('bop_12_db_btn').style.display = 'block';
			document.getElementById('bop_12_b_btn').style.display = 'block';
			document.getElementById('bop_12_mb_btn').style.display = 'block';

			document.getElementById('bop_12_dp_btn').style.display = 'block';
			document.getElementById('bop_12_p_btn').style.display = 'block';
			document.getElementById('bop_12_mp_btn').style.display = 'block';
			
			if (bop_12_db == 1) {
				document.getElementById('bop_12_db_rectangle').style.display = 'block';
			}
			if (bop_12_b == 1) {
				document.getElementById('bop_12_b_rectangle').style.display = 'block';
			}
			if (bop_12_mb == 1) {
				document.getElementById('bop_12_mb_rectangle').style.display = 'block';
			}
			if (bop_12_dp == 1) {
				document.getElementById('bop_12_dp_rectangle').style.display = 'block';
			}
			if (bop_12_p == 1) {
				document.getElementById('bop_12_p_rectangle').style.display = 'block';
			}
			if (bop_12_mp == 1) {
				document.getElementById('bop_12_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_12_db_btn').style.display = 'block';
			document.getElementById('pi_12_b_btn').style.display = 'block';
			document.getElementById('pi_12_mb_btn').style.display = 'block';

			document.getElementById('pi_12_dp_btn').style.display = 'block';
			document.getElementById('pi_12_p_btn').style.display = 'block';
			document.getElementById('pi_12_mp_btn').style.display = 'block';
			
			if (pi_12_db == 1) {
				document.getElementById('pi_12_db_rectangle').style.display = 'block';
			}
			if (pi_12_b == 1) {
				document.getElementById('pi_12_b_rectangle').style.display = 'block';
			}
			if (pi_12_mb == 1) {
				document.getElementById('pi_12_mb_rectangle').style.display = 'block';
			}
			if (pi_12_dp == 1) {
				document.getElementById('pi_12_dp_rectangle').style.display = 'block';
			}
			if (pi_12_p == 1) {
				document.getElementById('pi_12_p_rectangle').style.display = 'block';
			}
			if (pi_12_mp == 1) {
				document.getElementById('pi_12_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_12 == 1) {
			tooth_12 = 1;
			document.getElementById('tooth_line_12_b').style.display = 'none';
			document.getElementById('tooth_line_12_p').style.display = 'none';

			document.getElementById('mobility_12_txt').style.display = 'block';
			
			document.getElementById('note_12_txt').style.display = 'block';

			document.getElementById('implantat_12_btn').style.display = 'block';
			document.getElementById('implantat_12_tab').style.display = 'block';
			document.getElementById('implantat_12_b_image').style.display = 'block';
			document.getElementById('implantat_12_p_image').style.display = 'block';

			document.getElementById('gm_12_db_txt').style.display = 'block';
			document.getElementById('gm_12_b_txt').style.display = 'block';
			document.getElementById('gm_12_mb_txt').style.display = 'block';
			
			document.getElementById('pd_12_db_txt').style.display = 'block';
			document.getElementById('pd_12_b_txt').style.display = 'block';
			document.getElementById('pd_12_mb_txt').style.display = 'block';
			
			document.getElementById('gm_12_dp_txt').style.display = 'block';
			document.getElementById('gm_12_p_txt').style.display = 'block';
			document.getElementById('gm_12_mp_txt').style.display = 'block';
			
			document.getElementById('pd_12_dp_txt').style.display = 'block';
			document.getElementById('pd_12_p_txt').style.display = 'block';
			document.getElementById('pd_12_mp_txt').style.display = 'block';

			document.getElementById('polygon_12_b').style.display = 'block';
			document.getElementById('polyline_al_12_b').style.display = 'block';
			document.getElementById('polyline_gm_12_b').style.display = 'block';
			
			document.getElementById('polygon_12_p').style.display = 'block';
			document.getElementById('polyline_al_12_p').style.display = 'block';
			document.getElementById('polyline_gm_12_p').style.display = 'block';

            if (tooth_13 == 1 && tooth_12 == 1) {
				document.getElementById('polygon_inter_13_12_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_13_12_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_13_12_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_13_12_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_13_12_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_13_12_p').style.display = 'block';            
            }
            
            if (tooth_12 == 1 && tooth_11 == 1) {
				document.getElementById('polygon_inter_12_11_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_12_11_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_12_11_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_12_11_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_12_11_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_12_11_p').style.display = 'block';            
            }

			document.getElementById('bop_12_db_btn').style.display = 'block';
			document.getElementById('bop_12_b_btn').style.display = 'block';
			document.getElementById('bop_12_mb_btn').style.display = 'block';

			document.getElementById('bop_12_dp_btn').style.display = 'block';
			document.getElementById('bop_12_p_btn').style.display = 'block';
			document.getElementById('bop_12_mp_btn').style.display = 'block';
			
			document.getElementById('pi_12_db_btn').style.display = 'block';
			document.getElementById('pi_12_b_btn').style.display = 'block';
			document.getElementById('pi_12_mb_btn').style.display = 'block';

			document.getElementById('pi_12_dp_btn').style.display = 'block';
			document.getElementById('pi_12_p_btn').style.display = 'block';
			document.getElementById('pi_12_mp_btn').style.display = 'block';
			
			if (bop_12_db == 1) {
				document.getElementById('bop_12_db_rectangle').style.display = 'block';
			}
			if (bop_12_b == 1) {
				document.getElementById('bop_12_b_rectangle').style.display = 'block';
			}
			if (bop_12_mb == 1) {
				document.getElementById('bop_12_mb_rectangle').style.display = 'block';
			}
			if (bop_12_dp == 1) {
				document.getElementById('bop_12_dp_rectangle').style.display = 'block';
			}
			if (bop_12_p == 1) {
				document.getElementById('bop_12_p_rectangle').style.display = 'block';
			}
			if (bop_12_mp == 1) {
				document.getElementById('bop_12_mp_rectangle').style.display = 'block';
			}
			
			if (pi_12_db == 1) {
				document.getElementById('pi_12_db_rectangle').style.display = 'block';
			}
			if (pi_12_b == 1) {
				document.getElementById('pi_12_b_rectangle').style.display = 'block';
			}
			if (pi_12_mb == 1) {
				document.getElementById('pi_12_mb_rectangle').style.display = 'block';
			}
			if (pi_12_dp == 1) {
				document.getElementById('pi_12_dp_rectangle').style.display = 'block';
			}
			if (pi_12_p == 1) {
				document.getElementById('pi_12_p_rectangle').style.display = 'block';
			}
			if (pi_12_mp == 1) {
				document.getElementById('pi_12_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_12();
	}

	function toggle_implant_12() {
		if (Implantat_12 == 0) {
			Implantat_12 = 1;
			
			document.getElementById('implantat_12_b_image').style.display = 'block';
			document.getElementById('implantat_12_p_image').style.display = 'block';
			document.getElementById('implantat_12_tab').style.display = 'block';
		}
		else {
			Implantat_12 = 0;
			
			document.getElementById('implantat_12_b_image').style.display = 'none';
			document.getElementById('implantat_12_p_image').style.display = 'none';
			document.getElementById('implantat_12_tab').style.display = 'none';
		}
	}

	function toggle_bop_12_db() {
		if (bop_12_db == 0) {
			bop_12_db = 1;
			document.getElementById('bop_12_db_rectangle').style.display = 'block';
		}
		else {
			bop_12_db = 0;
			document.getElementById('bop_12_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_12_b() {
		if (bop_12_b == 0) {
			bop_12_b = 1;
			document.getElementById('bop_12_b_rectangle').style.display = 'block';
		}
		else {
			bop_12_b = 0;
			document.getElementById('bop_12_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_12_mb() {
		if (bop_12_mb == 0) {
			bop_12_mb = 1;
			document.getElementById('bop_12_mb_rectangle').style.display = 'block';
		}
		else {
			bop_12_mb = 0;
			document.getElementById('bop_12_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_12_db() {
		if (pi_12_db == 0) {
			pi_12_db = 1;
			document.getElementById('pi_12_db_rectangle').style.display = 'block';
		}
		else {
			pi_12_db = 0;
			document.getElementById('pi_12_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_12_b() {
		if (pi_12_b == 0) {
			pi_12_b = 1;
			document.getElementById('pi_12_b_rectangle').style.display = 'block';
		}
		else {
			pi_12_b = 0;
			document.getElementById('pi_12_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_12_mb() {
		if (pi_12_mb == 0) {
			pi_12_mb = 1;
			document.getElementById('pi_12_mb_rectangle').style.display = 'block';
		}
		else {
			pi_12_mb = 0;
			document.getElementById('pi_12_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_12_dp() {
		if (bop_12_dp == 0) {
			bop_12_dp = 1;
			document.getElementById('bop_12_dp_rectangle').style.display = 'block';
		}
		else {
			bop_12_dp = 0;
			document.getElementById('bop_12_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_12_p() {
		if (bop_12_p == 0) {
			bop_12_p = 1;
			document.getElementById('bop_12_p_rectangle').style.display = 'block';
		}
		else {
			bop_12_p = 0;
			document.getElementById('bop_12_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_12_mp() {
		if (bop_12_mp == 0) {
			bop_12_mp = 1;
			document.getElementById('bop_12_mp_rectangle').style.display = 'block';
		}
		else {
			bop_12_mp = 0;
			document.getElementById('bop_12_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_12_dp() {
		if (pi_12_dp == 0) {
			pi_12_dp = 1;
			document.getElementById('pi_12_dp_rectangle').style.display = 'block';
		}
		else {
			pi_12_dp = 0;
			document.getElementById('pi_12_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_12_p() {
		if (pi_12_p == 0) {
			pi_12_p = 1;
			document.getElementById('pi_12_p_rectangle').style.display = 'block';
		}
		else {
			pi_12_p = 0;
			document.getElementById('pi_12_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_12_mp() {
		if (pi_12_mp == 0) {
			pi_12_mp = 1;
			document.getElementById('pi_12_mp_rectangle').style.display = 'block';
		}
		else {
			pi_12_mp = 0;
			document.getElementById('pi_12_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_12() {
		if (tooth_12 == 1) {
			
		// Variablen aus dem Formular
			pd_12_db = document.forms[0]["pd_12_db"].value;
			pd_12_b = document.forms[0]["pd_12_b"].value;
			pd_12_mb = document.forms[0]["pd_12_mb"].value;

			if (document.forms[0]["pd_12_dp"].value > 3) {document.forms[0]["pd_12_dp"].style.color = 'red';} else {document.forms[0]["pd_12_dp"].style.color = 'black'}
			if (document.forms[0]["pd_12_p"].value > 3) {document.forms[0]["pd_12_p"].style.color = 'red';} else {document.forms[0]["pd_12_p"].style.color = 'black'}
			if (document.forms[0]["pd_12_mp"].value > 3) {document.forms[0]["pd_12_mp"].style.color = 'red';} else {document.forms[0]["pd_12_mp"].style.color = 'black'}
			
			gm_12_db = document.forms[0]["gm_12_db"].value;
			gm_12_b = document.forms[0]["gm_12_b"].value;
			gm_12_mb = document.forms[0]["gm_12_mb"].value;
			
			pd_12_dp = document.forms[0]["pd_12_dp"].value;
			pd_12_p = document.forms[0]["pd_12_p"].value;
			pd_12_mp = document.forms[0]["pd_12_mp"].value;

			if (document.forms[0]["pd_12_db"].value > 3) {document.forms[0]["pd_12_db"].style.color = 'red';} else {document.forms[0]["pd_12_db"].style.color = 'black'}
			if (document.forms[0]["pd_12_b"].value > 3) {document.forms[0]["pd_12_b"].style.color = 'red';} else {document.forms[0]["pd_12_b"].style.color = 'black'}
			if (document.forms[0]["pd_12_mb"].value > 3) {document.forms[0]["pd_12_mb"].style.color = 'red';} else {document.forms[0]["pd_12_mb"].style.color = 'black'}
			
			gm_12_dp = document.forms[0]["gm_12_dp"].value;
			gm_12_p = document.forms[0]["gm_12_p"].value;
			gm_12_mp = document.forms[0]["gm_12_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 12 (bukkal) in der Bitmap
			var x_db_12 = 588;							// distal 12
			var x_mb_12 = 612;							// mesial 12
			var x_b_12 = (x_db_12 + x_mb_12)/2;			// bukkal 12
			
		// Set der horizontalen Koordinaten von Zahn 12 (palatinal) in der Bitmap
			var x_dp_12 = 586;							// distal 12
			var x_mp_12 = 612;							// mesial 12
			var x_p_12 = (x_dp_12 + x_mp_12)/2;			// palatinal 12
			
		// Set der vertikalen Koordinaten von Zahn 12 (bukkal) aus dem Formular
			var y_gm_12_db = gm_OK_b + 6.5 * gm_12_db;	// Margo Gingivae distobukkal 12
			var y_gm_12_b = gm_OK_b + 6.5 * gm_12_b;	// Margo Gingivae bukkal 12
			var y_gm_12_mb = gm_OK_b + 6.5 * gm_12_mb;	// Margo Gingivae mesiobukkal 12
			var y_pd_12_db = 6.5 * pd_12_db;			// Sondierungstiefe distobukkal 12
			var y_pd_12_b = 6.5 * pd_12_b;				// Sondierungstiefe bukkal 12
			var y_pd_12_mb = 6.5 * pd_12_mb;			// Sondierungstiefe mesiobukkal 12
			
		// Set der vertikalen Koordinaten von Zahn 12 (palatinal) aus dem Formular
			var y_gm_12_dp = gm_OK_p - 6.5 * gm_12_dp;	// Margo Gingivae distopalatinal 12
			var y_gm_12_p = gm_OK_p - 6.5 * gm_12_p;	// Margo Gingivae palatinal 12
			var y_gm_12_mp = gm_OK_p - 6.5 * gm_12_mp;	// Margo Gingivae mesiopalatinal 12
			var y_pd_12_dp = 6.5 * pd_12_dp;			// Sondierungstiefe distopalatinal 12
			var y_pd_12_p = 6.5 * pd_12_p;				// Sondierungstiefe palatinal 12
			var y_pd_12_mp = 6.5 * pd_12_mp;			// Sondierungstiefe mesiopalatinal 12
			
		// Berechnung des Attachmentniveaus 12 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_12_db = y_gm_12_db - y_pd_12_db;	// Attachmentniveau distobukkal 12
			var y_al_12_b = y_gm_12_b - y_pd_12_b;		// Attachmentniveau bukkal 12
			var y_al_12_mb = y_gm_12_mb - y_pd_12_mb;	// Attachmentniveau mesiobukkal 12
			
		// Berechnung des Attachmentniveaus 12 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_12_dp = y_gm_12_dp + y_pd_12_dp;	// Attachmentniveau distopalatinal 12
			var y_al_12_p = y_gm_12_p + y_pd_12_p;		// Attachmentniveau palatinal 12
			var y_al_12_mp = y_gm_12_mp + y_pd_12_mp;	// Attachmentniveau mesiopalatinal 12
			
		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[12].storeCoordinates(
				x_db_12, x_mb_12, x_dp_12, x_mp_12, x_b_12, x_p_12,
				y_gm_12_db, y_gm_12_b, y_gm_12_mb, y_pd_12_db, y_pd_12_b, y_pd_12_mb,
				y_gm_12_dp, y_gm_12_p, y_gm_12_mp, y_pd_12_dp, y_pd_12_p, y_pd_12_mp,
				y_al_12_db, y_al_12_b, y_al_12_mb, y_al_12_dp, y_al_12_p, y_al_12_mp
			);
		
		// Parodontaltasche 12 bukkal zeichnen
			var string = 
				x_db_12 + ", " + y_al_12_db + "  " + 
				x_b_12 + ", " + y_al_12_b + "  " + 
				x_mb_12 + ", " + y_al_12_mb + "  " + 
				x_mb_12 + ", " + y_gm_12_mb + "  " + 
				x_b_12 + ", " + y_gm_12_b + "  " + 
				x_db_12 + ", " + y_gm_12_db;
			document.getElementById("polygon_12_b").setAttribute("points", string);
		// Attachmentniveau 12 bukkal zeichnen
			var string = 
				x_db_12 + ", " + y_al_12_db + "  " + 
				x_b_12 + ", " + y_al_12_b + "  " + 
				x_mb_12 + ", " + y_al_12_mb;
			document.getElementById("polyline_al_12_b").setAttribute("points", string);
		// Margo Gingivae 12 bukkal zeichnen
			var string =
				x_db_12 + ", " + y_gm_12_db + "  " + 
				x_b_12 + ", " + y_gm_12_b + "  " + 
				x_mb_12 + ", " + y_gm_12_mb;
			document.getElementById("polyline_gm_12_b").setAttribute("points", string);

		// Parodontaltasche 12 palatinal zeichnen
			var string = 
				x_dp_12 + ", " + y_al_12_dp + "  " + 
				x_p_12 + ", " + y_al_12_p + "  " + 
				x_mp_12 + ", " + y_al_12_mp + "  " + 
				x_mp_12 + ", " + y_gm_12_mp + "  " + 
				x_p_12 + ", " + y_gm_12_p + "  " + 
				x_dp_12 + ", " + y_gm_12_dp;
			document.getElementById("polygon_12_p").setAttribute("points", string);
		// Attachmentniveau 12 palatinal zeichnen
			var string = 
				x_dp_12 + ", " + y_al_12_dp + "  " + 
				x_p_12 + ", " + y_al_12_p + "  " + 
				x_mp_12 + ", " + y_al_12_mp;
			document.getElementById("polyline_al_12_p").setAttribute("points", string);
		// Margo Gingivae 12 palatinal zeichnen
			var string =
				x_dp_12 + ", " + y_gm_12_dp + "  " + 
				x_p_12 + ", " + y_gm_12_p + "  " + 
				x_mp_12 + ", " + y_gm_12_mp;
			document.getElementById("polyline_gm_12_p").setAttribute("points", string);
		}
        if (tooth_12 == 1 && tooth_11 == 1) {

            pd_11_db = document.forms[0]["pd_11_db"].value;
			gm_11_db = document.forms[0]["gm_11_db"].value;
			
			pd_11_dp = document.forms[0]["pd_11_dp"].value;
			gm_11_dp = document.forms[0]["gm_11_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 11 (bukkal) in der Bitmap
			var x_db_11 = 628;							// distal 11
			
		// Set der horizontalen Koordinaten von Zahn 11 (palatinal) in der Bitmap
			var x_dp_11 = 627;							// distal 11
			
		// Set der vertikalen Koordinaten von Zahn 11 (bukkal) aus dem Formular
			var y_gm_11_db = gm_OK_b + 6.5 * gm_11_db;	// Margo Gingivae distobukkal 11
			var y_pd_11_db = 6.5 * pd_11_db;			// Sondierungstiefe distobukkal 11
			
		// Set der vertikalen Koordinaten von Zahn 11 (palatinal) aus dem Formular
			var y_gm_11_dp = gm_OK_p - 6.5 * gm_11_dp;	// Margo Gingivae distopalatinal 11
			var y_pd_11_dp = 6.5 * pd_11_dp;			// Sondierungstiefe distopalatinal 11
			
		// Berechnung des Attachmentniveaus 11 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_11_db = y_gm_11_db - y_pd_11_db;	// Attachmentniveau distobukkal 11
			
		// Berechnung des Attachmentniveaus 11 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_11_dp = y_gm_11_dp + y_pd_11_dp;	// Attachmentniveau distopalatinal 11

		// Parodontaltasche inter_12_11 bukkal zeichnen
			var string = 
				x_mb_12 + ", " + y_al_12_mb + "  " + 
				x_db_11 + ", " + y_al_11_db + "  " + 
				x_db_11 + ", " + y_gm_11_db + "  " + 
				x_mb_12 + ", " + y_gm_12_mb;
			document.getElementById("polygon_inter_12_11_b").setAttribute("points", string);
		// Attachmentniveau inter_12_11 bukkal zeichnen
			var string = 
				x_mb_12 + ", " + y_al_12_mb + "  " + 
				x_db_11 + ", " + y_al_11_db;
			document.getElementById("polyline_al_inter_12_11_b").setAttribute("points", string);
		// Margo Gingivae inter_12_11 bukkal zeichnen
			var string =
				x_mb_12 + ", " + y_gm_12_mb + "  " + 
				x_db_11 + ", " + y_gm_11_db;
			document.getElementById("polyline_gm_inter_12_11_b").setAttribute("points", string);

        // Parodontaltasche inter_12_11 palatinal zeichnen
			var string = 
				x_mp_12 + ", " + y_al_12_mp + "  " + 
				x_dp_11 + ", " + y_al_11_dp + "  " + 
				x_dp_11 + ", " + y_gm_11_dp + "  " + 
				x_mp_12 + ", " + y_gm_12_mp;
			document.getElementById("polygon_inter_12_11_p").setAttribute("points", string);
		// Attachmentniveau inter_12_11 palatinal zeichnen
			var string = 
				x_mp_12 + ", " + y_al_12_mp + "  " + 
				x_dp_11 + ", " + y_al_11_dp;
			document.getElementById("polyline_al_inter_12_11_p").setAttribute("points", string);
		// Margo Gingivae inter_12_11 palatinal zeichnen
			var string =
				x_mp_12 + ", " + y_gm_12_mp + "  " + 
				x_dp_11 + ", " + y_gm_11_dp;
			document.getElementById("polyline_gm_inter_12_11_p").setAttribute("points", string);
		}
        if (tooth_13 == 1 && tooth_12 == 1) {

            pd_13_mb = document.forms[0]["pd_13_mb"].value;
			gm_13_mb = document.forms[0]["gm_13_mb"].value;
			
			pd_13_mp = document.forms[0]["pd_13_mp"].value;
			gm_13_mp = document.forms[0]["gm_13_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 13 (bukkal) in der Bitmap
			var x_mb_13 = 570;							// mesial 13
			
		// Set der horizontalen Koordinaten von Zahn 13 (palatinal) in der Bitmap
			var x_mp_13 = 573;							// mesial 13
			
		// Set der vertikalen Koordinaten von Zahn 13 (bukkal) aus dem Formular
			var y_gm_13_mb = gm_OK_b + 6.5 * gm_13_mb;	// Margo Gingivae mesiobukkal 13
			var y_pd_13_mb = 6.5 * pd_13_mb;			// Sondierungstiefe mesiobukkal 13
			
		// Set der vertikalen Koordinaten von Zahn 13 (palatinal) aus dem Formular
			var y_gm_13_mp = gm_OK_p - 6.5 * gm_13_mp;	// Margo Gingivae mesiopalatinal 13
			var y_pd_13_mp = 6.5 * pd_13_mp;			// Sondierungstiefe mesiopalatinal 13
			
		// Berechnung des Attachmentniveaus 13 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_13_mb = y_gm_13_mb - y_pd_13_mb;	// Attachmentniveau mesiobukkal 13
			
		// Berechnung des Attachmentniveaus 13 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_13_mp = y_gm_13_mp + y_pd_13_mp;	// Attachmentniveau mesiopalatinal 13

		// Parodontaltasche inter_13_12 bukkal zeichnen
			var string = 
				x_mb_13 + ", " + y_al_13_mb + "  " + 
				x_db_12 + ", " + y_al_12_db + "  " + 
				x_db_12 + ", " + y_gm_12_db + "  " + 
				x_mb_13 + ", " + y_gm_13_mb;
			document.getElementById("polygon_inter_13_12_b").setAttribute("points", string);
		// Attachmentniveau inter_13_12 bukkal zeichnen
			var string = 
				x_mb_13 + ", " + y_al_13_mb + "  " + 
				x_db_12 + ", " + y_al_12_db;
			document.getElementById("polyline_al_inter_13_12_b").setAttribute("points", string);
		// Margo Gingivae inter_13_12 bukkal zeichnen
			var string =
				x_mb_13 + ", " + y_gm_13_mb + "  " + 
				x_db_12 + ", " + y_gm_12_db;
			document.getElementById("polyline_gm_inter_13_12_b").setAttribute("points", string);

        // Parodontaltasche inter_13_12 palatinal zeichnen
			var string = 
				x_mp_13 + ", " + y_al_13_mp + "  " + 
				x_dp_12 + ", " + y_al_12_dp + "  " + 
				x_dp_12 + ", " + y_gm_12_dp + "  " + 
				x_mp_13 + ", " + y_gm_13_mp;
			document.getElementById("polygon_inter_13_12_p").setAttribute("points", string);
		// Attachmentniveau inter_13_12 palatinal zeichnen
			var string = 
				x_mp_13 + ", " + y_al_13_mp + "  " + 
				x_dp_12 + ", " + y_al_12_dp;
			document.getElementById("polyline_al_inter_13_12_p").setAttribute("points", string);
		// Margo Gingivae inter_13_12 palatinal zeichnen
			var string =
				x_mp_13 + ", " + y_gm_13_mp + "  " + 
				x_dp_12 + ", " + y_gm_12_dp;
			document.getElementById("polyline_gm_inter_13_12_p").setAttribute("points", string);
		}
	}