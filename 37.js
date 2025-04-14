	// Definition der Variablen für das Formular
		var tooth_37 = 1;
		var Furkation_37_b = 0;
		var Furkation_37_l = 0;
		var Implantat_37 = 0;
		var bop_37_db = 0;
		var bop_37_b = 0;
		var bop_37_mb = 0;
		var pi_37_db = 0;
		var pi_37_b = 0;
		var pi_37_mb = 0;
		var bop_37_dl = 0;
		var bop_37_l = 0;
		var bop_37_ml = 0;
		var pi_37_dl = 0;
		var pi_37_l = 0;
		var pi_37_ml = 0;
		var gm_37_db = 0;
		var gm_37_b = 0;
		var gm_37_mb = 0;
		var pd_37_db = 0;
		var pd_37_b = 0;
		var pd_37_mb = 0;
		var gm_37_dl = 0;
		var gm_37_l = 0;
		var gm_37_ml = 0;
		var pd_37_dl = 0;
		var pd_37_l = 0;
		var pd_37_ml = 0;

	function clear_data_37() {
        if (tooth_37 == 1) {
			gm_37_db = 0;
			gm_37_b = 0;
			gm_37_mb = 0;
			pd_37_db = 0;
			pd_37_b = 0;
			pd_37_mb = 0;
	
				document.getElementById('gm_37_db_txt').value = 0;
				document.getElementById('gm_37_b_txt').value = 0;
				document.getElementById('gm_37_mb_txt').value = 0;
				
				document.getElementById('pd_37_db_txt').value = 0;
				document.getElementById('pd_37_b_txt').value = 0;
				document.getElementById('pd_37_mb_txt').value = 0;
			
				document.forms[0]["pd_37_db"].style.color = 'black'
				document.forms[0]["pd_37_b"].style.color = 'black'
				document.forms[0]["pd_37_mb"].style.color = 'black'
			
			gm_37_dl = 0;
			gm_37_l = 0;
			gm_37_ml = 0;
			pd_37_dl = 0;
			pd_37_l = 0;
			pd_37_ml = 0;

				document.getElementById('gm_37_dl_txt').value = 0;
				document.getElementById('gm_37_l_txt').value = 0;
				document.getElementById('gm_37_ml_txt').value = 0;
				
				document.getElementById('pd_37_dl_txt').value = 0;
				document.getElementById('pd_37_l_txt').value = 0;
				document.getElementById('pd_37_ml_txt').value = 0;

				document.forms[0]["pd_37_dl"].style.color = 'black'
				document.forms[0]["pd_37_l"].style.color = 'black'
				document.forms[0]["pd_37_ml"].style.color = 'black'
			
			change_probing_37();
			
			mobility_37 = 0;

				document.getElementById('mobility_37_txt').value = "0";

			note_37 = "";

				document.getElementById('note_37_txt').value = "";

			Furkation_37_b = 0;
			Furkation_37_l = 0;

				document.getElementById('furkation_1_37_b').style.display = 'none';
				document.getElementById('furkation_2_37_b').style.display = 'none';
				document.getElementById('furkation_3_37_b').style.display = 'none';
					
				document.getElementById('furkation_1_37_b_tab').style.display = 'none';
				document.getElementById('furkation_2_37_b_tab').style.display = 'none';
				document.getElementById('furkation_3_37_b_tab').style.display = 'none';
				
				document.getElementById('furkation_1_37_l').style.display = 'none';
				document.getElementById('furkation_2_37_l').style.display = 'none';
				document.getElementById('furkation_3_37_l').style.display = 'none';
					
				document.getElementById('furkation_1_37_l_tab').style.display = 'none';
				document.getElementById('furkation_2_37_l_tab').style.display = 'none';
				document.getElementById('furkation_3_37_l_tab').style.display = 'none';
				
			bop_37_db = 0;
			bop_37_b = 0;
			bop_37_mb = 0;
					
			bop_37_dl = 0;
			bop_37_l = 0;
			bop_37_ml = 0;
					
				document.getElementById('bop_37_db_rectangle').style.display = 'none';
				document.getElementById('bop_37_b_rectangle').style.display = 'none';
				document.getElementById('bop_37_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_37_dl_rectangle').style.display = 'none';
				document.getElementById('bop_37_l_rectangle').style.display = 'none';
				document.getElementById('bop_37_ml_rectangle').style.display = 'none';
				
			pi_37_db = 0;
			pi_37_b = 0;
			pi_37_mb = 0;
					
			pi_37_dl = 0;
			pi_37_l = 0;
			pi_37_ml = 0;

				document.getElementById('pi_37_db_rectangle').style.display = 'none';
				document.getElementById('pi_37_b_rectangle').style.display = 'none';
				document.getElementById('pi_37_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_37_dl_rectangle').style.display = 'none';
				document.getElementById('pi_37_l_rectangle').style.display = 'none';
				document.getElementById('pi_37_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_37() {
		if (tooth_37 === 1) {
			tooth_37 = 0;
			document.getElementById('tooth_line_37_b').style.display = 'block';
			document.getElementById('tooth_line_37_l').style.display = 'block';
			
			document.getElementById('mobility_37_txt').style.display = 'none';
			
			document.getElementById('implantat_37_btn').style.display = 'none';
			document.getElementById('implantat_37_tab').style.display = 'none';
			document.getElementById('implantat_37_b_image').style.display = 'none';
			document.getElementById('implantat_37_l_image').style.display = 'none';
			
			document.getElementById('furkation_37_b_btn').style.display = 'none';
			document.getElementById('furkation_37_l_btn').style.display = 'none';
			
			document.getElementById('furkation_1_37_b').style.display = 'none';
			document.getElementById('furkation_2_37_b').style.display = 'none';
			document.getElementById('furkation_3_37_b').style.display = 'none';
			
			document.getElementById('furkation_1_37_b_tab').style.display = 'none';
			document.getElementById('furkation_2_37_b_tab').style.display = 'none';
			document.getElementById('furkation_3_37_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_37_l').style.display = 'none';
			document.getElementById('furkation_2_37_l').style.display = 'none';
			document.getElementById('furkation_3_37_l').style.display = 'none';
			
			document.getElementById('furkation_1_37_l_tab').style.display = 'none';
			document.getElementById('furkation_2_37_l_tab').style.display = 'none';
			document.getElementById('furkation_3_37_l_tab').style.display = 'none';
			
			document.getElementById('gm_37_db_txt').style.display = 'none';
			document.getElementById('gm_37_b_txt').style.display = 'none';
			document.getElementById('gm_37_mb_txt').style.display = 'none';
			
			document.getElementById('pd_37_db_txt').style.display = 'none';
			document.getElementById('pd_37_b_txt').style.display = 'none';
			document.getElementById('pd_37_mb_txt').style.display = 'none';
			
			document.getElementById('gm_37_dl_txt').style.display = 'none';
			document.getElementById('gm_37_l_txt').style.display = 'none';
			document.getElementById('gm_37_ml_txt').style.display = 'none';
			
			document.getElementById('pd_37_dl_txt').style.display = 'none';
			document.getElementById('pd_37_l_txt').style.display = 'none';
			document.getElementById('pd_37_ml_txt').style.display = 'none';
			
			document.getElementById('bop_37_db_rectangle').style.display = 'none';
			document.getElementById('bop_37_b_rectangle').style.display = 'none';
			document.getElementById('bop_37_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_37_dl_rectangle').style.display = 'none';
			document.getElementById('bop_37_l_rectangle').style.display = 'none';
			document.getElementById('bop_37_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_37_db_btn').style.display = 'none';
			document.getElementById('bop_37_b_btn').style.display = 'none';
			document.getElementById('bop_37_mb_btn').style.display = 'none';
			
			document.getElementById('bop_37_dl_btn').style.display = 'none';
			document.getElementById('bop_37_l_btn').style.display = 'none';
			document.getElementById('bop_37_ml_btn').style.display = 'none';
			
			document.getElementById('pi_37_db_rectangle').style.display = 'none';
			document.getElementById('pi_37_b_rectangle').style.display = 'none';
			document.getElementById('pi_37_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_37_dl_rectangle').style.display = 'none';
			document.getElementById('pi_37_l_rectangle').style.display = 'none';
			document.getElementById('pi_37_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_37_db_btn').style.display = 'none';
			document.getElementById('pi_37_b_btn').style.display = 'none';
			document.getElementById('pi_37_mb_btn').style.display = 'none';
			
			document.getElementById('pi_37_dl_btn').style.display = 'none';
			document.getElementById('pi_37_l_btn').style.display = 'none';
			document.getElementById('pi_37_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_37_b').style.display = 'none';
			document.getElementById('polyline_al_37_b').style.display = 'none';
			document.getElementById('polyline_gm_37_b').style.display = 'none';
			
			document.getElementById('polygon_37_l').style.display = 'none';
			document.getElementById('polyline_al_37_l').style.display = 'none';
			document.getElementById('polyline_gm_37_l').style.display = 'none';
			
			document.getElementById('polygon_inter_38_37_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_38_37_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_38_37_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_38_37_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_38_37_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_38_37_l').style.display = 'none';            
            
			document.getElementById('polygon_inter_37_36_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_37_36_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_37_36_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_37_36_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_37_36_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_37_36_l').style.display = 'none';           
            
            document.getElementById('note_37_txt').style.display = 'none';
		}
		else if (Implantat_37 !== 1) {
			tooth_37 = 1;
			document.getElementById('tooth_line_37_b').style.display = 'none';
			document.getElementById('tooth_line_37_l').style.display = 'none';

			document.getElementById('mobility_37_txt').style.display = 'block';

			document.getElementById('implantat_37_btn').style.display = 'block';

			document.getElementById('furkation_37_b_btn').style.display = 'block';
			document.getElementById('furkation_37_l_btn').style.display = 'block';
			
			document.getElementById('gm_37_db_txt').style.display = 'block';
			document.getElementById('gm_37_b_txt').style.display = 'block';
			document.getElementById('gm_37_mb_txt').style.display = 'block';
			
			document.getElementById('pd_37_db_txt').style.display = 'block';
			document.getElementById('pd_37_b_txt').style.display = 'block';
			document.getElementById('pd_37_mb_txt').style.display = 'block';
			
			document.getElementById('gm_37_dl_txt').style.display = 'block';
			document.getElementById('gm_37_l_txt').style.display = 'block';
			document.getElementById('gm_37_ml_txt').style.display = 'block';
			
			document.getElementById('pd_37_dl_txt').style.display = 'block';
			document.getElementById('pd_37_l_txt').style.display = 'block';
			document.getElementById('pd_37_ml_txt').style.display = 'block';
			
			document.getElementById('note_37_txt').style.display = 'block';

			document.getElementById('polygon_37_b').style.display = 'block';
			document.getElementById('polyline_al_37_b').style.display = 'block';
			document.getElementById('polyline_gm_37_b').style.display = 'block';
			
			document.getElementById('polygon_37_l').style.display = 'block';
			document.getElementById('polyline_al_37_l').style.display = 'block';
			document.getElementById('polyline_gm_37_l').style.display = 'block';

            if (tooth_38 == 1 && tooth_37 == 1) {
				document.getElementById('polygon_inter_38_37_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_38_37_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_38_37_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_38_37_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_38_37_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_38_37_l').style.display = 'block';            
            }
            
            if (tooth_37 == 1 && tooth_36 == 1) {
				document.getElementById('polygon_inter_37_36_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_37_36_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_37_36_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_37_36_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_37_36_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_37_36_l').style.display = 'block';            
            }

			if (Furkation_37_b == 1) {
				document.getElementById('furkation_1_37_b').style.display = 'block';
			} else if (Furkation_37_b == 2) {
				document.getElementById('furkation_2_37_b').style.display = 'block';
			} else if (Furkation_37_b == 3) {
				document.getElementById('furkation_3_37_b').style.display = 'block';
			}
			if (Furkation_37_b == 1) {
				document.getElementById('furkation_1_37_b_tab').style.display = 'block';
			} else if (Furkation_37_b == 2) {
				document.getElementById('furkation_2_37_b_tab').style.display = 'block';
			} else if (Furkation_37_b == 3) {
				document.getElementById('furkation_3_37_b_tab').style.display = 'block';
			}
			if (Furkation_37_l == 1) {
				document.getElementById('furkation_1_37_l').style.display = 'block';
			} else if (Furkation_37_l == 2) {
				document.getElementById('furkation_2_37_l').style.display = 'block';
			} else if (Furkation_37_l == 3) {
				document.getElementById('furkation_3_37_l').style.display = 'block';
			}
			if (Furkation_37_l == 1) {
				document.getElementById('furkation_1_37_l_tab').style.display = 'block';
			} else if (Furkation_37_l == 2) {
				document.getElementById('furkation_2_37_l_tab').style.display = 'block';
			} else if (Furkation_37_l == 3) {
				document.getElementById('furkation_3_37_l_tab').style.display = 'block';
			}

			document.getElementById('bop_37_db_btn').style.display = 'block';
			document.getElementById('bop_37_b_btn').style.display = 'block';
			document.getElementById('bop_37_mb_btn').style.display = 'block';

			document.getElementById('bop_37_dl_btn').style.display = 'block';
			document.getElementById('bop_37_l_btn').style.display = 'block';
			document.getElementById('bop_37_ml_btn').style.display = 'block';
			
			if (bop_37_db == 1) {
				document.getElementById('bop_37_db_rectangle').style.display = 'block';
			}
			if (bop_37_b == 1) {
				document.getElementById('bop_37_b_rectangle').style.display = 'block';
			}
			if (bop_37_mb == 1) {
				document.getElementById('bop_37_mb_rectangle').style.display = 'block';
			}
			if (bop_37_dl == 1) {
				document.getElementById('bop_37_dl_rectangle').style.display = 'block';
			}
			if (bop_37_l == 1) {
				document.getElementById('bop_37_l_rectangle').style.display = 'block';
			}
			if (bop_37_ml == 1) {
				document.getElementById('bop_37_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_37_db_btn').style.display = 'block';
			document.getElementById('pi_37_b_btn').style.display = 'block';
			document.getElementById('pi_37_mb_btn').style.display = 'block';

			document.getElementById('pi_37_dl_btn').style.display = 'block';
			document.getElementById('pi_37_l_btn').style.display = 'block';
			document.getElementById('pi_37_ml_btn').style.display = 'block';
			
			if (pi_37_db == 1) {
				document.getElementById('pi_37_db_rectangle').style.display = 'block';
			}
			if (pi_37_b == 1) {
				document.getElementById('pi_37_b_rectangle').style.display = 'block';
			}
			if (pi_37_mb == 1) {
				document.getElementById('pi_37_mb_rectangle').style.display = 'block';
			}
			if (pi_37_dl == 1) {
				document.getElementById('pi_37_dl_rectangle').style.display = 'block';
			}
			if (pi_37_l == 1) {
				document.getElementById('pi_37_l_rectangle').style.display = 'block';
			}
			if (pi_37_ml == 1) {
				document.getElementById('pi_37_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_37 == 1) {
			tooth_37 = 1;
			document.getElementById('tooth_line_37_b').style.display = 'none';
			document.getElementById('tooth_line_37_l').style.display = 'none';

			document.getElementById('mobility_37_txt').style.display = 'block';
			
			document.getElementById('note_37_txt').style.display = 'block';

			document.getElementById('implantat_37_btn').style.display = 'block';
			document.getElementById('implantat_37_tab').style.display = 'block';
			document.getElementById('implantat_37_b_image').style.display = 'block';
			document.getElementById('implantat_37_l_image').style.display = 'block';

			document.getElementById('gm_37_db_txt').style.display = 'block';
			document.getElementById('gm_37_b_txt').style.display = 'block';
			document.getElementById('gm_37_mb_txt').style.display = 'block';
			
			document.getElementById('pd_37_db_txt').style.display = 'block';
			document.getElementById('pd_37_b_txt').style.display = 'block';
			document.getElementById('pd_37_mb_txt').style.display = 'block';
			
			document.getElementById('gm_37_dl_txt').style.display = 'block';
			document.getElementById('gm_37_l_txt').style.display = 'block';
			document.getElementById('gm_37_ml_txt').style.display = 'block';
			
			document.getElementById('pd_37_dl_txt').style.display = 'block';
			document.getElementById('pd_37_l_txt').style.display = 'block';
			document.getElementById('pd_37_ml_txt').style.display = 'block';

			document.getElementById('polygon_37_b').style.display = 'block';
			document.getElementById('polyline_al_37_b').style.display = 'block';
			document.getElementById('polyline_gm_37_b').style.display = 'block';
			
			document.getElementById('polygon_37_l').style.display = 'block';
			document.getElementById('polyline_al_37_l').style.display = 'block';
			document.getElementById('polyline_gm_37_l').style.display = 'block';

            if (tooth_38 == 1 && tooth_37 == 1) {
				document.getElementById('polygon_inter_38_37_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_38_37_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_38_37_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_38_37_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_38_37_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_38_37_l').style.display = 'block';            
            }
            
            if (tooth_37 == 1 && tooth_36 == 1) {
				document.getElementById('polygon_inter_37_36_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_37_36_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_37_36_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_37_36_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_37_36_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_37_36_l').style.display = 'block';            
            }

			document.getElementById('bop_37_db_btn').style.display = 'block';
			document.getElementById('bop_37_b_btn').style.display = 'block';
			document.getElementById('bop_37_mb_btn').style.display = 'block';

			document.getElementById('bop_37_dl_btn').style.display = 'block';
			document.getElementById('bop_37_l_btn').style.display = 'block';
			document.getElementById('bop_37_ml_btn').style.display = 'block';
			
			document.getElementById('pi_37_db_btn').style.display = 'block';
			document.getElementById('pi_37_b_btn').style.display = 'block';
			document.getElementById('pi_37_mb_btn').style.display = 'block';

			document.getElementById('pi_37_dl_btn').style.display = 'block';
			document.getElementById('pi_37_l_btn').style.display = 'block';
			document.getElementById('pi_37_ml_btn').style.display = 'block';
			
			if (bop_37_db == 1) {
				document.getElementById('bop_37_db_rectangle').style.display = 'block';
			}
			if (bop_37_b == 1) {
				document.getElementById('bop_37_b_rectangle').style.display = 'block';
			}
			if (bop_37_mb == 1) {
				document.getElementById('bop_37_mb_rectangle').style.display = 'block';
			}
			if (bop_37_dl == 1) {
				document.getElementById('bop_37_dl_rectangle').style.display = 'block';
			}
			if (bop_37_l == 1) {
				document.getElementById('bop_37_l_rectangle').style.display = 'block';
			}
			if (bop_37_ml == 1) {
				document.getElementById('bop_37_ml_rectangle').style.display = 'block';
			}
			
			if (pi_37_db == 1) {
				document.getElementById('pi_37_db_rectangle').style.display = 'block';
			}
			if (pi_37_b == 1) {
				document.getElementById('pi_37_b_rectangle').style.display = 'block';
			}
			if (pi_37_mb == 1) {
				document.getElementById('pi_37_mb_rectangle').style.display = 'block';
			}
			if (pi_37_dl == 1) {
				document.getElementById('pi_37_dl_rectangle').style.display = 'block';
			}
			if (pi_37_l == 1) {
				document.getElementById('pi_37_l_rectangle').style.display = 'block';
			}
			if (pi_37_ml == 1) {
				document.getElementById('pi_37_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_37();
	}

	function toggle_implant_37() {
		if (Implantat_37 == 0) {
			Implantat_37 = 1;
			
			document.getElementById('implantat_37_b_image').style.display = 'block';
			document.getElementById('implantat_37_l_image').style.display = 'block';
			document.getElementById('implantat_37_tab').style.display = 'block';
			
			document.getElementById('furkation_37_b_btn').style.display = 'none';
			document.getElementById('furkation_37_l_btn').style.display = 'none';
			
			document.getElementById('furkation_1_37_b').style.display = 'none';
			document.getElementById('furkation_2_37_b').style.display = 'none';
			document.getElementById('furkation_3_37_b').style.display = 'none';
			
			document.getElementById('furkation_1_37_b_tab').style.display = 'none';
			document.getElementById('furkation_2_37_b_tab').style.display = 'none';
			document.getElementById('furkation_3_37_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_37_l').style.display = 'none';
			document.getElementById('furkation_2_37_l').style.display = 'none';
			document.getElementById('furkation_3_37_l').style.display = 'none';
			
			document.getElementById('furkation_1_37_l_tab').style.display = 'none';
			document.getElementById('furkation_2_37_l_tab').style.display = 'none';
			document.getElementById('furkation_3_37_l_tab').style.display = 'none';
		}
		else {
			Implantat_37 = 0;
			
			document.getElementById('implantat_37_b_image').style.display = 'none';
			document.getElementById('implantat_37_l_image').style.display = 'none';
			document.getElementById('implantat_37_tab').style.display = 'none';
			
			document.getElementById('furkation_37_b_btn').style.display = 'block';
			document.getElementById('furkation_37_l_btn').style.display = 'block';

			if (Furkation_37_b == 1) {
				document.getElementById('furkation_1_37_b').style.display = 'block';
			} else if (Furkation_37_b == 2) {
				document.getElementById('furkation_2_37_b').style.display = 'block';
			} else if (Furkation_37_b == 3) {
				document.getElementById('furkation_3_37_b').style.display = 'block';
			}
			if (Furkation_37_b == 1) {
				document.getElementById('furkation_1_37_b_tab').style.display = 'block';
			} else if (Furkation_37_b == 2) {
				document.getElementById('furkation_2_37_b_tab').style.display = 'block';
			} else if (Furkation_37_b == 3) {
				document.getElementById('furkation_3_37_b_tab').style.display = 'block';
			}
			if (Furkation_37_l == 1) {
				document.getElementById('furkation_1_37_l').style.display = 'block';
			} else if (Furkation_37_l == 2) {
				document.getElementById('furkation_2_37_l').style.display = 'block';
			} else if (Furkation_37_l == 3) {
				document.getElementById('furkation_3_37_l').style.display = 'block';
			}
			if (Furkation_37_l == 1) {
				document.getElementById('furkation_1_37_l_tab').style.display = 'block';
			} else if (Furkation_37_l == 2) {
				document.getElementById('furkation_2_37_l_tab').style.display = 'block';
			} else if (Furkation_37_l == 3) {
				document.getElementById('furkation_3_37_l_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_37_b() {
		if (Furkation_37_b == 0) {
			document.getElementById('furkation_1_37_b_tab').style.display = 'block';
			document.getElementById('furkation_2_37_b_tab').style.display = 'none';
			document.getElementById('furkation_3_37_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_37_b').style.display = 'block';
			document.getElementById('furkation_2_37_b').style.display = 'none';
			document.getElementById('furkation_3_37_b').style.display = 'none';

			Furkation_37_b = 1;
		}
		else if (Furkation_37_b == 1) {
			document.getElementById('furkation_1_37_b_tab').style.display = 'none';
			document.getElementById('furkation_2_37_b_tab').style.display = 'block';
			document.getElementById('furkation_3_37_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_37_b').style.display = 'none';
			document.getElementById('furkation_2_37_b').style.display = 'block';
			document.getElementById('furkation_3_37_b').style.display = 'none';
			
			Furkation_37_b = 2;
		}
		else if (Furkation_37_b == 2) {
			document.getElementById('furkation_1_37_b_tab').style.display = 'none';
			document.getElementById('furkation_2_37_b_tab').style.display = 'none';
			document.getElementById('furkation_3_37_b_tab').style.display = 'block';
			
			document.getElementById('furkation_1_37_b').style.display = 'none';
			document.getElementById('furkation_2_37_b').style.display = 'none';
			document.getElementById('furkation_3_37_b').style.display = 'block';
						
			Furkation_37_b = 3;
		}
		else if (Furkation_37_b == 3) {
			document.getElementById('furkation_1_37_b_tab').style.display = 'none';
			document.getElementById('furkation_2_37_b_tab').style.display = 'none';
			document.getElementById('furkation_3_37_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_37_b').style.display = 'none';
			document.getElementById('furkation_2_37_b').style.display = 'none';
			document.getElementById('furkation_3_37_b').style.display = 'none';
						
			Furkation_37_b = 0;
		}
	}

	function toggle_furcation_37_l() {
		if (Furkation_37_l == 0) {
			document.getElementById('furkation_1_37_l_tab').style.display = 'block';
			document.getElementById('furkation_2_37_l_tab').style.display = 'none';
			document.getElementById('furkation_3_37_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_37_l').style.display = 'block';
			document.getElementById('furkation_2_37_l').style.display = 'none';
			document.getElementById('furkation_3_37_l').style.display = 'none';

			Furkation_37_l = 1;
		}
		else if (Furkation_37_l == 1) {
			document.getElementById('furkation_1_37_l_tab').style.display = 'none';
			document.getElementById('furkation_2_37_l_tab').style.display = 'block';
			document.getElementById('furkation_3_37_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_37_l').style.display = 'none';
			document.getElementById('furkation_2_37_l').style.display = 'block';
			document.getElementById('furkation_3_37_l').style.display = 'none';
			
			Furkation_37_l = 2;
		}
		else if (Furkation_37_l == 2) {
			document.getElementById('furkation_1_37_l_tab').style.display = 'none';
			document.getElementById('furkation_2_37_l_tab').style.display = 'none';
			document.getElementById('furkation_3_37_l_tab').style.display = 'block';
			
			document.getElementById('furkation_1_37_l').style.display = 'none';
			document.getElementById('furkation_2_37_l').style.display = 'none';
			document.getElementById('furkation_3_37_l').style.display = 'block';
						
			Furkation_37_l = 3;
		}
		else if (Furkation_37_l == 3) {
			document.getElementById('furkation_1_37_l_tab').style.display = 'none';
			document.getElementById('furkation_2_37_l_tab').style.display = 'none';
			document.getElementById('furkation_3_37_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_37_l').style.display = 'none';
			document.getElementById('furkation_2_37_l').style.display = 'none';
			document.getElementById('furkation_3_37_l').style.display = 'none';
						
			Furkation_37_l = 0;
		}
	}

	function toggle_bop_37_db() {
		if (bop_37_db == 0) {
			bop_37_db = 1;
			document.getElementById('bop_37_db_rectangle').style.display = 'block';
		}
		else {
			bop_37_db = 0;
			document.getElementById('bop_37_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_37_b() {
		if (bop_37_b == 0) {
			bop_37_b = 1;
			document.getElementById('bop_37_b_rectangle').style.display = 'block';
		}
		else {
			bop_37_b = 0;
			document.getElementById('bop_37_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_37_mb() {
		if (bop_37_mb == 0) {
			bop_37_mb = 1;
			document.getElementById('bop_37_mb_rectangle').style.display = 'block';
		}
		else {
			bop_37_mb = 0;
			document.getElementById('bop_37_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_37_db() {
		if (pi_37_db == 0) {
			pi_37_db = 1;
			document.getElementById('pi_37_db_rectangle').style.display = 'block';
		}
		else {
			pi_37_db = 0;
			document.getElementById('pi_37_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_37_b() {
		if (pi_37_b == 0) {
			pi_37_b = 1;
			document.getElementById('pi_37_b_rectangle').style.display = 'block';
		}
		else {
			pi_37_b = 0;
			document.getElementById('pi_37_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_37_mb() {
		if (pi_37_mb == 0) {
			pi_37_mb = 1;
			document.getElementById('pi_37_mb_rectangle').style.display = 'block';
		}
		else {
			pi_37_mb = 0;
			document.getElementById('pi_37_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_37_dl() {
		if (bop_37_dl == 0) {
			bop_37_dl = 1;
			document.getElementById('bop_37_dl_rectangle').style.display = 'block';
		}
		else {
			bop_37_dl = 0;
			document.getElementById('bop_37_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_37_l() {
		if (bop_37_l == 0) {
			bop_37_l = 1;
			document.getElementById('bop_37_l_rectangle').style.display = 'block';
		}
		else {
			bop_37_l = 0;
			document.getElementById('bop_37_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_37_ml() {
		if (bop_37_ml == 0) {
			bop_37_ml = 1;
			document.getElementById('bop_37_ml_rectangle').style.display = 'block';
		}
		else {
			bop_37_ml = 0;
			document.getElementById('bop_37_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_37_dl() {
		if (pi_37_dl == 0) {
			pi_37_dl = 1;
			document.getElementById('pi_37_dl_rectangle').style.display = 'block';
		}
		else {
			pi_37_dl = 0;
			document.getElementById('pi_37_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_37_l() {
		if (pi_37_l == 0) {
			pi_37_l = 1;
			document.getElementById('pi_37_l_rectangle').style.display = 'block';
		}
		else {
			pi_37_l = 0;
			document.getElementById('pi_37_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_37_ml() {
		if (pi_37_ml == 0) {
			pi_37_ml = 1;
			document.getElementById('pi_37_ml_rectangle').style.display = 'block';
		}
		else {
			pi_37_ml = 0;
			document.getElementById('pi_37_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_37() {
		if (tooth_37 == 1) {
			
		// Variablen aus dem Formular
			pd_37_db = document.forms[0]["pd_37_db"].value;
			pd_37_b = document.forms[0]["pd_37_b"].value;
			pd_37_mb = document.forms[0]["pd_37_mb"].value;

			if (document.forms[0]["pd_37_dl"].value > 3) {document.forms[0]["pd_37_dl"].style.color = 'red';} else {document.forms[0]["pd_37_dl"].style.color = 'black'};
			if (document.forms[0]["pd_37_l"].value > 3) {document.forms[0]["pd_37_l"].style.color = 'red';} else {document.forms[0]["pd_37_l"].style.color = 'black'};
			if (document.forms[0]["pd_37_ml"].value > 3) {document.forms[0]["pd_37_ml"].style.color = 'red';} else {document.forms[0]["pd_37_ml"].style.color = 'black'};
			
			gm_37_db = document.forms[0]["gm_37_db"].value;
			gm_37_b = document.forms[0]["gm_37_b"].value;
			gm_37_mb = document.forms[0]["gm_37_mb"].value;
			
			pd_37_dl = document.forms[0]["pd_37_dl"].value;
			pd_37_l = document.forms[0]["pd_37_l"].value;
			pd_37_ml = document.forms[0]["pd_37_ml"].value;

			if (document.forms[0]["pd_37_db"].value > 3) {document.forms[0]["pd_37_db"].style.color = 'red';} else {document.forms[0]["pd_37_db"].style.color = 'black'};
			if (document.forms[0]["pd_37_b"].value > 3) {document.forms[0]["pd_37_b"].style.color = 'red';} else {document.forms[0]["pd_37_b"].style.color = 'black'};
			if (document.forms[0]["pd_37_mb"].value > 3) {document.forms[0]["pd_37_mb"].style.color = 'red';} else {document.forms[0]["pd_37_mb"].style.color = 'black'};
			
			gm_37_dl = document.forms[0]["gm_37_dl"].value;
			gm_37_l = document.forms[0]["gm_37_l"].value;
			gm_37_ml = document.forms[0]["gm_37_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 37 (bukkal) in der Bitmap
			var x_db_37 = 999;							// distal 37
			var x_mb_37 = 952;							// mesial 37
			var x_b_37 = (x_db_37 + x_mb_37)/2;			// bukkal 37
			
		// Set der horizontalen Koordinaten von Zahn 37 (lingual) in der Bitmap
			var x_dl_37 = 995;							// distal 37
			var x_ml_37 = 947;							// mesial 37
			var x_l_37 = (x_dl_37 + x_ml_37)/2;			// lingual 37
			
		// Set der vertikalen Koordinaten von Zahn 37 (bukkal) aus dem Formular
			var y_gm_37_db = gm_UK_b - 6.05 * gm_37_db;	// Margo Gingivae distobukkal 37
			var y_gm_37_b = gm_UK_b - 6.05 * gm_37_b;	// Margo Gingivae bukkal 37
			var y_gm_37_mb = gm_UK_b - 6.05 * gm_37_mb;	// Margo Gingivae mesiobukkal 37
			var y_pd_37_db = 6.05 * pd_37_db;			// Sondierungstiefe distobukkal 37
			var y_pd_37_b = 6.05 * pd_37_b;				// Sondierungstiefe bukkal 37
			var y_pd_37_mb = 6.05 * pd_37_mb;			// Sondierungstiefe mesiobukkal 37
			
		// Set der vertikalen Koordinaten von Zahn 37 (lingual) aus dem Formular
			var y_gm_37_dl = gm_UK_l + 6.05 * gm_37_dl;	// Margo Gingivae distolingual 37
			var y_gm_37_l = gm_UK_l + 6.05 * gm_37_l;	// Margo Gingivae lingual 37
			var y_gm_37_ml = gm_UK_l + 6.05 * gm_37_ml;	// Margo Gingivae mesiolingual 37
			var y_pd_37_dl = 6.05 * pd_37_dl;			// Sondierungstiefe distolingual 37
			var y_pd_37_l = 6.05 * pd_37_l;				// Sondierungstiefe lingual 37
			var y_pd_37_ml = 6.05 * pd_37_ml;			// Sondierungstiefe mesiolingual 37
			
		// Berechnung des Attachmentniveaus 37 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_37_db = y_gm_37_db + y_pd_37_db;	// Attachmentniveau distobukkal 37
			var y_al_37_b = y_gm_37_b + y_pd_37_b;		// Attachmentniveau bukkal 37
			var y_al_37_mb = y_gm_37_mb + y_pd_37_mb;	// Attachmentniveau mesiobukkal 37
			
		// Berechnung des Attachmentniveaus 37 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_37_dl = y_gm_37_dl - y_pd_37_dl;	// Attachmentniveau distolingual 37
			var y_al_37_l = y_gm_37_l - y_pd_37_l;		// Attachmentniveau lingual 37
			var y_al_37_ml = y_gm_37_ml - y_pd_37_ml;	// Attachmentniveau mesiolingual 37

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[37].storeCoordinates(
				x_db_37, x_mb_37, x_dl_37, x_ml_37, x_b_37, x_l_37,
				y_gm_37_db, y_gm_37_b, y_gm_37_mb, y_pd_37_db, y_pd_37_b, y_pd_37_mb,
				y_gm_37_dl, y_gm_37_l, y_gm_37_ml, y_pd_37_dl, y_pd_37_l, y_pd_37_ml,
				y_al_37_db, y_al_37_b, y_al_37_mb, y_al_37_dl, y_al_37_l, y_al_37_ml
			);

		// Parodontaltasche 37 bukkal zeichnen
			var string = 
				x_db_37 + ", " + y_al_37_db + "  " + 
				x_b_37 + ", " + y_al_37_b + "  " + 
				x_mb_37 + ", " + y_al_37_mb + "  " + 
				x_mb_37 + ", " + y_gm_37_mb + "  " + 
				x_b_37 + ", " + y_gm_37_b + "  " + 
				x_db_37 + ", " + y_gm_37_db;
			document.getElementById("polygon_37_b").setAttribute("points", string);
		// Attachmentniveau 37 bukkal zeichnen
			var string = 
				x_db_37 + ", " + y_al_37_db + "  " + 
				x_b_37 + ", " + y_al_37_b + "  " + 
				x_mb_37 + ", " + y_al_37_mb;
			document.getElementById("polyline_al_37_b").setAttribute("points", string);
		// Margo Gingivae 37 bukkal zeichnen
			var string =
				x_db_37 + ", " + y_gm_37_db + "  " + 
				x_b_37 + ", " + y_gm_37_b + "  " + 
				x_mb_37 + ", " + y_gm_37_mb;
			document.getElementById("polyline_gm_37_b").setAttribute("points", string);

		// Parodontaltasche 37 lingual zeichnen
			var string = 
				x_dl_37 + ", " + y_al_37_dl + "  " + 
				x_l_37 + ", " + y_al_37_l + "  " + 
				x_ml_37 + ", " + y_al_37_ml + "  " + 
				x_ml_37 + ", " + y_gm_37_ml + "  " + 
				x_l_37 + ", " + y_gm_37_l + "  " + 
				x_dl_37 + ", " + y_gm_37_dl;
			document.getElementById("polygon_37_l").setAttribute("points", string);
		// Attachmentniveau 37 lingual zeichnen
			var string = 
				x_dl_37 + ", " + y_al_37_dl + "  " + 
				x_l_37 + ", " + y_al_37_l + "  " + 
				x_ml_37 + ", " + y_al_37_ml;
			document.getElementById("polyline_al_37_l").setAttribute("points", string);
		// Margo Gingivae 37 lingual zeichnen
			var string =
				x_dl_37 + ", " + y_gm_37_dl + "  " + 
				x_l_37 + ", " + y_gm_37_l + "  " + 
				x_ml_37 + ", " + y_gm_37_ml;
			document.getElementById("polyline_gm_37_l").setAttribute("points", string);
		}
        if (tooth_37 == 1 && tooth_36 == 1) {

            pd_36_db = document.forms[0]["pd_36_db"].value;
			gm_36_db = document.forms[0]["gm_36_db"].value;
			
			pd_36_dl = document.forms[0]["pd_36_dl"].value;
			gm_36_dl = document.forms[0]["gm_36_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
			var x_db_36 = 936;							// distal 46
			
		// Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
			var x_dl_36 = 932;							// distal 46
			
		// Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
			var y_gm_36_db = gm_UK_b - 6.05 * gm_36_db;	// Margo Gingivae distobukkal 46
			var y_pd_36_db = 6.05 * pd_36_db;			// Sondierungstiefe distobukkal 46
			
		// Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
			var y_gm_36_dl = gm_UK_l + 6.05 * gm_36_dl;	// Margo Gingivae distolingual 46
			var y_pd_36_dl = 6.05 * pd_36_dl;			// Sondierungstiefe distolingual 46
			
		// Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_36_db = y_gm_36_db + y_pd_36_db;	// Attachmentniveau distobukkal 46
			
		// Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_36_dl = y_gm_36_dl - y_pd_36_dl;	// Attachmentniveau distolingual 46

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
        if (tooth_38 == 1 && tooth_37 == 1) {

            pd_38_mb = document.forms[0]["pd_38_mb"].value;
			gm_38_mb = document.forms[0]["gm_38_mb"].value;
			
			pd_38_ml = document.forms[0]["pd_38_ml"].value;
			gm_38_ml = document.forms[0]["gm_38_ml"].value;
            
		// Set der horizontalen Koordinaten von Zahn 48 (bukkal) in der Bitmap
			var x_mb_38 = 1016;							// mesial 48
			
		// Set der horizontalen Koordinaten von Zahn 48 (lingual) in der Bitmap
			var x_ml_38 = 1012;							// mesial 48
			
		// Set der vertikalen Koordinaten von Zahn 48 (bukkal) aus dem Formular
			var y_gm_38_mb = gm_UK_b - 6.05 * gm_38_mb;	// Margo Gingivae mesiobukkal 48
			var y_pd_38_mb = 6.05 * pd_38_mb;			// Sondierungstiefe mesiobukkal 48
			
		// Set der vertikalen Koordinaten von Zahn 48 (lingual) aus dem Formular
			var y_gm_38_ml = gm_UK_l + 6.05 * gm_38_ml;	// Margo Gingivae mesiolingual 48
			var y_pd_38_ml = 6.05 * pd_38_ml;			// Sondierungstiefe mesiolingual 48
			
		// Berechnung des Attachmentniveaus 48 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_38_mb = y_gm_38_mb + y_pd_38_mb;	// Attachmentniveau mesiobukkal 48
			
		// Berechnung des Attachmentniveaus 48 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_38_ml = y_gm_38_ml - y_pd_38_ml;	// Attachmentniveau mesiolingual 48

		// Parodontaltasche inter_38_37 bukkal zeichnen
			var string = 
				x_mb_38 + ", " + y_al_38_mb + "  " + 
				x_db_37 + ", " + y_al_37_db + "  " + 
				x_db_37 + ", " + y_gm_37_db + "  " + 
				x_mb_38 + ", " + y_gm_38_mb;
			document.getElementById("polygon_inter_38_37_b").setAttribute("points", string);
		// Attachmentniveau inter_38_37 bukkal zeichnen
			var string = 
				x_mb_38 + ", " + y_al_38_mb + "  " + 
				x_db_37 + ", " + y_al_37_db;
			document.getElementById("polyline_al_inter_38_37_b").setAttribute("points", string);
		// Margo Gingivae inter_38_37 bukkal zeichnen
			var string =
				x_mb_38 + ", " + y_gm_38_mb + "  " + 
				x_db_37 + ", " + y_gm_37_db;
			document.getElementById("polyline_gm_inter_38_37_b").setAttribute("points", string);

        // Parodontaltasche inter_38_37 lingual zeichnen
			var string = 
				x_ml_38 + ", " + y_al_38_ml + "  " + 
				x_dl_37 + ", " + y_al_37_dl + "  " + 
				x_dl_37 + ", " + y_gm_37_dl + "  " + 
				x_ml_38 + ", " + y_gm_38_ml;
			document.getElementById("polygon_inter_38_37_l").setAttribute("points", string);
		// Attachmentniveau inter_38_37 lingual zeichnen
			var string = 
				x_ml_38 + ", " + y_al_38_ml + "  " + 
				x_dl_37 + ", " + y_al_37_dl;
			document.getElementById("polyline_al_inter_38_37_l").setAttribute("points", string);
		// Margo Gingivae inter_38_37 lingual zeichnen
			var string =
				x_ml_38 + ", " + y_gm_38_ml + "  " + 
				x_dl_37 + ", " + y_gm_37_dl;
			document.getElementById("polyline_gm_inter_38_37_l").setAttribute("points", string);
		}
	}