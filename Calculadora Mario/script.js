
function Sumar() {
    const num1 = parseFloat(+document.querySelector('.num1').value);
    const num2 = parseFloat(+document.querySelector('.num2').value);
    const resultado = num1 + num2;
    alert("Resultado: " + resultado);
}

function Restar() {
    const num1 = parseFloat(+document.querySelector('.num1').value);
    const num2 = parseFloat(+document.querySelector('.num2').value);
    const resultado = num1 - num2;
    alert("Resultado: " + resultado);
}

function Dividir() {
    const num1 = parseFloat(+document.querySelector('.num1').value);
    const num2 = parseFloat(+document.querySelector('.num2').value);
    if (num2 === 0) {
        alert("Error: No se puede dividir entre cero.");
    } else {
        const resultado = num1 / num2;
        alert("Resultado: " + resultado);
    }
}

function Borrar() {
    document.querySelector('.num1').value = '';
    document.querySelector('.num2').value = '';
}

function Resultado() {
    const num1 = parseFloat(document.querySelector('.num1').value);
    const num2 = parseFloat(document.querySelector('.num2').value);
    const resultado = num1 + num2; 
    alert("Resultado: " + resultado);
}
