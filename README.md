<h1>Juego del amigo Secreto</h1>

Este Juego se realiza con el fin de practicar conceptos de html y Java Script.
En este README se colocará información sobre el código y sus funcionalidades.

<h1>Instrucciones:</h1>

- Ingrese el nombre de un amigo en el cuadro de texto
- Presione el botón añadir (Verá que se va añadendo una lista de sus amigos)
- Cuando haya añadido a todos sus amigos presione sortear amigo. El nombre del amigo sorteado aparecerá resaltado en la pantalla.
- Si quiere realizar otro sorteo presione el botón Reiniciar.

<h1>Funciones</h1>
<h2>validarNombres():</h2> Esta funcion tiene la tarea de validar los nombres ingresados por el usuario.
Los hace mediante una expresion regular:
<h2>/^[A-Za-z\s]+$/</h2>
Explicación:
Los '/' al inicio y al final son los delimitadores que indican el comienzo y fin de la expresión regular en JavaScript.
^: Este símbolo representa el inicio de la cadena. Asegura que la validación comience desde el primer carácter.
[A-Za-z\s]: Esto define un conjunto de caracteres permitidos:
\s: Representa cualquier carácter de espacio en blanco, como espacios, tabulaciones o saltos de línea
+: Indica que debe haber uno o más caracteres del conjunto definido ([A-Za-z\s]). Esto significa que la cadena debe contener al menos un carácter válido (letra o espacio).
$: Este símbolo marca el fin de la cadena. Asegura que no haya otros caracteres después de los permitidos.
// tambien aprendi que siempre que quiero usar una expresion regular debo utilizar la funcion test(): regex.test(cadena)

```javascript
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
```

<h2>agregarAmigo()</h2>
Primero, con la variable `inputUsuario`, uso el id de la etiqueta input del `index.html`.  
Luego, tomo el valor de `inputUsuario` con la variable `nombre` y le realizo un `trim()` por si tiene espacios al principio o al final.

Después, necesitamos agregar esos nombres a la lista de amigos y también mostrarlos dentro de la lista desordenada (`<ul>`) del `index.html`.
Luego validamos el nombre, utilizamos el DOM para crear los (`li`) en el index.HTML, agregamos el nombre que capturamos en el imput del usuario en la caja de texto del html.
Finalmente ya tenemos creado un (`li`) con el nombre que ingresamos ahora debemos indicar que el (`li`) pertenece a la lista desordenada (ponerlo como hijo) y limpiamos la caja de texto del html.


```javascript
function agregarAmigo(){

    let imputUsuario = document.getElementById('amigo');
    let nombre = imputUsuario.value.trim(); 
    
    let listaDesordenada = document.getElementById('listaAmigos');

    if (!validarNombres(nombre)){
        return; // si validar nombre retorna true lo niega y corta la funcion. sino saldrian los mensajes de alerta.
    }

    listaAmigos.push(nombre);

    let elementoListaDesordenada = document.createElement('li');
    elementoListaDesordenada.textContent=nombre;
    
    listaDesordenada.appendChild(elementoListaDesordenada);

    // finalmente limpiamos el imput

    imputUsuario.value = "";

}
```

<h2>sortearAmigo():</h2>
Esta función le da el sentido al juego, nos dice quien es el amigo sorteado.

```javascript
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
```

<h2>reiniciarLista()</h2>
Para finalizar se me ocurrió agregar otra funcionalidad mas, la de reiniciar lista, ya que al sortear una vez debíamos recargar la pagina para hacer otro sorteo.
Esta funcion simplemente captura en variables la lista de amigos que está como ul en index.html, asi tambien como el resultado del sorteo y el input del usuario,
tambien la lista de amigos que se utiliza para sortear y simplemente las deja vacias.

```javascript
function reiniciarLista() {

    let listaAreiniciar = document.getElementById('listaAmigos');
    let resultadoSorteado = document.getElementById('resultado');
    let input =document.getElementById("amigo");

    listaAmigos =[];
    listaAreiniciar.innerHTML ="";
    resultadoSorteado.innerHTML="";
    input.value="";
}
```
