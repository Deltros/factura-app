import PropTypes from 'prop-types';

export const ProductoView = ({ id, nombre, precioUnitario, cantidad, handlerDeleteProducto }) => {
    return (
        <>
            <tr>
                <td>{nombre}</td>
                <td>{precioUnitario}</td>
                <td>{cantidad}</td>
                <td>{precioUnitario * cantidad}</td>
                <td><button 
                        className='btn btn-danger' 
                        onClick={() => handlerDeleteProducto(id)}>
                            Eliminar
                    </button>
                </td>
            </tr>
        </>
    );
}

ProductoView.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    precioUnitario: PropTypes.number.isRequired,
    cantidad: PropTypes.number.isRequired,
    handlerDeleteProducto: PropTypes.func
}