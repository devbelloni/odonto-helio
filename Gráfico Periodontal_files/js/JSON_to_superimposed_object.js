function assignSuperimposedJsonDataToObject(jsonObj) {
    // Durchgehen aller Zähne
    for (var toothNumber in superimposedPockets) {
        if (jsonObj.hasOwnProperty('tooth_' + toothNumber)) {
            var toothData = jsonObj['tooth_' + toothNumber];

            // Setzen der allgemeinen Zahnattribute
            superimposedPockets[toothNumber].present = toothData === '1';
            superimposedPockets[toothNumber].mobility = parseInt(jsonObj['mobility_' + toothNumber], 10);
            superimposedPockets[toothNumber].implant = jsonObj['implant_' + toothNumber] === '1';

            // Setzen der spezifischen Messwerte für jeden Bereich
            ['bop', 'pi', 'gm', 'pd'].forEach(function(param) {
                ['db', 'b', 'mb', 'dl', 'l', 'ml', 'dp', 'p', 'mp'].forEach(function(area) {
                    if (jsonObj.hasOwnProperty(param + '_' + toothNumber + '_' + area)) {
                        superimposedPockets[toothNumber][param][area] = parseInt(jsonObj[param + '_' + toothNumber + '_' + area], 10);
                    }
                });
            });

            // Hinzufügen der Furkationsdaten
            ['b', 'dp', 'mp', 'dl', 'l', 'ml'].forEach(function(area) {
                if (jsonObj.hasOwnProperty('furcation_' + toothNumber + '_' + area)) {
                    if (!superimposedPockets[toothNumber].furcation) {
                        superimposedPockets[toothNumber].furcation = {};
                    }
                    superimposedPockets[toothNumber].furcation[area] = parseInt(jsonObj['furcation_' + toothNumber + '_' + area], 10);
                }
            });

            // Hinzufügen weiterer individueller Daten
            superimposedPockets[toothNumber].note = jsonObj['note_' + toothNumber];
        }
    }

    //console.log("jsonObj: superimposedPockets, grün:", superimposedPockets);
}
