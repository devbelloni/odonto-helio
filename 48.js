	// Definition der Variablen für das Formular
		var tooth_48 = 1;
		var Furkation_48_b = 0;
		var Furkation_48_l = 0;
		var Implantat_48 = 0;
		var bop_48_db = 0;
		var bop_48_b = 0;
		var bop_48_mb = 0;
		var pi_48_db = 0;
		var pi_48_b = 0;
		var pi_48_mb = 0;
		var bop_48_dl = 0;
		var bop_48_l = 0;
		var bop_48_ml = 0;
		var pi_48_dl = 0;
		var pi_48_l = 0;
		var pi_48_ml = 0;
		var gm_48_db = 0;
		var gm_48_b = 0;
		var gm_48_mb = 0;
		var pd_48_db = 0;
		var pd_48_b = 0;
		var pd_48_mb = 0;
		var gm_48_dl = 0;
		var gm_48_l = 0;
		var gm_48_ml = 0;
		var pd_48_dl = 0;
		var pd_48_l = 0;
		var pd_48_ml = 0;

	function clear_data_48() {
        if (tooth_48 == 1) {
			gm_48_db = 0;
			gm_48_b = 0;
			gm_48_mb = 0;
			pd_48_db = 0;
			pd_48_b = 0;
			pd_48_mb = 0;
	
				document.getElementById('gm_48_db_txt').value = 0;
				document.getElementById('gm_48_b_txt').value = 0;
				document.getElementById('gm_48_mb_txt').value = 0;
				
				document.getElementById('pd_48_db_txt').value = 0;
				document.getElementById('pd_48_b_txt').value = 0;
				document.getElementById('pd_48_mb_txt').value = 0;
			
				document.forms[0]["pd_48_db"].style.color = 'black'
				document.forms[0]["pd_48_b"].style.color = 'black'
				document.forms[0]["pd_48_mb"].style.color = 'black'
			
			gm_48_dl = 0;
			gm_48_l = 0;
			gm_48_ml = 0;
			pd_48_dl = 0;
			pd_48_l = 0;
			pd_48_ml = 0;

				document.getElementById('gm_48_dl_txt').value = 0;
				document.getElementById('gm_48_l_txt').value = 0;
				document.getElementById('gm_48_ml_txt').value = 0;
				
				document.getElementById('pd_48_dl_txt').value = 0;
				document.getElementById('pd_48_l_txt').value = 0;
				document.getElementById('pd_48_ml_txt').value = 0;

				document.forms[0]["pd_48_dl"].style.color = 'black'
				document.forms[0]["pd_48_l"].style.color = 'black'
				document.forms[0]["pd_48_ml"].style.color = 'black'
			
			change_probing_48();
			
			mobility_48 = 0;

				document.getElementById('mobility_48_txt').value = "0";

			note_48 = "";

				document.getElementById('note_48_txt').value = "";

			Furkation_48_b = 0;
			Furkation_48_l = 0;

				document.getElementById('furkation_1_48_b').style.display = 'none';
				document.getElementById('furkation_2_48_b').style.display = 'none';
				document.getElementById('furkation_3_48_b').style.display = 'none';
					
				document.getElementById('furkation_1_48_b_tab').style.display = 'none';
				document.getElementById('furkation_2_48_b_tab').style.display = 'none';
				document.getElementById('furkation_3_48_b_tab').style.display = 'none';
				
				document.getElementById('furkation_1_48_l').style.display = 'none';
				document.getElementById('furkation_2_48_l').style.display = 'none';
				document.getElementById('furkation_3_48_l').style.display = 'none';
					
				document.getElementById('furkation_1_48_l_tab').style.display = 'none';
				document.getElementById('furkation_2_48_l_tab').style.display = 'none';
				document.getElementById('furkation_3_48_l_tab').style.display = 'none';
				
			bop_48_db = 0;
			bop_48_b = 0;
			bop_48_mb = 0;
					
			bop_48_dl = 0;
			bop_48_l = 0;
			bop_48_ml = 0;
					
				document.getElementById('bop_48_db_rectangle').style.display = 'none';
				document.getElementById('bop_48_b_rectangle').style.display = 'none';
				document.getElementById('bop_48_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_48_dl_rectangle').style.display = 'none';
				document.getElementById('bop_48_l_rectangle').style.display = 'none';
				document.getElementById('bop_48_ml_rectangle').style.display = 'none';
				
			pi_48_db = 0;
			pi_48_b = 0;
			pi_48_mb = 0;
					
			pi_48_dl = 0;
			pi_48_l = 0;
			pi_48_ml = 0;

				document.getElementById('pi_48_db_rectangle').style.display = 'none';
				document.getElementById('pi_48_b_rectangle').style.display = 'none';
				document.getElementById('pi_48_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_48_dl_rectangle').style.display = 'none';
				document.getElementById('pi_48_l_rectangle').style.display = 'none';
				document.getElementById('pi_48_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_48() {
		if (tooth_48 === 1) {
			tooth_48 = 0;
			document.getElementById('tooth_line_48_b').style.display = 'block';
			document.getElementById('tooth_line_48_l').style.display = 'block';
			
			document.getElementById('mobility_48_txt').style.display = 'none';
			
			document.getElementById('implantat_48_btn').style.display = 'none';
			document.getElementById('implantat_48_tab').style.display = 'none';
			document.getElementById('implantat_48_b_image').style.display = 'none';
			document.getElementById('implantat_48_l_image').style.display = 'none';
			
			document.getElementById('furkation_48_b_btn').style.display = 'none';
			document.getElementById('furkation_48_l_btn').style.display = 'none';

			document.getElementById('furkation_1_48_b').style.display = 'none';
			document.getElementById('furkation_2_48_b').style.display = 'none';
			document.getElementById('furkation_3_48_b').style.display = 'none';
			
			document.getElementById('furkation_1_48_b_tab').style.display = 'none';
			document.getElementById('furkation_2_48_b_tab').style.display = 'none';
			document.getElementById('furkation_3_48_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_48_l').style.display = 'none';
			document.getElementById('furkation_2_48_l').style.display = 'none';
			document.getElementById('furkation_3_48_l').style.display = 'none';
			
			document.getElementById('furkation_1_48_l_tab').style.display = 'none';
			document.getElementById('furkation_2_48_l_tab').style.display = 'none';
			document.getElementById('furkation_3_48_l_tab').style.display = 'none';
						
			document.getElementById('gm_48_db_txt').style.display = 'none';
			document.getElementById('gm_48_b_txt').style.display = 'none';
			document.getElementById('gm_48_mb_txt').style.display = 'none';
			
			document.getElementById('pd_48_db_txt').style.display = 'none';
			document.getElementById('pd_48_b_txt').style.display = 'none';
			document.getElementById('pd_48_mb_txt').style.display = 'none';
			
			document.getElementById('gm_48_dl_txt').style.display = 'none';
			document.getElementById('gm_48_l_txt').style.display = 'none';
			document.getElementById('gm_48_ml_txt').style.display = 'none';
			
			document.getElementById('pd_48_dl_txt').style.display = 'none';
			document.getElementById('pd_48_l_txt').style.display = 'none';
			document.getElementById('pd_48_ml_txt').style.display = 'none';
			
			document.getElementById('bop_48_db_rectangle').style.display = 'none';
			document.getElementById('bop_48_b_rectangle').style.display = 'none';
			document.getElementById('bop_48_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_48_dl_rectangle').style.display = 'none';
			document.getElementById('bop_48_l_rectangle').style.display = 'none';
			document.getElementById('bop_48_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_48_db_btn').style.display = 'none';
			document.getElementById('bop_48_b_btn').style.display = 'none';
			document.getElementById('bop_48_mb_btn').style.display = 'none';
			
			document.getElementById('bop_48_dl_btn').style.display = 'none';
			document.getElementById('bop_48_l_btn').style.display = 'none';
			document.getElementById('bop_48_ml_btn').style.display = 'none';
			
			document.getElementById('pi_48_db_rectangle').style.display = 'none';
			document.getElementById('pi_48_b_rectangle').style.display = 'none';
			document.getElementById('pi_48_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_48_dl_rectangle').style.display = 'none';
			document.getElementById('pi_48_l_rectangle').style.display = 'none';
			document.getElementById('pi_48_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_48_db_btn').style.display = 'none';
			document.getElementById('pi_48_b_btn').style.display = 'none';
			document.getElementById('pi_48_mb_btn').style.display = 'none';
			
			document.getElementById('pi_48_dl_btn').style.display = 'none';
			document.getElementById('pi_48_l_btn').style.display = 'none';
			document.getElementById('pi_48_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_48_b').style.display = 'none';
			document.getElementById('polyline_al_48_b').style.display = 'none';
			document.getElementById('polyline_gm_48_b').style.display = 'none';
			
			document.getElementById('polygon_48_l').style.display = 'none';
			document.getElementById('polyline_al_48_l').style.display = 'none';
			document.getElementById('polyline_gm_48_l').style.display = 'none';
			
			document.getElementById('polygon_inter_48_47_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_48_47_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_48_47_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_48_47_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_48_47_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_48_47_l').style.display = 'none';            
			
			document.getElementById('note_48_txt').style.display = 'none';
		}
		else if (Implantat_48 !== 1) {
			tooth_48 = 1;
			document.getElementById('tooth_line_48_b').style.display = 'none';
			document.getElementById('tooth_line_48_l').style.display = 'none';

			document.getElementById('mobility_48_txt').style.display = 'block';

			document.getElementById('implantat_48_btn').style.display = 'block';

			document.getElementById('furkation_48_b_btn').style.display = 'block';
			document.getElementById('furkation_48_l_btn').style.display = 'block';
			
			document.getElementById('gm_48_db_txt').style.display = 'block';
			document.getElementById('gm_48_b_txt').style.display = 'block';
			document.getElementById('gm_48_mb_txt').style.display = 'block';
			
			document.getElementById('pd_48_db_txt').style.display = 'block';
			document.getElementById('pd_48_b_txt').style.display = 'block';
			document.getElementById('pd_48_mb_txt').style.display = 'block';
			
			document.getElementById('gm_48_dl_txt').style.display = 'block';
			document.getElementById('gm_48_l_txt').style.display = 'block';
			document.getElementById('gm_48_ml_txt').style.display = 'block';
			
			document.getElementById('pd_48_dl_txt').style.display = 'block';
			document.getElementById('pd_48_l_txt').style.display = 'block';
			document.getElementById('pd_48_ml_txt').style.display = 'block';
			
			document.getElementById('note_48_txt').style.display = 'block';

			document.getElementById('polygon_48_b').style.display = 'block';
			document.getElementById('polyline_al_48_b').style.display = 'block';
			document.getElementById('polyline_gm_48_b').style.display = 'block';
			
			document.getElementById('polygon_48_l').style.display = 'block';
			document.getElementById('polyline_al_48_l').style.display = 'block';
			document.getElementById('polyline_gm_48_l').style.display = 'block';

            if (tooth_48 == 1 && tooth_47 == 1) {
				document.getElementById('polygon_inter_48_47_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_48_47_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_48_47_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_48_47_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_48_47_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_48_47_l').style.display = 'block';            
            }

			if (Furkation_48_b == 1) {
				document.getElementById('furkation_1_48_b').style.display = 'block';
			} else if (Furkation_48_b == 2) {
				document.getElementById('furkation_2_48_b').style.display = 'block';
			} else if (Furkation_48_b == 3) {
				document.getElementById('furkation_3_48_b').style.display = 'block';
			}
			if (Furkation_48_b == 1) {
				document.getElementById('furkation_1_48_b_tab').style.display = 'block';
			} else if (Furkation_48_b == 2) {
				document.getElementById('furkation_2_48_b_tab').style.display = 'block';
			} else if (Furkation_48_b == 3) {
				document.getElementById('furkation_3_48_b_tab').style.display = 'block';
			}
			if (Furkation_48_l == 1) {
				document.getElementById('furkation_1_48_l').style.display = 'block';
			} else if (Furkation_48_l == 2) {
				document.getElementById('furkation_2_48_l').style.display = 'block';
			} else if (Furkation_48_l == 3) {
				document.getElementById('furkation_3_48_l').style.display = 'block';
			}
			if (Furkation_48_l == 1) {
				document.getElementById('furkation_1_48_l_tab').style.display = 'block';
			} else if (Furkation_48_l == 2) {
				document.getElementById('furkation_2_48_l_tab').style.display = 'block';
			} else if (Furkation_48_l == 3) {
				document.getElementById('furkation_3_48_l_tab').style.display = 'block';
			}

			document.getElementById('bop_48_db_btn').style.display = 'block';
			document.getElementById('bop_48_b_btn').style.display = 'block';
			document.getElementById('bop_48_mb_btn').style.display = 'block';

			document.getElementById('bop_48_dl_btn').style.display = 'block';
			document.getElementById('bop_48_l_btn').style.display = 'block';
			document.getElementById('bop_48_ml_btn').style.display = 'block';
			
			if (bop_48_db == 1) {
				document.getElementById('bop_48_db_rectangle').style.display = 'block';
			}
			if (bop_48_b == 1) {
				document.getElementById('bop_48_b_rectangle').style.display = 'block';
			}
			if (bop_48_mb == 1) {
				document.getElementById('bop_48_mb_rectangle').style.display = 'block';
			}
			if (bop_48_dl == 1) {
				document.getElementById('bop_48_dl_rectangle').style.display = 'block';
			}
			if (bop_48_l == 1) {
				document.getElementById('bop_48_l_rectangle').style.display = 'block';
			}
			if (bop_48_ml == 1) {
				document.getElementById('bop_48_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_48_db_btn').style.display = 'block';
			document.getElementById('pi_48_b_btn').style.display = 'block';
			document.getElementById('pi_48_mb_btn').style.display = 'block';

			document.getElementById('pi_48_dl_btn').style.display = 'block';
			document.getElementById('pi_48_l_btn').style.display = 'block';
			document.getElementById('pi_48_ml_btn').style.display = 'block';
			
			if (pi_48_db == 1) {
				document.getElementById('pi_48_db_rectangle').style.display = 'block';
			}
			if (pi_48_b == 1) {
				document.getElementById('pi_48_b_rectangle').style.display = 'block';
			}
			if (pi_48_mb == 1) {
				document.getElementById('pi_48_mb_rectangle').style.display = 'block';
			}
			if (pi_48_dl == 1) {
				document.getElementById('pi_48_dl_rectangle').style.display = 'block';
			}
			if (pi_48_l == 1) {
				document.getElementById('pi_48_l_rectangle').style.display = 'block';
			}
			if (pi_48_ml == 1) {
				document.getElementById('pi_48_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_48 == 1) {
			tooth_48 = 1;
			document.getElementById('tooth_line_48_b').style.display = 'none';
			document.getElementById('tooth_line_48_l').style.display = 'none';

			document.getElementById('mobility_48_txt').style.display = 'block';
			
			document.getElementById('note_48_txt').style.display = 'block';

			document.getElementById('implantat_48_btn').style.display = 'block';
			document.getElementById('implantat_48_tab').style.display = 'block';
			document.getElementById('implantat_48_b_image').style.display = 'block';
			document.getElementById('implantat_48_l_image').style.display = 'block';

			document.getElementById('gm_48_db_txt').style.display = 'block';
			document.getElementById('gm_48_b_txt').style.display = 'block';
			document.getElementById('gm_48_mb_txt').style.display = 'block';
			
			document.getElementById('pd_48_db_txt').style.display = 'block';
			document.getElementById('pd_48_b_txt').style.display = 'block';
			document.getElementById('pd_48_mb_txt').style.display = 'block';
			
			document.getElementById('gm_48_dl_txt').style.display = 'block';
			document.getElementById('gm_48_l_txt').style.display = 'block';
			document.getElementById('gm_48_ml_txt').style.display = 'block';
			
			document.getElementById('pd_48_dl_txt').style.display = 'block';
			document.getElementById('pd_48_l_txt').style.display = 'block';
			document.getElementById('pd_48_ml_txt').style.display = 'block';

			document.getElementById('polygon_48_b').style.display = 'block';
			document.getElementById('polyline_al_48_b').style.display = 'block';
			document.getElementById('polyline_gm_48_b').style.display = 'block';
			
			document.getElementById('polygon_48_l').style.display = 'block';
			document.getElementById('polyline_al_48_l').style.display = 'block';
			document.getElementById('polyline_gm_48_l').style.display = 'block';

            if (tooth_48 == 1 && tooth_47 == 1) {
				document.getElementById('polygon_inter_48_47_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_48_47_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_48_47_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_48_47_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_48_47_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_48_47_l').style.display = 'block';            
            }

			document.getElementById('bop_48_db_btn').style.display = 'block';
			document.getElementById('bop_48_b_btn').style.display = 'block';
			document.getElementById('bop_48_mb_btn').style.display = 'block';

			document.getElementById('bop_48_dl_btn').style.display = 'block';
			document.getElementById('bop_48_l_btn').style.display = 'block';
			document.getElementById('bop_48_ml_btn').style.display = 'block';
			
			document.getElementById('pi_48_db_btn').style.display = 'block';
			document.getElementById('pi_48_b_btn').style.display = 'block';
			document.getElementById('pi_48_mb_btn').style.display = 'block';

			document.getElementById('pi_48_dl_btn').style.display = 'block';
			document.getElementById('pi_48_l_btn').style.display = 'block';
			document.getElementById('pi_48_ml_btn').style.display = 'block';
			
			if (bop_48_db == 1) {
				document.getElementById('bop_48_db_rectangle').style.display = 'block';
			}
			if (bop_48_b == 1) {
				document.getElementById('bop_48_b_rectangle').style.display = 'block';
			}
			if (bop_48_mb == 1) {
				document.getElementById('bop_48_mb_rectangle').style.display = 'block';
			}
			if (bop_48_dl == 1) {
				document.getElementById('bop_48_dl_rectangle').style.display = 'block';
			}
			if (bop_48_l == 1) {
				document.getElementById('bop_48_l_rectangle').style.display = 'block';
			}
			if (bop_48_ml == 1) {
				document.getElementById('bop_48_ml_rectangle').style.display = 'block';
			}
			
			if (pi_48_db == 1) {
				document.getElementById('pi_48_db_rectangle').style.display = 'block';
			}
			if (pi_48_b == 1) {
				document.getElementById('pi_48_b_rectangle').style.display = 'block';
			}
			if (pi_48_mb == 1) {
				document.getElementById('pi_48_mb_rectangle').style.display = 'block';
			}
			if (pi_48_dl == 1) {
				document.getElementById('pi_48_dl_rectangle').style.display = 'block';
			}
			if (pi_48_l == 1) {
				document.getElementById('pi_48_l_rectangle').style.display = 'block';
			}
			if (pi_48_ml == 1) {
				document.getElementById('pi_48_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_48();
	}

	function toggle_implant_48() {
		if (Implantat_48 == 0) {
			Implantat_48 = 1;
			
			document.getElementById('implantat_48_b_image').style.display = 'block';
			document.getElementById('implantat_48_l_image').style.display = 'block';
			document.getElementById('implantat_48_tab').style.display = 'block';
			
			document.getElementById('furkation_48_b_btn').style.display = 'none';
			document.getElementById('furkation_48_l_btn').style.display = 'none';
			
			document.getElementById('furkation_1_48_b').style.display = 'none';
			document.getElementById('furkation_2_48_b').style.display = 'none';
			document.getElementById('furkation_3_48_b').style.display = 'none';
			
			document.getElementById('furkation_1_48_b_tab').style.display = 'none';
			document.getElementById('furkation_2_48_b_tab').style.display = 'none';
			document.getElementById('furkation_3_48_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_48_l').style.display = 'none';
			document.getElementById('furkation_2_48_l').style.display = 'none';
			document.getElementById('furkation_3_48_l').style.display = 'none';
			
			document.getElementById('furkation_1_48_l_tab').style.display = 'none';
			document.getElementById('furkation_2_48_l_tab').style.display = 'none';
			document.getElementById('furkation_3_48_l_tab').style.display = 'none';
		}
		else {
			Implantat_48 = 0;
			
			document.getElementById('implantat_48_b_image').style.display = 'none';
			document.getElementById('implantat_48_l_image').style.display = 'none';
			document.getElementById('implantat_48_tab').style.display = 'none';
			
			document.getElementById('furkation_48_b_btn').style.display = 'block';
			document.getElementById('furkation_48_l_btn').style.display = 'block';

			if (Furkation_48_b == 1) {
				document.getElementById('furkation_1_48_b').style.display = 'block';
			} else if (Furkation_48_b == 2) {
				document.getElementById('furkation_2_48_b').style.display = 'block';
			} else if (Furkation_48_b == 3) {
				document.getElementById('furkation_3_48_b').style.display = 'block';
			}
			if (Furkation_48_b == 1) {
				document.getElementById('furkation_1_48_b_tab').style.display = 'block';
			} else if (Furkation_48_b == 2) {
				document.getElementById('furkation_2_48_b_tab').style.display = 'block';
			} else if (Furkation_48_b == 3) {
				document.getElementById('furkation_3_48_b_tab').style.display = 'block';
			}
			if (Furkation_48_l == 1) {
				document.getElementById('furkation_1_48_l').style.display = 'block';
			} else if (Furkation_48_l == 2) {
				document.getElementById('furkation_2_48_l').style.display = 'block';
			} else if (Furkation_48_l == 3) {
				document.getElementById('furkation_3_48_l').style.display = 'block';
			}
			if (Furkation_48_l == 1) {
				document.getElementById('furkation_1_48_l_tab').style.display = 'block';
			} else if (Furkation_48_l == 2) {
				document.getElementById('furkation_2_48_l_tab').style.display = 'block';
			} else if (Furkation_48_l == 3) {
				document.getElementById('furkation_3_48_l_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_48_b() {
		if (Furkation_48_b == 0) {
			document.getElementById('furkation_1_48_b_tab').style.display = 'block';
			document.getElementById('furkation_2_48_b_tab').style.display = 'none';
			document.getElementById('furkation_3_48_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_48_b').style.display = 'block';
			document.getElementById('furkation_2_48_b').style.display = 'none';
			document.getElementById('furkation_3_48_b').style.display = 'none';

			Furkation_48_b = 1;
		}
		else if (Furkation_48_b == 1) {
			document.getElementById('furkation_1_48_b_tab').style.display = 'none';
			document.getElementById('furkation_2_48_b_tab').style.display = 'block';
			document.getElementById('furkation_3_48_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_48_b').style.display = 'none';
			document.getElementById('furkation_2_48_b').style.display = 'block';
			document.getElementById('furkation_3_48_b').style.display = 'none';
			
			Furkation_48_b = 2;
		}
		else if (Furkation_48_b == 2) {
			document.getElementById('furkation_1_48_b_tab').style.display = 'none';
			document.getElementById('furkation_2_48_b_tab').style.display = 'none';
			document.getElementById('furkation_3_48_b_tab').style.display = 'block';
			
			document.getElementById('furkation_1_48_b').style.display = 'none';
			document.getElementById('furkation_2_48_b').style.display = 'none';
			document.getElementById('furkation_3_48_b').style.display = 'block';
						
			Furkation_48_b = 3;
		}
		else if (Furkation_48_b == 3) {
			document.getElementById('furkation_1_48_b_tab').style.display = 'none';
			document.getElementById('furkation_2_48_b_tab').style.display = 'none';
			document.getElementById('furkation_3_48_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_48_b').style.display = 'none';
			document.getElementById('furkation_2_48_b').style.display = 'none';
			document.getElementById('furkation_3_48_b').style.display = 'none';
						
			Furkation_48_b = 0;
		}
	}

	function toggle_furcation_48_l() {
		if (Furkation_48_l == 0) {
			document.getElementById('furkation_1_48_l_tab').style.display = 'block';
			document.getElementById('furkation_2_48_l_tab').style.display = 'none';
			document.getElementById('furkation_3_48_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_48_l').style.display = 'block';
			document.getElementById('furkation_2_48_l').style.display = 'none';
			document.getElementById('furkation_3_48_l').style.display = 'none';

			Furkation_48_l = 1;
		}
		else if (Furkation_48_l == 1) {
			document.getElementById('furkation_1_48_l_tab').style.display = 'none';
			document.getElementById('furkation_2_48_l_tab').style.display = 'block';
			document.getElementById('furkation_3_48_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_48_l').style.display = 'none';
			document.getElementById('furkation_2_48_l').style.display = 'block';
			document.getElementById('furkation_3_48_l').style.display = 'none';
			
			Furkation_48_l = 2;
		}
		else if (Furkation_48_l == 2) {
			document.getElementById('furkation_1_48_l_tab').style.display = 'none';
			document.getElementById('furkation_2_48_l_tab').style.display = 'none';
			document.getElementById('furkation_3_48_l_tab').style.display = 'block';
			
			document.getElementById('furkation_1_48_l').style.display = 'none';
			document.getElementById('furkation_2_48_l').style.display = 'none';
			document.getElementById('furkation_3_48_l').style.display = 'block';
						
			Furkation_48_l = 3;
		}
		else if (Furkation_48_l == 3) {
			document.getElementById('furkation_1_48_l_tab').style.display = 'none';
			document.getElementById('furkation_2_48_l_tab').style.display = 'none';
			document.getElementById('furkation_3_48_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_48_l').style.display = 'none';
			document.getElementById('furkation_2_48_l').style.display = 'none';
			document.getElementById('furkation_3_48_l').style.display = 'none';
						
			Furkation_48_l = 0;
		}
	}

	function toggle_bop_48_db() {
		if (bop_48_db == 0) {
			bop_48_db = 1;
			document.getElementById('bop_48_db_rectangle').style.display = 'block';
		}
		else {
			bop_48_db = 0;
			document.getElementById('bop_48_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_48_b() {
		if (bop_48_b == 0) {
			bop_48_b = 1;
			document.getElementById('bop_48_b_rectangle').style.display = 'block';
		}
		else {
			bop_48_b = 0;
			document.getElementById('bop_48_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_48_mb() {
		if (bop_48_mb == 0) {
			bop_48_mb = 1;
			document.getElementById('bop_48_mb_rectangle').style.display = 'block';
		}
		else {
			bop_48_mb = 0;
			document.getElementById('bop_48_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_48_db() {
		if (pi_48_db == 0) {
			pi_48_db = 1;
			document.getElementById('pi_48_db_rectangle').style.display = 'block';
		}
		else {
			pi_48_db = 0;
			document.getElementById('pi_48_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_48_b() {
		if (pi_48_b == 0) {
			pi_48_b = 1;
			document.getElementById('pi_48_b_rectangle').style.display = 'block';
		}
		else {
			pi_48_b = 0;
			document.getElementById('pi_48_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_48_mb() {
		if (pi_48_mb == 0) {
			pi_48_mb = 1;
			document.getElementById('pi_48_mb_rectangle').style.display = 'block';
		}
		else {
			pi_48_mb = 0;
			document.getElementById('pi_48_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_48_dl() {
		if (bop_48_dl == 0) {
			bop_48_dl = 1;
			document.getElementById('bop_48_dl_rectangle').style.display = 'block';
		}
		else {
			bop_48_dl = 0;
			document.getElementById('bop_48_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_48_l() {
		if (bop_48_l == 0) {
			bop_48_l = 1;
			document.getElementById('bop_48_l_rectangle').style.display = 'block';
		}
		else {
			bop_48_l = 0;
			document.getElementById('bop_48_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_48_ml() {
		if (bop_48_ml == 0) {
			bop_48_ml = 1;
			document.getElementById('bop_48_ml_rectangle').style.display = 'block';
		}
		else {
			bop_48_ml = 0;
			document.getElementById('bop_48_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_48_dl() {
		if (pi_48_dl == 0) {
			pi_48_dl = 1;
			document.getElementById('pi_48_dl_rectangle').style.display = 'block';
		}
		else {
			pi_48_dl = 0;
			document.getElementById('pi_48_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_48_l() {
		if (pi_48_l == 0) {
			pi_48_l = 1;
			document.getElementById('pi_48_l_rectangle').style.display = 'block';
		}
		else {
			pi_48_l = 0;
			document.getElementById('pi_48_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_48_ml() {
		if (pi_48_ml == 0) {
			pi_48_ml = 1;
			document.getElementById('pi_48_ml_rectangle').style.display = 'block';
		}
		else {
			pi_48_ml = 0;
			document.getElementById('pi_48_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_48() {
		if (tooth_48 == 1) {
			
		// Variablen aus dem Formular
			pd_48_db = document.forms[0]["pd_48_db"].value;
			pd_48_b = document.forms[0]["pd_48_b"].value;
			pd_48_mb = document.forms[0]["pd_48_mb"].value;

			if (document.forms[0]["pd_48_dl"].value > 3) {document.forms[0]["pd_48_dl"].style.color = 'red';} else {document.forms[0]["pd_48_dl"].style.color = 'black'};
			if (document.forms[0]["pd_48_l"].value > 3) {document.forms[0]["pd_48_l"].style.color = 'red';} else {document.forms[0]["pd_48_l"].style.color = 'black'};
			if (document.forms[0]["pd_48_ml"].value > 3) {document.forms[0]["pd_48_ml"].style.color = 'red';} else {document.forms[0]["pd_48_ml"].style.color = 'black'};
			
			gm_48_db = document.forms[0]["gm_48_db"].value;
			gm_48_b = document.forms[0]["gm_48_b"].value;
			gm_48_mb = document.forms[0]["gm_48_mb"].value;
			
			pd_48_dl = document.forms[0]["pd_48_dl"].value;
			pd_48_l = document.forms[0]["pd_48_l"].value;
			pd_48_ml = document.forms[0]["pd_48_ml"].value;

			if (document.forms[0]["pd_48_db"].value > 3) {document.forms[0]["pd_48_db"].style.color = 'red';} else {document.forms[0]["pd_48_db"].style.color = 'black'};
			if (document.forms[0]["pd_48_b"].value > 3) {document.forms[0]["pd_48_b"].style.color = 'red';} else {document.forms[0]["pd_48_b"].style.color = 'black'};
			if (document.forms[0]["pd_48_mb"].value > 3) {document.forms[0]["pd_48_mb"].style.color = 'red';} else {document.forms[0]["pd_48_mb"].style.color = 'black'};
			
			gm_48_dl = document.forms[0]["gm_48_dl"].value;
			gm_48_l = document.forms[0]["gm_48_l"].value;
			gm_48_ml = document.forms[0]["gm_48_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 48 (bukkal) in der Bitmap
			var x_db_48 = 296;							// distal 48
			var x_mb_48 = 342;							// mesial 48
			var x_b_48 = (x_db_48 + x_mb_48)/2;			// bukkal 48
			
		// Set der horizontalen Koordinaten von Zahn 48 (lingual) in der Bitmap
			var x_dl_48 = 297;							// distal 48
			var x_ml_48 = 346;							// mesial 48
			var x_l_48 = (x_dl_48 + x_ml_48)/2;			// lingual 48
			
		// Set der vertikalen Koordinaten von Zahn 48 (bukkal) aus dem Formular
			var y_gm_48_db = gm_UK_b - 6.05 * gm_48_db;	// Margo Gingivae distobukkal 48
			var y_gm_48_b = gm_UK_b - 6.05 * gm_48_b;	// Margo Gingivae bukkal 48
			var y_gm_48_mb = gm_UK_b - 6.05 * gm_48_mb;	// Margo Gingivae mesiobukkal 48
			var y_pd_48_db = 6.05 * pd_48_db;			// Sondierungstiefe distobukkal 48
			var y_pd_48_b = 6.05 * pd_48_b;				// Sondierungstiefe bukkal 48
			var y_pd_48_mb = 6.05 * pd_48_mb;			// Sondierungstiefe mesiobukkal 48
			
		// Set der vertikalen Koordinaten von Zahn 48 (lingual) aus dem Formular
			var y_gm_48_dl = gm_UK_l + 6.05 * gm_48_dl;	// Margo Gingivae distolingual 48
			var y_gm_48_l = gm_UK_l + 6.05 * gm_48_l;	// Margo Gingivae lingual 48
			var y_gm_48_ml = gm_UK_l + 6.05 * gm_48_ml;	// Margo Gingivae mesiolingual 48
			var y_pd_48_dl = 6.05 * pd_48_dl;			// Sondierungstiefe distolingual 48
			var y_pd_48_l = 6.05 * pd_48_l;				// Sondierungstiefe lingual 48
			var y_pd_48_ml = 6.05 * pd_48_ml;			// Sondierungstiefe mesiolingual 48
			
		// Berechnung des Attachmentniveaus 48 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_48_db = y_gm_48_db + y_pd_48_db;	// Attachmentniveau distobukkal 48
			var y_al_48_b = y_gm_48_b + y_pd_48_b;		// Attachmentniveau bukkal 48
			var y_al_48_mb = y_gm_48_mb + y_pd_48_mb;	// Attachmentniveau mesiobukkal 48
			
		// Berechnung des Attachmentniveaus 48 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_48_dl = y_gm_48_dl - y_pd_48_dl;	// Attachmentniveau distolingual 48
			var y_al_48_l = y_gm_48_l - y_pd_48_l;		// Attachmentniveau lingual 48
			var y_al_48_ml = y_gm_48_ml - y_pd_48_ml;	// Attachmentniveau mesiolingual 48

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[48].storeCoordinates(
				x_db_48, x_mb_48, x_dl_48, x_ml_48, x_b_48, x_l_48,
				y_gm_48_db, y_gm_48_b, y_gm_48_mb, y_pd_48_db, y_pd_48_b, y_pd_48_mb,
				y_gm_48_dl, y_gm_48_l, y_gm_48_ml, y_pd_48_dl, y_pd_48_l, y_pd_48_ml,
				y_al_48_db, y_al_48_b, y_al_48_mb, y_al_48_dl, y_al_48_l, y_al_48_ml
			);

		// Parodontaltasche 48 bukkal zeichnen
			var string = 
				x_db_48 + ", " + y_al_48_db + "  " + 
				x_b_48 + ", " + y_al_48_b + "  " + 
				x_mb_48 + ", " + y_al_48_mb + "  " + 
				x_mb_48 + ", " + y_gm_48_mb + "  " + 
				x_b_48 + ", " + y_gm_48_b + "  " + 
				x_db_48 + ", " + y_gm_48_db;
			document.getElementById("polygon_48_b").setAttribute("points", string);
		// Attachmentniveau 48 bukkal zeichnen
			var string = 
				x_db_48 + ", " + y_al_48_db + "  " + 
				x_b_48 + ", " + y_al_48_b + "  " + 
				x_mb_48 + ", " + y_al_48_mb;
			document.getElementById("polyline_al_48_b").setAttribute("points", string);
		// Margo Gingivae 48 bukkal zeichnen
			var string =
				x_db_48 + ", " + y_gm_48_db + "  " + 
				x_b_48 + ", " + y_gm_48_b + "  " + 
				x_mb_48 + ", " + y_gm_48_mb;
			document.getElementById("polyline_gm_48_b").setAttribute("points", string);

		// Parodontaltasche 48 lingual zeichnen
			var string = 
				x_dl_48 + ", " + y_al_48_dl + "  " + 
				x_l_48 + ", " + y_al_48_l + "  " + 
				x_ml_48 + ", " + y_al_48_ml + "  " + 
				x_ml_48 + ", " + y_gm_48_ml + "  " + 
				x_l_48 + ", " + y_gm_48_l + "  " + 
				x_dl_48 + ", " + y_gm_48_dl;
			document.getElementById("polygon_48_l").setAttribute("points", string);
		// Attachmentniveau 48 lingual zeichnen
			var string = 
				x_dl_48 + ", " + y_al_48_dl + "  " + 
				x_l_48 + ", " + y_al_48_l + "  " + 
				x_ml_48 + ", " + y_al_48_ml;
			document.getElementById("polyline_al_48_l").setAttribute("points", string);
		// Margo Gingivae 48 lingual zeichnen
			var string =
				x_dl_48 + ", " + y_gm_48_dl + "  " + 
				x_l_48 + ", " + y_gm_48_l + "  " + 
				x_ml_48 + ", " + y_gm_48_ml;
			document.getElementById("polyline_gm_48_l").setAttribute("points", string);
		}
        if (tooth_48 == 1 && tooth_47 == 1) {

            pd_47_db = document.forms[0]["pd_47_db"].value;
			gm_47_db = document.forms[0]["gm_47_db"].value;
			
			pd_47_dl = document.forms[0]["pd_47_dl"].value;
			gm_47_dl = document.forms[0]["gm_47_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 47 (bukkal) in der Bitmap
			var x_db_47 = 358;							// distal 47
			
		// Set der horizontalen Koordinaten von Zahn 47 (lingual) in der Bitmap
			var x_dl_47 = 362;							// distal 47
			
		// Set der vertikalen Koordinaten von Zahn 47 (bukkal) aus dem Formular
			var y_gm_47_db = gm_UK_b - 6.05 * gm_47_db;	// Margo Gingivae distobukkal 47
			var y_pd_47_db = 6.05 * pd_47_db;			// Sondierungstiefe distobukkal 47
			
		// Set der vertikalen Koordinaten von Zahn 47 (lingual) aus dem Formular
			var y_gm_47_dl = gm_UK_l + 6.05 * gm_47_dl;	// Margo Gingivae distolingual 47
			var y_pd_47_dl = 6.05 * pd_47_dl;			// Sondierungstiefe distolingual 47
			
		// Berechnung des Attachmentniveaus 47 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_47_db = y_gm_47_db + y_pd_47_db;	// Attachmentniveau distobukkal 47
			
		// Berechnung des Attachmentniveaus 47 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_47_dl = y_gm_47_dl - y_pd_47_dl;	// Attachmentniveau distolingual 47

		// Parodontaltasche inter_48_47 bukkal zeichnen
			var string = 
				x_mb_48 + ", " + y_al_48_mb + "  " + 
				x_db_47 + ", " + y_al_47_db + "  " + 
				x_db_47 + ", " + y_gm_47_db + "  " + 
				x_mb_48 + ", " + y_gm_48_mb;
			document.getElementById("polygon_inter_48_47_b").setAttribute("points", string);
		// Attachmentniveau inter_48_47 bukkal zeichnen
			var string = 
				x_mb_48 + ", " + y_al_48_mb + "  " + 
				x_db_47 + ", " + y_al_47_db;
			document.getElementById("polyline_al_inter_48_47_b").setAttribute("points", string);
		// Margo Gingivae inter_48_47 bukkal zeichnen
			var string =
				x_mb_48 + ", " + y_gm_48_mb + "  " + 
				x_db_47 + ", " + y_gm_47_db;
			document.getElementById("polyline_gm_inter_48_47_b").setAttribute("points", string);

        // Parodontaltasche inter_48_47 lingual zeichnen
			var string = 
				x_ml_48 + ", " + y_al_48_ml + "  " + 
				x_dl_47 + ", " + y_al_47_dl + "  " + 
				x_dl_47 + ", " + y_gm_47_dl + "  " + 
				x_ml_48 + ", " + y_gm_48_ml;
			document.getElementById("polygon_inter_48_47_l").setAttribute("points", string);
		// Attachmentniveau inter_48_47 lingual zeichnen
			var string = 
				x_ml_48 + ", " + y_al_48_ml + "  " + 
				x_dl_47 + ", " + y_al_47_dl;
			document.getElementById("polyline_al_inter_48_47_l").setAttribute("points", string);
		// Margo Gingivae inter_48_47 lingual zeichnen
			var string =
				x_ml_48 + ", " + y_gm_48_ml + "  " + 
				x_dl_47 + ", " + y_gm_47_dl;
			document.getElementById("polyline_gm_inter_48_47_l").setAttribute("points", string);
		}
	}