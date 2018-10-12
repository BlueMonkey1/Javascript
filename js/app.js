

function init (){

//Variables
 var a;
 var b;
 var signo;
  var cuentamenos = 0;
  var cuentaDot = 0;
  var botones = document.getElementsByClassName("tecla");
  var pantalla = document.getElementById("display");
  var uno = document.getElementById("1");
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");
  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");
  var siete = document.getElementById("7");
  var ocho = document.getElementById("8");
  var nueve = document.getElementById("9");
  var cero = document.getElementById("0");
  var division = document.getElementById("dividido");
  var mas = document.getElementById("mas");
  var menos = document.getElementById("menos");
  var por = document.getElementById("por");
  var igual = document.getElementById("igual");
  var on = document.getElementById("on");
  var punto = document.getElementById("punto");
  var negativo = document.getElementById("sign");
//Variables

//funcionalidad


  for (let i=0;i<botones.length;i++){
    botones[i].addEventListener("mousedown", function () {
      botones[i].style ="transform:scale(0.95,0.95)"
    });
    botones[i].addEventListener("mouseup",function () {
      botones[i].style="transform:scale(1,1)"
    })
  }

  uno.onclick = function (e){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "1"
    }else {
      pantalla.textContent = pantalla.textContent.substring(0, 6) + "1";
    }
  }
  dos.onclick = function (e){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "2"
    }else {
      pantalla.textContent = pantalla.textContent.substring(0, 6) + "2";
    }
  }
  tres.onclick = function (e){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "3"
    }else {
      pantalla.textContent = pantalla.textContent.substring(0, 6) + "3";
    }
  }
  cuatro.onclick = function (e){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "4"
    }else {
      pantalla.textContent = pantalla.textContent.substring(0, 6) + "4";
    }
  }
  cinco.onclick = function (e){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "5"
    }else {
      pantalla.textContent = pantalla.textContent.substring(0, 6) + "5";
    }
  }
  seis.onclick = function (e){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "6"
    }else {
      pantalla.textContent = pantalla.textContent.substring(0, 6) + "6";
    }
  }
  siete.onclick = function (e){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "7"
    }else {
      pantalla.textContent = pantalla.textContent.substring(0, 6) + "7";
    }
  }
  ocho.onclick = function (e){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "8"
    }else {
      pantalla.textContent = pantalla.textContent.substring(0, 6) + "8";
    }
  }
  nueve.onclick = function (e){
    if (pantalla.textContent == "0") {
      pantalla.textContent = "9"
    }else {
      pantalla.textContent = pantalla.textContent.substring(0, 6) + "9";
    }
  }
  cero.onclick = function (e){
    if (pantalla.textContent == "0") {
      pantalla.textContent = pantalla.textContent;
    }else {
      pantalla.textContent = pantalla.textContent.substring(0, 6) + "0";
    }
  }
  punto.onclick = function (e){
    if (cuentaDot == 0) {
      pantalla.textContent = pantalla.textContent + ".";
    }else {
      pantalla.textContent = pantalla.textContent;
    }
    cuentaDot +=1;
  }

  negativo.onclick = function(e){

    if (pantalla.textContent == "0") {
      pantalla.textContent = pantalla.textContent;
    }else {
      if (cuentamenos == 0) {
        pantalla.textContent = "-" + pantalla.textContent;
        cuentamenos += 1;
      }else {
        pantalla.textContent = pantalla.textContent.slice(1);
        cuentamenos = 0;
      }
    }





  }
  on.onclick = function(e){
    clearall();
  }
  mas.onclick = function(e){
    a = pantalla.textContent;
    signo = "+";
    limpiar ();
  }
  menos.onclick = function(e){
    a = pantalla.textContent;
    signo = "-";
    limpiar ();
  }
  por.onclick = function(e){
    a = pantalla.textContent;
    signo = "*";
    limpiar ();
  }
  division.onclick = function(e){
    a = pantalla.textContent;
    signo = "/";
    limpiar ();
  }
  igual.onclick = function(e){
    b = pantalla.textContent;
    operacion ();
  }

  function limpiar (){
    pantalla.textContent = "";
  }
  function clearall (){
    pantalla.textContent = "0";
    a = 0;
    b = 0;
    signo ="";
    cuentamenos = 0;
    cuentaDot = 0;
  }
  function operacion (){
    var respuesta = 0;
    switch (signo) {
      case "+":
          respuesta = parseFloat(a) + parseFloat(b);
        break;
      case "-":
          respuesta = parseFloat(a) - parseFloat(b);
        break;
      case "*":
          respuesta = parseFloat(a) * parseFloat(b);
        break;
      case "/":
          respuesta = parseFloat(a) / parseFloat(b);
        break;
    }

    clearall();
    pantalla.textContent = respuesta.toString().substring(0, 8);

  }



//funcionalidad

}
