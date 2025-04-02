	// Definition der Variablen für das Formular
		var tooth_28 = 1;
		var Furkation_28_b = 0;
		var Furkation_28_dp = 0;
		var Furkation_28_mp = 0;
		var Implantat_28 = 0;
		var bop_28_db = 0;
		var bop_28_b = 0;
		var bop_28_mb = 0;
		var pi_28_db = 0;
		var pi_28_b = 0;
		var pi_28_mb = 0;
		var bop_28_dp = 0;
		var bop_28_p = 0;
		var bop_28_mp = 0;
		var pi_28_dp = 0;
		var pi_28_p = 0;
		var pi_28_mp = 0;
		var gm_28_db = 0;
		var gm_28_b = 0;
		var gm_28_mb = 0;
		var pd_28_db = 0;
		var pd_28_b = 0;
		var pd_28_mb = 0;
		var gm_28_dp = 0;
		var gm_28_p = 0;
		var gm_28_mp = 0;
		var pd_28_dp = 0;
		var pd_28_p = 0;
		var pd_28_mp = 0;

	function clear_data_28() {
        if (tooth_28 == 1) {
			gm_28_db = 0;
			gm_28_b = 0;
			gm_28_mb = 0;
			pd_28_db = 0;
			pd_28_b = 0;
			pd_28_mb = 0;
	
				document.getElementById('gm_28_db_txt').value = 0;
				document.getElementById('gm_28_b_txt').value = 0;
				document.getElementById('gm_28_mb_txt').value = 0;
				
				document.getElementById('pd_28_db_txt').value = 0;
				document.getElementById('pd_28_b_txt').value = 0;
				document.getElementById('pd_28_mb_txt').value = 0;
			
				document.forms[0]["pd_28_db"].style.color = 'black'
				document.forms[0]["pd_28_b"].style.color = 'black'
				document.forms[0]["pd_28_mb"].style.color = 'black'
			
			gm_28_dp = 0;
			gm_28_p = 0;
			gm_28_mp = 0;
			pd_28_dp = 0;
			pd_28_p = 0;
			pd_28_mp = 0;

				document.getElementById('gm_28_dp_txt').value = 0;
				document.getElementById('gm_28_p_txt').value = 0;
				document.getElementById('gm_28_mp_txt').value = 0;
				
				document.getElementById('pd_28_dp_txt').value = 0;
				document.getElementById('pd_28_p_txt').value = 0;
				document.getElementById('pd_28_mp_txt').value = 0;

				document.forms[0]["pd_28_dp"].style.color = 'black'
				document.forms[0]["pd_28_p"].style.color = 'black'
				document.forms[0]["pd_28_mp"].style.color = 'black'
			
			change_probing_28();
			
			mobility_28 = 0;

				document.getElementById('mobility_28_txt').value = "0";

			note_28 = "";

				document.getElementById('note_28_txt').value = "";

			Furkation_28_b = 0;
			Furkation_28_dp = 0;
			Furkation_28_mp = 0;

				document.getElementById('furkation_1_28_b').style.display = 'none';
				document.getElementById('furkation_2_28_b').style.display = 'none';
				document.getElementById('furkation_3_28_b').style.display = 'none';
					
				document.getElementById('furkation_1_28_b_tab').style.display = 'none';
				document.getElementById('furkation_2_28_b_tab').style.display = 'none';
				document.getElementById('furkation_3_28_b_tab').style.display = 'none';
				
				document.getElementById('furkation_1_28_dp').style.display = 'none';
				document.getElementById('furkation_2_28_dp').style.display = 'none';
				document.getElementById('furkation_3_28_dp').style.display = 'none';
					
				document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
				document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
				document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
				
				document.getElementById('furkation_1_28_mp').style.display = 'none';
				document.getElementById('furkation_2_28_mp').style.display = 'none';
				document.getElementById('furkation_3_28_mp').style.display = 'none';
				
				document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
				document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
				document.getElementById('furkation_3_28_mp_tab').style.display = 'none';
	
			bop_28_db = 0;
			bop_28_b = 0;
			bop_28_mb = 0;
					
			bop_28_dp = 0;
			bop_28_p = 0;
			bop_28_mp = 0;
					
				document.getElementById('bop_28_db_rectangle').style.display = 'none';
				document.getElementById('bop_28_b_rectangle').style.display = 'none';
				document.getElementById('bop_28_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_28_dp_rectangle').style.display = 'none';
				document.getElementById('bop_28_p_rectangle').style.display = 'none';
				document.getElementById('bop_28_mp_rectangle').style.display = 'none';
				
			pi_28_db = 0;
			pi_28_b = 0;
			pi_28_mb = 0;
					
			pi_28_dp = 0;
			pi_28_p = 0;
			pi_28_mp = 0;

				document.getElementById('pi_28_db_rectangle').style.display = 'none';
				document.getElementById('pi_28_b_rectangle').style.display = 'none';
				document.getElementById('pi_28_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_28_dp_rectangle').style.display = 'none';
				document.getElementById('pi_28_p_rectangle').style.display = 'none';
				document.getElementById('pi_28_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_28() {
		if (tooth_28 === 1) {
			tooth_28 = 0;
			document.getElementById('tooth_line_28_b').style.display = 'block';
			document.getElementById('tooth_line_28_p').style.display = 'block';
			
			document.getElementById('mobility_28_txt').style.display = 'none';
			
			document.getElementById('implantat_28_btn').style.display = 'none';
			document.getElementById('implantat_28_tab').style.display = 'none';
			document.getElementById('implantat_28_b_image').style.display = 'none';
			document.getElementById('implantat_28_p_image').style.display = 'none';
			
			document.getElementById('furkation_28_b_btn').style.display = 'none';
			document.getElementById('furkation_28_dp_btn').style.display = 'none';
			document.getElementById('furkation_28_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_28_b').style.display = 'none';
			document.getElementById('furkation_2_28_b').style.display = 'none';
			document.getElementById('furkation_3_28_b').style.display = 'none';
			
			document.getElementById('furkation_1_28_b_tab').style.display = 'none';
			document.getElementById('furkation_2_28_b_tab').style.display = 'none';
			document.getElementById('furkation_3_28_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_dp').style.display = 'none';
			document.getElementById('furkation_2_28_dp').style.display = 'none';
			document.getElementById('furkation_3_28_dp').style.display = 'none';
			
			document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_mp').style.display = 'none';
			document.getElementById('furkation_2_28_mp').style.display = 'none';
			document.getElementById('furkation_3_28_mp').style.display = 'none';
			
			document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_28_mp_tab').style.display = 'none';
			
			document.getElementById('gm_28_db_txt').style.display = 'none';
			document.getElementById('gm_28_b_txt').style.display = 'none';
			document.getElementById('gm_28_mb_txt').style.display = 'none';
			
			document.getElementById('pd_28_db_txt').style.display = 'none';
			document.getElementById('pd_28_b_txt').style.display = 'none';
			document.getElementById('pd_28_mb_txt').style.display = 'none';
			
			document.getElementById('gm_28_dp_txt').style.display = 'none';
			document.getElementById('gm_28_p_txt').style.display = 'none';
			document.getElementById('gm_28_mp_txt').style.display = 'none';
			
			document.getElementById('pd_28_dp_txt').style.display = 'none';
			document.getElementById('pd_28_p_txt').style.display = 'none';
			document.getElementById('pd_28_mp_txt').style.display = 'none';
						
			document.getElementById('bop_28_db_rectangle').style.display = 'none';
			document.getElementById('bop_28_b_rectangle').style.display = 'none';
			document.getElementById('bop_28_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_28_dp_rectangle').style.display = 'none';
			document.getElementById('bop_28_p_rectangle').style.display = 'none';
			document.getElementById('bop_28_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_28_db_btn').style.display = 'none';
			document.getElementById('bop_28_b_btn').style.display = 'none';
			document.getElementById('bop_28_mb_btn').style.display = 'none';
			
			document.getElementById('bop_28_dp_btn').style.display = 'none';
			document.getElementById('bop_28_p_btn').style.display = 'none';
			document.getElementById('bop_28_mp_btn').style.display = 'none';
			
			document.getElementById('pi_28_db_rectangle').style.display = 'none';
			document.getElementById('pi_28_b_rectangle').style.display = 'none';
			document.getElementById('pi_28_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_28_dp_rectangle').style.display = 'none';
			document.getElementById('pi_28_p_rectangle').style.display = 'none';
			document.getElementById('pi_28_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_28_db_btn').style.display = 'none';
			document.getElementById('pi_28_b_btn').style.display = 'none';
			document.getElementById('pi_28_mb_btn').style.display = 'none';
			
			document.getElementById('pi_28_dp_btn').style.display = 'none';
			document.getElementById('pi_28_p_btn').style.display = 'none';
			document.getElementById('pi_28_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_28_b').style.display = 'none';
			document.getElementById('polyline_al_28_b').style.display = 'none';
			document.getElementById('polyline_gm_28_b').style.display = 'none';
			
			document.getElementById('polygon_28_p').style.display = 'none';
			document.getElementById('polyline_al_28_p').style.display = 'none';
			document.getElementById('polyline_gm_28_p').style.display = 'none';
			
			document.getElementById('polygon_inter_28_27_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_28_27_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_28_27_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_28_27_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_28_27_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_28_27_p').style.display = 'none';            
			
			document.getElementById('note_28_txt').style.display = 'none';
		}
		else if (Implantat_28 !== 1) {
			tooth_28 = 1;
			document.getElementById('tooth_line_28_b').style.display = 'none';
			document.getElementById('tooth_line_28_p').style.display = 'none';

			document.getElementById('mobility_28_txt').style.display = 'block';

			document.getElementById('implantat_28_btn').style.display = 'block';

			document.getElementById('furkation_28_b_btn').style.display = 'block';
			document.getElementById('furkation_28_dp_btn').style.display = 'block';
			document.getElementById('furkation_28_mp_btn').style.display = 'block';
			
			document.getElementById('gm_28_db_txt').style.display = 'block';
			document.getElementById('gm_28_b_txt').style.display = 'block';
			document.getElementById('gm_28_mb_txt').style.display = 'block';
			
			document.getElementById('pd_28_db_txt').style.display = 'block';
			document.getElementById('pd_28_b_txt').style.display = 'block';
			document.getElementById('pd_28_mb_txt').style.display = 'block';
			
			document.getElementById('gm_28_dp_txt').style.display = 'block';
			document.getElementById('gm_28_p_txt').style.display = 'block';
			document.getElementById('gm_28_mp_txt').style.display = 'block';
			
			document.getElementById('pd_28_dp_txt').style.display = 'block';
			document.getElementById('pd_28_p_txt').style.display = 'block';
			document.getElementById('pd_28_mp_txt').style.display = 'block';
			
			document.getElementById('note_28_txt').style.display = 'block';

			document.getElementById('polygon_28_b').style.display = 'block';
			document.getElementById('polyline_al_28_b').style.display = 'block';
			document.getElementById('polyline_gm_28_b').style.display = 'block';
			
			document.getElementById('polygon_28_p').style.display = 'block';
			document.getElementById('polyline_al_28_p').style.display = 'block';
			document.getElementById('polyline_gm_28_p').style.display = 'block';

            if (tooth_28 == 1 && tooth_27 == 1) {
				document.getElementById('polygon_inter_28_27_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_28_27_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_28_27_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_28_27_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_28_27_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_28_27_p').style.display = 'block';            
            }

			if (Furkation_28_b == 1) {
				document.getElementById('furkation_1_28_b').style.display = 'block';
			} else if (Furkation_28_b == 2) {
				document.getElementById('furkation_2_28_b').style.display = 'block';
			} else if (Furkation_28_b == 3) {
				document.getElementById('furkation_3_28_b').style.display = 'block';
			}
			if (Furkation_28_b == 1) {
				document.getElementById('furkation_1_28_b_tab').style.display = 'block';
			} else if (Furkation_28_b == 2) {
				document.getElementById('furkation_2_28_b_tab').style.display = 'block';
			} else if (Furkation_28_b == 3) {
				document.getElementById('furkation_3_28_b_tab').style.display = 'block';
			}
			if (Furkation_28_dp == 1) {
				document.getElementById('furkation_1_28_dp').style.display = 'block';
			} else if (Furkation_28_dp == 2) {
				document.getElementById('furkation_2_28_dp').style.display = 'block';
			} else if (Furkation_28_dp == 3) {
				document.getElementById('furkation_3_28_dp').style.display = 'block';
			}
			if (Furkation_28_dp == 1) {
				document.getElementById('furkation_1_28_dp_tab').style.display = 'block';
			} else if (Furkation_28_dp == 2) {
				document.getElementById('furkation_2_28_dp_tab').style.display = 'block';
			} else if (Furkation_28_dp == 3) {
				document.getElementById('furkation_3_28_dp_tab').style.display = 'block';
			}
			if (Furkation_28_mp == 1) {
				document.getElementById('furkation_1_28_mp').style.display = 'block';
			} else if (Furkation_28_mp == 2) {
				document.getElementById('furkation_2_28_mp').style.display = 'block';
			} else if (Furkation_28_mp == 3) {
				document.getElementById('furkation_3_28_mp').style.display = 'block';
			}
			if (Furkation_28_mp == 1) {
				document.getElementById('furkation_1_28_mp_tab').style.display = 'block';
			} else if (Furkation_28_mp == 2) {
				document.getElementById('furkation_2_28_mp_tab').style.display = 'block';
			} else if (Furkation_28_mp == 3) {
				document.getElementById('furkation_3_28_mp_tab').style.display = 'block';
			}

			document.getElementById('bop_28_db_btn').style.display = 'block';
			document.getElementById('bop_28_b_btn').style.display = 'block';
			document.getElementById('bop_28_mb_btn').style.display = 'block';

			document.getElementById('bop_28_dp_btn').style.display = 'block';
			document.getElementById('bop_28_p_btn').style.display = 'block';
			document.getElementById('bop_28_mp_btn').style.display = 'block';
			
			if (bop_28_db == 1) {
				document.getElementById('bop_28_db_rectangle').style.display = 'block';
			}
			if (bop_28_b == 1) {
				document.getElementById('bop_28_b_rectangle').style.display = 'block';
			}
			if (bop_28_mb == 1) {
				document.getElementById('bop_28_mb_rectangle').style.display = 'block';
			}
			if (bop_28_dp == 1) {
				document.getElementById('bop_28_dp_rectangle').style.display = 'block';
			}
			if (bop_28_p == 1) {
				document.getElementById('bop_28_p_rectangle').style.display = 'block';
			}
			if (bop_28_mp == 1) {
				document.getElementById('bop_28_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_28_db_btn').style.display = 'block';
			document.getElementById('pi_28_b_btn').style.display = 'block';
			document.getElementById('pi_28_mb_btn').style.display = 'block';

			document.getElementById('pi_28_dp_btn').style.display = 'block';
			document.getElementById('pi_28_p_btn').style.display = 'block';
			document.getElementById('pi_28_mp_btn').style.display = 'block';
			
			if (pi_28_db == 1) {
				document.getElementById('pi_28_db_rectangle').style.display = 'block';
			}
			if (pi_28_b == 1) {
				document.getElementById('pi_28_b_rectangle').style.display = 'block';
			}
			if (pi_28_mb == 1) {
				document.getElementById('pi_28_mb_rectangle').style.display = 'block';
			}
			if (pi_28_dp == 1) {
				document.getElementById('pi_28_dp_rectangle').style.display = 'block';
			}
			if (pi_28_p == 1) {
				document.getElementById('pi_28_p_rectangle').style.display = 'block';
			}
			if (pi_28_mp == 1) {
				document.getElementById('pi_28_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_28 == 1) {
			tooth_28 = 1;
			document.getElementById('tooth_line_28_b').style.display = 'none';
			document.getElementById('tooth_line_28_p').style.display = 'none';

			document.getElementById('mobility_28_txt').style.display = 'block';
			
			document.getElementById('note_28_txt').style.display = 'block';

			document.getElementById('implantat_28_btn').style.display = 'block';
			document.getElementById('implantat_28_tab').style.display = 'block';
			document.getElementById('implantat_28_b_image').style.display = 'block';
			document.getElementById('implantat_28_p_image').style.display = 'block';

			document.getElementById('gm_28_db_txt').style.display = 'block';
			document.getElementById('gm_28_b_txt').style.display = 'block';
			document.getElementById('gm_28_mb_txt').style.display = 'block';
			
			document.getElementById('pd_28_db_txt').style.display = 'block';
			document.getElementById('pd_28_b_txt').style.display = 'block';
			document.getElementById('pd_28_mb_txt').style.display = 'block';
			
			document.getElementById('gm_28_dp_txt').style.display = 'block';
			document.getElementById('gm_28_p_txt').style.display = 'block';
			document.getElementById('gm_28_mp_txt').style.display = 'block';
			
			document.getElementById('pd_28_dp_txt').style.display = 'block';
			document.getElementById('pd_28_p_txt').style.display = 'block';
			document.getElementById('pd_28_mp_txt').style.display = 'block';

			document.getElementById('polygon_28_b').style.display = 'block';
			document.getElementById('polyline_al_28_b').style.display = 'block';
			document.getElementById('polyline_gm_28_b').style.display = 'block';
			
			document.getElementById('polygon_28_p').style.display = 'block';
			document.getElementById('polyline_al_28_p').style.display = 'block';
			document.getElementById('polyline_gm_28_p').style.display = 'block';

            if (tooth_28 == 1 && tooth_27 == 1) {
				document.getElementById('polygon_inter_28_27_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_28_27_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_28_27_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_28_27_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_28_27_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_28_27_p').style.display = 'block';            
            }
            
			document.getElementById('bop_28_db_btn').style.display = 'block';
			document.getElementById('bop_28_b_btn').style.display = 'block';
			document.getElementById('bop_28_mb_btn').style.display = 'block';

			document.getElementById('bop_28_dp_btn').style.display = 'block';
			document.getElementById('bop_28_p_btn').style.display = 'block';
			document.getElementById('bop_28_mp_btn').style.display = 'block';
			
			document.getElementById('pi_28_db_btn').style.display = 'block';
			document.getElementById('pi_28_b_btn').style.display = 'block';
			document.getElementById('pi_28_mb_btn').style.display = 'block';

			document.getElementById('pi_28_dp_btn').style.display = 'block';
			document.getElementById('pi_28_p_btn').style.display = 'block';
			document.getElementById('pi_28_mp_btn').style.display = 'block';
			
			if (bop_28_db == 1) {
				document.getElementById('bop_28_db_rectangle').style.display = 'block';
			}
			if (bop_28_b == 1) {
				document.getElementById('bop_28_b_rectangle').style.display = 'block';
			}
			if (bop_28_mb == 1) {
				document.getElementById('bop_28_mb_rectangle').style.display = 'block';
			}
			if (bop_28_dp == 1) {
				document.getElementById('bop_28_dp_rectangle').style.display = 'block';
			}
			if (bop_28_p == 1) {
				document.getElementById('bop_28_p_rectangle').style.display = 'block';
			}
			if (bop_28_mp == 1) {
				document.getElementById('bop_28_mp_rectangle').style.display = 'block';
			}
			
			if (pi_28_db == 1) {
				document.getElementById('pi_28_db_rectangle').style.display = 'block';
			}
			if (pi_28_b == 1) {
				document.getElementById('pi_28_b_rectangle').style.display = 'block';
			}
			if (pi_28_mb == 1) {
				document.getElementById('pi_28_mb_rectangle').style.display = 'block';
			}
			if (pi_28_dp == 1) {
				document.getElementById('pi_28_dp_rectangle').style.display = 'block';
			}
			if (pi_28_p == 1) {
				document.getElementById('pi_28_p_rectangle').style.display = 'block';
			}
			if (pi_28_mp == 1) {
				document.getElementById('pi_28_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_28();
	}

	function toggle_implant_28() {
		if (Implantat_28 == 0) {
			Implantat_28 = 1;
			
			document.getElementById('implantat_28_b_image').style.display = 'block';
			document.getElementById('implantat_28_p_image').style.display = 'block';
			document.getElementById('implantat_28_tab').style.display = 'block';
			
			document.getElementById('furkation_28_b_btn').style.display = 'none';
			document.getElementById('furkation_28_dp_btn').style.display = 'none';
			document.getElementById('furkation_28_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_28_b').style.display = 'none';
			document.getElementById('furkation_2_28_b').style.display = 'none';
			document.getElementById('furkation_3_28_b').style.display = 'none';
			
			document.getElementById('furkation_1_28_b_tab').style.display = 'none';
			document.getElementById('furkation_2_28_b_tab').style.display = 'none';
			document.getElementById('furkation_3_28_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_dp').style.display = 'none';
			document.getElementById('furkation_2_28_dp').style.display = 'none';
			document.getElementById('furkation_3_28_dp').style.display = 'none';
			
			document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_mp').style.display = 'none';
			document.getElementById('furkation_2_28_mp').style.display = 'none';
			document.getElementById('furkation_3_28_mp').style.display = 'none';
			
			document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_28_mp_tab').style.display = 'none';
		}
		else {
			Implantat_28 = 0;
			
			document.getElementById('implantat_28_b_image').style.display = 'none';
			document.getElementById('implantat_28_p_image').style.display = 'none';
			document.getElementById('implantat_28_tab').style.display = 'none';
			
			document.getElementById('furkation_28_b_btn').style.display = 'block';
			document.getElementById('furkation_28_dp_btn').style.display = 'block';
			document.getElementById('furkation_28_mp_btn').style.display = 'block';

			if (Furkation_28_b == 1) {
				document.getElementById('furkation_1_28_b').style.display = 'block';
			} else if (Furkation_28_b == 2) {
				document.getElementById('furkation_2_28_b').style.display = 'block';
			} else if (Furkation_28_b == 3) {
				document.getElementById('furkation_3_28_b').style.display = 'block';
			}
			if (Furkation_28_b == 1) {
				document.getElementById('furkation_1_28_b_tab').style.display = 'block';
			} else if (Furkation_28_b == 2) {
				document.getElementById('furkation_2_28_b_tab').style.display = 'block';
			} else if (Furkation_28_b == 3) {
				document.getElementById('furkation_3_28_b_tab').style.display = 'block';
			}
			if (Furkation_28_dp == 1) {
				document.getElementById('furkation_1_28_dp').style.display = 'block';
			} else if (Furkation_28_dp == 2) {
				document.getElementById('furkation_2_28_dp').style.display = 'block';
			} else if (Furkation_28_dp == 3) {
				document.getElementById('furkation_3_28_dp').style.display = 'block';
			}
			if (Furkation_28_dp == 1) {
				document.getElementById('furkation_1_28_dp_tab').style.display = 'block';
			} else if (Furkation_28_dp == 2) {
				document.getElementById('furkation_2_28_dp_tab').style.display = 'block';
			} else if (Furkation_28_dp == 3) {
				document.getElementById('furkation_3_28_dp_tab').style.display = 'block';
			}
			if (Furkation_28_mp == 1) {
				document.getElementById('furkation_1_28_mp').style.display = 'block';
			} else if (Furkation_28_mp == 2) {
				document.getElementById('furkation_2_28_mp').style.display = 'block';
			} else if (Furkation_28_mp == 3) {
				document.getElementById('furkation_3_28_mp').style.display = 'block';
			}
			if (Furkation_28_mp == 1) {
				document.getElementById('furkation_1_28_mp_tab').style.display = 'block';
			} else if (Furkation_28_mp == 2) {
				document.getElementById('furkation_2_28_mp_tab').style.display = 'block';
			} else if (Furkation_28_mp == 3) {
				document.getElementById('furkation_3_28_mp_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_28_b() {
		if (Furkation_28_b == 0) {
			document.getElementById('furkation_1_28_b_tab').style.display = 'block';
			document.getElementById('furkation_2_28_b_tab').style.display = 'none';
			document.getElementById('furkation_3_28_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_b').style.display = 'block';
			document.getElementById('furkation_2_28_b').style.display = 'none';
			document.getElementById('furkation_3_28_b').style.display = 'none';

			Furkation_28_b = 1;
		}
		else if (Furkation_28_b == 1) {
			document.getElementById('furkation_1_28_b_tab').style.display = 'none';
			document.getElementById('furkation_2_28_b_tab').style.display = 'block';
			document.getElementById('furkation_3_28_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_b').style.display = 'none';
			document.getElementById('furkation_2_28_b').style.display = 'block';
			document.getElementById('furkation_3_28_b').style.display = 'none';
			
			Furkation_28_b = 2;
		}
		else if (Furkation_28_b == 2) {
			document.getElementById('furkation_1_28_b_tab').style.display = 'none';
			document.getElementById('furkation_2_28_b_tab').style.display = 'none';
			document.getElementById('furkation_3_28_b_tab').style.display = 'block';
			
			document.getElementById('furkation_1_28_b').style.display = 'none';
			document.getElementById('furkation_2_28_b').style.display = 'none';
			document.getElementById('furkation_3_28_b').style.display = 'block';
						
			Furkation_28_b = 3;
		}
		else if (Furkation_28_b == 3) {
			document.getElementById('furkation_1_28_b_tab').style.display = 'none';
			document.getElementById('furkation_2_28_b_tab').style.display = 'none';
			document.getElementById('furkation_3_28_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_b').style.display = 'none';
			document.getElementById('furkation_2_28_b').style.display = 'none';
			document.getElementById('furkation_3_28_b').style.display = 'none';
						
			Furkation_28_b = 0;
		}
	}

	function toggle_furcation_28_dp() {
		if (Furkation_28_dp == 0) {
			document.getElementById('furkation_1_28_dp_tab').style.display = 'block';
			document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_dp').style.display = 'block';
			document.getElementById('furkation_2_28_dp').style.display = 'none';
			document.getElementById('furkation_3_28_dp').style.display = 'none';

			Furkation_28_dp = 1;
		}
		else if (Furkation_28_dp == 1) {
			document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_28_dp_tab').style.display = 'block';
			document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_dp').style.display = 'none';
			document.getElementById('furkation_2_28_dp').style.display = 'block';
			document.getElementById('furkation_3_28_dp').style.display = 'none';
			
			Furkation_28_dp = 2;
		}
		else if (Furkation_28_dp == 2) {
			document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_28_dp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_28_dp').style.display = 'none';
			document.getElementById('furkation_2_28_dp').style.display = 'none';
			document.getElementById('furkation_3_28_dp').style.display = 'block';
						
			Furkation_28_dp = 3;
		}
		else if (Furkation_28_dp == 3) {
			document.getElementById('furkation_1_28_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_28_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_28_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_dp').style.display = 'none';
			document.getElementById('furkation_2_28_dp').style.display = 'none';
			document.getElementById('furkation_3_28_dp').style.display = 'none';
						
			Furkation_28_dp = 0;
		}
	}

	function toggle_furcation_28_mp() {
		if (Furkation_28_mp == 0) {
			document.getElementById('furkation_1_28_mp_tab').style.display = 'block';
			document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_28_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_mp').style.display = 'block';
			document.getElementById('furkation_2_28_mp').style.display = 'none';
			document.getElementById('furkation_3_28_mp').style.display = 'none';

			Furkation_28_mp = 1;
		}
		else if (Furkation_28_mp == 1) {
			document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_28_mp_tab').style.display = 'block';
			document.getElementById('furkation_3_28_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_mp').style.display = 'none';
			document.getElementById('furkation_2_28_mp').style.display = 'block';
			document.getElementById('furkation_3_28_mp').style.display = 'none';
			
			Furkation_28_mp = 2;
		}
		else if (Furkation_28_mp == 2) {
			document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_28_mp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_28_mp').style.display = 'none';
			document.getElementById('furkation_2_28_mp').style.display = 'none';
			document.getElementById('furkation_3_28_mp').style.display = 'block';
						
			Furkation_28_mp = 3;
		}
		else if (Furkation_28_mp == 3) {
			document.getElementById('furkation_1_28_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_28_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_28_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_28_mp').style.display = 'none';
			document.getElementById('furkation_2_28_mp').style.display = 'none';
			document.getElementById('furkation_3_28_mp').style.display = 'none';
						
			Furkation_28_mp = 0;
		}
	}

	function toggle_bop_28_db() {
		if (bop_28_db == 0) {
			bop_28_db = 1;
			document.getElementById('bop_28_db_rectangle').style.display = 'block';
		}
		else {
			bop_28_db = 0;
			document.getElementById('bop_28_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_28_b() {
		if (bop_28_b == 0) {
			bop_28_b = 1;
			document.getElementById('bop_28_b_rectangle').style.display = 'block';
		}
		else {
			bop_28_b = 0;
			document.getElementById('bop_28_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_28_mb() {
		if (bop_28_mb == 0) {
			bop_28_mb = 1;
			document.getElementById('bop_28_mb_rectangle').style.display = 'block';
		}
		else {
			bop_28_mb = 0;
			document.getElementById('bop_28_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_28_db() {
		if (pi_28_db == 0) {
			pi_28_db = 1;
			document.getElementById('pi_28_db_rectangle').style.display = 'block';
		}
		else {
			pi_28_db = 0;
			document.getElementById('pi_28_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_28_b() {
		if (pi_28_b == 0) {
			pi_28_b = 1;
			document.getElementById('pi_28_b_rectangle').style.display = 'block';
		}
		else {
			pi_28_b = 0;
			document.getElementById('pi_28_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_28_mb() {
		if (pi_28_mb == 0) {
			pi_28_mb = 1;
			document.getElementById('pi_28_mb_rectangle').style.display = 'block';
		}
		else {
			pi_28_mb = 0;
			document.getElementById('pi_28_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_28_dp() {
		if (bop_28_dp == 0) {
			bop_28_dp = 1;
			document.getElementById('bop_28_dp_rectangle').style.display = 'block';
		}
		else {
			bop_28_dp = 0;
			document.getElementById('bop_28_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_28_p() {
		if (bop_28_p == 0) {
			bop_28_p = 1;
			document.getElementById('bop_28_p_rectangle').style.display = 'block';
		}
		else {
			bop_28_p = 0;
			document.getElementById('bop_28_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_28_mp() {
		if (bop_28_mp == 0) {
			bop_28_mp = 1;
			document.getElementById('bop_28_mp_rectangle').style.display = 'block';
		}
		else {
			bop_28_mp = 0;
			document.getElementById('bop_28_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_28_dp() {
		if (pi_28_dp == 0) {
			pi_28_dp = 1;
			document.getElementById('pi_28_dp_rectangle').style.display = 'block';
		}
		else {
			pi_28_dp = 0;
			document.getElementById('pi_28_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_28_p() {
		if (pi_28_p == 0) {
			pi_28_p = 1;
			document.getElementById('pi_28_p_rectangle').style.display = 'block';
		}
		else {
			pi_28_p = 0;
			document.getElementById('pi_28_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_28_mp() {
		if (pi_28_mp == 0) {
			pi_28_mp = 1;
			document.getElementById('pi_28_mp_rectangle').style.display = 'block';
		}
		else {
			pi_28_mp = 0;
			document.getElementById('pi_28_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_28() {
		if (tooth_28 == 1) {
			
		// Variablen aus dem Formular
			pd_28_db = document.forms[0]["pd_28_db"].value;
			pd_28_b = document.forms[0]["pd_28_b"].value;
			pd_28_mb = document.forms[0]["pd_28_mb"].value;

			if (document.forms[0]["pd_28_dp"].value > 3) {document.forms[0]["pd_28_dp"].style.color = 'red';} else {document.forms[0]["pd_28_dp"].style.color = 'black'};
			if (document.forms[0]["pd_28_p"].value > 3) {document.forms[0]["pd_28_p"].style.color = 'red';} else {document.forms[0]["pd_28_p"].style.color = 'black'};
			if (document.forms[0]["pd_28_mp"].value > 3) {document.forms[0]["pd_28_mp"].style.color = 'red';} else {document.forms[0]["pd_28_mp"].style.color = 'black'};
			
			gm_28_db = document.forms[0]["gm_28_db"].value;
			gm_28_b = document.forms[0]["gm_28_b"].value;
			gm_28_mb = document.forms[0]["gm_28_mb"].value;
			
			pd_28_dp = document.forms[0]["pd_28_dp"].value;
			pd_28_p = document.forms[0]["pd_28_p"].value;
			pd_28_mp = document.forms[0]["pd_28_mp"].value;

			if (document.forms[0]["pd_28_db"].value > 3) {document.forms[0]["pd_28_db"].style.color = 'red';} else {document.forms[0]["pd_28_db"].style.color = 'black'};
			if (document.forms[0]["pd_28_b"].value > 3) {document.forms[0]["pd_28_b"].style.color = 'red';} else {document.forms[0]["pd_28_b"].style.color = 'black'};
			if (document.forms[0]["pd_28_mb"].value > 3) {document.forms[0]["pd_28_mb"].style.color = 'red';} else {document.forms[0]["pd_28_mb"].style.color = 'black'};
			
			gm_28_dp = document.forms[0]["gm_28_dp"].value;
			gm_28_p = document.forms[0]["gm_28_p"].value;
			gm_28_mp = document.forms[0]["gm_28_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 28 (bukkal) in der Bitmap
			var x_db_28 = 1063;							// distal 28
			var x_mb_28 = 1026;							// mesial 28
			var x_b_28 = (x_db_28 + x_mb_28)/2;			// bukkal 28
			
		// Set der horizontalen Koordinaten von Zahn 28 (palatinal) in der Bitmap
			var x_dp_28 = 1067;							// distal 28
			var x_mp_28 = 1028;							// mesial 28
			var x_p_28 = (x_dp_28 + x_mp_28)/2;			// palatinal 28
			
		// Set der vertikalen Koordinaten von Zahn 28 (bukkal) aus dem Formular
			var y_gm_28_db = gm_OK_b + 6.5 * gm_28_db;	// Margo Gingivae distobukkal 28
			var y_gm_28_b = gm_OK_b + 6.5 * gm_28_b;	// Margo Gingivae bukkal 28
			var y_gm_28_mb = gm_OK_b + 6.5 * gm_28_mb;	// Margo Gingivae mesiobukkal 28
			var y_pd_28_db = 6.5 * pd_28_db;			// Sondierungstiefe distobukkal 28
			var y_pd_28_b = 6.5 * pd_28_b;				// Sondierungstiefe bukkal 28
			var y_pd_28_mb = 6.5 * pd_28_mb;			// Sondierungstiefe mesiobukkal 28
			
		// Set der vertikalen Koordinaten von Zahn 28 (palatinal) aus dem Formular
			var y_gm_28_dp = gm_OK_p - 6.5 * gm_28_dp;	// Margo Gingivae distopalatinal 28
			var y_gm_28_p = gm_OK_p - 6.5 * gm_28_p;	// Margo Gingivae palatinal 28
			var y_gm_28_mp = gm_OK_p - 6.5 * gm_28_mp;	// Margo Gingivae mesiopalatinal 28
			var y_pd_28_dp = 6.5 * pd_28_dp;			// Sondierungstiefe distopalatinal 28
			var y_pd_28_p = 6.5 * pd_28_p;				// Sondierungstiefe palatinal 28
			var y_pd_28_mp = 6.5 * pd_28_mp;			// Sondierungstiefe mesiopalatinal 28
			
		// Berechnung des Attachmentniveaus 28 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_28_db = y_gm_28_db - y_pd_28_db;	// Attachmentniveau distobukkal 28
			var y_al_28_b = y_gm_28_b - y_pd_28_b;		// Attachmentniveau bukkal 28
			var y_al_28_mb = y_gm_28_mb - y_pd_28_mb;	// Attachmentniveau mesiobukkal 28
			
		// Berechnung des Attachmentniveaus 28 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_28_dp = y_gm_28_dp + y_pd_28_dp;	// Attachmentniveau distopalatinal 28
			var y_al_28_p = y_gm_28_p + y_pd_28_p;		// Attachmentniveau palatinal 28
			var y_al_28_mp = y_gm_28_mp + y_pd_28_mp;	// Attachmentniveau mesiopalatinal 28

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[28].storeCoordinates(
				x_db_28, x_mb_28, x_dp_28, x_mp_28, x_b_28, x_p_28,
				y_gm_28_db, y_gm_28_b, y_gm_28_mb, y_pd_28_db, y_pd_28_b, y_pd_28_mb,
				y_gm_28_dp, y_gm_28_p, y_gm_28_mp, y_pd_28_dp, y_pd_28_p, y_pd_28_mp,
				y_al_28_db, y_al_28_b, y_al_28_mb, y_al_28_dp, y_al_28_p, y_al_28_mp
			);
		
		// Parodontaltasche 28 bukkal zeichnen
			var string = 
				x_db_28 + ", " + y_al_28_db + "  " + 
				x_b_28 + ", " + y_al_28_b + "  " + 
				x_mb_28 + ", " + y_al_28_mb + "  " + 
				x_mb_28 + ", " + y_gm_28_mb + "  " + 
				x_b_28 + ", " + y_gm_28_b + "  " + 
				x_db_28 + ", " + y_gm_28_db;
			document.getElementById("polygon_28_b").setAttribute("points", string);
		// Attachmentniveau 28 bukkal zeichnen
			var string = 
				x_db_28 + ", " + y_al_28_db + "  " + 
				x_b_28 + ", " + y_al_28_b + "  " + 
				x_mb_28 + ", " + y_al_28_mb;
			document.getElementById("polyline_al_28_b").setAttribute("points", string);
		// Margo Gingivae 28 bukkal zeichnen
			var string =
				x_db_28 + ", " + y_gm_28_db + "  " + 
				x_b_28 + ", " + y_gm_28_b + "  " + 
				x_mb_28 + ", " + y_gm_28_mb;
			document.getElementById("polyline_gm_28_b").setAttribute("points", string);

		// Parodontaltasche 28 palatinal zeichnen
			var string = 
				x_dp_28 + ", " + y_al_28_dp + "  " + 
				x_p_28 + ", " + y_al_28_p + "  " + 
				x_mp_28 + ", " + y_al_28_mp + "  " + 
				x_mp_28 + ", " + y_gm_28_mp + "  " + 
				x_p_28 + ", " + y_gm_28_p + "  " + 
				x_dp_28 + ", " + y_gm_28_dp;
			document.getElementById("polygon_28_p").setAttribute("points", string);
		// Attachmentniveau 28 palatinal zeichnen
			var string = 
				x_dp_28 + ", " + y_al_28_dp + "  " + 
				x_p_28 + ", " + y_al_28_p + "  " + 
				x_mp_28 + ", " + y_al_28_mp;
			document.getElementById("polyline_al_28_p").setAttribute("points", string);
		// Margo Gingivae 28 palatinal zeichnen
			var string =
				x_dp_28 + ", " + y_gm_28_dp + "  " + 
				x_p_28 + ", " + y_gm_28_p + "  " + 
				x_mp_28 + ", " + y_gm_28_mp;
			document.getElementById("polyline_gm_28_p").setAttribute("points", string);
		}
        if (tooth_28 == 1 && tooth_27 == 1) {

            pd_27_db = document.forms[0]["pd_27_db"].value;
			gm_27_db = document.forms[0]["gm_27_db"].value;
			
			pd_27_dp = document.forms[0]["pd_27_dp"].value;
			gm_27_dp = document.forms[0]["gm_27_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 27 (bukkal) in der Bitmap
			var x_db_27 = 1011;							// distal 27
			
		// Set der horizontalen Koordinaten von Zahn 27 (palatinal) in der Bitmap
			var x_dp_27 = 1015;							// distal 27
			
		// Set der vertikalen Koordinaten von Zahn 27 (bukkal) aus dem Formular
			var y_gm_27_db = gm_OK_b + 6.5 * gm_27_db;	// Margo Gingivae distobukkal 27
			var y_pd_27_db = 6.5 * pd_27_db;			// Sondierungstiefe distobukkal 27
			
		// Set der vertikalen Koordinaten von Zahn 27 (palatinal) aus dem Formular
			var y_gm_27_dp = gm_OK_p - 6.5 * gm_27_dp;	// Margo Gingivae distopalatinal 27
			var y_pd_27_dp = 6.5 * pd_27_dp;			// Sondierungstiefe distopalatinal 27
			
		// Berechnung des Attachmentniveaus 27 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_27_db = y_gm_27_db - y_pd_27_db;	// Attachmentniveau distobukkal 27
			
		// Berechnung des Attachmentniveaus 27 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_27_dp = y_gm_27_dp + y_pd_27_dp;	// Attachmentniveau distopalatinal 27

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