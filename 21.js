	// Definition der Variablen für das Formular
		var tooth_21 = 1;
		var Implantat_21 = 0;
		var bop_21_db = 0;
		var bop_21_b = 0;
		var bop_21_mb = 0;
		var pi_21_db = 0;
		var pi_21_b = 0;
		var pi_21_mb = 0;
		var bop_21_dp = 0;
		var bop_21_p = 0;
		var bop_21_mp = 0;
		var pi_21_dp = 0;
		var pi_21_p = 0;
		var pi_21_mp = 0;
		var gm_21_db = 0;
		var gm_21_b = 0;
		var gm_21_mb = 0;
		var pd_21_db = 0;
		var pd_21_b = 0;
		var pd_21_mb = 0;
		var gm_21_dp = 0;
		var gm_21_p = 0;
		var gm_21_mp = 0;
		var pd_21_dp = 0;
		var pd_21_p = 0;
		var pd_21_mp = 0;

	function clear_data_21() {
        if (tooth_21 == 1) {
			gm_21_db = 0;
			gm_21_b = 0;
			gm_21_mb = 0;
			pd_21_db = 0;
			pd_21_b = 0;
			pd_21_mb = 0;
	
				document.getElementById('gm_21_db_txt').value = 0;
				document.getElementById('gm_21_b_txt').value = 0;
				document.getElementById('gm_21_mb_txt').value = 0;
				
				document.getElementById('pd_21_db_txt').value = 0;
				document.getElementById('pd_21_b_txt').value = 0;
				document.getElementById('pd_21_mb_txt').value = 0;
			
				document.forms[0]["pd_21_db"].style.color = 'black'
				document.forms[0]["pd_21_b"].style.color = 'black'
				document.forms[0]["pd_21_mb"].style.color = 'black'
			
			gm_21_dp = 0;
			gm_21_p = 0;
			gm_21_mp = 0;
			pd_21_dp = 0;
			pd_21_p = 0;
			pd_21_mp = 0;

				document.getElementById('gm_21_dp_txt').value = 0;
				document.getElementById('gm_21_p_txt').value = 0;
				document.getElementById('gm_21_mp_txt').value = 0;
				
				document.getElementById('pd_21_dp_txt').value = 0;
				document.getElementById('pd_21_p_txt').value = 0;
				document.getElementById('pd_21_mp_txt').value = 0;

				document.forms[0]["pd_21_dp"].style.color = 'black'
				document.forms[0]["pd_21_p"].style.color = 'black'
				document.forms[0]["pd_21_mp"].style.color = 'black'
			
			change_probing_21();
			
			mobility_21 = 0;

				document.getElementById('mobility_21_txt').value = "0";

			note_21 = "";

				document.getElementById('note_21_txt').value = "";
	
			bop_21_db = 0;
			bop_21_b = 0;
			bop_21_mb = 0;
					
			bop_21_dp = 0;
			bop_21_p = 0;
			bop_21_mp = 0;
					
				document.getElementById('bop_21_db_rectangle').style.display = 'none';
				document.getElementById('bop_21_b_rectangle').style.display = 'none';
				document.getElementById('bop_21_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_21_dp_rectangle').style.display = 'none';
				document.getElementById('bop_21_p_rectangle').style.display = 'none';
				document.getElementById('bop_21_mp_rectangle').style.display = 'none';
				
			pi_21_db = 0;
			pi_21_b = 0;
			pi_21_mb = 0;
					
			pi_21_dp = 0;
			pi_21_p = 0;
			pi_21_mp = 0;

				document.getElementById('pi_21_db_rectangle').style.display = 'none';
				document.getElementById('pi_21_b_rectangle').style.display = 'none';
				document.getElementById('pi_21_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_21_dp_rectangle').style.display = 'none';
				document.getElementById('pi_21_p_rectangle').style.display = 'none';
				document.getElementById('pi_21_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_21() {
		if (tooth_21 === 1) {
			tooth_21 = 0;
			document.getElementById('tooth_line_21_b').style.display = 'block';
			document.getElementById('tooth_line_21_p').style.display = 'block';
			
			document.getElementById('mobility_21_txt').style.display = 'none';
			
			document.getElementById('implantat_21_btn').style.display = 'none';
			document.getElementById('implantat_21_tab').style.display = 'none';
			document.getElementById('implantat_21_b_image').style.display = 'none';
			document.getElementById('implantat_21_p_image').style.display = 'none';

			document.getElementById('gm_21_db_txt').style.display = 'none';
			document.getElementById('gm_21_b_txt').style.display = 'none';
			document.getElementById('gm_21_mb_txt').style.display = 'none';
			
			document.getElementById('pd_21_db_txt').style.display = 'none';
			document.getElementById('pd_21_b_txt').style.display = 'none';
			document.getElementById('pd_21_mb_txt').style.display = 'none';
			
			document.getElementById('gm_21_dp_txt').style.display = 'none';
			document.getElementById('gm_21_p_txt').style.display = 'none';
			document.getElementById('gm_21_mp_txt').style.display = 'none';
			
			document.getElementById('pd_21_dp_txt').style.display = 'none';
			document.getElementById('pd_21_p_txt').style.display = 'none';
			document.getElementById('pd_21_mp_txt').style.display = 'none';
				
			document.getElementById('bop_21_db_rectangle').style.display = 'none';
			document.getElementById('bop_21_b_rectangle').style.display = 'none';
			document.getElementById('bop_21_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_21_dp_rectangle').style.display = 'none';
			document.getElementById('bop_21_p_rectangle').style.display = 'none';
			document.getElementById('bop_21_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_21_db_btn').style.display = 'none';
			document.getElementById('bop_21_b_btn').style.display = 'none';
			document.getElementById('bop_21_mb_btn').style.display = 'none';
			
			document.getElementById('bop_21_dp_btn').style.display = 'none';
			document.getElementById('bop_21_p_btn').style.display = 'none';
			document.getElementById('bop_21_mp_btn').style.display = 'none';
			
			document.getElementById('pi_21_db_rectangle').style.display = 'none';
			document.getElementById('pi_21_b_rectangle').style.display = 'none';
			document.getElementById('pi_21_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_21_dp_rectangle').style.display = 'none';
			document.getElementById('pi_21_p_rectangle').style.display = 'none';
			document.getElementById('pi_21_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_21_db_btn').style.display = 'none';
			document.getElementById('pi_21_b_btn').style.display = 'none';
			document.getElementById('pi_21_mb_btn').style.display = 'none';
			
			document.getElementById('pi_21_dp_btn').style.display = 'none';
			document.getElementById('pi_21_p_btn').style.display = 'none';
			document.getElementById('pi_21_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_21_b').style.display = 'none';
			document.getElementById('polyline_al_21_b').style.display = 'none';
			document.getElementById('polyline_gm_21_b').style.display = 'none';
			
			document.getElementById('polygon_21_p').style.display = 'none';
			document.getElementById('polyline_al_21_p').style.display = 'none';
			document.getElementById('polyline_gm_21_p').style.display = 'none';
			
			document.getElementById('polygon_inter_22_21_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_22_21_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_22_21_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_22_21_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_22_21_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_22_21_p').style.display = 'none';            
			
			document.getElementById('note_21_txt').style.display = 'none';
		}
		else if (Implantat_21 !== 1) {
			tooth_21 = 1;
			document.getElementById('tooth_line_21_b').style.display = 'none';
			document.getElementById('tooth_line_21_p').style.display = 'none';

			document.getElementById('mobility_21_txt').style.display = 'block';

			document.getElementById('implantat_21_btn').style.display = 'block';

			document.getElementById('gm_21_db_txt').style.display = 'block';
			document.getElementById('gm_21_b_txt').style.display = 'block';
			document.getElementById('gm_21_mb_txt').style.display = 'block';
			
			document.getElementById('pd_21_db_txt').style.display = 'block';
			document.getElementById('pd_21_b_txt').style.display = 'block';
			document.getElementById('pd_21_mb_txt').style.display = 'block';
			
			document.getElementById('gm_21_dp_txt').style.display = 'block';
			document.getElementById('gm_21_p_txt').style.display = 'block';
			document.getElementById('gm_21_mp_txt').style.display = 'block';
			
			document.getElementById('pd_21_dp_txt').style.display = 'block';
			document.getElementById('pd_21_p_txt').style.display = 'block';
			document.getElementById('pd_21_mp_txt').style.display = 'block';
			
			document.getElementById('note_21_txt').style.display = 'block';

			document.getElementById('polygon_21_b').style.display = 'block';
			document.getElementById('polyline_al_21_b').style.display = 'block';
			document.getElementById('polyline_gm_21_b').style.display = 'block';
			
			document.getElementById('polygon_21_p').style.display = 'block';
			document.getElementById('polyline_al_21_p').style.display = 'block';
			document.getElementById('polyline_gm_21_p').style.display = 'block';

            if (tooth_22 == 1 && tooth_21 == 1) {
				document.getElementById('polygon_inter_22_21_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_22_21_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_22_21_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_22_21_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_22_21_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_22_21_p').style.display = 'block';            
            }

			document.getElementById('bop_21_db_btn').style.display = 'block';
			document.getElementById('bop_21_b_btn').style.display = 'block';
			document.getElementById('bop_21_mb_btn').style.display = 'block';

			document.getElementById('bop_21_dp_btn').style.display = 'block';
			document.getElementById('bop_21_p_btn').style.display = 'block';
			document.getElementById('bop_21_mp_btn').style.display = 'block';
			
			if (bop_21_db == 1) {
				document.getElementById('bop_21_db_rectangle').style.display = 'block';
			}
			if (bop_21_b == 1) {
				document.getElementById('bop_21_b_rectangle').style.display = 'block';
			}
			if (bop_21_mb == 1) {
				document.getElementById('bop_21_mb_rectangle').style.display = 'block';
			}
			if (bop_21_dp == 1) {
				document.getElementById('bop_21_dp_rectangle').style.display = 'block';
			}
			if (bop_21_p == 1) {
				document.getElementById('bop_21_p_rectangle').style.display = 'block';
			}
			if (bop_21_mp == 1) {
				document.getElementById('bop_21_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_21_db_btn').style.display = 'block';
			document.getElementById('pi_21_b_btn').style.display = 'block';
			document.getElementById('pi_21_mb_btn').style.display = 'block';

			document.getElementById('pi_21_dp_btn').style.display = 'block';
			document.getElementById('pi_21_p_btn').style.display = 'block';
			document.getElementById('pi_21_mp_btn').style.display = 'block';
			
			if (pi_21_db == 1) {
				document.getElementById('pi_21_db_rectangle').style.display = 'block';
			}
			if (pi_21_b == 1) {
				document.getElementById('pi_21_b_rectangle').style.display = 'block';
			}
			if (pi_21_mb == 1) {
				document.getElementById('pi_21_mb_rectangle').style.display = 'block';
			}
			if (pi_21_dp == 1) {
				document.getElementById('pi_21_dp_rectangle').style.display = 'block';
			}
			if (pi_21_p == 1) {
				document.getElementById('pi_21_p_rectangle').style.display = 'block';
			}
			if (pi_21_mp == 1) {
				document.getElementById('pi_21_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_21 == 1) {
			tooth_21 = 1;
			document.getElementById('tooth_line_21_b').style.display = 'none';
			document.getElementById('tooth_line_21_p').style.display = 'none';

			document.getElementById('mobility_21_txt').style.display = 'block';
			
			document.getElementById('note_21_txt').style.display = 'block';

			document.getElementById('implantat_21_btn').style.display = 'block';
			document.getElementById('implantat_21_tab').style.display = 'block';
			document.getElementById('implantat_21_b_image').style.display = 'block';
			document.getElementById('implantat_21_p_image').style.display = 'block';

			document.getElementById('gm_21_db_txt').style.display = 'block';
			document.getElementById('gm_21_b_txt').style.display = 'block';
			document.getElementById('gm_21_mb_txt').style.display = 'block';
			
			document.getElementById('pd_21_db_txt').style.display = 'block';
			document.getElementById('pd_21_b_txt').style.display = 'block';
			document.getElementById('pd_21_mb_txt').style.display = 'block';
			
			document.getElementById('gm_21_dp_txt').style.display = 'block';
			document.getElementById('gm_21_p_txt').style.display = 'block';
			document.getElementById('gm_21_mp_txt').style.display = 'block';
			
			document.getElementById('pd_21_dp_txt').style.display = 'block';
			document.getElementById('pd_21_p_txt').style.display = 'block';
			document.getElementById('pd_21_mp_txt').style.display = 'block';

			document.getElementById('polygon_21_b').style.display = 'block';
			document.getElementById('polyline_al_21_b').style.display = 'block';
			document.getElementById('polyline_gm_21_b').style.display = 'block';
			
			document.getElementById('polygon_21_p').style.display = 'block';
			document.getElementById('polyline_al_21_p').style.display = 'block';
			document.getElementById('polyline_gm_21_p').style.display = 'block';

            if (tooth_22 == 1 && tooth_21 == 1) {
				document.getElementById('polygon_inter_22_21_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_22_21_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_22_21_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_22_21_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_22_21_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_22_21_p').style.display = 'block';            
            }

			document.getElementById('bop_21_db_btn').style.display = 'block';
			document.getElementById('bop_21_b_btn').style.display = 'block';
			document.getElementById('bop_21_mb_btn').style.display = 'block';

			document.getElementById('bop_21_dp_btn').style.display = 'block';
			document.getElementById('bop_21_p_btn').style.display = 'block';
			document.getElementById('bop_21_mp_btn').style.display = 'block';
			
			document.getElementById('pi_21_db_btn').style.display = 'block';
			document.getElementById('pi_21_b_btn').style.display = 'block';
			document.getElementById('pi_21_mb_btn').style.display = 'block';

			document.getElementById('pi_21_dp_btn').style.display = 'block';
			document.getElementById('pi_21_p_btn').style.display = 'block';
			document.getElementById('pi_21_mp_btn').style.display = 'block';
			
			if (bop_21_db == 1) {
				document.getElementById('bop_21_db_rectangle').style.display = 'block';
			}
			if (bop_21_b == 1) {
				document.getElementById('bop_21_b_rectangle').style.display = 'block';
			}
			if (bop_21_mb == 1) {
				document.getElementById('bop_21_mb_rectangle').style.display = 'block';
			}
			if (bop_21_dp == 1) {
				document.getElementById('bop_21_dp_rectangle').style.display = 'block';
			}
			if (bop_21_p == 1) {
				document.getElementById('bop_21_p_rectangle').style.display = 'block';
			}
			if (bop_21_mp == 1) {
				document.getElementById('bop_21_mp_rectangle').style.display = 'block';
			}
			
			if (pi_21_db == 1) {
				document.getElementById('pi_21_db_rectangle').style.display = 'block';
			}
			if (pi_21_b == 1) {
				document.getElementById('pi_21_b_rectangle').style.display = 'block';
			}
			if (pi_21_mb == 1) {
				document.getElementById('pi_21_mb_rectangle').style.display = 'block';
			}
			if (pi_21_dp == 1) {
				document.getElementById('pi_21_dp_rectangle').style.display = 'block';
			}
			if (pi_21_p == 1) {
				document.getElementById('pi_21_p_rectangle').style.display = 'block';
			}
			if (pi_21_mp == 1) {
				document.getElementById('pi_21_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_21();
	}

	function toggle_implant_21() {
		if (Implantat_21 == 0) {
			Implantat_21 = 1;
			
			document.getElementById('implantat_21_b_image').style.display = 'block';
			document.getElementById('implantat_21_p_image').style.display = 'block';
			document.getElementById('implantat_21_tab').style.display = 'block';
		}
		else {
			Implantat_21 = 0;
			
			document.getElementById('implantat_21_b_image').style.display = 'none';
			document.getElementById('implantat_21_p_image').style.display = 'none';
			document.getElementById('implantat_21_tab').style.display = 'none';
		}
	}

	function toggle_bop_21_db() {
		if (bop_21_db == 0) {
			bop_21_db = 1;
			document.getElementById('bop_21_db_rectangle').style.display = 'block';
		}
		else {
			bop_21_db = 0;
			document.getElementById('bop_21_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_21_b() {
		if (bop_21_b == 0) {
			bop_21_b = 1;
			document.getElementById('bop_21_b_rectangle').style.display = 'block';
		}
		else {
			bop_21_b = 0;
			document.getElementById('bop_21_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_21_mb() {
		if (bop_21_mb == 0) {
			bop_21_mb = 1;
			document.getElementById('bop_21_mb_rectangle').style.display = 'block';
		}
		else {
			bop_21_mb = 0;
			document.getElementById('bop_21_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_21_db() {
		if (pi_21_db == 0) {
			pi_21_db = 1;
			document.getElementById('pi_21_db_rectangle').style.display = 'block';
		}
		else {
			pi_21_db = 0;
			document.getElementById('pi_21_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_21_b() {
		if (pi_21_b == 0) {
			pi_21_b = 1;
			document.getElementById('pi_21_b_rectangle').style.display = 'block';
		}
		else {
			pi_21_b = 0;
			document.getElementById('pi_21_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_21_mb() {
		if (pi_21_mb == 0) {
			pi_21_mb = 1;
			document.getElementById('pi_21_mb_rectangle').style.display = 'block';
		}
		else {
			pi_21_mb = 0;
			document.getElementById('pi_21_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_21_dp() {
		if (bop_21_dp == 0) {
			bop_21_dp = 1;
			document.getElementById('bop_21_dp_rectangle').style.display = 'block';
		}
		else {
			bop_21_dp = 0;
			document.getElementById('bop_21_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_21_p() {
		if (bop_21_p == 0) {
			bop_21_p = 1;
			document.getElementById('bop_21_p_rectangle').style.display = 'block';
		}
		else {
			bop_21_p = 0;
			document.getElementById('bop_21_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_21_mp() {
		if (bop_21_mp == 0) {
			bop_21_mp = 1;
			document.getElementById('bop_21_mp_rectangle').style.display = 'block';
		}
		else {
			bop_21_mp = 0;
			document.getElementById('bop_21_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_21_dp() {
		if (pi_21_dp == 0) {
			pi_21_dp = 1;
			document.getElementById('pi_21_dp_rectangle').style.display = 'block';
		}
		else {
			pi_21_dp = 0;
			document.getElementById('pi_21_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_21_p() {
		if (pi_21_p == 0) {
			pi_21_p = 1;
			document.getElementById('pi_21_p_rectangle').style.display = 'block';
		}
		else {
			pi_21_p = 0;
			document.getElementById('pi_21_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_21_mp() {
		if (pi_21_mp == 0) {
			pi_21_mp = 1;
			document.getElementById('pi_21_mp_rectangle').style.display = 'block';
		}
		else {
			pi_21_mp = 0;
			document.getElementById('pi_21_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_21() {
		if (tooth_21 == 1) {
			
		// Variablen aus dem Formular
			pd_21_db = document.forms[0]["pd_21_db"].value;
			pd_21_b = document.forms[0]["pd_21_b"].value;
			pd_21_mb = document.forms[0]["pd_21_mb"].value;

			if (document.forms[0]["pd_21_dp"].value > 3) {document.forms[0]["pd_21_dp"].style.color = 'red';} else {document.forms[0]["pd_21_dp"].style.color = 'black'};
			if (document.forms[0]["pd_21_p"].value > 3) {document.forms[0]["pd_21_p"].style.color = 'red';} else {document.forms[0]["pd_21_p"].style.color = 'black'};
			if (document.forms[0]["pd_21_mp"].value > 3) {document.forms[0]["pd_21_mp"].style.color = 'red';} else {document.forms[0]["pd_21_mp"].style.color = 'black'};
			
			gm_21_db = document.forms[0]["gm_21_db"].value;
			gm_21_b = document.forms[0]["gm_21_b"].value;
			gm_21_mb = document.forms[0]["gm_21_mb"].value;
			
			pd_21_dp = document.forms[0]["pd_21_dp"].value;
			pd_21_p = document.forms[0]["pd_21_p"].value;
			pd_21_mp = document.forms[0]["pd_21_mp"].value;

			if (document.forms[0]["pd_21_db"].value > 3) {document.forms[0]["pd_21_db"].style.color = 'red';} else {document.forms[0]["pd_21_db"].style.color = 'black'};
			if (document.forms[0]["pd_21_b"].value > 3) {document.forms[0]["pd_21_b"].style.color = 'red';} else {document.forms[0]["pd_21_b"].style.color = 'black'};
			if (document.forms[0]["pd_21_mb"].value > 3) {document.forms[0]["pd_21_mb"].style.color = 'red';} else {document.forms[0]["pd_21_mb"].style.color = 'black'};
			
			gm_21_dp = document.forms[0]["gm_21_dp"].value;
			gm_21_p = document.forms[0]["gm_21_p"].value;
			gm_21_mp = document.forms[0]["gm_21_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 21 (bukkal) in der Bitmap
			var x_db_21 = 729;							// distal 21
			var x_mb_21 = 698;							// mesial 21
			var x_b_21 = (x_db_21 + x_mb_21)/2;			// bukkal 21
			
		// Set der horizontalen Koordinaten von Zahn 21 (palatinal) in der Bitmap
			var x_dp_21 = 731;							// distal 21
			var x_mp_21 = 700;							// mesial 21
			var x_p_21 = (x_dp_21 + x_mp_21)/2;			// palatinal 21
			
		// Set der vertikalen Koordinaten von Zahn 21 (bukkal) aus dem Formular
			var y_gm_21_db = gm_OK_b + 6.5 * gm_21_db;	// Margo Gingivae distobukkal 21
			var y_gm_21_b = gm_OK_b + 6.5 * gm_21_b;	// Margo Gingivae bukkal 21
			var y_gm_21_mb = gm_OK_b + 6.5 * gm_21_mb;	// Margo Gingivae mesiobukkal 21
			var y_pd_21_db = 6.5 * pd_21_db;			// Sondierungstiefe distobukkal 21
			var y_pd_21_b = 6.5 * pd_21_b;				// Sondierungstiefe bukkal 21
			var y_pd_21_mb = 6.5 * pd_21_mb;			// Sondierungstiefe mesiobukkal 21
			
		// Set der vertikalen Koordinaten von Zahn 21 (palatinal) aus dem Formular
			var y_gm_21_dp = gm_OK_p - 6.5 * gm_21_dp;	// Margo Gingivae distopalatinal 21
			var y_gm_21_p = gm_OK_p - 6.5 * gm_21_p;	// Margo Gingivae palatinal 21
			var y_gm_21_mp = gm_OK_p - 6.5 * gm_21_mp;	// Margo Gingivae mesiopalatinal 21
			var y_pd_21_dp = 6.5 * pd_21_dp;			// Sondierungstiefe distopalatinal 21
			var y_pd_21_p = 6.5 * pd_21_p;				// Sondierungstiefe palatinal 21
			var y_pd_21_mp = 6.5 * pd_21_mp;			// Sondierungstiefe mesiopalatinal 21
			
		// Berechnung des Attachmentniveaus 21 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_21_db = y_gm_21_db - y_pd_21_db;	// Attachmentniveau distobukkal 21
			var y_al_21_b = y_gm_21_b - y_pd_21_b;		// Attachmentniveau bukkal 21
			var y_al_21_mb = y_gm_21_mb - y_pd_21_mb;	// Attachmentniveau mesiobukkal 21
			
		// Berechnung des Attachmentniveaus 21 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_21_dp = y_gm_21_dp + y_pd_21_dp;	// Attachmentniveau distopalatinal 21
			var y_al_21_p = y_gm_21_p + y_pd_21_p;		// Attachmentniveau palatinal 21
			var y_al_21_mp = y_gm_21_mp + y_pd_21_mp;	// Attachmentniveau mesiopalatinal 21
			
		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[21].storeCoordinates(
				x_db_21, x_mb_21, x_dp_21, x_mp_21, x_b_21, x_p_21,
				y_gm_21_db, y_gm_21_b, y_gm_21_mb, y_pd_21_db, y_pd_21_b, y_pd_21_mb,
				y_gm_21_dp, y_gm_21_p, y_gm_21_mp, y_pd_21_dp, y_pd_21_p, y_pd_21_mp,
				y_al_21_db, y_al_21_b, y_al_21_mb, y_al_21_dp, y_al_21_p, y_al_21_mp
			);
		
		// Parodontaltasche 21 bukkal zeichnen
			var string = 
				x_db_21 + ", " + y_al_21_db + "  " + 
				x_b_21 + ", " + y_al_21_b + "  " + 
				x_mb_21 + ", " + y_al_21_mb + "  " + 
				x_mb_21 + ", " + y_gm_21_mb + "  " + 
				x_b_21 + ", " + y_gm_21_b + "  " + 
				x_db_21 + ", " + y_gm_21_db;
			document.getElementById("polygon_21_b").setAttribute("points", string);
		// Attachmentniveau 21 bukkal zeichnen
			var string = 
				x_db_21 + ", " + y_al_21_db + "  " + 
				x_b_21 + ", " + y_al_21_b + "  " + 
				x_mb_21 + ", " + y_al_21_mb;
			document.getElementById("polyline_al_21_b").setAttribute("points", string);
		// Margo Gingivae 21 bukkal zeichnen
			var string =
				x_db_21 + ", " + y_gm_21_db + "  " + 
				x_b_21 + ", " + y_gm_21_b + "  " + 
				x_mb_21 + ", " + y_gm_21_mb;
			document.getElementById("polyline_gm_21_b").setAttribute("points", string);

		// Parodontaltasche 21 palatinal zeichnen
			var string = 
				x_dp_21 + ", " + y_al_21_dp + "  " + 
				x_p_21 + ", " + y_al_21_p + "  " + 
				x_mp_21 + ", " + y_al_21_mp + "  " + 
				x_mp_21 + ", " + y_gm_21_mp + "  " + 
				x_p_21 + ", " + y_gm_21_p + "  " + 
				x_dp_21 + ", " + y_gm_21_dp;
			document.getElementById("polygon_21_p").setAttribute("points", string);
		// Attachmentniveau 21 palatinal zeichnen
			var string = 
				x_dp_21 + ", " + y_al_21_dp + "  " + 
				x_p_21 + ", " + y_al_21_p + "  " + 
				x_mp_21 + ", " + y_al_21_mp;
			document.getElementById("polyline_al_21_p").setAttribute("points", string);
		// Margo Gingivae 21 palatinal zeichnen
			var string =
				x_dp_21 + ", " + y_gm_21_dp + "  " + 
				x_p_21 + ", " + y_gm_21_p + "  " + 
				x_mp_21 + ", " + y_gm_21_mp;
			document.getElementById("polyline_gm_21_p").setAttribute("points", string);
		}
        if (tooth_22 == 1 && tooth_21 == 1) {

            pd_22_mb = document.forms[0]["pd_22_mb"].value;
			gm_22_mb = document.forms[0]["gm_22_mb"].value;
			
			pd_22_mp = document.forms[0]["pd_22_mp"].value;
			gm_22_mp = document.forms[0]["gm_22_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 22 (bukkal) in der Bitmap
			var x_mb_22 = 746;							// mesial 22
			
		// Set der horizontalen Koordinaten von Zahn 22 (palatinal) in der Bitmap
			var x_mp_22 = 746;							// mesial 22
			
		// Set der vertikalen Koordinaten von Zahn 22 (bukkal) aus dem Formular
			var y_gm_22_mb = gm_OK_b + 6.5 * gm_22_mb;	// Margo Gingivae mesiobukkal 22
			var y_pd_22_mb = 6.5 * pd_22_mb;			// Sondierungstiefe mesiobukkal 22
			
		// Set der vertikalen Koordinaten von Zahn 22 (palatinal) aus dem Formular
			var y_gm_22_mp = gm_OK_p - 6.5 * gm_22_mp;	// Margo Gingivae mesiopalatinal 22
			var y_pd_22_mp = 6.5 * pd_22_mp;			// Sondierungstiefe mesiopalatinal 22
			
		// Berechnung des Attachmentniveaus 22 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_22_mb = y_gm_22_mb - y_pd_22_mb;	// Attachmentniveau mesiobukkal 22
			
		// Berechnung des Attachmentniveaus 22 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_22_mp = y_gm_22_mp + y_pd_22_mp;	// Attachmentniveau mesiopalatinal 22

		// Parodontaltasche inter_22_21 bukkal zeichnen
			var string = 
				x_mb_22 + ", " + y_al_22_mb + "  " + 
				x_db_21 + ", " + y_al_21_db + "  " + 
				x_db_21 + ", " + y_gm_21_db + "  " + 
				x_mb_22 + ", " + y_gm_22_mb;
			document.getElementById("polygon_inter_22_21_b").setAttribute("points", string);
		// Attachmentniveau inter_22_21 bukkal zeichnen
			var string = 
				x_mb_22 + ", " + y_al_22_mb + "  " + 
				x_db_21 + ", " + y_al_21_db;
			document.getElementById("polyline_al_inter_22_21_b").setAttribute("points", string);
		// Margo Gingivae inter_22_21 bukkal zeichnen
			var string =
				x_mb_22 + ", " + y_gm_22_mb + "  " + 
				x_db_21 + ", " + y_gm_21_db;
			document.getElementById("polyline_gm_inter_22_21_b").setAttribute("points", string);

        // Parodontaltasche inter_22_21 palatinal zeichnen
			var string = 
				x_mp_22 + ", " + y_al_22_mp + "  " + 
				x_dp_21 + ", " + y_al_21_dp + "  " + 
				x_dp_21 + ", " + y_gm_21_dp + "  " + 
				x_mp_22 + ", " + y_gm_22_mp;
			document.getElementById("polygon_inter_22_21_p").setAttribute("points", string);
		// Attachmentniveau inter_22_21 palatinal zeichnen
			var string = 
				x_mp_22 + ", " + y_al_22_mp + "  " + 
				x_dp_21 + ", " + y_al_21_dp;
			document.getElementById("polyline_al_inter_22_21_p").setAttribute("points", string);
		// Margo Gingivae inter_22_21 palatinal zeichnen
			var string =
				x_mp_22 + ", " + y_gm_22_mp + "  " + 
				x_dp_21 + ", " + y_gm_21_dp;
			document.getElementById("polyline_gm_inter_22_21_p").setAttribute("points", string);
		}
	}