

function mostrar() {
    let nombreAnimal;
    let nombreMaximo;
    let nombreMinimo;
    let nombrePesado;

    let pesoAnimal = 0;
    let pesoMaximo = 1;
    let pesoMinimo = 1000;
    // let animalMasPesadoBajoCero = 0;
    let promedioPesoTotal = 0;
    let pesoMaximoBajoCero = 1;
    let pesoMinimoBajoCero = 1000;

    let temperaturaAnimal = 0;
    let temperturaMinima = 0;
    let temperturaMaxima = 0;
    // let temperaturaPesado = 0;
    let temperaturaPar = 0;


    let cantidadBajoCero = 0;
    let cantidadAnimales = 0;
    let cantidadPesoFinal = 0;



    do {
        nombreAnimal = prompt('ingrese nombre del animal');
        pesoAnimal = parseInt(prompt('ingrese el peso del animal'));

        while (pesoAnimal < 1 || pesoAnimal > 1000) {
            pesoAnimal = parseInt(prompt('ingrese el peso del animal'))
        }

        temperaturaAnimal = parseInt(prompt('ingrese la temperatura del animal'));

        while (temperaturaAnimal < -30 || temperaturaAnimal > 30) {
            temperaturaAnimal = prompt('ingrese la temperatura del animal')
        }

        if (pesoAnimal > pesoMaximo) {
            pesoMaximo = pesoAnimal;
            temperturaMaxima = temperaturaAnimal;
            nombreMaximo = nombreAnimal;

        } else {
            pesoMinimo = pesoAnimal;
            nombreMinimo = nombreAnimal;
            temperturaMinima = temperaturaAnimal;
        }


        if (temperaturaAnimal % 2 == 0) {
            temperaturaPar++;
        }

        if (temperaturaAnimal < 0) {
            cantidadBajoCero++
            if (pesoAnimal > pesoMaximo) {
                pesoMaximoBajoCero = pesoAnimal;
            }
            if (pesoAnimal < pesoMinimo) {
                pesoMinimoBajoCero = pesoAnimal;
            }
        }

        cantidadAnimales++;
        cantidadPesoFinal = cantidadPesoFinal + pesoAnimal;
        respuesta = prompt('desea ingresar otro animal? si/no');

        //add respuesta
    } while (respuesta != 'no');

    promedioPesoTotal = cantidadPesoFinal / cantidadAnimales;

    //document.write
    //document.write
    //document.write

}
