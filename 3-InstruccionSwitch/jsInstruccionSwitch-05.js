function mostrar() {
	//tomo la hora
	var horaDelDia = parseInt(document.getElementById('txtIdHora').value);
	switch (true) {
		case (horaDelDia >= 7 && horaDelDia <= 11):
			alert('es la maniana');
			break;
		default:
			break;
	}





}//FIN DE LA FUNCIÓN