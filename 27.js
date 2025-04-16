	// Definition der Variablen für das Formular
		var tooth_27 = 1;
		var Furkation_27_b = 0;
		var Furkation_27_dp = 0;
		var Furkation_27_mp = 0;
		var Implantat_27 = 0;
		var bop_27_db = 0;
		var bop_27_b = 0;
		var bop_27_mb = 0;
		var pi_27_db = 0;
		var pi_27_b = 0;
		var pi_27_mb = 0;
		var bop_27_dp = 0;
		var bop_27_p = 0;
		var bop_27_mp = 0;
		var pi_27_dp = 0;
		var pi_27_p = 0;
		var pi_27_mp = 0;
		var gm_27_db = 0;
		var gm_27_b = 0;
		var gm_27_mb = 0;
		var pd_27_db = 0;
		var pd_27_b = 0;
		var pd_27_mb = 0;
		var gm_27_dp = 0;
		var gm_27_p = 0;
		var gm_27_mp = 0;
		var pd_27_dp = 0;
		var pd_27_p = 0;
		var pd_27_mp = 0;

	function clear_data_27() {
        if (tooth_27 == 1) {
			gm_27_db = 0;
			gm_27_b = 0;
			gm_27_mb = 0;
			pd_27_db = 0;
			pd_27_b = 0;
			pd_27_mb = 0;
	
				document.getElementById('gm_27_db_txt').value = 0;
				document.getElementById('gm_27_b_txt').value = 0;
				document.getElementById('gm_27_mb_txt').value = 0;
				
				document.getElementById('pd_27_db_txt').value = 0;
				document.getElementById('pd_27_b_txt').value = 0;
				document.getElementById('pd_27_mb_txt').value = 0;
			
				document.forms[0]["pd_27_db"].style.color = 'black'
				document.forms[0]["pd_27_b"].style.color = 'black'
				document.forms[0]["pd_27_mb"].style.color = 'black'
			
			gm_27_dp = 0;
			gm_27_p = 0;
			gm_27_mp = 0;
			pd_27_dp = 0;
			pd_27_p = 0;
			pd_27_mp = 0;

				document.getElementById('gm_27_dp_txt').value = 0;
				document.getElementById('gm_27_p_txt').value = 0;
				document.getElementById('gm_27_mp_txt').value = 0;
				
				document.getElementById('pd_27_dp_txt').value = 0;
				document.getElementById('pd_27_p_txt').value = 0;
				document.getElementById('pd_27_mp_txt').value = 0;

				document.forms[0]["pd_27_dp"].style.color = 'black'
				document.forms[0]["pd_27_p"].style.color = 'black'
				document.forms[0]["pd_27_mp"].style.color = 'black'
			
			change_probing_27();
			
			mobility_27 = 0;

				document.getElementById('mobility_27_txt').value = "0";

			note_27 = "";

				document.getElementById('note_27_txt').value = "";

			Furkation_27_b = 0;
			Furkation_27_dp = 0;
			Furkation_27_mp = 0;

				document.getElementById('furkation_1_27_b').style.display = 'none';
				document.getElementById('furkation_2_27_b').style.display = 'none';
				document.getElementById('furkation_3_27_b').style.display = 'none';
					
				document.getElementById('furkation_1_27_b_tab').style.display = 'none';
				document.getElementById('furkation_2_27_b_tab').style.display = 'none';
				document.getElementById('furkation_3_27_b_tab').style.display = 'none';
				
				document.getElementById('furkation_1_27_dp').style.display = 'none';
				document.getElementById('furkation_2_27_dp').style.display = 'none';
				document.getElementById('furkation_3_27_dp').style.display = 'none';
					
				document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
				document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
				document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
				
				document.getElementById('furkation_1_27_mp').style.display = 'none';
				document.getElementById('furkation_2_27_mp').style.display = 'none';
				document.getElementById('furkation_3_27_mp').style.display = 'none';
				
				document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
				document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
				document.getElementById('furkation_3_27_mp_tab').style.display = 'none';
	
			bop_27_db = 0;
			bop_27_b = 0;
			bop_27_mb = 0;
					
			bop_27_dp = 0;
			bop_27_p = 0;
			bop_27_mp = 0;
					
				document.getElementById('bop_27_db_rectangle').style.display = 'none';
				document.getElementById('bop_27_b_rectangle').style.display = 'none';
				document.getElementById('bop_27_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_27_dp_rectangle').style.display = 'none';
				document.getElementById('bop_27_p_rectangle').style.display = 'none';
				document.getElementById('bop_27_mp_rectangle').style.display = 'none';
				
			pi_27_db = 0;
			pi_27_b = 0;
			pi_27_mb = 0;
					
			pi_27_dp = 0;
			pi_27_p = 0;
			pi_27_mp = 0;

				document.getElementById('pi_27_db_rectangle').style.display = 'none';
				document.getElementById('pi_27_b_rectangle').style.display = 'none';
				document.getElementById('pi_27_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_27_dp_rectangle').style.display = 'none';
				document.getElementById('pi_27_p_rectangle').style.display = 'none';
				document.getElementById('pi_27_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_27() {
		if (tooth_27 === 1) {
			tooth_27 = 0;
			document.getElementById('tooth_line_27_b').style.display = 'block';
			document.getElementById('tooth_line_27_p').style.display = 'block';
			
			document.getElementById('mobility_27_txt').style.display = 'none';
			
			document.getElementById('implantat_27_btn').style.display = 'none';
			document.getElementById('implantat_27_tab').style.display = 'none';
			document.getElementById('implantat_27_b_image').style.display = 'none';
			document.getElementById('implantat_27_p_image').style.display = 'none';
			
			document.getElementById('furkation_27_b_btn').style.display = 'none';
			document.getElementById('furkation_27_dp_btn').style.display = 'none';
			document.getElementById('furkation_27_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_27_b').style.display = 'none';
			document.getElementById('furkation_2_27_b').style.display = 'none';
			document.getElementById('furkation_3_27_b').style.display = 'none';
			
			document.getElementById('furkation_1_27_b_tab').style.display = 'none';
			document.getElementById('furkation_2_27_b_tab').style.display = 'none';
			document.getElementById('furkation_3_27_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_dp').style.display = 'none';
			document.getElementById('furkation_2_27_dp').style.display = 'none';
			document.getElementById('furkation_3_27_dp').style.display = 'none';
			
			document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_mp').style.display = 'none';
			document.getElementById('furkation_2_27_mp').style.display = 'none';
			document.getElementById('furkation_3_27_mp').style.display = 'none';
			
			document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_27_mp_tab').style.display = 'none';
			
			document.getElementById('gm_27_db_txt').style.display = 'none';
			document.getElementById('gm_27_b_txt').style.display = 'none';
			document.getElementById('gm_27_mb_txt').style.display = 'none';
			
			document.getElementById('pd_27_db_txt').style.display = 'none';
			document.getElementById('pd_27_b_txt').style.display = 'none';
			document.getElementById('pd_27_mb_txt').style.display = 'none';
			
			document.getElementById('gm_27_dp_txt').style.display = 'none';
			document.getElementById('gm_27_p_txt').style.display = 'none';
			document.getElementById('gm_27_mp_txt').style.display = 'none';
			
			document.getElementById('pd_27_dp_txt').style.display = 'none';
			document.getElementById('pd_27_p_txt').style.display = 'none';
			document.getElementById('pd_27_mp_txt').style.display = 'none';
					
			document.getElementById('bop_27_db_rectangle').style.display = 'none';
			document.getElementById('bop_27_b_rectangle').style.display = 'none';
			document.getElementById('bop_27_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_27_dp_rectangle').style.display = 'none';
			document.getElementById('bop_27_p_rectangle').style.display = 'none';
			document.getElementById('bop_27_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_27_db_btn').style.display = 'none';
			document.getElementById('bop_27_b_btn').style.display = 'none';
			document.getElementById('bop_27_mb_btn').style.display = 'none';
			
			document.getElementById('bop_27_dp_btn').style.display = 'none';
			document.getElementById('bop_27_p_btn').style.display = 'none';
			document.getElementById('bop_27_mp_btn').style.display = 'none';
			
			document.getElementById('pi_27_db_rectangle').style.display = 'none';
			document.getElementById('pi_27_b_rectangle').style.display = 'none';
			document.getElementById('pi_27_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_27_dp_rectangle').style.display = 'none';
			document.getElementById('pi_27_p_rectangle').style.display = 'none';
			document.getElementById('pi_27_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_27_db_btn').style.display = 'none';
			document.getElementById('pi_27_b_btn').style.display = 'none';
			document.getElementById('pi_27_mb_btn').style.display = 'none';
			
			document.getElementById('pi_27_dp_btn').style.display = 'none';
			document.getElementById('pi_27_p_btn').style.display = 'none';
			document.getElementById('pi_27_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_27_b').style.display = 'none';
			document.getElementById('polyline_al_27_b').style.display = 'none';
			document.getElementById('polyline_gm_27_b').style.display = 'none';
			
			document.getElementById('polygon_27_p').style.display = 'none';
			document.getElementById('polyline_al_27_p').style.display = 'none';
			document.getElementById('polyline_gm_27_p').style.display = 'none';
			
			document.getElementById('polygon_inter_28_27_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_28_27_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_28_27_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_28_27_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_28_27_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_28_27_p').style.display = 'none';            
            
			document.getElementById('polygon_inter_27_26_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_27_26_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_27_26_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_27_26_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_27_26_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_27_26_p').style.display = 'none';            
			
			document.getElementById('note_27_txt').style.display = 'none';
		}
		else if (Implantat_27 !== 1) {
			tooth_27 = 1;
			document.getElementById('tooth_line_27_b').style.display = 'none';
			document.getElementById('tooth_line_27_p').style.display = 'none';

			document.getElementById('mobility_27_txt').style.display = 'block';

			document.getElementById('implantat_27_btn').style.display = 'block';

			document.getElementById('furkation_27_b_btn').style.display = 'block';
			document.getElementById('furkation_27_dp_btn').style.display = 'block';
			document.getElementById('furkation_27_mp_btn').style.display = 'block';
			
			document.getElementById('gm_27_db_txt').style.display = 'block';
			document.getElementById('gm_27_b_txt').style.display = 'block';
			document.getElementById('gm_27_mb_txt').style.display = 'block';
			
			document.getElementById('pd_27_db_txt').style.display = 'block';
			document.getElementById('pd_27_b_txt').style.display = 'block';
			document.getElementById('pd_27_mb_txt').style.display = 'block';
			
			document.getElementById('gm_27_dp_txt').style.display = 'block';
			document.getElementById('gm_27_p_txt').style.display = 'block';
			document.getElementById('gm_27_mp_txt').style.display = 'block';
			
			document.getElementById('pd_27_dp_txt').style.display = 'block';
			document.getElementById('pd_27_p_txt').style.display = 'block';
			document.getElementById('pd_27_mp_txt').style.display = 'block';
			
			document.getElementById('note_27_txt').style.display = 'block';

			document.getElementById('polygon_27_b').style.display = 'block';
			document.getElementById('polyline_al_27_b').style.display = 'block';
			document.getElementById('polyline_gm_27_b').style.display = 'block';
			
			document.getElementById('polygon_27_p').style.display = 'block';
			document.getElementById('polyline_al_27_p').style.display = 'block';
			document.getElementById('polyline_gm_27_p').style.display = 'block';

            if (tooth_28 == 1 && tooth_27 == 1) {
				document.getElementById('polygon_inter_28_27_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_28_27_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_28_27_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_28_27_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_28_27_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_28_27_p').style.display = 'block';            
            }
            
            if (tooth_27 == 1 && tooth_26 == 1) {
				document.getElementById('polygon_inter_27_26_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_27_26_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_27_26_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_27_26_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_27_26_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_27_26_p').style.display = 'block';            
            }

			if (Furkation_27_b == 1) {
				document.getElementById('furkation_1_27_b').style.display = 'block';
			} else if (Furkation_27_b == 2) {
				document.getElementById('furkation_2_27_b').style.display = 'block';
			} else if (Furkation_27_b == 3) {
				document.getElementById('furkation_3_27_b').style.display = 'block';
			}
			if (Furkation_27_b == 1) {
				document.getElementById('furkation_1_27_b_tab').style.display = 'block';
			} else if (Furkation_27_b == 2) {
				document.getElementById('furkation_2_27_b_tab').style.display = 'block';
			} else if (Furkation_27_b == 3) {
				document.getElementById('furkation_3_27_b_tab').style.display = 'block';
			}
			if (Furkation_27_dp == 1) {
				document.getElementById('furkation_1_27_dp').style.display = 'block';
			} else if (Furkation_27_dp == 2) {
				document.getElementById('furkation_2_27_dp').style.display = 'block';
			} else if (Furkation_27_dp == 3) {
				document.getElementById('furkation_3_27_dp').style.display = 'block';
			}
			if (Furkation_27_dp == 1) {
				document.getElementById('furkation_1_27_dp_tab').style.display = 'block';
			} else if (Furkation_27_dp == 2) {
				document.getElementById('furkation_2_27_dp_tab').style.display = 'block';
			} else if (Furkation_27_dp == 3) {
				document.getElementById('furkation_3_27_dp_tab').style.display = 'block';
			}
			if (Furkation_27_mp == 1) {
				document.getElementById('furkation_1_27_mp').style.display = 'block';
			} else if (Furkation_27_mp == 2) {
				document.getElementById('furkation_2_27_mp').style.display = 'block';
			} else if (Furkation_27_mp == 3) {
				document.getElementById('furkation_3_27_mp').style.display = 'block';
			}
			if (Furkation_27_mp == 1) {
				document.getElementById('furkation_1_27_mp_tab').style.display = 'block';
			} else if (Furkation_27_mp == 2) {
				document.getElementById('furkation_2_27_mp_tab').style.display = 'block';
			} else if (Furkation_27_mp == 3) {
				document.getElementById('furkation_3_27_mp_tab').style.display = 'block';
			}

			document.getElementById('bop_27_db_btn').style.display = 'block';
			document.getElementById('bop_27_b_btn').style.display = 'block';
			document.getElementById('bop_27_mb_btn').style.display = 'block';

			document.getElementById('bop_27_dp_btn').style.display = 'block';
			document.getElementById('bop_27_p_btn').style.display = 'block';
			document.getElementById('bop_27_mp_btn').style.display = 'block';
			
			if (bop_27_db == 1) {
				document.getElementById('bop_27_db_rectangle').style.display = 'block';
			}
			if (bop_27_b == 1) {
				document.getElementById('bop_27_b_rectangle').style.display = 'block';
			}
			if (bop_27_mb == 1) {
				document.getElementById('bop_27_mb_rectangle').style.display = 'block';
			}
			if (bop_27_dp == 1) {
				document.getElementById('bop_27_dp_rectangle').style.display = 'block';
			}
			if (bop_27_p == 1) {
				document.getElementById('bop_27_p_rectangle').style.display = 'block';
			}
			if (bop_27_mp == 1) {
				document.getElementById('bop_27_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_27_db_btn').style.display = 'block';
			document.getElementById('pi_27_b_btn').style.display = 'block';
			document.getElementById('pi_27_mb_btn').style.display = 'block';

			document.getElementById('pi_27_dp_btn').style.display = 'block';
			document.getElementById('pi_27_p_btn').style.display = 'block';
			document.getElementById('pi_27_mp_btn').style.display = 'block';
			
			if (pi_27_db == 1) {
				document.getElementById('pi_27_db_rectangle').style.display = 'block';
			}
			if (pi_27_b == 1) {
				document.getElementById('pi_27_b_rectangle').style.display = 'block';
			}
			if (pi_27_mb == 1) {
				document.getElementById('pi_27_mb_rectangle').style.display = 'block';
			}
			if (pi_27_dp == 1) {
				document.getElementById('pi_27_dp_rectangle').style.display = 'block';
			}
			if (pi_27_p == 1) {
				document.getElementById('pi_27_p_rectangle').style.display = 'block';
			}
			if (pi_27_mp == 1) {
				document.getElementById('pi_27_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_27 == 1) {
			tooth_27 = 1;
			document.getElementById('tooth_line_27_b').style.display = 'none';
			document.getElementById('tooth_line_27_p').style.display = 'none';

			document.getElementById('mobility_27_txt').style.display = 'block';
			
			document.getElementById('note_27_txt').style.display = 'block';

			document.getElementById('implantat_27_btn').style.display = 'block';
			document.getElementById('implantat_27_tab').style.display = 'block';
			document.getElementById('implantat_27_b_image').style.display = 'block';
			document.getElementById('implantat_27_p_image').style.display = 'block';

			document.getElementById('gm_27_db_txt').style.display = 'block';
			document.getElementById('gm_27_b_txt').style.display = 'block';
			document.getElementById('gm_27_mb_txt').style.display = 'block';
			
			document.getElementById('pd_27_db_txt').style.display = 'block';
			document.getElementById('pd_27_b_txt').style.display = 'block';
			document.getElementById('pd_27_mb_txt').style.display = 'block';
			
			document.getElementById('gm_27_dp_txt').style.display = 'block';
			document.getElementById('gm_27_p_txt').style.display = 'block';
			document.getElementById('gm_27_mp_txt').style.display = 'block';
			
			document.getElementById('pd_27_dp_txt').style.display = 'block';
			document.getElementById('pd_27_p_txt').style.display = 'block';
			document.getElementById('pd_27_mp_txt').style.display = 'block';

			document.getElementById('polygon_27_b').style.display = 'block';
			document.getElementById('polyline_al_27_b').style.display = 'block';
			document.getElementById('polyline_gm_27_b').style.display = 'block';
			
			document.getElementById('polygon_27_p').style.display = 'block';
			document.getElementById('polyline_al_27_p').style.display = 'block';
			document.getElementById('polyline_gm_27_p').style.display = 'block';

            if (tooth_28 == 1 && tooth_27 == 1) {
				document.getElementById('polygon_inter_28_27_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_28_27_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_28_27_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_28_27_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_28_27_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_28_27_p').style.display = 'block';            
            }
            
            if (tooth_27 == 1 && tooth_26 == 1) {
				document.getElementById('polygon_inter_27_26_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_27_26_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_27_26_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_27_26_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_27_26_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_27_26_p').style.display = 'block';            
            }

			document.getElementById('bop_27_db_btn').style.display = 'block';
			document.getElementById('bop_27_b_btn').style.display = 'block';
			document.getElementById('bop_27_mb_btn').style.display = 'block';

			document.getElementById('bop_27_dp_btn').style.display = 'block';
			document.getElementById('bop_27_p_btn').style.display = 'block';
			document.getElementById('bop_27_mp_btn').style.display = 'block';
			
			document.getElementById('pi_27_db_btn').style.display = 'block';
			document.getElementById('pi_27_b_btn').style.display = 'block';
			document.getElementById('pi_27_mb_btn').style.display = 'block';

			document.getElementById('pi_27_dp_btn').style.display = 'block';
			document.getElementById('pi_27_p_btn').style.display = 'block';
			document.getElementById('pi_27_mp_btn').style.display = 'block';
			
			if (bop_27_db == 1) {
				document.getElementById('bop_27_db_rectangle').style.display = 'block';
			}
			if (bop_27_b == 1) {
				document.getElementById('bop_27_b_rectangle').style.display = 'block';
			}
			if (bop_27_mb == 1) {
				document.getElementById('bop_27_mb_rectangle').style.display = 'block';
			}
			if (bop_27_dp == 1) {
				document.getElementById('bop_27_dp_rectangle').style.display = 'block';
			}
			if (bop_27_p == 1) {
				document.getElementById('bop_27_p_rectangle').style.display = 'block';
			}
			if (bop_27_mp == 1) {
				document.getElementById('bop_27_mp_rectangle').style.display = 'block';
			}
			
			if (pi_27_db == 1) {
				document.getElementById('pi_27_db_rectangle').style.display = 'block';
			}
			if (pi_27_b == 1) {
				document.getElementById('pi_27_b_rectangle').style.display = 'block';
			}
			if (pi_27_mb == 1) {
				document.getElementById('pi_27_mb_rectangle').style.display = 'block';
			}
			if (pi_27_dp == 1) {
				document.getElementById('pi_27_dp_rectangle').style.display = 'block';
			}
			if (pi_27_p == 1) {
				document.getElementById('pi_27_p_rectangle').style.display = 'block';
			}
			if (pi_27_mp == 1) {
				document.getElementById('pi_27_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_27();
	}

	function toggle_implant_27() {
		if (Implantat_27 == 0) {
			Implantat_27 = 1;
			
			document.getElementById('implantat_27_b_image').style.display = 'block';
			document.getElementById('implantat_27_p_image').style.display = 'block';
			document.getElementById('implantat_27_tab').style.display = 'block';
			
			document.getElementById('furkation_27_b_btn').style.display = 'none';
			document.getElementById('furkation_27_dp_btn').style.display = 'none';
			document.getElementById('furkation_27_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_27_b').style.display = 'none';
			document.getElementById('furkation_2_27_b').style.display = 'none';
			document.getElementById('furkation_3_27_b').style.display = 'none';
			
			document.getElementById('furkation_1_27_b_tab').style.display = 'none';
			document.getElementById('furkation_2_27_b_tab').style.display = 'none';
			document.getElementById('furkation_3_27_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_dp').style.display = 'none';
			document.getElementById('furkation_2_27_dp').style.display = 'none';
			document.getElementById('furkation_3_27_dp').style.display = 'none';
			
			document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_mp').style.display = 'none';
			document.getElementById('furkation_2_27_mp').style.display = 'none';
			document.getElementById('furkation_3_27_mp').style.display = 'none';
			
			document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_27_mp_tab').style.display = 'none';
		}
		else {
			Implantat_27 = 0;
			
			document.getElementById('implantat_27_b_image').style.display = 'none';
			document.getElementById('implantat_27_p_image').style.display = 'none';
			document.getElementById('implantat_27_tab').style.display = 'none';
			
			document.getElementById('furkation_27_b_btn').style.display = 'block';
			document.getElementById('furkation_27_dp_btn').style.display = 'block';
			document.getElementById('furkation_27_mp_btn').style.display = 'block';

			if (Furkation_27_b == 1) {
				document.getElementById('furkation_1_27_b').style.display = 'block';
			} else if (Furkation_27_b == 2) {
				document.getElementById('furkation_2_27_b').style.display = 'block';
			} else if (Furkation_27_b == 3) {
				document.getElementById('furkation_3_27_b').style.display = 'block';
			}
			if (Furkation_27_b == 1) {
				document.getElementById('furkation_1_27_b_tab').style.display = 'block';
			} else if (Furkation_27_b == 2) {
				document.getElementById('furkation_2_27_b_tab').style.display = 'block';
			} else if (Furkation_27_b == 3) {
				document.getElementById('furkation_3_27_b_tab').style.display = 'block';
			}
			if (Furkation_27_dp == 1) {
				document.getElementById('furkation_1_27_dp').style.display = 'block';
			} else if (Furkation_27_dp == 2) {
				document.getElementById('furkation_2_27_dp').style.display = 'block';
			} else if (Furkation_27_dp == 3) {
				document.getElementById('furkation_3_27_dp').style.display = 'block';
			}
			if (Furkation_27_dp == 1) {
				document.getElementById('furkation_1_27_dp_tab').style.display = 'block';
			} else if (Furkation_27_dp == 2) {
				document.getElementById('furkation_2_27_dp_tab').style.display = 'block';
			} else if (Furkation_27_dp == 3) {
				document.getElementById('furkation_3_27_dp_tab').style.display = 'block';
			}
			if (Furkation_27_mp == 1) {
				document.getElementById('furkation_1_27_mp').style.display = 'block';
			} else if (Furkation_27_mp == 2) {
				document.getElementById('furkation_2_27_mp').style.display = 'block';
			} else if (Furkation_27_mp == 3) {
				document.getElementById('furkation_3_27_mp').style.display = 'block';
			}
			if (Furkation_27_mp == 1) {
				document.getElementById('furkation_1_27_mp_tab').style.display = 'block';
			} else if (Furkation_27_mp == 2) {
				document.getElementById('furkation_2_27_mp_tab').style.display = 'block';
			} else if (Furkation_27_mp == 3) {
				document.getElementById('furkation_3_27_mp_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_27_b() {
		if (Furkation_27_b == 0) {
			document.getElementById('furkation_1_27_b_tab').style.display = 'block';
			document.getElementById('furkation_2_27_b_tab').style.display = 'none';
			document.getElementById('furkation_3_27_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_b').style.display = 'block';
			document.getElementById('furkation_2_27_b').style.display = 'none';
			document.getElementById('furkation_3_27_b').style.display = 'none';

			Furkation_27_b = 1;
		}
		else if (Furkation_27_b == 1) {
			document.getElementById('furkation_1_27_b_tab').style.display = 'none';
			document.getElementById('furkation_2_27_b_tab').style.display = 'block';
			document.getElementById('furkation_3_27_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_b').style.display = 'none';
			document.getElementById('furkation_2_27_b').style.display = 'block';
			document.getElementById('furkation_3_27_b').style.display = 'none';
			
			Furkation_27_b = 2;
		}
		else if (Furkation_27_b == 2) {
			document.getElementById('furkation_1_27_b_tab').style.display = 'none';
			document.getElementById('furkation_2_27_b_tab').style.display = 'none';
			document.getElementById('furkation_3_27_b_tab').style.display = 'block';
			
			document.getElementById('furkation_1_27_b').style.display = 'none';
			document.getElementById('furkation_2_27_b').style.display = 'none';
			document.getElementById('furkation_3_27_b').style.display = 'block';
						
			Furkation_27_b = 3;
		}
		else if (Furkation_27_b == 3) {
			document.getElementById('furkation_1_27_b_tab').style.display = 'none';
			document.getElementById('furkation_2_27_b_tab').style.display = 'none';
			document.getElementById('furkation_3_27_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_b').style.display = 'none';
			document.getElementById('furkation_2_27_b').style.display = 'none';
			document.getElementById('furkation_3_27_b').style.display = 'none';
						
			Furkation_27_b = 0;
		}
	}

	function toggle_furcation_27_dp() {
		if (Furkation_27_dp == 0) {
			document.getElementById('furkation_1_27_dp_tab').style.display = 'block';
			document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_dp').style.display = 'block';
			document.getElementById('furkation_2_27_dp').style.display = 'none';
			document.getElementById('furkation_3_27_dp').style.display = 'none';

			Furkation_27_dp = 1;
		}
		else if (Furkation_27_dp == 1) {
			document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_27_dp_tab').style.display = 'block';
			document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_dp').style.display = 'none';
			document.getElementById('furkation_2_27_dp').style.display = 'block';
			document.getElementById('furkation_3_27_dp').style.display = 'none';
			
			Furkation_27_dp = 2;
		}
		else if (Furkation_27_dp == 2) {
			document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_27_dp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_27_dp').style.display = 'none';
			document.getElementById('furkation_2_27_dp').style.display = 'none';
			document.getElementById('furkation_3_27_dp').style.display = 'block';
						
			Furkation_27_dp = 3;
		}
		else if (Furkation_27_dp == 3) {
			document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_dp').style.display = 'none';
			document.getElementById('furkation_2_27_dp').style.display = 'none';
			document.getElementById('furkation_3_27_dp').style.display = 'none';
						
			Furkation_27_dp = 0;
		}
	}

	function toggle_furcation_27_mp() {
		if (Furkation_27_mp == 0) {
			document.getElementById('furkation_1_27_mp_tab').style.display = 'block';
			document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_27_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_mp').style.display = 'block';
			document.getElementById('furkation_2_27_mp').style.display = 'none';
			document.getElementById('furkation_3_27_mp').style.display = 'none';

			Furkation_27_mp = 1;
		}
		else if (Furkation_27_mp == 1) {
			document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_27_mp_tab').style.display = 'block';
			document.getElementById('furkation_3_27_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_mp').style.display = 'none';
			document.getElementById('furkation_2_27_mp').style.display = 'block';
			document.getElementById('furkation_3_27_mp').style.display = 'none';
			
			Furkation_27_mp = 2;
		}
		else if (Furkation_27_mp == 2) {
			document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_27_mp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_27_mp').style.display = 'none';
			document.getElementById('furkation_2_27_mp').style.display = 'none';
			document.getElementById('furkation_3_27_mp').style.display = 'block';
						
			Furkation_27_mp = 3;
		}
		else if (Furkation_27_mp == 3) {
			document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_27_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_27_mp').style.display = 'none';
			document.getElementById('furkation_2_27_mp').style.display = 'none';
			document.getElementById('furkation_3_27_mp').style.display = 'none';
						
			Furkation_27_mp = 0;
		}
	}

	function toggle_bop_27_db() {
		if (bop_27_db == 0) {
			bop_27_db = 1;
			document.getElementById('bop_27_db_rectangle').style.display = 'block';
		}
		else {
			bop_27_db = 0;
			document.getElementById('bop_27_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_27_b() {
		if (bop_27_b == 0) {
			bop_27_b = 1;
			document.getElementById('bop_27_b_rectangle').style.display = 'block';
		}
		else {
			bop_27_b = 0;
			document.getElementById('bop_27_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_27_mb() {
		if (bop_27_mb == 0) {
			bop_27_mb = 1;
			document.getElementById('bop_27_mb_rectangle').style.display = 'block';
		}
		else {
			bop_27_mb = 0;
			document.getElementById('bop_27_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_27_db() {
		if (pi_27_db == 0) {
			pi_27_db = 1;
			document.getElementById('pi_27_db_rectangle').style.display = 'block';
		}
		else {
			pi_27_db = 0;
			document.getElementById('pi_27_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_27_b() {
		if (pi_27_b == 0) {
			pi_27_b = 1;
			document.getElementById('pi_27_b_rectangle').style.display = 'block';
		}
		else {
			pi_27_b = 0;
			document.getElementById('pi_27_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_27_mb() {
		if (pi_27_mb == 0) {
			pi_27_mb = 1;
			document.getElementById('pi_27_mb_rectangle').style.display = 'block';
		}
		else {
			pi_27_mb = 0;
			document.getElementById('pi_27_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_27_dp() {
		if (bop_27_dp == 0) {
			bop_27_dp = 1;
			document.getElementById('bop_27_dp_rectangle').style.display = 'block';
		}
		else {
			bop_27_dp = 0;
			document.getElementById('bop_27_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_27_p() {
		if (bop_27_p == 0) {
			bop_27_p = 1;
			document.getElementById('bop_27_p_rectangle').style.display = 'block';
		}
		else {
			bop_27_p = 0;
			document.getElementById('bop_27_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_27_mp() {
		if (bop_27_mp == 0) {
			bop_27_mp = 1;
			document.getElementById('bop_27_mp_rectangle').style.display = 'block';
		}
		else {
			bop_27_mp = 0;
			document.getElementById('bop_27_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_27_dp() {
		if (pi_27_dp == 0) {
			pi_27_dp = 1;
			document.getElementById('pi_27_dp_rectangle').style.display = 'block';
		}
		else {
			pi_27_dp = 0;
			document.getElementById('pi_27_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_27_p() {
		if (pi_27_p == 0) {
			pi_27_p = 1;
			document.getElementById('pi_27_p_rectangle').style.display = 'block';
		}
		else {
			pi_27_p = 0;
			document.getElementById('pi_27_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_27_mp() {
		if (pi_27_mp == 0) {
			pi_27_mp = 1;
			document.getElementById('pi_27_mp_rectangle').style.display = 'block';
		}
		else {
			pi_27_mp = 0;
			document.getElementById('pi_27_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_27() {
		if (tooth_27 == 1) {
			
		// Variablen aus dem Formular
			pd_27_db = document.forms[0]["pd_27_db"].value;
			pd_27_b = document.forms[0]["pd_27_b"].value;
			pd_27_mb = document.forms[0]["pd_27_mb"].value;

			if (document.forms[0]["pd_27_dp"].value > 3) {document.forms[0]["pd_27_dp"].style.color = 'red';} else {document.forms[0]["pd_27_dp"].style.color = 'black'};
			if (document.forms[0]["pd_27_p"].value > 3) {document.forms[0]["pd_27_p"].style.color = 'red';} else {document.forms[0]["pd_27_p"].style.color = 'black'};
			if (document.forms[0]["pd_27_mp"].value > 3) {document.forms[0]["pd_27_mp"].style.color = 'red';} else {document.forms[0]["pd_27_mp"].style.color = 'black'};
			
			gm_27_db = document.forms[0]["gm_27_db"].value;
			gm_27_b = document.forms[0]["gm_27_b"].value;
			gm_27_mb = document.forms[0]["gm_27_mb"].value;
			
			pd_27_dp = document.forms[0]["pd_27_dp"].value;
			pd_27_p = document.forms[0]["pd_27_p"].value;
			pd_27_mp = document.forms[0]["pd_27_mp"].value;

			if (document.forms[0]["pd_27_db"].value > 3) {document.forms[0]["pd_27_db"].style.color = 'red';} else {document.forms[0]["pd_27_db"].style.color = 'black'};
			if (document.forms[0]["pd_27_b"].value > 3) {document.forms[0]["pd_27_b"].style.color = 'red';} else {document.forms[0]["pd_27_b"].style.color = 'black'};
			if (document.forms[0]["pd_27_mb"].value > 3) {document.forms[0]["pd_27_mb"].style.color = 'red';} else {document.forms[0]["pd_27_mb"].style.color = 'black'};
			
			gm_27_dp = document.forms[0]["gm_27_dp"].value;
			gm_27_p = document.forms[0]["gm_27_p"].value;
			gm_27_mp = document.forms[0]["gm_27_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 27 (bukkal) in der Bitmap
			var x_db_27 = 1011;							// distal 27
			var x_mb_27 = 972;							// mesial 27
			var x_b_27 = (x_db_27 + x_mb_27)/2;			// bukkal 27
			
		// Set der horizontalen Koordinaten von Zahn 27 (palatinal) in der Bitmap
			var x_dp_27 = 1015;							// distal 27
			var x_mp_27 = 976;							// mesial 27
			var x_p_27 = (x_dp_27 + x_mp_27)/2;			// palatinal 27
			
		// Set der vertikalen Koordinaten von Zahn 27 (bukkal) aus dem Formular
			var y_gm_27_db = gm_OK_b + 6.5 * gm_27_db;	// Margo Gingivae distobukkal 27
			var y_gm_27_b = gm_OK_b + 6.5 * gm_27_b;	// Margo Gingivae bukkal 27
			var y_gm_27_mb = gm_OK_b + 6.5 * gm_27_mb;	// Margo Gingivae mesiobukkal 27
			var y_pd_27_db = 6.5 * pd_27_db;			// Sondierungstiefe distobukkal 27
			var y_pd_27_b = 6.5 * pd_27_b;				// Sondierungstiefe bukkal 27
			var y_pd_27_mb = 6.5 * pd_27_mb;			// Sondierungstiefe mesiobukkal 27
			
		// Set der vertikalen Koordinaten von Zahn 27 (palatinal) aus dem Formular
			var y_gm_27_dp = gm_OK_p - 6.5 * gm_27_dp;	// Margo Gingivae distopalatinal 27
			var y_gm_27_p = gm_OK_p - 6.5 * gm_27_p;	// Margo Gingivae palatinal 27
			var y_gm_27_mp = gm_OK_p - 6.5 * gm_27_mp;	// Margo Gingivae mesiopalatinal 27
			var y_pd_27_dp = 6.5 * pd_27_dp;			// Sondierungstiefe distopalatinal 27
			var y_pd_27_p = 6.5 * pd_27_p;				// Sondierungstiefe palatinal 27
			var y_pd_27_mp = 6.5 * pd_27_mp;			// Sondierungstiefe mesiopalatinal 27
			
		// Berechnung des Attachmentniveaus 27 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_27_db = y_gm_27_db - y_pd_27_db;	// Attachmentniveau distobukkal 27
			var y_al_27_b = y_gm_27_b - y_pd_27_b;		// Attachmentniveau bukkal 27
			var y_al_27_mb = y_gm_27_mb - y_pd_27_mb;	// Attachmentniveau mesiobukkal 27
			
		// Berechnung des Attachmentniveaus 27 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_27_dp = y_gm_27_dp + y_pd_27_dp;	// Attachmentniveau distopalatinal 27
			var y_al_27_p = y_gm_27_p + y_pd_27_p;		// Attachmentniveau palatinal 27
			var y_al_27_mp = y_gm_27_mp + y_pd_27_mp;	// Attachmentniveau mesiopalatinal 27

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[27].storeCoordinates(
				x_db_27, x_mb_27, x_dp_27, x_mp_27, x_b_27, x_p_27,
				y_gm_27_db, y_gm_27_b, y_gm_27_mb, y_pd_27_db, y_pd_27_b, y_pd_27_mb,
				y_gm_27_dp, y_gm_27_p, y_gm_27_mp, y_pd_27_dp, y_pd_27_p, y_pd_27_mp,
				y_al_27_db, y_al_27_b, y_al_27_mb, y_al_27_dp, y_al_27_p, y_al_27_mp
			);
		
		// Parodontaltasche 27 bukkal zeichnen
			var string = 
				x_db_27 + ", " + y_al_27_db + "  " + 
				x_b_27 + ", " + y_al_27_b + "  " + 
				x_mb_27 + ", " + y_al_27_mb + "  " + 
				x_mb_27 + ", " + y_gm_27_mb + "  " + 
				x_b_27 + ", " + y_gm_27_b + "  " + 
				x_db_27 + ", " + y_gm_27_db;
			document.getElementById("polygon_27_b").setAttribute("points", string);
		// Attachmentniveau 27 bukkal zeichnen
			var string = 
				x_db_27 + ", " + y_al_27_db + "  " + 
				x_b_27 + ", " + y_al_27_b + "  " + 
				x_mb_27 + ", " + y_al_27_mb;
			document.getElementById("polyline_al_27_b").setAttribute("points", string);
		// Margo Gingivae 27 bukkal zeichnen
			var string =
				x_db_27 + ", " + y_gm_27_db + "  " + 
				x_b_27 + ", " + y_gm_27_b + "  " + 
				x_mb_27 + ", " + y_gm_27_mb;
			document.getElementById("polyline_gm_27_b").setAttribute("points", string);

		// Parodontaltasche 27 palatinal zeichnen
			var string = 
				x_dp_27 + ", " + y_al_27_dp + "  " + 
				x_p_27 + ", " + y_al_27_p + "  " + 
				x_mp_27 + ", " + y_al_27_mp + "  " + 
				x_mp_27 + ", " + y_gm_27_mp + "  " + 
				x_p_27 + ", " + y_gm_27_p + "  " + 
				x_dp_27 + ", " + y_gm_27_dp;
			document.getElementById("polygon_27_p").setAttribute("points", string);
		// Attachmentniveau 27 palatinal zeichnen
			var string = 
				x_dp_27 + ", " + y_al_27_dp + "  " + 
				x_p_27 + ", " + y_al_27_p + "  " + 
				x_mp_27 + ", " + y_al_27_mp;
			document.getElementById("polyline_al_27_p").setAttribute("points", string);
		// Margo Gingivae 27 palatinal zeichnen
			var string =
				x_dp_27 + ", " + y_gm_27_dp + "  " + 
				x_p_27 + ", " + y_gm_27_p + "  " + 
				x_mp_27 + ", " + y_gm_27_mp;
			document.getElementById("polyline_gm_27_p").setAttribute("points", string);
		}
        if (tooth_27 == 1 && tooth_26 == 1) {

            pd_26_db = document.forms[0]["pd_26_db"].value;
			gm_26_db = document.forms[0]["gm_26_db"].value;
			
			pd_26_dp = document.forms[0]["pd_26_dp"].value;
			gm_26_dp = document.forms[0]["gm_26_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 26 (bukkal) in der Bitmap
			var x_db_26 = 961;							// distal 26
			
		// Set der horizontalen Koordinaten von Zahn 26 (palatinal) in der Bitmap
			var x_dp_26 = 960;							// distal 26
			
		// Set der vertikalen Koordinaten von Zahn 26 (bukkal) aus dem Formular
			var y_gm_26_db = gm_OK_b + 6.5 * gm_26_db;	// Margo Gingivae distobukkal 26
			var y_pd_26_db = 6.5 * pd_26_db;			// Sondierungstiefe distobukkal 26
			
		// Set der vertikalen Koordinaten von Zahn 26 (palatinal) aus dem Formular
			var y_gm_26_dp = gm_OK_p - 6.5 * gm_26_dp;	// Margo Gingivae distopalatinal 26
			var y_pd_26_dp = 6.5 * pd_26_dp;			// Sondierungstiefe distopalatinal 26
			
		// Berechnung des Attachmentniveaus 26 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_26_db = y_gm_26_db - y_pd_26_db;	// Attachmentniveau distobukkal 26
			
		// Berechnung des Attachmentniveaus 26 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_26_dp = y_gm_26_dp + y_pd_26_dp;	// Attachmentniveau distopalatinal 26

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
        if (tooth_28 == 1 && tooth_27 == 1) {

            pd_28_mb = document.forms[0]["pd_28_mb"].value;
			gm_28_mb = document.forms[0]["gm_28_mb"].value;
			
			pd_28_mp = document.forms[0]["pd_28_mp"].value;
			gm_28_mp = document.forms[0]["gm_28_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 28 (bukkal) in der Bitmap
			var x_mb_28 = 1026;							// mesial 28
			
		// Set der horizontalen Koordinaten von Zahn 28 (palatinal) in der Bitmap
			var x_mp_28 = 1028;							// mesial 28
			
		// Set der vertikalen Koordinaten von Zahn 28 (bukkal) aus dem Formular
			var y_gm_28_mb = gm_OK_b + 6.5 * gm_28_mb;	// Margo Gingivae mesiobukkal 28
			var y_pd_28_mb = 6.5 * pd_28_mb;			// Sondierungstiefe mesiobukkal 28
			
		// Set der vertikalen Koordinaten von Zahn 28 (palatinal) aus dem Formular
			var y_gm_28_mp = gm_OK_p - 6.5 * gm_28_mp;	// Margo Gingivae mesiopalatinal 28
			var y_pd_28_mp = 6.5 * pd_28_mp;			// Sondierungstiefe mesiopalatinal 28
			
		// Berechnung des Attachmentniveaus 28 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_28_mb = y_gm_28_mb - y_pd_28_mb;	// Attachmentniveau mesiobukkal 28
			
		// Berechnung des Attachmentniveaus 28 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_28_mp = y_gm_28_mp + y_pd_28_mp;	// Attachmentniveau mesiopalatinal 28

		// Parodontaltasche inter_28_27 bukkal zeichnen
			var string = 
				x_mb_28 + ", " + y_al_28_mb + "  " + 
				x_db_27 + ", " + y_al_27_db + "  " + 
				x_db_27 + ", " + y_gm_27_db + "  " + 
				x_mb_28 + ", " + y_gm_28_mb;
			document.getElementById("polygon_inter_28_27_b").setAttribute("points", string);
		// Attachmentniveau inter_28_27 bukkal zeichnen
			var string = 
				x_mb_28 + ", " + y_al_28_mb + "  " + 
				x_db_27 + ", " + y_al_27_db;
			document.getElementById("polyline_al_inter_28_27_b").setAttribute("points", string);
		// Margo Gingivae inter_28_27 bukkal zeichnen
			var string =
				x_mb_28 + ", " + y_gm_28_mb + "  " + 
				x_db_27 + ", " + y_gm_27_db;
			document.getElementById("polyline_gm_inter_28_27_b").setAttribute("points", string);

        // Parodontaltasche inter_28_27 palatinal zeichnen
			var string = 
				x_mp_28 + ", " + y_al_28_mp + "  " + 
				x_dp_27 + ", " + y_al_27_dp + "  " + 
				x_dp_27 + ", " + y_gm_27_dp + "  " + 
				x_mp_28 + ", " + y_gm_28_mp;
			document.getElementById("polygon_inter_28_27_p").setAttribute("points", string);
		// Attachmentniveau inter_28_27 palatinal zeichnen
			var string = 
				x_mp_28 + ", " + y_al_28_mp + "  " + 
				x_dp_27 + ", " + y_al_27_dp;
			document.getElementById("polyline_al_inter_28_27_p").setAttribute("points", string);
		// Margo Gingivae inter_28_27 palatinal zeichnen
			var string =
				x_mp_28 + ", " + y_gm_28_mp + "  " + 
				x_dp_27 + ", " + y_gm_27_dp;
			document.getElementById("polyline_gm_inter_28_27_p").setAttribute("points", string);
		}
	}