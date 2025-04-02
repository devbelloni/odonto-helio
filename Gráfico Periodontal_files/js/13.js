	// Definition der Variablen für das Formular
		var tooth_13 = 1;
		var Implantat_13 = 0;
		var bop_13_db = 0;
		var bop_13_b = 0;
		var bop_13_mb = 0;
		var pi_13_db = 0;
		var pi_13_b = 0;
		var pi_13_mb = 0;
		var bop_13_dp = 0;
		var bop_13_p = 0;
		var bop_13_mp = 0;
		var pi_13_dp = 0;
		var pi_13_p = 0;
		var pi_13_mp = 0;
		var gm_13_db = 0;
		var gm_13_b = 0;
		var gm_13_mb = 0;
		var pd_13_db = 0;
		var pd_13_b = 0;
		var pd_13_mb = 0;
		var gm_13_dp = 0;
		var gm_13_p = 0;
		var gm_13_mp = 0;
		var pd_13_dp = 0;
		var pd_13_p = 0;
		var pd_13_mp = 0;

	function clear_data_13() {
        if (tooth_13 == 1) {
			gm_13_db = 0;
			gm_13_b = 0;
			gm_13_mb = 0;
			pd_13_db = 0;
			pd_13_b = 0;
			pd_13_mb = 0;
	
				document.getElementById('gm_13_db_txt').value = 0;
				document.getElementById('gm_13_b_txt').value = 0;
				document.getElementById('gm_13_mb_txt').value = 0;
				
				document.getElementById('pd_13_db_txt').value = 0;
				document.getElementById('pd_13_b_txt').value = 0;
				document.getElementById('pd_13_mb_txt').value = 0;
			
				document.forms[0]["pd_13_db"].style.color = 'black'
				document.forms[0]["pd_13_b"].style.color = 'black'
				document.forms[0]["pd_13_mb"].style.color = 'black'
			
			gm_13_dp = 0;
			gm_13_p = 0;
			gm_13_mp = 0;
			pd_13_dp = 0;
			pd_13_p = 0;
			pd_13_mp = 0;

				document.getElementById('gm_13_dp_txt').value = 0;
				document.getElementById('gm_13_p_txt').value = 0;
				document.getElementById('gm_13_mp_txt').value = 0;
				
				document.getElementById('pd_13_dp_txt').value = 0;
				document.getElementById('pd_13_p_txt').value = 0;
				document.getElementById('pd_13_mp_txt').value = 0;

				document.forms[0]["pd_13_dp"].style.color = 'black'
				document.forms[0]["pd_13_p"].style.color = 'black'
				document.forms[0]["pd_13_mp"].style.color = 'black'
			
			change_probing_13();
			
			mobility_13 = 0;

				document.getElementById('mobility_13_txt').value = "0";

			note_13 = "";

				document.getElementById('note_13_txt').value = "";
	
			bop_13_db = 0;
			bop_13_b = 0;
			bop_13_mb = 0;
					
			bop_13_dp = 0;
			bop_13_p = 0;
			bop_13_mp = 0;
					
				document.getElementById('bop_13_db_rectangle').style.display = 'none';
				document.getElementById('bop_13_b_rectangle').style.display = 'none';
				document.getElementById('bop_13_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_13_dp_rectangle').style.display = 'none';
				document.getElementById('bop_13_p_rectangle').style.display = 'none';
				document.getElementById('bop_13_mp_rectangle').style.display = 'none';
				
			pi_13_db = 0;
			pi_13_b = 0;
			pi_13_mb = 0;
					
			pi_13_dp = 0;
			pi_13_p = 0;
			pi_13_mp = 0;

				document.getElementById('pi_13_db_rectangle').style.display = 'none';
				document.getElementById('pi_13_b_rectangle').style.display = 'none';
				document.getElementById('pi_13_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_13_dp_rectangle').style.display = 'none';
				document.getElementById('pi_13_p_rectangle').style.display = 'none';
				document.getElementById('pi_13_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_13() {
		if (tooth_13 === 1) {
			tooth_13 = 0;
			document.getElementById('tooth_line_13_b').style.display = 'block';
			document.getElementById('tooth_line_13_p').style.display = 'block';
			
			document.getElementById('mobility_13_txt').style.display = 'none';
			
			document.getElementById('implantat_13_btn').style.display = 'none';
			document.getElementById('implantat_13_tab').style.display = 'none';
			document.getElementById('implantat_13_b_image').style.display = 'none';
			document.getElementById('implantat_13_p_image').style.display = 'none';
			
			document.getElementById('gm_13_db_txt').style.display = 'none';
			document.getElementById('gm_13_b_txt').style.display = 'none';
			document.getElementById('gm_13_mb_txt').style.display = 'none';
			
			document.getElementById('pd_13_db_txt').style.display = 'none';
			document.getElementById('pd_13_b_txt').style.display = 'none';
			document.getElementById('pd_13_mb_txt').style.display = 'none';
			
			document.getElementById('gm_13_dp_txt').style.display = 'none';
			document.getElementById('gm_13_p_txt').style.display = 'none';
			document.getElementById('gm_13_mp_txt').style.display = 'none';
			
			document.getElementById('pd_13_dp_txt').style.display = 'none';
			document.getElementById('pd_13_p_txt').style.display = 'none';
			document.getElementById('pd_13_mp_txt').style.display = 'none';
			
			document.getElementById('bop_13_db_rectangle').style.display = 'none';
			document.getElementById('bop_13_b_rectangle').style.display = 'none';
			document.getElementById('bop_13_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_13_dp_rectangle').style.display = 'none';
			document.getElementById('bop_13_p_rectangle').style.display = 'none';
			document.getElementById('bop_13_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_13_db_btn').style.display = 'none';
			document.getElementById('bop_13_b_btn').style.display = 'none';
			document.getElementById('bop_13_mb_btn').style.display = 'none';
			
			document.getElementById('bop_13_dp_btn').style.display = 'none';
			document.getElementById('bop_13_p_btn').style.display = 'none';
			document.getElementById('bop_13_mp_btn').style.display = 'none';
			
			document.getElementById('pi_13_db_rectangle').style.display = 'none';
			document.getElementById('pi_13_b_rectangle').style.display = 'none';
			document.getElementById('pi_13_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_13_dp_rectangle').style.display = 'none';
			document.getElementById('pi_13_p_rectangle').style.display = 'none';
			document.getElementById('pi_13_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_13_db_btn').style.display = 'none';
			document.getElementById('pi_13_b_btn').style.display = 'none';
			document.getElementById('pi_13_mb_btn').style.display = 'none';
			
			document.getElementById('pi_13_dp_btn').style.display = 'none';
			document.getElementById('pi_13_p_btn').style.display = 'none';
			document.getElementById('pi_13_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_13_b').style.display = 'none';
			document.getElementById('polyline_al_13_b').style.display = 'none';
			document.getElementById('polyline_gm_13_b').style.display = 'none';
			
			document.getElementById('polygon_13_p').style.display = 'none';
			document.getElementById('polyline_al_13_p').style.display = 'none';
			document.getElementById('polyline_gm_13_p').style.display = 'none';
			
			document.getElementById('polygon_inter_14_13_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_14_13_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_14_13_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_14_13_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_14_13_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_14_13_p').style.display = 'none';            
            
			document.getElementById('polygon_inter_13_12_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_13_12_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_13_12_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_13_12_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_13_12_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_13_12_p').style.display = 'none';            
			
			document.getElementById('note_13_txt').style.display = 'none';
		}
		else if (Implantat_13 !== 1) {
			tooth_13 = 1;
			document.getElementById('tooth_line_13_b').style.display = 'none';
			document.getElementById('tooth_line_13_p').style.display = 'none';

			document.getElementById('mobility_13_txt').style.display = 'block';

			document.getElementById('implantat_13_btn').style.display = 'block';

			document.getElementById('gm_13_db_txt').style.display = 'block';
			document.getElementById('gm_13_b_txt').style.display = 'block';
			document.getElementById('gm_13_mb_txt').style.display = 'block';
			
			document.getElementById('pd_13_db_txt').style.display = 'block';
			document.getElementById('pd_13_b_txt').style.display = 'block';
			document.getElementById('pd_13_mb_txt').style.display = 'block';
			
			document.getElementById('gm_13_dp_txt').style.display = 'block';
			document.getElementById('gm_13_p_txt').style.display = 'block';
			document.getElementById('gm_13_mp_txt').style.display = 'block';
			
			document.getElementById('pd_13_dp_txt').style.display = 'block';
			document.getElementById('pd_13_p_txt').style.display = 'block';
			document.getElementById('pd_13_mp_txt').style.display = 'block';
			
			document.getElementById('note_13_txt').style.display = 'block';

			document.getElementById('polygon_13_b').style.display = 'block';
			document.getElementById('polyline_al_13_b').style.display = 'block';
			document.getElementById('polyline_gm_13_b').style.display = 'block';
			
			document.getElementById('polygon_13_p').style.display = 'block';
			document.getElementById('polyline_al_13_p').style.display = 'block';
			document.getElementById('polyline_gm_13_p').style.display = 'block';

            if (tooth_14 == 1 && tooth_13 == 1) {
				document.getElementById('polygon_inter_14_13_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_14_13_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_14_13_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_14_13_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_14_13_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_14_13_p').style.display = 'block';            
            }
            
            if (tooth_13 == 1 && tooth_12 == 1) {
				document.getElementById('polygon_inter_13_12_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_13_12_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_13_12_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_13_12_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_13_12_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_13_12_p').style.display = 'block';            
            }
            
			document.getElementById('bop_13_db_btn').style.display = 'block';
			document.getElementById('bop_13_b_btn').style.display = 'block';
			document.getElementById('bop_13_mb_btn').style.display = 'block';

			document.getElementById('bop_13_dp_btn').style.display = 'block';
			document.getElementById('bop_13_p_btn').style.display = 'block';
			document.getElementById('bop_13_mp_btn').style.display = 'block';
			
			if (bop_13_db == 1) {
				document.getElementById('bop_13_db_rectangle').style.display = 'block';
			}
			if (bop_13_b == 1) {
				document.getElementById('bop_13_b_rectangle').style.display = 'block';
			}
			if (bop_13_mb == 1) {
				document.getElementById('bop_13_mb_rectangle').style.display = 'block';
			}
			if (bop_13_dp == 1) {
				document.getElementById('bop_13_dp_rectangle').style.display = 'block';
			}
			if (bop_13_p == 1) {
				document.getElementById('bop_13_p_rectangle').style.display = 'block';
			}
			if (bop_13_mp == 1) {
				document.getElementById('bop_13_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_13_db_btn').style.display = 'block';
			document.getElementById('pi_13_b_btn').style.display = 'block';
			document.getElementById('pi_13_mb_btn').style.display = 'block';

			document.getElementById('pi_13_dp_btn').style.display = 'block';
			document.getElementById('pi_13_p_btn').style.display = 'block';
			document.getElementById('pi_13_mp_btn').style.display = 'block';
			
			if (pi_13_db == 1) {
				document.getElementById('pi_13_db_rectangle').style.display = 'block';
			}
			if (pi_13_b == 1) {
				document.getElementById('pi_13_b_rectangle').style.display = 'block';
			}
			if (pi_13_mb == 1) {
				document.getElementById('pi_13_mb_rectangle').style.display = 'block';
			}
			if (pi_13_dp == 1) {
				document.getElementById('pi_13_dp_rectangle').style.display = 'block';
			}
			if (pi_13_p == 1) {
				document.getElementById('pi_13_p_rectangle').style.display = 'block';
			}
			if (pi_13_mp == 1) {
				document.getElementById('pi_13_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_13 == 1) {
			tooth_13 = 1;
			document.getElementById('tooth_line_13_b').style.display = 'none';
			document.getElementById('tooth_line_13_p').style.display = 'none';

			document.getElementById('mobility_13_txt').style.display = 'block';
			
			document.getElementById('note_13_txt').style.display = 'block';

			document.getElementById('implantat_13_btn').style.display = 'block';
			document.getElementById('implantat_13_tab').style.display = 'block';
			document.getElementById('implantat_13_b_image').style.display = 'block';
			document.getElementById('implantat_13_p_image').style.display = 'block';

			document.getElementById('gm_13_db_txt').style.display = 'block';
			document.getElementById('gm_13_b_txt').style.display = 'block';
			document.getElementById('gm_13_mb_txt').style.display = 'block';
			
			document.getElementById('pd_13_db_txt').style.display = 'block';
			document.getElementById('pd_13_b_txt').style.display = 'block';
			document.getElementById('pd_13_mb_txt').style.display = 'block';
			
			document.getElementById('gm_13_dp_txt').style.display = 'block';
			document.getElementById('gm_13_p_txt').style.display = 'block';
			document.getElementById('gm_13_mp_txt').style.display = 'block';
			
			document.getElementById('pd_13_dp_txt').style.display = 'block';
			document.getElementById('pd_13_p_txt').style.display = 'block';
			document.getElementById('pd_13_mp_txt').style.display = 'block';

			document.getElementById('polygon_13_b').style.display = 'block';
			document.getElementById('polyline_al_13_b').style.display = 'block';
			document.getElementById('polyline_gm_13_b').style.display = 'block';
			
			document.getElementById('polygon_13_p').style.display = 'block';
			document.getElementById('polyline_al_13_p').style.display = 'block';
			document.getElementById('polyline_gm_13_p').style.display = 'block';

            if (tooth_14 == 1 && tooth_13 == 1) {
				document.getElementById('polygon_inter_14_13_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_14_13_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_14_13_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_14_13_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_14_13_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_14_13_p').style.display = 'block';            
            }
            
            if (tooth_13 == 1 && tooth_12 == 1) {
				document.getElementById('polygon_inter_13_12_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_13_12_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_13_12_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_13_12_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_13_12_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_13_12_p').style.display = 'block';            
            }

			document.getElementById('bop_13_db_btn').style.display = 'block';
			document.getElementById('bop_13_b_btn').style.display = 'block';
			document.getElementById('bop_13_mb_btn').style.display = 'block';

			document.getElementById('bop_13_dp_btn').style.display = 'block';
			document.getElementById('bop_13_p_btn').style.display = 'block';
			document.getElementById('bop_13_mp_btn').style.display = 'block';
			
			document.getElementById('pi_13_db_btn').style.display = 'block';
			document.getElementById('pi_13_b_btn').style.display = 'block';
			document.getElementById('pi_13_mb_btn').style.display = 'block';

			document.getElementById('pi_13_dp_btn').style.display = 'block';
			document.getElementById('pi_13_p_btn').style.display = 'block';
			document.getElementById('pi_13_mp_btn').style.display = 'block';
			
			if (bop_13_db == 1) {
				document.getElementById('bop_13_db_rectangle').style.display = 'block';
			}
			if (bop_13_b == 1) {
				document.getElementById('bop_13_b_rectangle').style.display = 'block';
			}
			if (bop_13_mb == 1) {
				document.getElementById('bop_13_mb_rectangle').style.display = 'block';
			}
			if (bop_13_dp == 1) {
				document.getElementById('bop_13_dp_rectangle').style.display = 'block';
			}
			if (bop_13_p == 1) {
				document.getElementById('bop_13_p_rectangle').style.display = 'block';
			}
			if (bop_13_mp == 1) {
				document.getElementById('bop_13_mp_rectangle').style.display = 'block';
			}
			
			if (pi_13_db == 1) {
				document.getElementById('pi_13_db_rectangle').style.display = 'block';
			}
			if (pi_13_b == 1) {
				document.getElementById('pi_13_b_rectangle').style.display = 'block';
			}
			if (pi_13_mb == 1) {
				document.getElementById('pi_13_mb_rectangle').style.display = 'block';
			}
			if (pi_13_dp == 1) {
				document.getElementById('pi_13_dp_rectangle').style.display = 'block';
			}
			if (pi_13_p == 1) {
				document.getElementById('pi_13_p_rectangle').style.display = 'block';
			}
			if (pi_13_mp == 1) {
				document.getElementById('pi_13_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_13();
	}

	function toggle_implant_13() {
		if (Implantat_13 == 0) {
			Implantat_13 = 1;
			
			document.getElementById('implantat_13_b_image').style.display = 'block';
			document.getElementById('implantat_13_p_image').style.display = 'block';
			document.getElementById('implantat_13_tab').style.display = 'block';
		}
		else {
			Implantat_13 = 0;
			
			document.getElementById('implantat_13_b_image').style.display = 'none';
			document.getElementById('implantat_13_p_image').style.display = 'none';
			document.getElementById('implantat_13_tab').style.display = 'none';
		}
	}

	function toggle_bop_13_db() {
		if (bop_13_db == 0) {
			bop_13_db = 1;
			document.getElementById('bop_13_db_rectangle').style.display = 'block';
		}
		else {
			bop_13_db = 0;
			document.getElementById('bop_13_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_13_b() {
		if (bop_13_b == 0) {
			bop_13_b = 1;
			document.getElementById('bop_13_b_rectangle').style.display = 'block';
		}
		else {
			bop_13_b = 0;
			document.getElementById('bop_13_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_13_mb() {
		if (bop_13_mb == 0) {
			bop_13_mb = 1;
			document.getElementById('bop_13_mb_rectangle').style.display = 'block';
		}
		else {
			bop_13_mb = 0;
			document.getElementById('bop_13_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_13_db() {
		if (pi_13_db == 0) {
			pi_13_db = 1;
			document.getElementById('pi_13_db_rectangle').style.display = 'block';
		}
		else {
			pi_13_db = 0;
			document.getElementById('pi_13_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_13_b() {
		if (pi_13_b == 0) {
			pi_13_b = 1;
			document.getElementById('pi_13_b_rectangle').style.display = 'block';
		}
		else {
			pi_13_b = 0;
			document.getElementById('pi_13_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_13_mb() {
		if (pi_13_mb == 0) {
			pi_13_mb = 1;
			document.getElementById('pi_13_mb_rectangle').style.display = 'block';
		}
		else {
			pi_13_mb = 0;
			document.getElementById('pi_13_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_13_dp() {
		if (bop_13_dp == 0) {
			bop_13_dp = 1;
			document.getElementById('bop_13_dp_rectangle').style.display = 'block';
		}
		else {
			bop_13_dp = 0;
			document.getElementById('bop_13_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_13_p() {
		if (bop_13_p == 0) {
			bop_13_p = 1;
			document.getElementById('bop_13_p_rectangle').style.display = 'block';
		}
		else {
			bop_13_p = 0;
			document.getElementById('bop_13_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_13_mp() {
		if (bop_13_mp == 0) {
			bop_13_mp = 1;
			document.getElementById('bop_13_mp_rectangle').style.display = 'block';
		}
		else {
			bop_13_mp = 0;
			document.getElementById('bop_13_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_13_dp() {
		if (pi_13_dp == 0) {
			pi_13_dp = 1;
			document.getElementById('pi_13_dp_rectangle').style.display = 'block';
		}
		else {
			pi_13_dp = 0;
			document.getElementById('pi_13_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_13_p() {
		if (pi_13_p == 0) {
			pi_13_p = 1;
			document.getElementById('pi_13_p_rectangle').style.display = 'block';
		}
		else {
			pi_13_p = 0;
			document.getElementById('pi_13_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_13_mp() {
		if (pi_13_mp == 0) {
			pi_13_mp = 1;
			document.getElementById('pi_13_mp_rectangle').style.display = 'block';
		}
		else {
			pi_13_mp = 0;
			document.getElementById('pi_13_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_13() {
		if (tooth_13 == 1) {
			
		// Variablen aus dem Formular
			pd_13_db = document.forms[0]["pd_13_db"].value;
			pd_13_b = document.forms[0]["pd_13_b"].value;
			pd_13_mb = document.forms[0]["pd_13_mb"].value;

			if (document.forms[0]["pd_13_dp"].value > 3) {document.forms[0]["pd_13_dp"].style.color = 'red';} else {document.forms[0]["pd_13_dp"].style.color = 'black'}
			if (document.forms[0]["pd_13_p"].value > 3) {document.forms[0]["pd_13_p"].style.color = 'red';} else {document.forms[0]["pd_13_p"].style.color = 'black'}
			if (document.forms[0]["pd_13_mp"].value > 3) {document.forms[0]["pd_13_mp"].style.color = 'red';} else {document.forms[0]["pd_13_mp"].style.color = 'black'}
			
			gm_13_db = document.forms[0]["gm_13_db"].value;
			gm_13_b = document.forms[0]["gm_13_b"].value;
			gm_13_mb = document.forms[0]["gm_13_mb"].value;
			
			pd_13_dp = document.forms[0]["pd_13_dp"].value;
			pd_13_p = document.forms[0]["pd_13_p"].value;
			pd_13_mp = document.forms[0]["pd_13_mp"].value;

			if (document.forms[0]["pd_13_db"].value > 3) {document.forms[0]["pd_13_db"].style.color = 'red';} else {document.forms[0]["pd_13_db"].style.color = 'black'}
			if (document.forms[0]["pd_13_b"].value > 3) {document.forms[0]["pd_13_b"].style.color = 'red';} else {document.forms[0]["pd_13_b"].style.color = 'black'}
			if (document.forms[0]["pd_13_mb"].value > 3) {document.forms[0]["pd_13_mb"].style.color = 'red';} else {document.forms[0]["pd_13_mb"].style.color = 'black'}
			
			gm_13_dp = document.forms[0]["gm_13_dp"].value;
			gm_13_p = document.forms[0]["gm_13_p"].value;
			gm_13_mp = document.forms[0]["gm_13_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 13 (bukkal) in der Bitmap
			var x_db_13 = 544;							// distal 13
			var x_mb_13 = 570;							// mesial 13
			var x_b_13 = (x_db_13 + x_mb_13)/2;			// bukkal 13
			
		// Set der horizontalen Koordinaten von Zahn 13 (palatinal) in der Bitmap
			var x_dp_13 = 546;							// distal 13
			var x_mp_13 = 573;							// mesial 13
			var x_p_13 = (x_dp_13 + x_mp_13)/2;			// palatinal 13
			
		// Set der vertikalen Koordinaten von Zahn 13 (bukkal) aus dem Formular
			var y_gm_13_db = gm_OK_b + 6.5 * gm_13_db;	// Margo Gingivae distobukkal 13
			var y_gm_13_b = gm_OK_b + 6.5 * gm_13_b;	// Margo Gingivae bukkal 13
			var y_gm_13_mb = gm_OK_b + 6.5 * gm_13_mb;	// Margo Gingivae mesiobukkal 13
			var y_pd_13_db = 6.5 * pd_13_db;			// Sondierungstiefe distobukkal 13
			var y_pd_13_b = 6.5 * pd_13_b;				// Sondierungstiefe bukkal 13
			var y_pd_13_mb = 6.5 * pd_13_mb;			// Sondierungstiefe mesiobukkal 13
			
		// Set der vertikalen Koordinaten von Zahn 13 (palatinal) aus dem Formular
			var y_gm_13_dp = gm_OK_p - 6.5 * gm_13_dp;	// Margo Gingivae distopalatinal 13
			var y_gm_13_p = gm_OK_p - 6.5 * gm_13_p;	// Margo Gingivae palatinal 13
			var y_gm_13_mp = gm_OK_p - 6.5 * gm_13_mp;	// Margo Gingivae mesiopalatinal 13
			var y_pd_13_dp = 6.5 * pd_13_dp;			// Sondierungstiefe distopalatinal 13
			var y_pd_13_p = 6.5 * pd_13_p;				// Sondierungstiefe palatinal 13
			var y_pd_13_mp = 6.5 * pd_13_mp;			// Sondierungstiefe mesiopalatinal 13
			
		// Berechnung des Attachmentniveaus 13 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_13_db = y_gm_13_db - y_pd_13_db;	// Attachmentniveau distobukkal 13
			var y_al_13_b = y_gm_13_b - y_pd_13_b;		// Attachmentniveau bukkal 13
			var y_al_13_mb = y_gm_13_mb - y_pd_13_mb;	// Attachmentniveau mesiobukkal 13
			
		// Berechnung des Attachmentniveaus 13 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_13_dp = y_gm_13_dp + y_pd_13_dp;	// Attachmentniveau distopalatinal 13
			var y_al_13_p = y_gm_13_p + y_pd_13_p;		// Attachmentniveau palatinal 13
			var y_al_13_mp = y_gm_13_mp + y_pd_13_mp;	// Attachmentniveau mesiopalatinal 13
			
		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[13].storeCoordinates(
				x_db_13, x_mb_13, x_dp_13, x_mp_13, x_b_13, x_p_13,
				y_gm_13_db, y_gm_13_b, y_gm_13_mb, y_pd_13_db, y_pd_13_b, y_pd_13_mb,
				y_gm_13_dp, y_gm_13_p, y_gm_13_mp, y_pd_13_dp, y_pd_13_p, y_pd_13_mp,
				y_al_13_db, y_al_13_b, y_al_13_mb, y_al_13_dp, y_al_13_p, y_al_13_mp
			);
		
		// Parodontaltasche 13 bukkal zeichnen
			var string = 
				x_db_13 + ", " + y_al_13_db + "  " + 
				x_b_13 + ", " + y_al_13_b + "  " + 
				x_mb_13 + ", " + y_al_13_mb + "  " + 
				x_mb_13 + ", " + y_gm_13_mb + "  " + 
				x_b_13 + ", " + y_gm_13_b + "  " + 
				x_db_13 + ", " + y_gm_13_db;
			document.getElementById("polygon_13_b").setAttribute("points", string);
		// Attachmentniveau 13 bukkal zeichnen
			var string = 
				x_db_13 + ", " + y_al_13_db + "  " + 
				x_b_13 + ", " + y_al_13_b + "  " + 
				x_mb_13 + ", " + y_al_13_mb;
			document.getElementById("polyline_al_13_b").setAttribute("points", string);
		// Margo Gingivae 13 bukkal zeichnen
			var string =
				x_db_13 + ", " + y_gm_13_db + "  " + 
				x_b_13 + ", " + y_gm_13_b + "  " + 
				x_mb_13 + ", " + y_gm_13_mb;
			document.getElementById("polyline_gm_13_b").setAttribute("points", string);

		// Parodontaltasche 13 palatinal zeichnen
			var string = 
				x_dp_13 + ", " + y_al_13_dp + "  " + 
				x_p_13 + ", " + y_al_13_p + "  " + 
				x_mp_13 + ", " + y_al_13_mp + "  " + 
				x_mp_13 + ", " + y_gm_13_mp + "  " + 
				x_p_13 + ", " + y_gm_13_p + "  " + 
				x_dp_13 + ", " + y_gm_13_dp;
			document.getElementById("polygon_13_p").setAttribute("points", string);
		// Attachmentniveau 13 palatinal zeichnen
			var string = 
				x_dp_13 + ", " + y_al_13_dp + "  " + 
				x_p_13 + ", " + y_al_13_p + "  " + 
				x_mp_13 + ", " + y_al_13_mp;
			document.getElementById("polyline_al_13_p").setAttribute("points", string);
		// Margo Gingivae 13 palatinal zeichnen
			var string =
				x_dp_13 + ", " + y_gm_13_dp + "  " + 
				x_p_13 + ", " + y_gm_13_p + "  " + 
				x_mp_13 + ", " + y_gm_13_mp;
			document.getElementById("polyline_gm_13_p").setAttribute("points", string);
		}
        if (tooth_13 == 1 && tooth_12 == 1) {

            pd_12_db = document.forms[0]["pd_12_db"].value;
			gm_12_db = document.forms[0]["gm_12_db"].value;
			
			pd_12_dp = document.forms[0]["pd_12_dp"].value;
			gm_12_dp = document.forms[0]["gm_12_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 12 (bukkal) in der Bitmap
			var x_db_12 = 588;							// distal 12
			
		// Set der horizontalen Koordinaten von Zahn 12 (palatinal) in der Bitmap
			var x_dp_12 = 586;							// distal 12
			
		// Set der vertikalen Koordinaten von Zahn 12 (bukkal) aus dem Formular
			var y_gm_12_db = gm_OK_b + 6.5 * gm_12_db;	// Margo Gingivae distobukkal 12
			var y_pd_12_db = 6.5 * pd_12_db;			// Sondierungstiefe distobukkal 12
			
		// Set der vertikalen Koordinaten von Zahn 12 (palatinal) aus dem Formular
			var y_gm_12_dp = gm_OK_p - 6.5 * gm_12_dp;	// Margo Gingivae distopalatinal 12
			var y_pd_12_dp = 6.5 * pd_12_dp;			// Sondierungstiefe distopalatinal 12
			
		// Berechnung des Attachmentniveaus 12 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_12_db = y_gm_12_db - y_pd_12_db;	// Attachmentniveau distobukkal 12
			
		// Berechnung des Attachmentniveaus 12 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_12_dp = y_gm_12_dp + y_pd_12_dp;	// Attachmentniveau distopalatinal 12

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
        if (tooth_14 == 1 && tooth_13 == 1) {

            pd_14_mb = document.forms[0]["pd_14_mb"].value;
			gm_14_mb = document.forms[0]["gm_14_mb"].value;
			
			pd_14_mp = document.forms[0]["pd_14_mp"].value;
			gm_14_mp = document.forms[0]["gm_14_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 14 (bukkal) in der Bitmap
			var x_mb_14 = 528;							// mesial 14
			
		// Set der horizontalen Koordinaten von Zahn 14 (palatinal) in der Bitmap
			var x_mp_14 = 529;							// mesial 14
			
		// Set der vertikalen Koordinaten von Zahn 14 (bukkal) aus dem Formular
			var y_gm_14_mb = gm_OK_b + 6.5 * gm_14_mb;	// Margo Gingivae mesiobukkal 14
			var y_pd_14_mb = 6.5 * pd_14_mb;			// Sondierungstiefe mesiobukkal 14
			
		// Set der vertikalen Koordinaten von Zahn 14 (palatinal) aus dem Formular
			var y_gm_14_mp = gm_OK_p - 6.5 * gm_14_mp;	// Margo Gingivae mesiopalatinal 14
			var y_pd_14_mp = 6.5 * pd_14_mp;			// Sondierungstiefe mesiopalatinal 14
			
		// Berechnung des Attachmentniveaus 14 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_14_mb = y_gm_14_mb - y_pd_14_mb;	// Attachmentniveau mesiobukkal 14
			
		// Berechnung des Attachmentniveaus 14 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_14_mp = y_gm_14_mp + y_pd_14_mp;	// Attachmentniveau mesiopalatinal 14

		// Parodontaltasche inter_14_13 bukkal zeichnen
			var string = 
				x_mb_14 + ", " + y_al_14_mb + "  " + 
				x_db_13 + ", " + y_al_13_db + "  " + 
				x_db_13 + ", " + y_gm_13_db + "  " + 
				x_mb_14 + ", " + y_gm_14_mb;
			document.getElementById("polygon_inter_14_13_b").setAttribute("points", string);
		// Attachmentniveau inter_14_13 bukkal zeichnen
			var string = 
				x_mb_14 + ", " + y_al_14_mb + "  " + 
				x_db_13 + ", " + y_al_13_db;
			document.getElementById("polyline_al_inter_14_13_b").setAttribute("points", string);
		// Margo Gingivae inter_14_13 bukkal zeichnen
			var string =
				x_mb_14 + ", " + y_gm_14_mb + "  " + 
				x_db_13 + ", " + y_gm_13_db;
			document.getElementById("polyline_gm_inter_14_13_b").setAttribute("points", string);

        // Parodontaltasche inter_14_13 palatinal zeichnen
			var string = 
				x_mp_14 + ", " + y_al_14_mp + "  " + 
				x_dp_13 + ", " + y_al_13_dp + "  " + 
				x_dp_13 + ", " + y_gm_13_dp + "  " + 
				x_mp_14 + ", " + y_gm_14_mp;
			document.getElementById("polygon_inter_14_13_p").setAttribute("points", string);
		// Attachmentniveau inter_14_13 palatinal zeichnen
			var string = 
				x_mp_14 + ", " + y_al_14_mp + "  " + 
				x_dp_13 + ", " + y_al_13_dp;
			document.getElementById("polyline_al_inter_14_13_p").setAttribute("points", string);
		// Margo Gingivae inter_14_13 palatinal zeichnen
			var string =
				x_mp_14 + ", " + y_gm_14_mp + "  " + 
				x_dp_13 + ", " + y_gm_13_dp;
			document.getElementById("polyline_gm_inter_14_13_p").setAttribute("points", string);
		}
	}