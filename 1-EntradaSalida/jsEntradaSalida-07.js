/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/


function sumar() {
	let num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	let num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	let sum = num1 + num2;
	alert(`la suma es igual a ${sum}`);
}
function restar() {
	let num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	let num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	let rest = num1 - num2;
	alert(`la suma es igual a ${rest}`);
}
function multiplicar() {
	let num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	let num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	let multiply = num1 * num2;
	alert(`la suma es igual a ${multiply}`);
}
function dividir() {
	let num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	let num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	let divide = num1 / num2;
	alert(`la suma es igual a ${divide}`);
}
