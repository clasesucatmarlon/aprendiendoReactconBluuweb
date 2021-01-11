import React, { useState, Fragment } from 'react';

const Formularios = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        /* console.log(event.target.value) */
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.  log(datos.nombre + ' ' + datos.apellido)
    }

    return (
        <Fragment>
            <h1 className='mt-5'>Formularios</h1>
            <form className='row' onSubmit={enviarDatos}>
                <div className='col-md-3'>
                    <input
                        placeholder='Ingrese nombre'
                        className='form-control'
                        type='text'
                        name='nombre'
                        onChange={handleInputChange}
                    />
                </div>
                <div className='col-md-3'>
                    <input
                        placeholder='Ingrese apellido'
                        className='form-control'
                        type='text'
                        name='apellido'
                        onChange={handleInputChange}
                    />
                </div>
                <div className='col-md-3'>
                    <button className='btn btn-primary'>Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre}  {datos.apellido}</h3>
        </Fragment>
    );
}

export default Formularios;