/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar(txtIdNumeroUno, txtIdNumeroDos) {
	var num1 = parseInt(txtIdNumeroUno.value);
	var num2 = parseInt(txtIdNumeroDos.value);
	var sum = num1 + num2;
	alert(`la suma es igual a ${sum}`);
}

function restar(txtIdNumeroUno, txtIdNumeroDos) {
	var num1 = parseInt(txtIdNumeroUno.value);
	var num2 = parseInt(txtIdNumeroDos.value);
	var sum = num1 - num2;
	alert(`la resta es igual a ${sum}`);
}

function multiplicar(txtIdNumeroUno, txtIdNumeroDos) {
	var num1 = parseInt(txtIdNumeroUno.value);
	var num2 = parseInt(txtIdNumeroDos.value);
	var sum = num1 * num2;
	alert(`la multiplicacion es igual a ${sum}`);
}

function dividir(txtIdNumeroUno, txtIdNumeroDos) {
	var num1 = parseInt(txtIdNumeroUno.value);
	var num2 = parseInt(txtIdNumeroDos.value);
	var sum = num1 / num2;
	alert(`la division es igual a ${sum}`);
}

