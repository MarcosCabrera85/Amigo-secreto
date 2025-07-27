// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaAmigos = [];


// Acá agrego una funcion para validar nombres. esto me llevo tiempo ya que utilicé expresiones regulares:
/*
Los '/' al inicio y al final son los delimitadores que indican el comienzo y fin de la expresión regular en JavaScript.
^: Este símbolo representa el inicio de la cadena. Asegura que la validación comience desde el primer carácter.
[A-Za-z\s]: Esto define un conjunto de caracteres permitidos:
\s: Representa cualquier carácter de espacio en blanco, como espacios, tabulaciones o saltos de línea
+: Indica que debe haber uno o más caracteres del conjunto definido ([A-Za-z\s]). Esto significa que la cadena debe contener al menos un carácter válido (letra o espacio).
$: Este símbolo marca el fin de la cadena. Asegura que no haya otros caracteres después de los permitidos.
// tambien aprendi que siempre que quiero usar una expresion regular debo utilizar la funcion test(): regex.test(cadena)
*/

function validarNombres(cadena){

    const soloLetras = /^[A-Za-z\s]+$/;
    if (cadena === ''){
        alert('Por favor ingrese un nombre.');
        return false;

    }else if(!soloLetras.test(cadena)){
        /*
            el bloque de arriba funciona asi:
            primero se evalua soloLetras.test(cadena) si esto devuelve true al negarlo con ! es false y no entra al if, por lo tanto la cadena es valida
            si vuelve false es decir que la cadena no esta correcta, o niega entonces ahora tenemos true por lo tanto entra al if y manda el mje.
        */
        alert('Solo se permiten nombres y espacios en el nombre!')
        return false;
    }
    return true;

}


function agregarAmigo(){

    let imputUsuario = document.getElementById('amigo'); // uso el id de la etiqueta imput del index.html
    let nombre = imputUsuario.value.trim(); // tomo el valor de imput usuario y le realizo un trim por las dudas que tenga espacios al principio o al final
    // ahora necesitamos agregar esos nombres a la lista de amigos, y a la ves mostrarlo dentro de la <ul> del html, cada elemento dentro de una <ul>, es un list item <li>
    let listaDesordenada = document.getElementById('listaAmigos');

    if (!validarNombres(nombre)){
        return; // si validar nombre retorna true lo niega y corta la funcion. sino saldrian los mensajes de alerta.
    }

    listaAmigos.push(nombre);

    let elementoListaDesordenada = document.createElement('li'); // utilizamos el DOM para crear los <li> en el index.HTML
    elementoListaDesordenada.textContent=nombre; //agregamos el nombre que capturamos en el imput del usuario en la caja de texto del html
    // ya tenemos creado un li con el nombre que ingresamos ahora debemos indicar que el li pertenece a la lista desordenada (ponerlo como hijo)
    listaDesordenada.appendChild(elementoListaDesordenada);

    // finalmente limpiamos el imput

    imputUsuario.value = "";

}

function sortearAmigo(){

    if(listaAmigos.length == 0){

        alert('Debes añadir por lo menos 1 amigo.');
        return;

    }

    let sorteo = Math.floor(Math.random()*listaAmigos.length);
    let amigoSorteado = listaAmigos[sorteo];

    // mostramos el resultado en el elemnto html (<ul>) con el id = "resultado"

    let resultado = document.getElementById('resultado');

    // limpiamos el resultado anterior.
    resultado.innerHTML = "";

    let liGanador = document.createElement('li');
    liGanador.textContent = `El amigo secreto es: ${amigoSorteado}`;
    liGanador.style.color= "green";
    liGanador.style.fontWeight = 'bold';
    liGanador.style.fontSize = '2em';
    resultado.appendChild(liGanador);


}

function reiniciarLista() {

    let listaAreiniciar = document.getElementById('listaAmigos');
    let resultadoSorteado = document.getElementById('resultado');
    let input =document.getElementById("amigo");

    listaAmigos =[];
    listaAreiniciar.innerHTML ="";
    resultadoSorteado.innerHTML="";
    input.value="";
}

