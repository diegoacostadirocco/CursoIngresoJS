
// Si está entre las 6 y las 11 mostrar:"es de mañana",
// si es desde las 12 a las 19: "es de tarde",
// de lo contrario informar que es de noche.
// Informar si la hora no es válida.
// Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".


function mostrar() {

    let hora = parseInt(document.getElementById('laHora').value);

    switch (true) {

        case hora <= 24:
            console.log(hora);
            if (hora >= 6 && hora <= 11) {
                alert('es de maniana');
                break;
            }
            if (hora >= 12 && hora <= 19) {
                alert('es de tarde');
                break;
            } else if (hora >= 20 || hora < 6) {
                alert('a dormir');
                break;
            }
            break;
        default:
            alert('hora no valida')
            break;
    }
}
