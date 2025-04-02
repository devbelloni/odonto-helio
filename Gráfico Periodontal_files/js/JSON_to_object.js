function assignJsonDataToObject(jsonObj) {
    // Durchgehen aller Zähne
    for (var toothNumber in pockets) {
        if (jsonObj.hasOwnProperty('tooth_' + toothNumber)) {
            var toothData = jsonObj['tooth_' + toothNumber];

            // Setzen der allgemeinen Zahnattribute
            pockets[toothNumber].present = toothData === '1';
            pockets[toothNumber].mobility = parseInt(jsonObj['mobility_' + toothNumber], 10);
            pockets[toothNumber].implant = jsonObj['implant_' + toothNumber] === '1';

            // Setzen der spezifischen Messwerte für jeden Bereich
            ['bop', 'pi', 'gm', 'pd'].forEach(function(param) {
                ['db', 'b', 'mb', 'dl', 'l', 'ml', 'dp', 'p', 'mp'].forEach(function(area) {
                    if (jsonObj.hasOwnProperty(param + '_' + toothNumber + '_' + area)) {
                        pockets[toothNumber][param][area] = parseInt(jsonObj[param + '_' + toothNumber + '_' + area], 10);
                    }
                });
            });

            // Hinzufügen der Furkationsdaten
            ['b', 'dp', 'mp', 'dl', 'l', 'ml'].forEach(function(area) {
                if (jsonObj.hasOwnProperty('furcation_' + toothNumber + '_' + area)) {
                    if (!pockets[toothNumber].furcation) {
                        pockets[toothNumber].furcation = {};
                    }
                    pockets[toothNumber].furcation[area] = parseInt(jsonObj['furcation_' + toothNumber + '_' + area], 10);
                }
            });

            // Hinzufügen weiterer individueller Daten
            pockets[toothNumber].note = jsonObj['note_' + toothNumber];
        }
    }

    //console.log("jsonObj: pockets, blau:", pockets);
}
