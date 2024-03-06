let llaves = { "e": "enter", "i": "imes", "a": "ai", "o":"ober", "u":"ufat"};
let especiales = /[^\w\sáéÁÉúÚíÍ]/;
let may = /[A-Z]/;



function validar(textoEntrada){
    let valor;

    if(may.test(textoEntrada) || especiales.test(textoEntrada)){
        alert("No se admiten mayusculas o caracteres especiales");
        textoEntrada.value = "";
        textoSalida.value="";
        document.getElementById("input").value = "";
        document.getElementById("output").value = "";
        valor = true;
    }else{
        valor = false;
    }

    return valor
}

function cifrar(){
    //Extraer cadena del cifrador
    let textoEntrada = document.getElementById("input").value;
  
    //Comprobar si existen mayusculas en el texto
    if(validar(textoEntrada)){

    }else{
        for(let letra in llaves){
            textoEntrada = textoEntrada.replace(new RegExp(letra,'g'),llaves[letra]);
            
        }
        document.getElementById("output").value = textoEntrada;
    }


}

function descifrar(){
    let textoEntrada = document.getElementById("input").value;
    
    if(validar(textoEntrada)){

    }else{
        for(let letra in llaves){
            textoEntrada = textoEntrada.replace(new RegExp(llaves[letra],'g'),letra);
            
        }
        document.getElementById("output").value = textoEntrada;
    }

}

function copiar(){
    let textoSalida = document.getElementById("output").value;
    navigator.clipboard.writeText(textoSalida);
}