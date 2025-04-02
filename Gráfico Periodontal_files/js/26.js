	// Definition der Variablen für das Formular
		var tooth_26 = 1;
		var Furkation_26_b = 0;
		var Furkation_26_dp = 0;
		var Furkation_26_mp = 0;
		var Implantat_26 = 0;
		var bop_26_db = 0;
		var bop_26_b = 0;
		var bop_26_mb = 0;
		var pi_26_db = 0;
		var pi_26_b = 0;
		var pi_26_mb = 0;
		var bop_26_dp = 0;
		var bop_26_p = 0;
		var bop_26_mp = 0;
		var pi_26_dp = 0;
		var pi_26_p = 0;
		var pi_26_mp = 0;
		var gm_26_db = 0;
		var gm_26_b = 0;
		var gm_26_mb = 0;
		var pd_26_db = 0;
		var pd_26_b = 0;
		var pd_26_mb = 0;
		var gm_26_dp = 0;
		var gm_26_p = 0;
		var gm_26_mp = 0;
		var pd_26_dp = 0;
		var pd_26_p = 0;
		var pd_26_mp = 0;

	function clear_data_26() {
        if (tooth_26 == 1) {
			gm_26_db = 0;
			gm_26_b = 0;
			gm_26_mb = 0;
			pd_26_db = 0;
			pd_26_b = 0;
			pd_26_mb = 0;
	
				document.getElementById('gm_26_db_txt').value = 0;
				document.getElementById('gm_26_b_txt').value = 0;
				document.getElementById('gm_26_mb_txt').value = 0;
				
				document.getElementById('pd_26_db_txt').value = 0;
				document.getElementById('pd_26_b_txt').value = 0;
				document.getElementById('pd_26_mb_txt').value = 0;
			
				document.forms[0]["pd_26_db"].style.color = 'black'
				document.forms[0]["pd_26_b"].style.color = 'black'
				document.forms[0]["pd_26_mb"].style.color = 'black'
			
			gm_26_dp = 0;
			gm_26_p = 0;
			gm_26_mp = 0;
			pd_26_dp = 0;
			pd_26_p = 0;
			pd_26_mp = 0;

				document.getElementById('gm_26_dp_txt').value = 0;
				document.getElementById('gm_26_p_txt').value = 0;
				document.getElementById('gm_26_mp_txt').value = 0;
				
				document.getElementById('pd_26_dp_txt').value = 0;
				document.getElementById('pd_26_p_txt').value = 0;
				document.getElementById('pd_26_mp_txt').value = 0;

				document.forms[0]["pd_26_dp"].style.color = 'black'
				document.forms[0]["pd_26_p"].style.color = 'black'
				document.forms[0]["pd_26_mp"].style.color = 'black'
			
			change_probing_26();
			
			mobility_26 = 0;

				document.getElementById('mobility_26_txt').value = "0";

			note_26 = "";

				document.getElementById('note_26_txt').value = "";

			Furkation_26_b = 0;
			Furkation_26_dp = 0;
			Furkation_26_mp = 0;

				document.getElementById('furkation_1_26_b').style.display = 'none';
				document.getElementById('furkation_2_26_b').style.display = 'none';
				document.getElementById('furkation_3_26_b').style.display = 'none';
					
				document.getElementById('furkation_1_26_b_tab').style.display = 'none';
				document.getElementById('furkation_2_26_b_tab').style.display = 'none';
				document.getElementById('furkation_3_26_b_tab').style.display = 'none';
				
				document.getElementById('furkation_1_26_dp').style.display = 'none';
				document.getElementById('furkation_2_26_dp').style.display = 'none';
				document.getElementById('furkation_3_26_dp').style.display = 'none';
					
				document.getElementById('furkation_1_26_dp_tab').style.display = 'none';
				document.getElementById('furkation_2_26_dp_tab').style.display = 'none';
				document.getElementById('furkation_3_26_dp_tab').style.display = 'none';
				
				document.getElementById('furkation_1_26_mp').style.display = 'none';
				document.getElementById('furkation_2_26_mp').style.display = 'none';
				document.getElementById('furkation_3_26_mp').style.display = 'none';
				
				document.getElementById('furkation_1_26_mp_tab').style.display = 'none';
				document.getElementById('furkation_2_26_mp_tab').style.display = 'none';
				document.getElementById('furkation_3_26_mp_tab').style.display = 'none';
	
			bop_26_db = 0;
			bop_26_b = 0;
			bop_26_mb = 0;
					
			bop_26_dp = 0;
			bop_26_p = 0;
			bop_26_mp = 0;
					
				document.getElementById('bop_26_db_rectangle').style.display = 'none';
				document.getElementById('bop_26_b_rectangle').style.display = 'none';
				document.getElementById('bop_26_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_26_dp_rectangle').style.display = 'none';
				document.getElementById('bop_26_p_rectangle').style.display = 'none';
				document.getElementById('bop_26_mp_rectangle').style.display = 'none';
				
			pi_26_db = 0;
			pi_26_b = 0;
			pi_26_mb = 0;
					
			pi_26_dp = 0;
			pi_26_p = 0;
			pi_26_mp = 0;

				document.getElementById('pi_26_db_rectangle').style.display = 'none';
				document.getElementById('pi_26_b_rectangle').style.display = 'none';
				document.getElementById('pi_26_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_26_dp_rectangle').style.display = 'none';
				document.getElementById('pi_26_p_rectangle').style.display = 'none';
				document.getElementById('pi_26_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_26() {
		if (tooth_26 === 1) {
			tooth_26 = 0;
			document.getElementById('tooth_line_26_b').style.display = 'block';
			document.getElementById('tooth_line_26_p').style.display = 'block';
			
			document.getElementById('mobility_26_txt').style.display = 'none';
			
			document.getElementById('implantat_26_btn').style.display = 'none';
			document.getElementById('implantat_26_tab').style.display = 'none';
			document.getElementById('implantat_26_b_image').style.display = 'none';
			document.getElementById('implantat_26_p_image').style.display = 'none';
			
			document.getElementById('furkation_26_b_btn').style.display = 'none';
			document.getElementById('furkation_26_dp_btn').style.display = 'none';
			document.getElementById('furkation_26_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_26_b').style.display = 'none';
			document.getElementById('furkation_2_26_b').style.display = 'none';
			document.getElementById('furkation_3_26_b').style.display = 'none';
			
			document.getElementById('furkation_1_26_b_tab').style.display = 'none';
			document.getElementById('furkation_2_26_b_tab').style.display = 'none';
			document.getElementById('furkation_3_26_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_dp').style.display = 'none';
			document.getElementById('furkation_2_26_dp').style.display = 'none';
			document.getElementById('furkation_3_26_dp').style.display = 'none';
			
			document.getElementById('furkation_1_26_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_26_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_26_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_mp').style.display = 'none';
			document.getElementById('furkation_2_26_mp').style.display = 'none';
			document.getElementById('furkation_3_26_mp').style.display = 'none';
			
			document.getElementById('furkation_1_26_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_26_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_26_mp_tab').style.display = 'none';

			document.getElementById('gm_26_db_txt').style.display = 'none';
			document.getElementById('gm_26_b_txt').style.display = 'none';
			document.getElementById('gm_26_mb_txt').style.display = 'none';
			
			document.getElementById('pd_26_db_txt').style.display = 'none';
			document.getElementById('pd_26_b_txt').style.display = 'none';
			document.getElementById('pd_26_mb_txt').style.display = 'none';
			
			document.getElementById('gm_26_dp_txt').style.display = 'none';
			document.getElementById('gm_26_p_txt').style.display = 'none';
			document.getElementById('gm_26_mp_txt').style.display = 'none';
			
			document.getElementById('pd_26_dp_txt').style.display = 'none';
			document.getElementById('pd_26_p_txt').style.display = 'none';
			document.getElementById('pd_26_mp_txt').style.display = 'none';
			
			document.getElementById('bop_26_db_rectangle').style.display = 'none';
			document.getElementById('bop_26_b_rectangle').style.display = 'none';
			document.getElementById('bop_26_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_26_dp_rectangle').style.display = 'none';
			document.getElementById('bop_26_p_rectangle').style.display = 'none';
			document.getElementById('bop_26_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_26_db_btn').style.display = 'none';
			document.getElementById('bop_26_b_btn').style.display = 'none';
			document.getElementById('bop_26_mb_btn').style.display = 'none';
			
			document.getElementById('bop_26_dp_btn').style.display = 'none';
			document.getElementById('bop_26_p_btn').style.display = 'none';
			document.getElementById('bop_26_mp_btn').style.display = 'none';
			
			document.getElementById('pi_26_db_rectangle').style.display = 'none';
			document.getElementById('pi_26_b_rectangle').style.display = 'none';
			document.getElementById('pi_26_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_26_dp_rectangle').style.display = 'none';
			document.getElementById('pi_26_p_rectangle').style.display = 'none';
			document.getElementById('pi_26_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_26_db_btn').style.display = 'none';
			document.getElementById('pi_26_b_btn').style.display = 'none';
			document.getElementById('pi_26_mb_btn').style.display = 'none';
			
			document.getElementById('pi_26_dp_btn').style.display = 'none';
			document.getElementById('pi_26_p_btn').style.display = 'none';
			document.getElementById('pi_26_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_26_b').style.display = 'none';
			document.getElementById('polyline_al_26_b').style.display = 'none';
			document.getElementById('polyline_gm_26_b').style.display = 'none';
			
			document.getElementById('polygon_26_p').style.display = 'none';
			document.getElementById('polyline_al_26_p').style.display = 'none';
			document.getElementById('polyline_gm_26_p').style.display = 'none';
			
			document.getElementById('polygon_inter_27_26_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_27_26_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_27_26_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_27_26_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_27_26_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_27_26_p').style.display = 'none';            
            
			document.getElementById('polygon_inter_26_25_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_26_25_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_26_25_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_26_25_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_26_25_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_26_25_p').style.display = 'none';            
			
			document.getElementById('note_26_txt').style.display = 'none';
		}
		else if (Implantat_26 !== 1) {
			tooth_26 = 1;
			document.getElementById('tooth_line_26_b').style.display = 'none';
			document.getElementById('tooth_line_26_p').style.display = 'none';

			document.getElementById('mobility_26_txt').style.display = 'block';

			document.getElementById('implantat_26_btn').style.display = 'block';

			document.getElementById('furkation_26_b_btn').style.display = 'block';
			document.getElementById('furkation_26_dp_btn').style.display = 'block';
			document.getElementById('furkation_26_mp_btn').style.display = 'block';
			
			document.getElementById('gm_26_db_txt').style.display = 'block';
			document.getElementById('gm_26_b_txt').style.display = 'block';
			document.getElementById('gm_26_mb_txt').style.display = 'block';
			
			document.getElementById('pd_26_db_txt').style.display = 'block';
			document.getElementById('pd_26_b_txt').style.display = 'block';
			document.getElementById('pd_26_mb_txt').style.display = 'block';
			
			document.getElementById('gm_26_dp_txt').style.display = 'block';
			document.getElementById('gm_26_p_txt').style.display = 'block';
			document.getElementById('gm_26_mp_txt').style.display = 'block';
			
			document.getElementById('pd_26_dp_txt').style.display = 'block';
			document.getElementById('pd_26_p_txt').style.display = 'block';
			document.getElementById('pd_26_mp_txt').style.display = 'block';
			
			document.getElementById('note_26_txt').style.display = 'block';

			document.getElementById('polygon_26_b').style.display = 'block';
			document.getElementById('polyline_al_26_b').style.display = 'block';
			document.getElementById('polyline_gm_26_b').style.display = 'block';
			
			document.getElementById('polygon_26_p').style.display = 'block';
			document.getElementById('polyline_al_26_p').style.display = 'block';
			document.getElementById('polyline_gm_26_p').style.display = 'block';

            if (tooth_27 == 1 && tooth_26 == 1) {
				document.getElementById('polygon_inter_27_26_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_27_26_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_27_26_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_27_26_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_27_26_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_27_26_p').style.display = 'block';            
            }
            
            if (tooth_26 == 1 && tooth_25 == 1) {
				document.getElementById('polygon_inter_26_25_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_26_25_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_26_25_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_26_25_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_26_25_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_26_25_p').style.display = 'block';            
            }

			if (Furkation_26_b == 1) {
				document.getElementById('furkation_1_26_b').style.display = 'block';
			} else if (Furkation_26_b == 2) {
				document.getElementById('furkation_2_26_b').style.display = 'block';
			} else if (Furkation_26_b == 3) {
				document.getElementById('furkation_3_26_b').style.display = 'block';
			}
			if (Furkation_26_b == 1) {
				document.getElementById('furkation_1_26_b_tab').style.display = 'block';
			} else if (Furkation_26_b == 2) {
				document.getElementById('furkation_2_26_b_tab').style.display = 'block';
			} else if (Furkation_26_b == 3) {
				document.getElementById('furkation_3_26_b_tab').style.display = 'block';
			}
			if (Furkation_26_dp == 1) {
				document.getElementById('furkation_1_26_dp').style.display = 'block';
			} else if (Furkation_26_dp == 2) {
				document.getElementById('furkation_2_26_dp').style.display = 'block';
			} else if (Furkation_26_dp == 3) {
				document.getElementById('furkation_3_26_dp').style.display = 'block';
			}
			if (Furkation_26_dp == 1) {
				document.getElementById('furkation_1_26_dp_tab').style.display = 'block';
			} else if (Furkation_26_dp == 2) {
				document.getElementById('furkation_2_26_dp_tab').style.display = 'block';
			} else if (Furkation_26_dp == 3) {
				document.getElementById('furkation_3_26_dp_tab').style.display = 'block';
			}
			if (Furkation_26_mp == 1) {
				document.getElementById('furkation_1_26_mp').style.display = 'block';
			} else if (Furkation_26_mp == 2) {
				document.getElementById('furkation_2_26_mp').style.display = 'block';
			} else if (Furkation_26_mp == 3) {
				document.getElementById('furkation_3_26_mp').style.display = 'block';
			}
			if (Furkation_26_mp == 1) {
				document.getElementById('furkation_1_26_mp_tab').style.display = 'block';
			} else if (Furkation_26_mp == 2) {
				document.getElementById('furkation_2_26_mp_tab').style.display = 'block';
			} else if (Furkation_26_mp == 3) {
				document.getElementById('furkation_3_26_mp_tab').style.display = 'block';
			}

			document.getElementById('bop_26_db_btn').style.display = 'block';
			document.getElementById('bop_26_b_btn').style.display = 'block';
			document.getElementById('bop_26_mb_btn').style.display = 'block';

			document.getElementById('bop_26_dp_btn').style.display = 'block';
			document.getElementById('bop_26_p_btn').style.display = 'block';
			document.getElementById('bop_26_mp_btn').style.display = 'block';
			
			if (bop_26_db == 1) {
				document.getElementById('bop_26_db_rectangle').style.display = 'block';
			}
			if (bop_26_b == 1) {
				document.getElementById('bop_26_b_rectangle').style.display = 'block';
			}
			if (bop_26_mb == 1) {
				document.getElementById('bop_26_mb_rectangle').style.display = 'block';
			}
			if (bop_26_dp == 1) {
				document.getElementById('bop_26_dp_rectangle').style.display = 'block';
			}
			if (bop_26_p == 1) {
				document.getElementById('bop_26_p_rectangle').style.display = 'block';
			}
			if (bop_26_mp == 1) {
				document.getElementById('bop_26_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_26_db_btn').style.display = 'block';
			document.getElementById('pi_26_b_btn').style.display = 'block';
			document.getElementById('pi_26_mb_btn').style.display = 'block';

			document.getElementById('pi_26_dp_btn').style.display = 'block';
			document.getElementById('pi_26_p_btn').style.display = 'block';
			document.getElementById('pi_26_mp_btn').style.display = 'block';
			
			if (pi_26_db == 1) {
				document.getElementById('pi_26_db_rectangle').style.display = 'block';
			}
			if (pi_26_b == 1) {
				document.getElementById('pi_26_b_rectangle').style.display = 'block';
			}
			if (pi_26_mb == 1) {
				document.getElementById('pi_26_mb_rectangle').style.display = 'block';
			}
			if (pi_26_dp == 1) {
				document.getElementById('pi_26_dp_rectangle').style.display = 'block';
			}
			if (pi_26_p == 1) {
				document.getElementById('pi_26_p_rectangle').style.display = 'block';
			}
			if (pi_26_mp == 1) {
				document.getElementById('pi_26_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_26 == 1) {
			tooth_26 = 1;
			document.getElementById('tooth_line_26_b').style.display = 'none';
			document.getElementById('tooth_line_26_p').style.display = 'none';

			document.getElementById('mobility_26_txt').style.display = 'block';
			
			document.getElementById('note_26_txt').style.display = 'block';

			document.getElementById('implantat_26_btn').style.display = 'block';
			document.getElementById('implantat_26_tab').style.display = 'block';
			document.getElementById('implantat_26_b_image').style.display = 'block';
			document.getElementById('implantat_26_p_image').style.display = 'block';

			document.getElementById('gm_26_db_txt').style.display = 'block';
			document.getElementById('gm_26_b_txt').style.display = 'block';
			document.getElementById('gm_26_mb_txt').style.display = 'block';
			
			document.getElementById('pd_26_db_txt').style.display = 'block';
			document.getElementById('pd_26_b_txt').style.display = 'block';
			document.getElementById('pd_26_mb_txt').style.display = 'block';
			
			document.getElementById('gm_26_dp_txt').style.display = 'block';
			document.getElementById('gm_26_p_txt').style.display = 'block';
			document.getElementById('gm_26_mp_txt').style.display = 'block';
			
			document.getElementById('pd_26_dp_txt').style.display = 'block';
			document.getElementById('pd_26_p_txt').style.display = 'block';
			document.getElementById('pd_26_mp_txt').style.display = 'block';

			document.getElementById('polygon_26_b').style.display = 'block';
			document.getElementById('polyline_al_26_b').style.display = 'block';
			document.getElementById('polyline_gm_26_b').style.display = 'block';
			
			document.getElementById('polygon_26_p').style.display = 'block';
			document.getElementById('polyline_al_26_p').style.display = 'block';
			document.getElementById('polyline_gm_26_p').style.display = 'block';

            if (tooth_27 == 1 && tooth_26 == 1) {
				document.getElementById('polygon_inter_27_26_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_27_26_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_27_26_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_27_26_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_27_26_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_27_26_p').style.display = 'block';            
            }
            
            if (tooth_26 == 1 && tooth_25 == 1) {
				document.getElementById('polygon_inter_26_25_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_26_25_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_26_25_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_26_25_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_26_25_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_26_25_p').style.display = 'block';            
            }

			document.getElementById('bop_26_db_btn').style.display = 'block';
			document.getElementById('bop_26_b_btn').style.display = 'block';
			document.getElementById('bop_26_mb_btn').style.display = 'block';

			document.getElementById('bop_26_dp_btn').style.display = 'block';
			document.getElementById('bop_26_p_btn').style.display = 'block';
			document.getElementById('bop_26_mp_btn').style.display = 'block';
			
			document.getElementById('pi_26_db_btn').style.display = 'block';
			document.getElementById('pi_26_b_btn').style.display = 'block';
			document.getElementById('pi_26_mb_btn').style.display = 'block';

			document.getElementById('pi_26_dp_btn').style.display = 'block';
			document.getElementById('pi_26_p_btn').style.display = 'block';
			document.getElementById('pi_26_mp_btn').style.display = 'block';
			
			if (bop_26_db == 1) {
				document.getElementById('bop_26_db_rectangle').style.display = 'block';
			}
			if (bop_26_b == 1) {
				document.getElementById('bop_26_b_rectangle').style.display = 'block';
			}
			if (bop_26_mb == 1) {
				document.getElementById('bop_26_mb_rectangle').style.display = 'block';
			}
			if (bop_26_dp == 1) {
				document.getElementById('bop_26_dp_rectangle').style.display = 'block';
			}
			if (bop_26_p == 1) {
				document.getElementById('bop_26_p_rectangle').style.display = 'block';
			}
			if (bop_26_mp == 1) {
				document.getElementById('bop_26_mp_rectangle').style.display = 'block';
			}
			
			if (pi_26_db == 1) {
				document.getElementById('pi_26_db_rectangle').style.display = 'block';
			}
			if (pi_26_b == 1) {
				document.getElementById('pi_26_b_rectangle').style.display = 'block';
			}
			if (pi_26_mb == 1) {
				document.getElementById('pi_26_mb_rectangle').style.display = 'block';
			}
			if (pi_26_dp == 1) {
				document.getElementById('pi_26_dp_rectangle').style.display = 'block';
			}
			if (pi_26_p == 1) {
				document.getElementById('pi_26_p_rectangle').style.display = 'block';
			}
			if (pi_26_mp == 1) {
				document.getElementById('pi_26_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_26();
	}

	function toggle_implant_26() {
		if (Implantat_26 == 0) {
			Implantat_26 = 1;
			
			document.getElementById('implantat_26_b_image').style.display = 'block';
			document.getElementById('implantat_26_p_image').style.display = 'block';
			document.getElementById('implantat_26_tab').style.display = 'block';
			
			document.getElementById('furkation_26_b_btn').style.display = 'none';
			document.getElementById('furkation_26_dp_btn').style.display = 'none';
			document.getElementById('furkation_26_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_26_b').style.display = 'none';
			document.getElementById('furkation_2_26_b').style.display = 'none';
			document.getElementById('furkation_3_26_b').style.display = 'none';
			
			document.getElementById('furkation_1_26_b_tab').style.display = 'none';
			document.getElementById('furkation_2_26_b_tab').style.display = 'none';
			document.getElementById('furkation_3_26_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_dp').style.display = 'none';
			document.getElementById('furkation_2_26_dp').style.display = 'none';
			document.getElementById('furkation_3_26_dp').style.display = 'none';
			
			document.getElementById('furkation_1_26_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_26_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_26_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_mp').style.display = 'none';
			document.getElementById('furkation_2_26_mp').style.display = 'none';
			document.getElementById('furkation_3_26_mp').style.display = 'none';
			
			document.getElementById('furkation_1_26_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_26_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_26_mp_tab').style.display = 'none';
		}
		else {
			Implantat_26 = 0;
			
			document.getElementById('implantat_26_b_image').style.display = 'none';
			document.getElementById('implantat_26_p_image').style.display = 'none';
			document.getElementById('implantat_26_tab').style.display = 'none';
			
			document.getElementById('furkation_26_b_btn').style.display = 'block';
			document.getElementById('furkation_26_dp_btn').style.display = 'block';
			document.getElementById('furkation_26_mp_btn').style.display = 'block';

			if (Furkation_26_b == 1) {
				document.getElementById('furkation_1_26_b').style.display = 'block';
			} else if (Furkation_26_b == 2) {
				document.getElementById('furkation_2_26_b').style.display = 'block';
			} else if (Furkation_26_b == 3) {
				document.getElementById('furkation_3_26_b').style.display = 'block';
			}
			if (Furkation_26_b == 1) {
				document.getElementById('furkation_1_26_b_tab').style.display = 'block';
			} else if (Furkation_26_b == 2) {
				document.getElementById('furkation_2_26_b_tab').style.display = 'block';
			} else if (Furkation_26_b == 3) {
				document.getElementById('furkation_3_26_b_tab').style.display = 'block';
			}
			if (Furkation_26_dp == 1) {
				document.getElementById('furkation_1_26_dp').style.display = 'block';
			} else if (Furkation_26_dp == 2) {
				document.getElementById('furkation_2_26_dp').style.display = 'block';
			} else if (Furkation_26_dp == 3) {
				document.getElementById('furkation_3_26_dp').style.display = 'block';
			}
			if (Furkation_26_dp == 1) {
				document.getElementById('furkation_1_26_dp_tab').style.display = 'block';
			} else if (Furkation_26_dp == 2) {
				document.getElementById('furkation_2_26_dp_tab').style.display = 'block';
			} else if (Furkation_26_dp == 3) {
				document.getElementById('furkation_3_26_dp_tab').style.display = 'block';
			}
			if (Furkation_26_mp == 1) {
				document.getElementById('furkation_1_26_mp').style.display = 'block';
			} else if (Furkation_26_mp == 2) {
				document.getElementById('furkation_2_26_mp').style.display = 'block';
			} else if (Furkation_26_mp == 3) {
				document.getElementById('furkation_3_26_mp').style.display = 'block';
			}
			if (Furkation_26_mp == 1) {
				document.getElementById('furkation_1_26_mp_tab').style.display = 'block';
			} else if (Furkation_26_mp == 2) {
				document.getElementById('furkation_2_26_mp_tab').style.display = 'block';
			} else if (Furkation_26_mp == 3) {
				document.getElementById('furkation_3_26_mp_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_26_b() {
		if (Furkation_26_b == 0) {
			document.getElementById('furkation_1_26_b_tab').style.display = 'block';
			document.getElementById('furkation_2_26_b_tab').style.display = 'none';
			document.getElementById('furkation_3_26_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_b').style.display = 'block';
			document.getElementById('furkation_2_26_b').style.display = 'none';
			document.getElementById('furkation_3_26_b').style.display = 'none';

			Furkation_26_b = 1;
		}
		else if (Furkation_26_b == 1) {
			document.getElementById('furkation_1_26_b_tab').style.display = 'none';
			document.getElementById('furkation_2_26_b_tab').style.display = 'block';
			document.getElementById('furkation_3_26_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_b').style.display = 'none';
			document.getElementById('furkation_2_26_b').style.display = 'block';
			document.getElementById('furkation_3_26_b').style.display = 'none';
			
			Furkation_26_b = 2;
		}
		else if (Furkation_26_b == 2) {
			document.getElementById('furkation_1_26_b_tab').style.display = 'none';
			document.getElementById('furkation_2_26_b_tab').style.display = 'none';
			document.getElementById('furkation_3_26_b_tab').style.display = 'block';
			
			document.getElementById('furkation_1_26_b').style.display = 'none';
			document.getElementById('furkation_2_26_b').style.display = 'none';
			document.getElementById('furkation_3_26_b').style.display = 'block';
						
			Furkation_26_b = 3;
		}
		else if (Furkation_26_b == 3) {
			document.getElementById('furkation_1_26_b_tab').style.display = 'none';
			document.getElementById('furkation_2_26_b_tab').style.display = 'none';
			document.getElementById('furkation_3_26_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_b').style.display = 'none';
			document.getElementById('furkation_2_26_b').style.display = 'none';
			document.getElementById('furkation_3_26_b').style.display = 'none';
						
			Furkation_26_b = 0;
		}
	}

	function toggle_furcation_26_dp() {
		if (Furkation_26_dp == 0) {
			document.getElementById('furkation_1_26_dp_tab').style.display = 'block';
			document.getElementById('furkation_2_26_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_26_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_dp').style.display = 'block';
			document.getElementById('furkation_2_26_dp').style.display = 'none';
			document.getElementById('furkation_3_26_dp').style.display = 'none';

			Furkation_26_dp = 1;
		}
		else if (Furkation_26_dp == 1) {
			document.getElementById('furkation_1_26_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_26_dp_tab').style.display = 'block';
			document.getElementById('furkation_3_26_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_dp').style.display = 'none';
			document.getElementById('furkation_2_26_dp').style.display = 'block';
			document.getElementById('furkation_3_26_dp').style.display = 'none';
			
			Furkation_26_dp = 2;
		}
		else if (Furkation_26_dp == 2) {
			document.getElementById('furkation_1_26_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_26_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_26_dp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_26_dp').style.display = 'none';
			document.getElementById('furkation_2_26_dp').style.display = 'none';
			document.getElementById('furkation_3_26_dp').style.display = 'block';
						
			Furkation_26_dp = 3;
		}
		else if (Furkation_26_dp == 3) {
			document.getElementById('furkation_1_26_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_26_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_26_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_dp').style.display = 'none';
			document.getElementById('furkation_2_26_dp').style.display = 'none';
			document.getElementById('furkation_3_26_dp').style.display = 'none';
						
			Furkation_26_dp = 0;
		}
	}

	function toggle_furcation_26_mp() {
		if (Furkation_26_mp == 0) {
			document.getElementById('furkation_1_26_mp_tab').style.display = 'block';
			document.getElementById('furkation_2_26_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_26_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_mp').style.display = 'block';
			document.getElementById('furkation_2_26_mp').style.display = 'none';
			document.getElementById('furkation_3_26_mp').style.display = 'none';

			Furkation_26_mp = 1;
		}
		else if (Furkation_26_mp == 1) {
			document.getElementById('furkation_1_26_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_26_mp_tab').style.display = 'block';
			document.getElementById('furkation_3_26_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_mp').style.display = 'none';
			document.getElementById('furkation_2_26_mp').style.display = 'block';
			document.getElementById('furkation_3_26_mp').style.display = 'none';
			
			Furkation_26_mp = 2;
		}
		else if (Furkation_26_mp == 2) {
			document.getElementById('furkation_1_26_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_26_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_26_mp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_26_mp').style.display = 'none';
			document.getElementById('furkation_2_26_mp').style.display = 'none';
			document.getElementById('furkation_3_26_mp').style.display = 'block';
						
			Furkation_26_mp = 3;
		}
		else if (Furkation_26_mp == 3) {
			document.getElementById('furkation_1_26_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_26_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_26_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_26_mp').style.display = 'none';
			document.getElementById('furkation_2_26_mp').style.display = 'none';
			document.getElementById('furkation_3_26_mp').style.display = 'none';
						
			Furkation_26_mp = 0;
		}
	}

	function toggle_bop_26_db() {
		if (bop_26_db == 0) {
			bop_26_db = 1;
			document.getElementById('bop_26_db_rectangle').style.display = 'block';
		}
		else {
			bop_26_db = 0;
			document.getElementById('bop_26_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_26_b() {
		if (bop_26_b == 0) {
			bop_26_b = 1;
			document.getElementById('bop_26_b_rectangle').style.display = 'block';
		}
		else {
			bop_26_b = 0;
			document.getElementById('bop_26_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_26_mb() {
		if (bop_26_mb == 0) {
			bop_26_mb = 1;
			document.getElementById('bop_26_mb_rectangle').style.display = 'block';
		}
		else {
			bop_26_mb = 0;
			document.getElementById('bop_26_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_26_db() {
		if (pi_26_db == 0) {
			pi_26_db = 1;
			document.getElementById('pi_26_db_rectangle').style.display = 'block';
		}
		else {
			pi_26_db = 0;
			document.getElementById('pi_26_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_26_b() {
		if (pi_26_b == 0) {
			pi_26_b = 1;
			document.getElementById('pi_26_b_rectangle').style.display = 'block';
		}
		else {
			pi_26_b = 0;
			document.getElementById('pi_26_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_26_mb() {
		if (pi_26_mb == 0) {
			pi_26_mb = 1;
			document.getElementById('pi_26_mb_rectangle').style.display = 'block';
		}
		else {
			pi_26_mb = 0;
			document.getElementById('pi_26_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_26_dp() {
		if (bop_26_dp == 0) {
			bop_26_dp = 1;
			document.getElementById('bop_26_dp_rectangle').style.display = 'block';
		}
		else {
			bop_26_dp = 0;
			document.getElementById('bop_26_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_26_p() {
		if (bop_26_p == 0) {
			bop_26_p = 1;
			document.getElementById('bop_26_p_rectangle').style.display = 'block';
		}
		else {
			bop_26_p = 0;
			document.getElementById('bop_26_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_26_mp() {
		if (bop_26_mp == 0) {
			bop_26_mp = 1;
			document.getElementById('bop_26_mp_rectangle').style.display = 'block';
		}
		else {
			bop_26_mp = 0;
			document.getElementById('bop_26_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_26_dp() {
		if (pi_26_dp == 0) {
			pi_26_dp = 1;
			document.getElementById('pi_26_dp_rectangle').style.display = 'block';
		}
		else {
			pi_26_dp = 0;
			document.getElementById('pi_26_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_26_p() {
		if (pi_26_p == 0) {
			pi_26_p = 1;
			document.getElementById('pi_26_p_rectangle').style.display = 'block';
		}
		else {
			pi_26_p = 0;
			document.getElementById('pi_26_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_26_mp() {
		if (pi_26_mp == 0) {
			pi_26_mp = 1;
			document.getElementById('pi_26_mp_rectangle').style.display = 'block';
		}
		else {
			pi_26_mp = 0;
			document.getElementById('pi_26_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_26() {
		if (tooth_26 == 1) {
			
		// Variablen aus dem Formular
			pd_26_db = document.forms[0]["pd_26_db"].value;
			pd_26_b = document.forms[0]["pd_26_b"].value;
			pd_26_mb = document.forms[0]["pd_26_mb"].value;

			if (document.forms[0]["pd_26_dp"].value > 3) {document.forms[0]["pd_26_dp"].style.color = 'red';} else {document.forms[0]["pd_26_dp"].style.color = 'black'};
			if (document.forms[0]["pd_26_p"].value > 3) {document.forms[0]["pd_26_p"].style.color = 'red';} else {document.forms[0]["pd_26_p"].style.color = 'black'};
			if (document.forms[0]["pd_26_mp"].value > 3) {document.forms[0]["pd_26_mp"].style.color = 'red';} else {document.forms[0]["pd_26_mp"].style.color = 'black'};
			
			gm_26_db = document.forms[0]["gm_26_db"].value;
			gm_26_b = document.forms[0]["gm_26_b"].value;
			gm_26_mb = document.forms[0]["gm_26_mb"].value;
			
			pd_26_dp = document.forms[0]["pd_26_dp"].value;
			pd_26_p = document.forms[0]["pd_26_p"].value;
			pd_26_mp = document.forms[0]["pd_26_mp"].value;

			if (document.forms[0]["pd_26_db"].value > 3) {document.forms[0]["pd_26_db"].style.color = 'red';} else {document.forms[0]["pd_26_db"].style.color = 'black'};
			if (document.forms[0]["pd_26_b"].value > 3) {document.forms[0]["pd_26_b"].style.color = 'red';} else {document.forms[0]["pd_26_b"].style.color = 'black'};
			if (document.forms[0]["pd_26_mb"].value > 3) {document.forms[0]["pd_26_mb"].style.color = 'red';} else {document.forms[0]["pd_26_mb"].style.color = 'black'};
			
			gm_26_dp = document.forms[0]["gm_26_dp"].value;
			gm_26_p = document.forms[0]["gm_26_p"].value;
			gm_26_mp = document.forms[0]["gm_26_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 26 (bukkal) in der Bitmap
			var x_db_26 = 961;							// distal 26
			var x_mb_26 = 907;							// mesial 26
			var x_b_26 = (x_db_26 + x_mb_26)/2;			// bukkal 26
			
		// Set der horizontalen Koordinaten von Zahn 26 (palatinal) in der Bitmap
			var x_dp_26 = 960;							// distal 26
			var x_mp_26 = 912;							// mesial 26
			var x_p_26 = (x_dp_26 + x_mp_26)/2;			// palatinal 26
			
		// Set der vertikalen Koordinaten von Zahn 26 (bukkal) aus dem Formular
			var y_gm_26_db = gm_OK_b + 6.5 * gm_26_db;	// Margo Gingivae distobukkal 26
			var y_gm_26_b = gm_OK_b + 6.5 * gm_26_b;	// Margo Gingivae bukkal 26
			var y_gm_26_mb = gm_OK_b + 6.5 * gm_26_mb;	// Margo Gingivae mesiobukkal 26
			var y_pd_26_db = 6.5 * pd_26_db;			// Sondierungstiefe distobukkal 26
			var y_pd_26_b = 6.5 * pd_26_b;				// Sondierungstiefe bukkal 26
			var y_pd_26_mb = 6.5 * pd_26_mb;			// Sondierungstiefe mesiobukkal 26
			
		// Set der vertikalen Koordinaten von Zahn 26 (palatinal) aus dem Formular
			var y_gm_26_dp = gm_OK_p - 6.5 * gm_26_dp;	// Margo Gingivae distopalatinal 26
			var y_gm_26_p = gm_OK_p - 6.5 * gm_26_p;	// Margo Gingivae palatinal 26
			var y_gm_26_mp = gm_OK_p - 6.5 * gm_26_mp;	// Margo Gingivae mesiopalatinal 26
			var y_pd_26_dp = 6.5 * pd_26_dp;			// Sondierungstiefe distopalatinal 26
			var y_pd_26_p = 6.5 * pd_26_p;				// Sondierungstiefe palatinal 26
			var y_pd_26_mp = 6.5 * pd_26_mp;			// Sondierungstiefe mesiopalatinal 26
			
		// Berechnung des Attachmentniveaus 26 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_26_db = y_gm_26_db - y_pd_26_db;	// Attachmentniveau distobukkal 26
			var y_al_26_b = y_gm_26_b - y_pd_26_b;		// Attachmentniveau bukkal 26
			var y_al_26_mb = y_gm_26_mb - y_pd_26_mb;	// Attachmentniveau mesiobukkal 26
			
		// Berechnung des Attachmentniveaus 26 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_26_dp = y_gm_26_dp + y_pd_26_dp;	// Attachmentniveau distopalatinal 26
			var y_al_26_p = y_gm_26_p + y_pd_26_p;		// Attachmentniveau palatinal 26
			var y_al_26_mp = y_gm_26_mp + y_pd_26_mp;	// Attachmentniveau mesiopalatinal 26

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[26].storeCoordinates(
				x_db_26, x_mb_26, x_dp_26, x_mp_26, x_b_26, x_p_26,
				y_gm_26_db, y_gm_26_b, y_gm_26_mb, y_pd_26_db, y_pd_26_b, y_pd_26_mb,
				y_gm_26_dp, y_gm_26_p, y_gm_26_mp, y_pd_26_dp, y_pd_26_p, y_pd_26_mp,
				y_al_26_db, y_al_26_b, y_al_26_mb, y_al_26_dp, y_al_26_p, y_al_26_mp
			);
		
		// Parodontaltasche 26 bukkal zeichnen
			var string = 
				x_db_26 + ", " + y_al_26_db + "  " + 
				x_b_26 + ", " + y_al_26_b + "  " + 
				x_mb_26 + ", " + y_al_26_mb + "  " + 
				x_mb_26 + ", " + y_gm_26_mb + "  " + 
				x_b_26 + ", " + y_gm_26_b + "  " + 
				x_db_26 + ", " + y_gm_26_db;
			document.getElementById("polygon_26_b").setAttribute("points", string);
		// Attachmentniveau 26 bukkal zeichnen
			var string = 
				x_db_26 + ", " + y_al_26_db + "  " + 
				x_b_26 + ", " + y_al_26_b + "  " + 
				x_mb_26 + ", " + y_al_26_mb;
			document.getElementById("polyline_al_26_b").setAttribute("points", string);
		// Margo Gingivae 26 bukkal zeichnen
			var string =
				x_db_26 + ", " + y_gm_26_db + "  " + 
				x_b_26 + ", " + y_gm_26_b + "  " + 
				x_mb_26 + ", " + y_gm_26_mb;
			document.getElementById("polyline_gm_26_b").setAttribute("points", string);

		// Parodontaltasche 26 palatinal zeichnen
			var string = 
				x_dp_26 + ", " + y_al_26_dp + "  " + 
				x_p_26 + ", " + y_al_26_p + "  " + 
				x_mp_26 + ", " + y_al_26_mp + "  " + 
				x_mp_26 + ", " + y_gm_26_mp + "  " + 
				x_p_26 + ", " + y_gm_26_p + "  " + 
				x_dp_26 + ", " + y_gm_26_dp;
			document.getElementById("polygon_26_p").setAttribute("points", string);
		// Attachmentniveau 26 palatinal zeichnen
			var string = 
				x_dp_26 + ", " + y_al_26_dp + "  " + 
				x_p_26 + ", " + y_al_26_p + "  " + 
				x_mp_26 + ", " + y_al_26_mp;
			document.getElementById("polyline_al_26_p").setAttribute("points", string);
		// Margo Gingivae 26 palatinal zeichnen
			var string =
				x_dp_26 + ", " + y_gm_26_dp + "  " + 
				x_p_26 + ", " + y_gm_26_p + "  " + 
				x_mp_26 + ", " + y_gm_26_mp;
			document.getElementById("polyline_gm_26_p").setAttribute("points", string);
		}
        if (tooth_26 == 1 && tooth_25 == 1) {

            pd_25_db = document.forms[0]["pd_25_db"].value;
			gm_25_db = document.forms[0]["gm_25_db"].value;
			
			pd_25_dp = document.forms[0]["pd_25_dp"].value;
			gm_25_dp = document.forms[0]["gm_25_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 25 (bukkal) in der Bitmap
			var x_db_25 = 895;							// distal 25
			
		// Set der horizontalen Koordinaten von Zahn 25 (palatinal) in der Bitmap
			var x_dp_25 = 897;							// distal 25
			
		// Set der vertikalen Koordinaten von Zahn 25 (bukkal) aus dem Formular
			var y_gm_25_db = gm_OK_b + 6.5 * gm_25_db;	// Margo Gingivae distobukkal 25
			var y_pd_25_db = 6.5 * pd_25_db;			// Sondierungstiefe distobukkal 25
			
		// Set der vertikalen Koordinaten von Zahn 25 (palatinal) aus dem Formular
			var y_gm_25_dp = gm_OK_p - 6.5 * gm_25_dp;	// Margo Gingivae distopalatinal 25
			var y_pd_25_dp = 6.5 * pd_25_dp;			// Sondierungstiefe distopalatinal 25
			
		// Berechnung des Attachmentniveaus 25 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_25_db = y_gm_25_db - y_pd_25_db;	// Attachmentniveau distobukkal 25
			
		// Berechnung des Attachmentniveaus 25 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_25_dp = y_gm_25_dp + y_pd_25_dp;	// Attachmentniveau distopalatinal 25

		// Parodontaltasche inter_26_25 bukkal zeichnen
			var string = 
				x_mb_26 + ", " + y_al_26_mb + "  " + 
				x_db_25 + ", " + y_al_25_db + "  " + 
				x_db_25 + ", " + y_gm_25_db + "  " + 
				x_mb_26 + ", " + y_gm_26_mb;
			document.getElementById("polygon_inter_26_25_b").setAttribute("points", string);
		// Attachmentniveau inter_26_25 bukkal zeichnen
			var string = 
				x_mb_26 + ", " + y_al_26_mb + "  " + 
				x_db_25 + ", " + y_al_25_db;
			document.getElementById("polyline_al_inter_26_25_b").setAttribute("points", string);
		// Margo Gingivae inter_26_25 bukkal zeichnen
			var string =
				x_mb_26 + ", " + y_gm_26_mb + "  " + 
				x_db_25 + ", " + y_gm_25_db;
			document.getElementById("polyline_gm_inter_26_25_b").setAttribute("points", string);

        // Parodontaltasche inter_26_25 palatinal zeichnen
			var string = 
				x_mp_26 + ", " + y_al_26_mp + "  " + 
				x_dp_25 + ", " + y_al_25_dp + "  " + 
				x_dp_25 + ", " + y_gm_25_dp + "  " + 
				x_mp_26 + ", " + y_gm_26_mp;
			document.getElementById("polygon_inter_26_25_p").setAttribute("points", string);
		// Attachmentniveau inter_26_25 palatinal zeichnen
			var string = 
				x_mp_26 + ", " + y_al_26_mp + "  " + 
				x_dp_25 + ", " + y_al_25_dp;
			document.getElementById("polyline_al_inter_26_25_p").setAttribute("points", string);
		// Margo Gingivae inter_26_25 palatinal zeichnen
			var string =
				x_mp_26 + ", " + y_gm_26_mp + "  " + 
				x_dp_25 + ", " + y_gm_25_dp;
			document.getElementById("polyline_gm_inter_26_25_p").setAttribute("points", string);
		}
        if (tooth_27 == 1 && tooth_26 == 1) {

            pd_27_mb = document.forms[0]["pd_27_mb"].value;
			gm_27_mb = document.forms[0]["gm_27_mb"].value;
			
			pd_27_mp = document.forms[0]["pd_27_mp"].value;
			gm_27_mp = document.forms[0]["gm_27_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 27 (bukkal) in der Bitmap
			var x_mb_27 = 972;							// mesial 27
			
		// Set der horizontalen Koordinaten von Zahn 27 (palatinal) in der Bitmap
			var x_mp_27 = 976;							// mesial 27
			
		// Set der vertikalen Koordinaten von Zahn 27 (bukkal) aus dem Formular
			var y_gm_27_mb = gm_OK_b + 6.5 * gm_27_mb;	// Margo Gingivae mesiobukkal 27
			var y_pd_27_mb = 6.5 * pd_27_mb;			// Sondierungstiefe mesiobukkal 27
			
		// Set der vertikalen Koordinaten von Zahn 27 (palatinal) aus dem Formular
			var y_gm_27_mp = gm_OK_p - 6.5 * gm_27_mp;	// Margo Gingivae mesiopalatinal 27
			var y_pd_27_mp = 6.5 * pd_27_mp;			// Sondierungstiefe mesiopalatinal 27
			
		// Berechnung des Attachmentniveaus 27 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_27_mb = y_gm_27_mb - y_pd_27_mb;	// Attachmentniveau mesiobukkal 27
			
		// Berechnung des Attachmentniveaus 27 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_27_mp = y_gm_27_mp + y_pd_27_mp;	// Attachmentniveau mesiopalatinal 27

		// Parodontaltasche inter_27_26 bukkal zeichnen
			var string = 
				x_mb_27 + ", " + y_al_27_mb + "  " + 
				x_db_26 + ", " + y_al_26_db + "  " + 
				x_db_26 + ", " + y_gm_26_db + "  " + 
				x_mb_27 + ", " + y_gm_27_mb;
			document.getElementById("polygon_inter_27_26_b").setAttribute("points", string);
		// Attachmentniveau inter_27_26 bukkal zeichnen
			var string = 
				x_mb_27 + ", " + y_al_27_mb + "  " + 
				x_db_26 + ", " + y_al_26_db;
			document.getElementById("polyline_al_inter_27_26_b").setAttribute("points", string);
		// Margo Gingivae inter_27_26 bukkal zeichnen
			var string =
				x_mb_27 + ", " + y_gm_27_mb + "  " + 
				x_db_26 + ", " + y_gm_26_db;
			document.getElementById("polyline_gm_inter_27_26_b").setAttribute("points", string);

        // Parodontaltasche inter_27_26 palatinal zeichnen
			var string = 
				x_mp_27 + ", " + y_al_27_mp + "  " + 
				x_dp_26 + ", " + y_al_26_dp + "  " + 
				x_dp_26 + ", " + y_gm_26_dp + "  " + 
				x_mp_27 + ", " + y_gm_27_mp;
			document.getElementById("polygon_inter_27_26_p").setAttribute("points", string);
		// Attachmentniveau inter_27_26 palatinal zeichnen
			var string = 
				x_mp_27 + ", " + y_al_27_mp + "  " + 
				x_dp_26 + ", " + y_al_26_dp;
			document.getElementById("polyline_al_inter_27_26_p").setAttribute("points", string);
		// Margo Gingivae inter_27_26 palatinal zeichnen
			var string =
				x_mp_27 + ", " + y_gm_27_mp + "  " + 
				x_dp_26 + ", " + y_gm_26_dp;
			document.getElementById("polyline_gm_inter_27_26_p").setAttribute("points", string);
		}
	}