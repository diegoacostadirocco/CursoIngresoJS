/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	let num1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	let num2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	let sum = num1 + num2;
	alert(`la suma es ${sum}`);
}

