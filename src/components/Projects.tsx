import React from 'react';
import { SectionTitle } from './styled/shared';
import { ListItem } from './Skills';

const Projects = () => {
  return (
    <div>
      <SectionTitle> Proyectos </SectionTitle>
      <div className={'animate__animated animate__fadeIn'}>
        <ul>
          <ListItem> Material USM </ListItem>
          <ListItem> Fakebook </ListItem>
          <ListItem> Social Todos </ListItem>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
