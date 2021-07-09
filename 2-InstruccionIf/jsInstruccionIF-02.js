function mostrar() {
	//tomo la edad  
	edad = parseInt(document.getElementById('txtIdEdad').value);
	if (edad >= 18) {
		alert("Eres Mayor de edad")
	} else {
		alert(`No eres mayor de edad`);
	}

}//FIN DE LA FUNCIÓN