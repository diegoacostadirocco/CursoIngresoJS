/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar(txtIdNumeroUno, txtIdNumeroDos) {
	var num1 = parseInt(txtIdNumeroUno.value, '2');
	var num2 = parseInt(txtIdNumeroDos.value, '2');
	var sum = num1 + num2;
	alert(sum);
}

