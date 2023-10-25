import { useState } from "react";
import PropTypes from 'prop-types'

export const FormProductosFactura = ({ handler }) => {

    const [productoFacturaForm, setProductoFacturaForm] = useState({
        nombreProducto: '',
        cantidad: '',
        precioUnitario: '',
    });

    const {nombreProducto, cantidad, precioUnitario} = productoFacturaForm;

    const onProductoFacturaFormChange = ({ target: {name,value} }) => {
        setProductoFacturaForm({
            ...productoFacturaForm,
            [name]: value
        });
    }

    const onProductoFacturaSubmit = (event) => {

        event.preventDefault();

        if (nombreProducto.trim().length < 1) return;

        if (cantidad.trim().length < 1) return;
        if ( isNaN(cantidad) ) return;

        if (precioUnitario.trim().length < 1) return;
        if ( isNaN(precioUnitario) ) return;

        handler(productoFacturaForm);

        setProductoFacturaForm({
            nombreProducto: '',
            cantidad: '',
            precioUnitario: '',
        });
    }

    return (<>
        <form className="w-50" onSubmit={event => onProductoFacturaSubmit(event)}>
            <input 
                type="text" 
                name="nombreProducto"
                value={nombreProducto}
                placeholder="Nombre del producto" 
                className="form-control m-2"
                onChange={ event => onProductoFacturaFormChange(event) }/>
            <input 
                type="text" 
                name="cantidad"
                value={cantidad}
                placeholder="Cantidad a comprar" 
                className="form-control m-2"
                onChange={ event => onProductoFacturaFormChange(event) }/>
            <input 
                type="text" 
                name="precioUnitario" 
                value={precioUnitario}
                placeholder="Precio unitario del producto" 
                className="form-control m-2"
                onChange={ event => onProductoFacturaFormChange(event) }/>
            
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    </>);
}

FormProductosFactura.propTypes = {
    handler: PropTypes.func.isRequired
}