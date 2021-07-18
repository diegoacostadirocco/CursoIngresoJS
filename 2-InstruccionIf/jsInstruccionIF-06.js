function mostrar() {
	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);
	if (edad <= 17 && edad >= 13) {
		alert("Eres adolescente")
	} else {
		if (edad >= 18) {
			alert(`Eres un adulto`);
		} if (edad <= 12) {
			alert('eres un ninio');
		}
	}

}//FIN DE LA FUNCIÓN