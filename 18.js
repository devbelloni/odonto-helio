	// Definition der Variablen für das Formular
		var tooth_18 = 1;
		var Furkation_18_b = 0;
		var Furkation_18_dp = 0;
		var Furkation_18_mp = 0;
		var Implantat_18 = 0;
		var bop_18_db = 0;
		var bop_18_b = 0;
		var bop_18_mb = 0;
		var pi_18_db = 0;
		var pi_18_b = 0;
		var pi_18_mb = 0;
		var bop_18_dp = 0;
		var bop_18_p = 0;
		var bop_18_mp = 0;
		var pi_18_dp = 0;
		var pi_18_p = 0;
		var pi_18_mp = 0;
		var gm_18_db = 0;
		var gm_18_b = 0;
		var gm_18_mb = 0;
		var pd_18_db = 0;
		var pd_18_b = 0;
		var pd_18_mb = 0;
		var gm_18_dp = 0;
		var gm_18_p = 0;
		var gm_18_mp = 0;
		var pd_18_dp = 0;
		var pd_18_p = 0;
		var pd_18_mp = 0;

	function clear_data_18() {
		if (tooth_18 == 1) {
            gm_18_db = 0;
			gm_18_b = 0;
			gm_18_mb = 0;
			pd_18_db = 0;
			pd_18_b = 0;
			pd_18_mb = 0;
	
				document.getElementById('gm_18_db_txt').value = 0;
				document.getElementById('gm_18_b_txt').value = 0;
				document.getElementById('gm_18_mb_txt').value = 0;
				
				document.getElementById('pd_18_db_txt').value = 0;
				document.getElementById('pd_18_b_txt').value = 0;
				document.getElementById('pd_18_mb_txt').value = 0;
			
				document.forms[0]["pd_18_db"].style.color = 'black'
				document.forms[0]["pd_18_b"].style.color = 'black'
				document.forms[0]["pd_18_mb"].style.color = 'black'
			
			gm_18_dp = 0;
			gm_18_p = 0;
			gm_18_mp = 0;
			pd_18_dp = 0;
			pd_18_p = 0;
			pd_18_mp = 0;

				document.getElementById('gm_18_dp_txt').value = 0;
				document.getElementById('gm_18_p_txt').value = 0;
				document.getElementById('gm_18_mp_txt').value = 0;
				
				document.getElementById('pd_18_dp_txt').value = 0;
				document.getElementById('pd_18_p_txt').value = 0;
				document.getElementById('pd_18_mp_txt').value = 0;

				document.forms[0]["pd_18_dp"].style.color = 'black'
				document.forms[0]["pd_18_p"].style.color = 'black'
				document.forms[0]["pd_18_mp"].style.color = 'black'
			
			change_probing_18();
			
			mobility_18 = 0;

				document.getElementById('mobility_18_txt').value = "0";

			note_18 = "";

				document.getElementById('note_18_txt').value = "";

			Furkation_18_b = 0;
			Furkation_18_dp = 0;
			Furkation_18_mp = 0;

				document.getElementById('furkation_1_18_b').style.display = 'none';
				document.getElementById('furkation_2_18_b').style.display = 'none';
				document.getElementById('furkation_3_18_b').style.display = 'none';
					
				document.getElementById('furkation_1_18_b_tab').style.display = 'none';
				document.getElementById('furkation_2_18_b_tab').style.display = 'none';
				document.getElementById('furkation_3_18_b_tab').style.display = 'none';
				
				document.getElementById('furkation_1_18_dp').style.display = 'none';
				document.getElementById('furkation_2_18_dp').style.display = 'none';
				document.getElementById('furkation_3_18_dp').style.display = 'none';
					
				document.getElementById('furkation_1_18_dp_tab').style.display = 'none';
				document.getElementById('furkation_2_18_dp_tab').style.display = 'none';
				document.getElementById('furkation_3_18_dp_tab').style.display = 'none';
				
				document.getElementById('furkation_1_18_mp').style.display = 'none';
				document.getElementById('furkation_2_18_mp').style.display = 'none';
				document.getElementById('furkation_3_18_mp').style.display = 'none';
				
				document.getElementById('furkation_1_18_mp_tab').style.display = 'none';
				document.getElementById('furkation_2_18_mp_tab').style.display = 'none';
				document.getElementById('furkation_3_18_mp_tab').style.display = 'none';
	
			bop_18_db = 0;
			bop_18_b = 0;
			bop_18_mb = 0;
					
			bop_18_dp = 0;
			bop_18_p = 0;
			bop_18_mp = 0;
					
				document.getElementById('bop_18_db_rectangle').style.display = 'none';
				document.getElementById('bop_18_b_rectangle').style.display = 'none';
				document.getElementById('bop_18_mb_rectangle').style.display = 'none';
					
				document.getElementById('bop_18_dp_rectangle').style.display = 'none';
				document.getElementById('bop_18_p_rectangle').style.display = 'none';
				document.getElementById('bop_18_mp_rectangle').style.display = 'none';
				
			pi_18_db = 0;
			pi_18_b = 0;
			pi_18_mb = 0;
					
			pi_18_dp = 0;
			pi_18_p = 0;
			pi_18_mp = 0;

				document.getElementById('pi_18_db_rectangle').style.display = 'none';
				document.getElementById('pi_18_b_rectangle').style.display = 'none';
				document.getElementById('pi_18_mb_rectangle').style.display = 'none';
					
				document.getElementById('pi_18_dp_rectangle').style.display = 'none';
				document.getElementById('pi_18_p_rectangle').style.display = 'none';
				document.getElementById('pi_18_mp_rectangle').style.display = 'none';
        }
    }

	function toggle_tooth_18() {    
		if (tooth_18 === 1) {
			tooth_18 = 0;
			document.getElementById('tooth_line_18_b').style.display = 'block';
			document.getElementById('tooth_line_18_p').style.display = 'block';
			
			document.getElementById('mobility_18_txt').style.display = 'none';
			
			document.getElementById('implantat_18_btn').style.display = 'none';
			document.getElementById('implantat_18_tab').style.display = 'none';
			document.getElementById('implantat_18_b_image').style.display = 'none';
			document.getElementById('implantat_18_p_image').style.display = 'none';
			
			document.getElementById('furkation_18_b_btn').style.display = 'none';
			document.getElementById('furkation_18_dp_btn').style.display = 'none';
			document.getElementById('furkation_18_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_18_b').style.display = 'none';
			document.getElementById('furkation_2_18_b').style.display = 'none';
			document.getElementById('furkation_3_18_b').style.display = 'none';
			
			document.getElementById('furkation_1_18_b_tab').style.display = 'none';
			document.getElementById('furkation_2_18_b_tab').style.display = 'none';
			document.getElementById('furkation_3_18_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_dp').style.display = 'none';
			document.getElementById('furkation_2_18_dp').style.display = 'none';
			document.getElementById('furkation_3_18_dp').style.display = 'none';
			
			document.getElementById('furkation_1_18_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_18_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_18_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_mp').style.display = 'none';
			document.getElementById('furkation_2_18_mp').style.display = 'none';
			document.getElementById('furkation_3_18_mp').style.display = 'none';
			
			document.getElementById('furkation_1_18_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_18_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_18_mp_tab').style.display = 'none';
			
			document.getElementById('gm_18_db_txt').style.display = 'none';
			document.getElementById('gm_18_b_txt').style.display = 'none';
			document.getElementById('gm_18_mb_txt').style.display = 'none';
			
			document.getElementById('pd_18_db_txt').style.display = 'none';
			document.getElementById('pd_18_b_txt').style.display = 'none';
			document.getElementById('pd_18_mb_txt').style.display = 'none';
			
			document.getElementById('gm_18_dp_txt').style.display = 'none';
			document.getElementById('gm_18_p_txt').style.display = 'none';
			document.getElementById('gm_18_mp_txt').style.display = 'none';
			
			document.getElementById('pd_18_dp_txt').style.display = 'none';
			document.getElementById('pd_18_p_txt').style.display = 'none';
			document.getElementById('pd_18_mp_txt').style.display = 'none';
			
			document.getElementById('bop_18_db_rectangle').style.display = 'none';
			document.getElementById('bop_18_b_rectangle').style.display = 'none';
			document.getElementById('bop_18_mb_rectangle').style.display = 'none';
			
			document.getElementById('bop_18_dp_rectangle').style.display = 'none';
			document.getElementById('bop_18_p_rectangle').style.display = 'none';
			document.getElementById('bop_18_mp_rectangle').style.display = 'none';
			
			document.getElementById('bop_18_db_btn').style.display = 'none';
			document.getElementById('bop_18_b_btn').style.display = 'none';
			document.getElementById('bop_18_mb_btn').style.display = 'none';
			
			document.getElementById('bop_18_dp_btn').style.display = 'none';
			document.getElementById('bop_18_p_btn').style.display = 'none';
			document.getElementById('bop_18_mp_btn').style.display = 'none';
			
			document.getElementById('pi_18_db_rectangle').style.display = 'none';
			document.getElementById('pi_18_b_rectangle').style.display = 'none';
			document.getElementById('pi_18_mb_rectangle').style.display = 'none';
			
			document.getElementById('pi_18_dp_rectangle').style.display = 'none';
			document.getElementById('pi_18_p_rectangle').style.display = 'none';
			document.getElementById('pi_18_mp_rectangle').style.display = 'none';
			
			document.getElementById('pi_18_db_btn').style.display = 'none';
			document.getElementById('pi_18_b_btn').style.display = 'none';
			document.getElementById('pi_18_mb_btn').style.display = 'none';
			
			document.getElementById('pi_18_dp_btn').style.display = 'none';
			document.getElementById('pi_18_p_btn').style.display = 'none';
			document.getElementById('pi_18_mp_btn').style.display = 'none';
            
			document.getElementById('polygon_18_b').style.display = 'none';
			document.getElementById('polyline_al_18_b').style.display = 'none';
			document.getElementById('polyline_gm_18_b').style.display = 'none';
			
			document.getElementById('polygon_18_p').style.display = 'none';
			document.getElementById('polyline_al_18_p').style.display = 'none';
			document.getElementById('polyline_gm_18_p').style.display = 'none';
			
			document.getElementById('polygon_inter_18_17_b').style.display = 'none';            
			document.getElementById('polyline_al_inter_18_17_b').style.display = 'none';            
			document.getElementById('polyline_gm_inter_18_17_b').style.display = 'none';            
            
			document.getElementById('polygon_inter_18_17_p').style.display = 'none';            
			document.getElementById('polyline_al_inter_18_17_p').style.display = 'none';            
			document.getElementById('polyline_gm_inter_18_17_p').style.display = 'none';            
			
			document.getElementById('note_18_txt').style.display = 'none';
		}
		else if (Implantat_18 !== 1) {
			tooth_18 = 1;
			document.getElementById('tooth_line_18_b').style.display = 'none';
			document.getElementById('tooth_line_18_p').style.display = 'none';

			document.getElementById('mobility_18_txt').style.display = 'block';

			document.getElementById('implantat_18_btn').style.display = 'block';

			document.getElementById('furkation_18_b_btn').style.display = 'block';
			document.getElementById('furkation_18_dp_btn').style.display = 'block';
			document.getElementById('furkation_18_mp_btn').style.display = 'block';
			
			document.getElementById('gm_18_db_txt').style.display = 'block';
			document.getElementById('gm_18_b_txt').style.display = 'block';
			document.getElementById('gm_18_mb_txt').style.display = 'block';
			
			document.getElementById('pd_18_db_txt').style.display = 'block';
			document.getElementById('pd_18_b_txt').style.display = 'block';
			document.getElementById('pd_18_mb_txt').style.display = 'block';
			
			document.getElementById('gm_18_dp_txt').style.display = 'block';
			document.getElementById('gm_18_p_txt').style.display = 'block';
			document.getElementById('gm_18_mp_txt').style.display = 'block';
			
			document.getElementById('pd_18_dp_txt').style.display = 'block';
			document.getElementById('pd_18_p_txt').style.display = 'block';
			document.getElementById('pd_18_mp_txt').style.display = 'block';
            
			document.getElementById('polygon_18_b').style.display = 'block';
			document.getElementById('polyline_al_18_b').style.display = 'block';
			document.getElementById('polyline_gm_18_b').style.display = 'block';
			
			document.getElementById('polygon_18_p').style.display = 'block';
			document.getElementById('polyline_al_18_p').style.display = 'block';
			document.getElementById('polyline_gm_18_p').style.display = 'block';
             
			if (tooth_18 == 1 && tooth_17 == 1) {
                document.getElementById('polygon_inter_18_17_b').style.display = 'block';
                document.getElementById('polyline_al_inter_18_17_b').style.display = 'block';
                document.getElementById('polyline_gm_inter_18_17_b').style.display = 'block';
                
                document.getElementById('polygon_inter_18_17_p').style.display = 'block';
                document.getElementById('polyline_al_inter_18_17_p').style.display = 'block';
                document.getElementById('polyline_gm_inter_18_17_p').style.display = 'block';            
            }
           
			document.getElementById('note_18_txt').style.display = 'block';

			if (Furkation_18_b == 1) {
				document.getElementById('furkation_1_18_b').style.display = 'block';
			} else if (Furkation_18_b == 2) {
				document.getElementById('furkation_2_18_b').style.display = 'block';
			} else if (Furkation_18_b == 3) {
				document.getElementById('furkation_3_18_b').style.display = 'block';
			}
			if (Furkation_18_b == 1) {
				document.getElementById('furkation_1_18_b_tab').style.display = 'block';
			} else if (Furkation_18_b == 2) {
				document.getElementById('furkation_2_18_b_tab').style.display = 'block';
			} else if (Furkation_18_b == 3) {
				document.getElementById('furkation_3_18_b_tab').style.display = 'block';
			}
			if (Furkation_18_dp == 1) {
				document.getElementById('furkation_1_18_dp').style.display = 'block';
			} else if (Furkation_18_dp == 2) {
				document.getElementById('furkation_2_18_dp').style.display = 'block';
			} else if (Furkation_18_dp == 3) {
				document.getElementById('furkation_3_18_dp').style.display = 'block';
			}
			if (Furkation_18_dp == 1) {
				document.getElementById('furkation_1_18_dp_tab').style.display = 'block';
			} else if (Furkation_18_dp == 2) {
				document.getElementById('furkation_2_18_dp_tab').style.display = 'block';
			} else if (Furkation_18_dp == 3) {
				document.getElementById('furkation_3_18_dp_tab').style.display = 'block';
			}
			if (Furkation_18_mp == 1) {
				document.getElementById('furkation_1_18_mp').style.display = 'block';
			} else if (Furkation_18_mp == 2) {
				document.getElementById('furkation_2_18_mp').style.display = 'block';
			} else if (Furkation_18_mp == 3) {
				document.getElementById('furkation_3_18_mp').style.display = 'block';
			}
			if (Furkation_18_mp == 1) {
				document.getElementById('furkation_1_18_mp_tab').style.display = 'block';
			} else if (Furkation_18_mp == 2) {
				document.getElementById('furkation_2_18_mp_tab').style.display = 'block';
			} else if (Furkation_18_mp == 3) {
				document.getElementById('furkation_3_18_mp_tab').style.display = 'block';
			}

			document.getElementById('bop_18_db_btn').style.display = 'block';
			document.getElementById('bop_18_b_btn').style.display = 'block';
			document.getElementById('bop_18_mb_btn').style.display = 'block';

			document.getElementById('bop_18_dp_btn').style.display = 'block';
			document.getElementById('bop_18_p_btn').style.display = 'block';
			document.getElementById('bop_18_mp_btn').style.display = 'block';
			
			if (bop_18_db == 1) {
				document.getElementById('bop_18_db_rectangle').style.display = 'block';
			}
			if (bop_18_b == 1) {
				document.getElementById('bop_18_b_rectangle').style.display = 'block';
			}
			if (bop_18_mb == 1) {
				document.getElementById('bop_18_mb_rectangle').style.display = 'block';
			}
			if (bop_18_dp == 1) {
				document.getElementById('bop_18_dp_rectangle').style.display = 'block';
			}
			if (bop_18_p == 1) {
				document.getElementById('bop_18_p_rectangle').style.display = 'block';
			}
			if (bop_18_mp == 1) {
				document.getElementById('bop_18_mp_rectangle').style.display = 'block';
			}
			
			document.getElementById('pi_18_db_btn').style.display = 'block';
			document.getElementById('pi_18_b_btn').style.display = 'block';
			document.getElementById('pi_18_mb_btn').style.display = 'block';

			document.getElementById('pi_18_dp_btn').style.display = 'block';
			document.getElementById('pi_18_p_btn').style.display = 'block';
			document.getElementById('pi_18_mp_btn').style.display = 'block';
			
			if (pi_18_db == 1) {
				document.getElementById('pi_18_db_rectangle').style.display = 'block';
			}
			if (pi_18_b == 1) {
				document.getElementById('pi_18_b_rectangle').style.display = 'block';
			}
			if (pi_18_mb == 1) {
				document.getElementById('pi_18_mb_rectangle').style.display = 'block';
			}
			if (pi_18_dp == 1) {
				document.getElementById('pi_18_dp_rectangle').style.display = 'block';
			}
			if (pi_18_p == 1) {
				document.getElementById('pi_18_p_rectangle').style.display = 'block';
			}
			if (pi_18_mp == 1) {
				document.getElementById('pi_18_mp_rectangle').style.display = 'block';
			}
		}		
		else if (Implantat_18 == 1) {
			tooth_18 = 1;
			document.getElementById('tooth_line_18_b').style.display = 'none';
			document.getElementById('tooth_line_18_p').style.display = 'none';

			document.getElementById('mobility_18_txt').style.display = 'block';
			
			document.getElementById('note_18_txt').style.display = 'block';

			document.getElementById('implantat_18_btn').style.display = 'block';
			document.getElementById('implantat_18_tab').style.display = 'block';
			document.getElementById('implantat_18_b_image').style.display = 'block';
			document.getElementById('implantat_18_p_image').style.display = 'block';

			document.getElementById('gm_18_db_txt').style.display = 'block';
			document.getElementById('gm_18_b_txt').style.display = 'block';
			document.getElementById('gm_18_mb_txt').style.display = 'block';
			
			document.getElementById('pd_18_db_txt').style.display = 'block';
			document.getElementById('pd_18_b_txt').style.display = 'block';
			document.getElementById('pd_18_mb_txt').style.display = 'block';
			
			document.getElementById('gm_18_dp_txt').style.display = 'block';
			document.getElementById('gm_18_p_txt').style.display = 'block';
			document.getElementById('gm_18_mp_txt').style.display = 'block';
			
			document.getElementById('pd_18_dp_txt').style.display = 'block';
			document.getElementById('pd_18_p_txt').style.display = 'block';
			document.getElementById('pd_18_mp_txt').style.display = 'block';
            
			document.getElementById('polygon_18_b').style.display = 'block';
			document.getElementById('polyline_al_18_b').style.display = 'block';
			document.getElementById('polyline_gm_18_b').style.display = 'block';
			
			document.getElementById('polygon_18_p').style.display = 'block';
			document.getElementById('polyline_al_18_p').style.display = 'block';
			document.getElementById('polyline_gm_18_p').style.display = 'block';
            
			if (tooth_18 == 1 && tooth_17 == 1) {
                document.getElementById('polygon_inter_18_17_b').style.display = 'block';
                document.getElementById('polyline_al_inter_18_17_b').style.display = 'block';
                document.getElementById('polyline_gm_inter_18_17_b').style.display = 'block';
                
                document.getElementById('polygon_inter_18_17_p').style.display = 'block';
                document.getElementById('polyline_al_inter_18_17_p').style.display = 'block';
                document.getElementById('polyline_gm_inter_18_17_p').style.display = 'block';            
            }

			document.getElementById('bop_18_db_btn').style.display = 'block';
			document.getElementById('bop_18_b_btn').style.display = 'block';
			document.getElementById('bop_18_mb_btn').style.display = 'block';

			document.getElementById('bop_18_dp_btn').style.display = 'block';
			document.getElementById('bop_18_p_btn').style.display = 'block';
			document.getElementById('bop_18_mp_btn').style.display = 'block';
			
			document.getElementById('pi_18_db_btn').style.display = 'block';
			document.getElementById('pi_18_b_btn').style.display = 'block';
			document.getElementById('pi_18_mb_btn').style.display = 'block';

			document.getElementById('pi_18_dp_btn').style.display = 'block';
			document.getElementById('pi_18_p_btn').style.display = 'block';
			document.getElementById('pi_18_mp_btn').style.display = 'block';
			
			if (bop_18_db == 1) {
				document.getElementById('bop_18_db_rectangle').style.display = 'block';
			}
			if (bop_18_b == 1) {
				document.getElementById('bop_18_b_rectangle').style.display = 'block';
			}
			if (bop_18_mb == 1) {
				document.getElementById('bop_18_mb_rectangle').style.display = 'block';
			}
			if (bop_18_dp == 1) {
				document.getElementById('bop_18_dp_rectangle').style.display = 'block';
			}
			if (bop_18_p == 1) {
				document.getElementById('bop_18_p_rectangle').style.display = 'block';
			}
			if (bop_18_mp == 1) {
				document.getElementById('bop_18_mp_rectangle').style.display = 'block';
			}
			
			if (pi_18_db == 1) {
				document.getElementById('pi_18_db_rectangle').style.display = 'block';
			}
			if (pi_18_b == 1) {
				document.getElementById('pi_18_b_rectangle').style.display = 'block';
			}
			if (pi_18_mb == 1) {
				document.getElementById('pi_18_mb_rectangle').style.display = 'block';
			}
			if (pi_18_dp == 1) {
				document.getElementById('pi_18_dp_rectangle').style.display = 'block';
			}
			if (pi_18_p == 1) {
				document.getElementById('pi_18_p_rectangle').style.display = 'block';
			}
			if (pi_18_mp == 1) {
				document.getElementById('pi_18_mp_rectangle').style.display = 'block';
			}
		}
		change_probing_18();
	}
	
	function toggle_implant_18() {
		if (Implantat_18 == 0) {
			Implantat_18 = 1;
			
			document.getElementById('implantat_18_b_image').style.display = 'block';
			document.getElementById('implantat_18_p_image').style.display = 'block';
			document.getElementById('implantat_18_tab').style.display = 'block';
			
			document.getElementById('furkation_18_b_btn').style.display = 'none';
			document.getElementById('furkation_18_dp_btn').style.display = 'none';
			document.getElementById('furkation_18_mp_btn').style.display = 'none';
			
			document.getElementById('furkation_1_18_b').style.display = 'none';
			document.getElementById('furkation_2_18_b').style.display = 'none';
			document.getElementById('furkation_3_18_b').style.display = 'none';
			
			document.getElementById('furkation_1_18_b_tab').style.display = 'none';
			document.getElementById('furkation_2_18_b_tab').style.display = 'none';
			document.getElementById('furkation_3_18_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_dp').style.display = 'none';
			document.getElementById('furkation_2_18_dp').style.display = 'none';
			document.getElementById('furkation_3_18_dp').style.display = 'none';
			
			document.getElementById('furkation_1_18_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_18_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_18_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_mp').style.display = 'none';
			document.getElementById('furkation_2_18_mp').style.display = 'none';
			document.getElementById('furkation_3_18_mp').style.display = 'none';
			
			document.getElementById('furkation_1_18_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_18_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_18_mp_tab').style.display = 'none';
		}
		else {
			Implantat_18 = 0;
			
			document.getElementById('implantat_18_b_image').style.display = 'none';
			document.getElementById('implantat_18_p_image').style.display = 'none';
			document.getElementById('implantat_18_tab').style.display = 'none';
			
			document.getElementById('furkation_18_b_btn').style.display = 'block';
			document.getElementById('furkation_18_dp_btn').style.display = 'block';
			document.getElementById('furkation_18_mp_btn').style.display = 'block';

			if (Furkation_18_b == 1) {
				document.getElementById('furkation_1_18_b').style.display = 'block';
			} else if (Furkation_18_b == 2) {
				document.getElementById('furkation_2_18_b').style.display = 'block';
			} else if (Furkation_18_b == 3) {
				document.getElementById('furkation_3_18_b').style.display = 'block';
			}
			if (Furkation_18_b == 1) {
				document.getElementById('furkation_1_18_b_tab').style.display = 'block';
			} else if (Furkation_18_b == 2) {
				document.getElementById('furkation_2_18_b_tab').style.display = 'block';
			} else if (Furkation_18_b == 3) {
				document.getElementById('furkation_3_18_b_tab').style.display = 'block';
			}
			if (Furkation_18_dp == 1) {
				document.getElementById('furkation_1_18_dp').style.display = 'block';
			} else if (Furkation_18_dp == 2) {
				document.getElementById('furkation_2_18_dp').style.display = 'block';
			} else if (Furkation_18_dp == 3) {
				document.getElementById('furkation_3_18_dp').style.display = 'block';
			}
			if (Furkation_18_dp == 1) {
				document.getElementById('furkation_1_18_dp_tab').style.display = 'block';
			} else if (Furkation_18_dp == 2) {
				document.getElementById('furkation_2_18_dp_tab').style.display = 'block';
			} else if (Furkation_18_dp == 3) {
				document.getElementById('furkation_3_18_dp_tab').style.display = 'block';
			}
			if (Furkation_18_mp == 1) {
				document.getElementById('furkation_1_18_mp').style.display = 'block';
			} else if (Furkation_18_mp == 2) {
				document.getElementById('furkation_2_18_mp').style.display = 'block';
			} else if (Furkation_18_mp == 3) {
				document.getElementById('furkation_3_18_mp').style.display = 'block';
			}
			if (Furkation_18_mp == 1) {
				document.getElementById('furkation_1_18_mp_tab').style.display = 'block';
			} else if (Furkation_18_mp == 2) {
				document.getElementById('furkation_2_18_mp_tab').style.display = 'block';
			} else if (Furkation_18_mp == 3) {
				document.getElementById('furkation_3_18_mp_tab').style.display = 'block';
			}
		}
	}
	
	function toggle_furcation_18_b() {
		if (Furkation_18_b == 0) {
			document.getElementById('furkation_1_18_b_tab').style.display = 'block';
			document.getElementById('furkation_2_18_b_tab').style.display = 'none';
			document.getElementById('furkation_3_18_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_b').style.display = 'block';
			document.getElementById('furkation_2_18_b').style.display = 'none';
			document.getElementById('furkation_3_18_b').style.display = 'none';

			Furkation_18_b = 1;
		}
		else if (Furkation_18_b == 1) {
			document.getElementById('furkation_1_18_b_tab').style.display = 'none';
			document.getElementById('furkation_2_18_b_tab').style.display = 'block';
			document.getElementById('furkation_3_18_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_b').style.display = 'none';
			document.getElementById('furkation_2_18_b').style.display = 'block';
			document.getElementById('furkation_3_18_b').style.display = 'none';
			
			Furkation_18_b = 2;
		}
		else if (Furkation_18_b == 2) {
			document.getElementById('furkation_1_18_b_tab').style.display = 'none';
			document.getElementById('furkation_2_18_b_tab').style.display = 'none';
			document.getElementById('furkation_3_18_b_tab').style.display = 'block';
			
			document.getElementById('furkation_1_18_b').style.display = 'none';
			document.getElementById('furkation_2_18_b').style.display = 'none';
			document.getElementById('furkation_3_18_b').style.display = 'block';
						
			Furkation_18_b = 3;
		}
		else if (Furkation_18_b == 3) {
			document.getElementById('furkation_1_18_b_tab').style.display = 'none';
			document.getElementById('furkation_2_18_b_tab').style.display = 'none';
			document.getElementById('furkation_3_18_b_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_b').style.display = 'none';
			document.getElementById('furkation_2_18_b').style.display = 'none';
			document.getElementById('furkation_3_18_b').style.display = 'none';
						
			Furkation_18_b = 0;
		}
	}

	function toggle_furcation_18_dp() {
		if (Furkation_18_dp == 0) {
			document.getElementById('furkation_1_18_dp_tab').style.display = 'block';
			document.getElementById('furkation_2_18_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_18_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_dp').style.display = 'block';
			document.getElementById('furkation_2_18_dp').style.display = 'none';
			document.getElementById('furkation_3_18_dp').style.display = 'none';

			Furkation_18_dp = 1;
		}
		else if (Furkation_18_dp == 1) {
			document.getElementById('furkation_1_18_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_18_dp_tab').style.display = 'block';
			document.getElementById('furkation_3_18_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_dp').style.display = 'none';
			document.getElementById('furkation_2_18_dp').style.display = 'block';
			document.getElementById('furkation_3_18_dp').style.display = 'none';
			
			Furkation_18_dp = 2;
		}
		else if (Furkation_18_dp == 2) {
			document.getElementById('furkation_1_18_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_18_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_18_dp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_18_dp').style.display = 'none';
			document.getElementById('furkation_2_18_dp').style.display = 'none';
			document.getElementById('furkation_3_18_dp').style.display = 'block';
						
			Furkation_18_dp = 3;
		}
		else if (Furkation_18_dp == 3) {
			document.getElementById('furkation_1_18_dp_tab').style.display = 'none';
			document.getElementById('furkation_2_18_dp_tab').style.display = 'none';
			document.getElementById('furkation_3_18_dp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_dp').style.display = 'none';
			document.getElementById('furkation_2_18_dp').style.display = 'none';
			document.getElementById('furkation_3_18_dp').style.display = 'none';
						
			Furkation_18_dp = 0;
		}
	}

	function toggle_furcation_18_mp() {
		if (Furkation_18_mp == 0) {
			document.getElementById('furkation_1_18_mp_tab').style.display = 'block';
			document.getElementById('furkation_2_18_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_18_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_mp').style.display = 'block';
			document.getElementById('furkation_2_18_mp').style.display = 'none';
			document.getElementById('furkation_3_18_mp').style.display = 'none';

			Furkation_18_mp = 1;
		}
		else if (Furkation_18_mp == 1) {
			document.getElementById('furkation_1_18_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_18_mp_tab').style.display = 'block';
			document.getElementById('furkation_3_18_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_mp').style.display = 'none';
			document.getElementById('furkation_2_18_mp').style.display = 'block';
			document.getElementById('furkation_3_18_mp').style.display = 'none';
			
			Furkation_18_mp = 2;
		}
		else if (Furkation_18_mp == 2) {
			document.getElementById('furkation_1_18_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_18_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_18_mp_tab').style.display = 'block';
			
			document.getElementById('furkation_1_18_mp').style.display = 'none';
			document.getElementById('furkation_2_18_mp').style.display = 'none';
			document.getElementById('furkation_3_18_mp').style.display = 'block';
						
			Furkation_18_mp = 3;
		}
		else if (Furkation_18_mp == 3) {
			document.getElementById('furkation_1_18_mp_tab').style.display = 'none';
			document.getElementById('furkation_2_18_mp_tab').style.display = 'none';
			document.getElementById('furkation_3_18_mp_tab').style.display = 'none';
			
			document.getElementById('furkation_1_18_mp').style.display = 'none';
			document.getElementById('furkation_2_18_mp').style.display = 'none';
			document.getElementById('furkation_3_18_mp').style.display = 'none';
						
			Furkation_18_mp = 0;
		}
	}

	function toggle_bop_18_db() {
		if (bop_18_db == 0) {
			bop_18_db = 1;
			document.getElementById('bop_18_db_rectangle').style.display = 'block';
		}
		else {
			bop_18_db = 0;
			document.getElementById('bop_18_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_18_b() {
		if (bop_18_b == 0) {
			bop_18_b = 1;
			document.getElementById('bop_18_b_rectangle').style.display = 'block';
		}
		else {
			bop_18_b = 0;
			document.getElementById('bop_18_b_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_18_mb() {
		if (bop_18_mb == 0) {
			bop_18_mb = 1;
			document.getElementById('bop_18_mb_rectangle').style.display = 'block';
		}
		else {
			bop_18_mb = 0;
			document.getElementById('bop_18_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_18_db() {
		if (pi_18_db == 0) {
			pi_18_db = 1;
			document.getElementById('pi_18_db_rectangle').style.display = 'block';
		}
		else {
			pi_18_db = 0;
			document.getElementById('pi_18_db_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_18_b() {
		if (pi_18_b == 0) {
			pi_18_b = 1;
			document.getElementById('pi_18_b_rectangle').style.display = 'block';
		}
		else {
			pi_18_b = 0;
			document.getElementById('pi_18_b_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_18_mb() {
		if (pi_18_mb == 0) {
			pi_18_mb = 1;
			document.getElementById('pi_18_mb_rectangle').style.display = 'block';
		}
		else {
			pi_18_mb = 0;
			document.getElementById('pi_18_mb_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_18_dp() {
		if (bop_18_dp == 0) {
			bop_18_dp = 1;
			document.getElementById('bop_18_dp_rectangle').style.display = 'block';
		}
		else {
			bop_18_dp = 0;
			document.getElementById('bop_18_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_bop_18_p() {
		if (bop_18_p == 0) {
			bop_18_p = 1;
			document.getElementById('bop_18_p_rectangle').style.display = 'block';
		}
		else {
			bop_18_p = 0;
			document.getElementById('bop_18_p_rectangle').style.display = 'none';
		}
	}

	function toggle_bop_18_mp() {
		if (bop_18_mp == 0) {
			bop_18_mp = 1;
			document.getElementById('bop_18_mp_rectangle').style.display = 'block';
		}
		else {
			bop_18_mp = 0;
			document.getElementById('bop_18_mp_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_18_dp() {
		if (pi_18_dp == 0) {
			pi_18_dp = 1;
			document.getElementById('pi_18_dp_rectangle').style.display = 'block';
		}
		else {
			pi_18_dp = 0;
			document.getElementById('pi_18_dp_rectangle').style.display = 'none';
		}
	}
	
	function toggle_pi_18_p() {
		if (pi_18_p == 0) {
			pi_18_p = 1;
			document.getElementById('pi_18_p_rectangle').style.display = 'block';
		}
		else {
			pi_18_p = 0;
			document.getElementById('pi_18_p_rectangle').style.display = 'none';
		}
	}

	function toggle_pi_18_mp() {
		if (pi_18_mp == 0) {
			pi_18_mp = 1;
			document.getElementById('pi_18_mp_rectangle').style.display = 'block';
		}
		else {
			pi_18_mp = 0;
			document.getElementById('pi_18_mp_rectangle').style.display = 'none';
		}
	}

	function change_probing_18() {
		if (tooth_18 == 1) {
		// Variablen aus dem Formular
			pd_18_db = document.forms[0]["pd_18_db"].value;
			pd_18_b = document.forms[0]["pd_18_b"].value;
			pd_18_mb = document.forms[0]["pd_18_mb"].value;

			if (document.forms[0]["pd_18_dp"].value > 3) {document.forms[0]["pd_18_dp"].style.color = 'red';} else {document.forms[0]["pd_18_dp"].style.color = 'black'}
			if (document.forms[0]["pd_18_p"].value > 3) {document.forms[0]["pd_18_p"].style.color = 'red';} else {document.forms[0]["pd_18_p"].style.color = 'black'}
			if (document.forms[0]["pd_18_mp"].value > 3) {document.forms[0]["pd_18_mp"].style.color = 'red';} else {document.forms[0]["pd_18_mp"].style.color = 'black'}
			
			gm_18_db = document.forms[0]["gm_18_db"].value;
			gm_18_b = document.forms[0]["gm_18_b"].value;
			gm_18_mb = document.forms[0]["gm_18_mb"].value;
			
			pd_18_dp = document.forms[0]["pd_18_dp"].value;
			pd_18_p = document.forms[0]["pd_18_p"].value;
			pd_18_mp = document.forms[0]["pd_18_mp"].value;

			if (document.forms[0]["pd_18_db"].value > 3) {document.forms[0]["pd_18_db"].style.color = 'red';} else {document.forms[0]["pd_18_db"].style.color = 'black'}
			if (document.forms[0]["pd_18_b"].value > 3) {document.forms[0]["pd_18_b"].style.color = 'red';} else {document.forms[0]["pd_18_b"].style.color = 'black'}
			if (document.forms[0]["pd_18_mb"].value > 3) {document.forms[0]["pd_18_mb"].style.color = 'red';} else {document.forms[0]["pd_18_mb"].style.color = 'black'}
			
			gm_18_dp = document.forms[0]["gm_18_dp"].value;
			gm_18_p = document.forms[0]["gm_18_p"].value;
			gm_18_mp = document.forms[0]["gm_18_mp"].value;

		// Set der horizontalen Koordinaten von Zahn 18 (bukkal) in der Bitmap
			var x_db_18 = 295;							// distal 18
			var x_mb_18 = 332;							// mesial 18
			var x_b_18 = (x_db_18 + x_mb_18)/2;			// bukkal 18
			
		// Set der horizontalen Koordinaten von Zahn 18 (palatinal) in der Bitmap
			var x_dp_18 = 291;							// distal 18
			var x_mp_18 = 331;							// mesial 18
			var x_p_18 = (x_dp_18 + x_mp_18)/2;			// palatinal 18
			
		// Set der vertikalen Koordinaten von Zahn 18 (bukkal) aus dem Formular
			var y_gm_18_db = gm_OK_b + 6.5 * gm_18_db;	// Margo Gingivae distobukkal 18
			var y_gm_18_b = gm_OK_b + 6.5 * gm_18_b;	// Margo Gingivae bukkal 18
			var y_gm_18_mb = gm_OK_b + 6.5 * gm_18_mb;	// Margo Gingivae mesiobukkal 18
			var y_pd_18_db = 6.5 * pd_18_db;			// Sondierungstiefe distobukkal 18
			var y_pd_18_b = 6.5 * pd_18_b;				// Sondierungstiefe bukkal 18
			var y_pd_18_mb = 6.5 * pd_18_mb;			// Sondierungstiefe mesiobukkal 18
			
		// Set der vertikalen Koordinaten von Zahn 18 (palatinal) aus dem Formular
			var y_gm_18_dp = gm_OK_p - 6.5 * gm_18_dp;	// Margo Gingivae distopalatinal 18
			var y_gm_18_p = gm_OK_p - 6.5 * gm_18_p;	// Margo Gingivae palatinal 18
			var y_gm_18_mp = gm_OK_p - 6.5 * gm_18_mp;	// Margo Gingivae mesiopalatinal 18
			var y_pd_18_dp = 6.5 * pd_18_dp;			// Sondierungstiefe distopalatinal 18
			var y_pd_18_p = 6.5 * pd_18_p;				// Sondierungstiefe palatinal 18
			var y_pd_18_mp = 6.5 * pd_18_mp;			// Sondierungstiefe mesiopalatinal 18
			
		// Berechnung des Attachmentniveaus 18 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_18_db = y_gm_18_db - y_pd_18_db;	// Attachmentniveau distobukkal 18
			var y_al_18_b = y_gm_18_b - y_pd_18_b;		// Attachmentniveau bukkal 18
			var y_al_18_mb = y_gm_18_mb - y_pd_18_mb;	// Attachmentniveau mesiobukkal 18
			
		// Berechnung des Attachmentniveaus 18 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_18_dp = y_gm_18_dp + y_pd_18_dp;	// Attachmentniveau distopalatinal 18
			var y_al_18_p = y_gm_18_p + y_pd_18_p;		// Attachmentniveau palatinal 18
			var y_al_18_mp = y_gm_18_mp + y_pd_18_mp;	// Attachmentniveau mesiopalatinal 18
			
		// Koordinaten in Objekt ablegen und Fläche berechnen
			pockets[18].storeCoordinates(
				x_db_18, x_mb_18, x_dp_18, x_mp_18, x_b_18, x_p_18,
				y_gm_18_db, y_gm_18_b, y_gm_18_mb, y_pd_18_db, y_pd_18_b, y_pd_18_mb,
				y_gm_18_dp, y_gm_18_p, y_gm_18_mp, y_pd_18_dp, y_pd_18_p, y_pd_18_mp,
				y_al_18_db, y_al_18_b, y_al_18_mb, y_al_18_dp, y_al_18_p, y_al_18_mp
			);
				
		// Parodontaltasche 18 bukkal zeichnen
			var string = 
				x_db_18 + ", " + y_al_18_db + "  " + 
				x_b_18 + ", " + y_al_18_b + "  " + 
				x_mb_18 + ", " + y_al_18_mb + "  " + 
				x_mb_18 + ", " + y_gm_18_mb + "  " + 
				x_b_18 + ", " + y_gm_18_b + "  " + 
				x_db_18 + ", " + y_gm_18_db;
			document.getElementById("polygon_18_b").setAttribute("points", string);
		// Attachmentniveau 18 bukkal zeichnen
			var string = 
				x_db_18 + ", " + y_al_18_db + "  " + 
				x_b_18 + ", " + y_al_18_b + "  " + 
				x_mb_18 + ", " + y_al_18_mb;
			document.getElementById("polyline_al_18_b").setAttribute("points", string);
		// Margo Gingivae 18 bukkal zeichnen
			var string =
				x_db_18 + ", " + y_gm_18_db + "  " + 
				x_b_18 + ", " + y_gm_18_b + "  " + 
				x_mb_18 + ", " + y_gm_18_mb;
			document.getElementById("polyline_gm_18_b").setAttribute("points", string);

		// Parodontaltasche 18 palatinal zeichnen
			var string = 
				x_dp_18 + ", " + y_al_18_dp + "  " + 
				x_p_18 + ", " + y_al_18_p + "  " + 
				x_mp_18 + ", " + y_al_18_mp + "  " + 
				x_mp_18 + ", " + y_gm_18_mp + "  " + 
				x_p_18 + ", " + y_gm_18_p + "  " + 
				x_dp_18 + ", " + y_gm_18_dp;
			document.getElementById("polygon_18_p").setAttribute("points", string);
		// Attachmentniveau 18 palatinal zeichnen
			var string = 
				x_dp_18 + ", " + y_al_18_dp + "  " + 
				x_p_18 + ", " + y_al_18_p + "  " + 
				x_mp_18 + ", " + y_al_18_mp;
			document.getElementById("polyline_al_18_p").setAttribute("points", string);
		// Margo Gingivae 18 palatinal zeichnen
			var string =
				x_dp_18 + ", " + y_gm_18_dp + "  " + 
				x_p_18 + ", " + y_gm_18_p + "  " + 
				x_mp_18 + ", " + y_gm_18_mp;
			document.getElementById("polyline_gm_18_p").setAttribute("points", string);
		}
        if (tooth_18 == 1 && tooth_17 == 1) {

            pd_17_db = document.forms[0]["pd_17_db"].value;            
			gm_17_db = document.forms[0]["gm_17_db"].value;
			
			pd_17_dp = document.forms[0]["pd_17_dp"].value;
			gm_17_dp = document.forms[0]["gm_17_dp"].value;
            
		// Set der horizontalen Koordinaten von Zahn 17 (bukkal) in der Bitmap
			var x_db_17 = 346;							// distal 17
			
		// Set der horizontalen Koordinaten von Zahn 17 (palatinal) in der Bitmap
			var x_dp_17 = 344;							// distal 17
			
		// Set der vertikalen Koordinaten von Zahn 17 (bukkal) aus dem Formular
			var y_gm_17_db = gm_OK_b + 6.5 * gm_17_db;	// Margo Gingivae distobukkal 17
			var y_pd_17_db = 6.5 * pd_17_db;			// Sondierungstiefe distobukkal 17
			
		// Set der vertikalen Koordinaten von Zahn 17 (palatinal) aus dem Formular
			var y_gm_17_dp = gm_OK_p - 6.5 * gm_17_dp;	// Margo Gingivae distopalatinal 17
			var y_pd_17_dp = 6.5 * pd_17_dp;			// Sondierungstiefe distopalatinal 17
			
		// Berechnung des Attachmentniveaus 17 (bukkal) aus Margo Gingivae und Sondierungstiefe
			var y_al_17_db = y_gm_17_db - y_pd_17_db;	// Attachmentniveau distobukkal 17
			
		// Berechnung des Attachmentniveaus 17 (palatinal) aus Margo Gingivae und Sondierungstiefe
			var y_al_17_dp = y_gm_17_dp + y_pd_17_dp;	// Attachmentniveau distopalatinal 17

		// Parodontaltasche inter_18_17 bukkal zeichnen
			var string = 
				x_mb_18 + ", " + y_al_18_mb + "  " + 
				x_db_17 + ", " + y_al_17_db + "  " + 
				x_db_17 + ", " + y_gm_17_db + "  " + 
				x_mb_18 + ", " + y_gm_18_mb;            
            
			document.getElementById("polygon_inter_18_17_b").setAttribute("points", string);
		// Attachmentniveau inter_18_17 bukkal zeichnen
			var string = 
				x_mb_18 + ", " + y_al_18_mb + "  " + 
				x_db_17 + ", " + y_al_17_db;
			document.getElementById("polyline_al_inter_18_17_b").setAttribute("points", string);
		// Margo Gingivae inter_18_17 bukkal zeichnen
			var string =
				x_mb_18 + ", " + y_gm_18_mb + "  " + 
				x_db_17 + ", " + y_gm_17_db;
			document.getElementById("polyline_gm_inter_18_17_b").setAttribute("points", string);

        // Parodontaltasche inter_18_17 palatinal zeichnen
			var string = 
				x_mp_18 + ", " + y_al_18_mp + "  " + 
				x_dp_17 + ", " + y_al_17_dp + "  " + 
				x_dp_17 + ", " + y_gm_17_dp + "  " + 
				x_mp_18 + ", " + y_gm_18_mp;
			document.getElementById("polygon_inter_18_17_p").setAttribute("points", string);
		// Attachmentniveau inter_18_17 palatinal zeichnen
			var string = 
				x_mp_18 + ", " + y_al_18_mp + "  " + 
				x_dp_17 + ", " + y_al_17_dp;
			document.getElementById("polyline_al_inter_18_17_p").setAttribute("points", string);
		// Margo Gingivae inter_18_17 palatinal zeichnen
			var string =
				x_mp_18 + ", " + y_gm_18_mp + "  " + 
				x_dp_17 + ", " + y_gm_17_dp;
			document.getElementById("polyline_gm_inter_18_17_p").setAttribute("points", string);
		}
	}