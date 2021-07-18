function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	let nota = Math.round(parseFloat(Math.random() * 10) + 1)
	if (nota <= 3) {
		alert(`${nota}, Vamos, la proxima se puede`)
	} else {
		if (nota < 9) {
			alert(`${nota}, APROBÓ`);
		} else {
			alert(`${nota}, EXCELENTE`);
		}
	}


}//FIN DE LA FUNCIÓN