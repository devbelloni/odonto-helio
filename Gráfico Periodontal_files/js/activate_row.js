// Lista de dentes para simplificar o código
const teethOK = [18, 17, 16, 15, 14, 13, 12, 11, 28, 27, 26, 25, 24, 23, 22, 21];
const teethUK = [48, 47, 46, 45, 44, 43, 42, 41, 38, 37, 36, 35, 34, 33, 32, 31];

// Função genérica para ativar/desativar elementos de uma região
function toggleElements(event, teeth, prefix, region) {
  // Verifica se a tecla Shift está pressionada para desativar (0) ou ativar (1)
  const value = event.shiftKey ? 0 : 1;
  const display = event.shiftKey ? 'none' : 'block';

  // Itera sobre cada dente da lista
  teeth.forEach(tooth => {
    // Verifica se o dente está ativo (valor 1)
    if (window[`tooth_${tooth}`] === 1) {
      // Define os valores das variáveis (ex.: bop_18_db, pi_48_dl)
      window[`${prefix}_${tooth}_${region[0]}`] = value;
      window[`${prefix}_${tooth}_${region[1]}`] = value;
      window[`${prefix}_${tooth}_${region[2]}`] = value;

      // Altera a visibilidade dos elementos no DOM (ex.: bop_18_db_rectangle)
      document.getElementById(`${prefix}_${tooth}_${region[0]}_rectangle`).style.display = display;
      document.getElementById(`${prefix}_${tooth}_${region[1]}_rectangle`).style.display = display;
      document.getElementById(`${prefix}_${tooth}_${region[2]}_rectangle`).style.display = display;
    }
  });
}

// Ativa/desativa sangramento (bop) na região bucal (OK)
function activate_bop_b_OK(event) {
  // Chama a função genérica para a região bucal (db, b, mb) dos dentes OK
  toggleElements(event, teethOK, 'bop', ['db', 'b', 'mb']);
}

// Ativa/desativa placa (pi) na região bucal (OK)
function activate_pi_b_OK(event) {
  // Chama a função genérica para a região bucal (db, b, mb) dos dentes OK
  toggleElements(event, teethOK, 'pi', ['db', 'b', 'mb']);
}

// Ativa/desativa sangramento (bop) na região palatina (OK)
function activate_bop_p_OK(event) {
  // Chama a função genérica para a região palatina (dp, p, mp) dos dentes OK
  toggleElements(event, teethOK, 'bop', ['dp', 'p', 'mp']);
}

// Ativa/desativa placa (pi) na região palatina (OK)
function activate_pi_p_OK(event) {
  // Chama a função genérica para a região palatina (dp, p, mp) dos dentes OK
  toggleElements(event, teethOK, 'pi', ['dp', 'p', 'mp']);
}

// Ativa/desativa sangramento (bop) na região bucal (UK)
function activate_bop_b_UK(event) {
  // Chama a função genérica para a região bucal (db, b, mb) dos dentes UK
  toggleElements(event, teethUK, 'bop', ['db', 'b', 'mb']);
}

// Ativa/desativa placa (pi) na região bucal (UK)
function activate_pi_b_UK(event) {
  // Chama a função genérica para a região bucal (db, b, mb) dos dentes UK
  toggleElements(event, teethUK, 'pi', ['db', 'b', 'mb']);
}

// Ativa/desativa sangramento (bop) na região lingual (UK)
function activate_bop_l_UK(event) {
  // Chama a função genérica para a região lingual (dl, l, ml) dos dentes UK
  toggleElements(event, teethUK, 'bop', ['dl', 'l', 'ml']);
}

// Ativa/desativa placa (pi) na região lingual (UK)
function activate_pi_l_UK(event) {
  // Chama a função genérica para a região lingual (dl, l, ml) dos dentes UK
  toggleElements(event, teethUK, 'pi', ['dl', 'l', 'ml']);
}