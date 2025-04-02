	// Definition der Variablen für das Formular
		var tooth_31 = 1;
		var Implantat_31 = 0;
		var bop_31_db = 0;
		var bop_31_b = 0;
		var bop_31_mb = 0;
		var pi_31_db = 0;
		var pi_31_b = 0;
		var pi_31_mb = 0;
		var bop_31_dl = 0;
		var bop_31_l = 0;
		var bop_31_ml = 0;
		var pi_31_dl = 0;
		var pi_31_l = 0;
		var pi_31_ml = 0;
		var gm_31_db = 0;
		var gm_31_b = 0;
		var gm_31_mb = 0;
		var pd_31_db = 0;
		var pd_31_b = 0;
		var pd_31_mb = 0;
		var gm_31_dl = 0;
		var gm_31_l = 0;
		var gm_31_ml = 0;
		var pd_31_dl = 0;
		var pd_31_l = 0;
		var pd_31_ml = 0;

	function clear_data_31() {
        if (tooth_31 == 1) {
			gm_31_db = 0;
			gm_31_b = 0;
			gm_31_mb = 0;
			pd_31_db = 0;
			pd_31_b = 0;
			pd_31_mb = 0;
	
				document.getElementById('gm_31_db_txt').value = 0;
				document.getElementById('gm_31_b_txt').value = 0;
				document.getElementById('gm_31_mb_txt').value = 0;
				
				document.getElementById('pd_31_db_txt').value = 0;
				document.getElementById('pd_31_b_txt').value = 0;
				document.getElementById('pd_31_mb_txt').value = 0;
			
				document.forms[0]["pd_31_db"].style.color = 'black'
				document.forms[0]["pd_31_b"].style.color = 'black'
				document.forms[0]["pd_31_mb"].style.color = 'black'
			
			gm_31_dl = 0;
			gm_31_l = 0;
			gm_31_ml = 0;
			pd_31_dl = 0;
			pd_31_l = 0;
			pd_31_ml = 0;

				document.getElementById('gm_31_dl_txt').value = 0;
				document.getElementById('gm_31_l_txt').value = 0;
				document.getElementById('gm_31_ml_txt').value = 0;
				
				document.getElementById('pd_31_dl_txt').value = 0;
				document.getElementById('pd_31_l_txt').value = 0;
				document.getElementById('pd_31_ml_txt').value = 0;

				document.forms[0]["pd_31_dl"].style.color = 'black'
				document.forms[0]["pd_31_l"].style.color = 'black'
				document.forms[0]["pd_31_ml"].style.color = 'black'
			
			change_probing_31();
			
			mobility_31 = 0;

				document.getElementById('mobility_31_txt').value = "0";

			note_31 = "";

				document.getElementById('note_31_txt').value = "";
	
			bop_31_db = 0;
			bop_31_b = 0;
			bop_31_mb = 0;
					
			bop_31_dl = 0;
			bop_31_l = 0;
			bop_31_ml = 0;
					
				document.getElementById('bop_31_db_rectangle').style.display = 'none';
				document.getElementById('bop_31_b_rectangle').style.display = 'none';
				document.getElementById('bop_31_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_31_dl_rectangle').style.display = 'none';
				document.getElementById('bop_31_l_rectangle').style.display = 'none';
				document.getElementById('bop_31_ml_rectangle').style.display = 'none';
				
			pi_31_db = 0;
			pi_31_b = 0;
			pi_31_mb = 0;
					
			pi_31_dl = 0;
			pi_31_l = 0;
			pi_31_ml = 0;

				document.getElementById('pi_31_db_rectangle').style.display = 'none';
				document.getElementById('pi_31_b_rectangle').style.display = 'none';
				document.getElementById('pi_31_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_31_dl_rectangle').style.display = 'none';
				document.getElementById('pi_31_l_rectangle').style.display = 'none';
				document.getElementById('pi_31_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_31() {
		if (tooth_31 === 1) {
			tooth_31 = 0;
			document.getElementById('tooth_line_31_b').style.display = 'block';
			document.getElementById('tooth_line_31_l').style.display = 'block';
			
			document.getElementById('mobility_31_txt').style.display = 'none';
			
			document.getElementById('implantat_31_btn').style.display = 'none';
			document.getElementById('implantat_31_tab').style.display = 'none';
			document.getElementById('implantat_31_b_image').style.display = 'none';
			document.getElementById('implantat_31_l_image').style.display = 'none';
			
			document.getElementById('gm_31_db_txt').style.display = 'none';
			document.getElementById('gm_31_b_txt').style.display = 'none';
			document.getElementById('gm_31_mb_txt').style.display = 'none';
			
			document.getElementById('pd_31_db_txt').style.display = 'none';
			document.getElementById('pd_31_b_txt').style.display = 'none';
			document.getElementById('pd_31_mb_txt').style.display = 'none';
			
			document.getElementById('gm_31_dl_txt').style.display = 'none';
			document.getElementById('gm_31_l_txt').style.display = 'none';
			document.getElementById('gm_31_ml_txt').style.display = 'none';
			
			document.getElementById('pd_31_dl_txt').style.display = 'none';
			document.getElementById('pd_31_l_txt').style.display = 'none';
			document.getElementById('pd_31_ml_txt').style.display = 'none';
			
			document.getElementById('bop_31_db_rectangle').style.display = 'none';
			document.getElementById('bop_31_b_rectangle').style.display = 'none';
			document.getElementById('bop_31_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_31_dl_rectangle').style.display = 'none';
			document.getElementById('bop_31_l_rectangle').style.display = 'none';
			document.getElementById('bop_31_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_31_db_btn').style.display = 'none';
			document.getElementById('bop_31_b_btn').style.display = 'none';
			document.getElementById('bop_31_mb_btn').style.display = 'none';
			
			document.getElementById('bop_31_dl_btn').style.display = 'none';
			document.getElementById('bop_31_l_btn').style.display = 'none';
			document.getElementById('bop_31_ml_btn').style.display = 'none';
			
			document.getElementById('pi_31_db_rectangle').style.display = 'none';
			document.getElementById('pi_31_b_rectangle').style.display = 'none';
			document.getElementById('pi_31_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_31_dl_rectangle').style.display = 'none';
			document.getElementById('pi_31_l_rectangle').style.display = 'none';
			document.getElementById('pi_31_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_31_db_btn').style.display = 'none';
			document.getElementById('pi_31_b_btn').style.display = 'none';
			document.getElementById('pi_31_mb_btn').style.display = 'none';
			
			document.getElementById('pi_31_dl_btn').style.display = 'none';
			document.getElementById('pi_31_l_btn').style.display = 'none';
			document.getElementById('pi_31_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_31_b').style.display = 'none';
			document.getElementById('polyline_al_31_b').style.display = 'none';
			document.getElementById('polyline_gm_31_b').style.display = 'none';
			
			document.getElementById('polygon_31_l').style.display = 'none';
			document.getElementById('polyline_al_31_l').style.display = 'none';
			document.getElementById('polyline_gm_31_l').style.display = 'none';
			
			document.getElementById('polygon_inter_32_31_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_32_31_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_32_31_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_32_31_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_32_31_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_32_31_l').style.display = 'none';
            
            document.getElementById('note_31_txt').style.display = 'none';
		}
		else if (Implantat_31 !== 1) {
			tooth_31 = 1;
			document.getElementById('tooth_line_31_b').style.display = 'none';
			document.getElementById('tooth_line_31_l').style.display = 'none';

			document.getElementById('mobility_31_txt').style.display = 'block';

			document.getElementById('implantat_31_btn').style.display = 'block';

			document.getElementById('gm_31_db_txt').style.display = 'block';
			document.getElementById('gm_31_b_txt').style.display = 'block';
			document.getElementById('gm_31_mb_txt').style.display = 'block';
			
			document.getElementById('pd_31_db_txt').style.display = 'block';
			document.getElementById('pd_31_b_txt').style.display = 'block';
			document.getElementById('pd_31_mb_txt').style.display = 'block';
			
			document.getElementById('gm_31_dl_txt').style.display = 'block';
			document.getElementById('gm_31_l_txt').style.display = 'block';
			document.getElementById('gm_31_ml_txt').style.display = 'block';
			
			document.getElementById('pd_31_dl_txt').style.display = 'block';
			document.getElementById('pd_31_l_txt').style.display = 'block';
			document.getElementById('pd_31_ml_txt').style.display = 'block';
			
			document.getElementById('note_31_txt').style.display = 'block';

			document.getElementById('polygon_31_b').style.display = 'block';
			document.getElementById('polyline_al_31_b').style.display = 'block';
			document.getElementById('polyline_gm_31_b').style.display = 'block';
			
			document.getElementById('polygon_31_l').style.display = 'block';
			document.getElementById('polyline_al_31_l').style.display = 'block';
			document.getElementById('polyline_gm_31_l').style.display = 'block';

            if (tooth_32 == 1 && tooth_31 == 1) {
				document.getElementById('polygon_inter_32_31_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_32_31_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_32_31_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_32_31_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_32_31_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_32_31_l').style.display = 'block';            
            }

			document.getElementById('bop_31_db_btn').style.display = 'block';
			document.getElementById('bop_31_b_btn').style.display = 'block';
			document.getElementById('bop_31_mb_btn').style.display = 'block';

			document.getElementById('bop_31_dl_btn').style.display = 'block';
			document.getElementById('bop_31_l_btn').style.display = 'block';
			document.getElementById('bop_31_ml_btn').style.display = 'block';
			
			if (bop_31_db == 1) {
				document.getElementById('bop_31_db_rectangle').style.display = 'block';
			}
			if (bop_31_b == 1) {
				document.getElementById('bop_31_b_rectangle').style.display = 'block';
			}
			if (bop_31_mb == 1) {
				document.getElementById('bop_31_mb_rectangle').style.display = 'block';
			}
			if (bop_31_dl == 1) {
				document.getElementById('bop_31_dl_rectangle').style.display = 'block';
			}
			if (bop_31_l == 1) {
				document.getElementById('bop_31_l_rectangle').style.display = 'block';
			}
			if (bop_31_ml == 1) {
				document.getElementById('bop_31_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_31_db_btn').style.display = 'block';
			document.getElementById('pi_31_b_btn').style.display = 'block';
			document.getElementById('pi_31_mb_btn').style.display = 'block';

			document.getElementById('pi_31_dl_btn').style.display = 'block';
			document.getElementById('pi_31_l_btn').style.display = 'block';
			document.getElementById('pi_31_ml_btn').style.display = 'block';
			
			if (pi_31_db == 1) {
				document.getElementById('pi_31_db_rectangle').style.display = 'block';
			}
			if (pi_31_b == 1) {
				document.getElementById('pi_31_b_rectangle').style.display = 'block';
			}
			if (pi_31_mb == 1) {
				document.getElementById('pi_31_mb_rectangle').style.display = 'block';
			}
			if (pi_31_dl == 1) {
				document.getElementById('pi_31_dl_rectangle').style.display = 'block';
			}
			if (pi_31_l == 1) {
				document.getElementById('pi_31_l_rectangle').style.display = 'block';
			}
			if (pi_31_ml == 1) {
				document.getElementById('pi_31_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_31 == 1) {
			tooth_31 = 1;
			document.getElementById('tooth_line_31_b').style.display = 'none';
			document.getElementById('tooth_line_31_l').style.display = 'none';

			document.getElementById('mobility_31_txt').style.display = 'block';
			
			document.getElementById('note_31_txt').style.display = 'block';

			document.getElementById('implantat_31_btn').style.display = 'block';
			document.getElementById('implantat_31_tab').style.display = 'block';
			document.getElementById('implantat_31_b_image').style.display = 'block';
			document.getElementById('implantat_31_l_image').style.display = 'block';

			document.getElementById('gm_31_db_txt').style.display = 'block';
			document.getElementById('gm_31_b_txt').style.display = 'block';
			document.getElementById('gm_31_mb_txt').style.display = 'block';
			
			document.getElementById('pd_31_db_txt').style.display = 'block';
			document.getElementById('pd_31_b_txt').style.display = 'block';
			document.getElementById('pd_31_mb_txt').style.display = 'block';
			
			document.getElementById('gm_31_dl_txt').style.display = 'block';
			document.getElementById('gm_31_l_txt').style.display = 'block';
			document.getElementById('gm_31_ml_txt').style.display = 'block';
			
			document.getElementById('pd_31_dl_txt').style.display = 'block';
			document.getElementById('pd_31_l_txt').style.display = 'block';
			document.getElementById('pd_31_ml_txt').style.display = 'block';

			document.getElementById('polygon_31_b').style.display = 'block';
			document.getElementById('polyline_al_31_b').style.display = 'block';
			document.getElementById('polyline_gm_31_b').style.display = 'block';
			
			document.getElementById('polygon_31_l').style.display = 'block';
			document.getElementById('polyline_al_31_l').style.display = 'block';
			document.getElementById('polyline_gm_31_l').style.display = 'block';

            if (tooth_32 == 1 && tooth_31 == 1) {
				document.getElementById('polygon_inter_32_31_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_32_31_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_32_31_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_32_31_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_32_31_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_32_31_l').style.display = 'block';            
            }

			document.getElementById('bop_31_db_btn').style.display = 'block';
			document.getElementById('bop_31_b_btn').style.display = 'block';
			document.getElementById('bop_31_mb_btn').style.display = 'block';

			document.getElementById('bop_31_dl_btn').style.display = 'block';
			document.getElementById('bop_31_l_btn').style.display = 'block';
			document.getElementById('bop_31_ml_btn').style.display = 'block';
			
			document.getElementById('pi_31_db_btn').style.display = 'block';
			document.getElementById('pi_31_b_btn').style.display = 'block';
			document.getElementById('pi_31_mb_btn').style.display = 'block';

			document.getElementById('pi_31_dl_btn').style.display = 'block';
			document.getElementById('pi_31_l_btn').style.display = 'block';
			document.getElementById('pi_31_ml_btn').style.display = 'block';
			
			if (bop_31_db == 1) {
				document.getElementById('bop_31_db_rectangle').style.display = 'block';
			}
			if (bop_31_b == 1) {
				document.getElementById('bop_31_b_rectangle').style.display = 'block';
			}
			if (bop_31_mb == 1) {
				document.getElementById('bop_31_mb_rectangle').style.display = 'block';
			}
			if (bop_31_dl == 1) {
				document.getElementById('bop_31_dl_rectangle').style.display = 'block';
			}
			if (bop_31_l == 1) {
				document.getElementById('bop_31_l_rectangle').style.display = 'block';
			}
			if (bop_31_ml == 1) {
				document.getElementById('bop_31_ml_rectangle').style.display = 'block';
			}
			
			if (pi_31_db == 1) {
				document.getElementById('pi_31_db_rectangle').style.display = 'block';
			}
			if (pi_31_b == 1) {
				document.getElementById('pi_31_b_rectangle').style.display = 'block';
			}
			if (pi_31_mb == 1) {
				document.getElementById('pi_31_mb_rectangle').style.display = 'block';
			}
			if (pi_31_dl == 1) {
				document.getElementById('pi_31_dl_rectangle').style.display = 'block';
			}
			if (pi_31_l == 1) {
				document.getElementById('pi_31_l_rectangle').style.display = 'block';
			}
			if (pi_31_ml == 1) {
				document.getElementById('pi_31_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_31();
	}

	function toggle_implant_31() {
		if (Implantat_31 == 0) {
			Implantat_31 = 1;
			
			document.getElementById('implantat_31_b_image').style.display = 'block';
			document.getElementById('implantat_31_l_image').style.display = 'block';
			document.getElementById('implantat_31_tab').style.display = 'block';
		}
		else {
			Implantat_31 = 0;
			
			document.getElementById('implantat_31_b_image').style.display = 'none';
			document.getElementById('implantat_31_l_image').style.display = 'none';
			document.getElementById('implantat_31_tab').style.display = 'none';
		}
	}

	function toggle_bop_31_db() {
		if (bop_31_db == 0) {
			bop_31_db = 1;
			document.getElementById('bop_31_db_rectangle').style.display = 'block';
		}
		else {
			bop_31_db = 0;
			document.getElementById('bop_31_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_31_b() {
		if (bop_31_b == 0) {
			bop_31_b = 1;
			document.getElementById('bop_31_b_rectangle').style.display = 'block';
		}
		else {
			bop_31_b = 0;
			document.getElementById('bop_31_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_31_mb() {
		if (bop_31_mb == 0) {
			bop_31_mb = 1;
			document.getElementById('bop_31_mb_rectangle').style.display = 'block';
		}
		else {
			bop_31_mb = 0;
			document.getElementById('bop_31_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_31_db() {
		if (pi_31_db == 0) {
			pi_31_db = 1;
			document.getElementById('pi_31_db_rectangle').style.display = 'block';
		}
		else {
			pi_31_db = 0;
			document.getElementById('pi_31_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_31_b() {
		if (pi_31_b == 0) {
			pi_31_b = 1;
			document.getElementById('pi_31_b_rectangle').style.display = 'block';
		}
		else {
			pi_31_b = 0;
			document.getElementById('pi_31_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_31_mb() {
		if (pi_31_mb == 0) {
			pi_31_mb = 1;
			document.getElementById('pi_31_mb_rectangle').style.display = 'block';
		}
		else {
			pi_31_mb = 0;
			document.getElementById('pi_31_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_31_dl() {
		if (bop_31_dl == 0) {
			bop_31_dl = 1;
			document.getElementById('bop_31_dl_rectangle').style.display = 'block';
		}
		else {
			bop_31_dl = 0;
			document.getElementById('bop_31_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_31_l() {
		if (bop_31_l == 0) {
			bop_31_l = 1;
			document.getElementById('bop_31_l_rectangle').style.display = 'block';
		}
		else {
			bop_31_l = 0;
			document.getElementById('bop_31_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_31_ml() {
		if (bop_31_ml == 0) {
			bop_31_ml = 1;
			document.getElementById('bop_31_ml_rectangle').style.display = 'block';
		}
		else {
			bop_31_ml = 0;
			document.getElementById('bop_31_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_31_dl() {
		if (pi_31_dl == 0) {
			pi_31_dl = 1;
			document.getElementById('pi_31_dl_rectangle').style.display = 'block';
		}
		else {
			pi_31_dl = 0;
			document.getElementById('pi_31_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_31_l() {
		if (pi_31_l == 0) {
			pi_31_l = 1;
			document.getElementById('pi_31_l_rectangle').style.display = 'block';
		}
		else {
			pi_31_l = 0;
			document.getElementById('pi_31_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_31_ml() {
		if (pi_31_ml == 0) {
			pi_31_ml = 1;
			document.getElementById('pi_31_ml_rectangle').style.display = 'block';
		}
		else {
			pi_31_ml = 0;
			document.getElementById('pi_31_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_31() {
		if (tooth_31 == 1) {
			
		// Variablen aus dem Formular
			pd_31_db = document.forms[0]["pd_31_db"].value;
			pd_31_b = document.forms[0]["pd_31_b"].value;
			pd_31_mb = document.forms[0]["pd_31_mb"].value;

			if (document.forms[0]["pd_31_dl"].value > 3) {document.forms[0]["pd_31_dl"].style.color = 'red';} else {document.forms[0]["pd_31_dl"].style.color = 'black'};
			if (document.forms[0]["pd_31_l"].value > 3) {document.forms[0]["pd_31_l"].style.color = 'red';} else {document.forms[0]["pd_31_l"].style.color = 'black'};
			if (document.forms[0]["pd_31_ml"].value > 3) {document.forms[0]["pd_31_ml"].style.color = 'red';} else {document.forms[0]["pd_31_ml"].style.color = 'black'};
			
			gm_31_db = document.forms[0]["gm_31_db"].value;
			gm_31_b = document.forms[0]["gm_31_b"].value;
			gm_31_mb = document.forms[0]["gm_31_mb"].value;
			
			pd_31_dl = document.forms[0]["pd_31_dl"].value;
			pd_31_l = document.forms[0]["pd_31_l"].value;
			pd_31_ml = document.forms[0]["pd_31_ml"].value;

			if (document.forms[0]["pd_31_db"].value > 3) {document.forms[0]["pd_31_db"].style.color = 'red';} else {document.forms[0]["pd_31_db"].style.color = 'black'};
			if (document.forms[0]["pd_31_b"].value > 3) {document.forms[0]["pd_31_b"].style.color = 'red';} else {document.forms[0]["pd_31_b"].style.color = 'black'};
			if (document.forms[0]["pd_31_mb"].value > 3) {document.forms[0]["pd_31_mb"].style.color = 'red';} else {document.forms[0]["pd_31_mb"].style.color = 'black'};
			
			gm_31_dl = document.forms[0]["gm_31_dl"].value;
			gm_31_l = document.forms[0]["gm_31_l"].value;
			gm_31_ml = document.forms[0]["gm_31_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 31 (bukkal) in der Bitmap
			var x_db_31 = 714;							// distal 31
			var x_mb_31 = 695;							// mesial 31
			var x_b_31 = (x_db_31 + x_mb_31)/2;			// bukkal 31
			
		// Set der horizontalen Koordinaten von Zahn 31 (lingual) in der Bitmap
			var x_dl_31 = 715;							// distal 31
			var x_ml_31 = 698;							// mesial 31
			var x_l_31 = (x_dl_31 + x_ml_31)/2;			// lingual 31
			
		// Set der vertikalen Koordinaten von Zahn 31 (bukkal) aus dem Formular
			var y_gm_31_db = gm_UK_b - 6.05 * gm_31_db;	// Margo Gingivae distobukkal 31
			var y_gm_31_b = gm_UK_b - 6.05 * gm_31_b;	// Margo Gingivae bukkal 31
			var y_gm_31_mb = gm_UK_b - 6.05 * gm_31_mb;	// Margo Gingivae mesiobukkal 31
			var y_pd_31_db = 6.05 * pd_31_db;			// Sondierungstiefe distobukkal 31
			var y_pd_31_b = 6.05 * pd_31_b;				// Sondierungstiefe bukkal 31
			var y_pd_31_mb = 6.05 * pd_31_mb;			// Sondierungstiefe mesiobukkal 31
			
		// Set der vertikalen Koordinaten von Zahn 31 (lingual) aus dem Formular
			var y_gm_31_dl = gm_UK_l + 6.05 * gm_31_dl;	// Margo Gingivae distolingual 31
			var y_gm_31_l = gm_UK_l + 6.05 * gm_31_l;	// Margo Gingivae lingual 31
			var y_gm_31_ml = gm_UK_l + 6.05 * gm_31_ml;	// Margo Gingivae mesiolingual 31
			var y_pd_31_dl = 6.05 * pd_31_dl;			// Sondierungstiefe distolingual 31
			var y_pd_31_l = 6.05 * pd_31_l;				// Sondierungstiefe lingual 31
			var y_pd_31_ml = 6.05 * pd_31_ml;			// Sondierungstiefe mesiolingual 31
			
		// Berechnung des Attachmentniveaus 31 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_31_db = y_gm_31_db + y_pd_31_db;	// Attachmentniveau distobukkal 31
			var y_al_31_b = y_gm_31_b + y_pd_31_b;		// Attachmentniveau bukkal 31
			var y_al_31_mb = y_gm_31_mb + y_pd_31_mb;	// Attachmentniveau mesiobukkal 31
			
		// Berechnung des Attachmentniveaus 31 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_31_dl = y_gm_31_dl - y_pd_31_dl;	// Attachmentniveau distolingual 31
			var y_al_31_l = y_gm_31_l - y_pd_31_l;		// Attachmentniveau lingual 31
			var y_al_31_ml = y_gm_31_ml - y_pd_31_ml;	// Attachmentniveau mesiolingual 31

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[31].storeCoordinates(
				x_db_31, x_mb_31, x_dl_31, x_ml_31, x_b_31, x_l_31,
				y_gm_31_db, y_gm_31_b, y_gm_31_mb, y_pd_31_db, y_pd_31_b, y_pd_31_mb,
				y_gm_31_dl, y_gm_31_l, y_gm_31_ml, y_pd_31_dl, y_pd_31_l, y_pd_31_ml,
				y_al_31_db, y_al_31_b, y_al_31_mb, y_al_31_dl, y_al_31_l, y_al_31_ml
			);
		
		// Parodontaltasche 31 bukkal zeichnen
			var string = 
				x_db_31 + ", " + y_al_31_db + "  " + 
				x_b_31 + ", " + y_al_31_b + "  " + 
				x_mb_31 + ", " + y_al_31_mb + "  " + 
				x_mb_31 + ", " + y_gm_31_mb + "  " + 
				x_b_31 + ", " + y_gm_31_b + "  " + 
				x_db_31 + ", " + y_gm_31_db;
			document.getElementById("polygon_31_b").setAttribute("points", string);
		// Attachmentniveau 31 bukkal zeichnen
			var string = 
				x_db_31 + ", " + y_al_31_db + "  " + 
				x_b_31 + ", " + y_al_31_b + "  " + 
				x_mb_31 + ", " + y_al_31_mb;
			document.getElementById("polyline_al_31_b").setAttribute("points", string);
		// Margo Gingivae 31 bukkal zeichnen
			var string =
				x_db_31 + ", " + y_gm_31_db + "  " + 
				x_b_31 + ", " + y_gm_31_b + "  " + 
				x_mb_31 + ", " + y_gm_31_mb;
			document.getElementById("polyline_gm_31_b").setAttribute("points", string);

		// Parodontaltasche 31 lingual zeichnen
			var string = 
				x_dl_31 + ", " + y_al_31_dl + "  " + 
				x_l_31 + ", " + y_al_31_l + "  " + 
				x_ml_31 + ", " + y_al_31_ml + "  " + 
				x_ml_31 + ", " + y_gm_31_ml + "  " + 
				x_l_31 + ", " + y_gm_31_l + "  " + 
				x_dl_31 + ", " + y_gm_31_dl;
			document.getElementById("polygon_31_l").setAttribute("points", string);
		// Attachmentniveau 31 lingual zeichnen
			var string = 
				x_dl_31 + ", " + y_al_31_dl + "  " + 
				x_l_31 + ", " + y_al_31_l + "  " + 
				x_ml_31 + ", " + y_al_31_ml;
			document.getElementById("polyline_al_31_l").setAttribute("points", string);
		// Margo Gingivae 31 lingual zeichnen
			var string =
				x_dl_31 + ", " + y_gm_31_dl + "  " + 
				x_l_31 + ", " + y_gm_31_l + "  " + 
				x_ml_31 + ", " + y_gm_31_ml;
			document.getElementById("polyline_gm_31_l").setAttribute("points", string);
		}
        if (tooth_32 == 1 && tooth_31 == 1) {

            pd_32_mb = document.forms[0]["pd_32_mb"].value;
			gm_32_mb = document.forms[0]["gm_32_mb"].value;
			
			pd_32_ml = document.forms[0]["pd_32_ml"].value;
			gm_32_ml = document.forms[0]["gm_32_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 32 (bukkal) in der Bitmap
			var x_mb_32 = 728;							// mesial 32
			
		// Set der horizontalen Koordinaten von Zahn 32 (lingual) in der Bitmap
			var x_ml_32 = 733;							// mesial 32
			
		// Set der vertikalen Koordinaten von Zahn 32 (bukkal) aus dem Formular
			var y_gm_32_mb = gm_UK_b - 6.05 * gm_32_mb;	// Margo Gingivae mesiobukkal 32
			var y_pd_32_mb = 6.05 * pd_32_mb;			// Sondierungstiefe mesiobukkal 32
			
		// Set der vertikalen Koordinaten von Zahn 32 (lingual) aus dem Formular
			var y_gm_32_ml = gm_UK_l + 6.05 * gm_32_ml;	// Margo Gingivae mesiolingual 32
			var y_pd_32_ml = 6.05 * pd_32_ml;			// Sondierungstiefe mesiolingual 32
			
		// Berechnung des Attachmentniveaus 32 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_32_mb = y_gm_32_mb + y_pd_32_mb;	// Attachmentniveau mesiobukkal 32
			
		// Berechnung des Attachmentniveaus 32 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_32_ml = y_gm_32_ml - y_pd_32_ml;	// Attachmentniveau mesiolingual 32

		// Parodontaltasche inter_32_31 bukkal zeichnen
			var string = 
				x_mb_32 + ", " + y_al_32_mb + "  " + 
				x_db_31 + ", " + y_al_31_db + "  " + 
				x_db_31 + ", " + y_gm_31_db + "  " + 
				x_mb_32 + ", " + y_gm_32_mb;
			document.getElementById("polygon_inter_32_31_b").setAttribute("points", string);
		// Attachmentniveau inter_32_31 bukkal zeichnen
			var string = 
				x_mb_32 + ", " + y_al_32_mb + "  " + 
				x_db_31 + ", " + y_al_31_db;
			document.getElementById("polyline_al_inter_32_31_b").setAttribute("points", string);
		// Margo Gingivae inter_32_31 bukkal zeichnen
			var string =
				x_mb_32 + ", " + y_gm_32_mb + "  " + 
				x_db_31 + ", " + y_gm_31_db;
			document.getElementById("polyline_gm_inter_32_31_b").setAttribute("points", string);

        // Parodontaltasche inter_32_31 lingual zeichnen
			var string = 
				x_ml_32 + ", " + y_al_32_ml + "  " + 
				x_dl_31 + ", " + y_al_31_dl + "  " + 
				x_dl_31 + ", " + y_gm_31_dl + "  " + 
				x_ml_32 + ", " + y_gm_32_ml;
			document.getElementById("polygon_inter_32_31_l").setAttribute("points", string);
		// Attachmentniveau inter_32_31 lingual zeichnen
			var string = 
				x_ml_32 + ", " + y_al_32_ml + "  " + 
				x_dl_31 + ", " + y_al_31_dl;
			document.getElementById("polyline_al_inter_32_31_l").setAttribute("points", string);
		// Margo Gingivae inter_32_31 lingual zeichnen
			var string =
				x_ml_32 + ", " + y_gm_32_ml + "  " + 
				x_dl_31 + ", " + y_gm_31_dl;
			document.getElementById("polyline_gm_inter_32_31_l").setAttribute("points", string);
		}
	}