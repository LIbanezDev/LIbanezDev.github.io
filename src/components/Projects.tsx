import React from 'react';
import a from 'next/link';

const Projects = () => {
  return (
    <div>
      <h3> Proyectos </h3>
      <div className={'animate__animated animate__fadeIn'}>
        <ul>
          <li>
            <a href={'https://github.com/LibanezDev/fakebook'} target={'_blank'}>
              Fakebook
            </a>
          </li>
          <li>
            <a href={'https://github.com/LibanezDev/social-todos-web'} target={'_blank'}>
              Social Todos Web Client
            </a>
          </li>
          <li>
            <a href={'https://github.com/LibanezDev/social-todos-server'} target={'_blank'}>
              Social Todos Server
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
