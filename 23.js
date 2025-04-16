	// Definition der Variablen für das Formular
		var tooth_23 = 1;
		var Implantat_23 = 0;
		var bop_23_db = 0;
		var bop_23_b = 0;
		var bop_23_mb = 0;
		var pi_23_db = 0;
		var pi_23_b = 0;
		var pi_23_mb = 0;
		var bop_23_dp = 0;
		var bop_23_p = 0;
		var bop_23_mp = 0;
		var pi_23_dp = 0;
		var pi_23_p = 0;
		var pi_23_mp = 0;
		var gm_23_db = 0;
		var gm_23_b = 0;
		var gm_23_mb = 0;
		var pd_23_db = 0;
		var pd_23_b = 0;
		var pd_23_mb = 0;
		var gm_23_dp = 0;
		var gm_23_p = 0;
		var gm_23_mp = 0;
		var pd_23_dp = 0;
		var pd_23_p = 0;
		var pd_23_mp = 0;

	function clear_data_23() {
        if (tooth_23 == 1) {
			gm_23_db = 0;
			gm_23_b = 0;
			gm_23_mb = 0;
			pd_23_db = 0;
			pd_23_b = 0;
			pd_23_mb = 0;
	
				document.getElementById('gm_23_db_txt').value = 0;
				document.getElementById('gm_23_b_txt').value = 0;
				document.getElementById('gm_23_mb_txt').value = 0;
				
				document.getElementById('pd_23_db_txt').value = 0;
				document.getElementById('pd_23_b_txt').value = 0;
				document.getElementById('pd_23_mb_txt').value = 0;
			
				document.forms[0]["pd_23_db"].style.color = 'black'
				document.forms[0]["pd_23_b"].style.color = 'black'
				document.forms[0]["pd_23_mb"].style.color = 'black'
			
			gm_23_dp = 0;
			gm_23_p = 0;
			gm_23_mp = 0;
			pd_23_dp = 0;
			pd_23_p = 0;
			pd_23_mp = 0;

				document.getElementById('gm_23_dp_txt').value = 0;
				document.getElementById('gm_23_p_txt').value = 0;
				document.getElementById('gm_23_mp_txt').value = 0;
				
				document.getElementById('pd_23_dp_txt').value = 0;
				document.getElementById('pd_23_p_txt').value = 0;
				document.getElementById('pd_23_mp_txt').value = 0;

				document.forms[0]["pd_23_dp"].style.color = 'black'
				document.forms[0]["pd_23_p"].style.color = 'black'
				document.forms[0]["pd_23_mp"].style.color = 'black'
			
			change_probing_23();
			
			mobility_23 = 0;

				document.getElementById('mobility_23_txt').value = "0";

			note_23 = "";

				document.getElementById('note_23_txt').value = "";
	
			bop_23_db = 0;
			bop_23_b = 0;
			bop_23_mb = 0;
					
			bop_23_dp = 0;
			bop_23_p = 0;
			bop_23_mp = 0;
					
				document.getElementById('bop_23_db_rectangle').style.display = 'none';
				document.getElementById('bop_23_b_rectangle').style.display = 'none';
				document.getElementById('bop_23_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_23_dp_rectangle').style.display = 'none';
				document.getElementById('bop_23_p_rectangle').style.display = 'none';
				document.getElementById('bop_23_mp_rectangle').style.display = 'none';
				
			pi_23_db = 0;
			pi_23_b = 0;
			pi_23_mb = 0;
					
			pi_23_dp = 0;
			pi_23_p = 0;
			pi_23_mp = 0;

				document.getElementById('pi_23_db_rectangle').style.display = 'none';
				document.getElementById('pi_23_b_rectangle').style.display = 'none';
				document.getElementById('pi_23_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_23_dp_rectangle').style.display = 'none';
				document.getElementById('pi_23_p_rectangle').style.display = 'none';
				document.getElementById('pi_23_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_23() {
		if (tooth_23 === 1) {
			tooth_23 = 0;
			document.getElementById('tooth_line_23_b').style.display = 'block';
			document.getElementById('tooth_line_23_p').style.display = 'block';
			
			document.getElementById('mobility_23_txt').style.display = 'none';
			
			document.getElementById('implantat_23_btn').style.display = 'none';
			document.getElementById('implantat_23_tab').style.display = 'none';
			document.getElementById('implantat_23_b_image').style.display = 'none';
			document.getElementById('implantat_23_p_image').style.display = 'none';

			document.getElementById('gm_23_db_txt').style.display = 'none';
			document.getElementById('gm_23_b_txt').style.display = 'none';
			document.getElementById('gm_23_mb_txt').style.display = 'none';
			
			document.getElementById('pd_23_db_txt').style.display = 'none';
			document.getElementById('pd_23_b_txt').style.display = 'none';
			document.getElementById('pd_23_mb_txt').style.display = 'none';
			
			document.getElementById('gm_23_dp_txt').style.display = 'none';
			document.getElementById('gm_23_p_txt').style.display = 'none';
			document.getElementById('gm_23_mp_txt').style.display = 'none';
			
			document.getElementById('pd_23_dp_txt').style.display = 'none';
			document.getElementById('pd_23_p_txt').style.display = 'none';
			document.getElementById('pd_23_mp_txt').style.display = 'none';
				
			document.getElementById('bop_23_db_rectangle').style.display = 'none';
			document.getElementById('bop_23_b_rectangle').style.display = 'none';
			document.getElementById('bop_23_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_23_dp_rectangle').style.display = 'none';
			document.getElementById('bop_23_p_rectangle').style.display = 'none';
			document.getElementById('bop_23_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_23_db_btn').style.display = 'none';
			document.getElementById('bop_23_b_btn').style.display = 'none';
			document.getElementById('bop_23_mb_btn').style.display = 'none';
			
			document.getElementById('bop_23_dp_btn').style.display = 'none';
			document.getElementById('bop_23_p_btn').style.display = 'none';
			document.getElementById('bop_23_mp_btn').style.display = 'none';
			
			document.getElementById('pi_23_db_rectangle').style.display = 'none';
			document.getElementById('pi_23_b_rectangle').style.display = 'none';
			document.getElementById('pi_23_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_23_dp_rectangle').style.display = 'none';
			document.getElementById('pi_23_p_rectangle').style.display = 'none';
			document.getElementById('pi_23_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_23_db_btn').style.display = 'none';
			document.getElementById('pi_23_b_btn').style.display = 'none';
			document.getElementById('pi_23_mb_btn').style.display = 'none';
			
			document.getElementById('pi_23_dp_btn').style.display = 'none';
			document.getElementById('pi_23_p_btn').style.display = 'none';
			document.getElementById('pi_23_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_23_b').style.display = 'none';
			document.getElementById('polyline_al_23_b').style.display = 'none';
			document.getElementById('polyline_gm_23_b').style.display = 'none';
			
			document.getElementById('polygon_23_p').style.display = 'none';
			document.getElementById('polyline_al_23_p').style.display = 'none';
			document.getElementById('polyline_gm_23_p').style.display = 'none';
			
			document.getElementById('polygon_inter_24_23_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_24_23_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_24_23_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_24_23_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_24_23_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_24_23_p').style.display = 'none';            
            
			document.getElementById('polygon_inter_23_22_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_23_22_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_23_22_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_23_22_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_23_22_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_23_22_p').style.display = 'none';            
			
			document.getElementById('note_23_txt').style.display = 'none';
		}
		else if (Implantat_23 !== 1) {
			tooth_23 = 1;
			document.getElementById('tooth_line_23_b').style.display = 'none';
			document.getElementById('tooth_line_23_p').style.display = 'none';

			document.getElementById('mobility_23_txt').style.display = 'block';

			document.getElementById('implantat_23_btn').style.display = 'block';

			document.getElementById('gm_23_db_txt').style.display = 'block';
			document.getElementById('gm_23_b_txt').style.display = 'block';
			document.getElementById('gm_23_mb_txt').style.display = 'block';
			
			document.getElementById('pd_23_db_txt').style.display = 'block';
			document.getElementById('pd_23_b_txt').style.display = 'block';
			document.getElementById('pd_23_mb_txt').style.display = 'block';
			
			document.getElementById('gm_23_dp_txt').style.display = 'block';
			document.getElementById('gm_23_p_txt').style.display = 'block';
			document.getElementById('gm_23_mp_txt').style.display = 'block';
			
			document.getElementById('pd_23_dp_txt').style.display = 'block';
			document.getElementById('pd_23_p_txt').style.display = 'block';
			document.getElementById('pd_23_mp_txt').style.display = 'block';
			
			document.getElementById('note_23_txt').style.display = 'block';

			document.getElementById('polygon_23_b').style.display = 'block';
			document.getElementById('polyline_al_23_b').style.display = 'block';
			document.getElementById('polyline_gm_23_b').style.display = 'block';
			
			document.getElementById('polygon_23_p').style.display = 'block';
			document.getElementById('polyline_al_23_p').style.display = 'block';
			document.getElementById('polyline_gm_23_p').style.display = 'block';

            if (tooth_24 == 1 && tooth_23 == 1) {
				document.getElementById('polygon_inter_24_23_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_24_23_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_24_23_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_24_23_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_24_23_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_24_23_p').style.display = 'block';            
            }
            
            if (tooth_23 == 1 && tooth_22 == 1) {
				document.getElementById('polygon_inter_23_22_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_23_22_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_23_22_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_23_22_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_23_22_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_23_22_p').style.display = 'block';            
            }

			document.getElementById('bop_23_db_btn').style.display = 'block';
			document.getElementById('bop_23_b_btn').style.display = 'block';
			document.getElementById('bop_23_mb_btn').style.display = 'block';

			document.getElementById('bop_23_dp_btn').style.display = 'block';
			document.getElementById('bop_23_p_btn').style.display = 'block';
			document.getElementById('bop_23_mp_btn').style.display = 'block';
			
			if (bop_23_db == 1) {
				document.getElementById('bop_23_db_rectangle').style.display = 'block';
			}
			if (bop_23_b == 1) {
				document.getElementById('bop_23_b_rectangle').style.display = 'block';
			}
			if (bop_23_mb == 1) {
				document.getElementById('bop_23_mb_rectangle').style.display = 'block';
			}
			if (bop_23_dp == 1) {
				document.getElementById('bop_23_dp_rectangle').style.display = 'block';
			}
			if (bop_23_p == 1) {
				document.getElementById('bop_23_p_rectangle').style.display = 'block';
			}
			if (bop_23_mp == 1) {
				document.getElementById('bop_23_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_23_db_btn').style.display = 'block';
			document.getElementById('pi_23_b_btn').style.display = 'block';
			document.getElementById('pi_23_mb_btn').style.display = 'block';

			document.getElementById('pi_23_dp_btn').style.display = 'block';
			document.getElementById('pi_23_p_btn').style.display = 'block';
			document.getElementById('pi_23_mp_btn').style.display = 'block';
			
			if (pi_23_db == 1) {
				document.getElementById('pi_23_db_rectangle').style.display = 'block';
			}
			if (pi_23_b == 1) {
				document.getElementById('pi_23_b_rectangle').style.display = 'block';
			}
			if (pi_23_mb == 1) {
				document.getElementById('pi_23_mb_rectangle').style.display = 'block';
			}
			if (pi_23_dp == 1) {
				document.getElementById('pi_23_dp_rectangle').style.display = 'block';
			}
			if (pi_23_p == 1) {
				document.getElementById('pi_23_p_rectangle').style.display = 'block';
			}
			if (pi_23_mp == 1) {
				document.getElementById('pi_23_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_23 == 1) {
			tooth_23 = 1;
			document.getElementById('tooth_line_23_b').style.display = 'none';
			document.getElementById('tooth_line_23_p').style.display = 'none';

			document.getElementById('mobility_23_txt').style.display = 'block';
			
			document.getElementById('note_23_txt').style.display = 'block';

			document.getElementById('implantat_23_btn').style.display = 'block';
			document.getElementById('implantat_23_tab').style.display = 'block';
			document.getElementById('implantat_23_b_image').style.display = 'block';
			document.getElementById('implantat_23_p_image').style.display = 'block';

			document.getElementById('gm_23_db_txt').style.display = 'block';
			document.getElementById('gm_23_b_txt').style.display = 'block';
			document.getElementById('gm_23_mb_txt').style.display = 'block';
			
			document.getElementById('pd_23_db_txt').style.display = 'block';
			document.getElementById('pd_23_b_txt').style.display = 'block';
			document.getElementById('pd_23_mb_txt').style.display = 'block';
			
			document.getElementById('gm_23_dp_txt').style.display = 'block';
			document.getElementById('gm_23_p_txt').style.display = 'block';
			document.getElementById('gm_23_mp_txt').style.display = 'block';
			
			document.getElementById('pd_23_dp_txt').style.display = 'block';
			document.getElementById('pd_23_p_txt').style.display = 'block';
			document.getElementById('pd_23_mp_txt').style.display = 'block';

			document.getElementById('polygon_23_b').style.display = 'block';
			document.getElementById('polyline_al_23_b').style.display = 'block';
			document.getElementById('polyline_gm_23_b').style.display = 'block';
			
			document.getElementById('polygon_23_p').style.display = 'block';
			document.getElementById('polyline_al_23_p').style.display = 'block';
			document.getElementById('polyline_gm_23_p').style.display = 'block';

            if (tooth_24 == 1 && tooth_23 == 1) {
				document.getElementById('polygon_inter_24_23_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_24_23_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_24_23_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_24_23_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_24_23_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_24_23_p').style.display = 'block';            
            }
            
            if (tooth_23 == 1 && tooth_22 == 1) {
				document.getElementById('polygon_inter_23_22_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_23_22_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_23_22_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_23_22_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_23_22_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_23_22_p').style.display = 'block';            
            }            

			document.getElementById('bop_23_db_btn').style.display = 'block';
			document.getElementById('bop_23_b_btn').style.display = 'block';
			document.getElementById('bop_23_mb_btn').style.display = 'block';

			document.getElementById('bop_23_dp_btn').style.display = 'block';
			document.getElementById('bop_23_p_btn').style.display = 'block';
			document.getElementById('bop_23_mp_btn').style.display = 'block';
			
			document.getElementById('pi_23_db_btn').style.display = 'block';
			document.getElementById('pi_23_b_btn').style.display = 'block';
			document.getElementById('pi_23_mb_btn').style.display = 'block';

			document.getElementById('pi_23_dp_btn').style.display = 'block';
			document.getElementById('pi_23_p_btn').style.display = 'block';
			document.getElementById('pi_23_mp_btn').style.display = 'block';
			
			if (bop_23_db == 1) {
				document.getElementById('bop_23_db_rectangle').style.display = 'block';
			}
			if (bop_23_b == 1) {
				document.getElementById('bop_23_b_rectangle').style.display = 'block';
			}
			if (bop_23_mb == 1) {
				document.getElementById('bop_23_mb_rectangle').style.display = 'block';
			}
			if (bop_23_dp == 1) {
				document.getElementById('bop_23_dp_rectangle').style.display = 'block';
			}
			if (bop_23_p == 1) {
				document.getElementById('bop_23_p_rectangle').style.display = 'block';
			}
			if (bop_23_mp == 1) {
				document.getElementById('bop_23_mp_rectangle').style.display = 'block';
			}
			
			if (pi_23_db == 1) {
				document.getElementById('pi_23_db_rectangle').style.display = 'block';
			}
			if (pi_23_b == 1) {
				document.getElementById('pi_23_b_rectangle').style.display = 'block';
			}
			if (pi_23_mb == 1) {
				document.getElementById('pi_23_mb_rectangle').style.display = 'block';
			}
			if (pi_23_dp == 1) {
				document.getElementById('pi_23_dp_rectangle').style.display = 'block';
			}
			if (pi_23_p == 1) {
				document.getElementById('pi_23_p_rectangle').style.display = 'block';
			}
			if (pi_23_mp == 1) {
				document.getElementById('pi_23_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_23();
	}

	function toggle_implant_23() {
		if (Implantat_23 == 0) {
			Implantat_23 = 1;
			
			document.getElementById('implantat_23_b_image').style.display = 'block';
			document.getElementById('implantat_23_p_image').style.display = 'block';
			document.getElementById('implantat_23_tab').style.display = 'block';
		}
		else {
			Implantat_23 = 0;
			
			document.getElementById('implantat_23_b_image').style.display = 'none';
			document.getElementById('implantat_23_p_image').style.display = 'none';
			document.getElementById('implantat_23_tab').style.display = 'none';
		}
	}

	function toggle_bop_23_db() {
		if (bop_23_db == 0) {
			bop_23_db = 1;
			document.getElementById('bop_23_db_rectangle').style.display = 'block';
		}
		else {
			bop_23_db = 0;
			document.getElementById('bop_23_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_23_b() {
		if (bop_23_b == 0) {
			bop_23_b = 1;
			document.getElementById('bop_23_b_rectangle').style.display = 'block';
		}
		else {
			bop_23_b = 0;
			document.getElementById('bop_23_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_23_mb() {
		if (bop_23_mb == 0) {
			bop_23_mb = 1;
			document.getElementById('bop_23_mb_rectangle').style.display = 'block';
		}
		else {
			bop_23_mb = 0;
			document.getElementById('bop_23_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_23_db() {
		if (pi_23_db == 0) {
			pi_23_db = 1;
			document.getElementById('pi_23_db_rectangle').style.display = 'block';
		}
		else {
			pi_23_db = 0;
			document.getElementById('pi_23_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_23_b() {
		if (pi_23_b == 0) {
			pi_23_b = 1;
			document.getElementById('pi_23_b_rectangle').style.display = 'block';
		}
		else {
			pi_23_b = 0;
			document.getElementById('pi_23_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_23_mb() {
		if (pi_23_mb == 0) {
			pi_23_mb = 1;
			document.getElementById('pi_23_mb_rectangle').style.display = 'block';
		}
		else {
			pi_23_mb = 0;
			document.getElementById('pi_23_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_23_dp() {
		if (bop_23_dp == 0) {
			bop_23_dp = 1;
			document.getElementById('bop_23_dp_rectangle').style.display = 'block';
		}
		else {
			bop_23_dp = 0;
			document.getElementById('bop_23_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_23_p() {
		if (bop_23_p == 0) {
			bop_23_p = 1;
			document.getElementById('bop_23_p_rectangle').style.display = 'block';
		}
		else {
			bop_23_p = 0;
			document.getElementById('bop_23_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_23_mp() {
		if (bop_23_mp == 0) {
			bop_23_mp = 1;
			document.getElementById('bop_23_mp_rectangle').style.display = 'block';
		}
		else {
			bop_23_mp = 0;
			document.getElementById('bop_23_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_23_dp() {
		if (pi_23_dp == 0) {
			pi_23_dp = 1;
			document.getElementById('pi_23_dp_rectangle').style.display = 'block';
		}
		else {
			pi_23_dp = 0;
			document.getElementById('pi_23_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_23_p() {
		if (pi_23_p == 0) {
			pi_23_p = 1;
			document.getElementById('pi_23_p_rectangle').style.display = 'block';
		}
		else {
			pi_23_p = 0;
			document.getElementById('pi_23_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_23_mp() {
		if (pi_23_mp == 0) {
			pi_23_mp = 1;
			document.getElementById('pi_23_mp_rectangle').style.display = 'block';
		}
		else {
			pi_23_mp = 0;
			document.getElementById('pi_23_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_23() {
		if (tooth_23 == 1) {
			
		// Variablen aus dem Formular
			pd_23_db = document.forms[0]["pd_23_db"].value;
			pd_23_b = document.forms[0]["pd_23_b"].value;
			pd_23_mb = document.forms[0]["pd_23_mb"].value;

			if (document.forms[0]["pd_23_dp"].value > 3) {document.forms[0]["pd_23_dp"].style.color = 'red';} else {document.forms[0]["pd_23_dp"].style.color = 'black'};
			if (document.forms[0]["pd_23_p"].value > 3) {document.forms[0]["pd_23_p"].style.color = 'red';} else {document.forms[0]["pd_23_p"].style.color = 'black'};
			if (document.forms[0]["pd_23_mp"].value > 3) {document.forms[0]["pd_23_mp"].style.color = 'red';} else {document.forms[0]["pd_23_mp"].style.color = 'black'};
			
			gm_23_db = document.forms[0]["gm_23_db"].value;
			gm_23_b = document.forms[0]["gm_23_b"].value;
			gm_23_mb = document.forms[0]["gm_23_mb"].value;
			
			pd_23_dp = document.forms[0]["pd_23_dp"].value;
			pd_23_p = document.forms[0]["pd_23_p"].value;
			pd_23_mp = document.forms[0]["pd_23_mp"].value;

			if (document.forms[0]["pd_23_db"].value > 3) {document.forms[0]["pd_23_db"].style.color = 'red';} else {document.forms[0]["pd_23_db"].style.color = 'black'};
			if (document.forms[0]["pd_23_b"].value > 3) {document.forms[0]["pd_23_b"].style.color = 'red';} else {document.forms[0]["pd_23_b"].style.color = 'black'};
			if (document.forms[0]["pd_23_mb"].value > 3) {document.forms[0]["pd_23_mb"].style.color = 'red';} else {document.forms[0]["pd_23_mb"].style.color = 'black'};
			
			gm_23_dp = document.forms[0]["gm_23_dp"].value;
			gm_23_p = document.forms[0]["gm_23_p"].value;
			gm_23_mp = document.forms[0]["gm_23_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 23 (bukkal) in der Bitmap
			var x_db_23 = 815;							// distal 23
			var x_mb_23 = 787;							// mesial 23
			var x_b_23 = (x_db_23 + x_mb_23)/2;			// bukkal 23
			
		// Set der horizontalen Koordinaten von Zahn 23 (palatinal) in der Bitmap
			var x_dp_23 = 813;							// distal 23
			var x_mp_23 = 785;							// mesial 23
			var x_p_23 = (x_dp_23 + x_mp_23)/2;			// palatinal 23
			
		// Set der vertikalen Koordinaten von Zahn 23 (bukkal) aus dem Formular
			var y_gm_23_db = gm_OK_b + 6.5 * gm_23_db;	// Margo Gingivae distobukkal 23
			var y_gm_23_b = gm_OK_b + 6.5 * gm_23_b;	// Margo Gingivae bukkal 23
			var y_gm_23_mb = gm_OK_b + 6.5 * gm_23_mb;	// Margo Gingivae mesiobukkal 23
			var y_pd_23_db = 6.5 * pd_23_db;			// Sondierungstiefe distobukkal 23
			var y_pd_23_b = 6.5 * pd_23_b;				// Sondierungstiefe bukkal 23
			var y_pd_23_mb = 6.5 * pd_23_mb;			// Sondierungstiefe mesiobukkal 23
			
		// Set der vertikalen Koordinaten von Zahn 23 (palatinal) aus dem Formular
			var y_gm_23_dp = gm_OK_p - 6.5 * gm_23_dp;	// Margo Gingivae distopalatinal 23
			var y_gm_23_p = gm_OK_p - 6.5 * gm_23_p;	// Margo Gingivae palatinal 23
			var y_gm_23_mp = gm_OK_p - 6.5 * gm_23_mp;	// Margo Gingivae mesiopalatinal 23
			var y_pd_23_dp = 6.5 * pd_23_dp;			// Sondierungstiefe distopalatinal 23
			var y_pd_23_p = 6.5 * pd_23_p;				// Sondierungstiefe palatinal 23
			var y_pd_23_mp = 6.5 * pd_23_mp;			// Sondierungstiefe mesiopalatinal 23
			
		// Berechnung des Attachmentniveaus 23 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_23_db = y_gm_23_db - y_pd_23_db;	// Attachmentniveau distobukkal 23
			var y_al_23_b = y_gm_23_b - y_pd_23_b;		// Attachmentniveau bukkal 23
			var y_al_23_mb = y_gm_23_mb - y_pd_23_mb;	// Attachmentniveau mesiobukkal 23
			
		// Berechnung des Attachmentniveaus 23 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_23_dp = y_gm_23_dp + y_pd_23_dp;	// Attachmentniveau distopalatinal 23
			var y_al_23_p = y_gm_23_p + y_pd_23_p;		// Attachmentniveau palatinal 23
			var y_al_23_mp = y_gm_23_mp + y_pd_23_mp;	// Attachmentniveau mesiopalatinal 23
			
		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[23].storeCoordinates(
				x_db_23, x_mb_23, x_dp_23, x_mp_23, x_b_23, x_p_23,
				y_gm_23_db, y_gm_23_b, y_gm_23_mb, y_pd_23_db, y_pd_23_b, y_pd_23_mb,
				y_gm_23_dp, y_gm_23_p, y_gm_23_mp, y_pd_23_dp, y_pd_23_p, y_pd_23_mp,
				y_al_23_db, y_al_23_b, y_al_23_mb, y_al_23_dp, y_al_23_p, y_al_23_mp
			);
		
		// Parodontaltasche 23 bukkal zeichnen
			var string = 
				x_db_23 + ", " + y_al_23_db + "  " + 
				x_b_23 + ", " + y_al_23_b + "  " + 
				x_mb_23 + ", " + y_al_23_mb + "  " + 
				x_mb_23 + ", " + y_gm_23_mb + "  " + 
				x_b_23 + ", " + y_gm_23_b + "  " + 
				x_db_23 + ", " + y_gm_23_db;
			document.getElementById("polygon_23_b").setAttribute("points", string);
		// Attachmentniveau 23 bukkal zeichnen
			var string = 
				x_db_23 + ", " + y_al_23_db + "  " + 
				x_b_23 + ", " + y_al_23_b + "  " + 
				x_mb_23 + ", " + y_al_23_mb;
			document.getElementById("polyline_al_23_b").setAttribute("points", string);
		// Margo Gingivae 23 bukkal zeichnen
			var string =
				x_db_23 + ", " + y_gm_23_db + "  " + 
				x_b_23 + ", " + y_gm_23_b + "  " + 
				x_mb_23 + ", " + y_gm_23_mb;
			document.getElementById("polyline_gm_23_b").setAttribute("points", string);

		// Parodontaltasche 23 palatinal zeichnen
			var string = 
				x_dp_23 + ", " + y_al_23_dp + "  " + 
				x_p_23 + ", " + y_al_23_p + "  " + 
				x_mp_23 + ", " + y_al_23_mp + "  " + 
				x_mp_23 + ", " + y_gm_23_mp + "  " + 
				x_p_23 + ", " + y_gm_23_p + "  " + 
				x_dp_23 + ", " + y_gm_23_dp;
			document.getElementById("polygon_23_p").setAttribute("points", string);
		// Attachmentniveau 23 palatinal zeichnen
			var string = 
				x_dp_23 + ", " + y_al_23_dp + "  " + 
				x_p_23 + ", " + y_al_23_p + "  " + 
				x_mp_23 + ", " + y_al_23_mp;
			document.getElementById("polyline_al_23_p").setAttribute("points", string);
		// Margo Gingivae 23 palatinal zeichnen
			var string =
				x_dp_23 + ", " + y_gm_23_dp + "  " + 
				x_p_23 + ", " + y_gm_23_p + "  " + 
				x_mp_23 + ", " + y_gm_23_mp;
			document.getElementById("polyline_gm_23_p").setAttribute("points", string);
		}
        if (tooth_23 == 1 && tooth_22 == 1) {

            pd_22_db = document.forms[0]["pd_22_db"].value;
			gm_22_db = document.forms[0]["gm_22_db"].value;
			
			pd_22_dp = document.forms[0]["pd_22_dp"].value;
			gm_22_dp = document.forms[0]["gm_22_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 22 (bukkal) in der Bitmap
			var x_db_22 = 770;							// distal 22
			
		// Set der horizontalen Koordinaten von Zahn 22 (palatinal) in der Bitmap
			var x_dp_22 = 772;							// distal 22
			
		// Set der vertikalen Koordinaten von Zahn 22 (bukkal) aus dem Formular
			var y_gm_22_db = gm_OK_b + 6.5 * gm_22_db;	// Margo Gingivae distobukkal 22
			var y_pd_22_db = 6.5 * pd_22_db;			// Sondierungstiefe distobukkal 22
			
		// Set der vertikalen Koordinaten von Zahn 22 (palatinal) aus dem Formular
			var y_gm_22_dp = gm_OK_p - 6.5 * gm_22_dp;	// Margo Gingivae distopalatinal 22
			var y_pd_22_dp = 6.5 * pd_22_dp;			// Sondierungstiefe distopalatinal 22
			
		// Berechnung des Attachmentniveaus 22 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_22_db = y_gm_22_db - y_pd_22_db;	// Attachmentniveau distobukkal 22
			
		// Berechnung des Attachmentniveaus 22 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_22_dp = y_gm_22_dp + y_pd_22_dp;	// Attachmentniveau distopalatinal 22

		// Parodontaltasche inter_23_22 bukkal zeichnen
			var string = 
				x_mb_23 + ", " + y_al_23_mb + "  " + 
				x_db_22 + ", " + y_al_22_db + "  " + 
				x_db_22 + ", " + y_gm_22_db + "  " + 
				x_mb_23 + ", " + y_gm_23_mb;
			document.getElementById("polygon_inter_23_22_b").setAttribute("points", string);
		// Attachmentniveau inter_23_22 bukkal zeichnen
			var string = 
				x_mb_23 + ", " + y_al_23_mb + "  " + 
				x_db_22 + ", " + y_al_22_db;
			document.getElementById("polyline_al_inter_23_22_b").setAttribute("points", string);
		// Margo Gingivae inter_23_22 bukkal zeichnen
			var string =
				x_mb_23 + ", " + y_gm_23_mb + "  " + 
				x_db_22 + ", " + y_gm_22_db;
			document.getElementById("polyline_gm_inter_23_22_b").setAttribute("points", string);

        // Parodontaltasche inter_23_22 palatinal zeichnen
			var string = 
				x_mp_23 + ", " + y_al_23_mp + "  " + 
				x_dp_22 + ", " + y_al_22_dp + "  " + 
				x_dp_22 + ", " + y_gm_22_dp + "  " + 
				x_mp_23 + ", " + y_gm_23_mp;
			document.getElementById("polygon_inter_23_22_p").setAttribute("points", string);
		// Attachmentniveau inter_23_22 palatinal zeichnen
			var string = 
				x_mp_23 + ", " + y_al_23_mp + "  " + 
				x_dp_22 + ", " + y_al_22_dp;
			document.getElementById("polyline_al_inter_23_22_p").setAttribute("points", string);
		// Margo Gingivae inter_23_22 palatinal zeichnen
			var string =
				x_mp_23 + ", " + y_gm_23_mp + "  " + 
				x_dp_22 + ", " + y_gm_22_dp;
			document.getElementById("polyline_gm_inter_23_22_p").setAttribute("points", string);
		}
        if (tooth_24 == 1 && tooth_23 == 1) {

            pd_24_mb = document.forms[0]["pd_24_mb"].value;
			gm_24_mb = document.forms[0]["gm_24_mb"].value;
			
			pd_24_mp = document.forms[0]["pd_24_mp"].value;
			gm_24_mp = document.forms[0]["gm_24_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 24 (bukkal) in der Bitmap
			var x_mb_24 = 829;							// mesial 24
			
		// Set der horizontalen Koordinaten von Zahn 24 (palatinal) in der Bitmap
			var x_mp_24 = 829;							// mesial 24
			
		// Set der vertikalen Koordinaten von Zahn 24 (bukkal) aus dem Formular
			var y_gm_24_mb = gm_OK_b + 6.5 * gm_24_mb;	// Margo Gingivae mesiobukkal 24
			var y_pd_24_mb = 6.5 * pd_24_mb;			// Sondierungstiefe mesiobukkal 24
			
		// Set der vertikalen Koordinaten von Zahn 24 (palatinal) aus dem Formular
			var y_gm_24_mp = gm_OK_p - 6.5 * gm_24_mp;	// Margo Gingivae mesiopalatinal 24
			var y_pd_24_mp = 6.5 * pd_24_mp;			// Sondierungstiefe mesiopalatinal 24
			
		// Berechnung des Attachmentniveaus 24 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_24_mb = y_gm_24_mb - y_pd_24_mb;	// Attachmentniveau mesiobukkal 24
			
		// Berechnung des Attachmentniveaus 24 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_24_mp = y_gm_24_mp + y_pd_24_mp;	// Attachmentniveau mesiopalatinal 24

		// Parodontaltasche inter_24_23 bukkal zeichnen
			var string = 
				x_mb_24 + ", " + y_al_24_mb + "  " + 
				x_db_23 + ", " + y_al_23_db + "  " + 
				x_db_23 + ", " + y_gm_23_db + "  " + 
				x_mb_24 + ", " + y_gm_24_mb;
			document.getElementById("polygon_inter_24_23_b").setAttribute("points", string);
		// Attachmentniveau inter_24_23 bukkal zeichnen
			var string = 
				x_mb_24 + ", " + y_al_24_mb + "  " + 
				x_db_23 + ", " + y_al_23_db;
			document.getElementById("polyline_al_inter_24_23_b").setAttribute("points", string);
		// Margo Gingivae inter_24_23 bukkal zeichnen
			var string =
				x_mb_24 + ", " + y_gm_24_mb + "  " + 
				x_db_23 + ", " + y_gm_23_db;
			document.getElementById("polyline_gm_inter_24_23_b").setAttribute("points", string);

        // Parodontaltasche inter_24_23 palatinal zeichnen
			var string = 
				x_mp_24 + ", " + y_al_24_mp + "  " + 
				x_dp_23 + ", " + y_al_23_dp + "  " + 
				x_dp_23 + ", " + y_gm_23_dp + "  " + 
				x_mp_24 + ", " + y_gm_24_mp;
			document.getElementById("polygon_inter_24_23_p").setAttribute("points", string);
		// Attachmentniveau inter_24_23 palatinal zeichnen
			var string = 
				x_mp_24 + ", " + y_al_24_mp + "  " + 
				x_dp_23 + ", " + y_al_23_dp;
			document.getElementById("polyline_al_inter_24_23_p").setAttribute("points", string);
		// Margo Gingivae inter_24_23 palatinal zeichnen
			var string =
				x_mp_24 + ", " + y_gm_24_mp + "  " + 
				x_dp_23 + ", " + y_gm_23_dp;
			document.getElementById("polyline_gm_inter_24_23_p").setAttribute("points", string);
		}
	}