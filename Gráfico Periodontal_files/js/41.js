	// Definition der Variablen für das Formular
		var tooth_41 = 1;
		var Implantat_41 = 0;
		var bop_41_db = 0;
		var bop_41_b = 0;
		var bop_41_mb = 0;
		var pi_41_db = 0;
		var pi_41_b = 0;
		var pi_41_mb = 0;
		var bop_41_dl = 0;
		var bop_41_l = 0;
		var bop_41_ml = 0;
		var pi_41_dl = 0;
		var pi_41_l = 0;
		var pi_41_ml = 0;
		var gm_41_db = 0;
		var gm_41_b = 0;
		var gm_41_mb = 0;
		var pd_41_db = 0;
		var pd_41_b = 0;
		var pd_41_mb = 0;
		var gm_41_dl = 0;
		var gm_41_l = 0;
		var gm_41_ml = 0;
		var pd_41_dl = 0;
		var pd_41_l = 0;
		var pd_41_ml = 0;

	function clear_data_41() {
        if (tooth_41 == 1) {
			gm_41_db = 0;
			gm_41_b = 0;
			gm_41_mb = 0;
			pd_41_db = 0;
			pd_41_b = 0;
			pd_41_mb = 0;
	
				document.getElementById('gm_41_db_txt').value = 0;
				document.getElementById('gm_41_b_txt').value = 0;
				document.getElementById('gm_41_mb_txt').value = 0;
				
				document.getElementById('pd_41_db_txt').value = 0;
				document.getElementById('pd_41_b_txt').value = 0;
				document.getElementById('pd_41_mb_txt').value = 0;
			
				document.forms[0]["pd_41_db"].style.color = 'black'
				document.forms[0]["pd_41_b"].style.color = 'black'
				document.forms[0]["pd_41_mb"].style.color = 'black'
			
			gm_41_dl = 0;
			gm_41_l = 0;
			gm_41_ml = 0;
			pd_41_dl = 0;
			pd_41_l = 0;
			pd_41_ml = 0;

				document.getElementById('gm_41_dl_txt').value = 0;
				document.getElementById('gm_41_l_txt').value = 0;
				document.getElementById('gm_41_ml_txt').value = 0;
				
				document.getElementById('pd_41_dl_txt').value = 0;
				document.getElementById('pd_41_l_txt').value = 0;
				document.getElementById('pd_41_ml_txt').value = 0;

				document.forms[0]["pd_41_dl"].style.color = 'black'
				document.forms[0]["pd_41_l"].style.color = 'black'
				document.forms[0]["pd_41_ml"].style.color = 'black'
			
			change_probing_41();
			
			mobility_41 = 0;

				document.getElementById('mobility_41_txt').value = "0";

			note_41 = "";

				document.getElementById('note_41_txt').value = "";
	
			bop_41_db = 0;
			bop_41_b = 0;
			bop_41_mb = 0;
					
			bop_41_dl = 0;
			bop_41_l = 0;
			bop_41_ml = 0;
					
				document.getElementById('bop_41_db_rectangle').style.display = 'none';
				document.getElementById('bop_41_b_rectangle').style.display = 'none';
				document.getElementById('bop_41_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_41_dl_rectangle').style.display = 'none';
				document.getElementById('bop_41_l_rectangle').style.display = 'none';
				document.getElementById('bop_41_ml_rectangle').style.display = 'none';
				
			pi_41_db = 0;
			pi_41_b = 0;
			pi_41_mb = 0;
					
			pi_41_dl = 0;
			pi_41_l = 0;
			pi_41_ml = 0;

				document.getElementById('pi_41_db_rectangle').style.display = 'none';
				document.getElementById('pi_41_b_rectangle').style.display = 'none';
				document.getElementById('pi_41_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_41_dl_rectangle').style.display = 'none';
				document.getElementById('pi_41_l_rectangle').style.display = 'none';
				document.getElementById('pi_41_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_41() {
		if (tooth_41 === 1) {
			tooth_41 = 0;
			document.getElementById('tooth_line_41_b').style.display = 'block';
			document.getElementById('tooth_line_41_l').style.display = 'block';
			
			document.getElementById('mobility_41_txt').style.display = 'none';
			
			document.getElementById('implantat_41_btn').style.display = 'none';
			document.getElementById('implantat_41_tab').style.display = 'none';
			document.getElementById('implantat_41_b_image').style.display = 'none';
			document.getElementById('implantat_41_l_image').style.display = 'none';
			
			document.getElementById('gm_41_db_txt').style.display = 'none';
			document.getElementById('gm_41_b_txt').style.display = 'none';
			document.getElementById('gm_41_mb_txt').style.display = 'none';
			
			document.getElementById('pd_41_db_txt').style.display = 'none';
			document.getElementById('pd_41_b_txt').style.display = 'none';
			document.getElementById('pd_41_mb_txt').style.display = 'none';
			
			document.getElementById('gm_41_dl_txt').style.display = 'none';
			document.getElementById('gm_41_l_txt').style.display = 'none';
			document.getElementById('gm_41_ml_txt').style.display = 'none';
			
			document.getElementById('pd_41_dl_txt').style.display = 'none';
			document.getElementById('pd_41_l_txt').style.display = 'none';
			document.getElementById('pd_41_ml_txt').style.display = 'none';
			
			document.getElementById('bop_41_db_rectangle').style.display = 'none';
			document.getElementById('bop_41_b_rectangle').style.display = 'none';
			document.getElementById('bop_41_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_41_dl_rectangle').style.display = 'none';
			document.getElementById('bop_41_l_rectangle').style.display = 'none';
			document.getElementById('bop_41_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_41_db_btn').style.display = 'none';
			document.getElementById('bop_41_b_btn').style.display = 'none';
			document.getElementById('bop_41_mb_btn').style.display = 'none';
			
			document.getElementById('bop_41_dl_btn').style.display = 'none';
			document.getElementById('bop_41_l_btn').style.display = 'none';
			document.getElementById('bop_41_ml_btn').style.display = 'none';
			
			document.getElementById('pi_41_db_rectangle').style.display = 'none';
			document.getElementById('pi_41_b_rectangle').style.display = 'none';
			document.getElementById('pi_41_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_41_dl_rectangle').style.display = 'none';
			document.getElementById('pi_41_l_rectangle').style.display = 'none';
			document.getElementById('pi_41_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_41_db_btn').style.display = 'none';
			document.getElementById('pi_41_b_btn').style.display = 'none';
			document.getElementById('pi_41_mb_btn').style.display = 'none';
			
			document.getElementById('pi_41_dl_btn').style.display = 'none';
			document.getElementById('pi_41_l_btn').style.display = 'none';
			document.getElementById('pi_41_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_41_b').style.display = 'none';
			document.getElementById('polyline_al_41_b').style.display = 'none';
			document.getElementById('polyline_gm_41_b').style.display = 'none';
			
			document.getElementById('polygon_41_l').style.display = 'none';
			document.getElementById('polyline_al_41_l').style.display = 'none';
			document.getElementById('polyline_gm_41_l').style.display = 'none';
			
			document.getElementById('polygon_inter_42_41_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_42_41_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_42_41_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_42_41_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_42_41_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_42_41_l').style.display = 'none';            
			
			document.getElementById('note_41_txt').style.display = 'none';
		}
		else if (Implantat_41 !== 1) {
			tooth_41 = 1;
			document.getElementById('tooth_line_41_b').style.display = 'none';
			document.getElementById('tooth_line_41_l').style.display = 'none';

			document.getElementById('mobility_41_txt').style.display = 'block';

			document.getElementById('implantat_41_btn').style.display = 'block';

			document.getElementById('gm_41_db_txt').style.display = 'block';
			document.getElementById('gm_41_b_txt').style.display = 'block';
			document.getElementById('gm_41_mb_txt').style.display = 'block';
			
			document.getElementById('pd_41_db_txt').style.display = 'block';
			document.getElementById('pd_41_b_txt').style.display = 'block';
			document.getElementById('pd_41_mb_txt').style.display = 'block';
			
			document.getElementById('gm_41_dl_txt').style.display = 'block';
			document.getElementById('gm_41_l_txt').style.display = 'block';
			document.getElementById('gm_41_ml_txt').style.display = 'block';
			
			document.getElementById('pd_41_dl_txt').style.display = 'block';
			document.getElementById('pd_41_l_txt').style.display = 'block';
			document.getElementById('pd_41_ml_txt').style.display = 'block';
			
			document.getElementById('note_41_txt').style.display = 'block';

			document.getElementById('polygon_41_b').style.display = 'block';
			document.getElementById('polyline_al_41_b').style.display = 'block';
			document.getElementById('polyline_gm_41_b').style.display = 'block';
			
			document.getElementById('polygon_41_l').style.display = 'block';
			document.getElementById('polyline_al_41_l').style.display = 'block';
			document.getElementById('polyline_gm_41_l').style.display = 'block';

            if (tooth_42 == 1 && tooth_41 == 1) {
				document.getElementById('polygon_inter_42_41_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_42_41_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_42_41_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_42_41_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_42_41_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_42_41_l').style.display = 'block';            
            }            

			document.getElementById('bop_41_db_btn').style.display = 'block';
			document.getElementById('bop_41_b_btn').style.display = 'block';
			document.getElementById('bop_41_mb_btn').style.display = 'block';

			document.getElementById('bop_41_dl_btn').style.display = 'block';
			document.getElementById('bop_41_l_btn').style.display = 'block';
			document.getElementById('bop_41_ml_btn').style.display = 'block';
			
			if (bop_41_db == 1) {
				document.getElementById('bop_41_db_rectangle').style.display = 'block';
			}
			if (bop_41_b == 1) {
				document.getElementById('bop_41_b_rectangle').style.display = 'block';
			}
			if (bop_41_mb == 1) {
				document.getElementById('bop_41_mb_rectangle').style.display = 'block';
			}
			if (bop_41_dl == 1) {
				document.getElementById('bop_41_dl_rectangle').style.display = 'block';
			}
			if (bop_41_l == 1) {
				document.getElementById('bop_41_l_rectangle').style.display = 'block';
			}
			if (bop_41_ml == 1) {
				document.getElementById('bop_41_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_41_db_btn').style.display = 'block';
			document.getElementById('pi_41_b_btn').style.display = 'block';
			document.getElementById('pi_41_mb_btn').style.display = 'block';

			document.getElementById('pi_41_dl_btn').style.display = 'block';
			document.getElementById('pi_41_l_btn').style.display = 'block';
			document.getElementById('pi_41_ml_btn').style.display = 'block';
			
			if (pi_41_db == 1) {
				document.getElementById('pi_41_db_rectangle').style.display = 'block';
			}
			if (pi_41_b == 1) {
				document.getElementById('pi_41_b_rectangle').style.display = 'block';
			}
			if (pi_41_mb == 1) {
				document.getElementById('pi_41_mb_rectangle').style.display = 'block';
			}
			if (pi_41_dl == 1) {
				document.getElementById('pi_41_dl_rectangle').style.display = 'block';
			}
			if (pi_41_l == 1) {
				document.getElementById('pi_41_l_rectangle').style.display = 'block';
			}
			if (pi_41_ml == 1) {
				document.getElementById('pi_41_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_41 == 1) {
			tooth_41 = 1;
			document.getElementById('tooth_line_41_b').style.display = 'none';
			document.getElementById('tooth_line_41_l').style.display = 'none';

			document.getElementById('mobility_41_txt').style.display = 'block';
			
			document.getElementById('note_41_txt').style.display = 'block';

			document.getElementById('implantat_41_btn').style.display = 'block';
			document.getElementById('implantat_41_tab').style.display = 'block';
			document.getElementById('implantat_41_b_image').style.display = 'block';
			document.getElementById('implantat_41_l_image').style.display = 'block';

			document.getElementById('gm_41_db_txt').style.display = 'block';
			document.getElementById('gm_41_b_txt').style.display = 'block';
			document.getElementById('gm_41_mb_txt').style.display = 'block';
			
			document.getElementById('pd_41_db_txt').style.display = 'block';
			document.getElementById('pd_41_b_txt').style.display = 'block';
			document.getElementById('pd_41_mb_txt').style.display = 'block';
			
			document.getElementById('gm_41_dl_txt').style.display = 'block';
			document.getElementById('gm_41_l_txt').style.display = 'block';
			document.getElementById('gm_41_ml_txt').style.display = 'block';
			
			document.getElementById('pd_41_dl_txt').style.display = 'block';
			document.getElementById('pd_41_l_txt').style.display = 'block';
			document.getElementById('pd_41_ml_txt').style.display = 'block';

			document.getElementById('polygon_41_b').style.display = 'block';
			document.getElementById('polyline_al_41_b').style.display = 'block';
			document.getElementById('polyline_gm_41_b').style.display = 'block';
			
			document.getElementById('polygon_41_l').style.display = 'block';
			document.getElementById('polyline_al_41_l').style.display = 'block';
			document.getElementById('polyline_gm_41_l').style.display = 'block';

            if (tooth_42 == 1 && tooth_41 == 1) {
				document.getElementById('polygon_inter_42_41_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_42_41_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_42_41_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_42_41_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_42_41_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_42_41_l').style.display = 'block';            
            }            

			document.getElementById('bop_41_db_btn').style.display = 'block';
			document.getElementById('bop_41_b_btn').style.display = 'block';
			document.getElementById('bop_41_mb_btn').style.display = 'block';

			document.getElementById('bop_41_dl_btn').style.display = 'block';
			document.getElementById('bop_41_l_btn').style.display = 'block';
			document.getElementById('bop_41_ml_btn').style.display = 'block';
			
			document.getElementById('pi_41_db_btn').style.display = 'block';
			document.getElementById('pi_41_b_btn').style.display = 'block';
			document.getElementById('pi_41_mb_btn').style.display = 'block';

			document.getElementById('pi_41_dl_btn').style.display = 'block';
			document.getElementById('pi_41_l_btn').style.display = 'block';
			document.getElementById('pi_41_ml_btn').style.display = 'block';
			
			if (bop_41_db == 1) {
				document.getElementById('bop_41_db_rectangle').style.display = 'block';
			}
			if (bop_41_b == 1) {
				document.getElementById('bop_41_b_rectangle').style.display = 'block';
			}
			if (bop_41_mb == 1) {
				document.getElementById('bop_41_mb_rectangle').style.display = 'block';
			}
			if (bop_41_dl == 1) {
				document.getElementById('bop_41_dl_rectangle').style.display = 'block';
			}
			if (bop_41_l == 1) {
				document.getElementById('bop_41_l_rectangle').style.display = 'block';
			}
			if (bop_41_ml == 1) {
				document.getElementById('bop_41_ml_rectangle').style.display = 'block';
			}
			
			if (pi_41_db == 1) {
				document.getElementById('pi_41_db_rectangle').style.display = 'block';
			}
			if (pi_41_b == 1) {
				document.getElementById('pi_41_b_rectangle').style.display = 'block';
			}
			if (pi_41_mb == 1) {
				document.getElementById('pi_41_mb_rectangle').style.display = 'block';
			}
			if (pi_41_dl == 1) {
				document.getElementById('pi_41_dl_rectangle').style.display = 'block';
			}
			if (pi_41_l == 1) {
				document.getElementById('pi_41_l_rectangle').style.display = 'block';
			}
			if (pi_41_ml == 1) {
				document.getElementById('pi_41_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_41();
	}

	function toggle_implant_41() {
		if (Implantat_41 == 0) {
			Implantat_41 = 1;
			
			document.getElementById('implantat_41_b_image').style.display = 'block';
			document.getElementById('implantat_41_l_image').style.display = 'block';
			document.getElementById('implantat_41_tab').style.display = 'block';
		}
		else {
			Implantat_41 = 0;
			
			document.getElementById('implantat_41_b_image').style.display = 'none';
			document.getElementById('implantat_41_l_image').style.display = 'none';
			document.getElementById('implantat_41_tab').style.display = 'none';
		}
	}

	function toggle_bop_41_db() {
		if (bop_41_db == 0) {
			bop_41_db = 1;
			document.getElementById('bop_41_db_rectangle').style.display = 'block';
		}
		else {
			bop_41_db = 0;
			document.getElementById('bop_41_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_41_b() {
		if (bop_41_b == 0) {
			bop_41_b = 1;
			document.getElementById('bop_41_b_rectangle').style.display = 'block';
		}
		else {
			bop_41_b = 0;
			document.getElementById('bop_41_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_41_mb() {
		if (bop_41_mb == 0) {
			bop_41_mb = 1;
			document.getElementById('bop_41_mb_rectangle').style.display = 'block';
		}
		else {
			bop_41_mb = 0;
			document.getElementById('bop_41_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_41_db() {
		if (pi_41_db == 0) {
			pi_41_db = 1;
			document.getElementById('pi_41_db_rectangle').style.display = 'block';
		}
		else {
			pi_41_db = 0;
			document.getElementById('pi_41_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_41_b() {
		if (pi_41_b == 0) {
			pi_41_b = 1;
			document.getElementById('pi_41_b_rectangle').style.display = 'block';
		}
		else {
			pi_41_b = 0;
			document.getElementById('pi_41_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_41_mb() {
		if (pi_41_mb == 0) {
			pi_41_mb = 1;
			document.getElementById('pi_41_mb_rectangle').style.display = 'block';
		}
		else {
			pi_41_mb = 0;
			document.getElementById('pi_41_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_41_dl() {
		if (bop_41_dl == 0) {
			bop_41_dl = 1;
			document.getElementById('bop_41_dl_rectangle').style.display = 'block';
		}
		else {
			bop_41_dl = 0;
			document.getElementById('bop_41_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_41_l() {
		if (bop_41_l == 0) {
			bop_41_l = 1;
			document.getElementById('bop_41_l_rectangle').style.display = 'block';
		}
		else {
			bop_41_l = 0;
			document.getElementById('bop_41_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_41_ml() {
		if (bop_41_ml == 0) {
			bop_41_ml = 1;
			document.getElementById('bop_41_ml_rectangle').style.display = 'block';
		}
		else {
			bop_41_ml = 0;
			document.getElementById('bop_41_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_41_dl() {
		if (pi_41_dl == 0) {
			pi_41_dl = 1;
			document.getElementById('pi_41_dl_rectangle').style.display = 'block';
		}
		else {
			pi_41_dl = 0;
			document.getElementById('pi_41_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_41_l() {
		if (pi_41_l == 0) {
			pi_41_l = 1;
			document.getElementById('pi_41_l_rectangle').style.display = 'block';
		}
		else {
			pi_41_l = 0;
			document.getElementById('pi_41_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_41_ml() {
		if (pi_41_ml == 0) {
			pi_41_ml = 1;
			document.getElementById('pi_41_ml_rectangle').style.display = 'block';
		}
		else {
			pi_41_ml = 0;
			document.getElementById('pi_41_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_41() {
		if (tooth_41 == 1) {
			
		// Variablen aus dem Formular
			pd_41_db = document.forms[0]["pd_41_db"].value;
			pd_41_b = document.forms[0]["pd_41_b"].value;
			pd_41_mb = document.forms[0]["pd_41_mb"].value;

			if (document.forms[0]["pd_41_dl"].value > 3) {document.forms[0]["pd_41_dl"].style.color = 'red';} else {document.forms[0]["pd_41_dl"].style.color = 'black'};
			if (document.forms[0]["pd_41_l"].value > 3) {document.forms[0]["pd_41_l"].style.color = 'red';} else {document.forms[0]["pd_41_l"].style.color = 'black'};
			if (document.forms[0]["pd_41_ml"].value > 3) {document.forms[0]["pd_41_ml"].style.color = 'red';} else {document.forms[0]["pd_41_ml"].style.color = 'black'};
			
			gm_41_db = document.forms[0]["gm_41_db"].value;
			gm_41_b = document.forms[0]["gm_41_b"].value;
			gm_41_mb = document.forms[0]["gm_41_mb"].value;
			
			pd_41_dl = document.forms[0]["pd_41_dl"].value;
			pd_41_l = document.forms[0]["pd_41_l"].value;
			pd_41_ml = document.forms[0]["pd_41_ml"].value;

			if (document.forms[0]["pd_41_db"].value > 3) {document.forms[0]["pd_41_db"].style.color = 'red';} else {document.forms[0]["pd_41_db"].style.color = 'black'};
			if (document.forms[0]["pd_41_b"].value > 3) {document.forms[0]["pd_41_b"].style.color = 'red';} else {document.forms[0]["pd_41_b"].style.color = 'black'};
			if (document.forms[0]["pd_41_mb"].value > 3) {document.forms[0]["pd_41_mb"].style.color = 'red';} else {document.forms[0]["pd_41_mb"].style.color = 'black'};
			
			gm_41_dl = document.forms[0]["gm_41_dl"].value;
			gm_41_l = document.forms[0]["gm_41_l"].value;
			gm_41_ml = document.forms[0]["gm_41_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 41 (bukkal) in der Bitmap
			var x_db_41 = 643;							// distal 41
			var x_mb_41 = 662;							// mesial 41
			var x_b_41 = (x_db_41 + x_mb_41)/2;			// bukkal 41
			
		// Set der horizontalen Koordinaten von Zahn 41 (lingual) in der Bitmap
			var x_dl_41 = 642;							// distal 41
			var x_ml_41 = 661;							// mesial 41
			var x_l_41 = (x_dl_41 + x_ml_41)/2;			// lingual 41
			
		// Set der vertikalen Koordinaten von Zahn 41 (bukkal) aus dem Formular
			var y_gm_41_db = gm_UK_b - 6.05 * gm_41_db;	// Margo Gingivae distobukkal 41
			var y_gm_41_b = gm_UK_b - 6.05 * gm_41_b;	// Margo Gingivae bukkal 41
			var y_gm_41_mb = gm_UK_b - 6.05 * gm_41_mb;	// Margo Gingivae mesiobukkal 41
			var y_pd_41_db = 6.05 * pd_41_db;			// Sondierungstiefe distobukkal 41
			var y_pd_41_b = 6.05 * pd_41_b;				// Sondierungstiefe bukkal 41
			var y_pd_41_mb = 6.05 * pd_41_mb;			// Sondierungstiefe mesiobukkal 41
			
		// Set der vertikalen Koordinaten von Zahn 41 (lingual) aus dem Formular
			var y_gm_41_dl = gm_UK_l + 6.05 * gm_41_dl;	// Margo Gingivae distolingual 41
			var y_gm_41_l = gm_UK_l + 6.05 * gm_41_l;	// Margo Gingivae lingual 41
			var y_gm_41_ml = gm_UK_l + 6.05 * gm_41_ml;	// Margo Gingivae mesiolingual 41
			var y_pd_41_dl = 6.05 * pd_41_dl;			// Sondierungstiefe distolingual 41
			var y_pd_41_l = 6.05 * pd_41_l;				// Sondierungstiefe lingual 41
			var y_pd_41_ml = 6.05 * pd_41_ml;			// Sondierungstiefe mesiolingual 41
			
		// Berechnung des Attachmentniveaus 41 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_41_db = y_gm_41_db + y_pd_41_db;	// Attachmentniveau distobukkal 41
			var y_al_41_b = y_gm_41_b + y_pd_41_b;		// Attachmentniveau bukkal 41
			var y_al_41_mb = y_gm_41_mb + y_pd_41_mb;	// Attachmentniveau mesiobukkal 41
			
		// Berechnung des Attachmentniveaus 41 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_41_dl = y_gm_41_dl - y_pd_41_dl;	// Attachmentniveau distolingual 41
			var y_al_41_l = y_gm_41_l - y_pd_41_l;		// Attachmentniveau lingual 41
			var y_al_41_ml = y_gm_41_ml - y_pd_41_ml;	// Attachmentniveau mesiolingual 41

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[41].storeCoordinates(
				x_db_41, x_mb_41, x_dl_41, x_ml_41, x_b_41, x_l_41,
				y_gm_41_db, y_gm_41_b, y_gm_41_mb, y_pd_41_db, y_pd_41_b, y_pd_41_mb,
				y_gm_41_dl, y_gm_41_l, y_gm_41_ml, y_pd_41_dl, y_pd_41_l, y_pd_41_ml,
				y_al_41_db, y_al_41_b, y_al_41_mb, y_al_41_dl, y_al_41_l, y_al_41_ml
			);

		// Parodontaltasche 41 bukkal zeichnen
			var string = 
				x_db_41 + ", " + y_al_41_db + "  " + 
				x_b_41 + ", " + y_al_41_b + "  " + 
				x_mb_41 + ", " + y_al_41_mb + "  " + 
				x_mb_41 + ", " + y_gm_41_mb + "  " + 
				x_b_41 + ", " + y_gm_41_b + "  " + 
				x_db_41 + ", " + y_gm_41_db;
			document.getElementById("polygon_41_b").setAttribute("points", string);
		// Attachmentniveau 41 bukkal zeichnen
			var string = 
				x_db_41 + ", " + y_al_41_db + "  " + 
				x_b_41 + ", " + y_al_41_b + "  " + 
				x_mb_41 + ", " + y_al_41_mb;
			document.getElementById("polyline_al_41_b").setAttribute("points", string);
		// Margo Gingivae 41 bukkal zeichnen
			var string =
				x_db_41 + ", " + y_gm_41_db + "  " + 
				x_b_41 + ", " + y_gm_41_b + "  " + 
				x_mb_41 + ", " + y_gm_41_mb;
			document.getElementById("polyline_gm_41_b").setAttribute("points", string);

		// Parodontaltasche 41 lingual zeichnen
			var string = 
				x_dl_41 + ", " + y_al_41_dl + "  " + 
				x_l_41 + ", " + y_al_41_l + "  " + 
				x_ml_41 + ", " + y_al_41_ml + "  " + 
				x_ml_41 + ", " + y_gm_41_ml + "  " + 
				x_l_41 + ", " + y_gm_41_l + "  " + 
				x_dl_41 + ", " + y_gm_41_dl;
			document.getElementById("polygon_41_l").setAttribute("points", string);
		// Attachmentniveau 41 lingual zeichnen
			var string = 
				x_dl_41 + ", " + y_al_41_dl + "  " + 
				x_l_41 + ", " + y_al_41_l + "  " + 
				x_ml_41 + ", " + y_al_41_ml;
			document.getElementById("polyline_al_41_l").setAttribute("points", string);
		// Margo Gingivae 41 lingual zeichnen
			var string =
				x_dl_41 + ", " + y_gm_41_dl + "  " + 
				x_l_41 + ", " + y_gm_41_l + "  " + 
				x_ml_41 + ", " + y_gm_41_ml;
			document.getElementById("polyline_gm_41_l").setAttribute("points", string);
		}
        if (tooth_42 == 1 && tooth_41 == 1) {

            pd_42_mb = document.forms[0]["pd_42_mb"].value;
			gm_42_mb = document.forms[0]["gm_42_mb"].value;
			
			pd_42_ml = document.forms[0]["pd_42_ml"].value;
			gm_42_ml = document.forms[0]["gm_42_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 42 (bukkal) in der Bitmap
			var x_mb_42 = 629;							// mesial 42
			
		// Set der horizontalen Koordinaten von Zahn 42 (lingual) in der Bitmap
			var x_ml_42 = 625;							// mesial 42
			
		// Set der vertikalen Koordinaten von Zahn 42 (bukkal) aus dem Formular
			var y_gm_42_mb = gm_UK_b - 6.05 * gm_42_mb;	// Margo Gingivae mesiobukkal 42
			var y_pd_42_mb = 6.05 * pd_42_mb;			// Sondierungstiefe mesiobukkal 42
			
		// Set der vertikalen Koordinaten von Zahn 42 (lingual) aus dem Formular
			var y_gm_42_ml = gm_UK_l + 6.05 * gm_42_ml;	// Margo Gingivae mesiolingual 42
			var y_pd_42_ml = 6.05 * pd_42_ml;			// Sondierungstiefe mesiolingual 42
			
		// Berechnung des Attachmentniveaus 42 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_42_mb = y_gm_42_mb + y_pd_42_mb;	// Attachmentniveau mesiobukkal 42
			
		// Berechnung des Attachmentniveaus 42 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_42_ml = y_gm_42_ml - y_pd_42_ml;	// Attachmentniveau mesiolingual 42

		// Parodontaltasche inter_42_41 bukkal zeichnen
			var string = 
				x_mb_42 + ", " + y_al_42_mb + "  " + 
				x_db_41 + ", " + y_al_41_db + "  " + 
				x_db_41 + ", " + y_gm_41_db + "  " + 
				x_mb_42 + ", " + y_gm_42_mb;
			document.getElementById("polygon_inter_42_41_b").setAttribute("points", string);
		// Attachmentniveau inter_42_41 bukkal zeichnen
			var string = 
				x_mb_42 + ", " + y_al_42_mb + "  " + 
				x_db_41 + ", " + y_al_41_db;
			document.getElementById("polyline_al_inter_42_41_b").setAttribute("points", string);
		// Margo Gingivae inter_42_41 bukkal zeichnen
			var string =
				x_mb_42 + ", " + y_gm_42_mb + "  " + 
				x_db_41 + ", " + y_gm_41_db;
			document.getElementById("polyline_gm_inter_42_41_b").setAttribute("points", string);

        // Parodontaltasche inter_42_41 lingual zeichnen
			var string = 
				x_ml_42 + ", " + y_al_42_ml + "  " + 
				x_dl_41 + ", " + y_al_41_dl + "  " + 
				x_dl_41 + ", " + y_gm_41_dl + "  " + 
				x_ml_42 + ", " + y_gm_42_ml;
			document.getElementById("polygon_inter_42_41_l").setAttribute("points", string);
		// Attachmentniveau inter_42_41 lingual zeichnen
			var string = 
				x_ml_42 + ", " + y_al_42_ml + "  " + 
				x_dl_41 + ", " + y_al_41_dl;
			document.getElementById("polyline_al_inter_42_41_l").setAttribute("points", string);
		// Margo Gingivae inter_42_41 lingual zeichnen
			var string =
				x_ml_42 + ", " + y_gm_42_ml + "  " + 
				x_dl_41 + ", " + y_gm_41_dl;
			document.getElementById("polyline_gm_inter_42_41_l").setAttribute("points", string);
		}
	}