
<h2>Bienvenidos.
</br>En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad, edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
la Nacionalidad de la persona con mas temperatura.
Cuantos mayores de edad(más  de 17) estan solteros
La cantidad de Mujeres que hay solteras  o viudas.
cuantas personas de la tercera edad(mas de 60 años), tienen mas de 38 de temperatura
						
El promedio de edad entre las mujeres casadas.
										</h2 >



	function mostrar() {
		let nombre;
		let nacionalidad;
		let edad;
		let sexo;
		let estadoCivil;
		let temperaturaCorporal;
		let cantSolteras;
		let cantViudas;


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

			while (estadoCivil != 'casado' && estadoCivil != 'viudo') {

			}




			if (sexo == 'f') {
				if (estadoCivil == 'soltera') {
					cantSolteras++;
				} else if (estadoCivil == 'viuda') {

				}
			}





			pregunta = prompt('desea ingresar otra persona? si/no')
		} while (pregunta == "si");


	}
