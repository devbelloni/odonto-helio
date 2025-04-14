	// Definition der Variablen für das Formular
		var tooth_14 = 1;
		var Furkation_14_dp = 0;
		var Furkation_14_mp = 0;
		var Implantat_14 = 0;
		var bop_14_db = 0;
		var bop_14_b = 0;
		var bop_14_mb = 0;
		var pi_14_db = 0;
		var pi_14_b = 0;
		var pi_14_mb = 0;
		var bop_14_dp = 0;
		var bop_14_p = 0;
		var bop_14_mp = 0;
		var pi_14_dp = 0;
		var pi_14_p = 0;
		var pi_14_mp = 0;
		var gm_14_db = 0;
		var gm_14_b = 0;
		var gm_14_mb = 0;
		var pd_14_db = 0;
		var pd_14_b = 0;
		var pd_14_mb = 0;
		var gm_14_dp = 0;
		var gm_14_p = 0;
		var gm_14_mp = 0;
		var pd_14_dp = 0;
		var pd_14_p = 0;
		var pd_14_mp = 0;

	function clear_data_14() {
        if (tooth_14 == 1) {
			gm_14_db = 0;
			gm_14_b = 0;
			gm_14_mb = 0;
			pd_14_db = 0;
			pd_14_b = 0;
			pd_14_mb = 0;
	
				document.getElementById('gm_14_db_txt').value = 0;
				document.getElementById('gm_14_b_txt').value = 0;
				document.getElementById('gm_14_mb_txt').value = 0;
				
				document.getElementById('pd_14_db_txt').value = 0;
				document.getElementById('pd_14_b_txt').value = 0;
				document.getElementById('pd_14_mb_txt').value = 0;
			
				document.forms[0]["pd_14_db"].style.color = 'black'
				document.forms[0]["pd_14_b"].style.color = 'black'
				document.forms[0]["pd_14_mb"].style.color = 'black'
			
			gm_14_dp = 0;
			gm_14_p = 0;
			gm_14_mp = 0;
			pd_14_dp = 0;
			pd_14_p = 0;
			pd_14_mp = 0;

				document.getElementById('gm_14_dp_txt').value = 0;
				document.getElementById('gm_14_p_txt').value = 0;
				document.getElementById('gm_14_mp_txt').value = 0;
				
				document.getElementById('pd_14_dp_txt').value = 0;
				document.getElementById('pd_14_p_txt').value = 0;
				document.getElementById('pd_14_mp_txt').value = 0;

				document.forms[0]["pd_14_dp"].style.color = 'black'
				document.forms[0]["pd_14_p"].style.color = 'black'
				document.forms[0]["pd_14_mp"].style.color = 'black'
			
			change_probing_14();
			
			mobility_14 = 0;

				document.getElementById('mobility_14_txt').value = "0";

			note_14 = "";

				document.getElementById('note_14_txt').value = "";

			Furkation_14_dp = 0;
			Furkation_14_mp = 0;

				document.getElementById('furkation_1_14_dp').style.display = 'none';
				document.getElementById('furkation_2_14_dp').style.display = 'none';
				document.getElementById('furkation_3_14_dp').style.display = 'none';
					
				document.getElementById('furkation_1_14_dp_tab').style.display = 'none';
				document.getElementById('furkation_2_14_dp_tab').style.display = 'none';
				document.getElementById('furkation_3_14_dp_tab').style.display = 'none';
				
				document.getElementById('furkation_1_14_mp').style.display = 'none';
				document.getElementById('furkation_2_14_mp').style.display = 'none';
				document.getElementById('furkation_3_14_mp').style.display = 'none';
				
				document.getElementById('furkation_1_14_mp_tab').style.display = 'none';
				document.getElementById('furkation_2_14_mp_tab').style.display = 'none';
				document.getElementById('furkation_3_14_mp_tab').style.display = 'none';
	
			bop_14_db = 0;
			bop_14_b = 0;
			bop_14_mb = 0;
					
			bop_14_dp = 0;
			bop_14_p = 0;
			bop_14_mp = 0;
					
				document.getElementById('bop_14_db_rectangle').style.display = 'none';
				document.getElementById('bop_14_b_rectangle').style.display = 'none';
				document.getElementById('bop_14_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_14_dp_rectangle').style.display = 'none';
				document.getElementById('bop_14_p_rectangle').style.display = 'none';
				document.getElementById('bop_14_mp_rectangle').style.display = 'none';
				
			pi_14_db = 0;
			pi_14_b = 0;
			pi_14_mb = 0;
					
			pi_14_dp = 0;
			pi_14_p = 0;
			pi_14_mp = 0;

				document.getElementById('pi_14_db_rectangle').style.display = 'none';
				document.getElementById('pi_14_b_rectangle').style.display = 'none';
				document.getElementById('pi_14_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_14_dp_rectangle').style.display = 'none';
				document.getElementById('pi_14_p_rectangle').style.display = 'none';
				document.getElementById('pi_14_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_14() {
		if (tooth_14 === 1) {
			tooth_14 = 0;
			document.getElementById('tooth_line_14_b').style.display = 'block';
			document.getElementById('tooth_line_14_p').style.display = 'block';
			
			document.getElementById('mobility_14_txt').style.display = 'none';
			
			document.getElementById('implantat_14_btn').style.display = 'none';
			document.getElementById('implantat_14_tab').style.display = 'none';
			document.getElementById('implantat_14_b_image').style.display = 'none';
			document.getElementById('implantat_14_p_image').style.display = 'none';
			
			document.getElementById('furkation_14_dp_btn').style.display = 'none';
			document.getElementById('furkation_14_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_14_dp').style.display = 'none';
			document.getElementById('furkation_2_14_dp').style.display = 'none';
			document.getElementById('furkation_3_14_dp').style.display = 'none';
			
			document.getElementById('furkation_1_14_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_14_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_14_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_14_mp').style.display = 'none';
			document.getElementById('furkation_2_14_mp').style.display = 'none';
			document.getElementById('furkation_3_14_mp').style.display = 'none';
			
			document.getElementById('furkation_1_14_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_14_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_14_mp_tab').style.display = 'none';
			
			document.getElementById('gm_14_db_txt').style.display = 'none';
			document.getElementById('gm_14_b_txt').style.display = 'none';
			document.getElementById('gm_14_mb_txt').style.display = 'none';
			
			document.getElementById('pd_14_db_txt').style.display = 'none';
			document.getElementById('pd_14_b_txt').style.display = 'none';
			document.getElementById('pd_14_mb_txt').style.display = 'none';
			
			document.getElementById('gm_14_dp_txt').style.display = 'none';
			document.getElementById('gm_14_p_txt').style.display = 'none';
			document.getElementById('gm_14_mp_txt').style.display = 'none';
			
			document.getElementById('pd_14_dp_txt').style.display = 'none';
			document.getElementById('pd_14_p_txt').style.display = 'none';
			document.getElementById('pd_14_mp_txt').style.display = 'none';
			
			document.getElementById('bop_14_db_rectangle').style.display = 'none';
			document.getElementById('bop_14_b_rectangle').style.display = 'none';
			document.getElementById('bop_14_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_14_dp_rectangle').style.display = 'none';
			document.getElementById('bop_14_p_rectangle').style.display = 'none';
			document.getElementById('bop_14_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_14_db_btn').style.display = 'none';
			document.getElementById('bop_14_b_btn').style.display = 'none';
			document.getElementById('bop_14_mb_btn').style.display = 'none';
			
			document.getElementById('bop_14_dp_btn').style.display = 'none';
			document.getElementById('bop_14_p_btn').style.display = 'none';
			document.getElementById('bop_14_mp_btn').style.display = 'none';
			
			document.getElementById('pi_14_db_rectangle').style.display = 'none';
			document.getElementById('pi_14_b_rectangle').style.display = 'none';
			document.getElementById('pi_14_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_14_dp_rectangle').style.display = 'none';
			document.getElementById('pi_14_p_rectangle').style.display = 'none';
			document.getElementById('pi_14_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_14_db_btn').style.display = 'none';
			document.getElementById('pi_14_b_btn').style.display = 'none';
			document.getElementById('pi_14_mb_btn').style.display = 'none';
			
			document.getElementById('pi_14_dp_btn').style.display = 'none';
			document.getElementById('pi_14_p_btn').style.display = 'none';
			document.getElementById('pi_14_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_14_b').style.display = 'none';
			document.getElementById('polyline_al_14_b').style.display = 'none';
			document.getElementById('polyline_gm_14_b').style.display = 'none';
			
			document.getElementById('polygon_14_p').style.display = 'none';
			document.getElementById('polyline_al_14_p').style.display = 'none';
			document.getElementById('polyline_gm_14_p').style.display = 'none';
			
			document.getElementById('polygon_inter_15_14_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_15_14_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_15_14_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_15_14_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_15_14_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_15_14_p').style.display = 'none';            
            
			document.getElementById('polygon_inter_14_13_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_14_13_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_14_13_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_14_13_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_14_13_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_14_13_p').style.display = 'none';            
			
			document.getElementById('note_14_txt').style.display = 'none';
		}
		else if (Implantat_14 !== 1) {
			tooth_14 = 1;
			document.getElementById('tooth_line_14_b').style.display = 'none';
			document.getElementById('tooth_line_14_p').style.display = 'none';

			document.getElementById('mobility_14_txt').style.display = 'block';

			document.getElementById('implantat_14_btn').style.display = 'block';

			document.getElementById('furkation_14_dp_btn').style.display = 'block';
			document.getElementById('furkation_14_mp_btn').style.display = 'block';
			
			document.getElementById('gm_14_db_txt').style.display = 'block';
			document.getElementById('gm_14_b_txt').style.display = 'block';
			document.getElementById('gm_14_mb_txt').style.display = 'block';
			
			document.getElementById('pd_14_db_txt').style.display = 'block';
			document.getElementById('pd_14_b_txt').style.display = 'block';
			document.getElementById('pd_14_mb_txt').style.display = 'block';
			
			document.getElementById('gm_14_dp_txt').style.display = 'block';
			document.getElementById('gm_14_p_txt').style.display = 'block';
			document.getElementById('gm_14_mp_txt').style.display = 'block';
			
			document.getElementById('pd_14_dp_txt').style.display = 'block';
			document.getElementById('pd_14_p_txt').style.display = 'block';
			document.getElementById('pd_14_mp_txt').style.display = 'block';
			
			document.getElementById('note_14_txt').style.display = 'block';

			document.getElementById('polygon_14_b').style.display = 'block';
			document.getElementById('polyline_al_14_b').style.display = 'block';
			document.getElementById('polyline_gm_14_b').style.display = 'block';
			
			document.getElementById('polygon_14_p').style.display = 'block';
			document.getElementById('polyline_al_14_p').style.display = 'block';
			document.getElementById('polyline_gm_14_p').style.display = 'block';

            if (tooth_15 == 1 && tooth_14 == 1) {
				document.getElementById('polygon_inter_15_14_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_15_14_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_15_14_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_15_14_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_15_14_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_15_14_p').style.display = 'block';            
            }
            
            if (tooth_14 == 1 && tooth_13 == 1) {
				document.getElementById('polygon_inter_14_13_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_14_13_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_14_13_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_14_13_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_14_13_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_14_13_p').style.display = 'block';            
            }
            
			if (Furkation_14_dp == 1) {
				document.getElementById('furkation_1_14_dp').style.display = 'block';
			} else if (Furkation_14_dp == 2) {
				document.getElementById('furkation_2_14_dp').style.display = 'block';
			} else if (Furkation_14_dp == 3) {
				document.getElementById('furkation_3_14_dp').style.display = 'block';
			}
			if (Furkation_14_dp == 1) {
				document.getElementById('furkation_1_14_dp_tab').style.display = 'block';
			} else if (Furkation_14_dp == 2) {
				document.getElementById('furkation_2_14_dp_tab').style.display = 'block';
			} else if (Furkation_14_dp == 3) {
				document.getElementById('furkation_3_14_dp_tab').style.display = 'block';
			}
			if (Furkation_14_mp == 1) {
				document.getElementById('furkation_1_14_mp').style.display = 'block';
			} else if (Furkation_14_mp == 2) {
				document.getElementById('furkation_2_14_mp').style.display = 'block';
			} else if (Furkation_14_mp == 3) {
				document.getElementById('furkation_3_14_mp').style.display = 'block';
			}
			if (Furkation_14_mp == 1) {
				document.getElementById('furkation_1_14_mp_tab').style.display = 'block';
			} else if (Furkation_14_mp == 2) {
				document.getElementById('furkation_2_14_mp_tab').style.display = 'block';
			} else if (Furkation_14_mp == 3) {
				document.getElementById('furkation_3_14_mp_tab').style.display = 'block';
			}

			document.getElementById('bop_14_db_btn').style.display = 'block';
			document.getElementById('bop_14_b_btn').style.display = 'block';
			document.getElementById('bop_14_mb_btn').style.display = 'block';

			document.getElementById('bop_14_dp_btn').style.display = 'block';
			document.getElementById('bop_14_p_btn').style.display = 'block';
			document.getElementById('bop_14_mp_btn').style.display = 'block';
			
			if (bop_14_db == 1) {
				document.getElementById('bop_14_db_rectangle').style.display = 'block';
			}
			if (bop_14_b == 1) {
				document.getElementById('bop_14_b_rectangle').style.display = 'block';
			}
			if (bop_14_mb == 1) {
				document.getElementById('bop_14_mb_rectangle').style.display = 'block';
			}
			if (bop_14_dp == 1) {
				document.getElementById('bop_14_dp_rectangle').style.display = 'block';
			}
			if (bop_14_p == 1) {
				document.getElementById('bop_14_p_rectangle').style.display = 'block';
			}
			if (bop_14_mp == 1) {
				document.getElementById('bop_14_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_14_db_btn').style.display = 'block';
			document.getElementById('pi_14_b_btn').style.display = 'block';
			document.getElementById('pi_14_mb_btn').style.display = 'block';

			document.getElementById('pi_14_dp_btn').style.display = 'block';
			document.getElementById('pi_14_p_btn').style.display = 'block';
			document.getElementById('pi_14_mp_btn').style.display = 'block';
			
			if (pi_14_db == 1) {
				document.getElementById('pi_14_db_rectangle').style.display = 'block';
			}
			if (pi_14_b == 1) {
				document.getElementById('pi_14_b_rectangle').style.display = 'block';
			}
			if (pi_14_mb == 1) {
				document.getElementById('pi_14_mb_rectangle').style.display = 'block';
			}
			if (pi_14_dp == 1) {
				document.getElementById('pi_14_dp_rectangle').style.display = 'block';
			}
			if (pi_14_p == 1) {
				document.getElementById('pi_14_p_rectangle').style.display = 'block';
			}
			if (pi_14_mp == 1) {
				document.getElementById('pi_14_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_14 == 1) {
			tooth_14 = 1;
			document.getElementById('tooth_line_14_b').style.display = 'none';
			document.getElementById('tooth_line_14_p').style.display = 'none';

			document.getElementById('mobility_14_txt').style.display = 'block';
			
			document.getElementById('note_14_txt').style.display = 'block';

			document.getElementById('implantat_14_btn').style.display = 'block';
			document.getElementById('implantat_14_tab').style.display = 'block';
			document.getElementById('implantat_14_b_image').style.display = 'block';
			document.getElementById('implantat_14_p_image').style.display = 'block';

			document.getElementById('gm_14_db_txt').style.display = 'block';
			document.getElementById('gm_14_b_txt').style.display = 'block';
			document.getElementById('gm_14_mb_txt').style.display = 'block';
			
			document.getElementById('pd_14_db_txt').style.display = 'block';
			document.getElementById('pd_14_b_txt').style.display = 'block';
			document.getElementById('pd_14_mb_txt').style.display = 'block';
			
			document.getElementById('gm_14_dp_txt').style.display = 'block';
			document.getElementById('gm_14_p_txt').style.display = 'block';
			document.getElementById('gm_14_mp_txt').style.display = 'block';
			
			document.getElementById('pd_14_dp_txt').style.display = 'block';
			document.getElementById('pd_14_p_txt').style.display = 'block';
			document.getElementById('pd_14_mp_txt').style.display = 'block';

			document.getElementById('polygon_14_b').style.display = 'block';
			document.getElementById('polyline_al_14_b').style.display = 'block';
			document.getElementById('polyline_gm_14_b').style.display = 'block';
			
			document.getElementById('polygon_14_p').style.display = 'block';
			document.getElementById('polyline_al_14_p').style.display = 'block';
			document.getElementById('polyline_gm_14_p').style.display = 'block';

            if (tooth_15 == 1 && tooth_14 == 1) {
				document.getElementById('polygon_inter_15_14_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_15_14_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_15_14_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_15_14_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_15_14_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_15_14_p').style.display = 'block';            
            }
            
            if (tooth_14 == 1 && tooth_13 == 1) {
				document.getElementById('polygon_inter_14_13_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_14_13_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_14_13_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_14_13_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_14_13_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_14_13_p').style.display = 'block';            
            }

			document.getElementById('bop_14_db_btn').style.display = 'block';
			document.getElementById('bop_14_b_btn').style.display = 'block';
			document.getElementById('bop_14_mb_btn').style.display = 'block';

			document.getElementById('bop_14_dp_btn').style.display = 'block';
			document.getElementById('bop_14_p_btn').style.display = 'block';
			document.getElementById('bop_14_mp_btn').style.display = 'block';
			
			document.getElementById('pi_14_db_btn').style.display = 'block';
			document.getElementById('pi_14_b_btn').style.display = 'block';
			document.getElementById('pi_14_mb_btn').style.display = 'block';

			document.getElementById('pi_14_dp_btn').style.display = 'block';
			document.getElementById('pi_14_p_btn').style.display = 'block';
			document.getElementById('pi_14_mp_btn').style.display = 'block';
			
			if (bop_14_db == 1) {
				document.getElementById('bop_14_db_rectangle').style.display = 'block';
			}
			if (bop_14_b == 1) {
				document.getElementById('bop_14_b_rectangle').style.display = 'block';
			}
			if (bop_14_mb == 1) {
				document.getElementById('bop_14_mb_rectangle').style.display = 'block';
			}
			if (bop_14_dp == 1) {
				document.getElementById('bop_14_dp_rectangle').style.display = 'block';
			}
			if (bop_14_p == 1) {
				document.getElementById('bop_14_p_rectangle').style.display = 'block';
			}
			if (bop_14_mp == 1) {
				document.getElementById('bop_14_mp_rectangle').style.display = 'block';
			}
			
			if (pi_14_db == 1) {
				document.getElementById('pi_14_db_rectangle').style.display = 'block';
			}
			if (pi_14_b == 1) {
				document.getElementById('pi_14_b_rectangle').style.display = 'block';
			}
			if (pi_14_mb == 1) {
				document.getElementById('pi_14_mb_rectangle').style.display = 'block';
			}
			if (pi_14_dp == 1) {
				document.getElementById('pi_14_dp_rectangle').style.display = 'block';
			}
			if (pi_14_p == 1) {
				document.getElementById('pi_14_p_rectangle').style.display = 'block';
			}
			if (pi_14_mp == 1) {
				document.getElementById('pi_14_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_14();
	}

	function toggle_implant_14() {
		if (Implantat_14 == 0) {
			Implantat_14 = 1;
			
			document.getElementById('implantat_14_b_image').style.display = 'block';
			document.getElementById('implantat_14_p_image').style.display = 'block';
			document.getElementById('implantat_14_tab').style.display = 'block';
			
			document.getElementById('furkation_14_dp_btn').style.display = 'none';
			document.getElementById('furkation_14_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_14_dp').style.display = 'none';
			document.getElementById('furkation_2_14_dp').style.display = 'none';
			document.getElementById('furkation_3_14_dp').style.display = 'none';
			
			document.getElementById('furkation_1_14_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_14_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_14_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_14_mp').style.display = 'none';
			document.getElementById('furkation_2_14_mp').style.display = 'none';
			document.getElementById('furkation_3_14_mp').style.display = 'none';
			
			document.getElementById('furkation_1_14_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_14_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_14_mp_tab').style.display = 'none';
		}
		else {
			Implantat_14 = 0;
			
			document.getElementById('implantat_14_b_image').style.display = 'none';
			document.getElementById('implantat_14_p_image').style.display = 'none';
			document.getElementById('implantat_14_tab').style.display = 'none';
			
			document.getElementById('furkation_14_dp_btn').style.display = 'block';
			document.getElementById('furkation_14_mp_btn').style.display = 'block';

			if (Furkation_14_dp == 1) {
				document.getElementById('furkation_1_14_dp').style.display = 'block';
			} else if (Furkation_14_dp == 2) {
				document.getElementById('furkation_2_14_dp').style.display = 'block';
			} else if (Furkation_14_dp == 3) {
				document.getElementById('furkation_3_14_dp').style.display = 'block';
			}
			if (Furkation_14_dp == 1) {
				document.getElementById('furkation_1_14_dp_tab').style.display = 'block';
			} else if (Furkation_14_dp == 2) {
				document.getElementById('furkation_2_14_dp_tab').style.display = 'block';
			} else if (Furkation_14_dp == 3) {
				document.getElementById('furkation_3_14_dp_tab').style.display = 'block';
			}
			if (Furkation_14_mp == 1) {
				document.getElementById('furkation_1_14_mp').style.display = 'block';
			} else if (Furkation_14_mp == 2) {
				document.getElementById('furkation_2_14_mp').style.display = 'block';
			} else if (Furkation_14_mp == 3) {
				document.getElementById('furkation_3_14_mp').style.display = 'block';
			}
			if (Furkation_14_mp == 1) {
				document.getElementById('furkation_1_14_mp_tab').style.display = 'block';
			} else if (Furkation_14_mp == 2) {
				document.getElementById('furkation_2_14_mp_tab').style.display = 'block';
			} else if (Furkation_14_mp == 3) {
				document.getElementById('furkation_3_14_mp_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_14_dp() {
		if (Furkation_14_dp == 0) {
			document.getElementById('furkation_1_14_dp_tab').style.display = 'block';
			document.getElementById('furkation_2_14_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_14_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_14_dp').style.display = 'block';
			document.getElementById('furkation_2_14_dp').style.display = 'none';
			document.getElementById('furkation_3_14_dp').style.display = 'none';

			Furkation_14_dp = 1;
		}
		else if (Furkation_14_dp == 1) {
			document.getElementById('furkation_1_14_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_14_dp_tab').style.display = 'block';
			document.getElementById('furkation_3_14_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_14_dp').style.display = 'none';
			document.getElementById('furkation_2_14_dp').style.display = 'block';
			document.getElementById('furkation_3_14_dp').style.display = 'none';
			
			Furkation_14_dp = 2;
		}
		else if (Furkation_14_dp == 2) {
			document.getElementById('furkation_1_14_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_14_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_14_dp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_14_dp').style.display = 'none';
			document.getElementById('furkation_2_14_dp').style.display = 'none';
			document.getElementById('furkation_3_14_dp').style.display = 'block';
						
			Furkation_14_dp = 3;
		}
		else if (Furkation_14_dp == 3) {
			document.getElementById('furkation_1_14_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_14_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_14_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_14_dp').style.display = 'none';
			document.getElementById('furkation_2_14_dp').style.display = 'none';
			document.getElementById('furkation_3_14_dp').style.display = 'none';
						
			Furkation_14_dp = 0;
		}
	}

	function toggle_furcation_14_mp() {
		if (Furkation_14_mp == 0) {
			document.getElementById('furkation_1_14_mp_tab').style.display = 'block';
			document.getElementById('furkation_2_14_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_14_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_14_mp').style.display = 'block';
			document.getElementById('furkation_2_14_mp').style.display = 'none';
			document.getElementById('furkation_3_14_mp').style.display = 'none';

			Furkation_14_mp = 1;
		}
		else if (Furkation_14_mp == 1) {
			document.getElementById('furkation_1_14_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_14_mp_tab').style.display = 'block';
			document.getElementById('furkation_3_14_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_14_mp').style.display = 'none';
			document.getElementById('furkation_2_14_mp').style.display = 'block';
			document.getElementById('furkation_3_14_mp').style.display = 'none';
			
			Furkation_14_mp = 2;
		}
		else if (Furkation_14_mp == 2) {
			document.getElementById('furkation_1_14_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_14_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_14_mp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_14_mp').style.display = 'none';
			document.getElementById('furkation_2_14_mp').style.display = 'none';
			document.getElementById('furkation_3_14_mp').style.display = 'block';
						
			Furkation_14_mp = 3;
		}
		else if (Furkation_14_mp == 3) {
			document.getElementById('furkation_1_14_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_14_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_14_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_14_mp').style.display = 'none';
			document.getElementById('furkation_2_14_mp').style.display = 'none';
			document.getElementById('furkation_3_14_mp').style.display = 'none';
						
			Furkation_14_mp = 0;
		}
	}

	function toggle_bop_14_db() {
		if (bop_14_db == 0) {
			bop_14_db = 1;
			document.getElementById('bop_14_db_rectangle').style.display = 'block';
		}
		else {
			bop_14_db = 0;
			document.getElementById('bop_14_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_14_b() {
		if (bop_14_b == 0) {
			bop_14_b = 1;
			document.getElementById('bop_14_b_rectangle').style.display = 'block';
		}
		else {
			bop_14_b = 0;
			document.getElementById('bop_14_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_14_mb() {
		if (bop_14_mb == 0) {
			bop_14_mb = 1;
			document.getElementById('bop_14_mb_rectangle').style.display = 'block';
		}
		else {
			bop_14_mb = 0;
			document.getElementById('bop_14_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_14_db() {
		if (pi_14_db == 0) {
			pi_14_db = 1;
			document.getElementById('pi_14_db_rectangle').style.display = 'block';
		}
		else {
			pi_14_db = 0;
			document.getElementById('pi_14_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_14_b() {
		if (pi_14_b == 0) {
			pi_14_b = 1;
			document.getElementById('pi_14_b_rectangle').style.display = 'block';
		}
		else {
			pi_14_b = 0;
			document.getElementById('pi_14_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_14_mb() {
		if (pi_14_mb == 0) {
			pi_14_mb = 1;
			document.getElementById('pi_14_mb_rectangle').style.display = 'block';
		}
		else {
			pi_14_mb = 0;
			document.getElementById('pi_14_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_14_dp() {
		if (bop_14_dp == 0) {
			bop_14_dp = 1;
			document.getElementById('bop_14_dp_rectangle').style.display = 'block';
		}
		else {
			bop_14_dp = 0;
			document.getElementById('bop_14_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_14_p() {
		if (bop_14_p == 0) {
			bop_14_p = 1;
			document.getElementById('bop_14_p_rectangle').style.display = 'block';
		}
		else {
			bop_14_p = 0;
			document.getElementById('bop_14_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_14_mp() {
		if (bop_14_mp == 0) {
			bop_14_mp = 1;
			document.getElementById('bop_14_mp_rectangle').style.display = 'block';
		}
		else {
			bop_14_mp = 0;
			document.getElementById('bop_14_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_14_dp() {
		if (pi_14_dp == 0) {
			pi_14_dp = 1;
			document.getElementById('pi_14_dp_rectangle').style.display = 'block';
		}
		else {
			pi_14_dp = 0;
			document.getElementById('pi_14_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_14_p() {
		if (pi_14_p == 0) {
			pi_14_p = 1;
			document.getElementById('pi_14_p_rectangle').style.display = 'block';
		}
		else {
			pi_14_p = 0;
			document.getElementById('pi_14_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_14_mp() {
		if (pi_14_mp == 0) {
			pi_14_mp = 1;
			document.getElementById('pi_14_mp_rectangle').style.display = 'block';
		}
		else {
			pi_14_mp = 0;
			document.getElementById('pi_14_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_14() {
		if (tooth_14 == 1) {
			
		// Variablen aus dem Formular
			pd_14_db = document.forms[0]["pd_14_db"].value;
			pd_14_b = document.forms[0]["pd_14_b"].value;
			pd_14_mb = document.forms[0]["pd_14_mb"].value;

			if (document.forms[0]["pd_14_dp"].value > 3) {document.forms[0]["pd_14_dp"].style.color = 'red';} else {document.forms[0]["pd_14_dp"].style.color = 'black'}
			if (document.forms[0]["pd_14_p"].value > 3) {document.forms[0]["pd_14_p"].style.color = 'red';} else {document.forms[0]["pd_14_p"].style.color = 'black'}
			if (document.forms[0]["pd_14_mp"].value > 3) {document.forms[0]["pd_14_mp"].style.color = 'red';} else {document.forms[0]["pd_14_mp"].style.color = 'black'}
			
			gm_14_db = document.forms[0]["gm_14_db"].value;
			gm_14_b = document.forms[0]["gm_14_b"].value;
			gm_14_mb = document.forms[0]["gm_14_mb"].value;
			
			pd_14_dp = document.forms[0]["pd_14_dp"].value;
			pd_14_p = document.forms[0]["pd_14_p"].value;
			pd_14_mp = document.forms[0]["pd_14_mp"].value;

			if (document.forms[0]["pd_14_db"].value > 3) {document.forms[0]["pd_14_db"].style.color = 'red';} else {document.forms[0]["pd_14_db"].style.color = 'black'}
			if (document.forms[0]["pd_14_b"].value > 3) {document.forms[0]["pd_14_b"].style.color = 'red';} else {document.forms[0]["pd_14_b"].style.color = 'black'}
			if (document.forms[0]["pd_14_mb"].value > 3) {document.forms[0]["pd_14_mb"].style.color = 'red';} else {document.forms[0]["pd_14_mb"].style.color = 'black'}
			
			gm_14_dp = document.forms[0]["gm_14_dp"].value;
			gm_14_p = document.forms[0]["gm_14_p"].value;
			gm_14_mp = document.forms[0]["gm_14_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 14 (bukkal) in der Bitmap
			var x_db_14 = 504;							// distal 14
			var x_mb_14 = 528;							// mesial 14
			var x_b_14 = (x_db_14 + x_mb_14)/2;			// bukkal 14
			
		// Set der horizontalen Koordinaten von Zahn 14 (palatinal) in der Bitmap
			var x_dp_14 = 504;							// distal 14
			var x_mp_14 = 529;							// mesial 14
			var x_p_14 = (x_dp_14 + x_mp_14)/2;			// palatinal 14
			
		// Set der vertikalen Koordinaten von Zahn 14 (bukkal) aus dem Formular
			var y_gm_14_db = gm_OK_b + 6.5 * gm_14_db;	// Margo Gingivae distobukkal 14
			var y_gm_14_b = gm_OK_b + 6.5 * gm_14_b;	// Margo Gingivae bukkal 14
			var y_gm_14_mb = gm_OK_b + 6.5 * gm_14_mb;	// Margo Gingivae mesiobukkal 14
			var y_pd_14_db = 6.5 * pd_14_db;			// Sondierungstiefe distobukkal 14
			var y_pd_14_b = 6.5 * pd_14_b;				// Sondierungstiefe bukkal 14
			var y_pd_14_mb = 6.5 * pd_14_mb;			// Sondierungstiefe mesiobukkal 14
			
		// Set der vertikalen Koordinaten von Zahn 14 (palatinal) aus dem Formular
			var y_gm_14_dp = gm_OK_p - 6.5 * gm_14_dp;	// Margo Gingivae distopalatinal 14
			var y_gm_14_p = gm_OK_p - 6.5 * gm_14_p;	// Margo Gingivae palatinal 14
			var y_gm_14_mp = gm_OK_p - 6.5 * gm_14_mp;	// Margo Gingivae mesiopalatinal 14
			var y_pd_14_dp = 6.5 * pd_14_dp;			// Sondierungstiefe distopalatinal 14
			var y_pd_14_p = 6.5 * pd_14_p;				// Sondierungstiefe palatinal 14
			var y_pd_14_mp = 6.5 * pd_14_mp;			// Sondierungstiefe mesiopalatinal 14
			
		// Berechnung des Attachmentniveaus 14 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_14_db = y_gm_14_db - y_pd_14_db;	// Attachmentniveau distobukkal 14
			var y_al_14_b = y_gm_14_b - y_pd_14_b;		// Attachmentniveau bukkal 14
			var y_al_14_mb = y_gm_14_mb - y_pd_14_mb;	// Attachmentniveau mesiobukkal 14
			
		// Berechnung des Attachmentniveaus 14 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_14_dp = y_gm_14_dp + y_pd_14_dp;	// Attachmentniveau distopalatinal 14
			var y_al_14_p = y_gm_14_p + y_pd_14_p;		// Attachmentniveau palatinal 14
			var y_al_14_mp = y_gm_14_mp + y_pd_14_mp;	// Attachmentniveau mesiopalatinal 14
			
		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[14].storeCoordinates(
				x_db_14, x_mb_14, x_dp_14, x_mp_14, x_b_14, x_p_14,
				y_gm_14_db, y_gm_14_b, y_gm_14_mb, y_pd_14_db, y_pd_14_b, y_pd_14_mb,
				y_gm_14_dp, y_gm_14_p, y_gm_14_mp, y_pd_14_dp, y_pd_14_p, y_pd_14_mp,
				y_al_14_db, y_al_14_b, y_al_14_mb, y_al_14_dp, y_al_14_p, y_al_14_mp
			);
		
		// Parodontaltasche 14 bukkal zeichnen
			var string = 
				x_db_14 + ", " + y_al_14_db + "  " + 
				x_b_14 + ", " + y_al_14_b + "  " + 
				x_mb_14 + ", " + y_al_14_mb + "  " + 
				x_mb_14 + ", " + y_gm_14_mb + "  " + 
				x_b_14 + ", " + y_gm_14_b + "  " + 
				x_db_14 + ", " + y_gm_14_db;
			document.getElementById("polygon_14_b").setAttribute("points", string);
		// Attachmentniveau 14 bukkal zeichnen
			var string = 
				x_db_14 + ", " + y_al_14_db + "  " + 
				x_b_14 + ", " + y_al_14_b + "  " + 
				x_mb_14 + ", " + y_al_14_mb;
			document.getElementById("polyline_al_14_b").setAttribute("points", string);
		// Margo Gingivae 14 bukkal zeichnen
			var string =
				x_db_14 + ", " + y_gm_14_db + "  " + 
				x_b_14 + ", " + y_gm_14_b + "  " + 
				x_mb_14 + ", " + y_gm_14_mb;
			document.getElementById("polyline_gm_14_b").setAttribute("points", string);

		// Parodontaltasche 14 palatinal zeichnen
			var string = 
				x_dp_14 + ", " + y_al_14_dp + "  " + 
				x_p_14 + ", " + y_al_14_p + "  " + 
				x_mp_14 + ", " + y_al_14_mp + "  " + 
				x_mp_14 + ", " + y_gm_14_mp + "  " + 
				x_p_14 + ", " + y_gm_14_p + "  " + 
				x_dp_14 + ", " + y_gm_14_dp;
			document.getElementById("polygon_14_p").setAttribute("points", string);
		// Attachmentniveau 14 palatinal zeichnen
			var string = 
				x_dp_14 + ", " + y_al_14_dp + "  " + 
				x_p_14 + ", " + y_al_14_p + "  " + 
				x_mp_14 + ", " + y_al_14_mp;
			document.getElementById("polyline_al_14_p").setAttribute("points", string);
		// Margo Gingivae 14 palatinal zeichnen
			var string =
				x_dp_14 + ", " + y_gm_14_dp + "  " + 
				x_p_14 + ", " + y_gm_14_p + "  " + 
				x_mp_14 + ", " + y_gm_14_mp;
			document.getElementById("polyline_gm_14_p").setAttribute("points", string);
		}
        if (tooth_14 == 1 && tooth_13 == 1) {

            pd_13_db = document.forms[0]["pd_13_db"].value;
			gm_13_db = document.forms[0]["gm_13_db"].value;
			
			pd_13_dp = document.forms[0]["pd_13_dp"].value;
			gm_13_dp = document.forms[0]["gm_13_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 13 (bukkal) in der Bitmap
			var x_db_13 = 544;							// distal 13
			
		// Set der horizontalen Koordinaten von Zahn 13 (palatinal) in der Bitmap
			var x_dp_13 = 546;							// distal 13
			
		// Set der vertikalen Koordinaten von Zahn 13 (bukkal) aus dem Formular
			var y_gm_13_db = gm_OK_b + 6.5 * gm_13_db;	// Margo Gingivae distobukkal 13
			var y_pd_13_db = 6.5 * pd_13_db;			// Sondierungstiefe distobukkal 13
			
		// Set der vertikalen Koordinaten von Zahn 13 (palatinal) aus dem Formular
			var y_gm_13_dp = gm_OK_p - 6.5 * gm_13_dp;	// Margo Gingivae distopalatinal 13
			var y_pd_13_dp = 6.5 * pd_13_dp;			// Sondierungstiefe distopalatinal 13
			
		// Berechnung des Attachmentniveaus 13 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_13_db = y_gm_13_db - y_pd_13_db;	// Attachmentniveau distobukkal 13
			
		// Berechnung des Attachmentniveaus 13 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_13_dp = y_gm_13_dp + y_pd_13_dp;	// Attachmentniveau distopalatinal 13

		// Parodontaltasche inter_14_13 bukkal zeichnen
			var string = 
				x_mb_14 + ", " + y_al_14_mb + "  " + 
				x_db_13 + ", " + y_al_13_db + "  " + 
				x_db_13 + ", " + y_gm_13_db + "  " + 
				x_mb_14 + ", " + y_gm_14_mb;
			document.getElementById("polygon_inter_14_13_b").setAttribute("points", string);
		// Attachmentniveau inter_14_13 bukkal zeichnen
			var string = 
				x_mb_14 + ", " + y_al_14_mb + "  " + 
				x_db_13 + ", " + y_al_13_db;
			document.getElementById("polyline_al_inter_14_13_b").setAttribute("points", string);
		// Margo Gingivae inter_14_13 bukkal zeichnen
			var string =
				x_mb_14 + ", " + y_gm_14_mb + "  " + 
				x_db_13 + ", " + y_gm_13_db;
			document.getElementById("polyline_gm_inter_14_13_b").setAttribute("points", string);

        // Parodontaltasche inter_14_13 palatinal zeichnen
			var string = 
				x_mp_14 + ", " + y_al_14_mp + "  " + 
				x_dp_13 + ", " + y_al_13_dp + "  " + 
				x_dp_13 + ", " + y_gm_13_dp + "  " + 
				x_mp_14 + ", " + y_gm_14_mp;
			document.getElementById("polygon_inter_14_13_p").setAttribute("points", string);
		// Attachmentniveau inter_14_13 palatinal zeichnen
			var string = 
				x_mp_14 + ", " + y_al_14_mp + "  " + 
				x_dp_13 + ", " + y_al_13_dp;
			document.getElementById("polyline_al_inter_14_13_p").setAttribute("points", string);
		// Margo Gingivae inter_14_13 palatinal zeichnen
			var string =
				x_mp_14 + ", " + y_gm_14_mp + "  " + 
				x_dp_13 + ", " + y_gm_13_dp;
			document.getElementById("polyline_gm_inter_14_13_p").setAttribute("points", string);
		}
        if (tooth_15 == 1 && tooth_14 == 1) {

            pd_15_mb = document.forms[0]["pd_15_mb"].value;
			gm_15_mb = document.forms[0]["gm_15_mb"].value;
			
			pd_15_mp = document.forms[0]["pd_15_mp"].value;
			gm_15_mp = document.forms[0]["gm_15_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 15 (bukkal) in der Bitmap
			var x_mb_15 = 489;							// mesial 15
			
		// Set der horizontalen Koordinaten von Zahn 15 (palatinal) in der Bitmap
			var x_mp_15 = 487;							// mesial 15
			
		// Set der vertikalen Koordinaten von Zahn 15 (bukkal) aus dem Formular
			var y_gm_15_mb = gm_OK_b + 6.5 * gm_15_mb;	// Margo Gingivae mesiobukkal 15
			var y_pd_15_mb = 6.5 * pd_15_mb;			// Sondierungstiefe mesiobukkal 15
			
		// Set der vertikalen Koordinaten von Zahn 15 (palatinal) aus dem Formular
			var y_gm_15_mp = gm_OK_p - 6.5 * gm_15_mp;	// Margo Gingivae mesiopalatinal 15
			var y_pd_15_mp = 6.5 * pd_15_mp;			// Sondierungstiefe mesiopalatinal 15
			
		// Berechnung des Attachmentniveaus 15 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_15_mb = y_gm_15_mb - y_pd_15_mb;	// Attachmentniveau mesiobukkal 15
			
		// Berechnung des Attachmentniveaus 15 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_15_mp = y_gm_15_mp + y_pd_15_mp;	// Attachmentniveau mesiopalatinal 15

		// Parodontaltasche inter_15_14 bukkal zeichnen
			var string = 
				x_mb_15 + ", " + y_al_15_mb + "  " + 
				x_db_14 + ", " + y_al_14_db + "  " + 
				x_db_14 + ", " + y_gm_14_db + "  " + 
				x_mb_15 + ", " + y_gm_15_mb;
			document.getElementById("polygon_inter_15_14_b").setAttribute("points", string);
		// Attachmentniveau inter_15_14 bukkal zeichnen
			var string = 
				x_mb_15 + ", " + y_al_15_mb + "  " + 
				x_db_14 + ", " + y_al_14_db;
			document.getElementById("polyline_al_inter_15_14_b").setAttribute("points", string);
		// Margo Gingivae inter_15_14 bukkal zeichnen
			var string =
				x_mb_15 + ", " + y_gm_15_mb + "  " + 
				x_db_14 + ", " + y_gm_14_db;
			document.getElementById("polyline_gm_inter_15_14_b").setAttribute("points", string);

        // Parodontaltasche inter_15_14 palatinal zeichnen
			var string = 
				x_mp_15 + ", " + y_al_15_mp + "  " + 
				x_dp_14 + ", " + y_al_14_dp + "  " + 
				x_dp_14 + ", " + y_gm_14_dp + "  " + 
				x_mp_15 + ", " + y_gm_15_mp;
			document.getElementById("polygon_inter_15_14_p").setAttribute("points", string);
		// Attachmentniveau inter_15_14 palatinal zeichnen
			var string = 
				x_mp_15 + ", " + y_al_15_mp + "  " + 
				x_dp_14 + ", " + y_al_14_dp;
			document.getElementById("polyline_al_inter_15_14_p").setAttribute("points", string);
		// Margo Gingivae inter_15_14 palatinal zeichnen
			var string =
				x_mp_15 + ", " + y_gm_15_mp + "  " + 
				x_dp_14 + ", " + y_gm_14_dp;
			document.getElementById("polyline_gm_inter_15_14_p").setAttribute("points", string);
		}
	}