	// Definition der Variablen für das Formular
		var tooth_46 = 1;
		var Furkation_46_b = 0;
		var Furkation_46_l = 0;
		var Implantat_46 = 0;
		var bop_46_db = 0;
		var bop_46_b = 0;
		var bop_46_mb = 0;
		var pi_46_db = 0;
		var pi_46_b = 0;
		var pi_46_mb = 0;
		var bop_46_dl = 0;
		var bop_46_l = 0;
		var bop_46_ml = 0;
		var pi_46_dl = 0;
		var pi_46_l = 0;
		var pi_46_ml = 0;
		var gm_46_db = 0;
		var gm_46_b = 0;
		var gm_46_mb = 0;
		var pd_46_db = 0;
		var pd_46_b = 0;
		var pd_46_mb = 0;
		var gm_46_dl = 0;
		var gm_46_l = 0;
		var gm_46_ml = 0;
		var pd_46_dl = 0;
		var pd_46_l = 0;
		var pd_46_ml = 0;

	function clear_data_46() {
        if (tooth_46 == 1) {
			gm_46_db = 0;
			gm_46_b = 0;
			gm_46_mb = 0;
			pd_46_db = 0;
			pd_46_b = 0;
			pd_46_mb = 0;
	
				document.getElementById('gm_46_db_txt').value = 0;
				document.getElementById('gm_46_b_txt').value = 0;
				document.getElementById('gm_46_mb_txt').value = 0;
				
				document.getElementById('pd_46_db_txt').value = 0;
				document.getElementById('pd_46_b_txt').value = 0;
				document.getElementById('pd_46_mb_txt').value = 0;
			
				document.forms[0]["pd_46_db"].style.color = 'black'
				document.forms[0]["pd_46_b"].style.color = 'black'
				document.forms[0]["pd_46_mb"].style.color = 'black'
			
			gm_46_dl = 0;
			gm_46_l = 0;
			gm_46_ml = 0;
			pd_46_dl = 0;
			pd_46_l = 0;
			pd_46_ml = 0;

				document.getElementById('gm_46_dl_txt').value = 0;
				document.getElementById('gm_46_l_txt').value = 0;
				document.getElementById('gm_46_ml_txt').value = 0;
				
				document.getElementById('pd_46_dl_txt').value = 0;
				document.getElementById('pd_46_l_txt').value = 0;
				document.getElementById('pd_46_ml_txt').value = 0;

				document.forms[0]["pd_46_dl"].style.color = 'black'
				document.forms[0]["pd_46_l"].style.color = 'black'
				document.forms[0]["pd_46_ml"].style.color = 'black'
			
			change_probing_46();
			
			mobility_46 = 0;

				document.getElementById('mobility_46_txt').value = "0";

			note_46 = "";

				document.getElementById('note_46_txt').value = "";

			Furkation_46_b = 0;
			Furkation_46_l = 0;

				document.getElementById('furkation_1_46_b').style.display = 'none';
				document.getElementById('furkation_2_46_b').style.display = 'none';
				document.getElementById('furkation_3_46_b').style.display = 'none';
					
				document.getElementById('furkation_1_46_b_tab').style.display = 'none';
				document.getElementById('furkation_2_46_b_tab').style.display = 'none';
				document.getElementById('furkation_3_46_b_tab').style.display = 'none';
				
				document.getElementById('furkation_1_46_l').style.display = 'none';
				document.getElementById('furkation_2_46_l').style.display = 'none';
				document.getElementById('furkation_3_46_l').style.display = 'none';
					
				document.getElementById('furkation_1_46_l_tab').style.display = 'none';
				document.getElementById('furkation_2_46_l_tab').style.display = 'none';
				document.getElementById('furkation_3_46_l_tab').style.display = 'none';
				
			bop_46_db = 0;
			bop_46_b = 0;
			bop_46_mb = 0;
					
			bop_46_dl = 0;
			bop_46_l = 0;
			bop_46_ml = 0;
					
				document.getElementById('bop_46_db_rectangle').style.display = 'none';
				document.getElementById('bop_46_b_rectangle').style.display = 'none';
				document.getElementById('bop_46_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_46_dl_rectangle').style.display = 'none';
				document.getElementById('bop_46_l_rectangle').style.display = 'none';
				document.getElementById('bop_46_ml_rectangle').style.display = 'none';
				
			pi_46_db = 0;
			pi_46_b = 0;
			pi_46_mb = 0;
					
			pi_46_dl = 0;
			pi_46_l = 0;
			pi_46_ml = 0;

				document.getElementById('pi_46_db_rectangle').style.display = 'none';
				document.getElementById('pi_46_b_rectangle').style.display = 'none';
				document.getElementById('pi_46_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_46_dl_rectangle').style.display = 'none';
				document.getElementById('pi_46_l_rectangle').style.display = 'none';
				document.getElementById('pi_46_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_46() {
		if (tooth_46 === 1) {
			tooth_46 = 0;
			document.getElementById('tooth_line_46_b').style.display = 'block';
			document.getElementById('tooth_line_46_l').style.display = 'block';
			
			document.getElementById('mobility_46_txt').style.display = 'none';
			
			document.getElementById('implantat_46_btn').style.display = 'none';
			document.getElementById('implantat_46_tab').style.display = 'none';
			document.getElementById('implantat_46_b_image').style.display = 'none';
			document.getElementById('implantat_46_l_image').style.display = 'none';
			
			document.getElementById('furkation_46_b_btn').style.display = 'none';
			document.getElementById('furkation_46_l_btn').style.display = 'none';
			
			document.getElementById('furkation_1_46_b').style.display = 'none';
			document.getElementById('furkation_2_46_b').style.display = 'none';
			document.getElementById('furkation_3_46_b').style.display = 'none';
			
			document.getElementById('furkation_1_46_b_tab').style.display = 'none';
			document.getElementById('furkation_2_46_b_tab').style.display = 'none';
			document.getElementById('furkation_3_46_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_46_l').style.display = 'none';
			document.getElementById('furkation_2_46_l').style.display = 'none';
			document.getElementById('furkation_3_46_l').style.display = 'none';
			
			document.getElementById('furkation_1_46_l_tab').style.display = 'none';
			document.getElementById('furkation_2_46_l_tab').style.display = 'none';
			document.getElementById('furkation_3_46_l_tab').style.display = 'none';
			
			document.getElementById('gm_46_db_txt').style.display = 'none';
			document.getElementById('gm_46_b_txt').style.display = 'none';
			document.getElementById('gm_46_mb_txt').style.display = 'none';
			
			document.getElementById('pd_46_db_txt').style.display = 'none';
			document.getElementById('pd_46_b_txt').style.display = 'none';
			document.getElementById('pd_46_mb_txt').style.display = 'none';
			
			document.getElementById('gm_46_dl_txt').style.display = 'none';
			document.getElementById('gm_46_l_txt').style.display = 'none';
			document.getElementById('gm_46_ml_txt').style.display = 'none';
			
			document.getElementById('pd_46_dl_txt').style.display = 'none';
			document.getElementById('pd_46_l_txt').style.display = 'none';
			document.getElementById('pd_46_ml_txt').style.display = 'none';
			
			document.getElementById('bop_46_db_rectangle').style.display = 'none';
			document.getElementById('bop_46_b_rectangle').style.display = 'none';
			document.getElementById('bop_46_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_46_dl_rectangle').style.display = 'none';
			document.getElementById('bop_46_l_rectangle').style.display = 'none';
			document.getElementById('bop_46_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_46_db_btn').style.display = 'none';
			document.getElementById('bop_46_b_btn').style.display = 'none';
			document.getElementById('bop_46_mb_btn').style.display = 'none';
			
			document.getElementById('bop_46_dl_btn').style.display = 'none';
			document.getElementById('bop_46_l_btn').style.display = 'none';
			document.getElementById('bop_46_ml_btn').style.display = 'none';
			
			document.getElementById('pi_46_db_rectangle').style.display = 'none';
			document.getElementById('pi_46_b_rectangle').style.display = 'none';
			document.getElementById('pi_46_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_46_dl_rectangle').style.display = 'none';
			document.getElementById('pi_46_l_rectangle').style.display = 'none';
			document.getElementById('pi_46_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_46_db_btn').style.display = 'none';
			document.getElementById('pi_46_b_btn').style.display = 'none';
			document.getElementById('pi_46_mb_btn').style.display = 'none';
			
			document.getElementById('pi_46_dl_btn').style.display = 'none';
			document.getElementById('pi_46_l_btn').style.display = 'none';
			document.getElementById('pi_46_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_46_b').style.display = 'none';
			document.getElementById('polyline_al_46_b').style.display = 'none';
			document.getElementById('polyline_gm_46_b').style.display = 'none';
			
			document.getElementById('polygon_46_l').style.display = 'none';
			document.getElementById('polyline_al_46_l').style.display = 'none';
			document.getElementById('polyline_gm_46_l').style.display = 'none';
			
			document.getElementById('polygon_inter_47_46_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_47_46_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_47_46_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_47_46_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_47_46_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_47_46_l').style.display = 'none';            
            
			document.getElementById('polygon_inter_46_45_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_46_45_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_46_45_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_46_45_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_46_45_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_46_45_l').style.display = 'none';            
			
			document.getElementById('note_46_txt').style.display = 'none';
		}
		else if (Implantat_46 !== 1) {
			tooth_46 = 1;
			document.getElementById('tooth_line_46_b').style.display = 'none';
			document.getElementById('tooth_line_46_l').style.display = 'none';

			document.getElementById('mobility_46_txt').style.display = 'block';

			document.getElementById('implantat_46_btn').style.display = 'block';

			document.getElementById('furkation_46_b_btn').style.display = 'block';
			document.getElementById('furkation_46_l_btn').style.display = 'block';
			
			document.getElementById('gm_46_db_txt').style.display = 'block';
			document.getElementById('gm_46_b_txt').style.display = 'block';
			document.getElementById('gm_46_mb_txt').style.display = 'block';
			
			document.getElementById('pd_46_db_txt').style.display = 'block';
			document.getElementById('pd_46_b_txt').style.display = 'block';
			document.getElementById('pd_46_mb_txt').style.display = 'block';
			
			document.getElementById('gm_46_dl_txt').style.display = 'block';
			document.getElementById('gm_46_l_txt').style.display = 'block';
			document.getElementById('gm_46_ml_txt').style.display = 'block';
			
			document.getElementById('pd_46_dl_txt').style.display = 'block';
			document.getElementById('pd_46_l_txt').style.display = 'block';
			document.getElementById('pd_46_ml_txt').style.display = 'block';
			
			document.getElementById('note_46_txt').style.display = 'block';

			document.getElementById('polygon_46_b').style.display = 'block';
			document.getElementById('polyline_al_46_b').style.display = 'block';
			document.getElementById('polyline_gm_46_b').style.display = 'block';
			
			document.getElementById('polygon_46_l').style.display = 'block';
			document.getElementById('polyline_al_46_l').style.display = 'block';
			document.getElementById('polyline_gm_46_l').style.display = 'block';

            if (tooth_47 == 1 && tooth_46 == 1) {
				document.getElementById('polygon_inter_47_46_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_47_46_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_47_46_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_47_46_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_47_46_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_47_46_l').style.display = 'block';            
            }
            
            if (tooth_46 == 1 && tooth_45 == 1) {
				document.getElementById('polygon_inter_46_45_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_46_45_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_46_45_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_46_45_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_46_45_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_46_45_l').style.display = 'block';            
            }

			if (Furkation_46_b == 1) {
				document.getElementById('furkation_1_46_b').style.display = 'block';
			} else if (Furkation_46_b == 2) {
				document.getElementById('furkation_2_46_b').style.display = 'block';
			} else if (Furkation_46_b == 3) {
				document.getElementById('furkation_3_46_b').style.display = 'block';
			}
			if (Furkation_46_b == 1) {
				document.getElementById('furkation_1_46_b_tab').style.display = 'block';
			} else if (Furkation_46_b == 2) {
				document.getElementById('furkation_2_46_b_tab').style.display = 'block';
			} else if (Furkation_46_b == 3) {
				document.getElementById('furkation_3_46_b_tab').style.display = 'block';
			}
			if (Furkation_46_l == 1) {
				document.getElementById('furkation_1_46_l').style.display = 'block';
			} else if (Furkation_46_l == 2) {
				document.getElementById('furkation_2_46_l').style.display = 'block';
			} else if (Furkation_46_l == 3) {
				document.getElementById('furkation_3_46_l').style.display = 'block';
			}
			if (Furkation_46_l == 1) {
				document.getElementById('furkation_1_46_l_tab').style.display = 'block';
			} else if (Furkation_46_l == 2) {
				document.getElementById('furkation_2_46_l_tab').style.display = 'block';
			} else if (Furkation_46_l == 3) {
				document.getElementById('furkation_3_46_l_tab').style.display = 'block';
			}

			document.getElementById('bop_46_db_btn').style.display = 'block';
			document.getElementById('bop_46_b_btn').style.display = 'block';
			document.getElementById('bop_46_mb_btn').style.display = 'block';

			document.getElementById('bop_46_dl_btn').style.display = 'block';
			document.getElementById('bop_46_l_btn').style.display = 'block';
			document.getElementById('bop_46_ml_btn').style.display = 'block';
			
			if (bop_46_db == 1) {
				document.getElementById('bop_46_db_rectangle').style.display = 'block';
			}
			if (bop_46_b == 1) {
				document.getElementById('bop_46_b_rectangle').style.display = 'block';
			}
			if (bop_46_mb == 1) {
				document.getElementById('bop_46_mb_rectangle').style.display = 'block';
			}
			if (bop_46_dl == 1) {
				document.getElementById('bop_46_dl_rectangle').style.display = 'block';
			}
			if (bop_46_l == 1) {
				document.getElementById('bop_46_l_rectangle').style.display = 'block';
			}
			if (bop_46_ml == 1) {
				document.getElementById('bop_46_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_46_db_btn').style.display = 'block';
			document.getElementById('pi_46_b_btn').style.display = 'block';
			document.getElementById('pi_46_mb_btn').style.display = 'block';

			document.getElementById('pi_46_dl_btn').style.display = 'block';
			document.getElementById('pi_46_l_btn').style.display = 'block';
			document.getElementById('pi_46_ml_btn').style.display = 'block';
			
			if (pi_46_db == 1) {
				document.getElementById('pi_46_db_rectangle').style.display = 'block';
			}
			if (pi_46_b == 1) {
				document.getElementById('pi_46_b_rectangle').style.display = 'block';
			}
			if (pi_46_mb == 1) {
				document.getElementById('pi_46_mb_rectangle').style.display = 'block';
			}
			if (pi_46_dl == 1) {
				document.getElementById('pi_46_dl_rectangle').style.display = 'block';
			}
			if (pi_46_l == 1) {
				document.getElementById('pi_46_l_rectangle').style.display = 'block';
			}
			if (pi_46_ml == 1) {
				document.getElementById('pi_46_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_46 == 1) {
			tooth_46 = 1;
			document.getElementById('tooth_line_46_b').style.display = 'none';
			document.getElementById('tooth_line_46_l').style.display = 'none';

			document.getElementById('mobility_46_txt').style.display = 'block';
			
			document.getElementById('note_46_txt').style.display = 'block';

			document.getElementById('implantat_46_btn').style.display = 'block';
			document.getElementById('implantat_46_tab').style.display = 'block';
			document.getElementById('implantat_46_b_image').style.display = 'block';
			document.getElementById('implantat_46_l_image').style.display = 'block';

			document.getElementById('gm_46_db_txt').style.display = 'block';
			document.getElementById('gm_46_b_txt').style.display = 'block';
			document.getElementById('gm_46_mb_txt').style.display = 'block';
			
			document.getElementById('pd_46_db_txt').style.display = 'block';
			document.getElementById('pd_46_b_txt').style.display = 'block';
			document.getElementById('pd_46_mb_txt').style.display = 'block';
			
			document.getElementById('gm_46_dl_txt').style.display = 'block';
			document.getElementById('gm_46_l_txt').style.display = 'block';
			document.getElementById('gm_46_ml_txt').style.display = 'block';
			
			document.getElementById('pd_46_dl_txt').style.display = 'block';
			document.getElementById('pd_46_l_txt').style.display = 'block';
			document.getElementById('pd_46_ml_txt').style.display = 'block';

			document.getElementById('polygon_46_b').style.display = 'block';
			document.getElementById('polyline_al_46_b').style.display = 'block';
			document.getElementById('polyline_gm_46_b').style.display = 'block';
			
			document.getElementById('polygon_46_l').style.display = 'block';
			document.getElementById('polyline_al_46_l').style.display = 'block';
			document.getElementById('polyline_gm_46_l').style.display = 'block';

            if (tooth_47 == 1 && tooth_46 == 1) {
				document.getElementById('polygon_inter_47_46_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_47_46_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_47_46_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_47_46_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_47_46_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_47_46_l').style.display = 'block';            
            }
            
            if (tooth_46 == 1 && tooth_45 == 1) {
				document.getElementById('polygon_inter_46_45_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_46_45_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_46_45_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_46_45_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_46_45_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_46_45_l').style.display = 'block';            
            }

			document.getElementById('bop_46_db_btn').style.display = 'block';
			document.getElementById('bop_46_b_btn').style.display = 'block';
			document.getElementById('bop_46_mb_btn').style.display = 'block';

			document.getElementById('bop_46_dl_btn').style.display = 'block';
			document.getElementById('bop_46_l_btn').style.display = 'block';
			document.getElementById('bop_46_ml_btn').style.display = 'block';
			
			document.getElementById('pi_46_db_btn').style.display = 'block';
			document.getElementById('pi_46_b_btn').style.display = 'block';
			document.getElementById('pi_46_mb_btn').style.display = 'block';

			document.getElementById('pi_46_dl_btn').style.display = 'block';
			document.getElementById('pi_46_l_btn').style.display = 'block';
			document.getElementById('pi_46_ml_btn').style.display = 'block';
			
			if (bop_46_db == 1) {
				document.getElementById('bop_46_db_rectangle').style.display = 'block';
			}
			if (bop_46_b == 1) {
				document.getElementById('bop_46_b_rectangle').style.display = 'block';
			}
			if (bop_46_mb == 1) {
				document.getElementById('bop_46_mb_rectangle').style.display = 'block';
			}
			if (bop_46_dl == 1) {
				document.getElementById('bop_46_dl_rectangle').style.display = 'block';
			}
			if (bop_46_l == 1) {
				document.getElementById('bop_46_l_rectangle').style.display = 'block';
			}
			if (bop_46_ml == 1) {
				document.getElementById('bop_46_ml_rectangle').style.display = 'block';
			}
			
			if (pi_46_db == 1) {
				document.getElementById('pi_46_db_rectangle').style.display = 'block';
			}
			if (pi_46_b == 1) {
				document.getElementById('pi_46_b_rectangle').style.display = 'block';
			}
			if (pi_46_mb == 1) {
				document.getElementById('pi_46_mb_rectangle').style.display = 'block';
			}
			if (pi_46_dl == 1) {
				document.getElementById('pi_46_dl_rectangle').style.display = 'block';
			}
			if (pi_46_l == 1) {
				document.getElementById('pi_46_l_rectangle').style.display = 'block';
			}
			if (pi_46_ml == 1) {
				document.getElementById('pi_46_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_46();
	}

	function toggle_implant_46() {
		if (Implantat_46 == 0) {
			Implantat_46 = 1;
			
			document.getElementById('implantat_46_b_image').style.display = 'block';
			document.getElementById('implantat_46_l_image').style.display = 'block';
			document.getElementById('implantat_46_tab').style.display = 'block';
			
			document.getElementById('furkation_46_b_btn').style.display = 'none';
			document.getElementById('furkation_46_l_btn').style.display = 'none';
			
			document.getElementById('furkation_1_46_b').style.display = 'none';
			document.getElementById('furkation_2_46_b').style.display = 'none';
			document.getElementById('furkation_3_46_b').style.display = 'none';
			
			document.getElementById('furkation_1_46_b_tab').style.display = 'none';
			document.getElementById('furkation_2_46_b_tab').style.display = 'none';
			document.getElementById('furkation_3_46_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_46_l').style.display = 'none';
			document.getElementById('furkation_2_46_l').style.display = 'none';
			document.getElementById('furkation_3_46_l').style.display = 'none';
			
			document.getElementById('furkation_1_46_l_tab').style.display = 'none';
			document.getElementById('furkation_2_46_l_tab').style.display = 'none';
			document.getElementById('furkation_3_46_l_tab').style.display = 'none';
		}
		else {
			Implantat_46 = 0;
			
			document.getElementById('implantat_46_b_image').style.display = 'none';
			document.getElementById('implantat_46_l_image').style.display = 'none';
			document.getElementById('implantat_46_tab').style.display = 'none';
			
			document.getElementById('furkation_46_b_btn').style.display = 'block';
			document.getElementById('furkation_46_l_btn').style.display = 'block';

			if (Furkation_46_b == 1) {
				document.getElementById('furkation_1_46_b').style.display = 'block';
			} else if (Furkation_46_b == 2) {
				document.getElementById('furkation_2_46_b').style.display = 'block';
			} else if (Furkation_46_b == 3) {
				document.getElementById('furkation_3_46_b').style.display = 'block';
			}
			if (Furkation_46_b == 1) {
				document.getElementById('furkation_1_46_b_tab').style.display = 'block';
			} else if (Furkation_46_b == 2) {
				document.getElementById('furkation_2_46_b_tab').style.display = 'block';
			} else if (Furkation_46_b == 3) {
				document.getElementById('furkation_3_46_b_tab').style.display = 'block';
			}
			if (Furkation_46_l == 1) {
				document.getElementById('furkation_1_46_l').style.display = 'block';
			} else if (Furkation_46_l == 2) {
				document.getElementById('furkation_2_46_l').style.display = 'block';
			} else if (Furkation_46_l == 3) {
				document.getElementById('furkation_3_46_l').style.display = 'block';
			}
			if (Furkation_46_l == 1) {
				document.getElementById('furkation_1_46_l_tab').style.display = 'block';
			} else if (Furkation_46_l == 2) {
				document.getElementById('furkation_2_46_l_tab').style.display = 'block';
			} else if (Furkation_46_l == 3) {
				document.getElementById('furkation_3_46_l_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_46_b() {
		if (Furkation_46_b == 0) {
			document.getElementById('furkation_1_46_b_tab').style.display = 'block';
			document.getElementById('furkation_2_46_b_tab').style.display = 'none';
			document.getElementById('furkation_3_46_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_46_b').style.display = 'block';
			document.getElementById('furkation_2_46_b').style.display = 'none';
			document.getElementById('furkation_3_46_b').style.display = 'none';

			Furkation_46_b = 1;
		}
		else if (Furkation_46_b == 1) {
			document.getElementById('furkation_1_46_b_tab').style.display = 'none';
			document.getElementById('furkation_2_46_b_tab').style.display = 'block';
			document.getElementById('furkation_3_46_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_46_b').style.display = 'none';
			document.getElementById('furkation_2_46_b').style.display = 'block';
			document.getElementById('furkation_3_46_b').style.display = 'none';
			
			Furkation_46_b = 2;
		}
		else if (Furkation_46_b == 2) {
			document.getElementById('furkation_1_46_b_tab').style.display = 'none';
			document.getElementById('furkation_2_46_b_tab').style.display = 'none';
			document.getElementById('furkation_3_46_b_tab').style.display = 'block';
			
			document.getElementById('furkation_1_46_b').style.display = 'none';
			document.getElementById('furkation_2_46_b').style.display = 'none';
			document.getElementById('furkation_3_46_b').style.display = 'block';
						
			Furkation_46_b = 3;
		}
		else if (Furkation_46_b == 3) {
			document.getElementById('furkation_1_46_b_tab').style.display = 'none';
			document.getElementById('furkation_2_46_b_tab').style.display = 'none';
			document.getElementById('furkation_3_46_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_46_b').style.display = 'none';
			document.getElementById('furkation_2_46_b').style.display = 'none';
			document.getElementById('furkation_3_46_b').style.display = 'none';
						
			Furkation_46_b = 0;
		}
	}

	function toggle_furcation_46_l() {
		if (Furkation_46_l == 0) {
			document.getElementById('furkation_1_46_l_tab').style.display = 'block';
			document.getElementById('furkation_2_46_l_tab').style.display = 'none';
			document.getElementById('furkation_3_46_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_46_l').style.display = 'block';
			document.getElementById('furkation_2_46_l').style.display = 'none';
			document.getElementById('furkation_3_46_l').style.display = 'none';

			Furkation_46_l = 1;
		}
		else if (Furkation_46_l == 1) {
			document.getElementById('furkation_1_46_l_tab').style.display = 'none';
			document.getElementById('furkation_2_46_l_tab').style.display = 'block';
			document.getElementById('furkation_3_46_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_46_l').style.display = 'none';
			document.getElementById('furkation_2_46_l').style.display = 'block';
			document.getElementById('furkation_3_46_l').style.display = 'none';
			
			Furkation_46_l = 2;
		}
		else if (Furkation_46_l == 2) {
			document.getElementById('furkation_1_46_l_tab').style.display = 'none';
			document.getElementById('furkation_2_46_l_tab').style.display = 'none';
			document.getElementById('furkation_3_46_l_tab').style.display = 'block';
			
			document.getElementById('furkation_1_46_l').style.display = 'none';
			document.getElementById('furkation_2_46_l').style.display = 'none';
			document.getElementById('furkation_3_46_l').style.display = 'block';
						
			Furkation_46_l = 3;
		}
		else if (Furkation_46_l == 3) {
			document.getElementById('furkation_1_46_l_tab').style.display = 'none';
			document.getElementById('furkation_2_46_l_tab').style.display = 'none';
			document.getElementById('furkation_3_46_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_46_l').style.display = 'none';
			document.getElementById('furkation_2_46_l').style.display = 'none';
			document.getElementById('furkation_3_46_l').style.display = 'none';
						
			Furkation_46_l = 0;
		}
	}

	function toggle_bop_46_db() {
		if (bop_46_db == 0) {
			bop_46_db = 1;
			document.getElementById('bop_46_db_rectangle').style.display = 'block';
		}
		else {
			bop_46_db = 0;
			document.getElementById('bop_46_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_46_b() {
		if (bop_46_b == 0) {
			bop_46_b = 1;
			document.getElementById('bop_46_b_rectangle').style.display = 'block';
		}
		else {
			bop_46_b = 0;
			document.getElementById('bop_46_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_46_mb() {
		if (bop_46_mb == 0) {
			bop_46_mb = 1;
			document.getElementById('bop_46_mb_rectangle').style.display = 'block';
		}
		else {
			bop_46_mb = 0;
			document.getElementById('bop_46_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_46_db() {
		if (pi_46_db == 0) {
			pi_46_db = 1;
			document.getElementById('pi_46_db_rectangle').style.display = 'block';
		}
		else {
			pi_46_db = 0;
			document.getElementById('pi_46_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_46_b() {
		if (pi_46_b == 0) {
			pi_46_b = 1;
			document.getElementById('pi_46_b_rectangle').style.display = 'block';
		}
		else {
			pi_46_b = 0;
			document.getElementById('pi_46_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_46_mb() {
		if (pi_46_mb == 0) {
			pi_46_mb = 1;
			document.getElementById('pi_46_mb_rectangle').style.display = 'block';
		}
		else {
			pi_46_mb = 0;
			document.getElementById('pi_46_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_46_dl() {
		if (bop_46_dl == 0) {
			bop_46_dl = 1;
			document.getElementById('bop_46_dl_rectangle').style.display = 'block';
		}
		else {
			bop_46_dl = 0;
			document.getElementById('bop_46_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_46_l() {
		if (bop_46_l == 0) {
			bop_46_l = 1;
			document.getElementById('bop_46_l_rectangle').style.display = 'block';
		}
		else {
			bop_46_l = 0;
			document.getElementById('bop_46_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_46_ml() {
		if (bop_46_ml == 0) {
			bop_46_ml = 1;
			document.getElementById('bop_46_ml_rectangle').style.display = 'block';
		}
		else {
			bop_46_ml = 0;
			document.getElementById('bop_46_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_46_dl() {
		if (pi_46_dl == 0) {
			pi_46_dl = 1;
			document.getElementById('pi_46_dl_rectangle').style.display = 'block';
		}
		else {
			pi_46_dl = 0;
			document.getElementById('pi_46_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_46_l() {
		if (pi_46_l == 0) {
			pi_46_l = 1;
			document.getElementById('pi_46_l_rectangle').style.display = 'block';
		}
		else {
			pi_46_l = 0;
			document.getElementById('pi_46_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_46_ml() {
		if (pi_46_ml == 0) {
			pi_46_ml = 1;
			document.getElementById('pi_46_ml_rectangle').style.display = 'block';
		}
		else {
			pi_46_ml = 0;
			document.getElementById('pi_46_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_46() {
		if (tooth_46 == 1) {
			
		// Variablen aus dem Formular
			pd_46_db = document.forms[0]["pd_46_db"].value;
			pd_46_b = document.forms[0]["pd_46_b"].value;
			pd_46_mb = document.forms[0]["pd_46_mb"].value;

			if (document.forms[0]["pd_46_dl"].value > 3) {document.forms[0]["pd_46_dl"].style.color = 'red';} else {document.forms[0]["pd_46_dl"].style.color = 'black'};
			if (document.forms[0]["pd_46_l"].value > 3) {document.forms[0]["pd_46_l"].style.color = 'red';} else {document.forms[0]["pd_46_l"].style.color = 'black'};
			if (document.forms[0]["pd_46_ml"].value > 3) {document.forms[0]["pd_46_ml"].style.color = 'red';} else {document.forms[0]["pd_46_ml"].style.color = 'black'};
			
			gm_46_db = document.forms[0]["gm_46_db"].value;
			gm_46_b = document.forms[0]["gm_46_b"].value;
			gm_46_mb = document.forms[0]["gm_46_mb"].value;
			
			pd_46_dl = document.forms[0]["pd_46_dl"].value;
			pd_46_l = document.forms[0]["pd_46_l"].value;
			pd_46_ml = document.forms[0]["pd_46_ml"].value;

			if (document.forms[0]["pd_46_db"].value > 3) {document.forms[0]["pd_46_db"].style.color = 'red';} else {document.forms[0]["pd_46_db"].style.color = 'black'};
			if (document.forms[0]["pd_46_b"].value > 3) {document.forms[0]["pd_46_b"].style.color = 'red';} else {document.forms[0]["pd_46_b"].style.color = 'black'};
			if (document.forms[0]["pd_46_mb"].value > 3) {document.forms[0]["pd_46_mb"].style.color = 'red';} else {document.forms[0]["pd_46_mb"].style.color = 'black'};
			
			gm_46_dl = document.forms[0]["gm_46_dl"].value;
			gm_46_l = document.forms[0]["gm_46_l"].value;
			gm_46_ml = document.forms[0]["gm_46_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
			var x_db_46 = 422;							// distal 46
			var x_mb_46 = 469;							// mesial 46
			var x_b_46 = (x_db_46 + x_mb_46)/2;			// bukkal 46
			
		// Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
			var x_dl_46 = 425;							// distal 46
			var x_ml_46 = 469;							// mesial 46
			var x_l_46 = (x_dl_46 + x_ml_46)/2;			// lingual 46
			
		// Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
			var y_gm_46_db = gm_UK_b - 6.05 * gm_46_db;	// Margo Gingivae distobukkal 46
			var y_gm_46_b = gm_UK_b - 6.05 * gm_46_b;	// Margo Gingivae bukkal 46
			var y_gm_46_mb = gm_UK_b - 6.05 * gm_46_mb;	// Margo Gingivae mesiobukkal 46
			var y_pd_46_db = 6.05 * pd_46_db;			// Sondierungstiefe distobukkal 46
			var y_pd_46_b = 6.05 * pd_46_b;				// Sondierungstiefe bukkal 46
			var y_pd_46_mb = 6.05 * pd_46_mb;			// Sondierungstiefe mesiobukkal 46
			
		// Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
			var y_gm_46_dl = gm_UK_l + 6.05 * gm_46_dl;	// Margo Gingivae distolingual 46
			var y_gm_46_l = gm_UK_l + 6.05 * gm_46_l;	// Margo Gingivae lingual 46
			var y_gm_46_ml = gm_UK_l + 6.05 * gm_46_ml;	// Margo Gingivae mesiolingual 46
			var y_pd_46_dl = 6.05 * pd_46_dl;			// Sondierungstiefe distolingual 46
			var y_pd_46_l = 6.05 * pd_46_l;				// Sondierungstiefe lingual 46
			var y_pd_46_ml = 6.05 * pd_46_ml;			// Sondierungstiefe mesiolingual 46
			
		// Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_46_db = y_gm_46_db + y_pd_46_db;	// Attachmentniveau distobukkal 46
			var y_al_46_b = y_gm_46_b + y_pd_46_b;		// Attachmentniveau bukkal 46
			var y_al_46_mb = y_gm_46_mb + y_pd_46_mb;	// Attachmentniveau mesiobukkal 46
			
		// Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_46_dl = y_gm_46_dl - y_pd_46_dl;	// Attachmentniveau distolingual 46
			var y_al_46_l = y_gm_46_l - y_pd_46_l;		// Attachmentniveau lingual 46
			var y_al_46_ml = y_gm_46_ml - y_pd_46_ml;	// Attachmentniveau mesiolingual 46

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[46].storeCoordinates(
				x_db_46, x_mb_46, x_dl_46, x_ml_46, x_b_46, x_l_46,
				y_gm_46_db, y_gm_46_b, y_gm_46_mb, y_pd_46_db, y_pd_46_b, y_pd_46_mb,
				y_gm_46_dl, y_gm_46_l, y_gm_46_ml, y_pd_46_dl, y_pd_46_l, y_pd_46_ml,
				y_al_46_db, y_al_46_b, y_al_46_mb, y_al_46_dl, y_al_46_l, y_al_46_ml
			);

		// Parodontaltasche 46 bukkal zeichnen
			var string = 
				x_db_46 + ", " + y_al_46_db + "  " + 
				x_b_46 + ", " + y_al_46_b + "  " + 
				x_mb_46 + ", " + y_al_46_mb + "  " + 
				x_mb_46 + ", " + y_gm_46_mb + "  " + 
				x_b_46 + ", " + y_gm_46_b + "  " + 
				x_db_46 + ", " + y_gm_46_db;
			document.getElementById("polygon_46_b").setAttribute("points", string);
		// Attachmentniveau 46 bukkal zeichnen
			var string = 
				x_db_46 + ", " + y_al_46_db + "  " + 
				x_b_46 + ", " + y_al_46_b + "  " + 
				x_mb_46 + ", " + y_al_46_mb;
			document.getElementById("polyline_al_46_b").setAttribute("points", string);
		// Margo Gingivae 46 bukkal zeichnen
			var string =
				x_db_46 + ", " + y_gm_46_db + "  " + 
				x_b_46 + ", " + y_gm_46_b + "  " + 
				x_mb_46 + ", " + y_gm_46_mb;
			document.getElementById("polyline_gm_46_b").setAttribute("points", string);

		// Parodontaltasche 46 lingual zeichnen
			var string = 
				x_dl_46 + ", " + y_al_46_dl + "  " + 
				x_l_46 + ", " + y_al_46_l + "  " + 
				x_ml_46 + ", " + y_al_46_ml + "  " + 
				x_ml_46 + ", " + y_gm_46_ml + "  " + 
				x_l_46 + ", " + y_gm_46_l + "  " + 
				x_dl_46 + ", " + y_gm_46_dl;
			document.getElementById("polygon_46_l").setAttribute("points", string);
		// Attachmentniveau 46 lingual zeichnen
			var string = 
				x_dl_46 + ", " + y_al_46_dl + "  " + 
				x_l_46 + ", " + y_al_46_l + "  " + 
				x_ml_46 + ", " + y_al_46_ml;
			document.getElementById("polyline_al_46_l").setAttribute("points", string);
		// Margo Gingivae 46 lingual zeichnen
			var string =
				x_dl_46 + ", " + y_gm_46_dl + "  " + 
				x_l_46 + ", " + y_gm_46_l + "  " + 
				x_ml_46 + ", " + y_gm_46_ml;
			document.getElementById("polyline_gm_46_l").setAttribute("points", string);
		}
        if (tooth_46 == 1 && tooth_45 == 1) {

            pd_45_db = document.forms[0]["pd_45_db"].value;
			gm_45_db = document.forms[0]["gm_45_db"].value;
			
			pd_45_dl = document.forms[0]["pd_45_dl"].value;
			gm_45_dl = document.forms[0]["gm_45_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 45 (bukkal) in der Bitmap
			var x_db_45 = 492;							// distal 45
			
		// Set der horizontalen Koordinaten von Zahn 45 (lingual) in der Bitmap
			var x_dl_45 = 489;							// distal 45
			
		// Set der vertikalen Koordinaten von Zahn 45 (bukkal) aus dem Formular
			var y_gm_45_db = gm_UK_b - 6.05 * gm_45_db;	// Margo Gingivae distobukkal 45
			var y_pd_45_db = 6.05 * pd_45_db;			// Sondierungstiefe distobukkal 45
			
		// Set der vertikalen Koordinaten von Zahn 45 (lingual) aus dem Formular
			var y_gm_45_dl = gm_UK_l + 6.05 * gm_45_dl;	// Margo Gingivae distolingual 45
			var y_pd_45_dl = 6.05 * pd_45_dl;			// Sondierungstiefe distolingual 45
			
		// Berechnung des Attachmentniveaus 45 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_45_db = y_gm_45_db + y_pd_45_db;	// Attachmentniveau distobukkal 45
			
		// Berechnung des Attachmentniveaus 45 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_45_dl = y_gm_45_dl - y_pd_45_dl;	// Attachmentniveau distolingual 45

		// Parodontaltasche inter_46_45 bukkal zeichnen
			var string = 
				x_mb_46 + ", " + y_al_46_mb + "  " + 
				x_db_45 + ", " + y_al_45_db + "  " + 
				x_db_45 + ", " + y_gm_45_db + "  " + 
				x_mb_46 + ", " + y_gm_46_mb;
			document.getElementById("polygon_inter_46_45_b").setAttribute("points", string);
		// Attachmentniveau inter_46_45 bukkal zeichnen
			var string = 
				x_mb_46 + ", " + y_al_46_mb + "  " + 
				x_db_45 + ", " + y_al_45_db;
			document.getElementById("polyline_al_inter_46_45_b").setAttribute("points", string);
		// Margo Gingivae inter_46_45 bukkal zeichnen
			var string =
				x_mb_46 + ", " + y_gm_46_mb + "  " + 
				x_db_45 + ", " + y_gm_45_db;
			document.getElementById("polyline_gm_inter_46_45_b").setAttribute("points", string);

        // Parodontaltasche inter_46_45 lingual zeichnen
			var string = 
				x_ml_46 + ", " + y_al_46_ml + "  " + 
				x_dl_45 + ", " + y_al_45_dl + "  " + 
				x_dl_45 + ", " + y_gm_45_dl + "  " + 
				x_ml_46 + ", " + y_gm_46_ml;
			document.getElementById("polygon_inter_46_45_l").setAttribute("points", string);
		// Attachmentniveau inter_46_45 lingual zeichnen
			var string = 
				x_ml_46 + ", " + y_al_46_ml + "  " + 
				x_dl_45 + ", " + y_al_45_dl;
			document.getElementById("polyline_al_inter_46_45_l").setAttribute("points", string);
		// Margo Gingivae inter_46_45 lingual zeichnen
			var string =
				x_ml_46 + ", " + y_gm_46_ml + "  " + 
				x_dl_45 + ", " + y_gm_45_dl;
			document.getElementById("polyline_gm_inter_46_45_l").setAttribute("points", string);
		}
        if (tooth_47 == 1 && tooth_46 == 1) {

            pd_47_mb = document.forms[0]["pd_47_mb"].value;
			gm_47_mb = document.forms[0]["gm_47_mb"].value;
			
			pd_47_ml = document.forms[0]["pd_47_ml"].value;
			gm_47_ml = document.forms[0]["gm_47_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 47 (bukkal) in der Bitmap
			var x_mb_47 = 406;							// mesial 47
			
		// Set der horizontalen Koordinaten von Zahn 47 (lingual) in der Bitmap
			var x_ml_47 = 410;							// mesial 47
			
		// Set der vertikalen Koordinaten von Zahn 47 (bukkal) aus dem Formular
			var y_gm_47_mb = gm_UK_b - 6.05 * gm_47_mb;	// Margo Gingivae mesiobukkal 47
			var y_pd_47_mb = 6.05 * pd_47_mb;			// Sondierungstiefe mesiobukkal 47
			
		// Set der vertikalen Koordinaten von Zahn 47 (lingual) aus dem Formular
			var y_gm_47_ml = gm_UK_l + 6.05 * gm_47_ml;	// Margo Gingivae mesiolingual 47
			var y_pd_47_ml = 6.05 * pd_47_ml;			// Sondierungstiefe mesiolingual 47
			
		// Berechnung des Attachmentniveaus 47 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_47_mb = y_gm_47_mb + y_pd_47_mb;	// Attachmentniveau mesiobukkal 47
			
		// Berechnung des Attachmentniveaus 47 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_47_ml = y_gm_47_ml - y_pd_47_ml;	// Attachmentniveau mesiolingual 47

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
	}