
function sumar() {

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