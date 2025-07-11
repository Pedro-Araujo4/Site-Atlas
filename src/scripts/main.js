const state = {
  idElements: {
    inicio: document.getElementById("inicio-nav"),
    login: document.getElementById("logo-login"),
  }
}

function atualizarDataHora() {
  const agora = new Date();
  const hora = String(agora.getHours()).padStart(2, '0');
  const minuto = String(agora.getMinutes()).padStart(2, '0');

  const dataHoraFormatada = `${hora}:${minuto}`;
  document.getElementById('date-time').innerText = dataHoraFormatada;

  setInterval(atualizarDataHora, 1000);
}

const volumeAdjust = () => {
  const audio = document.getElementById("audio");
  audio.volume = 0.02;
}

function goToInicio() {
  window.location.href = "../src/pages/inicio.html"
}

function goToLogin() {
  window.location.href = "../login.html"
}

function navegation() {
  state.idElements.inicio.addEventListener("click", () => goToInicio());
  state.idElements.login.addEventListener("click", () => goToLogin());
}

function init() {

    atualizarDataHora();
    volumeAdjust();
    navegation();
}

init();