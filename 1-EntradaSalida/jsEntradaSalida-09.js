/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento() {
	var a = parseInt(document.getElementById('txtIdSueldo').value);
	var b = parseInt((a * 10) / 100);
	var suma = a + b;
	document.getElementById('txtIdResultado').value = suma;
}
