	// Definition der Variablen für das Formular
		var tooth_25 = 1;
		var Implantat_25 = 0;
		var bop_25_db = 0;
		var bop_25_b = 0;
		var bop_25_mb = 0;
		var pi_25_db = 0;
		var pi_25_b = 0;
		var pi_25_mb = 0;
		var bop_25_dp = 0;
		var bop_25_p = 0;
		var bop_25_mp = 0;
		var pi_25_dp = 0;
		var pi_25_p = 0;
		var pi_25_mp = 0;
		var gm_25_db = 0;
		var gm_25_b = 0;
		var gm_25_mb = 0;
		var pd_25_db = 0;
		var pd_25_b = 0;
		var pd_25_mb = 0;
		var gm_25_dp = 0;
		var gm_25_p = 0;
		var gm_25_mp = 0;
		var pd_25_dp = 0;
		var pd_25_p = 0;
		var pd_25_mp = 0;

	function clear_data_25() {
        if (tooth_25 == 1) {
			gm_25_db = 0;
			gm_25_b = 0;
			gm_25_mb = 0;
			pd_25_db = 0;
			pd_25_b = 0;
			pd_25_mb = 0;
	
				document.getElementById('gm_25_db_txt').value = 0;
				document.getElementById('gm_25_b_txt').value = 0;
				document.getElementById('gm_25_mb_txt').value = 0;
				
				document.getElementById('pd_25_db_txt').value = 0;
				document.getElementById('pd_25_b_txt').value = 0;
				document.getElementById('pd_25_mb_txt').value = 0;
			
				document.forms[0]["pd_25_db"].style.color = 'black'
				document.forms[0]["pd_25_b"].style.color = 'black'
				document.forms[0]["pd_25_mb"].style.color = 'black'
			
			gm_25_dp = 0;
			gm_25_p = 0;
			gm_25_mp = 0;
			pd_25_dp = 0;
			pd_25_p = 0;
			pd_25_mp = 0;

				document.getElementById('gm_25_dp_txt').value = 0;
				document.getElementById('gm_25_p_txt').value = 0;
				document.getElementById('gm_25_mp_txt').value = 0;
				
				document.getElementById('pd_25_dp_txt').value = 0;
				document.getElementById('pd_25_p_txt').value = 0;
				document.getElementById('pd_25_mp_txt').value = 0;

				document.forms[0]["pd_25_dp"].style.color = 'black'
				document.forms[0]["pd_25_p"].style.color = 'black'
				document.forms[0]["pd_25_mp"].style.color = 'black'
			
			change_probing_25();
			
			mobility_25 = 0;

				document.getElementById('mobility_25_txt').value = "0";

			note_25 = "";

				document.getElementById('note_25_txt').value = "";
	
			bop_25_db = 0;
			bop_25_b = 0;
			bop_25_mb = 0;
					
			bop_25_dp = 0;
			bop_25_p = 0;
			bop_25_mp = 0;
					
				document.getElementById('bop_25_db_rectangle').style.display = 'none';
				document.getElementById('bop_25_b_rectangle').style.display = 'none';
				document.getElementById('bop_25_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_25_dp_rectangle').style.display = 'none';
				document.getElementById('bop_25_p_rectangle').style.display = 'none';
				document.getElementById('bop_25_mp_rectangle').style.display = 'none';
				
			pi_25_db = 0;
			pi_25_b = 0;
			pi_25_mb = 0;
					
			pi_25_dp = 0;
			pi_25_p = 0;
			pi_25_mp = 0;

				document.getElementById('pi_25_db_rectangle').style.display = 'none';
				document.getElementById('pi_25_b_rectangle').style.display = 'none';
				document.getElementById('pi_25_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_25_dp_rectangle').style.display = 'none';
				document.getElementById('pi_25_p_rectangle').style.display = 'none';
				document.getElementById('pi_25_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_25() {
		if (tooth_25 === 1) {
			tooth_25 = 0;
			document.getElementById('tooth_line_25_b').style.display = 'block';
			document.getElementById('tooth_line_25_p').style.display = 'block';
			
			document.getElementById('mobility_25_txt').style.display = 'none';
			
			document.getElementById('implantat_25_btn').style.display = 'none';
			document.getElementById('implantat_25_tab').style.display = 'none';
			document.getElementById('implantat_25_b_image').style.display = 'none';
			document.getElementById('implantat_25_p_image').style.display = 'none';

			document.getElementById('gm_25_db_txt').style.display = 'none';
			document.getElementById('gm_25_b_txt').style.display = 'none';
			document.getElementById('gm_25_mb_txt').style.display = 'none';
			
			document.getElementById('pd_25_db_txt').style.display = 'none';
			document.getElementById('pd_25_b_txt').style.display = 'none';
			document.getElementById('pd_25_mb_txt').style.display = 'none';
			
			document.getElementById('gm_25_dp_txt').style.display = 'none';
			document.getElementById('gm_25_p_txt').style.display = 'none';
			document.getElementById('gm_25_mp_txt').style.display = 'none';
			
			document.getElementById('pd_25_dp_txt').style.display = 'none';
			document.getElementById('pd_25_p_txt').style.display = 'none';
			document.getElementById('pd_25_mp_txt').style.display = 'none';
			
			document.getElementById('bop_25_db_rectangle').style.display = 'none';
			document.getElementById('bop_25_b_rectangle').style.display = 'none';
			document.getElementById('bop_25_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_25_dp_rectangle').style.display = 'none';
			document.getElementById('bop_25_p_rectangle').style.display = 'none';
			document.getElementById('bop_25_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_25_db_btn').style.display = 'none';
			document.getElementById('bop_25_b_btn').style.display = 'none';
			document.getElementById('bop_25_mb_btn').style.display = 'none';
			
			document.getElementById('bop_25_dp_btn').style.display = 'none';
			document.getElementById('bop_25_p_btn').style.display = 'none';
			document.getElementById('bop_25_mp_btn').style.display = 'none';
			
			document.getElementById('pi_25_db_rectangle').style.display = 'none';
			document.getElementById('pi_25_b_rectangle').style.display = 'none';
			document.getElementById('pi_25_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_25_dp_rectangle').style.display = 'none';
			document.getElementById('pi_25_p_rectangle').style.display = 'none';
			document.getElementById('pi_25_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_25_db_btn').style.display = 'none';
			document.getElementById('pi_25_b_btn').style.display = 'none';
			document.getElementById('pi_25_mb_btn').style.display = 'none';
			
			document.getElementById('pi_25_dp_btn').style.display = 'none';
			document.getElementById('pi_25_p_btn').style.display = 'none';
			document.getElementById('pi_25_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_25_b').style.display = 'none';
			document.getElementById('polyline_al_25_b').style.display = 'none';
			document.getElementById('polyline_gm_25_b').style.display = 'none';
			
			document.getElementById('polygon_25_p').style.display = 'none';
			document.getElementById('polyline_al_25_p').style.display = 'none';
			document.getElementById('polyline_gm_25_p').style.display = 'none';
			
			document.getElementById('polygon_inter_26_25_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_26_25_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_26_25_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_26_25_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_26_25_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_26_25_p').style.display = 'none';            
            
			document.getElementById('polygon_inter_25_24_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_25_24_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_25_24_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_25_24_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_25_24_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_25_24_p').style.display = 'none';            
			
			document.getElementById('note_25_txt').style.display = 'none';
		}
		else if (Implantat_25 !== 1) {
			tooth_25 = 1;
			document.getElementById('tooth_line_25_b').style.display = 'none';
			document.getElementById('tooth_line_25_p').style.display = 'none';

			document.getElementById('mobility_25_txt').style.display = 'block';

			document.getElementById('implantat_25_btn').style.display = 'block';

			document.getElementById('gm_25_db_txt').style.display = 'block';
			document.getElementById('gm_25_b_txt').style.display = 'block';
			document.getElementById('gm_25_mb_txt').style.display = 'block';
			
			document.getElementById('pd_25_db_txt').style.display = 'block';
			document.getElementById('pd_25_b_txt').style.display = 'block';
			document.getElementById('pd_25_mb_txt').style.display = 'block';
			
			document.getElementById('gm_25_dp_txt').style.display = 'block';
			document.getElementById('gm_25_p_txt').style.display = 'block';
			document.getElementById('gm_25_mp_txt').style.display = 'block';
			
			document.getElementById('pd_25_dp_txt').style.display = 'block';
			document.getElementById('pd_25_p_txt').style.display = 'block';
			document.getElementById('pd_25_mp_txt').style.display = 'block';
			
			document.getElementById('note_25_txt').style.display = 'block';

			document.getElementById('polygon_25_b').style.display = 'block';
			document.getElementById('polyline_al_25_b').style.display = 'block';
			document.getElementById('polyline_gm_25_b').style.display = 'block';
			
			document.getElementById('polygon_25_p').style.display = 'block';
			document.getElementById('polyline_al_25_p').style.display = 'block';
			document.getElementById('polyline_gm_25_p').style.display = 'block';

            if (tooth_26 == 1 && tooth_25 == 1) {
				document.getElementById('polygon_inter_26_25_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_26_25_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_26_25_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_26_25_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_26_25_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_26_25_p').style.display = 'block';            
            }
            
            if (tooth_25 == 1 && tooth_24 == 1) {
				document.getElementById('polygon_inter_25_24_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_25_24_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_25_24_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_25_24_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_25_24_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_25_24_p').style.display = 'block';            
            }

			document.getElementById('bop_25_db_btn').style.display = 'block';
			document.getElementById('bop_25_b_btn').style.display = 'block';
			document.getElementById('bop_25_mb_btn').style.display = 'block';

			document.getElementById('bop_25_dp_btn').style.display = 'block';
			document.getElementById('bop_25_p_btn').style.display = 'block';
			document.getElementById('bop_25_mp_btn').style.display = 'block';
			
			if (bop_25_db == 1) {
				document.getElementById('bop_25_db_rectangle').style.display = 'block';
			}
			if (bop_25_b == 1) {
				document.getElementById('bop_25_b_rectangle').style.display = 'block';
			}
			if (bop_25_mb == 1) {
				document.getElementById('bop_25_mb_rectangle').style.display = 'block';
			}
			if (bop_25_dp == 1) {
				document.getElementById('bop_25_dp_rectangle').style.display = 'block';
			}
			if (bop_25_p == 1) {
				document.getElementById('bop_25_p_rectangle').style.display = 'block';
			}
			if (bop_25_mp == 1) {
				document.getElementById('bop_25_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_25_db_btn').style.display = 'block';
			document.getElementById('pi_25_b_btn').style.display = 'block';
			document.getElementById('pi_25_mb_btn').style.display = 'block';

			document.getElementById('pi_25_dp_btn').style.display = 'block';
			document.getElementById('pi_25_p_btn').style.display = 'block';
			document.getElementById('pi_25_mp_btn').style.display = 'block';
			
			if (pi_25_db == 1) {
				document.getElementById('pi_25_db_rectangle').style.display = 'block';
			}
			if (pi_25_b == 1) {
				document.getElementById('pi_25_b_rectangle').style.display = 'block';
			}
			if (pi_25_mb == 1) {
				document.getElementById('pi_25_mb_rectangle').style.display = 'block';
			}
			if (pi_25_dp == 1) {
				document.getElementById('pi_25_dp_rectangle').style.display = 'block';
			}
			if (pi_25_p == 1) {
				document.getElementById('pi_25_p_rectangle').style.display = 'block';
			}
			if (pi_25_mp == 1) {
				document.getElementById('pi_25_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_25 == 1) {
			tooth_25 = 1;
			document.getElementById('tooth_line_25_b').style.display = 'none';
			document.getElementById('tooth_line_25_p').style.display = 'none';

			document.getElementById('mobility_25_txt').style.display = 'block';
			
			document.getElementById('note_25_txt').style.display = 'block';

			document.getElementById('implantat_25_btn').style.display = 'block';
			document.getElementById('implantat_25_tab').style.display = 'block';
			document.getElementById('implantat_25_b_image').style.display = 'block';
			document.getElementById('implantat_25_p_image').style.display = 'block';

			document.getElementById('gm_25_db_txt').style.display = 'block';
			document.getElementById('gm_25_b_txt').style.display = 'block';
			document.getElementById('gm_25_mb_txt').style.display = 'block';
			
			document.getElementById('pd_25_db_txt').style.display = 'block';
			document.getElementById('pd_25_b_txt').style.display = 'block';
			document.getElementById('pd_25_mb_txt').style.display = 'block';
			
			document.getElementById('gm_25_dp_txt').style.display = 'block';
			document.getElementById('gm_25_p_txt').style.display = 'block';
			document.getElementById('gm_25_mp_txt').style.display = 'block';
			
			document.getElementById('pd_25_dp_txt').style.display = 'block';
			document.getElementById('pd_25_p_txt').style.display = 'block';
			document.getElementById('pd_25_mp_txt').style.display = 'block';

			document.getElementById('polygon_25_b').style.display = 'block';
			document.getElementById('polyline_al_25_b').style.display = 'block';
			document.getElementById('polyline_gm_25_b').style.display = 'block';
			
			document.getElementById('polygon_25_p').style.display = 'block';
			document.getElementById('polyline_al_25_p').style.display = 'block';
			document.getElementById('polyline_gm_25_p').style.display = 'block';

            if (tooth_26 == 1 && tooth_25 == 1) {
				document.getElementById('polygon_inter_26_25_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_26_25_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_26_25_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_26_25_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_26_25_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_26_25_p').style.display = 'block';            
            }
            
            if (tooth_25 == 1 && tooth_24 == 1) {
				document.getElementById('polygon_inter_25_24_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_25_24_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_25_24_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_25_24_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_25_24_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_25_24_p').style.display = 'block';            
            }

			document.getElementById('bop_25_db_btn').style.display = 'block';
			document.getElementById('bop_25_b_btn').style.display = 'block';
			document.getElementById('bop_25_mb_btn').style.display = 'block';

			document.getElementById('bop_25_dp_btn').style.display = 'block';
			document.getElementById('bop_25_p_btn').style.display = 'block';
			document.getElementById('bop_25_mp_btn').style.display = 'block';
			
			document.getElementById('pi_25_db_btn').style.display = 'block';
			document.getElementById('pi_25_b_btn').style.display = 'block';
			document.getElementById('pi_25_mb_btn').style.display = 'block';

			document.getElementById('pi_25_dp_btn').style.display = 'block';
			document.getElementById('pi_25_p_btn').style.display = 'block';
			document.getElementById('pi_25_mp_btn').style.display = 'block';
			
			if (bop_25_db == 1) {
				document.getElementById('bop_25_db_rectangle').style.display = 'block';
			}
			if (bop_25_b == 1) {
				document.getElementById('bop_25_b_rectangle').style.display = 'block';
			}
			if (bop_25_mb == 1) {
				document.getElementById('bop_25_mb_rectangle').style.display = 'block';
			}
			if (bop_25_dp == 1) {
				document.getElementById('bop_25_dp_rectangle').style.display = 'block';
			}
			if (bop_25_p == 1) {
				document.getElementById('bop_25_p_rectangle').style.display = 'block';
			}
			if (bop_25_mp == 1) {
				document.getElementById('bop_25_mp_rectangle').style.display = 'block';
			}
			
			if (pi_25_db == 1) {
				document.getElementById('pi_25_db_rectangle').style.display = 'block';
			}
			if (pi_25_b == 1) {
				document.getElementById('pi_25_b_rectangle').style.display = 'block';
			}
			if (pi_25_mb == 1) {
				document.getElementById('pi_25_mb_rectangle').style.display = 'block';
			}
			if (pi_25_dp == 1) {
				document.getElementById('pi_25_dp_rectangle').style.display = 'block';
			}
			if (pi_25_p == 1) {
				document.getElementById('pi_25_p_rectangle').style.display = 'block';
			}
			if (pi_25_mp == 1) {
				document.getElementById('pi_25_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_25();
	}

	function toggle_implant_25() {
		if (Implantat_25 == 0) {
			Implantat_25 = 1;
			
			document.getElementById('implantat_25_b_image').style.display = 'block';
			document.getElementById('implantat_25_p_image').style.display = 'block';
			document.getElementById('implantat_25_tab').style.display = 'block';
		}
		else {
			Implantat_25 = 0;
			
			document.getElementById('implantat_25_b_image').style.display = 'none';
			document.getElementById('implantat_25_p_image').style.display = 'none';
			document.getElementById('implantat_25_tab').style.display = 'none';
		}
	}

	function toggle_bop_25_db() {
		if (bop_25_db == 0) {
			bop_25_db = 1;
			document.getElementById('bop_25_db_rectangle').style.display = 'block';
		}
		else {
			bop_25_db = 0;
			document.getElementById('bop_25_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_25_b() {
		if (bop_25_b == 0) {
			bop_25_b = 1;
			document.getElementById('bop_25_b_rectangle').style.display = 'block';
		}
		else {
			bop_25_b = 0;
			document.getElementById('bop_25_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_25_mb() {
		if (bop_25_mb == 0) {
			bop_25_mb = 1;
			document.getElementById('bop_25_mb_rectangle').style.display = 'block';
		}
		else {
			bop_25_mb = 0;
			document.getElementById('bop_25_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_25_db() {
		if (pi_25_db == 0) {
			pi_25_db = 1;
			document.getElementById('pi_25_db_rectangle').style.display = 'block';
		}
		else {
			pi_25_db = 0;
			document.getElementById('pi_25_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_25_b() {
		if (pi_25_b == 0) {
			pi_25_b = 1;
			document.getElementById('pi_25_b_rectangle').style.display = 'block';
		}
		else {
			pi_25_b = 0;
			document.getElementById('pi_25_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_25_mb() {
		if (pi_25_mb == 0) {
			pi_25_mb = 1;
			document.getElementById('pi_25_mb_rectangle').style.display = 'block';
		}
		else {
			pi_25_mb = 0;
			document.getElementById('pi_25_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_25_dp() {
		if (bop_25_dp == 0) {
			bop_25_dp = 1;
			document.getElementById('bop_25_dp_rectangle').style.display = 'block';
		}
		else {
			bop_25_dp = 0;
			document.getElementById('bop_25_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_25_p() {
		if (bop_25_p == 0) {
			bop_25_p = 1;
			document.getElementById('bop_25_p_rectangle').style.display = 'block';
		}
		else {
			bop_25_p = 0;
			document.getElementById('bop_25_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_25_mp() {
		if (bop_25_mp == 0) {
			bop_25_mp = 1;
			document.getElementById('bop_25_mp_rectangle').style.display = 'block';
		}
		else {
			bop_25_mp = 0;
			document.getElementById('bop_25_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_25_dp() {
		if (pi_25_dp == 0) {
			pi_25_dp = 1;
			document.getElementById('pi_25_dp_rectangle').style.display = 'block';
		}
		else {
			pi_25_dp = 0;
			document.getElementById('pi_25_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_25_p() {
		if (pi_25_p == 0) {
			pi_25_p = 1;
			document.getElementById('pi_25_p_rectangle').style.display = 'block';
		}
		else {
			pi_25_p = 0;
			document.getElementById('pi_25_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_25_mp() {
		if (pi_25_mp == 0) {
			pi_25_mp = 1;
			document.getElementById('pi_25_mp_rectangle').style.display = 'block';
		}
		else {
			pi_25_mp = 0;
			document.getElementById('pi_25_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_25() {
		if (tooth_25 == 1) {
			
		// Variablen aus dem Formular
			pd_25_db = document.forms[0]["pd_25_db"].value;
			pd_25_b = document.forms[0]["pd_25_b"].value;
			pd_25_mb = document.forms[0]["pd_25_mb"].value;

			if (document.forms[0]["pd_25_dp"].value > 3) {document.forms[0]["pd_25_dp"].style.color = 'red';} else {document.forms[0]["pd_25_dp"].style.color = 'black'};
			if (document.forms[0]["pd_25_p"].value > 3) {document.forms[0]["pd_25_p"].style.color = 'red';} else {document.forms[0]["pd_25_p"].style.color = 'black'};
			if (document.forms[0]["pd_25_mp"].value > 3) {document.forms[0]["pd_25_mp"].style.color = 'red';} else {document.forms[0]["pd_25_mp"].style.color = 'black'};
			
			gm_25_db = document.forms[0]["gm_25_db"].value;
			gm_25_b = document.forms[0]["gm_25_b"].value;
			gm_25_mb = document.forms[0]["gm_25_mb"].value;
			
			pd_25_dp = document.forms[0]["pd_25_dp"].value;
			pd_25_p = document.forms[0]["pd_25_p"].value;
			pd_25_mp = document.forms[0]["pd_25_mp"].value;

			if (document.forms[0]["pd_25_db"].value > 3) {document.forms[0]["pd_25_db"].style.color = 'red';} else {document.forms[0]["pd_25_db"].style.color = 'black'};
			if (document.forms[0]["pd_25_b"].value > 3) {document.forms[0]["pd_25_b"].style.color = 'red';} else {document.forms[0]["pd_25_b"].style.color = 'black'};
			if (document.forms[0]["pd_25_mb"].value > 3) {document.forms[0]["pd_25_mb"].style.color = 'red';} else {document.forms[0]["pd_25_mb"].style.color = 'black'};
			
			gm_25_dp = document.forms[0]["gm_25_dp"].value;
			gm_25_p = document.forms[0]["gm_25_p"].value;
			gm_25_mp = document.forms[0]["gm_25_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 25 (bukkal) in der Bitmap
			var x_db_25 = 895;							// distal 25
			var x_mb_25 = 869;							// mesial 25
			var x_b_25 = (x_db_25 + x_mb_25)/2;			// bukkal 25
			
		// Set der horizontalen Koordinaten von Zahn 25 (palatinal) in der Bitmap
			var x_dp_25 = 897;							// distal 25
			var x_mp_25 = 871;							// mesial 25
			var x_p_25 = (x_dp_25 + x_mp_25)/2;			// palatinal 25
			
		// Set der vertikalen Koordinaten von Zahn 25 (bukkal) aus dem Formular
			var y_gm_25_db = gm_OK_b + 6.5 * gm_25_db;	// Margo Gingivae distobukkal 25
			var y_gm_25_b = gm_OK_b + 6.5 * gm_25_b;	// Margo Gingivae bukkal 25
			var y_gm_25_mb = gm_OK_b + 6.5 * gm_25_mb;	// Margo Gingivae mesiobukkal 25
			var y_pd_25_db = 6.5 * pd_25_db;			// Sondierungstiefe distobukkal 25
			var y_pd_25_b = 6.5 * pd_25_b;				// Sondierungstiefe bukkal 25
			var y_pd_25_mb = 6.5 * pd_25_mb;			// Sondierungstiefe mesiobukkal 25
			
		// Set der vertikalen Koordinaten von Zahn 25 (palatinal) aus dem Formular
			var y_gm_25_dp = gm_OK_p - 6.5 * gm_25_dp;	// Margo Gingivae distopalatinal 25
			var y_gm_25_p = gm_OK_p - 6.5 * gm_25_p;	// Margo Gingivae palatinal 25
			var y_gm_25_mp = gm_OK_p - 6.5 * gm_25_mp;	// Margo Gingivae mesiopalatinal 25
			var y_pd_25_dp = 6.5 * pd_25_dp;			// Sondierungstiefe distopalatinal 25
			var y_pd_25_p = 6.5 * pd_25_p;				// Sondierungstiefe palatinal 25
			var y_pd_25_mp = 6.5 * pd_25_mp;			// Sondierungstiefe mesiopalatinal 25
			
		// Berechnung des Attachmentniveaus 25 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_25_db = y_gm_25_db - y_pd_25_db;	// Attachmentniveau distobukkal 25
			var y_al_25_b = y_gm_25_b - y_pd_25_b;		// Attachmentniveau bukkal 25
			var y_al_25_mb = y_gm_25_mb - y_pd_25_mb;	// Attachmentniveau mesiobukkal 25
			
		// Berechnung des Attachmentniveaus 25 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_25_dp = y_gm_25_dp + y_pd_25_dp;	// Attachmentniveau distopalatinal 25
			var y_al_25_p = y_gm_25_p + y_pd_25_p;		// Attachmentniveau palatinal 25
			var y_al_25_mp = y_gm_25_mp + y_pd_25_mp;	// Attachmentniveau mesiopalatinal 25

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[25].storeCoordinates(
				x_db_25, x_mb_25, x_dp_25, x_mp_25, x_b_25, x_p_25,
				y_gm_25_db, y_gm_25_b, y_gm_25_mb, y_pd_25_db, y_pd_25_b, y_pd_25_mb,
				y_gm_25_dp, y_gm_25_p, y_gm_25_mp, y_pd_25_dp, y_pd_25_p, y_pd_25_mp,
				y_al_25_db, y_al_25_b, y_al_25_mb, y_al_25_dp, y_al_25_p, y_al_25_mp
			);
		
		// Parodontaltasche 25 bukkal zeichnen
			var string = 
				x_db_25 + ", " + y_al_25_db + "  " + 
				x_b_25 + ", " + y_al_25_b + "  " + 
				x_mb_25 + ", " + y_al_25_mb + "  " + 
				x_mb_25 + ", " + y_gm_25_mb + "  " + 
				x_b_25 + ", " + y_gm_25_b + "  " + 
				x_db_25 + ", " + y_gm_25_db;
			document.getElementById("polygon_25_b").setAttribute("points", string);
		// Attachmentniveau 25 bukkal zeichnen
			var string = 
				x_db_25 + ", " + y_al_25_db + "  " + 
				x_b_25 + ", " + y_al_25_b + "  " + 
				x_mb_25 + ", " + y_al_25_mb;
			document.getElementById("polyline_al_25_b").setAttribute("points", string);
		// Margo Gingivae 25 bukkal zeichnen
			var string =
				x_db_25 + ", " + y_gm_25_db + "  " + 
				x_b_25 + ", " + y_gm_25_b + "  " + 
				x_mb_25 + ", " + y_gm_25_mb;
			document.getElementById("polyline_gm_25_b").setAttribute("points", string);

		// Parodontaltasche 25 palatinal zeichnen
			var string = 
				x_dp_25 + ", " + y_al_25_dp + "  " + 
				x_p_25 + ", " + y_al_25_p + "  " + 
				x_mp_25 + ", " + y_al_25_mp + "  " + 
				x_mp_25 + ", " + y_gm_25_mp + "  " + 
				x_p_25 + ", " + y_gm_25_p + "  " + 
				x_dp_25 + ", " + y_gm_25_dp;
			document.getElementById("polygon_25_p").setAttribute("points", string);
		// Attachmentniveau 25 palatinal zeichnen
			var string = 
				x_dp_25 + ", " + y_al_25_dp + "  " + 
				x_p_25 + ", " + y_al_25_p + "  " + 
				x_mp_25 + ", " + y_al_25_mp;
			document.getElementById("polyline_al_25_p").setAttribute("points", string);
		// Margo Gingivae 25 palatinal zeichnen
			var string =
				x_dp_25 + ", " + y_gm_25_dp + "  " + 
				x_p_25 + ", " + y_gm_25_p + "  " + 
				x_mp_25 + ", " + y_gm_25_mp;
			document.getElementById("polyline_gm_25_p").setAttribute("points", string);
		}
        if (tooth_25 == 1 && tooth_24 == 1) {

            pd_24_db = document.forms[0]["pd_24_db"].value;
			gm_24_db = document.forms[0]["gm_24_db"].value;
			
			pd_24_dp = document.forms[0]["pd_24_dp"].value;
			gm_24_dp = document.forms[0]["gm_24_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 24 (bukkal) in der Bitmap
			var x_db_24 = 855;							// distal 24
			
		// Set der horizontalen Koordinaten von Zahn 24 (palatinal) in der Bitmap
			var x_dp_24 = 854;							// distal 24
			
		// Set der vertikalen Koordinaten von Zahn 24 (bukkal) aus dem Formular
			var y_gm_24_db = gm_OK_b + 6.5 * gm_24_db;	// Margo Gingivae distobukkal 24
			var y_pd_24_db = 6.5 * pd_24_db;			// Sondierungstiefe distobukkal 24
			
		// Set der vertikalen Koordinaten von Zahn 24 (palatinal) aus dem Formular
			var y_gm_24_dp = gm_OK_p - 6.5 * gm_24_dp;	// Margo Gingivae distopalatinal 24
			var y_pd_24_dp = 6.5 * pd_24_dp;			// Sondierungstiefe distopalatinal 24
			
		// Berechnung des Attachmentniveaus 24 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_24_db = y_gm_24_db - y_pd_24_db;	// Attachmentniveau distobukkal 24
			
		// Berechnung des Attachmentniveaus 24 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_24_dp = y_gm_24_dp + y_pd_24_dp;	// Attachmentniveau distopalatinal 24

		// Parodontaltasche inter_25_24 bukkal zeichnen
			var string = 
				x_mb_25 + ", " + y_al_25_mb + "  " + 
				x_db_24 + ", " + y_al_24_db + "  " + 
				x_db_24 + ", " + y_gm_24_db + "  " + 
				x_mb_25 + ", " + y_gm_25_mb;
			document.getElementById("polygon_inter_25_24_b").setAttribute("points", string);
		// Attachmentniveau inter_25_24 bukkal zeichnen
			var string = 
				x_mb_25 + ", " + y_al_25_mb + "  " + 
				x_db_24 + ", " + y_al_24_db;
			document.getElementById("polyline_al_inter_25_24_b").setAttribute("points", string);
		// Margo Gingivae inter_25_24 bukkal zeichnen
			var string =
				x_mb_25 + ", " + y_gm_25_mb + "  " + 
				x_db_24 + ", " + y_gm_24_db;
			document.getElementById("polyline_gm_inter_25_24_b").setAttribute("points", string);

        // Parodontaltasche inter_25_24 palatinal zeichnen
			var string = 
				x_mp_25 + ", " + y_al_25_mp + "  " + 
				x_dp_24 + ", " + y_al_24_dp + "  " + 
				x_dp_24 + ", " + y_gm_24_dp + "  " + 
				x_mp_25 + ", " + y_gm_25_mp;
			document.getElementById("polygon_inter_25_24_p").setAttribute("points", string);
		// Attachmentniveau inter_25_24 palatinal zeichnen
			var string = 
				x_mp_25 + ", " + y_al_25_mp + "  " + 
				x_dp_24 + ", " + y_al_24_dp;
			document.getElementById("polyline_al_inter_25_24_p").setAttribute("points", string);
		// Margo Gingivae inter_25_24 palatinal zeichnen
			var string =
				x_mp_25 + ", " + y_gm_25_mp + "  " + 
				x_dp_24 + ", " + y_gm_24_dp;
			document.getElementById("polyline_gm_inter_25_24_p").setAttribute("points", string);
		}
        if (tooth_26 == 1 && tooth_25 == 1) {

            pd_26_mb = document.forms[0]["pd_26_mb"].value;
			gm_26_mb = document.forms[0]["gm_26_mb"].value;
			
			pd_26_mp = document.forms[0]["pd_26_mp"].value;
			gm_26_mp = document.forms[0]["gm_26_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 26 (bukkal) in der Bitmap
			var x_mb_26 = 907;							// mesial 26
			
		// Set der horizontalen Koordinaten von Zahn 26 (palatinal) in der Bitmap
			var x_mp_26 = 912;							// mesial 26
			
		// Set der vertikalen Koordinaten von Zahn 26 (bukkal) aus dem Formular
			var y_gm_26_mb = gm_OK_b + 6.5 * gm_26_mb;	// Margo Gingivae mesiobukkal 26
			var y_pd_26_mb = 6.5 * pd_26_mb;			// Sondierungstiefe mesiobukkal 26
			
		// Set der vertikalen Koordinaten von Zahn 26 (palatinal) aus dem Formular
			var y_gm_26_mp = gm_OK_p - 6.5 * gm_26_mp;	// Margo Gingivae mesiopalatinal 26
			var y_pd_26_mp = 6.5 * pd_26_mp;			// Sondierungstiefe mesiopalatinal 26
			
		// Berechnung des Attachmentniveaus 26 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_26_mb = y_gm_26_mb - y_pd_26_mb;	// Attachmentniveau mesiobukkal 26
			
		// Berechnung des Attachmentniveaus 26 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_26_mp = y_gm_26_mp + y_pd_26_mp;	// Attachmentniveau mesiopalatinal 26

		// Parodontaltasche inter_26_25 bukkal zeichnen
			var string = 
				x_mb_26 + ", " + y_al_26_mb + "  " + 
				x_db_25 + ", " + y_al_25_db + "  " + 
				x_db_25 + ", " + y_gm_25_db + "  " + 
				x_mb_26 + ", " + y_gm_26_mb;
			document.getElementById("polygon_inter_26_25_b").setAttribute("points", string);
		// Attachmentniveau inter_26_25 bukkal zeichnen
			var string = 
				x_mb_26 + ", " + y_al_26_mb + "  " + 
				x_db_25 + ", " + y_al_25_db;
			document.getElementById("polyline_al_inter_26_25_b").setAttribute("points", string);
		// Margo Gingivae inter_26_25 bukkal zeichnen
			var string =
				x_mb_26 + ", " + y_gm_26_mb + "  " + 
				x_db_25 + ", " + y_gm_25_db;
			document.getElementById("polyline_gm_inter_26_25_b").setAttribute("points", string);

        // Parodontaltasche inter_26_25 palatinal zeichnen
			var string = 
				x_mp_26 + ", " + y_al_26_mp + "  " + 
				x_dp_25 + ", " + y_al_25_dp + "  " + 
				x_dp_25 + ", " + y_gm_25_dp + "  " + 
				x_mp_26 + ", " + y_gm_26_mp;
			document.getElementById("polygon_inter_26_25_p").setAttribute("points", string);
		// Attachmentniveau inter_26_25 palatinal zeichnen
			var string = 
				x_mp_26 + ", " + y_al_26_mp + "  " + 
				x_dp_25 + ", " + y_al_25_dp;
			document.getElementById("polyline_al_inter_26_25_p").setAttribute("points", string);
		// Margo Gingivae inter_26_25 palatinal zeichnen
			var string =
				x_mp_26 + ", " + y_gm_26_mp + "  " + 
				x_dp_25 + ", " + y_gm_25_dp;
			document.getElementById("polyline_gm_inter_26_25_p").setAttribute("points", string);
		}
	}