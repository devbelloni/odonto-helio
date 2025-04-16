function transfer_to_pra(lang) {
    // Obtém os dados do formulário como uma string JSON usando a função form_to_JSON()
    var jsonString = form_to_JSON();
    // Converte a string JSON em um objeto JavaScript para manipulação
    var jsonObj = JSON.parse(jsonString);
    // Calcula a idade do paciente com base na data de nascimento (patient_dob) e data atual (date)
    var patientAge = calculateAge(jsonObj.patient_dob, jsonObj.date);
    // Formata a idade como string de 3 dígitos, preenchendo com zeros à esquerda (ex.: 45 vira "045")
    var ageStr = patientAge.toString().padStart(3, '0');
    // Calcula o número total de dentes presentes usando a função sumTeeth
    var totalTeeth = sumTeeth(jsonObj);
    // Formata o número de dentes como string de 3 dígitos (ex.: 28 vira "028")
    var totalTeethStr = totalTeeth.toString().padStart(3, '0');
    // Calcula a soma dos valores de sangramento ao sondar (BOP) usando a função sumBop
    var totalBop = sumBop(jsonObj);
    // Formata a soma de BOP como string de 3 dígitos (ex.: 12 vira "012")
    var totalBopStr = totalBop.toString().padStart(3, '0');
    // Conta o número de medições de profundidade de sondagem (PD) ≥ 5 mm usando a função countPdValues
    var countPd = countPdValues(jsonObj);
    // Formata a contagem de PD como string de 3 dígitos (ex.: 5 vira "005") 
    var countPdStr = countPd.toString().padStart(3, '0');
    // Calcula o número de dentes ausentes (total de 32 dentes menos os presentes)
    var missingTeeth = 32 - totalTeeth;
    // Formata o número de dentes ausentes como string de 3 dígitos (ex.: 4 vira "004")
    var missingTeethStr = missingTeeth.toString().padStart(3, '0');
    // Monta uma query string concatenando todas as métricas formatadas
    var queryString = ageStr + totalTeethStr + totalBopStr + countPdStr + missingTeethStr;
    // Verifica se o idioma (lang) é 'uk' e, se for, altera para 'en' (inglês)
    if (lang === 'uk') {
        lang = 'en';
    }
    // Constrói a URL para o site externo, incluindo o idioma e a query string
    // Exemplo: "https://www.site.com/pra/en/?data=045028012005004"
    var url = "https://www.site.com/pra/" + lang + "/?data=" + queryString;
    // Abre a URL em uma nova aba do navegador
    window.open(url, '_blank');
}

function calculateAge(dob, currentDate) {
    // Valida se as datas são fornecidas e estão no formato correto (dd.mm.aaaa)
    // Retorna "000" se as datas forem inválidas ou não estiverem no formato esperado
    if (!dob || !currentDate || dob.split('.').length !== 3 || currentDate.split('.').length !== 3) {
        return "000";
    }
    // Converte as strings de data (formato dd.mm.aaaa) em objetos Date
    // Divide a string em [dia, mês, ano], inverte para [ano, mês, dia] e junta com '-' (formato aaaa-mm-dd)
    var dobDate = new Date(dob.split('.').reverse().join('-'));
    var currentDateObj = new Date(currentDate.split('.').reverse().join('-'));
    // Verifica se as datas convertidas são válidas (não NaN)
    // Retorna "000" se uma das datas for inválida
    if (isNaN(dobDate.getTime()) || isNaN(currentDateObj.getTime())) {
        return "000";
    }
    // Calcula a diferença de anos entre a data atual e a data de nascimento
    var age = currentDateObj.getFullYear() - dobDate.getFullYear();
    // Ajusta a idade considerando os meses e dias
    var m = currentDateObj.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && currentDateObj.getDate() < dobDate.getDate())) {
        age--; // Decrementa a idade se o aniversário ainda não ocorreu neste ano
    }
    // Formata a idade como string de 3 dígitos (ex.: 45 vira "045")
    return age.toString().padStart(3, '0');
}

function sumTeeth(jsonObj) {
    // Inicializa a soma de dentes presentes
    var sum = 0;
    // Itera sobre todas as chaves do objeto JSON
    for (var key in jsonObj) {
        // Verifica se a chave começa com 'tooth_' (ex.: 'tooth_18')
        if (key.startsWith('tooth_')) {
            // Soma o valor da chave (converte para inteiro)
            // "1" indica dente presente, "0" indica ausente
            sum += parseInt(jsonObj[key]);
        }
    }
    // Retorna o total de dentes presentes
    return sum;
}

function sumBop(jsonObj) {
    // Inicializa a soma dos valores de BOP
    var sum = 0;
    // Itera sobre os dentes de 1 a 32
    for (var tooth = 1; tooth <= 32; tooth++) {
        // Verifica se o dente está presente (valor "1")
        if (jsonObj['tooth_' + tooth] === "1") {
            // Itera sobre todas as chaves do objeto JSON
            for (var key in jsonObj) {
                // Verifica se a chave começa com 'bop_X_' (ex.: 'bop_18_db')
                if (key.startsWith('bop_' + tooth + '_')) {
                    // Soma o valor de BOP (converte para inteiro)
                    // "1" indica sangramento presente, "0" indica ausente
                    sum += parseInt(jsonObj[key]);
                }
            }
        }
    }
    // Retorna a soma total de BOP
    return sum;
}

function countPdValues(jsonObj) {
    // Inicializa a contagem de medições PD ≥ 5 mm
    var count = 0;
    // Itera sobre os dentes de 1 a 32
    for (var tooth = 1; tooth <= 32; tooth++) {
        // Verifica se o dente está presente (valor "1")
        if (jsonObj['tooth_' + tooth] === "1") {
            // Itera sobre todas as chaves do objeto JSON
            for (var key in jsonObj) {
                // Verifica se a chave começa com 'pd_X_' e se o valor é ≥ 5 mm
                if (key.startsWith('pd_' + tooth + '_') && parseInt(jsonObj[key]) >= 5) {
                    // Incrementa a contagem
                    count++;
                }
            }
        }
    }
    // Retorna a contagem total
    return count;
}
