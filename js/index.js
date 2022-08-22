var display = document.querySelector('.calculadora__display');

const numeros = document.querySelectorAll('[data-numero]');

const operadores = document.querySelectorAll('[data-operador]');

for (var i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', function () {
        display.innerHTML += parseInt(this.innerHTML);
    })
}

for (var i = 0; i < operadores.length; i++) {
    operadores[i].addEventListener('click', function () {
        display.innerHTML += this.innerHTML;
    })
}

console.log(display);