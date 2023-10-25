export const factura = {
    id: 10,
    nombre: 'Componentes PC',
    cliente: {
        nombre: 'Rolando',
        apellido: 'Díaz',
        direccion: {
            pais: 'Chile',
            ciudad: 'Santiago',
            calle: 'Callesita',
            numero: 1332
        },
    },
    compañia: {
        nombre: 'Wano Company',
        codigoPostal: 133256
    },
    productos: [
        {
            id:1,
            nombre: 'Tarjeta Madre',
            cantidad:5,
            precioUnitario: 210000,
        },
        {
            id:2,
            nombre: 'Monitor',
            cantidad:2,
            precioUnitario: 120000,
        },
        {
            id:3,
            nombre: 'Cpu Intel i9',
            cantidad:5,
            precioUnitario: 900000,
        },
    ]
}