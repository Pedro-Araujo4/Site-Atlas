function atualizarDataHora() {
  const agora = new Date();
  const hora = String(agora.getHours()).padStart(2, '0');
  const minuto = String(agora.getMinutes()).padStart(2, '0');

  const dataHoraFormatada = `${hora}:${minuto}`;
  document.getElementById('date-time').innerText = dataHoraFormatada;

  setInterval(atualizarDataHora, 1000);
}


function init() {
    
    atualizarDataHora();
}

init();