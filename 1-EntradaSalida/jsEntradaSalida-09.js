/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento() {
	let a = parseInt(document.getElementById('txtIdSueldo').value);
	let b = parseInt((a * 10) / 100);
	let suma = a + b;
	document.getElementById('txtIdResultado').value = suma;
}
