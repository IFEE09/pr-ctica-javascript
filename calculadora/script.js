
function sumar() {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    console.log(numero1);
    console.log(numero2);
    let resultado = numero1 + numero2;
    alert(resultado); 
}

numero1.value = numero1;
numero2.value = numero2;