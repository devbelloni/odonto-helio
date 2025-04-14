	// Definition der Variablen für das Formular
		var tooth_36 = 1;
		var Furkation_36_b = 0;
		var Furkation_36_l = 0;
		var Implantat_36 = 0;
		var bop_36_db = 0;
		var bop_36_b = 0;
		var bop_36_mb = 0;
		var pi_36_db = 0;
		var pi_36_b = 0;
		var pi_36_mb = 0;
		var bop_36_dl = 0;
		var bop_36_l = 0;
		var bop_36_ml = 0;
		var pi_36_dl = 0;
		var pi_36_l = 0;
		var pi_36_ml = 0;
		var gm_36_db = 0;
		var gm_36_b = 0;
		var gm_36_mb = 0;
		var pd_36_db = 0;
		var pd_36_b = 0;
		var pd_36_mb = 0;
		var gm_36_dl = 0;
		var gm_36_l = 0;
		var gm_36_ml = 0;
		var pd_36_dl = 0;
		var pd_36_l = 0;
		var pd_36_ml = 0;

	function clear_data_36() {
        if (tooth_36 == 1) {
			gm_36_db = 0;
			gm_36_b = 0;
			gm_36_mb = 0;
			pd_36_db = 0;
			pd_36_b = 0;
			pd_36_mb = 0;
	
				document.getElementById('gm_36_db_txt').value = 0;
				document.getElementById('gm_36_b_txt').value = 0;
				document.getElementById('gm_36_mb_txt').value = 0;
				
				document.getElementById('pd_36_db_txt').value = 0;
				document.getElementById('pd_36_b_txt').value = 0;
				document.getElementById('pd_36_mb_txt').value = 0;
			
				document.forms[0]["pd_36_db"].style.color = 'black'
				document.forms[0]["pd_36_b"].style.color = 'black'
				document.forms[0]["pd_36_mb"].style.color = 'black'
			
			gm_36_dl = 0;
			gm_36_l = 0;
			gm_36_ml = 0;
			pd_36_dl = 0;
			pd_36_l = 0;
			pd_36_ml = 0;

				document.getElementById('gm_36_dl_txt').value = 0;
				document.getElementById('gm_36_l_txt').value = 0;
				document.getElementById('gm_36_ml_txt').value = 0;
				
				document.getElementById('pd_36_dl_txt').value = 0;
				document.getElementById('pd_36_l_txt').value = 0;
				document.getElementById('pd_36_ml_txt').value = 0;

				document.forms[0]["pd_36_dl"].style.color = 'black'
				document.forms[0]["pd_36_l"].style.color = 'black'
				document.forms[0]["pd_36_ml"].style.color = 'black'
			
			change_probing_36();
			
			mobility_36 = 0;

				document.getElementById('mobility_36_txt').value = "0";

			note_36 = "";

				document.getElementById('note_36_txt').value = "";

			Furkation_36_b = 0;
			Furkation_36_l = 0;

				document.getElementById('furkation_1_36_b').style.display = 'none';
				document.getElementById('furkation_2_36_b').style.display = 'none';
				document.getElementById('furkation_3_36_b').style.display = 'none';
					
				document.getElementById('furkation_1_36_b_tab').style.display = 'none';
				document.getElementById('furkation_2_36_b_tab').style.display = 'none';
				document.getElementById('furkation_3_36_b_tab').style.display = 'none';
				
				document.getElementById('furkation_1_36_l').style.display = 'none';
				document.getElementById('furkation_2_36_l').style.display = 'none';
				document.getElementById('furkation_3_36_l').style.display = 'none';
					
				document.getElementById('furkation_1_36_l_tab').style.display = 'none';
				document.getElementById('furkation_2_36_l_tab').style.display = 'none';
				document.getElementById('furkation_3_36_l_tab').style.display = 'none';
				
			bop_36_db = 0;
			bop_36_b = 0;
			bop_36_mb = 0;
					
			bop_36_dl = 0;
			bop_36_l = 0;
			bop_36_ml = 0;
					
				document.getElementById('bop_36_db_rectangle').style.display = 'none';
				document.getElementById('bop_36_b_rectangle').style.display = 'none';
				document.getElementById('bop_36_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_36_dl_rectangle').style.display = 'none';
				document.getElementById('bop_36_l_rectangle').style.display = 'none';
				document.getElementById('bop_36_ml_rectangle').style.display = 'none';
				
			pi_36_db = 0;
			pi_36_b = 0;
			pi_36_mb = 0;
					
			pi_36_dl = 0;
			pi_36_l = 0;
			pi_36_ml = 0;

				document.getElementById('pi_36_db_rectangle').style.display = 'none';
				document.getElementById('pi_36_b_rectangle').style.display = 'none';
				document.getElementById('pi_36_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_36_dl_rectangle').style.display = 'none';
				document.getElementById('pi_36_l_rectangle').style.display = 'none';
				document.getElementById('pi_36_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_36() {
		if (tooth_36 === 1) {
			tooth_36 = 0;
			document.getElementById('tooth_line_36_b').style.display = 'block';
			document.getElementById('tooth_line_36_l').style.display = 'block';
			
			document.getElementById('mobility_36_txt').style.display = 'none';
			
			document.getElementById('implantat_36_btn').style.display = 'none';
			document.getElementById('implantat_36_tab').style.display = 'none';
			document.getElementById('implantat_36_b_image').style.display = 'none';
			document.getElementById('implantat_36_l_image').style.display = 'none';
			
			document.getElementById('furkation_36_b_btn').style.display = 'none';
			document.getElementById('furkation_36_l_btn').style.display = 'none';
			
			document.getElementById('furkation_1_36_b').style.display = 'none';
			document.getElementById('furkation_2_36_b').style.display = 'none';
			document.getElementById('furkation_3_36_b').style.display = 'none';
			
			document.getElementById('furkation_1_36_b_tab').style.display = 'none';
			document.getElementById('furkation_2_36_b_tab').style.display = 'none';
			document.getElementById('furkation_3_36_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_36_l').style.display = 'none';
			document.getElementById('furkation_2_36_l').style.display = 'none';
			document.getElementById('furkation_3_36_l').style.display = 'none';
			
			document.getElementById('furkation_1_36_l_tab').style.display = 'none';
			document.getElementById('furkation_2_36_l_tab').style.display = 'none';
			document.getElementById('furkation_3_36_l_tab').style.display = 'none';
			
			document.getElementById('gm_36_db_txt').style.display = 'none';
			document.getElementById('gm_36_b_txt').style.display = 'none';
			document.getElementById('gm_36_mb_txt').style.display = 'none';
			
			document.getElementById('pd_36_db_txt').style.display = 'none';
			document.getElementById('pd_36_b_txt').style.display = 'none';
			document.getElementById('pd_36_mb_txt').style.display = 'none';
			
			document.getElementById('gm_36_dl_txt').style.display = 'none';
			document.getElementById('gm_36_l_txt').style.display = 'none';
			document.getElementById('gm_36_ml_txt').style.display = 'none';
			
			document.getElementById('pd_36_dl_txt').style.display = 'none';
			document.getElementById('pd_36_l_txt').style.display = 'none';
			document.getElementById('pd_36_ml_txt').style.display = 'none';
						
			document.getElementById('bop_36_db_rectangle').style.display = 'none';
			document.getElementById('bop_36_b_rectangle').style.display = 'none';
			document.getElementById('bop_36_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_36_dl_rectangle').style.display = 'none';
			document.getElementById('bop_36_l_rectangle').style.display = 'none';
			document.getElementById('bop_36_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_36_db_btn').style.display = 'none';
			document.getElementById('bop_36_b_btn').style.display = 'none';
			document.getElementById('bop_36_mb_btn').style.display = 'none';
			
			document.getElementById('bop_36_dl_btn').style.display = 'none';
			document.getElementById('bop_36_l_btn').style.display = 'none';
			document.getElementById('bop_36_ml_btn').style.display = 'none';
			
			document.getElementById('pi_36_db_rectangle').style.display = 'none';
			document.getElementById('pi_36_b_rectangle').style.display = 'none';
			document.getElementById('pi_36_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_36_dl_rectangle').style.display = 'none';
			document.getElementById('pi_36_l_rectangle').style.display = 'none';
			document.getElementById('pi_36_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_36_db_btn').style.display = 'none';
			document.getElementById('pi_36_b_btn').style.display = 'none';
			document.getElementById('pi_36_mb_btn').style.display = 'none';
			
			document.getElementById('pi_36_dl_btn').style.display = 'none';
			document.getElementById('pi_36_l_btn').style.display = 'none';
			document.getElementById('pi_36_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_36_b').style.display = 'none';
			document.getElementById('polyline_al_36_b').style.display = 'none';
			document.getElementById('polyline_gm_36_b').style.display = 'none';
			
			document.getElementById('polygon_36_l').style.display = 'none';
			document.getElementById('polyline_al_36_l').style.display = 'none';
			document.getElementById('polyline_gm_36_l').style.display = 'none';
			
			document.getElementById('polygon_inter_37_36_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_37_36_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_37_36_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_37_36_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_37_36_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_37_36_l').style.display = 'none';            
            
			document.getElementById('polygon_inter_36_35_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_36_35_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_36_35_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_36_35_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_36_35_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_36_35_l').style.display = 'none';            
			
			document.getElementById('note_36_txt').style.display = 'none';
		}
		else if (Implantat_36 !== 1) {
			tooth_36 = 1;
			document.getElementById('tooth_line_36_b').style.display = 'none';
			document.getElementById('tooth_line_36_l').style.display = 'none';

			document.getElementById('mobility_36_txt').style.display = 'block';

			document.getElementById('implantat_36_btn').style.display = 'block';

			document.getElementById('furkation_36_b_btn').style.display = 'block';
			document.getElementById('furkation_36_l_btn').style.display = 'block';
			
			document.getElementById('gm_36_db_txt').style.display = 'block';
			document.getElementById('gm_36_b_txt').style.display = 'block';
			document.getElementById('gm_36_mb_txt').style.display = 'block';
			
			document.getElementById('pd_36_db_txt').style.display = 'block';
			document.getElementById('pd_36_b_txt').style.display = 'block';
			document.getElementById('pd_36_mb_txt').style.display = 'block';
			
			document.getElementById('gm_36_dl_txt').style.display = 'block';
			document.getElementById('gm_36_l_txt').style.display = 'block';
			document.getElementById('gm_36_ml_txt').style.display = 'block';
			
			document.getElementById('pd_36_dl_txt').style.display = 'block';
			document.getElementById('pd_36_l_txt').style.display = 'block';
			document.getElementById('pd_36_ml_txt').style.display = 'block';
			
			document.getElementById('note_36_txt').style.display = 'block';

			document.getElementById('polygon_36_b').style.display = 'block';
			document.getElementById('polyline_al_36_b').style.display = 'block';
			document.getElementById('polyline_gm_36_b').style.display = 'block';
			
			document.getElementById('polygon_36_l').style.display = 'block';
			document.getElementById('polyline_al_36_l').style.display = 'block';
			document.getElementById('polyline_gm_36_l').style.display = 'block';

            if (tooth_37 == 1 && tooth_36 == 1) {
				document.getElementById('polygon_inter_37_36_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_37_36_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_37_36_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_37_36_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_37_36_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_37_36_l').style.display = 'block';            
            }
            
            if (tooth_36 == 1 && tooth_35 == 1) {
				document.getElementById('polygon_inter_36_35_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_36_35_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_36_35_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_36_35_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_36_35_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_36_35_l').style.display = 'block';            
            }

			if (Furkation_36_b == 1) {
				document.getElementById('furkation_1_36_b').style.display = 'block';
			} else if (Furkation_36_b == 2) {
				document.getElementById('furkation_2_36_b').style.display = 'block';
			} else if (Furkation_36_b == 3) {
				document.getElementById('furkation_3_36_b').style.display = 'block';
			}
			if (Furkation_36_b == 1) {
				document.getElementById('furkation_1_36_b_tab').style.display = 'block';
			} else if (Furkation_36_b == 2) {
				document.getElementById('furkation_2_36_b_tab').style.display = 'block';
			} else if (Furkation_36_b == 3) {
				document.getElementById('furkation_3_36_b_tab').style.display = 'block';
			}
			if (Furkation_36_l == 1) {
				document.getElementById('furkation_1_36_l').style.display = 'block';
			} else if (Furkation_36_l == 2) {
				document.getElementById('furkation_2_36_l').style.display = 'block';
			} else if (Furkation_36_l == 3) {
				document.getElementById('furkation_3_36_l').style.display = 'block';
			}
			if (Furkation_36_l == 1) {
				document.getElementById('furkation_1_36_l_tab').style.display = 'block';
			} else if (Furkation_36_l == 2) {
				document.getElementById('furkation_2_36_l_tab').style.display = 'block';
			} else if (Furkation_36_l == 3) {
				document.getElementById('furkation_3_36_l_tab').style.display = 'block';
			}

			document.getElementById('bop_36_db_btn').style.display = 'block';
			document.getElementById('bop_36_b_btn').style.display = 'block';
			document.getElementById('bop_36_mb_btn').style.display = 'block';

			document.getElementById('bop_36_dl_btn').style.display = 'block';
			document.getElementById('bop_36_l_btn').style.display = 'block';
			document.getElementById('bop_36_ml_btn').style.display = 'block';
			
			if (bop_36_db == 1) {
				document.getElementById('bop_36_db_rectangle').style.display = 'block';
			}
			if (bop_36_b == 1) {
				document.getElementById('bop_36_b_rectangle').style.display = 'block';
			}
			if (bop_36_mb == 1) {
				document.getElementById('bop_36_mb_rectangle').style.display = 'block';
			}
			if (bop_36_dl == 1) {
				document.getElementById('bop_36_dl_rectangle').style.display = 'block';
			}
			if (bop_36_l == 1) {
				document.getElementById('bop_36_l_rectangle').style.display = 'block';
			}
			if (bop_36_ml == 1) {
				document.getElementById('bop_36_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_36_db_btn').style.display = 'block';
			document.getElementById('pi_36_b_btn').style.display = 'block';
			document.getElementById('pi_36_mb_btn').style.display = 'block';

			document.getElementById('pi_36_dl_btn').style.display = 'block';
			document.getElementById('pi_36_l_btn').style.display = 'block';
			document.getElementById('pi_36_ml_btn').style.display = 'block';
			
			if (pi_36_db == 1) {
				document.getElementById('pi_36_db_rectangle').style.display = 'block';
			}
			if (pi_36_b == 1) {
				document.getElementById('pi_36_b_rectangle').style.display = 'block';
			}
			if (pi_36_mb == 1) {
				document.getElementById('pi_36_mb_rectangle').style.display = 'block';
			}
			if (pi_36_dl == 1) {
				document.getElementById('pi_36_dl_rectangle').style.display = 'block';
			}
			if (pi_36_l == 1) {
				document.getElementById('pi_36_l_rectangle').style.display = 'block';
			}
			if (pi_36_ml == 1) {
				document.getElementById('pi_36_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_36 == 1) {
			tooth_36 = 1;
			document.getElementById('tooth_line_36_b').style.display = 'none';
			document.getElementById('tooth_line_36_l').style.display = 'none';

			document.getElementById('mobility_36_txt').style.display = 'block';
			
			document.getElementById('note_36_txt').style.display = 'block';

			document.getElementById('implantat_36_btn').style.display = 'block';
			document.getElementById('implantat_36_tab').style.display = 'block';
			document.getElementById('implantat_36_b_image').style.display = 'block';
			document.getElementById('implantat_36_l_image').style.display = 'block';

			document.getElementById('gm_36_db_txt').style.display = 'block';
			document.getElementById('gm_36_b_txt').style.display = 'block';
			document.getElementById('gm_36_mb_txt').style.display = 'block';
			
			document.getElementById('pd_36_db_txt').style.display = 'block';
			document.getElementById('pd_36_b_txt').style.display = 'block';
			document.getElementById('pd_36_mb_txt').style.display = 'block';
			
			document.getElementById('gm_36_dl_txt').style.display = 'block';
			document.getElementById('gm_36_l_txt').style.display = 'block';
			document.getElementById('gm_36_ml_txt').style.display = 'block';
			
			document.getElementById('pd_36_dl_txt').style.display = 'block';
			document.getElementById('pd_36_l_txt').style.display = 'block';
			document.getElementById('pd_36_ml_txt').style.display = 'block';

			document.getElementById('polygon_36_b').style.display = 'block';
			document.getElementById('polyline_al_36_b').style.display = 'block';
			document.getElementById('polyline_gm_36_b').style.display = 'block';
			
			document.getElementById('polygon_36_l').style.display = 'block';
			document.getElementById('polyline_al_36_l').style.display = 'block';
			document.getElementById('polyline_gm_36_l').style.display = 'block';

            if (tooth_37 == 1 && tooth_36 == 1) {
				document.getElementById('polygon_inter_37_36_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_37_36_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_37_36_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_37_36_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_37_36_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_37_36_l').style.display = 'block';            
            }
            
            if (tooth_36 == 1 && tooth_35 == 1) {
				document.getElementById('polygon_inter_36_35_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_36_35_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_36_35_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_36_35_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_36_35_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_36_35_l').style.display = 'block';            
            }

			document.getElementById('bop_36_db_btn').style.display = 'block';
			document.getElementById('bop_36_b_btn').style.display = 'block';
			document.getElementById('bop_36_mb_btn').style.display = 'block';

			document.getElementById('bop_36_dl_btn').style.display = 'block';
			document.getElementById('bop_36_l_btn').style.display = 'block';
			document.getElementById('bop_36_ml_btn').style.display = 'block';
			
			document.getElementById('pi_36_db_btn').style.display = 'block';
			document.getElementById('pi_36_b_btn').style.display = 'block';
			document.getElementById('pi_36_mb_btn').style.display = 'block';

			document.getElementById('pi_36_dl_btn').style.display = 'block';
			document.getElementById('pi_36_l_btn').style.display = 'block';
			document.getElementById('pi_36_ml_btn').style.display = 'block';
			
			if (bop_36_db == 1) {
				document.getElementById('bop_36_db_rectangle').style.display = 'block';
			}
			if (bop_36_b == 1) {
				document.getElementById('bop_36_b_rectangle').style.display = 'block';
			}
			if (bop_36_mb == 1) {
				document.getElementById('bop_36_mb_rectangle').style.display = 'block';
			}
			if (bop_36_dl == 1) {
				document.getElementById('bop_36_dl_rectangle').style.display = 'block';
			}
			if (bop_36_l == 1) {
				document.getElementById('bop_36_l_rectangle').style.display = 'block';
			}
			if (bop_36_ml == 1) {
				document.getElementById('bop_36_ml_rectangle').style.display = 'block';
			}
			
			if (pi_36_db == 1) {
				document.getElementById('pi_36_db_rectangle').style.display = 'block';
			}
			if (pi_36_b == 1) {
				document.getElementById('pi_36_b_rectangle').style.display = 'block';
			}
			if (pi_36_mb == 1) {
				document.getElementById('pi_36_mb_rectangle').style.display = 'block';
			}
			if (pi_36_dl == 1) {
				document.getElementById('pi_36_dl_rectangle').style.display = 'block';
			}
			if (pi_36_l == 1) {
				document.getElementById('pi_36_l_rectangle').style.display = 'block';
			}
			if (pi_36_ml == 1) {
				document.getElementById('pi_36_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_36();
	}

	function toggle_implant_36() {
		if (Implantat_36 == 0) {
			Implantat_36 = 1;
			
			document.getElementById('implantat_36_b_image').style.display = 'block';
			document.getElementById('implantat_36_l_image').style.display = 'block';
			document.getElementById('implantat_36_tab').style.display = 'block';
			
			document.getElementById('furkation_36_b_btn').style.display = 'none';
			document.getElementById('furkation_36_l_btn').style.display = 'none';
			
			document.getElementById('furkation_1_36_b').style.display = 'none';
			document.getElementById('furkation_2_36_b').style.display = 'none';
			document.getElementById('furkation_3_36_b').style.display = 'none';
			
			document.getElementById('furkation_1_36_b_tab').style.display = 'none';
			document.getElementById('furkation_2_36_b_tab').style.display = 'none';
			document.getElementById('furkation_3_36_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_36_l').style.display = 'none';
			document.getElementById('furkation_2_36_l').style.display = 'none';
			document.getElementById('furkation_3_36_l').style.display = 'none';
			
			document.getElementById('furkation_1_36_l_tab').style.display = 'none';
			document.getElementById('furkation_2_36_l_tab').style.display = 'none';
			document.getElementById('furkation_3_36_l_tab').style.display = 'none';
		}
		else {
			Implantat_36 = 0;
			
			document.getElementById('implantat_36_b_image').style.display = 'none';
			document.getElementById('implantat_36_l_image').style.display = 'none';
			document.getElementById('implantat_36_tab').style.display = 'none';
			
			document.getElementById('furkation_36_b_btn').style.display = 'block';
			document.getElementById('furkation_36_l_btn').style.display = 'block';

			if (Furkation_36_b == 1) {
				document.getElementById('furkation_1_36_b').style.display = 'block';
			} else if (Furkation_36_b == 2) {
				document.getElementById('furkation_2_36_b').style.display = 'block';
			} else if (Furkation_36_b == 3) {
				document.getElementById('furkation_3_36_b').style.display = 'block';
			}
			if (Furkation_36_b == 1) {
				document.getElementById('furkation_1_36_b_tab').style.display = 'block';
			} else if (Furkation_36_b == 2) {
				document.getElementById('furkation_2_36_b_tab').style.display = 'block';
			} else if (Furkation_36_b == 3) {
				document.getElementById('furkation_3_36_b_tab').style.display = 'block';
			}
			if (Furkation_36_l == 1) {
				document.getElementById('furkation_1_36_l').style.display = 'block';
			} else if (Furkation_36_l == 2) {
				document.getElementById('furkation_2_36_l').style.display = 'block';
			} else if (Furkation_36_l == 3) {
				document.getElementById('furkation_3_36_l').style.display = 'block';
			}
			if (Furkation_36_l == 1) {
				document.getElementById('furkation_1_36_l_tab').style.display = 'block';
			} else if (Furkation_36_l == 2) {
				document.getElementById('furkation_2_36_l_tab').style.display = 'block';
			} else if (Furkation_36_l == 3) {
				document.getElementById('furkation_3_36_l_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_36_b() {
		if (Furkation_36_b == 0) {
			document.getElementById('furkation_1_36_b_tab').style.display = 'block';
			document.getElementById('furkation_2_36_b_tab').style.display = 'none';
			document.getElementById('furkation_3_36_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_36_b').style.display = 'block';
			document.getElementById('furkation_2_36_b').style.display = 'none';
			document.getElementById('furkation_3_36_b').style.display = 'none';

			Furkation_36_b = 1;
		}
		else if (Furkation_36_b == 1) {
			document.getElementById('furkation_1_36_b_tab').style.display = 'none';
			document.getElementById('furkation_2_36_b_tab').style.display = 'block';
			document.getElementById('furkation_3_36_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_36_b').style.display = 'none';
			document.getElementById('furkation_2_36_b').style.display = 'block';
			document.getElementById('furkation_3_36_b').style.display = 'none';
			
			Furkation_36_b = 2;
		}
		else if (Furkation_36_b == 2) {
			document.getElementById('furkation_1_36_b_tab').style.display = 'none';
			document.getElementById('furkation_2_36_b_tab').style.display = 'none';
			document.getElementById('furkation_3_36_b_tab').style.display = 'block';
			
			document.getElementById('furkation_1_36_b').style.display = 'none';
			document.getElementById('furkation_2_36_b').style.display = 'none';
			document.getElementById('furkation_3_36_b').style.display = 'block';
						
			Furkation_36_b = 3;
		}
		else if (Furkation_36_b == 3) {
			document.getElementById('furkation_1_36_b_tab').style.display = 'none';
			document.getElementById('furkation_2_36_b_tab').style.display = 'none';
			document.getElementById('furkation_3_36_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_36_b').style.display = 'none';
			document.getElementById('furkation_2_36_b').style.display = 'none';
			document.getElementById('furkation_3_36_b').style.display = 'none';
						
			Furkation_36_b = 0;
		}
	}

	function toggle_furcation_36_l() {
		if (Furkation_36_l == 0) {
			document.getElementById('furkation_1_36_l_tab').style.display = 'block';
			document.getElementById('furkation_2_36_l_tab').style.display = 'none';
			document.getElementById('furkation_3_36_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_36_l').style.display = 'block';
			document.getElementById('furkation_2_36_l').style.display = 'none';
			document.getElementById('furkation_3_36_l').style.display = 'none';

			Furkation_36_l = 1;
		}
		else if (Furkation_36_l == 1) {
			document.getElementById('furkation_1_36_l_tab').style.display = 'none';
			document.getElementById('furkation_2_36_l_tab').style.display = 'block';
			document.getElementById('furkation_3_36_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_36_l').style.display = 'none';
			document.getElementById('furkation_2_36_l').style.display = 'block';
			document.getElementById('furkation_3_36_l').style.display = 'none';
			
			Furkation_36_l = 2;
		}
		else if (Furkation_36_l == 2) {
			document.getElementById('furkation_1_36_l_tab').style.display = 'none';
			document.getElementById('furkation_2_36_l_tab').style.display = 'none';
			document.getElementById('furkation_3_36_l_tab').style.display = 'block';
			
			document.getElementById('furkation_1_36_l').style.display = 'none';
			document.getElementById('furkation_2_36_l').style.display = 'none';
			document.getElementById('furkation_3_36_l').style.display = 'block';
						
			Furkation_36_l = 3;
		}
		else if (Furkation_36_l == 3) {
			document.getElementById('furkation_1_36_l_tab').style.display = 'none';
			document.getElementById('furkation_2_36_l_tab').style.display = 'none';
			document.getElementById('furkation_3_36_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_36_l').style.display = 'none';
			document.getElementById('furkation_2_36_l').style.display = 'none';
			document.getElementById('furkation_3_36_l').style.display = 'none';
						
			Furkation_36_l = 0;
		}
	}

	function toggle_bop_36_db() {
		if (bop_36_db == 0) {
			bop_36_db = 1;
			document.getElementById('bop_36_db_rectangle').style.display = 'block';
		}
		else {
			bop_36_db = 0;
			document.getElementById('bop_36_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_36_b() {
		if (bop_36_b == 0) {
			bop_36_b = 1;
			document.getElementById('bop_36_b_rectangle').style.display = 'block';
		}
		else {
			bop_36_b = 0;
			document.getElementById('bop_36_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_36_mb() {
		if (bop_36_mb == 0) {
			bop_36_mb = 1;
			document.getElementById('bop_36_mb_rectangle').style.display = 'block';
		}
		else {
			bop_36_mb = 0;
			document.getElementById('bop_36_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_36_db() {
		if (pi_36_db == 0) {
			pi_36_db = 1;
			document.getElementById('pi_36_db_rectangle').style.display = 'block';
		}
		else {
			pi_36_db = 0;
			document.getElementById('pi_36_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_36_b() {
		if (pi_36_b == 0) {
			pi_36_b = 1;
			document.getElementById('pi_36_b_rectangle').style.display = 'block';
		}
		else {
			pi_36_b = 0;
			document.getElementById('pi_36_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_36_mb() {
		if (pi_36_mb == 0) {
			pi_36_mb = 1;
			document.getElementById('pi_36_mb_rectangle').style.display = 'block';
		}
		else {
			pi_36_mb = 0;
			document.getElementById('pi_36_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_36_dl() {
		if (bop_36_dl == 0) {
			bop_36_dl = 1;
			document.getElementById('bop_36_dl_rectangle').style.display = 'block';
		}
		else {
			bop_36_dl = 0;
			document.getElementById('bop_36_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_36_l() {
		if (bop_36_l == 0) {
			bop_36_l = 1;
			document.getElementById('bop_36_l_rectangle').style.display = 'block';
		}
		else {
			bop_36_l = 0;
			document.getElementById('bop_36_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_36_ml() {
		if (bop_36_ml == 0) {
			bop_36_ml = 1;
			document.getElementById('bop_36_ml_rectangle').style.display = 'block';
		}
		else {
			bop_36_ml = 0;
			document.getElementById('bop_36_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_36_dl() {
		if (pi_36_dl == 0) {
			pi_36_dl = 1;
			document.getElementById('pi_36_dl_rectangle').style.display = 'block';
		}
		else {
			pi_36_dl = 0;
			document.getElementById('pi_36_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_36_l() {
		if (pi_36_l == 0) {
			pi_36_l = 1;
			document.getElementById('pi_36_l_rectangle').style.display = 'block';
		}
		else {
			pi_36_l = 0;
			document.getElementById('pi_36_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_36_ml() {
		if (pi_36_ml == 0) {
			pi_36_ml = 1;
			document.getElementById('pi_36_ml_rectangle').style.display = 'block';
		}
		else {
			pi_36_ml = 0;
			document.getElementById('pi_36_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_36() {
		if (tooth_36 == 1) {
			
		// Variablen aus dem Formular
			pd_36_db = document.forms[0]["pd_36_db"].value;
			pd_36_b = document.forms[0]["pd_36_b"].value;
			pd_36_mb = document.forms[0]["pd_36_mb"].value;

			if (document.forms[0]["pd_36_dl"].value > 3) {document.forms[0]["pd_36_dl"].style.color = 'red';} else {document.forms[0]["pd_36_dl"].style.color = 'black'};
			if (document.forms[0]["pd_36_l"].value > 3) {document.forms[0]["pd_36_l"].style.color = 'red';} else {document.forms[0]["pd_36_l"].style.color = 'black'};
			if (document.forms[0]["pd_36_ml"].value > 3) {document.forms[0]["pd_36_ml"].style.color = 'red';} else {document.forms[0]["pd_36_ml"].style.color = 'black'};
			
			gm_36_db = document.forms[0]["gm_36_db"].value;
			gm_36_b = document.forms[0]["gm_36_b"].value;
			gm_36_mb = document.forms[0]["gm_36_mb"].value;
			
			pd_36_dl = document.forms[0]["pd_36_dl"].value;
			pd_36_l = document.forms[0]["pd_36_l"].value;
			pd_36_ml = document.forms[0]["pd_36_ml"].value;

			if (document.forms[0]["pd_36_db"].value > 3) {document.forms[0]["pd_36_db"].style.color = 'red';} else {document.forms[0]["pd_36_db"].style.color = 'black'};
			if (document.forms[0]["pd_36_b"].value > 3) {document.forms[0]["pd_36_b"].style.color = 'red';} else {document.forms[0]["pd_36_b"].style.color = 'black'};
			if (document.forms[0]["pd_36_mb"].value > 3) {document.forms[0]["pd_36_mb"].style.color = 'red';} else {document.forms[0]["pd_36_mb"].style.color = 'black'};
			
			gm_36_dl = document.forms[0]["gm_36_dl"].value;
			gm_36_l = document.forms[0]["gm_36_l"].value;
			gm_36_ml = document.forms[0]["gm_36_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 36 (bukkal) in der Bitmap
			var x_db_36 = 936;							// distal 36
			var x_mb_36 = 887;							// mesial 36
			var x_b_36 = (x_db_36 + x_mb_36)/2;			// bukkal 36
			
		// Set der horizontalen Koordinaten von Zahn 36 (lingual) in der Bitmap
			var x_dl_36 = 932;							// distal 36
			var x_ml_36 = 887;							// mesial 36
			var x_l_36 = (x_dl_36 + x_ml_36)/2;			// lingual 36
			
		// Set der vertikalen Koordinaten von Zahn 36 (bukkal) aus dem Formular
			var y_gm_36_db = gm_UK_b - 6.05 * gm_36_db;	// Margo Gingivae distobukkal 36
			var y_gm_36_b = gm_UK_b - 6.05 * gm_36_b;	// Margo Gingivae bukkal 36
			var y_gm_36_mb = gm_UK_b - 6.05 * gm_36_mb;	// Margo Gingivae mesiobukkal 36
			var y_pd_36_db = 6.05 * pd_36_db;			// Sondierungstiefe distobukkal 36
			var y_pd_36_b = 6.05 * pd_36_b;				// Sondierungstiefe bukkal 36
			var y_pd_36_mb = 6.05 * pd_36_mb;			// Sondierungstiefe mesiobukkal 36
			
		// Set der vertikalen Koordinaten von Zahn 36 (lingual) aus dem Formular
			var y_gm_36_dl = gm_UK_l + 6.05 * gm_36_dl;	// Margo Gingivae distolingual 36
			var y_gm_36_l = gm_UK_l + 6.05 * gm_36_l;	// Margo Gingivae lingual 36
			var y_gm_36_ml = gm_UK_l + 6.05 * gm_36_ml;	// Margo Gingivae mesiolingual 36
			var y_pd_36_dl = 6.05 * pd_36_dl;			// Sondierungstiefe distolingual 36
			var y_pd_36_l = 6.05 * pd_36_l;				// Sondierungstiefe lingual 36
			var y_pd_36_ml = 6.05 * pd_36_ml;			// Sondierungstiefe mesiolingual 36
			
		// Berechnung des Attachmentniveaus 36 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_36_db = y_gm_36_db + y_pd_36_db;	// Attachmentniveau distobukkal 36
			var y_al_36_b = y_gm_36_b + y_pd_36_b;		// Attachmentniveau bukkal 36
			var y_al_36_mb = y_gm_36_mb + y_pd_36_mb;	// Attachmentniveau mesiobukkal 36
			
		// Berechnung des Attachmentniveaus 36 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_36_dl = y_gm_36_dl - y_pd_36_dl;	// Attachmentniveau distolingual 36
			var y_al_36_l = y_gm_36_l - y_pd_36_l;		// Attachmentniveau lingual 36
			var y_al_36_ml = y_gm_36_ml - y_pd_36_ml;	// Attachmentniveau mesiolingual 36

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[36].storeCoordinates(
				x_db_36, x_mb_36, x_dl_36, x_ml_36, x_b_36, x_l_36,
				y_gm_36_db, y_gm_36_b, y_gm_36_mb, y_pd_36_db, y_pd_36_b, y_pd_36_mb,
				y_gm_36_dl, y_gm_36_l, y_gm_36_ml, y_pd_36_dl, y_pd_36_l, y_pd_36_ml,
				y_al_36_db, y_al_36_b, y_al_36_mb, y_al_36_dl, y_al_36_l, y_al_36_ml
			);

		// Parodontaltasche 36 bukkal zeichnen
			var string = 
				x_db_36 + ", " + y_al_36_db + "  " + 
				x_b_36 + ", " + y_al_36_b + "  " + 
				x_mb_36 + ", " + y_al_36_mb + "  " + 
				x_mb_36 + ", " + y_gm_36_mb + "  " + 
				x_b_36 + ", " + y_gm_36_b + "  " + 
				x_db_36 + ", " + y_gm_36_db;
			document.getElementById("polygon_36_b").setAttribute("points", string);
		// Attachmentniveau 36 bukkal zeichnen
			var string = 
				x_db_36 + ", " + y_al_36_db + "  " + 
				x_b_36 + ", " + y_al_36_b + "  " + 
				x_mb_36 + ", " + y_al_36_mb;
			document.getElementById("polyline_al_36_b").setAttribute("points", string);
		// Margo Gingivae 36 bukkal zeichnen
			var string =
				x_db_36 + ", " + y_gm_36_db + "  " + 
				x_b_36 + ", " + y_gm_36_b + "  " + 
				x_mb_36 + ", " + y_gm_36_mb;
			document.getElementById("polyline_gm_36_b").setAttribute("points", string);

		// Parodontaltasche 36 lingual zeichnen
			var string = 
				x_dl_36 + ", " + y_al_36_dl + "  " + 
				x_l_36 + ", " + y_al_36_l + "  " + 
				x_ml_36 + ", " + y_al_36_ml + "  " + 
				x_ml_36 + ", " + y_gm_36_ml + "  " + 
				x_l_36 + ", " + y_gm_36_l + "  " + 
				x_dl_36 + ", " + y_gm_36_dl;
			document.getElementById("polygon_36_l").setAttribute("points", string);
		// Attachmentniveau 36 lingual zeichnen
			var string = 
				x_dl_36 + ", " + y_al_36_dl + "  " + 
				x_l_36 + ", " + y_al_36_l + "  " + 
				x_ml_36 + ", " + y_al_36_ml;
			document.getElementById("polyline_al_36_l").setAttribute("points", string);
		// Margo Gingivae 36 lingual zeichnen
			var string =
				x_dl_36 + ", " + y_gm_36_dl + "  " + 
				x_l_36 + ", " + y_gm_36_l + "  " + 
				x_ml_36 + ", " + y_gm_36_ml;
			document.getElementById("polyline_gm_36_l").setAttribute("points", string);
		}
        if (tooth_36 == 1 && tooth_35 == 1) {

            pd_35_db = document.forms[0]["pd_35_db"].value;
			gm_35_db = document.forms[0]["gm_35_db"].value;
			
			pd_35_dl = document.forms[0]["pd_35_dl"].value;
			gm_35_dl = document.forms[0]["gm_35_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 35 (bukkal) in der Bitmap
			var x_db_35 = 864;							// distal 35
			
		// Set der horizontalen Koordinaten von Zahn 35 (lingual) in der Bitmap
			var x_dl_35 = 868;							// distal 35
			
		// Set der vertikalen Koordinaten von Zahn 35 (bukkal) aus dem Formular
			var y_gm_35_db = gm_UK_b - 6.05 * gm_35_db;	// Margo Gingivae distobukkal 35
			var y_pd_35_db = 6.05 * pd_35_db;			// Sondierungstiefe distobukkal 35
			
		// Set der vertikalen Koordinaten von Zahn 35 (lingual) aus dem Formular
			var y_gm_35_dl = gm_UK_l + 6.05 * gm_35_dl;	// Margo Gingivae distolingual 35
			var y_pd_35_dl = 6.05 * pd_35_dl;			// Sondierungstiefe distolingual 35
			
		// Berechnung des Attachmentniveaus 35 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_35_db = y_gm_35_db + y_pd_35_db;	// Attachmentniveau distobukkal 35
			
		// Berechnung des Attachmentniveaus 35 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_35_dl = y_gm_35_dl - y_pd_35_dl;	// Attachmentniveau distolingual 35

		// Parodontaltasche inter_36_35 bukkal zeichnen
			var string = 
				x_mb_36 + ", " + y_al_36_mb + "  " + 
				x_db_35 + ", " + y_al_35_db + "  " + 
				x_db_35 + ", " + y_gm_35_db + "  " + 
				x_mb_36 + ", " + y_gm_36_mb;
			document.getElementById("polygon_inter_36_35_b").setAttribute("points", string);
		// Attachmentniveau inter_36_35 bukkal zeichnen
			var string = 
				x_mb_36 + ", " + y_al_36_mb + "  " + 
				x_db_35 + ", " + y_al_35_db;
			document.getElementById("polyline_al_inter_36_35_b").setAttribute("points", string);
		// Margo Gingivae inter_36_35 bukkal zeichnen
			var string =
				x_mb_36 + ", " + y_gm_36_mb + "  " + 
				x_db_35 + ", " + y_gm_35_db;
			document.getElementById("polyline_gm_inter_36_35_b").setAttribute("points", string);

        // Parodontaltasche inter_36_35 lingual zeichnen
			var string = 
				x_ml_36 + ", " + y_al_36_ml + "  " + 
				x_dl_35 + ", " + y_al_35_dl + "  " + 
				x_dl_35 + ", " + y_gm_35_dl + "  " + 
				x_ml_36 + ", " + y_gm_36_ml;
			document.getElementById("polygon_inter_36_35_l").setAttribute("points", string);
		// Attachmentniveau inter_36_35 lingual zeichnen
			var string = 
				x_ml_36 + ", " + y_al_36_ml + "  " + 
				x_dl_35 + ", " + y_al_35_dl;
			document.getElementById("polyline_al_inter_36_35_l").setAttribute("points", string);
		// Margo Gingivae inter_36_35 lingual zeichnen
			var string =
				x_ml_36 + ", " + y_gm_36_ml + "  " + 
				x_dl_35 + ", " + y_gm_35_dl;
			document.getElementById("polyline_gm_inter_36_35_l").setAttribute("points", string);
		}
        if (tooth_37 == 1 && tooth_36 == 1) {

            pd_37_mb = document.forms[0]["pd_37_mb"].value;
			gm_37_mb = document.forms[0]["gm_37_mb"].value;
			
			pd_37_ml = document.forms[0]["pd_37_ml"].value;
			gm_37_ml = document.forms[0]["gm_37_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 37 (bukkal) in der Bitmap
			var x_mb_37 = 952;							// mesial 37
			
		// Set der horizontalen Koordinaten von Zahn 37 (lingual) in der Bitmap
			var x_ml_37 = 947;							// mesial 37
			
		// Set der vertikalen Koordinaten von Zahn 37 (bukkal) aus dem Formular
			var y_gm_37_mb = gm_UK_b - 6.05 * gm_37_mb;	// Margo Gingivae mesiobukkal 37
			var y_pd_37_mb = 6.05 * pd_37_mb;			// Sondierungstiefe mesiobukkal 37
			
		// Set der vertikalen Koordinaten von Zahn 37 (lingual) aus dem Formular
			var y_gm_37_ml = gm_UK_l + 6.05 * gm_37_ml;	// Margo Gingivae mesiolingual 37
			var y_pd_37_ml = 6.05 * pd_37_ml;			// Sondierungstiefe mesiolingual 37
			
		// Berechnung des Attachmentniveaus 37 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_37_mb = y_gm_37_mb + y_pd_37_mb;	// Attachmentniveau mesiobukkal 37
			
		// Berechnung des Attachmentniveaus 37 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_37_ml = y_gm_37_ml - y_pd_37_ml;	// Attachmentniveau mesiolingual 37

		// Parodontaltasche inter_37_36 bukkal zeichnen
			var string = 
				x_mb_37 + ", " + y_al_37_mb + "  " + 
				x_db_36 + ", " + y_al_36_db + "  " + 
				x_db_36 + ", " + y_gm_36_db + "  " + 
				x_mb_37 + ", " + y_gm_37_mb;
			document.getElementById("polygon_inter_37_36_b").setAttribute("points", string);
		// Attachmentniveau inter_37_36 bukkal zeichnen
			var string = 
				x_mb_37 + ", " + y_al_37_mb + "  " + 
				x_db_36 + ", " + y_al_36_db;
			document.getElementById("polyline_al_inter_37_36_b").setAttribute("points", string);
		// Margo Gingivae inter_37_36 bukkal zeichnen
			var string =
				x_mb_37 + ", " + y_gm_37_mb + "  " + 
				x_db_36 + ", " + y_gm_36_db;
			document.getElementById("polyline_gm_inter_37_36_b").setAttribute("points", string);

        // Parodontaltasche inter_37_36 lingual zeichnen
			var string = 
				x_ml_37 + ", " + y_al_37_ml + "  " + 
				x_dl_36 + ", " + y_al_36_dl + "  " + 
				x_dl_36 + ", " + y_gm_36_dl + "  " + 
				x_ml_37 + ", " + y_gm_37_ml;
			document.getElementById("polygon_inter_37_36_l").setAttribute("points", string);
		// Attachmentniveau inter_37_36 lingual zeichnen
			var string = 
				x_ml_37 + ", " + y_al_37_ml + "  " + 
				x_dl_36 + ", " + y_al_36_dl;
			document.getElementById("polyline_al_inter_37_36_l").setAttribute("points", string);
		// Margo Gingivae inter_37_36 lingual zeichnen
			var string =
				x_ml_37 + ", " + y_gm_37_ml + "  " + 
				x_dl_36 + ", " + y_gm_36_dl;
			document.getElementById("polyline_gm_inter_37_36_l").setAttribute("points", string);
		}
	}