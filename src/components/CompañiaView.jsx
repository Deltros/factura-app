import PropTypes from 'prop-types'

export const CompañiaView = ({compañia}) => {

    const {nombre, codigoPostal} = compañia;

    return (
        <>
            <h3>Datos de la Compañía</h3>
            <ul className="list-group">
                <li className="list-group-item active">{nombre}</li>
                <li className="list-group-item">{codigoPostal}</li>
            </ul>
        </>
    )
}

CompañiaView.propTypes = {
    compañia: PropTypes.object.isRequired
}