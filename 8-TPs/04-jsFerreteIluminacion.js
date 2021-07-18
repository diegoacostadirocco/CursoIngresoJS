/*
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    const PRECIO_INIT = 35;
    let cantLamparas = parseInt(document.getElementById('txtIdCantidad').value);
    let marca = document.getElementById('Marca').value;
    let precio = (cantLamparas * PRECIO_INIT);
    let descuento;
    let precioFinal;
    let precioConBruto;
    let ingBrutos;

    switch (true) {
        case (cantLamparas >= 6):

            precioFinal = (precio) / 2
            if (precioFinal >= 120) {
                ingBrutos = precioFinal * 10 / 100
                precioConBruto = precioFinal + ingBrutos
                document.getElementById('txtIdprecioDescuento').value = precioConBruto
                alert(`usted pago ${ingBrutos} de IIBB`)
                break;
            }

        case (cantLamparas === 5):

            if (marca === 'ArgentinaLuz') {
                descuento = ((precio) * 40 / 100)
                precioFinal = (precio - descuento)

                if (precioFinal >= 120) {
                    ingBrutos = (precioFinal * 10 / 100)
                    precioConBruto = precioFinal + ingBrutos
                    document.getElementById('txtIdprecioDescuento').value = precioConBruto
                    alert(`usted pago ${ingBrutos} de IIBB`)
                    break;
                } else {
                    document.getElementById('txtIdprecioDescuento').value = precioFinal
                    break;
                }
            } else {
                descuento = (precio) * 30 / 100
                precioFinal = precio - descuento

                if (precioFinal >= 120) {
                    ingBrutos = precioFinal * 10 / 100
                    precioConBruto = precioFinal + ingBrutos
                    document.getElementById('txtIdprecioDescuento').value = precioConBruto
                    alert(`usted pago ${ingBrutos} de IIBB`)
                    break;
                }
                break;
            }

        case (cantLamparas === 4):

            if (marca === 'ArgentinaLuz' || marca === 'FelipeLamparas') {
                descuento = (precio) * 25 / 100
                precioFinal = precio - descuento
                document.getElementById('txtIdprecioDescuento').value = precioFinal
                break;
            } else {
                descuento = (precio) * 20 / 100
                precioFinal = precio - descuento
                document.getElementById('txtIdprecioDescuento').value = precioFinal
                break;
            }

        case (cantLamparas === 3):

            if (marca === 'ArgentinaLuz') {
                descuento = (precio) * 15 / 100
                precioFinal = precio - descuento
                document.getElementById('txtIdprecioDescuento').value = precioFinal
                break;
            } else if (marca === 'FelipeLamparas') {
                descuento = (precio) * 10 / 100
                precioFinal = precio - descuento
                document.getElementById('txtIdprecioDescuento').value = precioFinal
                break;

            } else {
                descuento = (precio) * 5 / 100
                precioFinal = precio - descuento
                document.getElementById('txtIdprecioDescuento').value = precioFinal
                break;
            }
    }
}