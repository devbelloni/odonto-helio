	// Definition der Variablen für das Formular
		var tooth_47 = 1;
		var Furkation_47_b = 0;
		var Furkation_47_l = 0;
		var Implantat_47 = 0;
		var bop_47_db = 0;
		var bop_47_b = 0;
		var bop_47_mb = 0;
		var pi_47_db = 0;
		var pi_47_b = 0;
		var pi_47_mb = 0;
		var bop_47_dl = 0;
		var bop_47_l = 0;
		var bop_47_ml = 0;
		var pi_47_dl = 0;
		var pi_47_l = 0;
		var pi_47_ml = 0;
		var gm_47_db = 0;
		var gm_47_b = 0;
		var gm_47_mb = 0;
		var pd_47_db = 0;
		var pd_47_b = 0;
		var pd_47_mb = 0;
		var gm_47_dl = 0;
		var gm_47_l = 0;
		var gm_47_ml = 0;
		var pd_47_dl = 0;
		var pd_47_l = 0;
		var pd_47_ml = 0;

	function clear_data_47() {
        if (tooth_47 == 1) {
			gm_47_db = 0;
			gm_47_b = 0;
			gm_47_mb = 0;
			pd_47_db = 0;
			pd_47_b = 0;
			pd_47_mb = 0;
	
				document.getElementById('gm_47_db_txt').value = 0;
				document.getElementById('gm_47_b_txt').value = 0;
				document.getElementById('gm_47_mb_txt').value = 0;
				
				document.getElementById('pd_47_db_txt').value = 0;
				document.getElementById('pd_47_b_txt').value = 0;
				document.getElementById('pd_47_mb_txt').value = 0;
			
				document.forms[0]["pd_47_db"].style.color = 'black'
				document.forms[0]["pd_47_b"].style.color = 'black'
				document.forms[0]["pd_47_mb"].style.color = 'black'
			
			gm_47_dl = 0;
			gm_47_l = 0;
			gm_47_ml = 0;
			pd_47_dl = 0;
			pd_47_l = 0;
			pd_47_ml = 0;

				document.getElementById('gm_47_dl_txt').value = 0;
				document.getElementById('gm_47_l_txt').value = 0;
				document.getElementById('gm_47_ml_txt').value = 0;
				
				document.getElementById('pd_47_dl_txt').value = 0;
				document.getElementById('pd_47_l_txt').value = 0;
				document.getElementById('pd_47_ml_txt').value = 0;

				document.forms[0]["pd_47_dl"].style.color = 'black'
				document.forms[0]["pd_47_l"].style.color = 'black'
				document.forms[0]["pd_47_ml"].style.color = 'black'
			
			change_probing_47();
			
			mobility_47 = 0;

				document.getElementById('mobility_47_txt').value = "0";

			note_47 = "";

				document.getElementById('note_47_txt').value = "";

			Furkation_47_b = 0;
			Furkation_47_l = 0;

				document.getElementById('furkation_1_47_b').style.display = 'none';
				document.getElementById('furkation_2_47_b').style.display = 'none';
				document.getElementById('furkation_3_47_b').style.display = 'none';
					
				document.getElementById('furkation_1_47_b_tab').style.display = 'none';
				document.getElementById('furkation_2_47_b_tab').style.display = 'none';
				document.getElementById('furkation_3_47_b_tab').style.display = 'none';
				
				document.getElementById('furkation_1_47_l').style.display = 'none';
				document.getElementById('furkation_2_47_l').style.display = 'none';
				document.getElementById('furkation_3_47_l').style.display = 'none';
					
				document.getElementById('furkation_1_47_l_tab').style.display = 'none';
				document.getElementById('furkation_2_47_l_tab').style.display = 'none';
				document.getElementById('furkation_3_47_l_tab').style.display = 'none';
				
			bop_47_db = 0;
			bop_47_b = 0;
			bop_47_mb = 0;
					
			bop_47_dl = 0;
			bop_47_l = 0;
			bop_47_ml = 0;
					
				document.getElementById('bop_47_db_rectangle').style.display = 'none';
				document.getElementById('bop_47_b_rectangle').style.display = 'none';
				document.getElementById('bop_47_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_47_dl_rectangle').style.display = 'none';
				document.getElementById('bop_47_l_rectangle').style.display = 'none';
				document.getElementById('bop_47_ml_rectangle').style.display = 'none';
				
			pi_47_db = 0;
			pi_47_b = 0;
			pi_47_mb = 0;
					
			pi_47_dl = 0;
			pi_47_l = 0;
			pi_47_ml = 0;

				document.getElementById('pi_47_db_rectangle').style.display = 'none';
				document.getElementById('pi_47_b_rectangle').style.display = 'none';
				document.getElementById('pi_47_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_47_dl_rectangle').style.display = 'none';
				document.getElementById('pi_47_l_rectangle').style.display = 'none';
				document.getElementById('pi_47_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_47() {
		if (tooth_47 === 1) {
			tooth_47 = 0;
			document.getElementById('tooth_line_47_b').style.display = 'block';
			document.getElementById('tooth_line_47_l').style.display = 'block';
			
			document.getElementById('mobility_47_txt').style.display = 'none';
			
			document.getElementById('implantat_47_btn').style.display = 'none';
			document.getElementById('implantat_47_tab').style.display = 'none';
			document.getElementById('implantat_47_b_image').style.display = 'none';
			document.getElementById('implantat_47_l_image').style.display = 'none';
			
			document.getElementById('furkation_47_b_btn').style.display = 'none';
			document.getElementById('furkation_47_l_btn').style.display = 'none';
			
			document.getElementById('furkation_1_47_b').style.display = 'none';
			document.getElementById('furkation_2_47_b').style.display = 'none';
			document.getElementById('furkation_3_47_b').style.display = 'none';
			
			document.getElementById('furkation_1_47_b_tab').style.display = 'none';
			document.getElementById('furkation_2_47_b_tab').style.display = 'none';
			document.getElementById('furkation_3_47_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_47_l').style.display = 'none';
			document.getElementById('furkation_2_47_l').style.display = 'none';
			document.getElementById('furkation_3_47_l').style.display = 'none';
			
			document.getElementById('furkation_1_47_l_tab').style.display = 'none';
			document.getElementById('furkation_2_47_l_tab').style.display = 'none';
			document.getElementById('furkation_3_47_l_tab').style.display = 'none';
			
			document.getElementById('gm_47_db_txt').style.display = 'none';
			document.getElementById('gm_47_b_txt').style.display = 'none';
			document.getElementById('gm_47_mb_txt').style.display = 'none';
			
			document.getElementById('pd_47_db_txt').style.display = 'none';
			document.getElementById('pd_47_b_txt').style.display = 'none';
			document.getElementById('pd_47_mb_txt').style.display = 'none';
			
			document.getElementById('gm_47_dl_txt').style.display = 'none';
			document.getElementById('gm_47_l_txt').style.display = 'none';
			document.getElementById('gm_47_ml_txt').style.display = 'none';
			
			document.getElementById('pd_47_dl_txt').style.display = 'none';
			document.getElementById('pd_47_l_txt').style.display = 'none';
			document.getElementById('pd_47_ml_txt').style.display = 'none';
						
			document.getElementById('bop_47_db_rectangle').style.display = 'none';
			document.getElementById('bop_47_b_rectangle').style.display = 'none';
			document.getElementById('bop_47_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_47_dl_rectangle').style.display = 'none';
			document.getElementById('bop_47_l_rectangle').style.display = 'none';
			document.getElementById('bop_47_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_47_db_btn').style.display = 'none';
			document.getElementById('bop_47_b_btn').style.display = 'none';
			document.getElementById('bop_47_mb_btn').style.display = 'none';
			
			document.getElementById('bop_47_dl_btn').style.display = 'none';
			document.getElementById('bop_47_l_btn').style.display = 'none';
			document.getElementById('bop_47_ml_btn').style.display = 'none';
			
			document.getElementById('pi_47_db_rectangle').style.display = 'none';
			document.getElementById('pi_47_b_rectangle').style.display = 'none';
			document.getElementById('pi_47_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_47_dl_rectangle').style.display = 'none';
			document.getElementById('pi_47_l_rectangle').style.display = 'none';
			document.getElementById('pi_47_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_47_db_btn').style.display = 'none';
			document.getElementById('pi_47_b_btn').style.display = 'none';
			document.getElementById('pi_47_mb_btn').style.display = 'none';
			
			document.getElementById('pi_47_dl_btn').style.display = 'none';
			document.getElementById('pi_47_l_btn').style.display = 'none';
			document.getElementById('pi_47_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_47_b').style.display = 'none';
			document.getElementById('polyline_al_47_b').style.display = 'none';
			document.getElementById('polyline_gm_47_b').style.display = 'none';
			
			document.getElementById('polygon_47_l').style.display = 'none';
			document.getElementById('polyline_al_47_l').style.display = 'none';
			document.getElementById('polyline_gm_47_l').style.display = 'none';
			
			document.getElementById('polygon_inter_48_47_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_48_47_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_48_47_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_48_47_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_48_47_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_48_47_l').style.display = 'none';            
            
			document.getElementById('polygon_inter_47_46_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_47_46_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_47_46_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_47_46_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_47_46_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_47_46_l').style.display = 'none';            
			
			document.getElementById('note_47_txt').style.display = 'none';
		}
		else if (Implantat_47 !== 1) {
			tooth_47 = 1;
			document.getElementById('tooth_line_47_b').style.display = 'none';
			document.getElementById('tooth_line_47_l').style.display = 'none';

			document.getElementById('mobility_47_txt').style.display = 'block';

			document.getElementById('implantat_47_btn').style.display = 'block';

			document.getElementById('furkation_47_b_btn').style.display = 'block';
			document.getElementById('furkation_47_l_btn').style.display = 'block';
			
			document.getElementById('gm_47_db_txt').style.display = 'block';
			document.getElementById('gm_47_b_txt').style.display = 'block';
			document.getElementById('gm_47_mb_txt').style.display = 'block';
			
			document.getElementById('pd_47_db_txt').style.display = 'block';
			document.getElementById('pd_47_b_txt').style.display = 'block';
			document.getElementById('pd_47_mb_txt').style.display = 'block';
			
			document.getElementById('gm_47_dl_txt').style.display = 'block';
			document.getElementById('gm_47_l_txt').style.display = 'block';
			document.getElementById('gm_47_ml_txt').style.display = 'block';
			
			document.getElementById('pd_47_dl_txt').style.display = 'block';
			document.getElementById('pd_47_l_txt').style.display = 'block';
			document.getElementById('pd_47_ml_txt').style.display = 'block';
			
			document.getElementById('note_47_txt').style.display = 'block';

			document.getElementById('polygon_47_b').style.display = 'block';
			document.getElementById('polyline_al_47_b').style.display = 'block';
			document.getElementById('polyline_gm_47_b').style.display = 'block';
			
			document.getElementById('polygon_47_l').style.display = 'block';
			document.getElementById('polyline_al_47_l').style.display = 'block';
			document.getElementById('polyline_gm_47_l').style.display = 'block';

            if (tooth_48 == 1 && tooth_47 == 1) {
				document.getElementById('polygon_inter_48_47_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_48_47_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_48_47_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_48_47_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_48_47_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_48_47_l').style.display = 'block';            
            }
            
            if (tooth_47 == 1 && tooth_46 == 1) {
				document.getElementById('polygon_inter_47_46_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_47_46_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_47_46_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_47_46_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_47_46_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_47_46_l').style.display = 'block';            
            }

			if (Furkation_47_b == 1) {
				document.getElementById('furkation_1_47_b').style.display = 'block';
			} else if (Furkation_47_b == 2) {
				document.getElementById('furkation_2_47_b').style.display = 'block';
			} else if (Furkation_47_b == 3) {
				document.getElementById('furkation_3_47_b').style.display = 'block';
			}
			if (Furkation_47_b == 1) {
				document.getElementById('furkation_1_47_b_tab').style.display = 'block';
			} else if (Furkation_47_b == 2) {
				document.getElementById('furkation_2_47_b_tab').style.display = 'block';
			} else if (Furkation_47_b == 3) {
				document.getElementById('furkation_3_47_b_tab').style.display = 'block';
			}
			if (Furkation_47_l == 1) {
				document.getElementById('furkation_1_47_l').style.display = 'block';
			} else if (Furkation_47_l == 2) {
				document.getElementById('furkation_2_47_l').style.display = 'block';
			} else if (Furkation_47_l == 3) {
				document.getElementById('furkation_3_47_l').style.display = 'block';
			}
			if (Furkation_47_l == 1) {
				document.getElementById('furkation_1_47_l_tab').style.display = 'block';
			} else if (Furkation_47_l == 2) {
				document.getElementById('furkation_2_47_l_tab').style.display = 'block';
			} else if (Furkation_47_l == 3) {
				document.getElementById('furkation_3_47_l_tab').style.display = 'block';
			}

			document.getElementById('bop_47_db_btn').style.display = 'block';
			document.getElementById('bop_47_b_btn').style.display = 'block';
			document.getElementById('bop_47_mb_btn').style.display = 'block';

			document.getElementById('bop_47_dl_btn').style.display = 'block';
			document.getElementById('bop_47_l_btn').style.display = 'block';
			document.getElementById('bop_47_ml_btn').style.display = 'block';
			
			if (bop_47_db == 1) {
				document.getElementById('bop_47_db_rectangle').style.display = 'block';
			}
			if (bop_47_b == 1) {
				document.getElementById('bop_47_b_rectangle').style.display = 'block';
			}
			if (bop_47_mb == 1) {
				document.getElementById('bop_47_mb_rectangle').style.display = 'block';
			}
			if (bop_47_dl == 1) {
				document.getElementById('bop_47_dl_rectangle').style.display = 'block';
			}
			if (bop_47_l == 1) {
				document.getElementById('bop_47_l_rectangle').style.display = 'block';
			}
			if (bop_47_ml == 1) {
				document.getElementById('bop_47_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_47_db_btn').style.display = 'block';
			document.getElementById('pi_47_b_btn').style.display = 'block';
			document.getElementById('pi_47_mb_btn').style.display = 'block';

			document.getElementById('pi_47_dl_btn').style.display = 'block';
			document.getElementById('pi_47_l_btn').style.display = 'block';
			document.getElementById('pi_47_ml_btn').style.display = 'block';
			
			if (pi_47_db == 1) {
				document.getElementById('pi_47_db_rectangle').style.display = 'block';
			}
			if (pi_47_b == 1) {
				document.getElementById('pi_47_b_rectangle').style.display = 'block';
			}
			if (pi_47_mb == 1) {
				document.getElementById('pi_47_mb_rectangle').style.display = 'block';
			}
			if (pi_47_dl == 1) {
				document.getElementById('pi_47_dl_rectangle').style.display = 'block';
			}
			if (pi_47_l == 1) {
				document.getElementById('pi_47_l_rectangle').style.display = 'block';
			}
			if (pi_47_ml == 1) {
				document.getElementById('pi_47_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_47 == 1) {
			tooth_47 = 1;
			document.getElementById('tooth_line_47_b').style.display = 'none';
			document.getElementById('tooth_line_47_l').style.display = 'none';

			document.getElementById('mobility_47_txt').style.display = 'block';
			
			document.getElementById('note_47_txt').style.display = 'block';

			document.getElementById('implantat_47_btn').style.display = 'block';
			document.getElementById('implantat_47_tab').style.display = 'block';
			document.getElementById('implantat_47_b_image').style.display = 'block';
			document.getElementById('implantat_47_l_image').style.display = 'block';

			document.getElementById('gm_47_db_txt').style.display = 'block';
			document.getElementById('gm_47_b_txt').style.display = 'block';
			document.getElementById('gm_47_mb_txt').style.display = 'block';
			
			document.getElementById('pd_47_db_txt').style.display = 'block';
			document.getElementById('pd_47_b_txt').style.display = 'block';
			document.getElementById('pd_47_mb_txt').style.display = 'block';
			
			document.getElementById('gm_47_dl_txt').style.display = 'block';
			document.getElementById('gm_47_l_txt').style.display = 'block';
			document.getElementById('gm_47_ml_txt').style.display = 'block';
			
			document.getElementById('pd_47_dl_txt').style.display = 'block';
			document.getElementById('pd_47_l_txt').style.display = 'block';
			document.getElementById('pd_47_ml_txt').style.display = 'block';

			document.getElementById('polygon_47_b').style.display = 'block';
			document.getElementById('polyline_al_47_b').style.display = 'block';
			document.getElementById('polyline_gm_47_b').style.display = 'block';
			
			document.getElementById('polygon_47_l').style.display = 'block';
			document.getElementById('polyline_al_47_l').style.display = 'block';
			document.getElementById('polyline_gm_47_l').style.display = 'block';

            if (tooth_48 == 1 && tooth_47 == 1) {
				document.getElementById('polygon_inter_48_47_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_48_47_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_48_47_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_48_47_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_48_47_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_48_47_l').style.display = 'block';            
            }
            
            if (tooth_47 == 1 && tooth_46 == 1) {
				document.getElementById('polygon_inter_47_46_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_47_46_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_47_46_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_47_46_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_47_46_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_47_46_l').style.display = 'block';            
            }

			document.getElementById('bop_47_db_btn').style.display = 'block';
			document.getElementById('bop_47_b_btn').style.display = 'block';
			document.getElementById('bop_47_mb_btn').style.display = 'block';

			document.getElementById('bop_47_dl_btn').style.display = 'block';
			document.getElementById('bop_47_l_btn').style.display = 'block';
			document.getElementById('bop_47_ml_btn').style.display = 'block';
			
			document.getElementById('pi_47_db_btn').style.display = 'block';
			document.getElementById('pi_47_b_btn').style.display = 'block';
			document.getElementById('pi_47_mb_btn').style.display = 'block';

			document.getElementById('pi_47_dl_btn').style.display = 'block';
			document.getElementById('pi_47_l_btn').style.display = 'block';
			document.getElementById('pi_47_ml_btn').style.display = 'block';
			
			if (bop_47_db == 1) {
				document.getElementById('bop_47_db_rectangle').style.display = 'block';
			}
			if (bop_47_b == 1) {
				document.getElementById('bop_47_b_rectangle').style.display = 'block';
			}
			if (bop_47_mb == 1) {
				document.getElementById('bop_47_mb_rectangle').style.display = 'block';
			}
			if (bop_47_dl == 1) {
				document.getElementById('bop_47_dl_rectangle').style.display = 'block';
			}
			if (bop_47_l == 1) {
				document.getElementById('bop_47_l_rectangle').style.display = 'block';
			}
			if (bop_47_ml == 1) {
				document.getElementById('bop_47_ml_rectangle').style.display = 'block';
			}
			
			if (pi_47_db == 1) {
				document.getElementById('pi_47_db_rectangle').style.display = 'block';
			}
			if (pi_47_b == 1) {
				document.getElementById('pi_47_b_rectangle').style.display = 'block';
			}
			if (pi_47_mb == 1) {
				document.getElementById('pi_47_mb_rectangle').style.display = 'block';
			}
			if (pi_47_dl == 1) {
				document.getElementById('pi_47_dl_rectangle').style.display = 'block';
			}
			if (pi_47_l == 1) {
				document.getElementById('pi_47_l_rectangle').style.display = 'block';
			}
			if (pi_47_ml == 1) {
				document.getElementById('pi_47_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_47();
	}

	function toggle_implant_47() {
		if (Implantat_47 == 0) {
			Implantat_47 = 1;
			
			document.getElementById('implantat_47_b_image').style.display = 'block';
			document.getElementById('implantat_47_l_image').style.display = 'block';
			document.getElementById('implantat_47_tab').style.display = 'block';
			
			document.getElementById('furkation_47_b_btn').style.display = 'none';
			document.getElementById('furkation_47_l_btn').style.display = 'none';
			
			document.getElementById('furkation_1_47_b').style.display = 'none';
			document.getElementById('furkation_2_47_b').style.display = 'none';
			document.getElementById('furkation_3_47_b').style.display = 'none';
			
			document.getElementById('furkation_1_47_b_tab').style.display = 'none';
			document.getElementById('furkation_2_47_b_tab').style.display = 'none';
			document.getElementById('furkation_3_47_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_47_l').style.display = 'none';
			document.getElementById('furkation_2_47_l').style.display = 'none';
			document.getElementById('furkation_3_47_l').style.display = 'none';
			
			document.getElementById('furkation_1_47_l_tab').style.display = 'none';
			document.getElementById('furkation_2_47_l_tab').style.display = 'none';
			document.getElementById('furkation_3_47_l_tab').style.display = 'none';
		}
		else {
			Implantat_47 = 0;
			
			document.getElementById('implantat_47_b_image').style.display = 'none';
			document.getElementById('implantat_47_l_image').style.display = 'none';
			document.getElementById('implantat_47_tab').style.display = 'none';
			
			document.getElementById('furkation_47_b_btn').style.display = 'block';
			document.getElementById('furkation_47_l_btn').style.display = 'block';

			if (Furkation_47_b == 1) {
				document.getElementById('furkation_1_47_b').style.display = 'block';
			} else if (Furkation_47_b == 2) {
				document.getElementById('furkation_2_47_b').style.display = 'block';
			} else if (Furkation_47_b == 3) {
				document.getElementById('furkation_3_47_b').style.display = 'block';
			}
			if (Furkation_47_b == 1) {
				document.getElementById('furkation_1_47_b_tab').style.display = 'block';
			} else if (Furkation_47_b == 2) {
				document.getElementById('furkation_2_47_b_tab').style.display = 'block';
			} else if (Furkation_47_b == 3) {
				document.getElementById('furkation_3_47_b_tab').style.display = 'block';
			}
			if (Furkation_47_l == 1) {
				document.getElementById('furkation_1_47_l').style.display = 'block';
			} else if (Furkation_47_l == 2) {
				document.getElementById('furkation_2_47_l').style.display = 'block';
			} else if (Furkation_47_l == 3) {
				document.getElementById('furkation_3_47_l').style.display = 'block';
			}
			if (Furkation_47_l == 1) {
				document.getElementById('furkation_1_47_l_tab').style.display = 'block';
			} else if (Furkation_47_l == 2) {
				document.getElementById('furkation_2_47_l_tab').style.display = 'block';
			} else if (Furkation_47_l == 3) {
				document.getElementById('furkation_3_47_l_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_47_b() {
		if (Furkation_47_b == 0) {
			document.getElementById('furkation_1_47_b_tab').style.display = 'block';
			document.getElementById('furkation_2_47_b_tab').style.display = 'none';
			document.getElementById('furkation_3_47_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_47_b').style.display = 'block';
			document.getElementById('furkation_2_47_b').style.display = 'none';
			document.getElementById('furkation_3_47_b').style.display = 'none';

			Furkation_47_b = 1;
		}
		else if (Furkation_47_b == 1) {
			document.getElementById('furkation_1_47_b_tab').style.display = 'none';
			document.getElementById('furkation_2_47_b_tab').style.display = 'block';
			document.getElementById('furkation_3_47_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_47_b').style.display = 'none';
			document.getElementById('furkation_2_47_b').style.display = 'block';
			document.getElementById('furkation_3_47_b').style.display = 'none';
			
			Furkation_47_b = 2;
		}
		else if (Furkation_47_b == 2) {
			document.getElementById('furkation_1_47_b_tab').style.display = 'none';
			document.getElementById('furkation_2_47_b_tab').style.display = 'none';
			document.getElementById('furkation_3_47_b_tab').style.display = 'block';
			
			document.getElementById('furkation_1_47_b').style.display = 'none';
			document.getElementById('furkation_2_47_b').style.display = 'none';
			document.getElementById('furkation_3_47_b').style.display = 'block';
						
			Furkation_47_b = 3;
		}
		else if (Furkation_47_b == 3) {
			document.getElementById('furkation_1_47_b_tab').style.display = 'none';
			document.getElementById('furkation_2_47_b_tab').style.display = 'none';
			document.getElementById('furkation_3_47_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_47_b').style.display = 'none';
			document.getElementById('furkation_2_47_b').style.display = 'none';
			document.getElementById('furkation_3_47_b').style.display = 'none';
						
			Furkation_47_b = 0;
		}
	}

	function toggle_furcation_47_l() {
		if (Furkation_47_l == 0) {
			document.getElementById('furkation_1_47_l_tab').style.display = 'block';
			document.getElementById('furkation_2_47_l_tab').style.display = 'none';
			document.getElementById('furkation_3_47_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_47_l').style.display = 'block';
			document.getElementById('furkation_2_47_l').style.display = 'none';
			document.getElementById('furkation_3_47_l').style.display = 'none';

			Furkation_47_l = 1;
		}
		else if (Furkation_47_l == 1) {
			document.getElementById('furkation_1_47_l_tab').style.display = 'none';
			document.getElementById('furkation_2_47_l_tab').style.display = 'block';
			document.getElementById('furkation_3_47_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_47_l').style.display = 'none';
			document.getElementById('furkation_2_47_l').style.display = 'block';
			document.getElementById('furkation_3_47_l').style.display = 'none';
			
			Furkation_47_l = 2;
		}
		else if (Furkation_47_l == 2) {
			document.getElementById('furkation_1_47_l_tab').style.display = 'none';
			document.getElementById('furkation_2_47_l_tab').style.display = 'none';
			document.getElementById('furkation_3_47_l_tab').style.display = 'block';
			
			document.getElementById('furkation_1_47_l').style.display = 'none';
			document.getElementById('furkation_2_47_l').style.display = 'none';
			document.getElementById('furkation_3_47_l').style.display = 'block';
						
			Furkation_47_l = 3;
		}
		else if (Furkation_47_l == 3) {
			document.getElementById('furkation_1_47_l_tab').style.display = 'none';
			document.getElementById('furkation_2_47_l_tab').style.display = 'none';
			document.getElementById('furkation_3_47_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_47_l').style.display = 'none';
			document.getElementById('furkation_2_47_l').style.display = 'none';
			document.getElementById('furkation_3_47_l').style.display = 'none';
						
			Furkation_47_l = 0;
		}
	}

	function toggle_bop_47_db() {
		if (bop_47_db == 0) {
			bop_47_db = 1;
			document.getElementById('bop_47_db_rectangle').style.display = 'block';
		}
		else {
			bop_47_db = 0;
			document.getElementById('bop_47_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_47_b() {
		if (bop_47_b == 0) {
			bop_47_b = 1;
			document.getElementById('bop_47_b_rectangle').style.display = 'block';
		}
		else {
			bop_47_b = 0;
			document.getElementById('bop_47_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_47_mb() {
		if (bop_47_mb == 0) {
			bop_47_mb = 1;
			document.getElementById('bop_47_mb_rectangle').style.display = 'block';
		}
		else {
			bop_47_mb = 0;
			document.getElementById('bop_47_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_47_db() {
		if (pi_47_db == 0) {
			pi_47_db = 1;
			document.getElementById('pi_47_db_rectangle').style.display = 'block';
		}
		else {
			pi_47_db = 0;
			document.getElementById('pi_47_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_47_b() {
		if (pi_47_b == 0) {
			pi_47_b = 1;
			document.getElementById('pi_47_b_rectangle').style.display = 'block';
		}
		else {
			pi_47_b = 0;
			document.getElementById('pi_47_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_47_mb() {
		if (pi_47_mb == 0) {
			pi_47_mb = 1;
			document.getElementById('pi_47_mb_rectangle').style.display = 'block';
		}
		else {
			pi_47_mb = 0;
			document.getElementById('pi_47_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_47_dl() {
		if (bop_47_dl == 0) {
			bop_47_dl = 1;
			document.getElementById('bop_47_dl_rectangle').style.display = 'block';
		}
		else {
			bop_47_dl = 0;
			document.getElementById('bop_47_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_47_l() {
		if (bop_47_l == 0) {
			bop_47_l = 1;
			document.getElementById('bop_47_l_rectangle').style.display = 'block';
		}
		else {
			bop_47_l = 0;
			document.getElementById('bop_47_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_47_ml() {
		if (bop_47_ml == 0) {
			bop_47_ml = 1;
			document.getElementById('bop_47_ml_rectangle').style.display = 'block';
		}
		else {
			bop_47_ml = 0;
			document.getElementById('bop_47_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_47_dl() {
		if (pi_47_dl == 0) {
			pi_47_dl = 1;
			document.getElementById('pi_47_dl_rectangle').style.display = 'block';
		}
		else {
			pi_47_dl = 0;
			document.getElementById('pi_47_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_47_l() {
		if (pi_47_l == 0) {
			pi_47_l = 1;
			document.getElementById('pi_47_l_rectangle').style.display = 'block';
		}
		else {
			pi_47_l = 0;
			document.getElementById('pi_47_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_47_ml() {
		if (pi_47_ml == 0) {
			pi_47_ml = 1;
			document.getElementById('pi_47_ml_rectangle').style.display = 'block';
		}
		else {
			pi_47_ml = 0;
			document.getElementById('pi_47_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_47() {
		if (tooth_47 == 1) {
			
		// Variablen aus dem Formular
			pd_47_db = document.forms[0]["pd_47_db"].value;
			pd_47_b = document.forms[0]["pd_47_b"].value;
			pd_47_mb = document.forms[0]["pd_47_mb"].value;

			if (document.forms[0]["pd_47_dl"].value > 3) {document.forms[0]["pd_47_dl"].style.color = 'red';} else {document.forms[0]["pd_47_dl"].style.color = 'black'};
			if (document.forms[0]["pd_47_l"].value > 3) {document.forms[0]["pd_47_l"].style.color = 'red';} else {document.forms[0]["pd_47_l"].style.color = 'black'};
			if (document.forms[0]["pd_47_ml"].value > 3) {document.forms[0]["pd_47_ml"].style.color = 'red';} else {document.forms[0]["pd_47_ml"].style.color = 'black'};
			
			gm_47_db = document.forms[0]["gm_47_db"].value;
			gm_47_b = document.forms[0]["gm_47_b"].value;
			gm_47_mb = document.forms[0]["gm_47_mb"].value;
			
			pd_47_dl = document.forms[0]["pd_47_dl"].value;
			pd_47_l = document.forms[0]["pd_47_l"].value;
			pd_47_ml = document.forms[0]["pd_47_ml"].value;

			if (document.forms[0]["pd_47_db"].value > 3) {document.forms[0]["pd_47_db"].style.color = 'red';} else {document.forms[0]["pd_47_db"].style.color = 'black'};
			if (document.forms[0]["pd_47_b"].value > 3) {document.forms[0]["pd_47_b"].style.color = 'red';} else {document.forms[0]["pd_47_b"].style.color = 'black'};
			if (document.forms[0]["pd_47_mb"].value > 3) {document.forms[0]["pd_47_mb"].style.color = 'red';} else {document.forms[0]["pd_47_mb"].style.color = 'black'};
			
			gm_47_dl = document.forms[0]["gm_47_dl"].value;
			gm_47_l = document.forms[0]["gm_47_l"].value;
			gm_47_ml = document.forms[0]["gm_47_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 47 (bukkal) in der Bitmap
			var x_db_47 = 358;							// distal 47
			var x_mb_47 = 406;							// mesial 47
			var x_b_47 = (x_db_47 + x_mb_47)/2;			// bukkal 47
			
		// Set der horizontalen Koordinaten von Zahn 47 (lingual) in der Bitmap
			var x_dl_47 = 362;							// distal 47
			var x_ml_47 = 410;							// mesial 47
			var x_l_47 = (x_dl_47 + x_ml_47)/2;			// lingual 47
			
		// Set der vertikalen Koordinaten von Zahn 47 (bukkal) aus dem Formular
			var y_gm_47_db = gm_UK_b - 6.05 * gm_47_db;	// Margo Gingivae distobukkal 47
			var y_gm_47_b = gm_UK_b - 6.05 * gm_47_b;	// Margo Gingivae bukkal 47
			var y_gm_47_mb = gm_UK_b - 6.05 * gm_47_mb;	// Margo Gingivae mesiobukkal 47
			var y_pd_47_db = 6.05 * pd_47_db;			// Sondierungstiefe distobukkal 47
			var y_pd_47_b = 6.05 * pd_47_b;				// Sondierungstiefe bukkal 47
			var y_pd_47_mb = 6.05 * pd_47_mb;			// Sondierungstiefe mesiobukkal 47
			
		// Set der vertikalen Koordinaten von Zahn 47 (lingual) aus dem Formular
			var y_gm_47_dl = gm_UK_l + 6.05 * gm_47_dl;	// Margo Gingivae distolingual 47
			var y_gm_47_l = gm_UK_l + 6.05 * gm_47_l;	// Margo Gingivae lingual 47
			var y_gm_47_ml = gm_UK_l + 6.05 * gm_47_ml;	// Margo Gingivae mesiolingual 47
			var y_pd_47_dl = 6.05 * pd_47_dl;			// Sondierungstiefe distolingual 47
			var y_pd_47_l = 6.05 * pd_47_l;				// Sondierungstiefe lingual 47
			var y_pd_47_ml = 6.05 * pd_47_ml;			// Sondierungstiefe mesiolingual 47
			
		// Berechnung des Attachmentniveaus 47 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_47_db = y_gm_47_db + y_pd_47_db;	// Attachmentniveau distobukkal 47
			var y_al_47_b = y_gm_47_b + y_pd_47_b;		// Attachmentniveau bukkal 47
			var y_al_47_mb = y_gm_47_mb + y_pd_47_mb;	// Attachmentniveau mesiobukkal 47
			
		// Berechnung des Attachmentniveaus 47 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_47_dl = y_gm_47_dl - y_pd_47_dl;	// Attachmentniveau distolingual 47
			var y_al_47_l = y_gm_47_l - y_pd_47_l;		// Attachmentniveau lingual 47
			var y_al_47_ml = y_gm_47_ml - y_pd_47_ml;	// Attachmentniveau mesiolingual 47

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[47].storeCoordinates(
				x_db_47, x_mb_47, x_dl_47, x_ml_47, x_b_47, x_l_47,
				y_gm_47_db, y_gm_47_b, y_gm_47_mb, y_pd_47_db, y_pd_47_b, y_pd_47_mb,
				y_gm_47_dl, y_gm_47_l, y_gm_47_ml, y_pd_47_dl, y_pd_47_l, y_pd_47_ml,
				y_al_47_db, y_al_47_b, y_al_47_mb, y_al_47_dl, y_al_47_l, y_al_47_ml
			);

		// Parodontaltasche 47 bukkal zeichnen
			var string = 
				x_db_47 + ", " + y_al_47_db + "  " + 
				x_b_47 + ", " + y_al_47_b + "  " + 
				x_mb_47 + ", " + y_al_47_mb + "  " + 
				x_mb_47 + ", " + y_gm_47_mb + "  " + 
				x_b_47 + ", " + y_gm_47_b + "  " + 
				x_db_47 + ", " + y_gm_47_db;
			document.getElementById("polygon_47_b").setAttribute("points", string);
		// Attachmentniveau 47 bukkal zeichnen
			var string = 
				x_db_47 + ", " + y_al_47_db + "  " + 
				x_b_47 + ", " + y_al_47_b + "  " + 
				x_mb_47 + ", " + y_al_47_mb;
			document.getElementById("polyline_al_47_b").setAttribute("points", string);
		// Margo Gingivae 47 bukkal zeichnen
			var string =
				x_db_47 + ", " + y_gm_47_db + "  " + 
				x_b_47 + ", " + y_gm_47_b + "  " + 
				x_mb_47 + ", " + y_gm_47_mb;
			document.getElementById("polyline_gm_47_b").setAttribute("points", string);

		// Parodontaltasche 47 lingual zeichnen
			var string = 
				x_dl_47 + ", " + y_al_47_dl + "  " + 
				x_l_47 + ", " + y_al_47_l + "  " + 
				x_ml_47 + ", " + y_al_47_ml + "  " + 
				x_ml_47 + ", " + y_gm_47_ml + "  " + 
				x_l_47 + ", " + y_gm_47_l + "  " + 
				x_dl_47 + ", " + y_gm_47_dl;
			document.getElementById("polygon_47_l").setAttribute("points", string);
		// Attachmentniveau 47 lingual zeichnen
			var string = 
				x_dl_47 + ", " + y_al_47_dl + "  " + 
				x_l_47 + ", " + y_al_47_l + "  " + 
				x_ml_47 + ", " + y_al_47_ml;
			document.getElementById("polyline_al_47_l").setAttribute("points", string);
		// Margo Gingivae 47 lingual zeichnen
			var string =
				x_dl_47 + ", " + y_gm_47_dl + "  " + 
				x_l_47 + ", " + y_gm_47_l + "  " + 
				x_ml_47 + ", " + y_gm_47_ml;
			document.getElementById("polyline_gm_47_l").setAttribute("points", string);
		}
        if (tooth_47 == 1 && tooth_46 == 1) {

            pd_46_db = document.forms[0]["pd_46_db"].value;
			gm_46_db = document.forms[0]["gm_46_db"].value;
			
			pd_46_dl = document.forms[0]["pd_46_dl"].value;
			gm_46_dl = document.forms[0]["gm_46_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
			var x_db_46 = 422;							// distal 46
			
		// Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
			var x_dl_46 = 425;							// distal 46
			
		// Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
			var y_gm_46_db = gm_UK_b - 6.05 * gm_46_db;	// Margo Gingivae distobukkal 46
			var y_pd_46_db = 6.05 * pd_46_db;			// Sondierungstiefe distobukkal 46
			
		// Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
			var y_gm_46_dl = gm_UK_l + 6.05 * gm_46_dl;	// Margo Gingivae distolingual 46
			var y_pd_46_dl = 6.05 * pd_46_dl;			// Sondierungstiefe distolingual 46
			
		// Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_46_db = y_gm_46_db + y_pd_46_db;	// Attachmentniveau distobukkal 46
			
		// Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_46_dl = y_gm_46_dl - y_pd_46_dl;	// Attachmentniveau distolingual 46

		// Parodontaltasche inter_47_46 bukkal zeichnen
			var string = 
				x_mb_47 + ", " + y_al_47_mb + "  " + 
				x_db_46 + ", " + y_al_46_db + "  " + 
				x_db_46 + ", " + y_gm_46_db + "  " + 
				x_mb_47 + ", " + y_gm_47_mb;
			document.getElementById("polygon_inter_47_46_b").setAttribute("points", string);
		// Attachmentniveau inter_47_46 bukkal zeichnen
			var string = 
				x_mb_47 + ", " + y_al_47_mb + "  " + 
				x_db_46 + ", " + y_al_46_db;
			document.getElementById("polyline_al_inter_47_46_b").setAttribute("points", string);
		// Margo Gingivae inter_47_46 bukkal zeichnen
			var string =
				x_mb_47 + ", " + y_gm_47_mb + "  " + 
				x_db_46 + ", " + y_gm_46_db;
			document.getElementById("polyline_gm_inter_47_46_b").setAttribute("points", string);

        // Parodontaltasche inter_47_46 lingual zeichnen
			var string = 
				x_ml_47 + ", " + y_al_47_ml + "  " + 
				x_dl_46 + ", " + y_al_46_dl + "  " + 
				x_dl_46 + ", " + y_gm_46_dl + "  " + 
				x_ml_47 + ", " + y_gm_47_ml;
			document.getElementById("polygon_inter_47_46_l").setAttribute("points", string);
		// Attachmentniveau inter_47_46 lingual zeichnen
			var string = 
				x_ml_47 + ", " + y_al_47_ml + "  " + 
				x_dl_46 + ", " + y_al_46_dl;
			document.getElementById("polyline_al_inter_47_46_l").setAttribute("points", string);
		// Margo Gingivae inter_47_46 lingual zeichnen
			var string =
				x_ml_47 + ", " + y_gm_47_ml + "  " + 
				x_dl_46 + ", " + y_gm_46_dl;
			document.getElementById("polyline_gm_inter_47_46_l").setAttribute("points", string);
		}
        if (tooth_48 == 1 && tooth_47 == 1) {

            pd_48_mb = document.forms[0]["pd_48_mb"].value;
			gm_48_mb = document.forms[0]["gm_48_mb"].value;
			
			pd_48_ml = document.forms[0]["pd_48_ml"].value;
			gm_48_ml = document.forms[0]["gm_48_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 48 (bukkal) in der Bitmap
			var x_mb_48 = 342;							// mesial 48
			
		// Set der horizontalen Koordinaten von Zahn 48 (lingual) in der Bitmap
			var x_ml_48 = 346;							// mesial 48
			
		// Set der vertikalen Koordinaten von Zahn 48 (bukkal) aus dem Formular
			var y_gm_48_mb = gm_UK_b - 6.05 * gm_48_mb;	// Margo Gingivae mesiobukkal 48
			var y_pd_48_mb = 6.05 * pd_48_mb;			// Sondierungstiefe mesiobukkal 48
			
		// Set der vertikalen Koordinaten von Zahn 48 (lingual) aus dem Formular
			var y_gm_48_ml = gm_UK_l + 6.05 * gm_48_ml;	// Margo Gingivae mesiolingual 48
			var y_pd_48_ml = 6.05 * pd_48_ml;			// Sondierungstiefe mesiolingual 48
			
		// Berechnung des Attachmentniveaus 48 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_48_mb = y_gm_48_mb + y_pd_48_mb;	// Attachmentniveau mesiobukkal 48
			
		// Berechnung des Attachmentniveaus 48 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_48_ml = y_gm_48_ml - y_pd_48_ml;	// Attachmentniveau mesiolingual 48

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