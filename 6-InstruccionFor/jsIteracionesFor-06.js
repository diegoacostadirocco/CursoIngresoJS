function mostrar() {

	let contador = 0;
	let numeroIngresado = prompt('ingrese un numero');
	for (let i = 1; i < numeroIngresado; i++) {

		// if (i % 2 == 0) {
		// 	console.log(i)
		// 	let array = [];
		// 	array.push(i)
		// 	console.log(`${array.length}`)
		// }

		if (i % 2 == 0) {
			contador++;
			console.log(i)
		}
	}
	console.log(contador)

}//FIN DE LA FUNCIÓN