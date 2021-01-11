import React, { Fragment } from 'react';
import Imagen from './Imagen';


const Comentario = ({passData}) => {
    return (
        <Fragment>
            <h1 className="mt-5">Comentarios</h1>
            <hr/>
            <div className="media">
                <Imagen url={passData.url}/>
                <div className="media-body">
                    <h5 className="mt-0">{passData.nombre}</h5>
                    {passData.comentario}
                </div>

            </div>

        </Fragment>
    );
}

export default Comentario;
