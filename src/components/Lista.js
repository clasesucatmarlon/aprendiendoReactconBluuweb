import React, { useState, Fragment } from 'react';


const Lista = () => {

    const [lista, SetLista] = useState([2, 4, 6, 7, 1, 24]);
    const [numero, setNumero] = useState(2)

    const agregarElemento = () => {
        setNumero(numero + 10);
        SetLista([...lista, numero]);
    }

    return (
        <Fragment>
            <h2 className='mt-5'>Lista</h2>
            <button onClick={agregarElemento}>Agregar Elemento</button>
            {
                lista.map((item, index) =>
                    <p key={index}>Número: {item} -- Indice: {index}</p>
                )
            }

        </Fragment>
    );
}

export default Lista;