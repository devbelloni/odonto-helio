	// Definition der Variablen für das Formular
		var tooth_11 = 1;
		var Implantat_11 = 0;
		var bop_11_db = 0;
		var bop_11_b = 0;
		var bop_11_mb = 0;
		var pi_11_db = 0;
		var pi_11_b = 0;
		var pi_11_mb = 0;
		var bop_11_dp = 0;
		var bop_11_p = 0;
		var bop_11_mp = 0;
		var pi_11_dp = 0;
		var pi_11_p = 0;
		var pi_11_mp = 0;
		var gm_11_db = 0;
		var gm_11_b = 0;
		var gm_11_mb = 0;
		var pd_11_db = 0;
		var pd_11_b = 0;
		var pd_11_mb = 0;
		var gm_11_dp = 0;
		var gm_11_p = 0;
		var gm_11_mp = 0;
		var pd_11_dp = 0;
		var pd_11_p = 0;
		var pd_11_mp = 0;

	function clear_data_11() {
        if (tooth_11 == 1) {
			gm_11_db = 0;
			gm_11_b = 0;
			gm_11_mb = 0;
			pd_11_db = 0;
			pd_11_b = 0;
			pd_11_mb = 0;
	
				document.getElementById('gm_11_db_txt').value = 0;
				document.getElementById('gm_11_b_txt').value = 0;
				document.getElementById('gm_11_mb_txt').value = 0;
				
				document.getElementById('pd_11_db_txt').value = 0;
				document.getElementById('pd_11_b_txt').value = 0;
				document.getElementById('pd_11_mb_txt').value = 0;
			
				document.forms[0]["pd_11_db"].style.color = 'black'
				document.forms[0]["pd_11_b"].style.color = 'black'
				document.forms[0]["pd_11_mb"].style.color = 'black'
			
			gm_11_dp = 0;
			gm_11_p = 0;
			gm_11_mp = 0;
			pd_11_dp = 0;
			pd_11_p = 0;
			pd_11_mp = 0;

				document.getElementById('gm_11_dp_txt').value = 0;
				document.getElementById('gm_11_p_txt').value = 0;
				document.getElementById('gm_11_mp_txt').value = 0;
				
				document.getElementById('pd_11_dp_txt').value = 0;
				document.getElementById('pd_11_p_txt').value = 0;
				document.getElementById('pd_11_mp_txt').value = 0;

				document.forms[0]["pd_11_dp"].style.color = 'black'
				document.forms[0]["pd_11_p"].style.color = 'black'
				document.forms[0]["pd_11_mp"].style.color = 'black'
			
			change_probing_11();
			
			mobility_11 = 0;

				document.getElementById('mobility_11_txt').value = "0";

			note_11 = "";

				document.getElementById('note_11_txt').value = "";
	
			bop_11_db = 0;
			bop_11_b = 0;
			bop_11_mb = 0;
					
			bop_11_dp = 0;
			bop_11_p = 0;
			bop_11_mp = 0;
					
				document.getElementById('bop_11_db_rectangle').style.display = 'none';
				document.getElementById('bop_11_b_rectangle').style.display = 'none';
				document.getElementById('bop_11_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_11_dp_rectangle').style.display = 'none';
				document.getElementById('bop_11_p_rectangle').style.display = 'none';
				document.getElementById('bop_11_mp_rectangle').style.display = 'none';
				
			pi_11_db = 0;
			pi_11_b = 0;
			pi_11_mb = 0;
					
			pi_11_dp = 0;
			pi_11_p = 0;
			pi_11_mp = 0;

				document.getElementById('pi_11_db_rectangle').style.display = 'none';
				document.getElementById('pi_11_b_rectangle').style.display = 'none';
				document.getElementById('pi_11_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_11_dp_rectangle').style.display = 'none';
				document.getElementById('pi_11_p_rectangle').style.display = 'none';
				document.getElementById('pi_11_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_11() {
		if (tooth_11 === 1) {
			tooth_11 = 0;
			document.getElementById('tooth_line_11_b').style.display = 'block';
			document.getElementById('tooth_line_11_p').style.display = 'block';
			
			document.getElementById('mobility_11_txt').style.display = 'none';
			
			document.getElementById('implantat_11_btn').style.display = 'none';
			document.getElementById('implantat_11_tab').style.display = 'none';
			document.getElementById('implantat_11_b_image').style.display = 'none';
			document.getElementById('implantat_11_p_image').style.display = 'none';

			document.getElementById('gm_11_db_txt').style.display = 'none';
			document.getElementById('gm_11_b_txt').style.display = 'none';
			document.getElementById('gm_11_mb_txt').style.display = 'none';
			
			document.getElementById('pd_11_db_txt').style.display = 'none';
			document.getElementById('pd_11_b_txt').style.display = 'none';
			document.getElementById('pd_11_mb_txt').style.display = 'none';
			
			document.getElementById('gm_11_dp_txt').style.display = 'none';
			document.getElementById('gm_11_p_txt').style.display = 'none';
			document.getElementById('gm_11_mp_txt').style.display = 'none';
			
			document.getElementById('pd_11_dp_txt').style.display = 'none';
			document.getElementById('pd_11_p_txt').style.display = 'none';
			document.getElementById('pd_11_mp_txt').style.display = 'none';
			
			document.getElementById('bop_11_db_rectangle').style.display = 'none';
			document.getElementById('bop_11_b_rectangle').style.display = 'none';
			document.getElementById('bop_11_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_11_dp_rectangle').style.display = 'none';
			document.getElementById('bop_11_p_rectangle').style.display = 'none';
			document.getElementById('bop_11_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_11_db_btn').style.display = 'none';
			document.getElementById('bop_11_b_btn').style.display = 'none';
			document.getElementById('bop_11_mb_btn').style.display = 'none';
			
			document.getElementById('bop_11_dp_btn').style.display = 'none';
			document.getElementById('bop_11_p_btn').style.display = 'none';
			document.getElementById('bop_11_mp_btn').style.display = 'none';
			
			document.getElementById('pi_11_db_rectangle').style.display = 'none';
			document.getElementById('pi_11_b_rectangle').style.display = 'none';
			document.getElementById('pi_11_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_11_dp_rectangle').style.display = 'none';
			document.getElementById('pi_11_p_rectangle').style.display = 'none';
			document.getElementById('pi_11_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_11_db_btn').style.display = 'none';
			document.getElementById('pi_11_b_btn').style.display = 'none';
			document.getElementById('pi_11_mb_btn').style.display = 'none';
			
			document.getElementById('pi_11_dp_btn').style.display = 'none';
			document.getElementById('pi_11_p_btn').style.display = 'none';
			document.getElementById('pi_11_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_11_b').style.display = 'none';
			document.getElementById('polyline_al_11_b').style.display = 'none';
			document.getElementById('polyline_gm_11_b').style.display = 'none';
			
			document.getElementById('polygon_11_p').style.display = 'none';
			document.getElementById('polyline_al_11_p').style.display = 'none';
			document.getElementById('polyline_gm_11_p').style.display = 'none';
			
			document.getElementById('polygon_inter_12_11_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_12_11_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_12_11_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_12_11_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_12_11_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_12_11_p').style.display = 'none';            
			
			document.getElementById('note_11_txt').style.display = 'none';
		}
		else if (Implantat_11 !== 1) {
			tooth_11 = 1;
			document.getElementById('tooth_line_11_b').style.display = 'none';
			document.getElementById('tooth_line_11_p').style.display = 'none';

			document.getElementById('mobility_11_txt').style.display = 'block';

			document.getElementById('implantat_11_btn').style.display = 'block';

			document.getElementById('gm_11_db_txt').style.display = 'block';
			document.getElementById('gm_11_b_txt').style.display = 'block';
			document.getElementById('gm_11_mb_txt').style.display = 'block';
			
			document.getElementById('pd_11_db_txt').style.display = 'block';
			document.getElementById('pd_11_b_txt').style.display = 'block';
			document.getElementById('pd_11_mb_txt').style.display = 'block';
			
			document.getElementById('gm_11_dp_txt').style.display = 'block';
			document.getElementById('gm_11_p_txt').style.display = 'block';
			document.getElementById('gm_11_mp_txt').style.display = 'block';
			
			document.getElementById('pd_11_dp_txt').style.display = 'block';
			document.getElementById('pd_11_p_txt').style.display = 'block';
			document.getElementById('pd_11_mp_txt').style.display = 'block';
			
			document.getElementById('note_11_txt').style.display = 'block';

			document.getElementById('polygon_11_b').style.display = 'block';
			document.getElementById('polyline_al_11_b').style.display = 'block';
			document.getElementById('polyline_gm_11_b').style.display = 'block';
			
			document.getElementById('polygon_11_p').style.display = 'block';
			document.getElementById('polyline_al_11_p').style.display = 'block';
			document.getElementById('polyline_gm_11_p').style.display = 'block';

            if (tooth_12 == 1 && tooth_11 == 1) {
				document.getElementById('polygon_inter_12_11_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_12_11_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_12_11_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_12_11_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_12_11_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_12_11_p').style.display = 'block';            
            }

			document.getElementById('bop_11_db_btn').style.display = 'block';
			document.getElementById('bop_11_b_btn').style.display = 'block';
			document.getElementById('bop_11_mb_btn').style.display = 'block';

			document.getElementById('bop_11_dp_btn').style.display = 'block';
			document.getElementById('bop_11_p_btn').style.display = 'block';
			document.getElementById('bop_11_mp_btn').style.display = 'block';
			
			if (bop_11_db == 1) {
				document.getElementById('bop_11_db_rectangle').style.display = 'block';
			}
			if (bop_11_b == 1) {
				document.getElementById('bop_11_b_rectangle').style.display = 'block';
			}
			if (bop_11_mb == 1) {
				document.getElementById('bop_11_mb_rectangle').style.display = 'block';
			}
			if (bop_11_dp == 1) {
				document.getElementById('bop_11_dp_rectangle').style.display = 'block';
			}
			if (bop_11_p == 1) {
				document.getElementById('bop_11_p_rectangle').style.display = 'block';
			}
			if (bop_11_mp == 1) {
				document.getElementById('bop_11_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_11_db_btn').style.display = 'block';
			document.getElementById('pi_11_b_btn').style.display = 'block';
			document.getElementById('pi_11_mb_btn').style.display = 'block';

			document.getElementById('pi_11_dp_btn').style.display = 'block';
			document.getElementById('pi_11_p_btn').style.display = 'block';
			document.getElementById('pi_11_mp_btn').style.display = 'block';
			
			if (pi_11_db == 1) {
				document.getElementById('pi_11_db_rectangle').style.display = 'block';
			}
			if (pi_11_b == 1) {
				document.getElementById('pi_11_b_rectangle').style.display = 'block';
			}
			if (pi_11_mb == 1) {
				document.getElementById('pi_11_mb_rectangle').style.display = 'block';
			}
			if (pi_11_dp == 1) {
				document.getElementById('pi_11_dp_rectangle').style.display = 'block';
			}
			if (pi_11_p == 1) {
				document.getElementById('pi_11_p_rectangle').style.display = 'block';
			}
			if (pi_11_mp == 1) {
				document.getElementById('pi_11_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_11 == 1) {
			tooth_11 = 1;
			document.getElementById('tooth_line_11_b').style.display = 'none';
			document.getElementById('tooth_line_11_p').style.display = 'none';

			document.getElementById('mobility_11_txt').style.display = 'block';
			
			document.getElementById('note_11_txt').style.display = 'block';

			document.getElementById('implantat_11_btn').style.display = 'block';
			document.getElementById('implantat_11_tab').style.display = 'block';
			document.getElementById('implantat_11_b_image').style.display = 'block';
			document.getElementById('implantat_11_p_image').style.display = 'block';

			document.getElementById('gm_11_db_txt').style.display = 'block';
			document.getElementById('gm_11_b_txt').style.display = 'block';
			document.getElementById('gm_11_mb_txt').style.display = 'block';
			
			document.getElementById('pd_11_db_txt').style.display = 'block';
			document.getElementById('pd_11_b_txt').style.display = 'block';
			document.getElementById('pd_11_mb_txt').style.display = 'block';
			
			document.getElementById('gm_11_dp_txt').style.display = 'block';
			document.getElementById('gm_11_p_txt').style.display = 'block';
			document.getElementById('gm_11_mp_txt').style.display = 'block';
			
			document.getElementById('pd_11_dp_txt').style.display = 'block';
			document.getElementById('pd_11_p_txt').style.display = 'block';
			document.getElementById('pd_11_mp_txt').style.display = 'block';

			document.getElementById('polygon_11_b').style.display = 'block';
			document.getElementById('polyline_al_11_b').style.display = 'block';
			document.getElementById('polyline_gm_11_b').style.display = 'block';
			
			document.getElementById('polygon_11_p').style.display = 'block';
			document.getElementById('polyline_al_11_p').style.display = 'block';
			document.getElementById('polyline_gm_11_p').style.display = 'block';

            if (tooth_12 == 1 && tooth_11 == 1) {
				document.getElementById('polygon_inter_12_11_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_12_11_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_12_11_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_12_11_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_12_11_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_12_11_p').style.display = 'block';            
            }

			document.getElementById('bop_11_db_btn').style.display = 'block';
			document.getElementById('bop_11_b_btn').style.display = 'block';
			document.getElementById('bop_11_mb_btn').style.display = 'block';

			document.getElementById('bop_11_dp_btn').style.display = 'block';
			document.getElementById('bop_11_p_btn').style.display = 'block';
			document.getElementById('bop_11_mp_btn').style.display = 'block';
			
			document.getElementById('pi_11_db_btn').style.display = 'block';
			document.getElementById('pi_11_b_btn').style.display = 'block';
			document.getElementById('pi_11_mb_btn').style.display = 'block';

			document.getElementById('pi_11_dp_btn').style.display = 'block';
			document.getElementById('pi_11_p_btn').style.display = 'block';
			document.getElementById('pi_11_mp_btn').style.display = 'block';
			
			if (bop_11_db == 1) {
				document.getElementById('bop_11_db_rectangle').style.display = 'block';
			}
			if (bop_11_b == 1) {
				document.getElementById('bop_11_b_rectangle').style.display = 'block';
			}
			if (bop_11_mb == 1) {
				document.getElementById('bop_11_mb_rectangle').style.display = 'block';
			}
			if (bop_11_dp == 1) {
				document.getElementById('bop_11_dp_rectangle').style.display = 'block';
			}
			if (bop_11_p == 1) {
				document.getElementById('bop_11_p_rectangle').style.display = 'block';
			}
			if (bop_11_mp == 1) {
				document.getElementById('bop_11_mp_rectangle').style.display = 'block';
			}
			
			if (pi_11_db == 1) {
				document.getElementById('pi_11_db_rectangle').style.display = 'block';
			}
			if (pi_11_b == 1) {
				document.getElementById('pi_11_b_rectangle').style.display = 'block';
			}
			if (pi_11_mb == 1) {
				document.getElementById('pi_11_mb_rectangle').style.display = 'block';
			}
			if (pi_11_dp == 1) {
				document.getElementById('pi_11_dp_rectangle').style.display = 'block';
			}
			if (pi_11_p == 1) {
				document.getElementById('pi_11_p_rectangle').style.display = 'block';
			}
			if (pi_11_mp == 1) {
				document.getElementById('pi_11_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_11();
	}

	function toggle_implant_11() {
		if (Implantat_11 == 0) {
			Implantat_11 = 1;
			
			document.getElementById('implantat_11_b_image').style.display = 'block';
			document.getElementById('implantat_11_p_image').style.display = 'block';
			document.getElementById('implantat_11_tab').style.display = 'block';
		}
		else {
			Implantat_11 = 0;
			
			document.getElementById('implantat_11_b_image').style.display = 'none';
			document.getElementById('implantat_11_p_image').style.display = 'none';
			document.getElementById('implantat_11_tab').style.display = 'none';
		}
	}

	function toggle_bop_11_db() {
		if (bop_11_db == 0) {
			bop_11_db = 1;
			document.getElementById('bop_11_db_rectangle').style.display = 'block';
		}
		else {
			bop_11_db = 0;
			document.getElementById('bop_11_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_11_b() {
		if (bop_11_b == 0) {
			bop_11_b = 1;
			document.getElementById('bop_11_b_rectangle').style.display = 'block';
		}
		else {
			bop_11_b = 0;
			document.getElementById('bop_11_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_11_mb() {
		if (bop_11_mb == 0) {
			bop_11_mb = 1;
			document.getElementById('bop_11_mb_rectangle').style.display = 'block';
		}
		else {
			bop_11_mb = 0;
			document.getElementById('bop_11_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_11_db() {
		if (pi_11_db == 0) {
			pi_11_db = 1;
			document.getElementById('pi_11_db_rectangle').style.display = 'block';
		}
		else {
			pi_11_db = 0;
			document.getElementById('pi_11_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_11_b() {
		if (pi_11_b == 0) {
			pi_11_b = 1;
			document.getElementById('pi_11_b_rectangle').style.display = 'block';
		}
		else {
			pi_11_b = 0;
			document.getElementById('pi_11_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_11_mb() {
		if (pi_11_mb == 0) {
			pi_11_mb = 1;
			document.getElementById('pi_11_mb_rectangle').style.display = 'block';
		}
		else {
			pi_11_mb = 0;
			document.getElementById('pi_11_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_11_dp() {
		if (bop_11_dp == 0) {
			bop_11_dp = 1;
			document.getElementById('bop_11_dp_rectangle').style.display = 'block';
		}
		else {
			bop_11_dp = 0;
			document.getElementById('bop_11_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_11_p() {
		if (bop_11_p == 0) {
			bop_11_p = 1;
			document.getElementById('bop_11_p_rectangle').style.display = 'block';
		}
		else {
			bop_11_p = 0;
			document.getElementById('bop_11_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_11_mp() {
		if (bop_11_mp == 0) {
			bop_11_mp = 1;
			document.getElementById('bop_11_mp_rectangle').style.display = 'block';
		}
		else {
			bop_11_mp = 0;
			document.getElementById('bop_11_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_11_dp() {
		if (pi_11_dp == 0) {
			pi_11_dp = 1;
			document.getElementById('pi_11_dp_rectangle').style.display = 'block';
		}
		else {
			pi_11_dp = 0;
			document.getElementById('pi_11_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_11_p() {
		if (pi_11_p == 0) {
			pi_11_p = 1;
			document.getElementById('pi_11_p_rectangle').style.display = 'block';
		}
		else {
			pi_11_p = 0;
			document.getElementById('pi_11_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_11_mp() {
		if (pi_11_mp == 0) {
			pi_11_mp = 1;
			document.getElementById('pi_11_mp_rectangle').style.display = 'block';
		}
		else {
			pi_11_mp = 0;
			document.getElementById('pi_11_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_11() {
		if (tooth_11 == 1) {
			
		// Variablen aus dem Formular
			pd_11_db = document.forms[0]["pd_11_db"].value;
			pd_11_b = document.forms[0]["pd_11_b"].value;
			pd_11_mb = document.forms[0]["pd_11_mb"].value;

			if (document.forms[0]["pd_11_dp"].value > 3) {document.forms[0]["pd_11_dp"].style.color = 'red';} else {document.forms[0]["pd_11_dp"].style.color = 'black'}
			if (document.forms[0]["pd_11_p"].value > 3) {document.forms[0]["pd_11_p"].style.color = 'red';} else {document.forms[0]["pd_11_p"].style.color = 'black'}
			if (document.forms[0]["pd_11_mp"].value > 3) {document.forms[0]["pd_11_mp"].style.color = 'red';} else {document.forms[0]["pd_11_mp"].style.color = 'black'}
			
			gm_11_db = document.forms[0]["gm_11_db"].value;
			gm_11_b = document.forms[0]["gm_11_b"].value;
			gm_11_mb = document.forms[0]["gm_11_mb"].value;
			
			pd_11_dp = document.forms[0]["pd_11_dp"].value;
			pd_11_p = document.forms[0]["pd_11_p"].value;
			pd_11_mp = document.forms[0]["pd_11_mp"].value;

			if (document.forms[0]["pd_11_db"].value > 3) {document.forms[0]["pd_11_db"].style.color = 'red';} else {document.forms[0]["pd_11_db"].style.color = 'black'}
			if (document.forms[0]["pd_11_b"].value > 3) {document.forms[0]["pd_11_b"].style.color = 'red';} else {document.forms[0]["pd_11_b"].style.color = 'black'}
			if (document.forms[0]["pd_11_mb"].value > 3) {document.forms[0]["pd_11_mb"].style.color = 'red';} else {document.forms[0]["pd_11_mb"].style.color = 'black'}
			
			gm_11_dp = document.forms[0]["gm_11_dp"].value;
			gm_11_p = document.forms[0]["gm_11_p"].value;
			gm_11_mp = document.forms[0]["gm_11_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 11 (bukkal) in der Bitmap
			var x_db_11 = 628;							// distal 11
			var x_mb_11 = 660;							// mesial 11
			var x_b_11 = (x_db_11 + x_mb_11)/2;			// bukkal 11
			
		// Set der horizontalen Koordinaten von Zahn 11 (palatinal) in der Bitmap
			var x_dp_11 = 627;							// distal 11
			var x_mp_11 = 658;							// mesial 11
			var x_p_11 = (x_dp_11 + x_mp_11)/2;			// palatinal 11
			
		// Set der vertikalen Koordinaten von Zahn 11 (bukkal) aus dem Formular
			var y_gm_11_db = gm_OK_b + 6.5 * gm_11_db;	// Margo Gingivae distobukkal 11
			var y_gm_11_b = gm_OK_b + 6.5 * gm_11_b;	// Margo Gingivae bukkal 11
			var y_gm_11_mb = gm_OK_b + 6.5 * gm_11_mb;	// Margo Gingivae mesiobukkal 11
			var y_pd_11_db = 6.5 * pd_11_db;			// Sondierungstiefe distobukkal 11
			var y_pd_11_b = 6.5 * pd_11_b;				// Sondierungstiefe bukkal 11
			var y_pd_11_mb = 6.5 * pd_11_mb;			// Sondierungstiefe mesiobukkal 11
			
		// Set der vertikalen Koordinaten von Zahn 11 (palatinal) aus dem Formular
			var y_gm_11_dp = gm_OK_p - 6.5 * gm_11_dp;	// Margo Gingivae distopalatinal 11
			var y_gm_11_p = gm_OK_p - 6.5 * gm_11_p;	// Margo Gingivae palatinal 11
			var y_gm_11_mp = gm_OK_p - 6.5 * gm_11_mp;	// Margo Gingivae mesiopalatinal 11
			var y_pd_11_dp = 6.5 * pd_11_dp;			// Sondierungstiefe distopalatinal 11
			var y_pd_11_p = 6.5 * pd_11_p;				// Sondierungstiefe palatinal 11
			var y_pd_11_mp = 6.5 * pd_11_mp;			// Sondierungstiefe mesiopalatinal 11
			
		// Berechnung des Attachmentniveaus 11 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_11_db = y_gm_11_db - y_pd_11_db;	// Attachmentniveau distobukkal 11
			var y_al_11_b = y_gm_11_b - y_pd_11_b;		// Attachmentniveau bukkal 11
			var y_al_11_mb = y_gm_11_mb - y_pd_11_mb;	// Attachmentniveau mesiobukkal 11
			
		// Berechnung des Attachmentniveaus 11 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_11_dp = y_gm_11_dp + y_pd_11_dp;	// Attachmentniveau distopalatinal 11
			var y_al_11_p = y_gm_11_p + y_pd_11_p;		// Attachmentniveau palatinal 11
			var y_al_11_mp = y_gm_11_mp + y_pd_11_mp;	// Attachmentniveau mesiopalatinal 11
			
		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[11].storeCoordinates(
				x_db_11, x_mb_11, x_dp_11, x_mp_11, x_b_11, x_p_11,
				y_gm_11_db, y_gm_11_b, y_gm_11_mb, y_pd_11_db, y_pd_11_b, y_pd_11_mb,
				y_gm_11_dp, y_gm_11_p, y_gm_11_mp, y_pd_11_dp, y_pd_11_p, y_pd_11_mp,
				y_al_11_db, y_al_11_b, y_al_11_mb, y_al_11_dp, y_al_11_p, y_al_11_mp
			);
		
		// Parodontaltasche 11 bukkal zeichnen
			var string = 
				x_db_11 + ", " + y_al_11_db + "  " + 
				x_b_11 + ", " + y_al_11_b + "  " + 
				x_mb_11 + ", " + y_al_11_mb + "  " + 
				x_mb_11 + ", " + y_gm_11_mb + "  " + 
				x_b_11 + ", " + y_gm_11_b + "  " + 
				x_db_11 + ", " + y_gm_11_db;
			document.getElementById("polygon_11_b").setAttribute("points", string);
		// Attachmentniveau 11 bukkal zeichnen
			var string = 
				x_db_11 + ", " + y_al_11_db + "  " + 
				x_b_11 + ", " + y_al_11_b + "  " + 
				x_mb_11 + ", " + y_al_11_mb;
			document.getElementById("polyline_al_11_b").setAttribute("points", string);
		// Margo Gingivae 11 bukkal zeichnen
			var string =
				x_db_11 + ", " + y_gm_11_db + "  " + 
				x_b_11 + ", " + y_gm_11_b + "  " + 
				x_mb_11 + ", " + y_gm_11_mb;
			document.getElementById("polyline_gm_11_b").setAttribute("points", string);

		// Parodontaltasche 11 palatinal zeichnen
			var string = 
				x_dp_11 + ", " + y_al_11_dp + "  " + 
				x_p_11 + ", " + y_al_11_p + "  " + 
				x_mp_11 + ", " + y_al_11_mp + "  " + 
				x_mp_11 + ", " + y_gm_11_mp + "  " + 
				x_p_11 + ", " + y_gm_11_p + "  " + 
				x_dp_11 + ", " + y_gm_11_dp;
			document.getElementById("polygon_11_p").setAttribute("points", string);
		// Attachmentniveau 11 palatinal zeichnen
			var string = 
				x_dp_11 + ", " + y_al_11_dp + "  " + 
				x_p_11 + ", " + y_al_11_p + "  " + 
				x_mp_11 + ", " + y_al_11_mp;
			document.getElementById("polyline_al_11_p").setAttribute("points", string);
		// Margo Gingivae 11 palatinal zeichnen
			var string =
				x_dp_11 + ", " + y_gm_11_dp + "  " + 
				x_p_11 + ", " + y_gm_11_p + "  " + 
				x_mp_11 + ", " + y_gm_11_mp;
			document.getElementById("polyline_gm_11_p").setAttribute("points", string);
		}
        if (tooth_12 == 1 && tooth_11 == 1) {

            pd_12_mb = document.forms[0]["pd_12_mb"].value;
			gm_12_mb = document.forms[0]["gm_12_mb"].value;
			
			pd_12_mp = document.forms[0]["pd_12_mp"].value;
			gm_12_mp = document.forms[0]["gm_12_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 12 (bukkal) in der Bitmap
			var x_mb_12 = 612;							// mesial 12
			
		// Set der horizontalen Koordinaten von Zahn 12 (palatinal) in der Bitmap
			var x_mp_12 = 612;							// mesial 12
			
		// Set der vertikalen Koordinaten von Zahn 12 (bukkal) aus dem Formular
			var y_gm_12_mb = gm_OK_b + 6.5 * gm_12_mb;	// Margo Gingivae mesiobukkal 12
			var y_pd_12_mb = 6.5 * pd_12_mb;			// Sondierungstiefe mesiobukkal 12
			
		// Set der vertikalen Koordinaten von Zahn 12 (palatinal) aus dem Formular
			var y_gm_12_mp = gm_OK_p - 6.5 * gm_12_mp;	// Margo Gingivae mesiopalatinal 12
			var y_pd_12_mp = 6.5 * pd_12_mp;			// Sondierungstiefe mesiopalatinal 12
			
		// Berechnung des Attachmentniveaus 12 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_12_mb = y_gm_12_mb - y_pd_12_mb;	// Attachmentniveau mesiobukkal 12
			
		// Berechnung des Attachmentniveaus 12 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_12_mp = y_gm_12_mp + y_pd_12_mp;	// Attachmentniveau mesiopalatinal 12

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
	}