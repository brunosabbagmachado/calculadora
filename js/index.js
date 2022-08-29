var display = document.querySelector('.calculadora__display');

const numeros = document.querySelectorAll('[data-numero]');

const operadores = document.querySelectorAll('[data-operador]');

for (var i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', function () {
        var numeroDigitado = parseInt(this.innerHTML);
        display.innerHTML += numeroDigitado;
        console.log(numeroDigitado);
    })
}

for (var i = 0; i < operadores.length; i++) {
    operadores[i].addEventListener('click', function () {
        display.innerHTML += this.innerHTML;
    })
}