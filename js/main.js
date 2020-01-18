const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const pesoElement = document.querySelector('#peso');
    const alturaElement = document.querySelector('#altura');

    const peso = Number(pesoElement.value);
    const altura = Number(alturaElement.value);

    //validação
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    //calculo do imc
    const imc = peso / (altura * altura);
    const res = imc.toFixed(2);

    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é: ${res} (${nivelImc})`

    setResultado(msg, true)

    clear()
});

function getNivelImc(imc) {

    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc <  18.5) return nivel[0];
    

}

function criaElementoP() {
    const p = document.createElement('p');
    return p;
};

function setResultado(msg, isValid) {

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaElementoP();
    p.innerHTML = msg;
    resultado.appendChild(p);
    
    if (isValid) {
        p.classList.add('res')
    } else {
        p.classList.add('res-erro')
    }
};

function clear() {
    const pesoElement = document.querySelector('#peso').value = ''
    const alturaElement = document.querySelector('#altura').value = ''
}
