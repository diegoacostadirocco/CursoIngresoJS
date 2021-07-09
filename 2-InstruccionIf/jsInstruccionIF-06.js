function mostrar() {
	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);
	if (edad <= 17 && edad >= 13) {
		alert("Eres adolescente")
	} if (edad >= 18) {
		alert(`Eres un adulto`);
	} else {
		alert('eres un ninio');
	}

}//FIN DE LA FUNCIÓN