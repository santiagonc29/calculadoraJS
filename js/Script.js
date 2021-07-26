function tomaValor(x){
    document.getElementById("result").innerHTML += x;
}

function limpiar(){
    document.getElementById("result").innerHTML = "";
}

function calcular (){
    var result = eval(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = result;
}

//variables de los numeros
var cero = document.getElementById("cero");
var doubleCero = document.getElementById("dobleCero");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var coma = document.getElementById("coma");

//variables de los operadores
var mas = document.getElementById("mas");
var menos = document.getElementById("menos");
var multi = document.getElementById("multi");
var div = document.getElementById("division");
var igual = document.getElementById("igual");
var borrar = document.getElementById("delete");

//asignacion de valores del numero
coma.addEventListener("click", function (){
    tomaValor(",");
})
cero.addEventListener("click", function (){
    tomaValor(0);
})
doubleCero.addEventListener("click", function (){
    tomaValor("00");
})
uno.addEventListener("click", function (){
    tomaValor(1);
})
dos.addEventListener("click", function (){
    tomaValor(2);
})
tres.addEventListener("click", function (){
    tomaValor(3);
})
cuatro.addEventListener("click", function (){
    tomaValor(4);
})
cinco.addEventListener("click", function (){
    tomaValor(5);
})
seis.addEventListener("click", function (){
    tomaValor(6);
})
siete.addEventListener("click", function (){
    tomaValor(7);
})
ocho.addEventListener("click", function (){
    tomaValor(8);
})
nueve.addEventListener("click", function (){
    tomaValor(9);
})

//asignacion de los operadores
mas.addEventListener("click", function (){
    tomaValor("+");
})
menos.addEventListener("click", function (){
    tomaValor("-");
})
div.addEventListener("click", function (){
    tomaValor("/");
})
multi.addEventListener("click", function (){
    tomaValor("*");
})
igual.addEventListener("click", function (){
    calcular();
})
borrar.addEventListener("click", function (){
    limpiar();
})