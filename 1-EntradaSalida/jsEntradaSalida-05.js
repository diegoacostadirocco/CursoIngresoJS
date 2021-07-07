/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar(personName, personAge) {
	var personAge = personAge.value;
	var personName = personName.value;
	alert(`usted tiene ${personAge}, y su nombre tiene ${personName}`);
}
