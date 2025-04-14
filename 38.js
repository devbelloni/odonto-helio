	// Definition der Variablen für das Formular
		var tooth_38 = 1;
		var Furkation_38_b = 0;
		var Furkation_38_l = 0;
		var Implantat_38 = 0;
		var bop_38_db = 0;
		var bop_38_b = 0;
		var bop_38_mb = 0;
		var pi_38_db = 0;
		var pi_38_b = 0;
		var pi_38_mb = 0;
		var bop_38_dl = 0;
		var bop_38_l = 0;
		var bop_38_ml = 0;
		var pi_38_dl = 0;
		var pi_38_l = 0;
		var pi_38_ml = 0;
		var gm_38_db = 0;
		var gm_38_b = 0;
		var gm_38_mb = 0;
		var pd_38_db = 0;
		var pd_38_b = 0;
		var pd_38_mb = 0;
		var gm_38_dl = 0;
		var gm_38_l = 0;
		var gm_38_ml = 0;
		var pd_38_dl = 0;
		var pd_38_l = 0;
		var pd_38_ml = 0;

	function clear_data_38() {
        if (tooth_38 == 1) {
			gm_38_db = 0;
			gm_38_b = 0;
			gm_38_mb = 0;
			pd_38_db = 0;
			pd_38_b = 0;
			pd_38_mb = 0;
	
				document.getElementById('gm_38_db_txt').value = 0;
				document.getElementById('gm_38_b_txt').value = 0;
				document.getElementById('gm_38_mb_txt').value = 0;
				
				document.getElementById('pd_38_db_txt').value = 0;
				document.getElementById('pd_38_b_txt').value = 0;
				document.getElementById('pd_38_mb_txt').value = 0;
			
				document.forms[0]["pd_38_db"].style.color = 'black'
				document.forms[0]["pd_38_b"].style.color = 'black'
				document.forms[0]["pd_38_mb"].style.color = 'black'
			
			gm_38_dl = 0;
			gm_38_l = 0;
			gm_38_ml = 0;
			pd_38_dl = 0;
			pd_38_l = 0;
			pd_38_ml = 0;

				document.getElementById('gm_38_dl_txt').value = 0;
				document.getElementById('gm_38_l_txt').value = 0;
				document.getElementById('gm_38_ml_txt').value = 0;
				
				document.getElementById('pd_38_dl_txt').value = 0;
				document.getElementById('pd_38_l_txt').value = 0;
				document.getElementById('pd_38_ml_txt').value = 0;

				document.forms[0]["pd_38_dl"].style.color = 'black'
				document.forms[0]["pd_38_l"].style.color = 'black'
				document.forms[0]["pd_38_ml"].style.color = 'black'
			
			change_probing_38();
			
			mobility_38 = 0;

				document.getElementById('mobility_38_txt').value = "0";

			note_38 = "";

				document.getElementById('note_38_txt').value = "";

			Furkation_38_b = 0;
			Furkation_38_l = 0;

				document.getElementById('furkation_1_38_b').style.display = 'none';
				document.getElementById('furkation_2_38_b').style.display = 'none';
				document.getElementById('furkation_3_38_b').style.display = 'none';
					
				document.getElementById('furkation_1_38_b_tab').style.display = 'none';
				document.getElementById('furkation_2_38_b_tab').style.display = 'none';
				document.getElementById('furkation_3_38_b_tab').style.display = 'none';
				
				document.getElementById('furkation_1_38_l').style.display = 'none';
				document.getElementById('furkation_2_38_l').style.display = 'none';
				document.getElementById('furkation_3_38_l').style.display = 'none';
					
				document.getElementById('furkation_1_38_l_tab').style.display = 'none';
				document.getElementById('furkation_2_38_l_tab').style.display = 'none';
				document.getElementById('furkation_3_38_l_tab').style.display = 'none';
				
			bop_38_db = 0;
			bop_38_b = 0;
			bop_38_mb = 0;
					
			bop_38_dl = 0;
			bop_38_l = 0;
			bop_38_ml = 0;
					
				document.getElementById('bop_38_db_rectangle').style.display = 'none';
				document.getElementById('bop_38_b_rectangle').style.display = 'none';
				document.getElementById('bop_38_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_38_dl_rectangle').style.display = 'none';
				document.getElementById('bop_38_l_rectangle').style.display = 'none';
				document.getElementById('bop_38_ml_rectangle').style.display = 'none';
				
			pi_38_db = 0;
			pi_38_b = 0;
			pi_38_mb = 0;
					
			pi_38_dl = 0;
			pi_38_l = 0;
			pi_38_ml = 0;

				document.getElementById('pi_38_db_rectangle').style.display = 'none';
				document.getElementById('pi_38_b_rectangle').style.display = 'none';
				document.getElementById('pi_38_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_38_dl_rectangle').style.display = 'none';
				document.getElementById('pi_38_l_rectangle').style.display = 'none';
				document.getElementById('pi_38_ml_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_38() {
		if (tooth_38 === 1) {
			tooth_38 = 0;
			document.getElementById('tooth_line_38_b').style.display = 'block';
			document.getElementById('tooth_line_38_l').style.display = 'block';
			
			document.getElementById('mobility_38_txt').style.display = 'none';
			
			document.getElementById('implantat_38_btn').style.display = 'none';
			document.getElementById('implantat_38_tab').style.display = 'none';
			document.getElementById('implantat_38_b_image').style.display = 'none';
			document.getElementById('implantat_38_l_image').style.display = 'none';
			
			document.getElementById('furkation_38_b_btn').style.display = 'none';
			document.getElementById('furkation_38_l_btn').style.display = 'none';
			
			document.getElementById('furkation_1_38_b').style.display = 'none';
			document.getElementById('furkation_2_38_b').style.display = 'none';
			document.getElementById('furkation_3_38_b').style.display = 'none';
			
			document.getElementById('furkation_1_38_b_tab').style.display = 'none';
			document.getElementById('furkation_2_38_b_tab').style.display = 'none';
			document.getElementById('furkation_3_38_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_38_l').style.display = 'none';
			document.getElementById('furkation_2_38_l').style.display = 'none';
			document.getElementById('furkation_3_38_l').style.display = 'none';
			
			document.getElementById('furkation_1_38_l_tab').style.display = 'none';
			document.getElementById('furkation_2_38_l_tab').style.display = 'none';
			document.getElementById('furkation_3_38_l_tab').style.display = 'none';

			document.getElementById('gm_38_db_txt').style.display = 'none';
			document.getElementById('gm_38_b_txt').style.display = 'none';
			document.getElementById('gm_38_mb_txt').style.display = 'none';
			
			document.getElementById('pd_38_db_txt').style.display = 'none';
			document.getElementById('pd_38_b_txt').style.display = 'none';
			document.getElementById('pd_38_mb_txt').style.display = 'none';
			
			document.getElementById('gm_38_dl_txt').style.display = 'none';
			document.getElementById('gm_38_l_txt').style.display = 'none';
			document.getElementById('gm_38_ml_txt').style.display = 'none';
			
			document.getElementById('pd_38_dl_txt').style.display = 'none';
			document.getElementById('pd_38_l_txt').style.display = 'none';
			document.getElementById('pd_38_ml_txt').style.display = 'none';
			
			document.getElementById('bop_38_db_rectangle').style.display = 'none';
			document.getElementById('bop_38_b_rectangle').style.display = 'none';
			document.getElementById('bop_38_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_38_dl_rectangle').style.display = 'none';
			document.getElementById('bop_38_l_rectangle').style.display = 'none';
			document.getElementById('bop_38_ml_rectangle').style.display = 'none';
			
			document.getElementById('bop_38_db_btn').style.display = 'none';
			document.getElementById('bop_38_b_btn').style.display = 'none';
			document.getElementById('bop_38_mb_btn').style.display = 'none';
			
			document.getElementById('bop_38_dl_btn').style.display = 'none';
			document.getElementById('bop_38_l_btn').style.display = 'none';
			document.getElementById('bop_38_ml_btn').style.display = 'none';
			
			document.getElementById('pi_38_db_rectangle').style.display = 'none';
			document.getElementById('pi_38_b_rectangle').style.display = 'none';
			document.getElementById('pi_38_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_38_dl_rectangle').style.display = 'none';
			document.getElementById('pi_38_l_rectangle').style.display = 'none';
			document.getElementById('pi_38_ml_rectangle').style.display = 'none';
			
			document.getElementById('pi_38_db_btn').style.display = 'none';
			document.getElementById('pi_38_b_btn').style.display = 'none';
			document.getElementById('pi_38_mb_btn').style.display = 'none';
			
			document.getElementById('pi_38_dl_btn').style.display = 'none';
			document.getElementById('pi_38_l_btn').style.display = 'none';
			document.getElementById('pi_38_ml_btn').style.display = 'none';
			
			document.getElementById('polygon_38_b').style.display = 'none';
			document.getElementById('polyline_al_38_b').style.display = 'none';
			document.getElementById('polyline_gm_38_b').style.display = 'none';
			
			document.getElementById('polygon_38_l').style.display = 'none';
			document.getElementById('polyline_al_38_l').style.display = 'none';
			document.getElementById('polyline_gm_38_l').style.display = 'none';
			
			document.getElementById('polygon_inter_38_37_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_38_37_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_38_37_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_38_37_l').style.display = 'none';            
			document.getElementById('polyline_al_inter_38_37_l').style.display = 'none';            
			document.getElementById('polyline_gm_inter_38_37_l').style.display = 'none';            
			
			document.getElementById('note_38_txt').style.display = 'none';
		}
		else if (Implantat_38 !== 1) {
			tooth_38 = 1;
			document.getElementById('tooth_line_38_b').style.display = 'none';
			document.getElementById('tooth_line_38_l').style.display = 'none';

			document.getElementById('mobility_38_txt').style.display = 'block';

			document.getElementById('implantat_38_btn').style.display = 'block';

			document.getElementById('furkation_38_b_btn').style.display = 'block';
			document.getElementById('furkation_38_l_btn').style.display = 'block';
			
			document.getElementById('gm_38_db_txt').style.display = 'block';
			document.getElementById('gm_38_b_txt').style.display = 'block';
			document.getElementById('gm_38_mb_txt').style.display = 'block';
			
			document.getElementById('pd_38_db_txt').style.display = 'block';
			document.getElementById('pd_38_b_txt').style.display = 'block';
			document.getElementById('pd_38_mb_txt').style.display = 'block';
			
			document.getElementById('gm_38_dl_txt').style.display = 'block';
			document.getElementById('gm_38_l_txt').style.display = 'block';
			document.getElementById('gm_38_ml_txt').style.display = 'block';
			
			document.getElementById('pd_38_dl_txt').style.display = 'block';
			document.getElementById('pd_38_l_txt').style.display = 'block';
			document.getElementById('pd_38_ml_txt').style.display = 'block';
			
			document.getElementById('note_38_txt').style.display = 'block';

			document.getElementById('polygon_38_b').style.display = 'block';
			document.getElementById('polyline_al_38_b').style.display = 'block';
			document.getElementById('polyline_gm_38_b').style.display = 'block';
			
			document.getElementById('polygon_38_l').style.display = 'block';
			document.getElementById('polyline_al_38_l').style.display = 'block';
			document.getElementById('polyline_gm_38_l').style.display = 'block';

            if (tooth_38 == 1 && tooth_37 == 1) {
				document.getElementById('polygon_inter_38_37_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_38_37_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_38_37_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_38_37_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_38_37_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_38_37_l').style.display = 'block';            
            }

			if (Furkation_38_b == 1) {
				document.getElementById('furkation_1_38_b').style.display = 'block';
			} else if (Furkation_38_b == 2) {
				document.getElementById('furkation_2_38_b').style.display = 'block';
			} else if (Furkation_38_b == 3) {
				document.getElementById('furkation_3_38_b').style.display = 'block';
			}
			if (Furkation_38_b == 1) {
				document.getElementById('furkation_1_38_b_tab').style.display = 'block';
			} else if (Furkation_38_b == 2) {
				document.getElementById('furkation_2_38_b_tab').style.display = 'block';
			} else if (Furkation_38_b == 3) {
				document.getElementById('furkation_3_38_b_tab').style.display = 'block';
			}
			if (Furkation_38_l == 1) {
				document.getElementById('furkation_1_38_l').style.display = 'block';
			} else if (Furkation_38_l == 2) {
				document.getElementById('furkation_2_38_l').style.display = 'block';
			} else if (Furkation_38_l == 3) {
				document.getElementById('furkation_3_38_l').style.display = 'block';
			}
			if (Furkation_38_l == 1) {
				document.getElementById('furkation_1_38_l_tab').style.display = 'block';
			} else if (Furkation_38_l == 2) {
				document.getElementById('furkation_2_38_l_tab').style.display = 'block';
			} else if (Furkation_38_l == 3) {
				document.getElementById('furkation_3_38_l_tab').style.display = 'block';
			}

			document.getElementById('bop_38_db_btn').style.display = 'block';
			document.getElementById('bop_38_b_btn').style.display = 'block';
			document.getElementById('bop_38_mb_btn').style.display = 'block';

			document.getElementById('bop_38_dl_btn').style.display = 'block';
			document.getElementById('bop_38_l_btn').style.display = 'block';
			document.getElementById('bop_38_ml_btn').style.display = 'block';
			
			if (bop_38_db == 1) {
				document.getElementById('bop_38_db_rectangle').style.display = 'block';
			}
			if (bop_38_b == 1) {
				document.getElementById('bop_38_b_rectangle').style.display = 'block';
			}
			if (bop_38_mb == 1) {
				document.getElementById('bop_38_mb_rectangle').style.display = 'block';
			}
			if (bop_38_dl == 1) {
				document.getElementById('bop_38_dl_rectangle').style.display = 'block';
			}
			if (bop_38_l == 1) {
				document.getElementById('bop_38_l_rectangle').style.display = 'block';
			}
			if (bop_38_ml == 1) {
				document.getElementById('bop_38_ml_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_38_db_btn').style.display = 'block';
			document.getElementById('pi_38_b_btn').style.display = 'block';
			document.getElementById('pi_38_mb_btn').style.display = 'block';

			document.getElementById('pi_38_dl_btn').style.display = 'block';
			document.getElementById('pi_38_l_btn').style.display = 'block';
			document.getElementById('pi_38_ml_btn').style.display = 'block';
			
			if (pi_38_db == 1) {
				document.getElementById('pi_38_db_rectangle').style.display = 'block';
			}
			if (pi_38_b == 1) {
				document.getElementById('pi_38_b_rectangle').style.display = 'block';
			}
			if (pi_38_mb == 1) {
				document.getElementById('pi_38_mb_rectangle').style.display = 'block';
			}
			if (pi_38_dl == 1) {
				document.getElementById('pi_38_dl_rectangle').style.display = 'block';
			}
			if (pi_38_l == 1) {
				document.getElementById('pi_38_l_rectangle').style.display = 'block';
			}
			if (pi_38_ml == 1) {
				document.getElementById('pi_38_ml_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_38 == 1) {
			tooth_38 = 1;
			document.getElementById('tooth_line_38_b').style.display = 'none';
			document.getElementById('tooth_line_38_l').style.display = 'none';

			document.getElementById('mobility_38_txt').style.display = 'block';
			
			document.getElementById('note_38_txt').style.display = 'block';

			document.getElementById('implantat_38_btn').style.display = 'block';
			document.getElementById('implantat_38_tab').style.display = 'block';
			document.getElementById('implantat_38_b_image').style.display = 'block';
			document.getElementById('implantat_38_l_image').style.display = 'block';

			document.getElementById('gm_38_db_txt').style.display = 'block';
			document.getElementById('gm_38_b_txt').style.display = 'block';
			document.getElementById('gm_38_mb_txt').style.display = 'block';
			
			document.getElementById('pd_38_db_txt').style.display = 'block';
			document.getElementById('pd_38_b_txt').style.display = 'block';
			document.getElementById('pd_38_mb_txt').style.display = 'block';
			
			document.getElementById('gm_38_dl_txt').style.display = 'block';
			document.getElementById('gm_38_l_txt').style.display = 'block';
			document.getElementById('gm_38_ml_txt').style.display = 'block';
			
			document.getElementById('pd_38_dl_txt').style.display = 'block';
			document.getElementById('pd_38_l_txt').style.display = 'block';
			document.getElementById('pd_38_ml_txt').style.display = 'block';

			document.getElementById('polygon_38_b').style.display = 'block';
			document.getElementById('polyline_al_38_b').style.display = 'block';
			document.getElementById('polyline_gm_38_b').style.display = 'block';
			
			document.getElementById('polygon_38_l').style.display = 'block';
			document.getElementById('polyline_al_38_l').style.display = 'block';
			document.getElementById('polyline_gm_38_l').style.display = 'block';

            if (tooth_38 == 1 && tooth_37 == 1) {
				document.getElementById('polygon_inter_38_37_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_38_37_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_38_37_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_38_37_l').style.display = 'block';            
				document.getElementById('polyline_al_inter_38_37_l').style.display = 'block';            
				document.getElementById('polyline_gm_inter_38_37_l').style.display = 'block';            
            }            

			document.getElementById('bop_38_db_btn').style.display = 'block';
			document.getElementById('bop_38_b_btn').style.display = 'block';
			document.getElementById('bop_38_mb_btn').style.display = 'block';

			document.getElementById('bop_38_dl_btn').style.display = 'block';
			document.getElementById('bop_38_l_btn').style.display = 'block';
			document.getElementById('bop_38_ml_btn').style.display = 'block';
			
			document.getElementById('pi_38_db_btn').style.display = 'block';
			document.getElementById('pi_38_b_btn').style.display = 'block';
			document.getElementById('pi_38_mb_btn').style.display = 'block';

			document.getElementById('pi_38_dl_btn').style.display = 'block';
			document.getElementById('pi_38_l_btn').style.display = 'block';
			document.getElementById('pi_38_ml_btn').style.display = 'block';
			
			if (bop_38_db == 1) {
				document.getElementById('bop_38_db_rectangle').style.display = 'block';
			}
			if (bop_38_b == 1) {
				document.getElementById('bop_38_b_rectangle').style.display = 'block';
			}
			if (bop_38_mb == 1) {
				document.getElementById('bop_38_mb_rectangle').style.display = 'block';
			}
			if (bop_38_dl == 1) {
				document.getElementById('bop_38_dl_rectangle').style.display = 'block';
			}
			if (bop_38_l == 1) {
				document.getElementById('bop_38_l_rectangle').style.display = 'block';
			}
			if (bop_38_ml == 1) {
				document.getElementById('bop_38_ml_rectangle').style.display = 'block';
			}
			
			if (pi_38_db == 1) {
				document.getElementById('pi_38_db_rectangle').style.display = 'block';
			}
			if (pi_38_b == 1) {
				document.getElementById('pi_38_b_rectangle').style.display = 'block';
			}
			if (pi_38_mb == 1) {
				document.getElementById('pi_38_mb_rectangle').style.display = 'block';
			}
			if (pi_38_dl == 1) {
				document.getElementById('pi_38_dl_rectangle').style.display = 'block';
			}
			if (pi_38_l == 1) {
				document.getElementById('pi_38_l_rectangle').style.display = 'block';
			}
			if (pi_38_ml == 1) {
				document.getElementById('pi_38_ml_rectangle').style.display = 'block';
			}
		}
		change_probing_38();
	}

	function toggle_implant_38() {
		if (Implantat_38 == 0) {
			Implantat_38 = 1;
			
			document.getElementById('implantat_38_b_image').style.display = 'block';
			document.getElementById('implantat_38_l_image').style.display = 'block';
			document.getElementById('implantat_38_tab').style.display = 'block';
			
			document.getElementById('furkation_38_b_btn').style.display = 'none';
			document.getElementById('furkation_38_l_btn').style.display = 'none';
			
			document.getElementById('furkation_1_38_b').style.display = 'none';
			document.getElementById('furkation_2_38_b').style.display = 'none';
			document.getElementById('furkation_3_38_b').style.display = 'none';
			
			document.getElementById('furkation_1_38_b_tab').style.display = 'none';
			document.getElementById('furkation_2_38_b_tab').style.display = 'none';
			document.getElementById('furkation_3_38_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_38_l').style.display = 'none';
			document.getElementById('furkation_2_38_l').style.display = 'none';
			document.getElementById('furkation_3_38_l').style.display = 'none';
			
			document.getElementById('furkation_1_38_l_tab').style.display = 'none';
			document.getElementById('furkation_2_38_l_tab').style.display = 'none';
			document.getElementById('furkation_3_38_l_tab').style.display = 'none';
		}
		else {
			Implantat_38 = 0;
			
			document.getElementById('implantat_38_b_image').style.display = 'none';
			document.getElementById('implantat_38_l_image').style.display = 'none';
			document.getElementById('implantat_38_tab').style.display = 'none';
			
			document.getElementById('furkation_38_b_btn').style.display = 'block';
			document.getElementById('furkation_38_l_btn').style.display = 'block';

			if (Furkation_38_b == 1) {
				document.getElementById('furkation_1_38_b').style.display = 'block';
			} else if (Furkation_38_b == 2) {
				document.getElementById('furkation_2_38_b').style.display = 'block';
			} else if (Furkation_38_b == 3) {
				document.getElementById('furkation_3_38_b').style.display = 'block';
			}
			if (Furkation_38_b == 1) {
				document.getElementById('furkation_1_38_b_tab').style.display = 'block';
			} else if (Furkation_38_b == 2) {
				document.getElementById('furkation_2_38_b_tab').style.display = 'block';
			} else if (Furkation_38_b == 3) {
				document.getElementById('furkation_3_38_b_tab').style.display = 'block';
			}
			if (Furkation_38_l == 1) {
				document.getElementById('furkation_1_38_l').style.display = 'block';
			} else if (Furkation_38_l == 2) {
				document.getElementById('furkation_2_38_l').style.display = 'block';
			} else if (Furkation_38_l == 3) {
				document.getElementById('furkation_3_38_l').style.display = 'block';
			}
			if (Furkation_38_l == 1) {
				document.getElementById('furkation_1_38_l_tab').style.display = 'block';
			} else if (Furkation_38_l == 2) {
				document.getElementById('furkation_2_38_l_tab').style.display = 'block';
			} else if (Furkation_38_l == 3) {
				document.getElementById('furkation_3_38_l_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_38_b() {
		if (Furkation_38_b == 0) {
			document.getElementById('furkation_1_38_b_tab').style.display = 'block';
			document.getElementById('furkation_2_38_b_tab').style.display = 'none';
			document.getElementById('furkation_3_38_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_38_b').style.display = 'block';
			document.getElementById('furkation_2_38_b').style.display = 'none';
			document.getElementById('furkation_3_38_b').style.display = 'none';

			Furkation_38_b = 1;
		}
		else if (Furkation_38_b == 1) {
			document.getElementById('furkation_1_38_b_tab').style.display = 'none';
			document.getElementById('furkation_2_38_b_tab').style.display = 'block';
			document.getElementById('furkation_3_38_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_38_b').style.display = 'none';
			document.getElementById('furkation_2_38_b').style.display = 'block';
			document.getElementById('furkation_3_38_b').style.display = 'none';
			
			Furkation_38_b = 2;
		}
		else if (Furkation_38_b == 2) {
			document.getElementById('furkation_1_38_b_tab').style.display = 'none';
			document.getElementById('furkation_2_38_b_tab').style.display = 'none';
			document.getElementById('furkation_3_38_b_tab').style.display = 'block';
			
			document.getElementById('furkation_1_38_b').style.display = 'none';
			document.getElementById('furkation_2_38_b').style.display = 'none';
			document.getElementById('furkation_3_38_b').style.display = 'block';
						
			Furkation_38_b = 3;
		}
		else if (Furkation_38_b == 3) {
			document.getElementById('furkation_1_38_b_tab').style.display = 'none';
			document.getElementById('furkation_2_38_b_tab').style.display = 'none';
			document.getElementById('furkation_3_38_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_38_b').style.display = 'none';
			document.getElementById('furkation_2_38_b').style.display = 'none';
			document.getElementById('furkation_3_38_b').style.display = 'none';
						
			Furkation_38_b = 0;
		}
	}

	function toggle_furcation_38_l() {
		if (Furkation_38_l == 0) {
			document.getElementById('furkation_1_38_l_tab').style.display = 'block';
			document.getElementById('furkation_2_38_l_tab').style.display = 'none';
			document.getElementById('furkation_3_38_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_38_l').style.display = 'block';
			document.getElementById('furkation_2_38_l').style.display = 'none';
			document.getElementById('furkation_3_38_l').style.display = 'none';

			Furkation_38_l = 1;
		}
		else if (Furkation_38_l == 1) {
			document.getElementById('furkation_1_38_l_tab').style.display = 'none';
			document.getElementById('furkation_2_38_l_tab').style.display = 'block';
			document.getElementById('furkation_3_38_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_38_l').style.display = 'none';
			document.getElementById('furkation_2_38_l').style.display = 'block';
			document.getElementById('furkation_3_38_l').style.display = 'none';
			
			Furkation_38_l = 2;
		}
		else if (Furkation_38_l == 2) {
			document.getElementById('furkation_1_38_l_tab').style.display = 'none';
			document.getElementById('furkation_2_38_l_tab').style.display = 'none';
			document.getElementById('furkation_3_38_l_tab').style.display = 'block';
			
			document.getElementById('furkation_1_38_l').style.display = 'none';
			document.getElementById('furkation_2_38_l').style.display = 'none';
			document.getElementById('furkation_3_38_l').style.display = 'block';
						
			Furkation_38_l = 3;
		}
		else if (Furkation_38_l == 3) {
			document.getElementById('furkation_1_38_l_tab').style.display = 'none';
			document.getElementById('furkation_2_38_l_tab').style.display = 'none';
			document.getElementById('furkation_3_38_l_tab').style.display = 'none';
			
			document.getElementById('furkation_1_38_l').style.display = 'none';
			document.getElementById('furkation_2_38_l').style.display = 'none';
			document.getElementById('furkation_3_38_l').style.display = 'none';
						
			Furkation_38_l = 0;
		}
	}

	function toggle_bop_38_db() {
		if (bop_38_db == 0) {
			bop_38_db = 1;
			document.getElementById('bop_38_db_rectangle').style.display = 'block';
		}
		else {
			bop_38_db = 0;
			document.getElementById('bop_38_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_38_b() {
		if (bop_38_b == 0) {
			bop_38_b = 1;
			document.getElementById('bop_38_b_rectangle').style.display = 'block';
		}
		else {
			bop_38_b = 0;
			document.getElementById('bop_38_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_38_mb() {
		if (bop_38_mb == 0) {
			bop_38_mb = 1;
			document.getElementById('bop_38_mb_rectangle').style.display = 'block';
		}
		else {
			bop_38_mb = 0;
			document.getElementById('bop_38_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_38_db() {
		if (pi_38_db == 0) {
			pi_38_db = 1;
			document.getElementById('pi_38_db_rectangle').style.display = 'block';
		}
		else {
			pi_38_db = 0;
			document.getElementById('pi_38_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_38_b() {
		if (pi_38_b == 0) {
			pi_38_b = 1;
			document.getElementById('pi_38_b_rectangle').style.display = 'block';
		}
		else {
			pi_38_b = 0;
			document.getElementById('pi_38_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_38_mb() {
		if (pi_38_mb == 0) {
			pi_38_mb = 1;
			document.getElementById('pi_38_mb_rectangle').style.display = 'block';
		}
		else {
			pi_38_mb = 0;
			document.getElementById('pi_38_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_38_dl() {
		if (bop_38_dl == 0) {
			bop_38_dl = 1;
			document.getElementById('bop_38_dl_rectangle').style.display = 'block';
		}
		else {
			bop_38_dl = 0;
			document.getElementById('bop_38_dl_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_38_l() {
		if (bop_38_l == 0) {
			bop_38_l = 1;
			document.getElementById('bop_38_l_rectangle').style.display = 'block';
		}
		else {
			bop_38_l = 0;
			document.getElementById('bop_38_l_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_38_ml() {
		if (bop_38_ml == 0) {
			bop_38_ml = 1;
			document.getElementById('bop_38_ml_rectangle').style.display = 'block';
		}
		else {
			bop_38_ml = 0;
			document.getElementById('bop_38_ml_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_38_dl() {
		if (pi_38_dl == 0) {
			pi_38_dl = 1;
			document.getElementById('pi_38_dl_rectangle').style.display = 'block';
		}
		else {
			pi_38_dl = 0;
			document.getElementById('pi_38_dl_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_38_l() {
		if (pi_38_l == 0) {
			pi_38_l = 1;
			document.getElementById('pi_38_l_rectangle').style.display = 'block';
		}
		else {
			pi_38_l = 0;
			document.getElementById('pi_38_l_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_38_ml() {
		if (pi_38_ml == 0) {
			pi_38_ml = 1;
			document.getElementById('pi_38_ml_rectangle').style.display = 'block';
		}
		else {
			pi_38_ml = 0;
			document.getElementById('pi_38_ml_rectangle').style.display = 'none';
		}
	}

	function change_probing_38() {
		if (tooth_38 == 1) {
			
		// Variablen aus dem Formular
			pd_38_db = document.forms[0]["pd_38_db"].value;
			pd_38_b = document.forms[0]["pd_38_b"].value;
			pd_38_mb = document.forms[0]["pd_38_mb"].value;

			if (document.forms[0]["pd_38_dl"].value > 3) {document.forms[0]["pd_38_dl"].style.color = 'red';} else {document.forms[0]["pd_38_dl"].style.color = 'black'};
			if (document.forms[0]["pd_38_l"].value > 3) {document.forms[0]["pd_38_l"].style.color = 'red';} else {document.forms[0]["pd_38_l"].style.color = 'black'};
			if (document.forms[0]["pd_38_ml"].value > 3) {document.forms[0]["pd_38_ml"].style.color = 'red';} else {document.forms[0]["pd_38_ml"].style.color = 'black'};
			
			gm_38_db = document.forms[0]["gm_38_db"].value;
			gm_38_b = document.forms[0]["gm_38_b"].value;
			gm_38_mb = document.forms[0]["gm_38_mb"].value;
			
			pd_38_dl = document.forms[0]["pd_38_dl"].value;
			pd_38_l = document.forms[0]["pd_38_l"].value;
			pd_38_ml = document.forms[0]["pd_38_ml"].value;

			if (document.forms[0]["pd_38_db"].value > 3) {document.forms[0]["pd_38_db"].style.color = 'red';} else {document.forms[0]["pd_38_db"].style.color = 'black'};
			if (document.forms[0]["pd_38_b"].value > 3) {document.forms[0]["pd_38_b"].style.color = 'red';} else {document.forms[0]["pd_38_b"].style.color = 'black'};
			if (document.forms[0]["pd_38_mb"].value > 3) {document.forms[0]["pd_38_mb"].style.color = 'red';} else {document.forms[0]["pd_38_mb"].style.color = 'black'};
			
			gm_38_dl = document.forms[0]["gm_38_dl"].value;
			gm_38_l = document.forms[0]["gm_38_l"].value;
			gm_38_ml = document.forms[0]["gm_38_ml"].value;

		// Set der horizontalen Koordinaten von Zahn 38 (bukkal) in der Bitmap
			var x_db_38 = 1061;							// distal 38
			var x_mb_38 = 1016;							// mesial 38
			var x_b_38 = (x_db_38 + x_mb_38)/2;			// bukkal 38
			
		// Set der horizontalen Koordinaten von Zahn 38 (lingual) in der Bitmap
			var x_dl_38 = 1061;							// distal 38
			var x_ml_38 = 1012;							// mesial 38
			var x_l_38 = (x_dl_38 + x_ml_38)/2;			// lingual 38
			
		// Set der vertikalen Koordinaten von Zahn 38 (bukkal) aus dem Formular
			var y_gm_38_db = gm_UK_b - 6.05 * gm_38_db;	// Margo Gingivae distobukkal 38
			var y_gm_38_b = gm_UK_b - 6.05 * gm_38_b;	// Margo Gingivae bukkal 38
			var y_gm_38_mb = gm_UK_b - 6.05 * gm_38_mb;	// Margo Gingivae mesiobukkal 38
			var y_pd_38_db = 6.05 * pd_38_db;			// Sondierungstiefe distobukkal 38
			var y_pd_38_b = 6.05 * pd_38_b;				// Sondierungstiefe bukkal 38
			var y_pd_38_mb = 6.05 * pd_38_mb;			// Sondierungstiefe mesiobukkal 38
			
		// Set der vertikalen Koordinaten von Zahn 38 (lingual) aus dem Formular
			var y_gm_38_dl = gm_UK_l + 6.05 * gm_38_dl;	// Margo Gingivae distolingual 38
			var y_gm_38_l = gm_UK_l + 6.05 * gm_38_l;	// Margo Gingivae lingual 38
			var y_gm_38_ml = gm_UK_l + 6.05 * gm_38_ml;	// Margo Gingivae mesiolingual 38
			var y_pd_38_dl = 6.05 * pd_38_dl;			// Sondierungstiefe distolingual 38
			var y_pd_38_l = 6.05 * pd_38_l;				// Sondierungstiefe lingual 38
			var y_pd_38_ml = 6.05 * pd_38_ml;			// Sondierungstiefe mesiolingual 38
			
		// Berechnung des Attachmentniveaus 38 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_38_db = y_gm_38_db + y_pd_38_db;	// Attachmentniveau distobukkal 38
			var y_al_38_b = y_gm_38_b + y_pd_38_b;		// Attachmentniveau bukkal 38
			var y_al_38_mb = y_gm_38_mb + y_pd_38_mb;	// Attachmentniveau mesiobukkal 38
			
		// Berechnung des Attachmentniveaus 38 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_38_dl = y_gm_38_dl - y_pd_38_dl;	// Attachmentniveau distolingual 38
			var y_al_38_l = y_gm_38_l - y_pd_38_l;		// Attachmentniveau lingual 38
			var y_al_38_ml = y_gm_38_ml - y_pd_38_ml;	// Attachmentniveau mesiolingual 38

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[38].storeCoordinates(
				x_db_38, x_mb_38, x_dl_38, x_ml_38, x_b_38, x_l_38,
				y_gm_38_db, y_gm_38_b, y_gm_38_mb, y_pd_38_db, y_pd_38_b, y_pd_38_mb,
				y_gm_38_dl, y_gm_38_l, y_gm_38_ml, y_pd_38_dl, y_pd_38_l, y_pd_38_ml,
				y_al_38_db, y_al_38_b, y_al_38_mb, y_al_38_dl, y_al_38_l, y_al_38_ml
			);

		// Parodontaltasche 38 bukkal zeichnen
			var string = 
				x_db_38 + ", " + y_al_38_db + "  " + 
				x_b_38 + ", " + y_al_38_b + "  " + 
				x_mb_38 + ", " + y_al_38_mb + "  " + 
				x_mb_38 + ", " + y_gm_38_mb + "  " + 
				x_b_38 + ", " + y_gm_38_b + "  " + 
				x_db_38 + ", " + y_gm_38_db;
			document.getElementById("polygon_38_b").setAttribute("points", string);
		// Attachmentniveau 38 bukkal zeichnen
			var string = 
				x_db_38 + ", " + y_al_38_db + "  " + 
				x_b_38 + ", " + y_al_38_b + "  " + 
				x_mb_38 + ", " + y_al_38_mb;
			document.getElementById("polyline_al_38_b").setAttribute("points", string);
		// Margo Gingivae 38 bukkal zeichnen
			var string =
				x_db_38 + ", " + y_gm_38_db + "  " + 
				x_b_38 + ", " + y_gm_38_b + "  " + 
				x_mb_38 + ", " + y_gm_38_mb;
			document.getElementById("polyline_gm_38_b").setAttribute("points", string);

		// Parodontaltasche 38 lingual zeichnen
			var string = 
				x_dl_38 + ", " + y_al_38_dl + "  " + 
				x_l_38 + ", " + y_al_38_l + "  " + 
				x_ml_38 + ", " + y_al_38_ml + "  " + 
				x_ml_38 + ", " + y_gm_38_ml + "  " + 
				x_l_38 + ", " + y_gm_38_l + "  " + 
				x_dl_38 + ", " + y_gm_38_dl;
			document.getElementById("polygon_38_l").setAttribute("points", string);
		// Attachmentniveau 38 lingual zeichnen
			var string = 
				x_dl_38 + ", " + y_al_38_dl + "  " + 
				x_l_38 + ", " + y_al_38_l + "  " + 
				x_ml_38 + ", " + y_al_38_ml;
			document.getElementById("polyline_al_38_l").setAttribute("points", string);
		// Margo Gingivae 38 lingual zeichnen
			var string =
				x_dl_38 + ", " + y_gm_38_dl + "  " + 
				x_l_38 + ", " + y_gm_38_l + "  " + 
				x_ml_38 + ", " + y_gm_38_ml;
			document.getElementById("polyline_gm_38_l").setAttribute("points", string);
		}
        if (tooth_38 == 1 && tooth_37 == 1) {

            pd_37_db = document.forms[0]["pd_37_db"].value;
			gm_37_db = document.forms[0]["gm_37_db"].value;
			
			pd_37_dl = document.forms[0]["pd_37_dl"].value;
			gm_37_dl = document.forms[0]["gm_37_dl"].value;
            
		// Set der horizontalen Koordinaten von Zahn 37 (bukkal) in der Bitmap
			var x_db_37 = 999;							// distal 37
			
		// Set der horizontalen Koordinaten von Zahn 37 (lingual) in der Bitmap
			var x_dl_37 = 995;							// distal 37
			
		// Set der vertikalen Koordinaten von Zahn 37 (bukkal) aus dem Formular
			var y_gm_37_db = gm_UK_b - 6.05 * gm_37_db;	// Margo Gingivae distobukkal 37
			var y_pd_37_db = 6.05 * pd_37_db;			// Sondierungstiefe distobukkal 37
			
		// Set der vertikalen Koordinaten von Zahn 37 (lingual) aus dem Formular
			var y_gm_37_dl = gm_UK_l + 6.05 * gm_37_dl;	// Margo Gingivae distolingual 37
			var y_pd_37_dl = 6.05 * pd_37_dl;			// Sondierungstiefe distolingual 37
			
		// Berechnung des Attachmentniveaus 37 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_37_db = y_gm_37_db + y_pd_37_db;	// Attachmentniveau distobukkal 37
			
		// Berechnung des Attachmentniveaus 37 (lingual) aus Margo Gingivae und Sondierungstiefe
			var y_al_37_dl = y_gm_37_dl - y_pd_37_dl;	// Attachmentniveau distolingual 37

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