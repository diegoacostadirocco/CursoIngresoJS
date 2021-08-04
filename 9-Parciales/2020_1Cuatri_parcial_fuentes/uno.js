



// // alcohol mas barato con cant unidades y fabricante

// // el que tenga mas unidades, el promedio por compra

// // cantidad final de jabones 

// el tipo (validar "barbijo" , "jabón" o "alcohol") , <br>
// el precio (validar entre 100 y 300),<br>
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
//  la Marca y el fabricante. <br>
// Se debe Informar al usuario lo siguiente:<br>
// Se debe Informar al usuario lo siguiente:
// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
// b) Del tipo con mas unidades, el promedio por compra
// // c) Cuántas unidades de jabones hay en total
function mostrar() {
	let cantidadDeProductos = 5;
	let tipoDeProducto; //"barbijo" , "jabón" o "alcohol"
	let precio = 0; //entre 100 y 300
	let cantidadUnidades = 0;// entre 1 y 1000
	let marca;
	let fabricante;

	let precioAlcohol = 300;
	let cantidadJabones = 0;
	let cantidadBarbijos = 0;
	let cantidadAlcohol = 0;
	let arrayDeCantidadDeProductos;
	let mayorCantidadProducto

//podria usarse un switch con case de los 3 tipos.
	// switch (tipoDeProducto) {
	// 	case 'jabon':
			
	// 		break;
	// 	case 'alcohol':
	// 		break;
	// 	case 'barbijo':
	// 		break;
	// 	default:
	// 		break;
	// }

	for (let producto = 0; producto < cantidadDeProductos; producto++) {
			tipoDeProducto = prompt('ingrese un tipo de producto, (jabon, alcohol o barbijo)');
			while (tipoDeProducto != 'jabon' || tipoDeProducto != 'alcohol' || tipoDeProducto != 'barbijo') {
				tipoDeProducto = prompt('por favor ingrese un tipo de producto valido (jabon, alcohol, barbijo')
			}
			precio = parseFloat(prompt('ingrese precio del producto(entre 100 y 300)'))
			while (precio < 100 || precio > 300) {
				precio = prompt('por favor ingrese un precio valido(entre 100 y 300)')
			}
			cantidadUnidades = parseInt(prompt('ingrese cantidad del producto(entre 1 y 1000)'))
			while (cantidadUnidades < 1 || cantidadUnidades > 1000) {
				cantidadUnidades = prompt('por favor ingrese una cantidad valida(entre 1 y 1000)')
			}
			marca = prompt('ingrese la marca del producto')
			fabricante = prompt('ingrese el fabricante del producto')


			if (tipoDeProducto === 'jabon') {
				cantidadJabones++
				sumaCantidadJabones = cantidadJabones + cantidadUnidades
				precio = precio * cantidadUnidades
			}

			if (tipoDeProducto === 'alcohol' && precio <= precioAlcohol) {

				cantidadAlcohol = cantidadUnidades
				fabricanteAlcohol = fabricante	
			}

			if (tipoDeProducto === 'barbijos') {
				cantidadBarbijos = cantidadBarbijos + cantidadUnidades
				precio = precio * cantidadUnidades
			}
			
		}
		arrayDeCantidadDeProductos = [cantidadBarbijos, cantidadAlcohol, cantidadJabones]
		mayorCantidadProducto = Math.max(...arrayDeCantidadDeProductos);
		promedioCompra = precio / mayorCantidadProducto

	} while (producto = 5);
}
