 const state = {
    IdElements: {
        inicioArrowBack: document.getElementById("inicio-arrow-back"),
    }
 }
 
const goBackToInicio = () => {
  window.location.href = "../../index.html"
}

 function navegation() {
    state.IdElements.inicioArrowBack.addEventListener("click", () => goBackToInicio());
}

function initInicio(){

    navegation();
}

initInicio();