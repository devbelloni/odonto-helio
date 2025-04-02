// load from hd
function load_superimposed_from_hd() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    // fileInput.accept = 'application/json'; // Optional: Einschränkung auf JSON-Dateien
    
    fileInput.onchange = function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        
        reader.onload = function(e) {
            var fileContents = e.target.result;

            jsonObj2 = JSON.parse(fileContents);
            backupJsonObj2 = jsonObj2;

			renderingChart2();
            
            document.body.removeChild(fileInput);
        };

        reader.readAsText(file);
    };
    
    document.body.appendChild(fileInput);
    fileInput.click();
}

function renderingChart2() {
    // Ausgabe in der Konsole
    //console.log("Das geladene Objekt jsonObj2:", jsonObj2);
            
    render_form(jsonObj2);
    assignJsonDataToObject(jsonObj2); // Erstellen des Objekts pockets

    initialize3DEnvironment(); // Aufruf der Funktion zum Initialisieren der 3D-Umgebung
    render_surfaces();

    render_pi_pd_bop(); // synchron, braucht keinen Parameter
    render_analysis(jsonObj2); // synchron, braucht jsonObj2
    renderEmptyBaderstenTable();
    renderEmptyBaderstenChart();
    renderEmptyRamseierTable();
    renderEmptyRamseierChart();

    // Button für Download aktivieren
    button = document.getElementById('menu_button_save_to_hd');
    button.style.color = 'black';
    button.style.pointerEvents = 'auto';
    var image = button.querySelector('img');
    image.src = '../img/svg/fa/download-solid.svg';

    // Button für anzeigen Chart 2 einblenden
    var button = document.getElementById('menu_button_show_chart2');
    button.style.display = 'block';
    button.style.backgroundColor = 'lightgreen';
    button.style.pointerEvents = 'auto';

    // Button für laden Chart 2 ausblenden
    button = document.getElementById('menu_button_load_superimposed_from_hd');
    button.style.display = 'none';

    // Button für anzeigen Chart grau färben
    button = document.getElementById('menu_button_show_chart1');
    button.style.backgroundColor = '#F9F9F9';

    chart2 = true;

    if (chart1 & chart2) {
        button = document.getElementById('menu_button_show_supperimposed_chart');
        button.style.color = 'black';
        button.style.pointerEvents = 'auto';
        image = button.querySelector('img');
        image.src = '../img/svg/fa/clone-solid.svg';
    }

    showChart1 = false;
    showChart2 = true;
    showSuperimposedChart = false;
    //console.log("chart1", chart1, "chart2", chart2);
    //console.log("showChart1", showChart1, "showChart2", showChart2, "showSuperimposedChart", showSuperimposedChart);
}
