const textoOperacaoAnterior = document.querySelector('#operacao__anterior');
const textoOperacaoAtual = document.querySelector('#operacao__atual');
const botoes = document.querySelectorAll('#botoes__container button');

class Calculator {
    constructor(textoOperacaoAnterior, textoOperacaoAtual) {
        this.textoOperacaoAnterior = textoOperacaoAnterior;
        this.textoOperacaoAtual = textoOperacaoAtual;
        this.operacaoAtual = '';
    }

    addDigito(digito) {
        if (digito === '.' && this.textoOperacaoAtual.innerText.includes('.')) {
            return;
        }

        this.operacaoAtual = digito;
        this.updateScreen();
    }

    fazerOperacao(operacao) {

        if (this.textoOperacaoAtual.innerText === "" && operacao !== 'C') {
            if (this.textoOperacaoAnterior.innerText !== "") {
                this.mudaOperacao(operacao);
            }
            return;
        }

        let operacaoValue;
        const anterior = +this.textoOperacaoAnterior.innerText.split(" ")[0];
        const atual = +this.textoOperacaoAtual.innerText;

        switch (operacao) {
            case "+":
                operacaoValue = anterior + atual;
                this.updateScreen(operacaoValue, operacao, atual, anterior);
                break;
            case "-":
                operacaoValue = anterior - atual;
                this.updateScreen(operacaoValue, operacao, atual, anterior);
                break;
            case "/":
                operacaoValue = anterior / atual;
                this.updateScreen(operacaoValue, operacao, atual, anterior);
                break;
            case "*":
                operacaoValue = anterior * atual;
                this.updateScreen(operacaoValue, operacao, atual, anterior);
                break;
            case "DEL":
                this.operadorDel();
            case "CE":
                this.operadorCE();
                break;
            case "C":
                this.operadorC();
                break;
            case "=":
                this.operadorIgual();
                break;
            default:
                return;
        }
    }

    updateScreen(
        operacaoValue = null,
        operacao = null,
        atual = null,
        anterior = null
    ) {

        if (operacaoValue === null) {
            this.textoOperacaoAtual.innerText += this.operacaoAtual;
        } else {
            if (anterior === 0) {
                operacaoValue = atual;
            }

            this.textoOperacaoAnterior.innerText = `${operacaoValue} ${operacao}`;
            this.textoOperacaoAtual.innerText = "";
        }
    }

    mudaOperacao(operacao) {
        const mathOperacao = ['*', '/', '+', '-'];

        if (!mathOperacao.includes(operacao)) {
            return;
        }

        this.textoOperacaoAnterior.innerText = this.textoOperacaoAnterior.innerText.slice(0, -1) + operacao;
    }

    operadorDel() {
        this.textoOperacaoAtual.innerText = this.textoOperacaoAtual.innerText.slice(0, -1);
    }

    operadorCE() {
        this.textoOperacaoAtual.innerText = '';
    }

    operadorC() {
        this.textoOperacaoAtual.innerText = '';
        this.textoOperacaoAnterior.innerText = '';
    }

    operadorIgual() {
        const operacao = textoOperacaoAnterior.innerText.split(' ')[1];
        this.fazerOperacao(operacao);
        this.textoOperacaoAtual.innerText = textoOperacaoAnterior.innerText.split(' ')[0];
        this.textoOperacaoAnterior.innerText = '';
    }
}

const calc = new Calculator(textoOperacaoAnterior, textoOperacaoAtual);

botoes.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === '.') {
            calc.addDigito(value);
        } else {
            calc.fazerOperacao(value);
        }
    });
});