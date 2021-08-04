{/* <h2>Bienvenidos.
</br>En el ingreso a un viaje en avion nos solicitan nombre, edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
		 </br > a)
		El nombre de la persona con mas temperatura.
		 </br > b)
		Cuantos mayores de edad estan viudos
		 </br > c)
		La cantidad de hombres que hay solteros  o viudos.
		 </br > d)
		cuantas personas de la tercera edad(mas de 60 años), tienen mas de 38 de temperatura

		 </br > e)
		El promedio de edad entre los hombres solteros.
		</h2 > */}


function mostrar() {
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let cantSolteros;
	let contadorDeViudos;
	let contadorMayorViudos;
	let cantCasados;
	let personaMaxTemp;
	let maxTemperatura;
	let flagMax = false
	let contadorMayoresTemp;
	let cantidadDeEdades;


	do {
		nombre = prompt('ingrese nombre')
		edad = parseInt(prompt('ingrese su edad'))
		while (isNaN(edad)) {
			edad = parseInt(prompt('error. ingrese su edad'))
		}

		sexo = prompt('ingrese su sexo (f/m)')
		while (sexo != 'f' && sexo != 'm') {
			sexo = prompt('error. ingrese su sexo')
		}
		estadoCivil = prompt('ingrese estado civil')
		while (estadoCivil != 'casado' && estadoCivil != 'soltero' && estadoCivil != 'viudo') {
			estadoCivil = prompt('error, reingrese estado')
		}

		temperatura = parseFloat(prompt('ingrese estado civil'))
		while (isNaN(temperatura)) {
			temperatura = parseFloat(prompt('error, reingrese estado'))
		}


		if (flagMax == 0 || maxTemperatura < temperatura) {
			maxTemperatura = temperatura;
			personaMaxTemp = nombre;
			flagMax = 1;
		}

		switch (estadoCivil) {
			case 'viudo':
				if (edad >= 18) {
					contadorMayorViudos++
				}
				if (sexo == 'm') {
					contadorDeViudos
				}
				break;
			case 'soltero':
				if (sexo == 'm') {
					cantSolteros++
				}

				break;
			default:
				break;
		}

		if (edad >= 60 && temperatura > 38) {
			contadorMayoresTemp++
		}

		if (sexo == 'm' && estadoCivil == 'soltero') {
			cantidadDeEdades = cantidadDeEdades + edad
		}

		pregunta = prompt('desea ingresar otra persona? si/no')
	} while (pregunta == "si");

	promedio = cantidadDeEdades / cantSolteros

	alert(' la persona con mas temperatura es ' + nombre)
	alert(' cantidad de mayores ' + contadorMayorViudos)
	alert(' cantidad de solteros ' + cantSolteros + ' o viudos ' + contadorDeViudos)
	alert(' hay mas de ' + contadorMayoresTemp + 'mayores con mas de 38')
	alert('promedio de edad de los solteros:' + promedio)

}