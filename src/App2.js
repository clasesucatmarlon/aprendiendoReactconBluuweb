/* import './App.css'; */
import React from 'react';
import Contador from './components/Contador';
import Lista from './components/Lista';
/* import Formularios from './components/Formularios'; */
import Saludo from './components/saludo.jsx'
import Comentario from './components/Comentarios';

function App2() {
  
  const data = {
    nombre: 'Marlon',
    url: 'http://restauroarte.com/wordpress/wp-content/uploads/2017/10/movil-150x150.png',
    comentario: 'Comentario del personaje 1'
  }

  const data2 = {
    nombre: 'Aurelio',
    url: 'http://restauroarte.com/wordpress/wp-content/uploads/2017/10/telefono-150x150.png',
    comentario: 'Comentario del personaje 2'
  }

  return (
    <div className="container mt-5">
      <h1>Hola Marlon</h1>
      <Contador />
      <Lista />
      <Saludo persona='Marlon' />
      <Saludo persona='Ana' />
      <Comentario passData={data}/>
      <Comentario passData={data2}/>
    </div>
  );
}

export default App2;
