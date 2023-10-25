import PropTypes from 'prop-types';
import { ProductoView } from './ProductoView';

export const ProductosView = ({productos, handlerDeleteProducto}) => {

    return (
        <>
            <h3>Productos</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {productos.map(({ id, nombre, precioUnitario, cantidad }) => 
                        <ProductoView key={id} 
                            id={id}
                            nombre={nombre} 
                            precioUnitario={precioUnitario} 
                            cantidad={cantidad}
                            handlerDeleteProducto={ id => handlerDeleteProducto(id) }
                        />
                    )}

                </tbody>
            </table>
        </>
    );
}

ProductosView.propTypes = {
    productos: PropTypes.array.isRequired,
    handlerDeleteProducto: PropTypes.func
}