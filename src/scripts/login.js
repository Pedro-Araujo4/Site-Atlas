const stateLogin = {
    idElements: {
        loginButton: document.getElementById("login-button"),
        loginText: document.getElementById("login"),
        passwordText: document.getElementById("password"),
    },
    loginAndPass: {
        login: "Atlas-Alfa-2",
        senha: "SolELua",
    }
}

function login(){
    stateLogin.idElements.loginButton.addEventListener("click", () => {
    if (stateLogin.idElements.loginText.value == "Atlas-Alfa-2" && stateLogin.idElements.passwordText.value == "SolELua") {
       window.location.href = "./index.html" 
    } else if(stateLogin.idElements.loginText.value == "Atlas-Alfa-2") {
        window.alert("Apenas o Login está correto")
    } else if(stateLogin.idElements.passwordText.value == "SolELua") {
        window.alert("Apenas a senha está correta")
    }
    else if(stateLogin.idElements.passwordText.value == "" && stateLogin.idElements.loginText.value == "") {
        window.alert("Por favor digite o login e a senha")
    }
    else {
        window.alert("Login e Senha incorretos")
    }
    
})
}


function init(){

    login();
}

init();