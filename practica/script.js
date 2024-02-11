
function sumar(){

    //proceso para sumar
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    //aqui convertimos el valor en numeros enteros con la funcion parseint
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    console.log(numero1);
    console.log(numero2);
    let resultado = numero1 + numero2;

    //Agregando el valor en el input del html 
    document.getElementById('resultado').value = resultado;
}

function sinClases() {
    let agregar = document.getElementById('agregar');
    agregar.className = 'ninguna';
}

function rojo(){
    let agregar = document.getElementById('agregar');
    agregar.className = '';
    agregar.classList.add('rojo');
}

function azul(){
    let agregar = document.getElementById('agregar');
    agregar.className = '';
    agregar.classList.add('azul');
}

function morado(){
    let agregar = document.getElementById('agregar');
    agregar.className = '';
    agregar.classList.add('morado');
}

function agrandar(){
    let agregar = document.getElementById('agregar');
    agregar.className = '';
    agregar.classList.add('agrandar')
}

function minimizar(){
    let agregar = document.getElementById('agregar');
    agregar.className = '';
    agregar.classList.add('minimizar')
}

function retrasoDosSegundos(){ 
    let texto = document.getElementById('texto').value;
    document.getElementById('spinner').style.display = "block";
    setTimeout( function() {
        document.getElementById('spinner').style.display = "none";
        alert("Escribiste: " + texto);
    }, 3000);
}