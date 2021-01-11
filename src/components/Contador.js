import React, { useState, Fragment } from 'react';

const Contador = () => {
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        setNumero(numero + 1);
    }

    const disminuir = () => {
        setNumero(numero - 1);
    }

    return (
        <Fragment>
            <h3 className='mt-5'>Mi primer componente.  El valor es {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </Fragment>
    );
}

export default Contador;