import PropTypes from 'prop-types'

export const FacturaView = ({ id, nombre} ) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">ID: {id}</li>
                <li className="list-group-item">Nombre: {nombre}</li>
            </ul>
        </>
    );
}

FacturaView.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired
}