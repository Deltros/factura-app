import { useEffect, useState } from "react";
import { getFactura, calcularTotal } from "./services/getFactura"
import { FacturaView } from "./components/FacturaView";
import { ClienteView } from "./components/ClienteView";
import { CompañiaView } from "./components/CompañiaView";
import { ProductosView } from "./components/ProductosView";
import { TotalView } from "./components/TotalView";
import { FormProductosFactura } from "./components/FormProductosFactura";

const facturaValoresDefecto = {
    id: 0,
    nombre: '',
    cliente: {
        nombre: '',
        apellido: '',
        direccion: {
            pais: '',
            ciudad: '',
            calle: '',
            numero: 0
        },
    },
    compañia: {
        nombre: '',
        codigoPostal: 0
    },
    productos: []
};

export const FacturaApp = () => {

    const [ agregarItem, setAgregarItem ] = useState(false);

    const [ total, setTotal ] = useState(0);

    const [ contador, setContador ] = useState(4);

    const [ factura, setFactura ] = useState(facturaValoresDefecto);

    const [ productos, setProductos ] = useState([]);

    const { id, nombre , cliente, compañia } = factura;

    useEffect(() => {
        const data = getFactura();
        setFactura(data);
        setProductos(data.productos);
    }, []);

    useEffect(() => {
        setTotal( calcularTotal(productos) );
    }, [productos]);

    const handlerAddProducto = ({ nombreProducto, cantidad, precioUnitario }) => {

        setProductos([...productos, 
            {
                id: contador,
                nombre: nombreProducto.trim(),
                cantidad: +cantidad.trim(),
                precioUnitario: parseInt(precioUnitario.trim(), 10)
        }])

        setContador(contador+1);
    }

    const handlerDeleteProducto = (id) => {
        setProductos( productos.filter(producto => { return producto.id != id }) )
    }

    const onAgregarItem = () => {
        setAgregarItem(!agregarItem);
    }

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo Factura
                    </div>

                    <div className="card-body">
                        <FacturaView id={id} nombre={nombre} />

                        <div className="row">
                            <div className="col">
                                <ClienteView cliente={cliente} />
                            </div>

                            <div className="col">
                                <CompañiaView compañia={compañia} />
                            </div>
                        </div>

                        <ProductosView 
                            productos={productos} 
                            handlerDeleteProducto={ id => handlerDeleteProducto(id) }
                        />
                        <TotalView total={total}/>

                        <button 
                            className="btn btn-secondary"
                            onClick={ onAgregarItem }> 
                                { !agregarItem ? 'Agregar Item' : 'Ocultar Formulario' } 
                        </button>
                        <br />
                        { !agregarItem || <FormProductosFactura handler={handlerAddProducto}/> }
                        
                    </div>
                </div>
            </div>
        </>
    )
}