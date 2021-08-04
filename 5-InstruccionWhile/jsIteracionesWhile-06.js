function mostrar() {
	let contador;
	let acumulador;
	let numeroIngresado;

	contador = 0;
	acumulador = 0;

	while (contador < 5) {
		contador = contador + 1
		numeroIngresado = parseInt(prompt('ingrese un numero'))
		acumulador = numeroIngresado + acumulador
		console.log(contador)
		console.log(acumulador)
	}
	document.getElementById('txtIdSuma').value = acumulador
	document.getElementById('txtIdPromedio').value = acumulador / 5

}//FIN DE LA FUNCIÓN