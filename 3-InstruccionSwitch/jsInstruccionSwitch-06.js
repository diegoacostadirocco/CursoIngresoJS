function mostrar() {
	//tomo la hora
	var horaDelDia = parseInt(document.getElementById('txtIdHora').value);
	switch (true) {
		case (horaDelDia >= 7 && horaDelDia <= 11):
			alert('es la maniana');
			break;
		case (horaDelDia >= 12 && horaDelDia <= 19):
			alert('Es de tarde');
			break;
		case (horaDelDia >= 20 && horaDelDia <= 24):
			alert('es la noche');
			break;
		case (horaDelDia >= 0 && horaDelDia <= 6):
			alert('es la noche');
			break;
		default:
			alert('hora no existe');
			break;
	}


}//FIN DE LA FUNCIÓN