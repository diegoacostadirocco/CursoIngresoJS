/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	let flag = false
	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';


	while (respuesta != 'no') {
		numeroIngresado = parseInt(prompt('Introducir un numero'))

		if (numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado
		} else {
			flag = true
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado
		}

		respuesta = prompt('ingresar otro numero? si/no')
	}


	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN