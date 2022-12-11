let resultados = document.getElementById('resultado').innerHTML
resultados = [];

function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    let resultado = numero + num;
    document.getElementById('resultado').innerHTML = resultado;

    resultados.push(resultado);
};

console.log(resultados);

function clean() {
    document.getElementById('resultado').innerText = "";
};

function back() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
};

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}