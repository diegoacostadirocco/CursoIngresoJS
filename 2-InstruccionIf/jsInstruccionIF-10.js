function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	let nota = parseInt(Math.random() * 10) + 1

	if (nota < 4) {
		alert(`${nota}, Vamos, la proxima se puede`)
	} else {
		if (nota >= 4 && nota < 9) {
			alert(`${nota}, APROBÓ`);
		} else {
			alert(`${nota}, EXCELENTE`);
		}
	}


}//FIN DE LA FUNCIÓN