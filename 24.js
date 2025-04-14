	// Definition der Variablen für das Formular
		var tooth_24 = 1;
		var Furkation_24_dp = 0;
		var Furkation_24_mp = 0;
		var Implantat_24 = 0;
		var bop_24_db = 0;
		var bop_24_b = 0;
		var bop_24_mb = 0;
		var pi_24_db = 0;
		var pi_24_b = 0;
		var pi_24_mb = 0;
		var bop_24_dp = 0;
		var bop_24_p = 0;
		var bop_24_mp = 0;
		var pi_24_dp = 0;
		var pi_24_p = 0;
		var pi_24_mp = 0;
		var gm_24_db = 0;
		var gm_24_b = 0;
		var gm_24_mb = 0;
		var pd_24_db = 0;
		var pd_24_b = 0;
		var pd_24_mb = 0;
		var gm_24_dp = 0;
		var gm_24_p = 0;
		var gm_24_mp = 0;
		var pd_24_dp = 0;
		var pd_24_p = 0;
		var pd_24_mp = 0;

	function clear_data_24() {
        if (tooth_24 == 1) {
			gm_24_db = 0;
			gm_24_b = 0;
			gm_24_mb = 0;
			pd_24_db = 0;
			pd_24_b = 0;
			pd_24_mb = 0;
	
				document.getElementById('gm_24_db_txt').value = 0;
				document.getElementById('gm_24_b_txt').value = 0;
				document.getElementById('gm_24_mb_txt').value = 0;
				
				document.getElementById('pd_24_db_txt').value = 0;
				document.getElementById('pd_24_b_txt').value = 0;
				document.getElementById('pd_24_mb_txt').value = 0;
			
				document.forms[0]["pd_24_db"].style.color = 'black'
				document.forms[0]["pd_24_b"].style.color = 'black'
				document.forms[0]["pd_24_mb"].style.color = 'black'
			
			gm_24_dp = 0;
			gm_24_p = 0;
			gm_24_mp = 0;
			pd_24_dp = 0;
			pd_24_p = 0;
			pd_24_mp = 0;

				document.getElementById('gm_24_dp_txt').value = 0;
				document.getElementById('gm_24_p_txt').value = 0;
				document.getElementById('gm_24_mp_txt').value = 0;
				
				document.getElementById('pd_24_dp_txt').value = 0;
				document.getElementById('pd_24_p_txt').value = 0;
				document.getElementById('pd_24_mp_txt').value = 0;

				document.forms[0]["pd_24_dp"].style.color = 'black'
				document.forms[0]["pd_24_p"].style.color = 'black'
				document.forms[0]["pd_24_mp"].style.color = 'black'
			
			change_probing_24();
			
			mobility_24 = 0;

				document.getElementById('mobility_24_txt').value = "0";

			note_24 = "";

				document.getElementById('note_24_txt').value = "";

			Furkation_24_dp = 0;
			Furkation_24_mp = 0;

				document.getElementById('furkation_1_24_dp').style.display = 'none';
				document.getElementById('furkation_2_24_dp').style.display = 'none';
				document.getElementById('furkation_3_24_dp').style.display = 'none';
					
				document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
				document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
				document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
				
				document.getElementById('furkation_1_24_mp').style.display = 'none';
				document.getElementById('furkation_2_24_mp').style.display = 'none';
				document.getElementById('furkation_3_24_mp').style.display = 'none';
				
				document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
				document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
				document.getElementById('furkation_3_24_mp_tab').style.display = 'none';
	
			bop_24_db = 0;
			bop_24_b = 0;
			bop_24_mb = 0;
					
			bop_24_dp = 0;
			bop_24_p = 0;
			bop_24_mp = 0;
					
				document.getElementById('bop_24_db_rectangle').style.display = 'none';
				document.getElementById('bop_24_b_rectangle').style.display = 'none';
				document.getElementById('bop_24_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_24_dp_rectangle').style.display = 'none';
				document.getElementById('bop_24_p_rectangle').style.display = 'none';
				document.getElementById('bop_24_mp_rectangle').style.display = 'none';
				
			pi_24_db = 0;
			pi_24_b = 0;
			pi_24_mb = 0;
					
			pi_24_dp = 0;
			pi_24_p = 0;
			pi_24_mp = 0;

				document.getElementById('pi_24_db_rectangle').style.display = 'none';
				document.getElementById('pi_24_b_rectangle').style.display = 'none';
				document.getElementById('pi_24_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_24_dp_rectangle').style.display = 'none';
				document.getElementById('pi_24_p_rectangle').style.display = 'none';
				document.getElementById('pi_24_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_24() {
		if (tooth_24 === 1) {
			tooth_24 = 0;
			document.getElementById('tooth_line_24_b').style.display = 'block';
			document.getElementById('tooth_line_24_p').style.display = 'block';
			
			document.getElementById('mobility_24_txt').style.display = 'none';
			
			document.getElementById('implantat_24_btn').style.display = 'none';
			document.getElementById('implantat_24_tab').style.display = 'none';
			document.getElementById('implantat_24_b_image').style.display = 'none';
			document.getElementById('implantat_24_p_image').style.display = 'none';
			
			document.getElementById('furkation_24_dp_btn').style.display = 'none';
			document.getElementById('furkation_24_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_24_dp').style.display = 'none';
			document.getElementById('furkation_2_24_dp').style.display = 'none';
			document.getElementById('furkation_3_24_dp').style.display = 'none';
			
			document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_24_mp').style.display = 'none';
			document.getElementById('furkation_2_24_mp').style.display = 'none';
			document.getElementById('furkation_3_24_mp').style.display = 'none';
			
			document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_24_mp_tab').style.display = 'none';

			document.getElementById('gm_24_db_txt').style.display = 'none';
			document.getElementById('gm_24_b_txt').style.display = 'none';
			document.getElementById('gm_24_mb_txt').style.display = 'none';
			
			document.getElementById('pd_24_db_txt').style.display = 'none';
			document.getElementById('pd_24_b_txt').style.display = 'none';
			document.getElementById('pd_24_mb_txt').style.display = 'none';
			
			document.getElementById('gm_24_dp_txt').style.display = 'none';
			document.getElementById('gm_24_p_txt').style.display = 'none';
			document.getElementById('gm_24_mp_txt').style.display = 'none';
			
			document.getElementById('pd_24_dp_txt').style.display = 'none';
			document.getElementById('pd_24_p_txt').style.display = 'none';
			document.getElementById('pd_24_mp_txt').style.display = 'none';
			
			document.getElementById('bop_24_db_rectangle').style.display = 'none';
			document.getElementById('bop_24_b_rectangle').style.display = 'none';
			document.getElementById('bop_24_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_24_dp_rectangle').style.display = 'none';
			document.getElementById('bop_24_p_rectangle').style.display = 'none';
			document.getElementById('bop_24_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_24_db_btn').style.display = 'none';
			document.getElementById('bop_24_b_btn').style.display = 'none';
			document.getElementById('bop_24_mb_btn').style.display = 'none';
			
			document.getElementById('bop_24_dp_btn').style.display = 'none';
			document.getElementById('bop_24_p_btn').style.display = 'none';
			document.getElementById('bop_24_mp_btn').style.display = 'none';
			
			document.getElementById('pi_24_db_rectangle').style.display = 'none';
			document.getElementById('pi_24_b_rectangle').style.display = 'none';
			document.getElementById('pi_24_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_24_dp_rectangle').style.display = 'none';
			document.getElementById('pi_24_p_rectangle').style.display = 'none';
			document.getElementById('pi_24_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_24_db_btn').style.display = 'none';
			document.getElementById('pi_24_b_btn').style.display = 'none';
			document.getElementById('pi_24_mb_btn').style.display = 'none';
			
			document.getElementById('pi_24_dp_btn').style.display = 'none';
			document.getElementById('pi_24_p_btn').style.display = 'none';
			document.getElementById('pi_24_mp_btn').style.display = 'none';
			
			document.getElementById('polygon_24_b').style.display = 'none';
			document.getElementById('polyline_al_24_b').style.display = 'none';
			document.getElementById('polyline_gm_24_b').style.display = 'none';
			
			document.getElementById('polygon_24_p').style.display = 'none';
			document.getElementById('polyline_al_24_p').style.display = 'none';
			document.getElementById('polyline_gm_24_p').style.display = 'none';
			
			document.getElementById('polygon_inter_25_24_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_25_24_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_25_24_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_25_24_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_25_24_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_25_24_p').style.display = 'none';            
            
			document.getElementById('polygon_inter_24_23_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_24_23_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_24_23_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_24_23_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_24_23_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_24_23_p').style.display = 'none';            
			
			document.getElementById('note_24_txt').style.display = 'none';
		}
		else if (Implantat_24 !== 1) {
			tooth_24 = 1;
			document.getElementById('tooth_line_24_b').style.display = 'none';
			document.getElementById('tooth_line_24_p').style.display = 'none';

			document.getElementById('mobility_24_txt').style.display = 'block';

			document.getElementById('implantat_24_btn').style.display = 'block';

			document.getElementById('furkation_24_dp_btn').style.display = 'block';
			document.getElementById('furkation_24_mp_btn').style.display = 'block';
			
			document.getElementById('gm_24_db_txt').style.display = 'block';
			document.getElementById('gm_24_b_txt').style.display = 'block';
			document.getElementById('gm_24_mb_txt').style.display = 'block';
			
			document.getElementById('pd_24_db_txt').style.display = 'block';
			document.getElementById('pd_24_b_txt').style.display = 'block';
			document.getElementById('pd_24_mb_txt').style.display = 'block';
			
			document.getElementById('gm_24_dp_txt').style.display = 'block';
			document.getElementById('gm_24_p_txt').style.display = 'block';
			document.getElementById('gm_24_mp_txt').style.display = 'block';
			
			document.getElementById('pd_24_dp_txt').style.display = 'block';
			document.getElementById('pd_24_p_txt').style.display = 'block';
			document.getElementById('pd_24_mp_txt').style.display = 'block';
			
			document.getElementById('note_24_txt').style.display = 'block';

			document.getElementById('polygon_24_b').style.display = 'block';
			document.getElementById('polyline_al_24_b').style.display = 'block';
			document.getElementById('polyline_gm_24_b').style.display = 'block';
			
			document.getElementById('polygon_24_p').style.display = 'block';
			document.getElementById('polyline_al_24_p').style.display = 'block';
			document.getElementById('polyline_gm_24_p').style.display = 'block';

            if (tooth_25 == 1 && tooth_24 == 1) {
				document.getElementById('polygon_inter_25_24_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_25_24_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_25_24_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_25_24_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_25_24_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_25_24_p').style.display = 'block';            
            }
            
            if (tooth_24 == 1 && tooth_23 == 1) {
				document.getElementById('polygon_inter_24_23_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_24_23_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_24_23_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_24_23_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_24_23_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_24_23_p').style.display = 'block';            
            }

			if (Furkation_24_dp == 1) {
				document.getElementById('furkation_1_24_dp').style.display = 'block';
			} else if (Furkation_24_dp == 2) {
				document.getElementById('furkation_2_24_dp').style.display = 'block';
			} else if (Furkation_24_dp == 3) {
				document.getElementById('furkation_3_24_dp').style.display = 'block';
			}
			if (Furkation_24_dp == 1) {
				document.getElementById('furkation_1_24_dp_tab').style.display = 'block';
			} else if (Furkation_24_dp == 2) {
				document.getElementById('furkation_2_24_dp_tab').style.display = 'block';
			} else if (Furkation_24_dp == 3) {
				document.getElementById('furkation_3_24_dp_tab').style.display = 'block';
			}
			if (Furkation_24_mp == 1) {
				document.getElementById('furkation_1_24_mp').style.display = 'block';
			} else if (Furkation_24_mp == 2) {
				document.getElementById('furkation_2_24_mp').style.display = 'block';
			} else if (Furkation_24_mp == 3) {
				document.getElementById('furkation_3_24_mp').style.display = 'block';
			}
			if (Furkation_24_mp == 1) {
				document.getElementById('furkation_1_24_mp_tab').style.display = 'block';
			} else if (Furkation_24_mp == 2) {
				document.getElementById('furkation_2_24_mp_tab').style.display = 'block';
			} else if (Furkation_24_mp == 3) {
				document.getElementById('furkation_3_24_mp_tab').style.display = 'block';
			}

			document.getElementById('bop_24_db_btn').style.display = 'block';
			document.getElementById('bop_24_b_btn').style.display = 'block';
			document.getElementById('bop_24_mb_btn').style.display = 'block';

			document.getElementById('bop_24_dp_btn').style.display = 'block';
			document.getElementById('bop_24_p_btn').style.display = 'block';
			document.getElementById('bop_24_mp_btn').style.display = 'block';
			
			if (bop_24_db == 1) {
				document.getElementById('bop_24_db_rectangle').style.display = 'block';
			}
			if (bop_24_b == 1) {
				document.getElementById('bop_24_b_rectangle').style.display = 'block';
			}
			if (bop_24_mb == 1) {
				document.getElementById('bop_24_mb_rectangle').style.display = 'block';
			}
			if (bop_24_dp == 1) {
				document.getElementById('bop_24_dp_rectangle').style.display = 'block';
			}
			if (bop_24_p == 1) {
				document.getElementById('bop_24_p_rectangle').style.display = 'block';
			}
			if (bop_24_mp == 1) {
				document.getElementById('bop_24_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_24_db_btn').style.display = 'block';
			document.getElementById('pi_24_b_btn').style.display = 'block';
			document.getElementById('pi_24_mb_btn').style.display = 'block';

			document.getElementById('pi_24_dp_btn').style.display = 'block';
			document.getElementById('pi_24_p_btn').style.display = 'block';
			document.getElementById('pi_24_mp_btn').style.display = 'block';
			
			if (pi_24_db == 1) {
				document.getElementById('pi_24_db_rectangle').style.display = 'block';
			}
			if (pi_24_b == 1) {
				document.getElementById('pi_24_b_rectangle').style.display = 'block';
			}
			if (pi_24_mb == 1) {
				document.getElementById('pi_24_mb_rectangle').style.display = 'block';
			}
			if (pi_24_dp == 1) {
				document.getElementById('pi_24_dp_rectangle').style.display = 'block';
			}
			if (pi_24_p == 1) {
				document.getElementById('pi_24_p_rectangle').style.display = 'block';
			}
			if (pi_24_mp == 1) {
				document.getElementById('pi_24_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_24 == 1) {
			tooth_24 = 1;
			document.getElementById('tooth_line_24_b').style.display = 'none';
			document.getElementById('tooth_line_24_p').style.display = 'none';

			document.getElementById('mobility_24_txt').style.display = 'block';
			
			document.getElementById('note_24_txt').style.display = 'block';

			document.getElementById('implantat_24_btn').style.display = 'block';
			document.getElementById('implantat_24_tab').style.display = 'block';
			document.getElementById('implantat_24_b_image').style.display = 'block';
			document.getElementById('implantat_24_p_image').style.display = 'block';

			document.getElementById('gm_24_db_txt').style.display = 'block';
			document.getElementById('gm_24_b_txt').style.display = 'block';
			document.getElementById('gm_24_mb_txt').style.display = 'block';
			
			document.getElementById('pd_24_db_txt').style.display = 'block';
			document.getElementById('pd_24_b_txt').style.display = 'block';
			document.getElementById('pd_24_mb_txt').style.display = 'block';
			
			document.getElementById('gm_24_dp_txt').style.display = 'block';
			document.getElementById('gm_24_p_txt').style.display = 'block';
			document.getElementById('gm_24_mp_txt').style.display = 'block';
			
			document.getElementById('pd_24_dp_txt').style.display = 'block';
			document.getElementById('pd_24_p_txt').style.display = 'block';
			document.getElementById('pd_24_mp_txt').style.display = 'block';

			document.getElementById('polygon_24_b').style.display = 'block';
			document.getElementById('polyline_al_24_b').style.display = 'block';
			document.getElementById('polyline_gm_24_b').style.display = 'block';
			
			document.getElementById('polygon_24_p').style.display = 'block';
			document.getElementById('polyline_al_24_p').style.display = 'block';
			document.getElementById('polyline_gm_24_p').style.display = 'block';

            if (tooth_25 == 1 && tooth_24 == 1) {
				document.getElementById('polygon_inter_25_24_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_25_24_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_25_24_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_25_24_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_25_24_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_25_24_p').style.display = 'block';            
            }
            
            if (tooth_24 == 1 && tooth_23 == 1) {
				document.getElementById('polygon_inter_24_23_b').style.display = 'block';            
				document.getElementById('polyline_al_inter_24_23_b').style.display = 'block';            
				document.getElementById('polyline_gm_inter_24_23_b').style.display = 'block';            
            
				document.getElementById('polygon_inter_24_23_p').style.display = 'block';            
				document.getElementById('polyline_al_inter_24_23_p').style.display = 'block';            
				document.getElementById('polyline_gm_inter_24_23_p').style.display = 'block';            
            }        

			document.getElementById('bop_24_db_btn').style.display = 'block';
			document.getElementById('bop_24_b_btn').style.display = 'block';
			document.getElementById('bop_24_mb_btn').style.display = 'block';

			document.getElementById('bop_24_dp_btn').style.display = 'block';
			document.getElementById('bop_24_p_btn').style.display = 'block';
			document.getElementById('bop_24_mp_btn').style.display = 'block';
			
			document.getElementById('pi_24_db_btn').style.display = 'block';
			document.getElementById('pi_24_b_btn').style.display = 'block';
			document.getElementById('pi_24_mb_btn').style.display = 'block';

			document.getElementById('pi_24_dp_btn').style.display = 'block';
			document.getElementById('pi_24_p_btn').style.display = 'block';
			document.getElementById('pi_24_mp_btn').style.display = 'block';
			
			if (bop_24_db == 1) {
				document.getElementById('bop_24_db_rectangle').style.display = 'block';
			}
			if (bop_24_b == 1) {
				document.getElementById('bop_24_b_rectangle').style.display = 'block';
			}
			if (bop_24_mb == 1) {
				document.getElementById('bop_24_mb_rectangle').style.display = 'block';
			}
			if (bop_24_dp == 1) {
				document.getElementById('bop_24_dp_rectangle').style.display = 'block';
			}
			if (bop_24_p == 1) {
				document.getElementById('bop_24_p_rectangle').style.display = 'block';
			}
			if (bop_24_mp == 1) {
				document.getElementById('bop_24_mp_rectangle').style.display = 'block';
			}
			
			if (pi_24_db == 1) {
				document.getElementById('pi_24_db_rectangle').style.display = 'block';
			}
			if (pi_24_b == 1) {
				document.getElementById('pi_24_b_rectangle').style.display = 'block';
			}
			if (pi_24_mb == 1) {
				document.getElementById('pi_24_mb_rectangle').style.display = 'block';
			}
			if (pi_24_dp == 1) {
				document.getElementById('pi_24_dp_rectangle').style.display = 'block';
			}
			if (pi_24_p == 1) {
				document.getElementById('pi_24_p_rectangle').style.display = 'block';
			}
			if (pi_24_mp == 1) {
				document.getElementById('pi_24_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_24();
	}

	function toggle_implant_24() {
		if (Implantat_24 == 0) {
			Implantat_24 = 1;
			
			document.getElementById('implantat_24_b_image').style.display = 'block';
			document.getElementById('implantat_24_p_image').style.display = 'block';
			document.getElementById('implantat_24_tab').style.display = 'block';
			
			document.getElementById('furkation_24_dp_btn').style.display = 'none';
			document.getElementById('furkation_24_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_24_dp').style.display = 'none';
			document.getElementById('furkation_2_24_dp').style.display = 'none';
			document.getElementById('furkation_3_24_dp').style.display = 'none';
			
			document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_24_mp').style.display = 'none';
			document.getElementById('furkation_2_24_mp').style.display = 'none';
			document.getElementById('furkation_3_24_mp').style.display = 'none';
			
			document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_24_mp_tab').style.display = 'none';
		}
		else {
			Implantat_24 = 0;
			
			document.getElementById('implantat_24_b_image').style.display = 'none';
			document.getElementById('implantat_24_p_image').style.display = 'none';
			document.getElementById('implantat_24_tab').style.display = 'none';
			
			document.getElementById('furkation_24_dp_btn').style.display = 'block';
			document.getElementById('furkation_24_mp_btn').style.display = 'block';

			if (Furkation_24_dp == 1) {
				document.getElementById('furkation_1_24_dp').style.display = 'block';
			} else if (Furkation_24_dp == 2) {
				document.getElementById('furkation_2_24_dp').style.display = 'block';
			} else if (Furkation_24_dp == 3) {
				document.getElementById('furkation_3_24_dp').style.display = 'block';
			}
			if (Furkation_24_dp == 1) {
				document.getElementById('furkation_1_24_dp_tab').style.display = 'block';
			} else if (Furkation_24_dp == 2) {
				document.getElementById('furkation_2_24_dp_tab').style.display = 'block';
			} else if (Furkation_24_dp == 3) {
				document.getElementById('furkation_3_24_dp_tab').style.display = 'block';
			}
			if (Furkation_24_mp == 1) {
				document.getElementById('furkation_1_24_mp').style.display = 'block';
			} else if (Furkation_24_mp == 2) {
				document.getElementById('furkation_2_24_mp').style.display = 'block';
			} else if (Furkation_24_mp == 3) {
				document.getElementById('furkation_3_24_mp').style.display = 'block';
			}
			if (Furkation_24_mp == 1) {
				document.getElementById('furkation_1_24_mp_tab').style.display = 'block';
			} else if (Furkation_24_mp == 2) {
				document.getElementById('furkation_2_24_mp_tab').style.display = 'block';
			} else if (Furkation_24_mp == 3) {
				document.getElementById('furkation_3_24_mp_tab').style.display = 'block';
			}
		}
	}

	function toggle_furcation_24_dp() {
		if (Furkation_24_dp == 0) {
			document.getElementById('furkation_1_24_dp_tab').style.display = 'block';
			document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_24_dp').style.display = 'block';
			document.getElementById('furkation_2_24_dp').style.display = 'none';
			document.getElementById('furkation_3_24_dp').style.display = 'none';

			Furkation_24_dp = 1;
		}
		else if (Furkation_24_dp == 1) {
			document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_24_dp_tab').style.display = 'block';
			document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_24_dp').style.display = 'none';
			document.getElementById('furkation_2_24_dp').style.display = 'block';
			document.getElementById('furkation_3_24_dp').style.display = 'none';
			
			Furkation_24_dp = 2;
		}
		else if (Furkation_24_dp == 2) {
			document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_24_dp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_24_dp').style.display = 'none';
			document.getElementById('furkation_2_24_dp').style.display = 'none';
			document.getElementById('furkation_3_24_dp').style.display = 'block';
						
			Furkation_24_dp = 3;
		}
		else if (Furkation_24_dp == 3) {
			document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_24_dp').style.display = 'none';
			document.getElementById('furkation_2_24_dp').style.display = 'none';
			document.getElementById('furkation_3_24_dp').style.display = 'none';
						
			Furkation_24_dp = 0;
		}
	}

	function toggle_furcation_24_mp() {
		if (Furkation_24_mp == 0) {
			document.getElementById('furkation_1_24_mp_tab').style.display = 'block';
			document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_24_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_24_mp').style.display = 'block';
			document.getElementById('furkation_2_24_mp').style.display = 'none';
			document.getElementById('furkation_3_24_mp').style.display = 'none';

			Furkation_24_mp = 1;
		}
		else if (Furkation_24_mp == 1) {
			document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_24_mp_tab').style.display = 'block';
			document.getElementById('furkation_3_24_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_24_mp').style.display = 'none';
			document.getElementById('furkation_2_24_mp').style.display = 'block';
			document.getElementById('furkation_3_24_mp').style.display = 'none';
			
			Furkation_24_mp = 2;
		}
		else if (Furkation_24_mp == 2) {
			document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_24_mp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_24_mp').style.display = 'none';
			document.getElementById('furkation_2_24_mp').style.display = 'none';
			document.getElementById('furkation_3_24_mp').style.display = 'block';
						
			Furkation_24_mp = 3;
		}
		else if (Furkation_24_mp == 3) {
			document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_24_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_24_mp').style.display = 'none';
			document.getElementById('furkation_2_24_mp').style.display = 'none';
			document.getElementById('furkation_3_24_mp').style.display = 'none';
						
			Furkation_24_mp = 0;
		}
	}

	function toggle_bop_24_db() {
		if (bop_24_db == 0) {
			bop_24_db = 1;
			document.getElementById('bop_24_db_rectangle').style.display = 'block';
		}
		else {
			bop_24_db = 0;
			document.getElementById('bop_24_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_24_b() {
		if (bop_24_b == 0) {
			bop_24_b = 1;
			document.getElementById('bop_24_b_rectangle').style.display = 'block';
		}
		else {
			bop_24_b = 0;
			document.getElementById('bop_24_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_24_mb() {
		if (bop_24_mb == 0) {
			bop_24_mb = 1;
			document.getElementById('bop_24_mb_rectangle').style.display = 'block';
		}
		else {
			bop_24_mb = 0;
			document.getElementById('bop_24_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_24_db() {
		if (pi_24_db == 0) {
			pi_24_db = 1;
			document.getElementById('pi_24_db_rectangle').style.display = 'block';
		}
		else {
			pi_24_db = 0;
			document.getElementById('pi_24_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_24_b() {
		if (pi_24_b == 0) {
			pi_24_b = 1;
			document.getElementById('pi_24_b_rectangle').style.display = 'block';
		}
		else {
			pi_24_b = 0;
			document.getElementById('pi_24_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_24_mb() {
		if (pi_24_mb == 0) {
			pi_24_mb = 1;
			document.getElementById('pi_24_mb_rectangle').style.display = 'block';
		}
		else {
			pi_24_mb = 0;
			document.getElementById('pi_24_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_24_dp() {
		if (bop_24_dp == 0) {
			bop_24_dp = 1;
			document.getElementById('bop_24_dp_rectangle').style.display = 'block';
		}
		else {
			bop_24_dp = 0;
			document.getElementById('bop_24_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_24_p() {
		if (bop_24_p == 0) {
			bop_24_p = 1;
			document.getElementById('bop_24_p_rectangle').style.display = 'block';
		}
		else {
			bop_24_p = 0;
			document.getElementById('bop_24_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_24_mp() {
		if (bop_24_mp == 0) {
			bop_24_mp = 1;
			document.getElementById('bop_24_mp_rectangle').style.display = 'block';
		}
		else {
			bop_24_mp = 0;
			document.getElementById('bop_24_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_24_dp() {
		if (pi_24_dp == 0) {
			pi_24_dp = 1;
			document.getElementById('pi_24_dp_rectangle').style.display = 'block';
		}
		else {
			pi_24_dp = 0;
			document.getElementById('pi_24_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_24_p() {
		if (pi_24_p == 0) {
			pi_24_p = 1;
			document.getElementById('pi_24_p_rectangle').style.display = 'block';
		}
		else {
			pi_24_p = 0;
			document.getElementById('pi_24_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_24_mp() {
		if (pi_24_mp == 0) {
			pi_24_mp = 1;
			document.getElementById('pi_24_mp_rectangle').style.display = 'block';
		}
		else {
			pi_24_mp = 0;
			document.getElementById('pi_24_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_24() {
		if (tooth_24 == 1) {
			
		// Variablen aus dem Formular
			pd_24_db = document.forms[0]["pd_24_db"].value;
			pd_24_b = document.forms[0]["pd_24_b"].value;
			pd_24_mb = document.forms[0]["pd_24_mb"].value;

			if (document.forms[0]["pd_24_dp"].value > 3) {document.forms[0]["pd_24_dp"].style.color = 'red';} else {document.forms[0]["pd_24_dp"].style.color = 'black'};
			if (document.forms[0]["pd_24_p"].value > 3) {document.forms[0]["pd_24_p"].style.color = 'red';} else {document.forms[0]["pd_24_p"].style.color = 'black'};
			if (document.forms[0]["pd_24_mp"].value > 3) {document.forms[0]["pd_24_mp"].style.color = 'red';} else {document.forms[0]["pd_24_mp"].style.color = 'black'};
			
			gm_24_db = document.forms[0]["gm_24_db"].value;
			gm_24_b = document.forms[0]["gm_24_b"].value;
			gm_24_mb = document.forms[0]["gm_24_mb"].value;
			
			pd_24_dp = document.forms[0]["pd_24_dp"].value;
			pd_24_p = document.forms[0]["pd_24_p"].value;
			pd_24_mp = document.forms[0]["pd_24_mp"].value;

			if (document.forms[0]["pd_24_db"].value > 3) {document.forms[0]["pd_24_db"].style.color = 'red';} else {document.forms[0]["pd_24_db"].style.color = 'black'};
			if (document.forms[0]["pd_24_b"].value > 3) {document.forms[0]["pd_24_b"].style.color = 'red';} else {document.forms[0]["pd_24_b"].style.color = 'black'};
			if (document.forms[0]["pd_24_mb"].value > 3) {document.forms[0]["pd_24_mb"].style.color = 'red';} else {document.forms[0]["pd_24_mb"].style.color = 'black'};
			
			gm_24_dp = document.forms[0]["gm_24_dp"].value;
			gm_24_p = document.forms[0]["gm_24_p"].value;
			gm_24_mp = document.forms[0]["gm_24_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 24 (bukkal) in der Bitmap
			var x_db_24 = 855;							// distal 24
			var x_mb_24 = 829;							// mesial 24
			var x_b_24 = (x_db_24 + x_mb_24)/2;			// bukkal 24
			
		// Set der horizontalen Koordinaten von Zahn 24 (palatinal) in der Bitmap
			var x_dp_24 = 854;							// distal 24
			var x_mp_24 = 829;							// mesial 24
			var x_p_24 = (x_dp_24 + x_mp_24)/2;			// palatinal 24
			
		// Set der vertikalen Koordinaten von Zahn 24 (bukkal) aus dem Formular
			var y_gm_24_db = gm_OK_b + 6.5 * gm_24_db;	// Margo Gingivae distobukkal 24
			var y_gm_24_b = gm_OK_b + 6.5 * gm_24_b;	// Margo Gingivae bukkal 24
			var y_gm_24_mb = gm_OK_b + 6.5 * gm_24_mb;	// Margo Gingivae mesiobukkal 24
			var y_pd_24_db = 6.5 * pd_24_db;			// Sondierungstiefe distobukkal 24
			var y_pd_24_b = 6.5 * pd_24_b;				// Sondierungstiefe bukkal 24
			var y_pd_24_mb = 6.5 * pd_24_mb;			// Sondierungstiefe mesiobukkal 24
			
		// Set der vertikalen Koordinaten von Zahn 24 (palatinal) aus dem Formular
			var y_gm_24_dp = gm_OK_p - 6.5 * gm_24_dp;	// Margo Gingivae distopalatinal 24
			var y_gm_24_p = gm_OK_p - 6.5 * gm_24_p;	// Margo Gingivae palatinal 24
			var y_gm_24_mp = gm_OK_p - 6.5 * gm_24_mp;	// Margo Gingivae mesiopalatinal 24
			var y_pd_24_dp = 6.5 * pd_24_dp;			// Sondierungstiefe distopalatinal 24
			var y_pd_24_p = 6.5 * pd_24_p;				// Sondierungstiefe palatinal 24
			var y_pd_24_mp = 6.5 * pd_24_mp;			// Sondierungstiefe mesiopalatinal 24
			
		// Berechnung des Attachmentniveaus 24 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_24_db = y_gm_24_db - y_pd_24_db;	// Attachmentniveau distobukkal 24
			var y_al_24_b = y_gm_24_b - y_pd_24_b;		// Attachmentniveau bukkal 24
			var y_al_24_mb = y_gm_24_mb - y_pd_24_mb;	// Attachmentniveau mesiobukkal 24
			
		// Berechnung des Attachmentniveaus 24 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_24_dp = y_gm_24_dp + y_pd_24_dp;	// Attachmentniveau distopalatinal 24
			var y_al_24_p = y_gm_24_p + y_pd_24_p;		// Attachmentniveau palatinal 24
			var y_al_24_mp = y_gm_24_mp + y_pd_24_mp;	// Attachmentniveau mesiopalatinal 24

		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[24].storeCoordinates(
				x_db_24, x_mb_24, x_dp_24, x_mp_24, x_b_24, x_p_24,
				y_gm_24_db, y_gm_24_b, y_gm_24_mb, y_pd_24_db, y_pd_24_b, y_pd_24_mb,
				y_gm_24_dp, y_gm_24_p, y_gm_24_mp, y_pd_24_dp, y_pd_24_p, y_pd_24_mp,
				y_al_24_db, y_al_24_b, y_al_24_mb, y_al_24_dp, y_al_24_p, y_al_24_mp
			);
		
		// Parodontaltasche 24 bukkal zeichnen
			var string = 
				x_db_24 + ", " + y_al_24_db + "  " + 
				x_b_24 + ", " + y_al_24_b + "  " + 
				x_mb_24 + ", " + y_al_24_mb + "  " + 
				x_mb_24 + ", " + y_gm_24_mb + "  " + 
				x_b_24 + ", " + y_gm_24_b + "  " + 
				x_db_24 + ", " + y_gm_24_db;
			document.getElementById("polygon_24_b").setAttribute("points", string);
		// Attachmentniveau 24 bukkal zeichnen
			var string = 
				x_db_24 + ", " + y_al_24_db + "  " + 
				x_b_24 + ", " + y_al_24_b + "  " + 
				x_mb_24 + ", " + y_al_24_mb;
			document.getElementById("polyline_al_24_b").setAttribute("points", string);
		// Margo Gingivae 24 bukkal zeichnen
			var string =
				x_db_24 + ", " + y_gm_24_db + "  " + 
				x_b_24 + ", " + y_gm_24_b + "  " + 
				x_mb_24 + ", " + y_gm_24_mb;
			document.getElementById("polyline_gm_24_b").setAttribute("points", string);

		// Parodontaltasche 24 palatinal zeichnen
			var string = 
				x_dp_24 + ", " + y_al_24_dp + "  " + 
				x_p_24 + ", " + y_al_24_p + "  " + 
				x_mp_24 + ", " + y_al_24_mp + "  " + 
				x_mp_24 + ", " + y_gm_24_mp + "  " + 
				x_p_24 + ", " + y_gm_24_p + "  " + 
				x_dp_24 + ", " + y_gm_24_dp;
			document.getElementById("polygon_24_p").setAttribute("points", string);
		// Attachmentniveau 24 palatinal zeichnen
			var string = 
				x_dp_24 + ", " + y_al_24_dp + "  " + 
				x_p_24 + ", " + y_al_24_p + "  " + 
				x_mp_24 + ", " + y_al_24_mp;
			document.getElementById("polyline_al_24_p").setAttribute("points", string);
		// Margo Gingivae 24 palatinal zeichnen
			var string =
				x_dp_24 + ", " + y_gm_24_dp + "  " + 
				x_p_24 + ", " + y_gm_24_p + "  " + 
				x_mp_24 + ", " + y_gm_24_mp;
			document.getElementById("polyline_gm_24_p").setAttribute("points", string);
		}
        if (tooth_24 == 1 && tooth_23 == 1) {

            pd_23_db = document.forms[0]["pd_23_db"].value;
			gm_23_db = document.forms[0]["gm_23_db"].value;
			
			pd_23_dp = document.forms[0]["pd_23_dp"].value;
			gm_23_dp = document.forms[0]["gm_23_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 23 (bukkal) in der Bitmap
			var x_db_23 = 815;							// distal 23
			
		// Set der horizontalen Koordinaten von Zahn 23 (palatinal) in der Bitmap
			var x_dp_23 = 813;							// distal 23
			
		// Set der vertikalen Koordinaten von Zahn 23 (bukkal) aus dem Formular
			var y_gm_23_db = gm_OK_b + 6.5 * gm_23_db;	// Margo Gingivae distobukkal 23
			var y_pd_23_db = 6.5 * pd_23_db;			// Sondierungstiefe distobukkal 23
			
		// Set der vertikalen Koordinaten von Zahn 23 (palatinal) aus dem Formular
			var y_gm_23_dp = gm_OK_p - 6.5 * gm_23_dp;	// Margo Gingivae distopalatinal 23
			var y_pd_23_dp = 6.5 * pd_23_dp;			// Sondierungstiefe distopalatinal 23
			
		// Berechnung des Attachmentniveaus 23 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_23_db = y_gm_23_db - y_pd_23_db;	// Attachmentniveau distobukkal 23
			
		// Berechnung des Attachmentniveaus 23 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_23_dp = y_gm_23_dp + y_pd_23_dp;	// Attachmentniveau distopalatinal 23

		// Parodontaltasche inter_24_23 bukkal zeichnen
			var string = 
				x_mb_24 + ", " + y_al_24_mb + "  " + 
				x_db_23 + ", " + y_al_23_db + "  " + 
				x_db_23 + ", " + y_gm_23_db + "  " + 
				x_mb_24 + ", " + y_gm_24_mb;
			document.getElementById("polygon_inter_24_23_b").setAttribute("points", string);
		// Attachmentniveau inter_24_23 bukkal zeichnen
			var string = 
				x_mb_24 + ", " + y_al_24_mb + "  " + 
				x_db_23 + ", " + y_al_23_db;
			document.getElementById("polyline_al_inter_24_23_b").setAttribute("points", string);
		// Margo Gingivae inter_24_23 bukkal zeichnen
			var string =
				x_mb_24 + ", " + y_gm_24_mb + "  " + 
				x_db_23 + ", " + y_gm_23_db;
			document.getElementById("polyline_gm_inter_24_23_b").setAttribute("points", string);

        // Parodontaltasche inter_24_23 palatinal zeichnen
			var string = 
				x_mp_24 + ", " + y_al_24_mp + "  " + 
				x_dp_23 + ", " + y_al_23_dp + "  " + 
				x_dp_23 + ", " + y_gm_23_dp + "  " + 
				x_mp_24 + ", " + y_gm_24_mp;
			document.getElementById("polygon_inter_24_23_p").setAttribute("points", string);
		// Attachmentniveau inter_24_23 palatinal zeichnen
			var string = 
				x_mp_24 + ", " + y_al_24_mp + "  " + 
				x_dp_23 + ", " + y_al_23_dp;
			document.getElementById("polyline_al_inter_24_23_p").setAttribute("points", string);
		// Margo Gingivae inter_24_23 palatinal zeichnen
			var string =
				x_mp_24 + ", " + y_gm_24_mp + "  " + 
				x_dp_23 + ", " + y_gm_23_dp;
			document.getElementById("polyline_gm_inter_24_23_p").setAttribute("points", string);
		}
        if (tooth_25 == 1 && tooth_24 == 1) {

            pd_25_mb = document.forms[0]["pd_25_mb"].value;
			gm_25_mb = document.forms[0]["gm_25_mb"].value;
			
			pd_25_mp = document.forms[0]["pd_25_mp"].value;
			gm_25_mp = document.forms[0]["gm_25_mp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 25 (bukkal) in der Bitmap
			var x_mb_25 = 869;							// mesial 25
			
		// Set der horizontalen Koordinaten von Zahn 25 (palatinal) in der Bitmap
			var x_mp_25 = 871;							// mesial 25
			
		// Set der vertikalen Koordinaten von Zahn 25 (bukkal) aus dem Formular
			var y_gm_25_mb = gm_OK_b + 6.5 * gm_25_mb;	// Margo Gingivae mesiobukkal 25
			var y_pd_25_mb = 6.5 * pd_25_mb;			// Sondierungstiefe mesiobukkal 25
			
		// Set der vertikalen Koordinaten von Zahn 25 (palatinal) aus dem Formular
			var y_gm_25_mp = gm_OK_p - 6.5 * gm_25_mp;	// Margo Gingivae mesiopalatinal 25
			var y_pd_25_mp = 6.5 * pd_25_mp;			// Sondierungstiefe mesiopalatinal 25
			
		// Berechnung des Attachmentniveaus 25 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_25_mb = y_gm_25_mb - y_pd_25_mb;	// Attachmentniveau mesiobukkal 25
			
		// Berechnung des Attachmentniveaus 25 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_25_mp = y_gm_25_mp + y_pd_25_mp;	// Attachmentniveau mesiopalatinal 25

		// Parodontaltasche inter_25_24 bukkal zeichnen
			var string = 
				x_mb_25 + ", " + y_al_25_mb + "  " + 
				x_db_24 + ", " + y_al_24_db + "  " + 
				x_db_24 + ", " + y_gm_24_db + "  " + 
				x_mb_25 + ", " + y_gm_25_mb;
			document.getElementById("polygon_inter_25_24_b").setAttribute("points", string);
		// Attachmentniveau inter_25_24 bukkal zeichnen
			var string = 
				x_mb_25 + ", " + y_al_25_mb + "  " + 
				x_db_24 + ", " + y_al_24_db;
			document.getElementById("polyline_al_inter_25_24_b").setAttribute("points", string);
		// Margo Gingivae inter_25_24 bukkal zeichnen
			var string =
				x_mb_25 + ", " + y_gm_25_mb + "  " + 
				x_db_24 + ", " + y_gm_24_db;
			document.getElementById("polyline_gm_inter_25_24_b").setAttribute("points", string);

        // Parodontaltasche inter_25_24 palatinal zeichnen
			var string = 
				x_mp_25 + ", " + y_al_25_mp + "  " + 
				x_dp_24 + ", " + y_al_24_dp + "  " + 
				x_dp_24 + ", " + y_gm_24_dp + "  " + 
				x_mp_25 + ", " + y_gm_25_mp;
			document.getElementById("polygon_inter_25_24_p").setAttribute("points", string);
		// Attachmentniveau inter_25_24 palatinal zeichnen
			var string = 
				x_mp_25 + ", " + y_al_25_mp + "  " + 
				x_dp_24 + ", " + y_al_24_dp;
			document.getElementById("polyline_al_inter_25_24_p").setAttribute("points", string);
		// Margo Gingivae inter_25_24 palatinal zeichnen
			var string =
				x_mp_25 + ", " + y_gm_25_mp + "  " + 
				x_dp_24 + ", " + y_gm_24_dp;
			document.getElementById("polyline_gm_inter_25_24_p").setAttribute("points", string);
		}
	}