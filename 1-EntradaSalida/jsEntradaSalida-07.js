/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	var num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	var num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	var sum = num1 + num2;
	alert(`la suma es igual a ${sum}`);
}
function restar() {
	var num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	var num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	var rest = num1 - num2;
	alert(`la suma es igual a ${rest}`);
}
function multiplicar() {
	var num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	var num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	var multiply = num1 * num2;
	alert(`la suma es igual a ${multiply}`);
}
function dividir() {
	var num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	var num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	var divide = num1 / num2;
	alert(`la suma es igual a ${divide}`);
}
