/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

var num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
var num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
function sumar() {
	let sum = num1 + num2;
	alert(`la suma es igual a ${sum}`);
}
function restar() {
	let rest = num1 - num2;
	alert(`la suma es igual a ${rest}`);
}
function multiplicar() {
	let multiply = num1 * num2;
	alert(`la suma es igual a ${multiply}`);
}
function dividir() {
	let divide = num1 / num2;
	alert(`la suma es igual a ${divide}`);
}
