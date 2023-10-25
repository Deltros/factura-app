import PropTypes from 'prop-types';

export const ClienteView = ( { cliente } ) => {

    const {nombre, apellido, direccion: {pais, ciudad, calle, numero}} = cliente;

    return  (
        <>
            <h3>Datos del cliente</h3>
            <ul className="list-group">
                <li className="list-group-item active">{nombre} {apellido}</li>
                <li className="list-group-item">{pais}, {ciudad}</li>
                <li className="list-group-item">{calle} {numero}</li>
            </ul>
        </>
    )
}

ClienteView.propTypes = {
    cliente: PropTypes.object.isRequired
}