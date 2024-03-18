//Definicion de variables
var BtnEncriptar = document.querySelector(".btn-encriptar");
var BtnDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector (".muneco");
var contenedor = document.querySelector (".muneco-mensaje");
var resultado = document.querySelector (".resultado-texto");

//accion de botones
BtnEncriptar.onclick = encriptar;
BtnDesencriptar.onclick = desencriptar;

//funciones 

function getText(){
    var textBox = document.querySelector(".text-input");
    return textBox.value
}

function encriptar(){
    ocultarA();
    var textBox = getText();
    resultado.textContent = encriptarTexto(textBox);
}

function desencriptar(){
    ocultarA();
    var textBox = getText();
    resultado.textContent = desencriptarTexto(textBox);
}



function ocultarA(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i< texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal =  textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i< texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i=i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i=i+4;
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i=i+3;
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i=i+3;
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i=i+3;
        }
        else{
            textoFinal =  textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const BtnCopiar = document.querySelector(".btn-copy");
    BtnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado-texto").textContent;
    navigator.clipboard.writeText(contenido);   
    console.log("mensaje")
    })