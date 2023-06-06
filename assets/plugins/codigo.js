
function mostrarimg(){
document.getElementById('cont2').innerHTML='<img src="images/firefox.png">';
}

function grupo() {
    var demo = document.getElementById("grupo");
    demo.style.color = "green";
}

function myFunction() {
    var x = document.getElementsByClassName("example");
    x[0].innerHTML = "Hola Mundo";
}   

function addText() {
    var para = document.getElementsByName("demoPara");
    para[0].innerHTML="Texto cambiado!";
    para[1].innerHTML = "El grupo 03 "
      + "ha realizado esto con JavaScript";
}

function displayPhrase()
{
    document.getElementById("p1").innerHTML = "Este texto fue remplazado";
}

function formsfuncion() {
    var txt = document.getElementById(
      "idformulario1").id;

    document.getElementById(
      "forms1").innerHTML = txt;
}

function miAnimacion() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 75) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

document.getElementById("miBtn").onclick = displayDate;
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

document.getElementById("miTexto").onclick = cambiarTexto;
function cambiarTexto() {
    document.getElementById("miTexto").innerHTML = "Haz cambiado el texto :D!";
}

document.getElementById("miTexto2").ondblclick = cambio_dblclick;
function cambio_dblclick() {
    document.getElementById("miTexto2").innerHTML = "Haz clickeado 2 veces";
}


document.getElementById("divMoverMout").onmouseover = mOver;
function mOver() {
  document.getElementById("divMoverMout").innerHTML = "Gracias";
  document.getElementById("divMoverMout").style.backgroundColor = "blue";
}
document.getElementById("divMoverMout").onmouseout = mOut;
function mOut() {
  document.getElementById("divMoverMout").innerHTML = "Pon el mouse encima";
  document.getElementById("divMoverMout").style.backgroundColor = "orange";
}

document.getElementById("divMdownMup").onmousedown = mDown;
function mDown() {
  document.getElementById("divMdownMup").innerHTML = "Gracias";
  document.getElementById("divMdownMup").style.backgroundColor = "blue";
}
document.getElementById("divMdownMup").onmouseup = mUp;
function mUp() {
  document.getElementById("divMdownMup").innerHTML = "Otra vez!";
  document.getElementById("divMdownMup").style.backgroundColor = "orange";
}

document.getElementById("input_keydown").onkeydown = cambio_onkeydown;
function cambio_onkeydown(){
  document.getElementById("miTexto3").innerHTML = "Presionaste el Enter! Cuidado! xD";
}

document.getElementById("input_keyup").onkeyup = cambio_onkeyup;
function cambio_onkeyup(){
  document.getElementById("miTexto4").innerHTML = "Cuidado! Tampoco tan fuerte! xD";
}

document.getElementById("input_onchange").onchange = form_change;
var cont = 0;
function form_change() {
  cont++;
  var mensaje = document.getElementById("miTexto5");
  if (cont % 3 === 1) {
    mensaje.style.color = 'red';
  } else if (cont % 3 === 2) {
    mensaje.style.color = 'blue';
  } else {
    mensaje.style.color = 'green';
  }

  mensaje.textContent = 'El valor ha cambiado (' + cont + ')';
}

document.getElementById("input_onfocus").onfocus = form_focus;
function form_focus() {
  document.getElementById("input_onfocus").style.background = "yellow";
}

//1-3

document.getElementById("miBoton").addEventListener("click",adel_click);
function adel_click(){
  document.getElementById("miTexto8").innerHTML = "Se ha reconocido el evento click! :D";
}

document.getElementById("miBtn2").addEventListener("click", function() {
  alert("Recuerda tomar agua y comer bien! :3");
});

var x = document.getElementById("miBtn3");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);
function myFunction() {
  alert ("Este es mi primer controlador de evento");
}
function someOtherFunction() {
  alert ("Este es el segundo controlador de evento");
}

document.getElementById("myP1").addEventListener("click", function() {
  alert("Diste clic en el elemento Blanco!");
}, false);
document.getElementById("myDiv1").addEventListener("click", function() {
  alert("Diste clic en el elemento Azul!");
}, false);
document.getElementById("myP2").addEventListener("click", function() {
  alert("Diste clic en el elemento Blanco!");
}, true);
document.getElementById("myDiv2").addEventListener("click", function() {
  alert("Diste clic en el elemento Azul!");
}, true);

// 1-4

function agregarElemento() {
  // Crear un nuevo elemento
  var nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = "Nuevo Elemento";

  // Obtener una referencia al elemento existente donde se agregará el nuevo elemento
  var lista = document.getElementById("lista");

  // Agregar el nuevo elemento al elemento existente
  lista.appendChild(nuevoElemento);
}

function crearElemento() {
  const para = document.createElement("p");
  const node = document.createTextNode("Este es un párrafo nuevo.");
  para.appendChild(node);

  const element = document.getElementById("div1");
  const child = document.getElementById("p1");
  element.insertBefore(para, child);
}

function eliminarElemento() {
  const element = document.getElementById("myDiv");
  element.parentNode.removeChild(element);
}


function eliminarNodoSecundario() {
  const parent = document.getElementById("myDiv1");
  const child = document.getElementById("child1");
  parent.removeChild(child);
}

function sustituirElemento() {
  const para = document.createElement("p");
  const node = document.createTextNode("Este es un párrafo que se reemplazó.");
  para.appendChild(node);

  const parent = document.getElementById("div1-4");
  const child = document.getElementById("p1-4");
  parent.replaceChild(para, child);
}

// 1-5
function modifyElements() {
  var elements = document.getElementsByClassName("myClass");

  // Modificar el contenido de todos los elementos con la clase "myClass"
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.textContent = "Nuevo contenido " + (i + 1);
  }

  // Mostrar el resultado en un elemento <div>
  var resultDiv = document.getElementById("resultDiv");
  var result = "";
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    result += `<li>${element.textContent}</li>`;
  }

  resultDiv.innerHTML = result;
}

// Agregar controlador de eventos al botón
var button = document.getElementById("myButton9");
button.addEventListener("click", modifyElements);


function modifyElements2() {
  var elements = document.getElementsByTagName("parrafo");

  // Modificar el contenido de todos los elementos <p>
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.textContent = "Nuevo contenido " + (i + 1);
  }

  // Mostrar el resultado en un elemento <div>
  var resultDiv = document.getElementById("resultDiv2");
  var result = "";
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    result += `<p>${element.textContent}</p>`;
  }

  resultDiv.innerHTML = result;
}

// Agregar controlador de eventos al botón
var button = document.getElementById("myButton2");
button.addEventListener("click", modifyElements2);


// function getParagraphsCount() {
//   var paragraphs = document.getElementsByTagName("pass");
//   var paragraphsCount = paragraphs.length;

//   // Mostrar el resultado en un elemento <div>
//   var resultDiv = document.getElementById("resultDiv3");
//   resultDiv.innerHTML = "Número de párrafos: " + paragraphsCount;
// }

// // Agregar controlador de eventos al botón
// var button = document.getElementById("myButton3");
// button.addEventListener("click", getParagraphsCount);

function ejemplo10(){
  // Seleccionar todos los elementos con la clase "clase-ejemplo"
  const elementos = document.querySelectorAll('.clase-ejemplo');

  // Obtener el div donde se mostrará el resultado
  const divResultado = document.getElementById('resultado');

  // Crear una cadena de texto con el contenido de los elementos seleccionados
  let resultadoHTML = '';
  elementos.forEach(elemento => {
    resultadoHTML += `<p>${elemento.textContent}</p>`;
  });

  // Mostrar el resultado en el div
  divResultado.innerHTML = resultadoHTML;
}

document.getElementById("miBoton10").addEventListener("click",ejemplo10);



//Funciones DOM Navegacion
function navDom_ejemplo1(){
  // Obtener referencias a los elementos del DOM
  const contenedor = document.getElementById('contenedor');
  const titulo = contenedor.querySelector('h1');
  const lista = contenedor.querySelector('#lista');
  const elementos = lista.querySelectorAll('li');

  // Realizar acciones con los elementos
  titulo.textContent = 'Nuevo título';
  elementos.forEach((elemento, index) => {
    elemento.textContent = `Elemento ${index + 1} modificado`;
  });
}
document.getElementById("boton33").addEventListener("click",navDom_ejemplo1);

function formsfuncion() {
  var txt = document.getElementById(
    "idformulario1").id;

  document.getElementById(
    "forms1").innerHTML = txt;
}

function copiarTexto() {
  // Obtener referencia a los elementos
  var tituloElemento = document.getElementById("titulo");
  var parrafoElemento = document.getElementById("parrafo");

  // Obtener el texto del elemento <h1>
  var textoTitulo = tituloElemento.innerText;

  // Copiar el texto en el elemento <p>
  parrafoElemento.innerText = textoTitulo;
}

function crearNodoRaiz() {
  // Crear un elemento raíz del DOM
  var rootNode = document.createElement("div");
  rootNode.id = "root";
  rootNode.textContent = "¡Este es el nodo raíz del DOM!";

  // Agregar el nodo raíz al contenedor en el HTML
  var container = document.getElementById("container");
  container.appendChild(rootNode);
}

function obtenerNombreNodo() {
  var element = document.getElementById("myElement1");
  var nodeName = element.nodeName;

  var resultadoElemento = document.getElementById("resultado2");
  resultadoElemento.textContent = "El nombre del nodo es: " + nodeName;
}

function ej0(){
  document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;
}

function ej() {
  document.getElementById("id022").innerHTML = document.getElementById("id011").nodeType;
}

function ejem() {
  document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
}



intro.style.backgroundColor = '#00FFFF';