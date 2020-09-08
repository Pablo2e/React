import React from 'react';
import Saludo from './components/Saludo'
import Comentario from './components/Comentario'

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Luis' edad={30}/>
      <Saludo persona='Pepe' edad={40}/>
      <Saludo persona='Jose' edad={50}/>
      <hr/>
      <h3>Cajita de comentarios</h3>
      <Comentario 
        urlImagen='https:picsum.photos/64'
        persona='Luis'
        texto='Luis Luis Luis'/>
      <Comentario 
        urlImagen='https:picsum.photos/64'
        persona='Pepe'
        texto='Pepe Pepe Pepe'/>
      <Comentario 
        urlImagen='https:picsum.photos/64'
        persona='Jose'
        texto='Jose Jose Jose'/>
    </div>
  );
}

export default App;
