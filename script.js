function calcularPoupanca() {
    const mesada = parseFloat(document.getElementById('mesada').value);
    const custoBrinquedo = parseFloat(document.getElementById('custoBrinquedo').value);
    const resultadoElement = document.getElementById('resultado');

    if (isNaN(mesada) || isNaN(custoBrinquedo) || mesada <= 0 || custoBrinquedo <= 0) {
        resultadoElement.innerHTML = 'Por favor, insira valores válidos maiores que zero.';
        return;
    }

    const mesesParaAlcancar = Math.ceil(custoBrinquedo / mesada);

    resultadoElement.innerHTML = `Se você economizar sua mesada, levará aproximadamente ${mesesParaAlcancar} meses para atingir o valor do brinquedo desejado de R$${custoBrinquedo}.`;
}


