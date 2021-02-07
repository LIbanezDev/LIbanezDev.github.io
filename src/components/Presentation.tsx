import React from 'react';
import styled from 'styled-components';

const Presentacion = styled.p`
  text-align: justify;
`;

const Presentation = () => {
  return (
    <div>
      <h3> Presentación </h3>
        <Presentacion>
          Estudiante de Informática, 20 años, Santiago de Chile <br />
          Llevo aproximadamente 1 año desarrollando en la web, en mis primeros meses utilizaba PHP como lenguaje primario y uno de
          sus Frameworks Laravel, con estos construí un sitio para subir material de estudio para los ramos de las carreras en mi
          Universidad. <br />
          Actualmente utilizo uno de los muchos Typescript stacks. En el cliente React y su Framework NextJS, en el servidor
          Node con el Framework NestJS, y GraphQL o REST como interfaz de comunicación. <br />
          Cuento con conocimientos en arquitectura orientada a microservicios y Docker como herramienta de construcción de contenedores. <br />
        </Presentacion>
    </div>
  );
};

export default Presentation;