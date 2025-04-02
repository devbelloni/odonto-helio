function printCanvas(buttonID) {
    const elements = [
        'side_menu',
        'menu_button_save_to_hd',
        'menu_button_load_from_hd',
        'menu_button_load_superimposed_from_hd',
        'menu_button_show_chart1',
        'menu_button_show_chart2',
        'menu_button_show_supperimposed_chart'
    ];

    elements.forEach(id => document.getElementById(id).style.display = 'none');
    window.print();
    elements.forEach(id => document.getElementById(id).style.display = 'block');
}