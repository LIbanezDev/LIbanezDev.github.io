import React from 'react';
import { SectionTitle } from './styled/shared';
import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 22px;
`;

const Skills = () => {
  return (
    <div>
      <SectionTitle> Conocimientos </SectionTitle>
      <ul>
        <ListItem> Node con Express</ListItem>
        <ListItem> HTML, Javascript y Typescript</ListItem>
        <ListItem> Lenguaje SQL y gestores de bases de datos relacionales: MySQL & PostgreSQL</ListItem>
        <ListItem> GraphQL</ListItem>
        <ListItem> Nestjs</ListItem>
        <ListItem> Docker</ListItem>
        <ListItem> Google Cloud Platform</ListItem>
      </ul>
    </div>
  );
};

export default Skills;
