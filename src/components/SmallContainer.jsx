import React from 'react';

const SmallContainer = ({ children }) => {
 return (
    <div className="centered-container">
      {children}
      <style jsx>{`
        .centered-container {
            width: 30%; /* Ancho deseado del contenedor */
            margin: 50px auto; /* Centrar horizontalmente en la pantalla */
            display: flex; /* Usar flexbox para centrar verticalmente los elementos */
            justify-content: center; /* Centrar verticalmente */
            align-items: center; /* Centrar horizontalmente */
            height: 500px; /* Altura deseada del contenedor */
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(2px);
            padding: 60px; /* Espacio interior alrededor del contenido */
            border-radius: 95px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Sombra ligera */
        }

        /* Estilos para pantallas pequeñas */
        @media screen and (max-width: 768px) {
          .centered-container {
            width: 80%; /* Ajustar el ancho del contenedor para pantallas pequeñas */
          }
        }
      `}</style>
    </div>
 );
};

export default SmallContainer;
