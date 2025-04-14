	// Definition der Variablen für das Formular
		var tooth_16 = 1;
		var Furkation_16_b = 0;
		var Furkation_16_dp = 0;
		var Furkation_16_mp = 0;
		var Implantat_16 = 0;
		var bop_16_db = 0;
		var bop_16_b = 0;
		var bop_16_mb = 0;
		var pi_16_db = 0;
		var pi_16_b = 0;
		var pi_16_mb = 0;
		var bop_16_dp = 0;
		var bop_16_p = 0;
		var bop_16_mp = 0;
		var pi_16_dp = 0;
		var pi_16_p = 0;
		var pi_16_mp = 0;
		var gm_16_db = 0;
		var gm_16_b = 0;
		var gm_16_mb = 0;
		var pd_16_db = 0;
		var pd_16_b = 0;
		var pd_16_mb = 0;
		var gm_16_dp = 0;
		var gm_16_p = 0;
		var gm_16_mp = 0;
		var pd_16_dp = 0;
		var pd_16_p = 0;
		var pd_16_mp = 0;

	function clear_data_16() {
        if (tooth_16 == 1) {
			gm_16_db = 0;
			gm_16_b = 0;
			gm_16_mb = 0;
			pd_16_db = 0;
			pd_16_b = 0;
			pd_16_mb = 0;
	
				document.getElementById('gm_16_db_txt').value = 0;
				document.getElementById('gm_16_b_txt').value = 0;
				document.getElementById('gm_16_mb_txt').value = 0;
				
				document.getElementById('pd_16_db_txt').value = 0;
				document.getElementById('pd_16_b_txt').value = 0;
				document.getElementById('pd_16_mb_txt').value = 0;
			
				document.forms[0]["pd_16_db"].style.color = 'black'
				document.forms[0]["pd_16_b"].style.color = 'black'
				document.forms[0]["pd_16_mb"].style.color = 'black'
			
			gm_16_dp = 0;
			gm_16_p = 0;
			gm_16_mp = 0;
			pd_16_dp = 0;
			pd_16_p = 0;
			pd_16_mp = 0;

				document.getElementById('gm_16_dp_txt').value = 0;
				document.getElementById('gm_16_p_txt').value = 0;
				document.getElementById('gm_16_mp_txt').value = 0;
				
				document.getElementById('pd_16_dp_txt').value = 0;
				document.getElementById('pd_16_p_txt').value = 0;
				document.getElementById('pd_16_mp_txt').value = 0;

				document.forms[0]["pd_16_dp"].style.color = 'black'
				document.forms[0]["pd_16_p"].style.color = 'black'
				document.forms[0]["pd_16_mp"].style.color = 'black'
			
			change_probing_16();
			
			mobility_16 = 0;

				document.getElementById('mobility_16_txt').value = "0";

			note_16 = "";

				document.getElementById('note_16_txt').value = "";

			Furkation_16_b = 0;
			Furkation_16_dp = 0;
			Furkation_16_mp = 0;

				document.getElementById('furkation_1_16_b').style.display = 'none';
				document.getElementById('furkation_2_16_b').style.display = 'none';
				document.getElementById('furkation_3_16_b').style.display = 'none';
					
				document.getElementById('furkation_1_16_b_tab').style.display = 'none';
				document.getElementById('furkation_2_16_b_tab').style.display = 'none';
				document.getElementById('furkation_3_16_b_tab').style.display = 'none';
				
				document.getElementById('furkation_1_16_dp').style.display = 'none';
				document.getElementById('furkation_2_16_dp').style.display = 'none';
				document.getElementById('furkation_3_16_dp').style.display = 'none';
					
				document.getElementById('furkation_1_16_dp_tab').style.display = 'none';
				document.getElementById('furkation_2_16_dp_tab').style.display = 'none';
				document.getElementById('furkation_3_16_dp_tab').style.display = 'none';
				
				document.getElementById('furkation_1_16_mp').style.display = 'none';
				document.getElementById('furkation_2_16_mp').style.display = 'none';
				document.getElementById('furkation_3_16_mp').style.display = 'none';
				
				document.getElementById('furkation_1_16_mp_tab').style.display = 'none';
				document.getElementById('furkation_2_16_mp_tab').style.display = 'none';
				document.getElementById('furkation_3_16_mp_tab').style.display = 'none';
	
			bop_16_db = 0;
			bop_16_b = 0;
			bop_16_mb = 0;
					
			bop_16_dp = 0;
			bop_16_p = 0;
			bop_16_mp = 0;
					
				document.getElementById('bop_16_db_rectangle').style.display = 'none';
				document.getElementById('bop_16_b_rectangle').style.display = 'none';
				document.getElementById('bop_16_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_16_dp_rectangle').style.display = 'none';
				document.getElementById('bop_16_p_rectangle').style.display = 'none';
				document.getElementById('bop_16_mp_rectangle').style.display = 'none';
				
			pi_16_db = 0;
			pi_16_b = 0;
			pi_16_mb = 0;
					
			pi_16_dp = 0;
			pi_16_p = 0;
			pi_16_mp = 0;

				document.getElementById('pi_16_db_rectangle').style.display = 'none';
				document.getElementById('pi_16_b_rectangle').style.display = 'none';
				document.getElementById('pi_16_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_16_dp_rectangle').style.display = 'none';
				document.getElementById('pi_16_p_rectangle').style.display = 'none';
				document.getElementById('pi_16_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_16() {
		if (tooth_16 === 1) {
			tooth_16 = 0;
			document.getElementById('tooth_line_16_b').style.display = 'block';
			document.getElementById('tooth_line_16_p').style.display = 'block';
			
			document.getElementById('mobility_16_txt').style.display = 'none';
			
			document.getElementById('implantat_16_btn').style.display = 'none';
			document.getElementById('implantat_16_tab').style.display = 'none';
			document.getElementById('implantat_16_b_image').style.display = 'none';
			document.getElementById('implantat_16_p_image').style.display = 'none';
			
			document.getElementById('furkation_16_b_btn').style.display = 'none';
			document.getElementById('furkation_16_dp_btn').style.display = 'none';
			document.getElementById('furkation_16_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_16_b').style.display = 'none';
			document.getElementById('furkation_2_16_b').style.display = 'none';
			document.getElementById('furkation_3_16_b').style.display = 'none';
			
			document.getElementById('furkation_1_16_b_tab').style.display = 'none';
			document.getElementById('furkation_2_16_b_tab').style.display = 'none';
			document.getElementById('furkation_3_16_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_dp').style.display = 'none';
			document.getElementById('furkation_2_16_dp').style.display = 'none';
			document.getElementById('furkation_3_16_dp').style.display = 'none';
			
			document.getElementById('furkation_1_16_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_16_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_16_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_mp').style.display = 'none';
			document.getElementById('furkation_2_16_mp').style.display = 'none';
			document.getElementById('furkation_3_16_mp').style.display = 'none';
			
			document.getElementById('furkation_1_16_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_16_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_16_mp_tab').style.display = 'none';
			
			document.getElementById('gm_16_db_txt').style.display = 'none';
			document.getElementById('gm_16_b_txt').style.display = 'none';
			document.getElementById('gm_16_mb_txt').style.display = 'none';
			
			document.getElementById('pd_16_db_txt').style.display = 'none';
			document.getElementById('pd_16_b_txt').style.display = 'none';
			document.getElementById('pd_16_mb_txt').style.display = 'none';
			
			document.getElementById('gm_16_dp_txt').style.display = 'none';
			document.getElementById('gm_16_p_txt').style.display = 'none';
			document.getElementById('gm_16_mp_txt').style.display = 'none';
			
			document.getElementById('pd_16_dp_txt').style.display = 'none';
			document.getElementById('pd_16_p_txt').style.display = 'none';
			document.getElementById('pd_16_mp_txt').style.display = 'none';
					
			document.getElementById('bop_16_db_rectangle').style.display = 'none';
			document.getElementById('bop_16_b_rectangle').style.display = 'none';
			document.getElementById('bop_16_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_16_dp_rectangle').style.display = 'none';
			document.getElementById('bop_16_p_rectangle').style.display = 'none';
			document.getElementById('bop_16_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_16_db_btn').style.display = 'none';
			document.getElementById('bop_16_b_btn').style.display = 'none';
			document.getElementById('bop_16_mb_btn').style.display = 'none';
			
			document.getElementById('bop_16_dp_btn').style.display = 'none';
			document.getElementById('bop_16_p_btn').style.display = 'none';
			document.getElementById('bop_16_mp_btn').style.display = 'none';
			
			document.getElementById('pi_16_db_rectangle').style.display = 'none';
			document.getElementById('pi_16_b_rectangle').style.display = 'none';
			document.getElementById('pi_16_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_16_dp_rectangle').style.display = 'none';
			document.getElementById('pi_16_p_rectangle').style.display = 'none';
			document.getElementById('pi_16_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_16_db_btn').style.display = 'none';
			document.getElementById('pi_16_b_btn').style.display = 'none';
			document.getElementById('pi_16_mb_btn').style.display = 'none';
			
			document.getElementById('pi_16_dp_btn').style.display = 'none';
			document.getElementById('pi_16_p_btn').style.display = 'none';
			document.getElementById('pi_16_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_16_b').style.display = 'none';
			document.getElementById('polyline_al_16_b').style.display = 'none';
			document.getElementById('polyline_gm_16_b').style.display = 'none';
			
			document.getElementById('polygon_16_p').style.display = 'none';
			document.getElementById('polyline_al_16_p').style.display = 'none';
			document.getElementById('polyline_gm_16_p').style.display = 'none';
			
			document.getElementById('polygon_inter_17_16_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_17_16_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_17_16_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_17_16_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_17_16_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_17_16_p').style.display = 'none';            
            
			document.getElementById('polygon_inter_16_15_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_16_15_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_16_15_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_16_15_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_16_15_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_16_15_p').style.display = 'none';  
			
			document.getElementById('note_16_txt').style.display = 'none';
		}
		else if (Implantat_16 !== 1) {
			tooth_16 = 1;
			document.getElementById('tooth_line_16_b').style.display = 'none';
			document.getElementById('tooth_line_16_p').style.display = 'none';

			document.getElementById('mobility_16_txt').style.display = 'block';

			document.getElementById('implantat_16_btn').style.display = 'block';

			document.getElementById('furkation_16_b_btn').style.display = 'block';
			document.getElementById('furkation_16_dp_btn').style.display = 'block';
			document.getElementById('furkation_16_mp_btn').style.display = 'block';
			
			document.getElementById('gm_16_db_txt').style.display = 'block';
			document.getElementById('gm_16_b_txt').style.display = 'block';
			document.getElementById('gm_16_mb_txt').style.display = 'block';
			
			document.getElementById('pd_16_db_txt').style.display = 'block';
			document.getElementById('pd_16_b_txt').style.display = 'block';
			document.getElementById('pd_16_mb_txt').style.display = 'block';
			
			document.getElementById('gm_16_dp_txt').style.display = 'block';
			document.getElementById('gm_16_p_txt').style.display = 'block';
			document.getElementById('gm_16_mp_txt').style.display = 'block';
			
			document.getElementById('pd_16_dp_txt').style.display = 'block';
			document.getElementById('pd_16_p_txt').style.display = 'block';
			document.getElementById('pd_16_mp_txt').style.display = 'block';
			
			document.getElementById('note_16_txt').style.display = 'block';

			document.getElementById('polygon_16_b').style.display = 'block';
			document.getElementById('polyline_al_16_b').style.display = 'block';
			document.getElementById('polyline_gm_16_b').style.display = 'block';
			
			document.getElementById('polygon_16_p').style.display = 'block';
			document.getElementById('polyline_al_16_p').style.display = 'block';
			document.getElementById('polyline_gm_16_p').style.display = 'block';

            if (tooth_17 == 1 && tooth_16 == 1) {
				document.getElementById('polygon_inter_17_16_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_17_16_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_17_16_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_17_16_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_17_16_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_17_16_p').style.display = 'block';            
            }        

            if (tooth_16 == 1 && tooth_15 == 1) {
				document.getElementById('polygon_inter_16_15_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_16_15_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_16_15_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_16_15_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_16_15_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_16_15_p').style.display = 'block';            
            }        

			if (Furkation_16_b == 1) {
				document.getElementById('furkation_1_16_b').style.display = 'block';
			} else if (Furkation_16_b == 2) {
				document.getElementById('furkation_2_16_b').style.display = 'block';
			} else if (Furkation_16_b == 3) {
				document.getElementById('furkation_3_16_b').style.display = 'block';
			}
			if (Furkation_16_b == 1) {
				document.getElementById('furkation_1_16_b_tab').style.display = 'block';
			} else if (Furkation_16_b == 2) {
				document.getElementById('furkation_2_16_b_tab').style.display = 'block';
			} else if (Furkation_16_b == 3) {
				document.getElementById('furkation_3_16_b_tab').style.display = 'block';
			}
			if (Furkation_16_dp == 1) {
				document.getElementById('furkation_1_16_dp').style.display = 'block';
			} else if (Furkation_16_dp == 2) {
				document.getElementById('furkation_2_16_dp').style.display = 'block';
			} else if (Furkation_16_dp == 3) {
				document.getElementById('furkation_3_16_dp').style.display = 'block';
			}
			if (Furkation_16_dp == 1) {
				document.getElementById('furkation_1_16_dp_tab').style.display = 'block';
			} else if (Furkation_16_dp == 2) {
				document.getElementById('furkation_2_16_dp_tab').style.display = 'block';
			} else if (Furkation_16_dp == 3) {
				document.getElementById('furkation_3_16_dp_tab').style.display = 'block';
			}
			if (Furkation_16_mp == 1) {
				document.getElementById('furkation_1_16_mp').style.display = 'block';
			} else if (Furkation_16_mp == 2) {
				document.getElementById('furkation_2_16_mp').style.display = 'block';
			} else if (Furkation_16_mp == 3) {
				document.getElementById('furkation_3_16_mp').style.display = 'block';
			}
			if (Furkation_16_mp == 1) {
				document.getElementById('furkation_1_16_mp_tab').style.display = 'block';
			} else if (Furkation_16_mp == 2) {
				document.getElementById('furkation_2_16_mp_tab').style.display = 'block';
			} else if (Furkation_16_mp == 3) {
				document.getElementById('furkation_3_16_mp_tab').style.display = 'block';
			}

			document.getElementById('bop_16_db_btn').style.display = 'block';
			document.getElementById('bop_16_b_btn').style.display = 'block';
			document.getElementById('bop_16_mb_btn').style.display = 'block';

			document.getElementById('bop_16_dp_btn').style.display = 'block';
			document.getElementById('bop_16_p_btn').style.display = 'block';
			document.getElementById('bop_16_mp_btn').style.display = 'block';
			
			if (bop_16_db == 1) {
				document.getElementById('bop_16_db_rectangle').style.display = 'block';
			}
			if (bop_16_b == 1) {
				document.getElementById('bop_16_b_rectangle').style.display = 'block';
			}
			if (bop_16_mb == 1) {
				document.getElementById('bop_16_mb_rectangle').style.display = 'block';
			}
			if (bop_16_dp == 1) {
				document.getElementById('bop_16_dp_rectangle').style.display = 'block';
			}
			if (bop_16_p == 1) {
				document.getElementById('bop_16_p_rectangle').style.display = 'block';
			}
			if (bop_16_mp == 1) {
				document.getElementById('bop_16_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_16_db_btn').style.display = 'block';
			document.getElementById('pi_16_b_btn').style.display = 'block';
			document.getElementById('pi_16_mb_btn').style.display = 'block';

			document.getElementById('pi_16_dp_btn').style.display = 'block';
			document.getElementById('pi_16_p_btn').style.display = 'block';
			document.getElementById('pi_16_mp_btn').style.display = 'block';
			
			if (pi_16_db == 1) {
				document.getElementById('pi_16_db_rectangle').style.display = 'block';
			}
			if (pi_16_b == 1) {
				document.getElementById('pi_16_b_rectangle').style.display = 'block';
			}
			if (pi_16_mb == 1) {
				document.getElementById('pi_16_mb_rectangle').style.display = 'block';
			}
			if (pi_16_dp == 1) {
				document.getElementById('pi_16_dp_rectangle').style.display = 'block';
			}
			if (pi_16_p == 1) {
				document.getElementById('pi_16_p_rectangle').style.display = 'block';
			}
			if (pi_16_mp == 1) {
				document.getElementById('pi_16_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_16 == 1) {
			tooth_16 = 1;
			document.getElementById('tooth_line_16_b').style.display = 'none';
			document.getElementById('tooth_line_16_p').style.display = 'none';

			document.getElementById('mobility_16_txt').style.display = 'block';
			
			document.getElementById('note_16_txt').style.display = 'block';

			document.getElementById('implantat_16_btn').style.display = 'block';
			document.getElementById('implantat_16_tab').style.display = 'block';
			document.getElementById('implantat_16_b_image').style.display = 'block';
			document.getElementById('implantat_16_p_image').style.display = 'block';

			document.getElementById('gm_16_db_txt').style.display = 'block';
			document.getElementById('gm_16_b_txt').style.display = 'block';
			document.getElementById('gm_16_mb_txt').style.display = 'block';
			
			document.getElementById('pd_16_db_txt').style.display = 'block';
			document.getElementById('pd_16_b_txt').style.display = 'block';
			document.getElementById('pd_16_mb_txt').style.display = 'block';
			
			document.getElementById('gm_16_dp_txt').style.display = 'block';
			document.getElementById('gm_16_p_txt').style.display = 'block';
			document.getElementById('gm_16_mp_txt').style.display = 'block';
			
			document.getElementById('pd_16_dp_txt').style.display = 'block';
			document.getElementById('pd_16_p_txt').style.display = 'block';
			document.getElementById('pd_16_mp_txt').style.display = 'block';

			document.getElementById('polygon_16_b').style.display = 'block';
			document.getElementById('polyline_al_16_b').style.display = 'block';
			document.getElementById('polyline_gm_16_b').style.display = 'block';
			
			document.getElementById('polygon_16_p').style.display = 'block';
			document.getElementById('polyline_al_16_p').style.display = 'block';
			document.getElementById('polyline_gm_16_p').style.display = 'block';

            if (tooth_17 == 1 && tooth_16 == 1) {
				document.getElementById('polygon_inter_17_16_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_17_16_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_17_16_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_17_16_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_17_16_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_17_16_p').style.display = 'block';            
            }        

            if (tooth_16 == 1 && tooth_15 == 1) {
				document.getElementById('polygon_inter_16_15_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_16_15_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_16_15_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_16_15_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_16_15_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_16_15_p').style.display = 'block';            
            }        

			document.getElementById('bop_16_db_btn').style.display = 'block';
			document.getElementById('bop_16_b_btn').style.display = 'block';
			document.getElementById('bop_16_mb_btn').style.display = 'block';

			document.getElementById('bop_16_dp_btn').style.display = 'block';
			document.getElementById('bop_16_p_btn').style.display = 'block';
			document.getElementById('bop_16_mp_btn').style.display = 'block';
			
			document.getElementById('pi_16_db_btn').style.display = 'block';
			document.getElementById('pi_16_b_btn').style.display = 'block';
			document.getElementById('pi_16_mb_btn').style.display = 'block';

			document.getElementById('pi_16_dp_btn').style.display = 'block';
			document.getElementById('pi_16_p_btn').style.display = 'block';
			document.getElementById('pi_16_mp_btn').style.display = 'block';
			
			if (bop_16_db == 1) {
				document.getElementById('bop_16_db_rectangle').style.display = 'block';
			}
			if (bop_16_b == 1) {
				document.getElementById('bop_16_b_rectangle').style.display = 'block';
			}
			if (bop_16_mb == 1) {
				document.getElementById('bop_16_mb_rectangle').style.display = 'block';
			}
			if (bop_16_dp == 1) {
				document.getElementById('bop_16_dp_rectangle').style.display = 'block';
			}
			if (bop_16_p == 1) {
				document.getElementById('bop_16_p_rectangle').style.display = 'block';
			}
			if (bop_16_mp == 1) {
				document.getElementById('bop_16_mp_rectangle').style.display = 'block';
			}
			
			if (pi_16_db == 1) {
				document.getElementById('pi_16_db_rectangle').style.display = 'block';
			}
			if (pi_16_b == 1) {
				document.getElementById('pi_16_b_rectangle').style.display = 'block';
			}
			if (pi_16_mb == 1) {
				document.getElementById('pi_16_mb_rectangle').style.display = 'block';
			}
			if (pi_16_dp == 1) {
				document.getElementById('pi_16_dp_rectangle').style.display = 'block';
			}
			if (pi_16_p == 1) {
				document.getElementById('pi_16_p_rectangle').style.display = 'block';
			}
			if (pi_16_mp == 1) {
				document.getElementById('pi_16_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_16();
	}

	function toggle_implant_16() {
		if (Implantat_16 == 0) {
			Implantat_16 = 1;
			
			document.getElementById('implantat_16_b_image').style.display = 'block';
			document.getElementById('implantat_16_p_image').style.display = 'block';
			document.getElementById('implantat_16_tab').style.display = 'block';
			
			document.getElementById('furkation_16_b_btn').style.display = 'none';
			document.getElementById('furkation_16_dp_btn').style.display = 'none';
			document.getElementById('furkation_16_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_16_b').style.display = 'none';
			document.getElementById('furkation_2_16_b').style.display = 'none';
			document.getElementById('furkation_3_16_b').style.display = 'none';
			
			document.getElementById('furkation_1_16_b_tab').style.display = 'none';
			document.getElementById('furkation_2_16_b_tab').style.display = 'none';
			document.getElementById('furkation_3_16_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_dp').style.display = 'none';
			document.getElementById('furkation_2_16_dp').style.display = 'none';
			document.getElementById('furkation_3_16_dp').style.display = 'none';
			
			document.getElementById('furkation_1_16_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_16_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_16_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_mp').style.display = 'none';
			document.getElementById('furkation_2_16_mp').style.display = 'none';
			document.getElementById('furkation_3_16_mp').style.display = 'none';
			
			document.getElementById('furkation_1_16_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_16_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_16_mp_tab').style.display = 'none';
		}
		else {
			Implantat_16 = 0;
			
			document.getElementById('implantat_16_b_image').style.display = 'none';
			document.getElementById('implantat_16_p_image').style.display = 'none';
			document.getElementById('implantat_16_tab').style.display = 'none';
			
			document.getElementById('furkation_16_b_btn').style.display = 'block';
			document.getElementById('furkation_16_dp_btn').style.display = 'block';
			document.getElementById('furkation_16_mp_btn').style.display = 'block';

			if (Furkation_16_b == 1) {
				document.getElementById('furkation_1_16_b').style.display = 'block';
			} else if (Furkation_16_b == 2) {
				document.getElementById('furkation_2_16_b').style.display = 'block';
			} else if (Furkation_16_b == 3) {
				document.getElementById('furkation_3_16_b').style.display = 'block';
			}
			if (Furkation_16_b == 1) {
				document.getElementById('furkation_1_16_b_tab').style.display = 'block';
			} else if (Furkation_16_b == 2) {
				document.getElementById('furkation_2_16_b_tab').style.display = 'block';
			} else if (Furkation_16_b == 3) {
				document.getElementById('furkation_3_16_b_tab').style.display = 'block';
			}
			if (Furkation_16_dp == 1) {
				document.getElementById('furkation_1_16_dp').style.display = 'block';
			} else if (Furkation_16_dp == 2) {
				document.getElementById('furkation_2_16_dp').style.display = 'block';
			} else if (Furkation_16_dp == 3) {
				document.getElementById('furkation_3_16_dp').style.display = 'block';
			}
			if (Furkation_16_dp == 1) {
				document.getElementById('furkation_1_16_dp_tab').style.display = 'block';
			} else if (Furkation_16_dp == 2) {
				document.getElementById('furkation_2_16_dp_tab').style.display = 'block';
			} else if (Furkation_16_dp == 3) {
				document.getElementById('furkation_3_16_dp_tab').style.display = 'block';
			}
			if (Furkation_16_mp == 1) {
				document.getElementById('furkation_1_16_mp').style.display = 'block';
			} else if (Furkation_16_mp == 2) {
				document.getElementById('furkation_2_16_mp').style.display = 'block';
			} else if (Furkation_16_mp == 3) {
				document.getElementById('furkation_3_16_mp').style.display = 'block';
			}
			if (Furkation_16_mp == 1) {
				document.getElementById('furkation_1_16_mp_tab').style.display = 'block';
			} else if (Furkation_16_mp == 2) {
				document.getElementById('furkation_2_16_mp_tab').style.display = 'block';
			} else if (Furkation_16_mp == 3) {
				document.getElementById('furkation_3_16_mp_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_16_b() {
		if (Furkation_16_b == 0) {
			document.getElementById('furkation_1_16_b_tab').style.display = 'block';
			document.getElementById('furkation_2_16_b_tab').style.display = 'none';
			document.getElementById('furkation_3_16_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_b').style.display = 'block';
			document.getElementById('furkation_2_16_b').style.display = 'none';
			document.getElementById('furkation_3_16_b').style.display = 'none';

			Furkation_16_b = 1;
		}
		else if (Furkation_16_b == 1) {
			document.getElementById('furkation_1_16_b_tab').style.display = 'none';
			document.getElementById('furkation_2_16_b_tab').style.display = 'block';
			document.getElementById('furkation_3_16_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_b').style.display = 'none';
			document.getElementById('furkation_2_16_b').style.display = 'block';
			document.getElementById('furkation_3_16_b').style.display = 'none';
			
			Furkation_16_b = 2;
		}
		else if (Furkation_16_b == 2) {
			document.getElementById('furkation_1_16_b_tab').style.display = 'none';
			document.getElementById('furkation_2_16_b_tab').style.display = 'none';
			document.getElementById('furkation_3_16_b_tab').style.display = 'block';
			
			document.getElementById('furkation_1_16_b').style.display = 'none';
			document.getElementById('furkation_2_16_b').style.display = 'none';
			document.getElementById('furkation_3_16_b').style.display = 'block';
						
			Furkation_16_b = 3;
		}
		else if (Furkation_16_b == 3) {
			document.getElementById('furkation_1_16_b_tab').style.display = 'none';
			document.getElementById('furkation_2_16_b_tab').style.display = 'none';
			document.getElementById('furkation_3_16_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_b').style.display = 'none';
			document.getElementById('furkation_2_16_b').style.display = 'none';
			document.getElementById('furkation_3_16_b').style.display = 'none';
						
			Furkation_16_b = 0;
		}
	}

	function toggle_furcation_16_dp() {
		if (Furkation_16_dp == 0) {
			document.getElementById('furkation_1_16_dp_tab').style.display = 'block';
			document.getElementById('furkation_2_16_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_16_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_dp').style.display = 'block';
			document.getElementById('furkation_2_16_dp').style.display = 'none';
			document.getElementById('furkation_3_16_dp').style.display = 'none';

			Furkation_16_dp = 1;
		}
		else if (Furkation_16_dp == 1) {
			document.getElementById('furkation_1_16_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_16_dp_tab').style.display = 'block';
			document.getElementById('furkation_3_16_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_dp').style.display = 'none';
			document.getElementById('furkation_2_16_dp').style.display = 'block';
			document.getElementById('furkation_3_16_dp').style.display = 'none';
			
			Furkation_16_dp = 2;
		}
		else if (Furkation_16_dp == 2) {
			document.getElementById('furkation_1_16_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_16_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_16_dp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_16_dp').style.display = 'none';
			document.getElementById('furkation_2_16_dp').style.display = 'none';
			document.getElementById('furkation_3_16_dp').style.display = 'block';
						
			Furkation_16_dp = 3;
		}
		else if (Furkation_16_dp == 3) {
			document.getElementById('furkation_1_16_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_16_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_16_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_dp').style.display = 'none';
			document.getElementById('furkation_2_16_dp').style.display = 'none';
			document.getElementById('furkation_3_16_dp').style.display = 'none';
						
			Furkation_16_dp = 0;
		}
	}

	function toggle_furcation_16_mp() {
		if (Furkation_16_mp == 0) {
			document.getElementById('furkation_1_16_mp_tab').style.display = 'block';
			document.getElementById('furkation_2_16_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_16_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_mp').style.display = 'block';
			document.getElementById('furkation_2_16_mp').style.display = 'none';
			document.getElementById('furkation_3_16_mp').style.display = 'none';

			Furkation_16_mp = 1;
		}
		else if (Furkation_16_mp == 1) {
			document.getElementById('furkation_1_16_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_16_mp_tab').style.display = 'block';
			document.getElementById('furkation_3_16_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_mp').style.display = 'none';
			document.getElementById('furkation_2_16_mp').style.display = 'block';
			document.getElementById('furkation_3_16_mp').style.display = 'none';
			
			Furkation_16_mp = 2;
		}
		else if (Furkation_16_mp == 2) {
			document.getElementById('furkation_1_16_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_16_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_16_mp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_16_mp').style.display = 'none';
			document.getElementById('furkation_2_16_mp').style.display = 'none';
			document.getElementById('furkation_3_16_mp').style.display = 'block';
						
			Furkation_16_mp = 3;
		}
		else if (Furkation_16_mp == 3) {
			document.getElementById('furkation_1_16_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_16_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_16_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_16_mp').style.display = 'none';
			document.getElementById('furkation_2_16_mp').style.display = 'none';
			document.getElementById('furkation_3_16_mp').style.display = 'none';
						
			Furkation_16_mp = 0;
		}
	}

	function toggle_bop_16_db() {
		if (bop_16_db == 0) {
			bop_16_db = 1;
			document.getElementById('bop_16_db_rectangle').style.display = 'block';
		}
		else {
			bop_16_db = 0;
			document.getElementById('bop_16_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_16_b() {
		if (bop_16_b == 0) {
			bop_16_b = 1;
			document.getElementById('bop_16_b_rectangle').style.display = 'block';
		}
		else {
			bop_16_b = 0;
			document.getElementById('bop_16_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_16_mb() {
		if (bop_16_mb == 0) {
			bop_16_mb = 1;
			document.getElementById('bop_16_mb_rectangle').style.display = 'block';
		}
		else {
			bop_16_mb = 0;
			document.getElementById('bop_16_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_16_db() {
		if (pi_16_db == 0) {
			pi_16_db = 1;
			document.getElementById('pi_16_db_rectangle').style.display = 'block';
		}
		else {
			pi_16_db = 0;
			document.getElementById('pi_16_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_16_b() {
		if (pi_16_b == 0) {
			pi_16_b = 1;
			document.getElementById('pi_16_b_rectangle').style.display = 'block';
		}
		else {
			pi_16_b = 0;
			document.getElementById('pi_16_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_16_mb() {
		if (pi_16_mb == 0) {
			pi_16_mb = 1;
			document.getElementById('pi_16_mb_rectangle').style.display = 'block';
		}
		else {
			pi_16_mb = 0;
			document.getElementById('pi_16_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_16_dp() {
		if (bop_16_dp == 0) {
			bop_16_dp = 1;
			document.getElementById('bop_16_dp_rectangle').style.display = 'block';
		}
		else {
			bop_16_dp = 0;
			document.getElementById('bop_16_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_16_p() {
		if (bop_16_p == 0) {
			bop_16_p = 1;
			document.getElementById('bop_16_p_rectangle').style.display = 'block';
		}
		else {
			bop_16_p = 0;
			document.getElementById('bop_16_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_16_mp() {
		if (bop_16_mp == 0) {
			bop_16_mp = 1;
			document.getElementById('bop_16_mp_rectangle').style.display = 'block';
		}
		else {
			bop_16_mp = 0;
			document.getElementById('bop_16_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_16_dp() {
		if (pi_16_dp == 0) {
			pi_16_dp = 1;
			document.getElementById('pi_16_dp_rectangle').style.display = 'block';
		}
		else {
			pi_16_dp = 0;
			document.getElementById('pi_16_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_16_p() {
		if (pi_16_p == 0) {
			pi_16_p = 1;
			document.getElementById('pi_16_p_rectangle').style.display = 'block';
		}
		else {
			pi_16_p = 0;
			document.getElementById('pi_16_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_16_mp() {
		if (pi_16_mp == 0) {
			pi_16_mp = 1;
			document.getElementById('pi_16_mp_rectangle').style.display = 'block';
		}
		else {
			pi_16_mp = 0;
			document.getElementById('pi_16_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_16() {
		if (tooth_16 == 1) {
			
		// Variablen aus dem Formular
			pd_16_db = document.forms[0]["pd_16_db"].value;
			pd_16_b = document.forms[0]["pd_16_b"].value;
			pd_16_mb = document.forms[0]["pd_16_mb"].value;

			if (document.forms[0]["pd_16_dp"].value > 3) {document.forms[0]["pd_16_dp"].style.color = 'red';} else {document.forms[0]["pd_16_dp"].style.color = 'black'}
			if (document.forms[0]["pd_16_p"].value > 3) {document.forms[0]["pd_16_p"].style.color = 'red';} else {document.forms[0]["pd_16_p"].style.color = 'black'}
			if (document.forms[0]["pd_16_mp"].value > 3) {document.forms[0]["pd_16_mp"].style.color = 'red';} else {document.forms[0]["pd_16_mp"].style.color = 'black'}
			
			gm_16_db = document.forms[0]["gm_16_db"].value;
			gm_16_b = document.forms[0]["gm_16_b"].value;
			gm_16_mb = document.forms[0]["gm_16_mb"].value;
			
			pd_16_dp = document.forms[0]["pd_16_dp"].value;
			pd_16_p = document.forms[0]["pd_16_p"].value;
			pd_16_mp = document.forms[0]["pd_16_mp"].value;

			if (document.forms[0]["pd_16_db"].value > 3) {document.forms[0]["pd_16_db"].style.color = 'red';} else {document.forms[0]["pd_16_db"].style.color = 'black'}
			if (document.forms[0]["pd_16_b"].value > 3) {document.forms[0]["pd_16_b"].style.color = 'red';} else {document.forms[0]["pd_16_b"].style.color = 'black'}
			if (document.forms[0]["pd_16_mb"].value > 3) {document.forms[0]["pd_16_mb"].style.color = 'red';} else {document.forms[0]["pd_16_mb"].style.color = 'black'}
			
			gm_16_dp = document.forms[0]["gm_16_dp"].value;
			gm_16_p = document.forms[0]["gm_16_p"].value;
			gm_16_mp = document.forms[0]["gm_16_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 16 (bukkal) in der Bitmap
			var x_db_16 = 397;							// distal 16
			var x_mb_16 = 451;							// mesial 16
			var x_b_16 = (x_db_16 + x_mb_16)/2;			// bukkal 16
			
		// Set der horizontalen Koordinaten von Zahn 16 (palatinal) in der Bitmap
			var x_dp_16 = 399;							// distal 16
			var x_mp_16 = 445;							// mesial 16
			var x_p_16 = (x_dp_16 + x_mp_16)/2;			// palatinal 16
			
		// Set der vertikalen Koordinaten von Zahn 16 (bukkal) aus dem Formular
			var y_gm_16_db = gm_OK_b + 6.5 * gm_16_db;	// Margo Gingivae distobukkal 16
			var y_gm_16_b = gm_OK_b + 6.5 * gm_16_b;	// Margo Gingivae bukkal 16
			var y_gm_16_mb = gm_OK_b + 6.5 * gm_16_mb;	// Margo Gingivae mesiobukkal 16
			var y_pd_16_db = 6.5 * pd_16_db;			// Sondierungstiefe distobukkal 16
			var y_pd_16_b = 6.5 * pd_16_b;				// Sondierungstiefe bukkal 16
			var y_pd_16_mb = 6.5 * pd_16_mb;			// Sondierungstiefe mesiobukkal 16
			
		// Set der vertikalen Koordinaten von Zahn 16 (palatinal) aus dem Formular
			var y_gm_16_dp = gm_OK_p - 6.5 * gm_16_dp;	// Margo Gingivae distopalatinal 16
			var y_gm_16_p = gm_OK_p - 6.5 * gm_16_p;	// Margo Gingivae palatinal 16
			var y_gm_16_mp = gm_OK_p - 6.5 * gm_16_mp;	// Margo Gingivae mesiopalatinal 16
			var y_pd_16_dp = 6.5 * pd_16_dp;			// Sondierungstiefe distopalatinal 16
			var y_pd_16_p = 6.5 * pd_16_p;				// Sondierungstiefe palatinal 16
			var y_pd_16_mp = 6.5 * pd_16_mp;			// Sondierungstiefe mesiopalatinal 16
			
		// Berechnung des Attachmentniveaus 16 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_16_db = y_gm_16_db - y_pd_16_db;	// Attachmentniveau distobukkal 16
			var y_al_16_b = y_gm_16_b - y_pd_16_b;		// Attachmentniveau bukkal 16
			var y_al_16_mb = y_gm_16_mb - y_pd_16_mb;	// Attachmentniveau mesiobukkal 16
			
		// Berechnung des Attachmentniveaus 16 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_16_dp = y_gm_16_dp + y_pd_16_dp;	// Attachmentniveau distopalatinal 16
			var y_al_16_p = y_gm_16_p + y_pd_16_p;		// Attachmentniveau palatinal 16
			var y_al_16_mp = y_gm_16_mp + y_pd_16_mp;	// Attachmentniveau mesiopalatinal 16
			
		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[16].storeCoordinates(
				x_db_16, x_mb_16, x_dp_16, x_mp_16, x_b_16, x_p_16,
				y_gm_16_db, y_gm_16_b, y_gm_16_mb, y_pd_16_db, y_pd_16_b, y_pd_16_mb,
				y_gm_16_dp, y_gm_16_p, y_gm_16_mp, y_pd_16_dp, y_pd_16_p, y_pd_16_mp,
				y_al_16_db, y_al_16_b, y_al_16_mb, y_al_16_dp, y_al_16_p, y_al_16_mp
			);
		
		// Parodontaltasche 16 bukkal zeichnen
			var string = 
				x_db_16 + ", " + y_al_16_db + "  " + 
				x_b_16 + ", " + y_al_16_b + "  " + 
				x_mb_16 + ", " + y_al_16_mb + "  " + 
				x_mb_16 + ", " + y_gm_16_mb + "  " + 
				x_b_16 + ", " + y_gm_16_b + "  " + 
				x_db_16 + ", " + y_gm_16_db;
			document.getElementById("polygon_16_b").setAttribute("points", string);
		// Attachmentniveau 16 bukkal zeichnen
			var string = 
				x_db_16 + ", " + y_al_16_db + "  " + 
				x_b_16 + ", " + y_al_16_b + "  " + 
				x_mb_16 + ", " + y_al_16_mb;
			document.getElementById("polyline_al_16_b").setAttribute("points", string);
		// Margo Gingivae 16 bukkal zeichnen
			var string =
				x_db_16 + ", " + y_gm_16_db + "  " + 
				x_b_16 + ", " + y_gm_16_b + "  " + 
				x_mb_16 + ", " + y_gm_16_mb;
			document.getElementById("polyline_gm_16_b").setAttribute("points", string);

		// Parodontaltasche 16 palatinal zeichnen
			var string = 
				x_dp_16 + ", " + y_al_16_dp + "  " + 
				x_p_16 + ", " + y_al_16_p + "  " + 
				x_mp_16 + ", " + y_al_16_mp + "  " + 
				x_mp_16 + ", " + y_gm_16_mp + "  " + 
				x_p_16 + ", " + y_gm_16_p + "  " + 
				x_dp_16 + ", " + y_gm_16_dp;
			document.getElementById("polygon_16_p").setAttribute("points", string);
		// Attachmentniveau 16 palatinal zeichnen
			var string = 
				x_dp_16 + ", " + y_al_16_dp + "  " + 
				x_p_16 + ", " + y_al_16_p + "  " + 
				x_mp_16 + ", " + y_al_16_mp;
			document.getElementById("polyline_al_16_p").setAttribute("points", string);
		// Margo Gingivae 16 palatinal zeichnen
			var string =
				x_dp_16 + ", " + y_gm_16_dp + "  " + 
				x_p_16 + ", " + y_gm_16_p + "  " + 
				x_mp_16 + ", " + y_gm_16_mp;
			document.getElementById("polyline_gm_16_p").setAttribute("points", string);
		}
        if (tooth_16 == 1 && tooth_15 == 1) {

            pd_15_db = document.forms[0]["pd_15_db"].value;
			gm_15_db = document.forms[0]["gm_15_db"].value;
			
			pd_15_dp = document.forms[0]["pd_15_dp"].value;
			gm_15_dp = document.forms[0]["gm_15_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 15 (bukkal) in der Bitmap
			var x_db_15 = 463;							// distal 15
			
		// Set der horizontalen Koordinaten von Zahn 15 (palatinal) in der Bitmap
			var x_dp_15 = 461;							// distal 15
			
		// Set der vertikalen Koordinaten von Zahn 15 (bukkal) aus dem Formular
			var y_gm_15_db = gm_OK_b + 6.5 * gm_15_db;	// Margo Gingivae distobukkal 15
			var y_pd_15_db = 6.5 * pd_15_db;			// Sondierungstiefe distobukkal 15
			
		// Set der vertikalen Koordinaten von Zahn 15 (palatinal) aus dem Formular
			var y_gm_15_dp = gm_OK_p - 6.5 * gm_15_dp;	// Margo Gingivae distopalatinal 15
			var y_pd_15_dp = 6.5 * pd_15_dp;			// Sondierungstiefe distopalatinal 15
			
		// Berechnung des Attachmentniveaus 15 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_15_db = y_gm_15_db - y_pd_15_db;	// Attachmentniveau distobukkal 15
			
		// Berechnung des Attachmentniveaus 15 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_15_dp = y_gm_15_dp + y_pd_15_dp;	// Attachmentniveau distopalatinal 15

		// Parodontaltasche inter_16_15 bukkal zeichnen
			var string = 
				x_mb_16 + ", " + y_al_16_mb + "  " + 
				x_db_15 + ", " + y_al_15_db + "  " + 
				x_db_15 + ", " + y_gm_15_db + "  " + 
				x_mb_16 + ", " + y_gm_16_mb;
			document.getElementById("polygon_inter_16_15_b").setAttribute("points", string);
		// Attachmentniveau inter_16_15 bukkal zeichnen
			var string = 
				x_mb_16 + ", " + y_al_16_mb + "  " + 
				x_db_15 + ", " + y_al_15_db;
			document.getElementById("polyline_al_inter_16_15_b").setAttribute("points", string);
		// Margo Gingivae inter_16_15 bukkal zeichnen
			var string =
				x_mb_16 + ", " + y_gm_16_mb + "  " + 
				x_db_15 + ", " + y_gm_15_db;
			document.getElementById("polyline_gm_inter_16_15_b").setAttribute("points", string);

        // Parodontaltasche inter_16_15 palatinal zeichnen
			var string = 
				x_mp_16 + ", " + y_al_16_mp + "  " + 
				x_dp_15 + ", " + y_al_15_dp + "  " + 
				x_dp_15 + ", " + y_gm_15_dp + "  " + 
				x_mp_16 + ", " + y_gm_16_mp;
			document.getElementById("polygon_inter_16_15_p").setAttribute("points", string);
		// Attachmentniveau inter_16_15 palatinal zeichnen
			var string = 
				x_mp_16 + ", " + y_al_16_mp + "  " + 
				x_dp_15 + ", " + y_al_15_dp;
			document.getElementById("polyline_al_inter_16_15_p").setAttribute("points", string);
		// Margo Gingivae inter_16_15 palatinal zeichnen
			var string =
				x_mp_16 + ", " + y_gm_16_mp + "  " + 
				x_dp_15 + ", " + y_gm_15_dp;
			document.getElementById("polyline_gm_inter_16_15_p").setAttribute("points", string);
		}
        if (tooth_17 == 1 && tooth_16 == 1) {

            pd_17_mb = document.forms[0]["pd_17_mb"].value;
			gm_17_mb = document.forms[0]["gm_17_mb"].value;
			
			pd_17_mp = document.forms[0]["pd_17_mp"].value;
			gm_17_mp = document.forms[0]["gm_17_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 17 (bukkal) in der Bitmap
			var x_mb_17 = 386;							// mesial 17
			
		// Set der horizontalen Koordinaten von Zahn 17 (palatinal) in der Bitmap
			var x_mp_17 = 383;							// mesial 17
			
		// Set der vertikalen Koordinaten von Zahn 17 (bukkal) aus dem Formular
			var y_gm_17_mb = gm_OK_b + 6.5 * gm_17_mb;	// Margo Gingivae mesiobukkal 17
			var y_pd_17_mb = 6.5 * pd_17_mb;			// Sondierungstiefe mesiobukkal 17
			
		// Set der vertikalen Koordinaten von Zahn 17 (palatinal) aus dem Formular
			var y_gm_17_mp = gm_OK_p - 6.5 * gm_17_mp;	// Margo Gingivae mesiopalatinal 17
			var y_pd_17_mp = 6.5 * pd_17_mp;			// Sondierungstiefe mesiopalatinal 17
			
		// Berechnung des Attachmentniveaus 17 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_17_mb = y_gm_17_mb - y_pd_17_mb;	// Attachmentniveau mesiobukkal 17
			
		// Berechnung des Attachmentniveaus 17 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_17_mp = y_gm_17_mp + y_pd_17_mp;	// Attachmentniveau mesiopalatinal 17

		// Parodontaltasche inter_17_16 bukkal zeichnen
			var string = 
				x_mb_17 + ", " + y_al_17_mb + "  " + 
				x_db_16 + ", " + y_al_16_db + "  " + 
				x_db_16 + ", " + y_gm_16_db + "  " + 
				x_mb_17 + ", " + y_gm_17_mb;
			document.getElementById("polygon_inter_17_16_b").setAttribute("points", string);
		// Attachmentniveau inter_17_16 bukkal zeichnen
			var string = 
				x_mb_17 + ", " + y_al_17_mb + "  " + 
				x_db_16 + ", " + y_al_16_db;
			document.getElementById("polyline_al_inter_17_16_b").setAttribute("points", string);
		// Margo Gingivae inter_17_16 bukkal zeichnen
			var string =
				x_mb_17 + ", " + y_gm_17_mb + "  " + 
				x_db_16 + ", " + y_gm_16_db;
			document.getElementById("polyline_gm_inter_17_16_b").setAttribute("points", string);

        // Parodontaltasche inter_17_16 palatinal zeichnen
			var string = 
				x_mp_17 + ", " + y_al_17_mp + "  " + 
				x_dp_16 + ", " + y_al_16_dp + "  " + 
				x_dp_16 + ", " + y_gm_16_dp + "  " + 
				x_mp_17 + ", " + y_gm_17_mp;
			document.getElementById("polygon_inter_17_16_p").setAttribute("points", string);
		// Attachmentniveau inter_17_16 palatinal zeichnen
			var string = 
				x_mp_17 + ", " + y_al_17_mp + "  " + 
				x_dp_16 + ", " + y_al_16_dp;
			document.getElementById("polyline_al_inter_17_16_p").setAttribute("points", string);
		// Margo Gingivae inter_17_16 palatinal zeichnen
			var string =
				x_mp_17 + ", " + y_gm_17_mp + "  " + 
				x_dp_16 + ", " + y_gm_16_dp;
			document.getElementById("polyline_gm_inter_17_16_p").setAttribute("points", string);
		}
	}