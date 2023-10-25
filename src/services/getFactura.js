import { factura } from "../data/factura"

export const getFactura = () => {

    const total = calcularTotal(factura.productos);

    return {...factura, total};
}

export const calcularTotal = (productos = []) => {

    let total = 0;

    productos.forEach(producto => {
        total += producto.cantidad * producto.precioUnitario;
     });

    // misma forma de hacer la wea pero no funciona
    /*const total = factura.productos
        .map( producto => producto.precioUnitario *  producto.cantidad)
        .reduce( (accumulator, currentValue) => { accumulator + currentValue, 0 } );*/

     return total;
}