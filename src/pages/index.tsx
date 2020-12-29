import React, { FormEvent } from 'react';
import { GetStaticProps } from 'next';
import { InitialApolloState, initializeApollo } from '../lib/apolloClient';
import Layout from '../components/Layout';
import a from 'next/link';
import { useQuery } from '@apollo/client';
import { GetGithubInfo, GithubInfo } from '../utils/queries';

const Index = () => {
  const { data } = useQuery<GithubInfo>(GetGithubInfo);
  const sendContact = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    alert('Mensaje Enviado!');
  };
  return (
    <Layout description={'Yeah'}>
      <h1>Lucas Ignacio Vergara </h1>
      <div>
        <a href={'https://github.com/Fromiti'} target={'_blank'}>
          <button className='btn' style={{ marginRight: 5 }}>
            <i className='fa fa-github' />
          </button>
        </a>
        <a href={'https://www.linkedin.com/in/lucas-vergara-iba%C3%B1ez-b22673166/'} target={'_blank'}>
          <button className='btn' style={{ marginRight: 5 }}>
            <i className='fa fa-linkedin' />
          </button>
        </a>
        <a href={'https://twitter.com/LIbanez'} target={'_blank'}>
          <button className='btn' style={{ marginRight: 5 }}>
            <i className='fa fa-twitter' />
          </button>
        </a>
      </div>
      <div>
        <h4> Presentación </h4>
        <p>
          Estudiante de Informática, 20 años, Santiago de Chile. <br />
          Cuento con mucha motivación para aprender cosas nuevas relacionadas con la tecnología, lo cual lo plasmo desarrollando
          proyectos que signifiquen un desafio para mi carrera como desarrollador de Software. <br />
          Llevo aproximadamente 1 año desarrollando en la web, en mis primeros meses utilizaba PHP como lenguaje primario y uno de
          sus Frameworks principales llamado Laravel, con estos construí un sitio para subir material de estudio para los ramos de
          las carreras en mi Universidad. <br />
          Desde hace 6 meses estoy utilizando Typescript como lenguaje primario, ya que lo utilizo tanto para el desarrollo en la
          web como en el servidor, en el cliente con ReactJS y su Framework NextJS, y en el servidor el Framework NestJS con GraphQL.
        </p>
      </div>
      <div>
        <h4> Conocimientos </h4>
        <ul>
          <li> HTML, Javascript y Typescript </li>
          <li> Node con Express </li>
          <li> Lenguaje SQL y gestores de bases de datos relacionales: MySQL & PostgreSQL </li>
          <li> GraphQL </li>
          <li> NestJS </li>
          <li> React </li>
          <li> NextJS </li>
        </ul>
      </div>
      <div>
        <h4> Proyectos </h4>
        <div className={'animate__animated animate__fadeIn'}>
          <ul>
            {data.viewer.repositories.nodes.map(repo => (
              <li key={repo.url}>
                <a href={repo.url} target={'_blank'}>
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h4> Contacto... </h4>
        <form onSubmit={sendContact}>
          <input placeholder={'Input Element'} />
        </form>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<InitialApolloState> = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GetGithubInfo,
  });
  const cache = apolloClient.cache.extract();
  return {
    props: {
      initialApolloState: cache,
    },
    revalidate: 1,
  };
};

export default Index;