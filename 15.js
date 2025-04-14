	// Definition der Variablen für das Formular
		var tooth_15 = 1;
		var Implantat_15 = 0;
		var bop_15_db = 0;
		var bop_15_b = 0;
		var bop_15_mb = 0;
		var pi_15_db = 0;
		var pi_15_b = 0;
		var pi_15_mb = 0;
		var bop_15_dp = 0;
		var bop_15_p = 0;
		var bop_15_mp = 0;
		var pi_15_dp = 0;
		var pi_15_p = 0;
		var pi_15_mp = 0;
		var gm_15_db = 0;
		var gm_15_b = 0;
		var gm_15_mb = 0;
		var pd_15_db = 0;
		var pd_15_b = 0;
		var pd_15_mb = 0;
		var gm_15_dp = 0;
		var gm_15_p = 0;
		var gm_15_mp = 0;
		var pd_15_dp = 0;
		var pd_15_p = 0;
		var pd_15_mp = 0;

	function clear_data_15() {
        if (tooth_15 == 1) {
			gm_15_db = 0;
			gm_15_b = 0;
			gm_15_mb = 0;
			pd_15_db = 0;
			pd_15_b = 0;
			pd_15_mb = 0;
	
				document.getElementById('gm_15_db_txt').value = 0;
				document.getElementById('gm_15_b_txt').value = 0;
				document.getElementById('gm_15_mb_txt').value = 0;
				
				document.getElementById('pd_15_db_txt').value = 0;
				document.getElementById('pd_15_b_txt').value = 0;
				document.getElementById('pd_15_mb_txt').value = 0;
			
				document.forms[0]["pd_15_db"].style.color = 'black'
				document.forms[0]["pd_15_b"].style.color = 'black'
				document.forms[0]["pd_15_mb"].style.color = 'black'
			
			gm_15_dp = 0;
			gm_15_p = 0;
			gm_15_mp = 0;
			pd_15_dp = 0;
			pd_15_p = 0;
			pd_15_mp = 0;

				document.getElementById('gm_15_dp_txt').value = 0;
				document.getElementById('gm_15_p_txt').value = 0;
				document.getElementById('gm_15_mp_txt').value = 0;
				
				document.getElementById('pd_15_dp_txt').value = 0;
				document.getElementById('pd_15_p_txt').value = 0;
				document.getElementById('pd_15_mp_txt').value = 0;

				document.forms[0]["pd_15_dp"].style.color = 'black'
				document.forms[0]["pd_15_p"].style.color = 'black'
				document.forms[0]["pd_15_mp"].style.color = 'black'
			
			change_probing_15();
			
			mobility_15 = 0;

				document.getElementById('mobility_15_txt').value = "0";

			note_15 = "";

				document.getElementById('note_15_txt').value = "";
	
			bop_15_db = 0;
			bop_15_b = 0;
			bop_15_mb = 0;
					
			bop_15_dp = 0;
			bop_15_p = 0;
			bop_15_mp = 0;
					
				document.getElementById('bop_15_db_rectangle').style.display = 'none';
				document.getElementById('bop_15_b_rectangle').style.display = 'none';
				document.getElementById('bop_15_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_15_dp_rectangle').style.display = 'none';
				document.getElementById('bop_15_p_rectangle').style.display = 'none';
				document.getElementById('bop_15_mp_rectangle').style.display = 'none';
				
			pi_15_db = 0;
			pi_15_b = 0;
			pi_15_mb = 0;
					
			pi_15_dp = 0;
			pi_15_p = 0;
			pi_15_mp = 0;

				document.getElementById('pi_15_db_rectangle').style.display = 'none';
				document.getElementById('pi_15_b_rectangle').style.display = 'none';
				document.getElementById('pi_15_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_15_dp_rectangle').style.display = 'none';
				document.getElementById('pi_15_p_rectangle').style.display = 'none';
				document.getElementById('pi_15_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_15() {
		if (tooth_15 === 1) {
			tooth_15 = 0;
			document.getElementById('tooth_line_15_b').style.display = 'block';
			document.getElementById('tooth_line_15_p').style.display = 'block';
			
			document.getElementById('mobility_15_txt').style.display = 'none';
			
			document.getElementById('implantat_15_btn').style.display = 'none';
			document.getElementById('implantat_15_tab').style.display = 'none';
			document.getElementById('implantat_15_b_image').style.display = 'none';
			document.getElementById('implantat_15_p_image').style.display = 'none';

			document.getElementById('gm_15_db_txt').style.display = 'none';
			document.getElementById('gm_15_b_txt').style.display = 'none';
			document.getElementById('gm_15_mb_txt').style.display = 'none';
			
			document.getElementById('pd_15_db_txt').style.display = 'none';
			document.getElementById('pd_15_b_txt').style.display = 'none';
			document.getElementById('pd_15_mb_txt').style.display = 'none';
			
			document.getElementById('gm_15_dp_txt').style.display = 'none';
			document.getElementById('gm_15_p_txt').style.display = 'none';
			document.getElementById('gm_15_mp_txt').style.display = 'none';
			
			document.getElementById('pd_15_dp_txt').style.display = 'none';
			document.getElementById('pd_15_p_txt').style.display = 'none';
			document.getElementById('pd_15_mp_txt').style.display = 'none';
						
			document.getElementById('bop_15_db_rectangle').style.display = 'none';
			document.getElementById('bop_15_b_rectangle').style.display = 'none';
			document.getElementById('bop_15_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_15_dp_rectangle').style.display = 'none';
			document.getElementById('bop_15_p_rectangle').style.display = 'none';
			document.getElementById('bop_15_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_15_db_btn').style.display = 'none';
			document.getElementById('bop_15_b_btn').style.display = 'none';
			document.getElementById('bop_15_mb_btn').style.display = 'none';
			
			document.getElementById('bop_15_dp_btn').style.display = 'none';
			document.getElementById('bop_15_p_btn').style.display = 'none';
			document.getElementById('bop_15_mp_btn').style.display = 'none';
			
			document.getElementById('pi_15_db_rectangle').style.display = 'none';
			document.getElementById('pi_15_b_rectangle').style.display = 'none';
			document.getElementById('pi_15_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_15_dp_rectangle').style.display = 'none';
			document.getElementById('pi_15_p_rectangle').style.display = 'none';
			document.getElementById('pi_15_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_15_db_btn').style.display = 'none';
			document.getElementById('pi_15_b_btn').style.display = 'none';
			document.getElementById('pi_15_mb_btn').style.display = 'none';
			
			document.getElementById('pi_15_dp_btn').style.display = 'none';
			document.getElementById('pi_15_p_btn').style.display = 'none';
			document.getElementById('pi_15_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_15_b').style.display = 'none';
			document.getElementById('polyline_al_15_b').style.display = 'none';
			document.getElementById('polyline_gm_15_b').style.display = 'none';
			
			document.getElementById('polygon_15_p').style.display = 'none';
			document.getElementById('polyline_al_15_p').style.display = 'none';
			document.getElementById('polyline_gm_15_p').style.display = 'none';
			
			document.getElementById('polygon_inter_16_15_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_16_15_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_16_15_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_16_15_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_16_15_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_16_15_p').style.display = 'none';            
            
			document.getElementById('polygon_inter_15_14_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_15_14_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_15_14_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_15_14_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_15_14_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_15_14_p').style.display = 'none';            
			
			document.getElementById('note_15_txt').style.display = 'none';
		}
		else if (Implantat_15 !== 1) {
			tooth_15 = 1;
			document.getElementById('tooth_line_15_b').style.display = 'none';
			document.getElementById('tooth_line_15_p').style.display = 'none';

			document.getElementById('mobility_15_txt').style.display = 'block';

			document.getElementById('implantat_15_btn').style.display = 'block';

			document.getElementById('gm_15_db_txt').style.display = 'block';
			document.getElementById('gm_15_b_txt').style.display = 'block';
			document.getElementById('gm_15_mb_txt').style.display = 'block';
			
			document.getElementById('pd_15_db_txt').style.display = 'block';
			document.getElementById('pd_15_b_txt').style.display = 'block';
			document.getElementById('pd_15_mb_txt').style.display = 'block';
			
			document.getElementById('gm_15_dp_txt').style.display = 'block';
			document.getElementById('gm_15_p_txt').style.display = 'block';
			document.getElementById('gm_15_mp_txt').style.display = 'block';
			
			document.getElementById('pd_15_dp_txt').style.display = 'block';
			document.getElementById('pd_15_p_txt').style.display = 'block';
			document.getElementById('pd_15_mp_txt').style.display = 'block';
			
			document.getElementById('note_15_txt').style.display = 'block';

			document.getElementById('polygon_15_b').style.display = 'block';
			document.getElementById('polyline_al_15_b').style.display = 'block';
			document.getElementById('polyline_gm_15_b').style.display = 'block';
			
			document.getElementById('polygon_15_p').style.display = 'block';
			document.getElementById('polyline_al_15_p').style.display = 'block';
			document.getElementById('polyline_gm_15_p').style.display = 'block';

            if (tooth_16 == 1 && tooth_15 == 1) {
				document.getElementById('polygon_inter_16_15_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_16_15_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_16_15_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_16_15_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_16_15_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_16_15_p').style.display = 'block';            
            }
            
            if (tooth_15 == 1 && tooth_14 == 1) {
				document.getElementById('polygon_inter_15_14_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_15_14_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_15_14_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_15_14_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_15_14_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_15_14_p').style.display = 'block';            
            }
            
			document.getElementById('bop_15_db_btn').style.display = 'block';
			document.getElementById('bop_15_b_btn').style.display = 'block';
			document.getElementById('bop_15_mb_btn').style.display = 'block';

			document.getElementById('bop_15_dp_btn').style.display = 'block';
			document.getElementById('bop_15_p_btn').style.display = 'block';
			document.getElementById('bop_15_mp_btn').style.display = 'block';
			
			if (bop_15_db == 1) {
				document.getElementById('bop_15_db_rectangle').style.display = 'block';
			}
			if (bop_15_b == 1) {
				document.getElementById('bop_15_b_rectangle').style.display = 'block';
			}
			if (bop_15_mb == 1) {
				document.getElementById('bop_15_mb_rectangle').style.display = 'block';
			}
			if (bop_15_dp == 1) {
				document.getElementById('bop_15_dp_rectangle').style.display = 'block';
			}
			if (bop_15_p == 1) {
				document.getElementById('bop_15_p_rectangle').style.display = 'block';
			}
			if (bop_15_mp == 1) {
				document.getElementById('bop_15_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_15_db_btn').style.display = 'block';
			document.getElementById('pi_15_b_btn').style.display = 'block';
			document.getElementById('pi_15_mb_btn').style.display = 'block';

			document.getElementById('pi_15_dp_btn').style.display = 'block';
			document.getElementById('pi_15_p_btn').style.display = 'block';
			document.getElementById('pi_15_mp_btn').style.display = 'block';
			
			if (pi_15_db == 1) {
				document.getElementById('pi_15_db_rectangle').style.display = 'block';
			}
			if (pi_15_b == 1) {
				document.getElementById('pi_15_b_rectangle').style.display = 'block';
			}
			if (pi_15_mb == 1) {
				document.getElementById('pi_15_mb_rectangle').style.display = 'block';
			}
			if (pi_15_dp == 1) {
				document.getElementById('pi_15_dp_rectangle').style.display = 'block';
			}
			if (pi_15_p == 1) {
				document.getElementById('pi_15_p_rectangle').style.display = 'block';
			}
			if (pi_15_mp == 1) {
				document.getElementById('pi_15_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_15 == 1) {
			tooth_15 = 1;
			document.getElementById('tooth_line_15_b').style.display = 'none';
			document.getElementById('tooth_line_15_p').style.display = 'none';

			document.getElementById('mobility_15_txt').style.display = 'block';
			
			document.getElementById('note_15_txt').style.display = 'block';

			document.getElementById('implantat_15_btn').style.display = 'block';
			document.getElementById('implantat_15_tab').style.display = 'block';
			document.getElementById('implantat_15_b_image').style.display = 'block';
			document.getElementById('implantat_15_p_image').style.display = 'block';

			document.getElementById('gm_15_db_txt').style.display = 'block';
			document.getElementById('gm_15_b_txt').style.display = 'block';
			document.getElementById('gm_15_mb_txt').style.display = 'block';
			
			document.getElementById('pd_15_db_txt').style.display = 'block';
			document.getElementById('pd_15_b_txt').style.display = 'block';
			document.getElementById('pd_15_mb_txt').style.display = 'block';
			
			document.getElementById('gm_15_dp_txt').style.display = 'block';
			document.getElementById('gm_15_p_txt').style.display = 'block';
			document.getElementById('gm_15_mp_txt').style.display = 'block';
			
			document.getElementById('pd_15_dp_txt').style.display = 'block';
			document.getElementById('pd_15_p_txt').style.display = 'block';
			document.getElementById('pd_15_mp_txt').style.display = 'block';

			document.getElementById('polygon_15_b').style.display = 'block';
			document.getElementById('polyline_al_15_b').style.display = 'block';
			document.getElementById('polyline_gm_15_b').style.display = 'block';
			
			document.getElementById('polygon_15_p').style.display = 'block';
			document.getElementById('polyline_al_15_p').style.display = 'block';
			document.getElementById('polyline_gm_15_p').style.display = 'block';

            if (tooth_16 == 1 && tooth_15 == 1) {
				document.getElementById('polygon_inter_16_15_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_16_15_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_16_15_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_16_15_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_16_15_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_16_15_p').style.display = 'block';            
            }
            
            if (tooth_15 == 1 && tooth_14 == 1) {
				document.getElementById('polygon_inter_15_14_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_15_14_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_15_14_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_15_14_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_15_14_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_15_14_p').style.display = 'block';            
            }

			document.getElementById('bop_15_db_btn').style.display = 'block';
			document.getElementById('bop_15_b_btn').style.display = 'block';
			document.getElementById('bop_15_mb_btn').style.display = 'block';

			document.getElementById('bop_15_dp_btn').style.display = 'block';
			document.getElementById('bop_15_p_btn').style.display = 'block';
			document.getElementById('bop_15_mp_btn').style.display = 'block';
			
			document.getElementById('pi_15_db_btn').style.display = 'block';
			document.getElementById('pi_15_b_btn').style.display = 'block';
			document.getElementById('pi_15_mb_btn').style.display = 'block';

			document.getElementById('pi_15_dp_btn').style.display = 'block';
			document.getElementById('pi_15_p_btn').style.display = 'block';
			document.getElementById('pi_15_mp_btn').style.display = 'block';
			
			if (bop_15_db == 1) {
				document.getElementById('bop_15_db_rectangle').style.display = 'block';
			}
			if (bop_15_b == 1) {
				document.getElementById('bop_15_b_rectangle').style.display = 'block';
			}
			if (bop_15_mb == 1) {
				document.getElementById('bop_15_mb_rectangle').style.display = 'block';
			}
			if (bop_15_dp == 1) {
				document.getElementById('bop_15_dp_rectangle').style.display = 'block';
			}
			if (bop_15_p == 1) {
				document.getElementById('bop_15_p_rectangle').style.display = 'block';
			}
			if (bop_15_mp == 1) {
				document.getElementById('bop_15_mp_rectangle').style.display = 'block';
			}
			
			if (pi_15_db == 1) {
				document.getElementById('pi_15_db_rectangle').style.display = 'block';
			}
			if (pi_15_b == 1) {
				document.getElementById('pi_15_b_rectangle').style.display = 'block';
			}
			if (pi_15_mb == 1) {
				document.getElementById('pi_15_mb_rectangle').style.display = 'block';
			}
			if (pi_15_dp == 1) {
				document.getElementById('pi_15_dp_rectangle').style.display = 'block';
			}
			if (pi_15_p == 1) {
				document.getElementById('pi_15_p_rectangle').style.display = 'block';
			}
			if (pi_15_mp == 1) {
				document.getElementById('pi_15_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_15();
	}

	function toggle_implant_15() {
		if (Implantat_15 == 0) {
			Implantat_15 = 1;
			
			document.getElementById('implantat_15_b_image').style.display = 'block';
			document.getElementById('implantat_15_p_image').style.display = 'block';
			document.getElementById('implantat_15_tab').style.display = 'block';
		}
		else {
			Implantat_15 = 0;
			
			document.getElementById('implantat_15_b_image').style.display = 'none';
			document.getElementById('implantat_15_p_image').style.display = 'none';
			document.getElementById('implantat_15_tab').style.display = 'none';
		}
	}

	function toggle_bop_15_db() {
		if (bop_15_db == 0) {
			bop_15_db = 1;
			document.getElementById('bop_15_db_rectangle').style.display = 'block';
		}
		else {
			bop_15_db = 0;
			document.getElementById('bop_15_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_15_b() {
		if (bop_15_b == 0) {
			bop_15_b = 1;
			document.getElementById('bop_15_b_rectangle').style.display = 'block';
		}
		else {
			bop_15_b = 0;
			document.getElementById('bop_15_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_15_mb() {
		if (bop_15_mb == 0) {
			bop_15_mb = 1;
			document.getElementById('bop_15_mb_rectangle').style.display = 'block';
		}
		else {
			bop_15_mb = 0;
			document.getElementById('bop_15_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_15_db() {
		if (pi_15_db == 0) {
			pi_15_db = 1;
			document.getElementById('pi_15_db_rectangle').style.display = 'block';
		}
		else {
			pi_15_db = 0;
			document.getElementById('pi_15_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_15_b() {
		if (pi_15_b == 0) {
			pi_15_b = 1;
			document.getElementById('pi_15_b_rectangle').style.display = 'block';
		}
		else {
			pi_15_b = 0;
			document.getElementById('pi_15_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_15_mb() {
		if (pi_15_mb == 0) {
			pi_15_mb = 1;
			document.getElementById('pi_15_mb_rectangle').style.display = 'block';
		}
		else {
			pi_15_mb = 0;
			document.getElementById('pi_15_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_15_dp() {
		if (bop_15_dp == 0) {
			bop_15_dp = 1;
			document.getElementById('bop_15_dp_rectangle').style.display = 'block';
		}
		else {
			bop_15_dp = 0;
			document.getElementById('bop_15_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_15_p() {
		if (bop_15_p == 0) {
			bop_15_p = 1;
			document.getElementById('bop_15_p_rectangle').style.display = 'block';
		}
		else {
			bop_15_p = 0;
			document.getElementById('bop_15_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_15_mp() {
		if (bop_15_mp == 0) {
			bop_15_mp = 1;
			document.getElementById('bop_15_mp_rectangle').style.display = 'block';
		}
		else {
			bop_15_mp = 0;
			document.getElementById('bop_15_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_15_dp() {
		if (pi_15_dp == 0) {
			pi_15_dp = 1;
			document.getElementById('pi_15_dp_rectangle').style.display = 'block';
		}
		else {
			pi_15_dp = 0;
			document.getElementById('pi_15_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_15_p() {
		if (pi_15_p == 0) {
			pi_15_p = 1;
			document.getElementById('pi_15_p_rectangle').style.display = 'block';
		}
		else {
			pi_15_p = 0;
			document.getElementById('pi_15_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_15_mp() {
		if (pi_15_mp == 0) {
			pi_15_mp = 1;
			document.getElementById('pi_15_mp_rectangle').style.display = 'block';
		}
		else {
			pi_15_mp = 0;
			document.getElementById('pi_15_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_15() {
		if (tooth_15 == 1) {
			
		// Variablen aus dem Formular
			pd_15_db = document.forms[0]["pd_15_db"].value;
			pd_15_b = document.forms[0]["pd_15_b"].value;
			pd_15_mb = document.forms[0]["pd_15_mb"].value;

			if (document.forms[0]["pd_15_dp"].value > 3) {document.forms[0]["pd_15_dp"].style.color = 'red';} else {document.forms[0]["pd_15_dp"].style.color = 'black'}
			if (document.forms[0]["pd_15_p"].value > 3) {document.forms[0]["pd_15_p"].style.color = 'red';} else {document.forms[0]["pd_15_p"].style.color = 'black'}
			if (document.forms[0]["pd_15_mp"].value > 3) {document.forms[0]["pd_15_mp"].style.color = 'red';} else {document.forms[0]["pd_15_mp"].style.color = 'black'}
			
			gm_15_db = document.forms[0]["gm_15_db"].value;
			gm_15_b = document.forms[0]["gm_15_b"].value;
			gm_15_mb = document.forms[0]["gm_15_mb"].value;
			
			pd_15_dp = document.forms[0]["pd_15_dp"].value;
			pd_15_p = document.forms[0]["pd_15_p"].value;
			pd_15_mp = document.forms[0]["pd_15_mp"].value;

			if (document.forms[0]["pd_15_db"].value > 3) {document.forms[0]["pd_15_db"].style.color = 'red';} else {document.forms[0]["pd_15_db"].style.color = 'black'}
			if (document.forms[0]["pd_15_b"].value > 3) {document.forms[0]["pd_15_b"].style.color = 'red';} else {document.forms[0]["pd_15_b"].style.color = 'black'}
			if (document.forms[0]["pd_15_mb"].value > 3) {document.forms[0]["pd_15_mb"].style.color = 'red';} else {document.forms[0]["pd_15_mb"].style.color = 'black'}
			
			gm_15_dp = document.forms[0]["gm_15_dp"].value;
			gm_15_p = document.forms[0]["gm_15_p"].value;
			gm_15_mp = document.forms[0]["gm_15_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 15 (bukkal) in der Bitmap
			var x_db_15 = 463;							// distal 15
			var x_mb_15 = 489;							// mesial 15
			var x_b_15 = (x_db_15 + x_mb_15)/2;			// bukkal 15
			
		// Set der horizontalen Koordinaten von Zahn 15 (palatinal) in der Bitmap
			var x_dp_15 = 461;							// distal 15
			var x_mp_15 = 487;							// mesial 15
			var x_p_15 = (x_dp_15 + x_mp_15)/2;			// palatinal 15
			
		// Set der vertikalen Koordinaten von Zahn 15 (bukkal) aus dem Formular
			var y_gm_15_db = gm_OK_b + 6.5 * gm_15_db;	// Margo Gingivae distobukkal 15
			var y_gm_15_b = gm_OK_b + 6.5 * gm_15_b;	// Margo Gingivae bukkal 15
			var y_gm_15_mb = gm_OK_b + 6.5 * gm_15_mb;	// Margo Gingivae mesiobukkal 15
			var y_pd_15_db = 6.5 * pd_15_db;			// Sondierungstiefe distobukkal 15
			var y_pd_15_b = 6.5 * pd_15_b;				// Sondierungstiefe bukkal 15
			var y_pd_15_mb = 6.5 * pd_15_mb;			// Sondierungstiefe mesiobukkal 15
			
		// Set der vertikalen Koordinaten von Zahn 15 (palatinal) aus dem Formular
			var y_gm_15_dp = gm_OK_p - 6.5 * gm_15_dp;	// Margo Gingivae distopalatinal 15
			var y_gm_15_p = gm_OK_p - 6.5 * gm_15_p;	// Margo Gingivae palatinal 15
			var y_gm_15_mp = gm_OK_p - 6.5 * gm_15_mp;	// Margo Gingivae mesiopalatinal 15
			var y_pd_15_dp = 6.5 * pd_15_dp;			// Sondierungstiefe distopalatinal 15
			var y_pd_15_p = 6.5 * pd_15_p;				// Sondierungstiefe palatinal 15
			var y_pd_15_mp = 6.5 * pd_15_mp;			// Sondierungstiefe mesiopalatinal 15
			
		// Berechnung des Attachmentniveaus 15 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_15_db = y_gm_15_db - y_pd_15_db;	// Attachmentniveau distobukkal 15
			var y_al_15_b = y_gm_15_b - y_pd_15_b;		// Attachmentniveau bukkal 15
			var y_al_15_mb = y_gm_15_mb - y_pd_15_mb;	// Attachmentniveau mesiobukkal 15
			
		// Berechnung des Attachmentniveaus 15 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_15_dp = y_gm_15_dp + y_pd_15_dp;	// Attachmentniveau distopalatinal 15
			var y_al_15_p = y_gm_15_p + y_pd_15_p;		// Attachmentniveau palatinal 15
			var y_al_15_mp = y_gm_15_mp + y_pd_15_mp;	// Attachmentniveau mesiopalatinal 15
			
		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[15].storeCoordinates(
				x_db_15, x_mb_15, x_dp_15, x_mp_15, x_b_15, x_p_15,
				y_gm_15_db, y_gm_15_b, y_gm_15_mb, y_pd_15_db, y_pd_15_b, y_pd_15_mb,
				y_gm_15_dp, y_gm_15_p, y_gm_15_mp, y_pd_15_dp, y_pd_15_p, y_pd_15_mp,
				y_al_15_db, y_al_15_b, y_al_15_mb, y_al_15_dp, y_al_15_p, y_al_15_mp
			);
		
		// Parodontaltasche 15 bukkal zeichnen
			var string = 
				x_db_15 + ", " + y_al_15_db + "  " + 
				x_b_15 + ", " + y_al_15_b + "  " + 
				x_mb_15 + ", " + y_al_15_mb + "  " + 
				x_mb_15 + ", " + y_gm_15_mb + "  " + 
				x_b_15 + ", " + y_gm_15_b + "  " + 
				x_db_15 + ", " + y_gm_15_db;
			document.getElementById("polygon_15_b").setAttribute("points", string);
		// Attachmentniveau 15 bukkal zeichnen
			var string = 
				x_db_15 + ", " + y_al_15_db + "  " + 
				x_b_15 + ", " + y_al_15_b + "  " + 
				x_mb_15 + ", " + y_al_15_mb;
			document.getElementById("polyline_al_15_b").setAttribute("points", string);
		// Margo Gingivae 15 bukkal zeichnen
			var string =
				x_db_15 + ", " + y_gm_15_db + "  " + 
				x_b_15 + ", " + y_gm_15_b + "  " + 
				x_mb_15 + ", " + y_gm_15_mb;
			document.getElementById("polyline_gm_15_b").setAttribute("points", string);

		// Parodontaltasche 15 palatinal zeichnen
			var string = 
				x_dp_15 + ", " + y_al_15_dp + "  " + 
				x_p_15 + ", " + y_al_15_p + "  " + 
				x_mp_15 + ", " + y_al_15_mp + "  " + 
				x_mp_15 + ", " + y_gm_15_mp + "  " + 
				x_p_15 + ", " + y_gm_15_p + "  " + 
				x_dp_15 + ", " + y_gm_15_dp;
			document.getElementById("polygon_15_p").setAttribute("points", string);
		// Attachmentniveau 15 palatinal zeichnen
			var string = 
				x_dp_15 + ", " + y_al_15_dp + "  " + 
				x_p_15 + ", " + y_al_15_p + "  " + 
				x_mp_15 + ", " + y_al_15_mp;
			document.getElementById("polyline_al_15_p").setAttribute("points", string);
		// Margo Gingivae 15 palatinal zeichnen
			var string =
				x_dp_15 + ", " + y_gm_15_dp + "  " + 
				x_p_15 + ", " + y_gm_15_p + "  " + 
				x_mp_15 + ", " + y_gm_15_mp;
			document.getElementById("polyline_gm_15_p").setAttribute("points", string);
		}
        if (tooth_15 == 1 && tooth_14 == 1) {

            pd_14_db = document.forms[0]["pd_14_db"].value;
			gm_14_db = document.forms[0]["gm_14_db"].value;
			
			pd_14_dp = document.forms[0]["pd_14_dp"].value;
			gm_14_dp = document.forms[0]["gm_14_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 14 (bukkal) in der Bitmap
			var x_db_14 = 504;							// distal 14
			
		// Set der horizontalen Koordinaten von Zahn 14 (palatinal) in der Bitmap
			var x_dp_14 = 504;							// distal 14
			
		// Set der vertikalen Koordinaten von Zahn 14 (bukkal) aus dem Formular
			var y_gm_14_db = gm_OK_b + 6.5 * gm_14_db;	// Margo Gingivae distobukkal 14
			var y_pd_14_db = 6.5 * pd_14_db;			// Sondierungstiefe distobukkal 14
			
		// Set der vertikalen Koordinaten von Zahn 14 (palatinal) aus dem Formular
			var y_gm_14_dp = gm_OK_p - 6.5 * gm_14_dp;	// Margo Gingivae distopalatinal 14
			var y_pd_14_dp = 6.5 * pd_14_dp;			// Sondierungstiefe distopalatinal 14
			
		// Berechnung des Attachmentniveaus 14 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_14_db = y_gm_14_db - y_pd_14_db;	// Attachmentniveau distobukkal 14
			
		// Berechnung des Attachmentniveaus 14 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_14_dp = y_gm_14_dp + y_pd_14_dp;	// Attachmentniveau distopalatinal 14

		// Parodontaltasche inter_15_14 bukkal zeichnen
			var string = 
				x_mb_15 + ", " + y_al_15_mb + "  " + 
				x_db_14 + ", " + y_al_14_db + "  " + 
				x_db_14 + ", " + y_gm_14_db + "  " + 
				x_mb_15 + ", " + y_gm_15_mb;
			document.getElementById("polygon_inter_15_14_b").setAttribute("points", string);
		// Attachmentniveau inter_15_14 bukkal zeichnen
			var string = 
				x_mb_15 + ", " + y_al_15_mb + "  " + 
				x_db_14 + ", " + y_al_14_db;
			document.getElementById("polyline_al_inter_15_14_b").setAttribute("points", string);
		// Margo Gingivae inter_15_14 bukkal zeichnen
			var string =
				x_mb_15 + ", " + y_gm_15_mb + "  " + 
				x_db_14 + ", " + y_gm_14_db;
			document.getElementById("polyline_gm_inter_15_14_b").setAttribute("points", string);

        // Parodontaltasche inter_15_14 palatinal zeichnen
			var string = 
				x_mp_15 + ", " + y_al_15_mp + "  " + 
				x_dp_14 + ", " + y_al_14_dp + "  " + 
				x_dp_14 + ", " + y_gm_14_dp + "  " + 
				x_mp_15 + ", " + y_gm_15_mp;
			document.getElementById("polygon_inter_15_14_p").setAttribute("points", string);
		// Attachmentniveau inter_15_14 palatinal zeichnen
			var string = 
				x_mp_15 + ", " + y_al_15_mp + "  " + 
				x_dp_14 + ", " + y_al_14_dp;
			document.getElementById("polyline_al_inter_15_14_p").setAttribute("points", string);
		// Margo Gingivae inter_15_14 palatinal zeichnen
			var string =
				x_mp_15 + ", " + y_gm_15_mp + "  " + 
				x_dp_14 + ", " + y_gm_14_dp;
			document.getElementById("polyline_gm_inter_15_14_p").setAttribute("points", string);
		}
        if (tooth_16 == 1 && tooth_15 == 1) {

            pd_16_mb = document.forms[0]["pd_16_mb"].value;
			gm_16_mb = document.forms[0]["gm_16_mb"].value;
			
			pd_16_mp = document.forms[0]["pd_16_mp"].value;
			gm_16_mp = document.forms[0]["gm_16_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 16 (bukkal) in der Bitmap
			var x_mb_16 = 451;							// mesial 16
			
		// Set der horizontalen Koordinaten von Zahn 16 (palatinal) in der Bitmap
			var x_mp_16 = 445;							// mesial 16
			
		// Set der vertikalen Koordinaten von Zahn 16 (bukkal) aus dem Formular
			var y_gm_16_mb = gm_OK_b + 6.5 * gm_16_mb;	// Margo Gingivae mesiobukkal 16
			var y_pd_16_mb = 6.5 * pd_16_mb;			// Sondierungstiefe mesiobukkal 16
			
		// Set der vertikalen Koordinaten von Zahn 16 (palatinal) aus dem Formular
			var y_gm_16_mp = gm_OK_p - 6.5 * gm_16_mp;	// Margo Gingivae mesiopalatinal 16
			var y_pd_16_mp = 6.5 * pd_16_mp;			// Sondierungstiefe mesiopalatinal 16
			
		// Berechnung des Attachmentniveaus 16 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_16_mb = y_gm_16_mb - y_pd_16_mb;	// Attachmentniveau mesiobukkal 16
			
		// Berechnung des Attachmentniveaus 16 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_16_mp = y_gm_16_mp + y_pd_16_mp;	// Attachmentniveau mesiopalatinal 16

		// Parodontaltasche inter_16_15 bukkal zeichnen
			var string = 
				x_mb_16 + ", " + y_al_16_mb + "  " + 
				x_db_15 + ", " + y_al_15_db + "  " + 
				x_db_15 + ", " + y_gm_15_db + "  " + 
				x_mb_16 + ", " + y_gm_16_mb;
			document.getElementById("polygon_inter_16_15_b").setAttribute("points", string);
		// Attachmentniveau inter_16_15 bukkal zeichnen
			var string = 
				x_mb_16 + ", " + y_al_16_mb + "  " + 
				x_db_15 + ", " + y_al_15_db;
			document.getElementById("polyline_al_inter_16_15_b").setAttribute("points", string);
		// Margo Gingivae inter_16_15 bukkal zeichnen
			var string =
				x_mb_16 + ", " + y_gm_16_mb + "  " + 
				x_db_15 + ", " + y_gm_15_db;
			document.getElementById("polyline_gm_inter_16_15_b").setAttribute("points", string);

        // Parodontaltasche inter_16_15 palatinal zeichnen
			var string = 
				x_mp_16 + ", " + y_al_16_mp + "  " + 
				x_dp_15 + ", " + y_al_15_dp + "  " + 
				x_dp_15 + ", " + y_gm_15_dp + "  " + 
				x_mp_16 + ", " + y_gm_16_mp;
			document.getElementById("polygon_inter_16_15_p").setAttribute("points", string);
		// Attachmentniveau inter_16_15 palatinal zeichnen
			var string = 
				x_mp_16 + ", " + y_al_16_mp + "  " + 
				x_dp_15 + ", " + y_al_15_dp;
			document.getElementById("polyline_al_inter_16_15_p").setAttribute("points", string);
		// Margo Gingivae inter_16_15 palatinal zeichnen
			var string =
				x_mp_16 + ", " + y_gm_16_mp + "  " + 
				x_dp_15 + ", " + y_gm_15_dp;
			document.getElementById("polyline_gm_inter_16_15_p").setAttribute("points", string);
		}
	}