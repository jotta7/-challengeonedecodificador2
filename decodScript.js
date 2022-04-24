const criptografia = ["enter", "imes", "ai", "ober", "ufat"];
const descriptografia = ["e", "i", "a", "o", "u"];
 
function criptografar(){
    let valorTexto = document.querySelector('#textoDecod').value//pegar valor do textarea
    let resultado = ""
    if (valorTexto != "") {

        resultado = valorTexto.replace(/e|i|a|o|u/g, function (x) {
            if (x == "e") {
                return criptografia[0];
            }
            else if (x == "i") {
                return criptografia[1];
            }
            else if (x == "a") {
                return criptografia[2];
            }
            else if (x == "o") {
                return criptografia[3];
            }
            else if (x == "u") {
                return criptografia[4];
            }
        })
        exibirResultado(resultado)
        limparTexto()
        
    }       
 
}

function descriptografar() {
    let valorTexto = document.querySelector('#textoDecod').value//pegar valor do textarea
    let resultado = ""

    if (valorTexto != "") {

        resultado = valorTexto.replace(/enter|imes|ai|ober|ufat/g, function (x) {
            if (x == "enter") {
                return descriptografia[0];
            }
            else if (x == "imes") {
                return descriptografia[1];
            }
            else if (x == "ai") {
                return descriptografia[2];
            }
            else if (x == "ober") {
                return descriptografia[3];
            }
            else if (x == "ufat") {
                return descriptografia[4];
            }

        })
        exibirResultado(resultado)
        limparTexto()
    }    
}

function exibirResultado(valorTexto) {
    let exibir = document.querySelector('.mostraTexto');// recebe div que vai exibir texto
    //let figure = document.querySelector(".figureImg");
    let copiaBtn = document.getElementById('copiar')
    

    exibir.textContent = valorTexto;    

    copiaBtn.style.display = "block";

}
 

function copiar(){
    //documant.execCommand('copy')não é mais recomendado pra executar
    let textoParaCopiar = document.querySelector('.mostraTexto').textContent//contente pega algo escrito
    if(navigator.clipboard.writeText(textoParaCopiar)){ //o if foi só um jeito de mostrar ao usuario que a ação aconteceu
        document.querySelector('#copiar').textContent = "copiado"
    }
    setInterval(function(){
        document.querySelector('#copiar').textContent = "copiar"
    }, 3000
    )
   
}

window.onload = function () {
    limparTexto();
}

function limparTexto() {
    document.querySelector('#textoDecod').value = ""
}
 
