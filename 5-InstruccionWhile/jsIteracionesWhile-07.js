/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador;
	let acumulador;
	let respuesta;
	contador = 0;
	acumulador = 0;
	respuesta = 'si';


	do {
		let numeroIngresado = parseInt(prompt('ingrese un numero'))
		respuesta = prompt('desea ingresar otro numero? si/no')
		contador = contador + 1
		acumulador = acumulador + numeroIngresado
	} while (respuesta === 'si') {
		document.getElementById('txtIdSuma').value = acumulador;
		document.getElementById('txtIdPromedio').value = acumulador / contador;
	}

}//FIN DE LA FUNCIÓN