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
      <h1> Lucas Vergara Ibañez </h1>
      <h3> En construcción... </h3>
      <div>
        <a href={'https://github.com/LIbanezDev'} target={'_blank'}>
          <button className='btn' style={{ marginRight: 5 }}>
            <i className='fa fa-github' />
          </button>
        </a>
        <a href={'https://www.linkedin.com/in/lucas-ignacio-vergara-iba%C3%B1ez-b22673166/'} target={'_blank'}>
          <button className='btn' style={{ marginRight: 5 }}>
            <i className='fa fa-linkedin' />
          </button>
        </a>
        <a href={'/CV_Lucas_Vergara.pdf'} download>
          <button className='btn' style={{ marginRight: 5 }}>
            <i className='fas fa-file' />
          </button>
        </a>
      </div>
      <div>
        <h3> Presentación </h3>
        <p>
          Estudiante de Informática, 20 años, Santiago de Chile <br />
          Tengo mucha motivación para aprender nuevas tecnologías, lo cual lo plasmo desarrollando proyectos que signifiquen un
          desafio para mi carrera como desarrollador de software. <br />
          Llevo aproximadamente 1 año desarrollando en la web, en mis primeros meses utilizaba PHP como lenguaje primario y uno de
          sus Frameworks Laravel, con estos construí un sitio para subir material de estudio para los ramos de las carreras en mi
          Universidad. <br />
          Desde hace 6 meses estoy utilizando Typescript como lenguaje primario, ya que lo utilizo tanto para el desarrollo en la
          web como en el servidor, en el cliente con ReactJS y su Framework NextJS, y en el servidor el Framework NestJS con
          GraphQL.
        </p>
      </div>
      <div>
        <h3> Conocimientos </h3>
        <ul>
          <li> HTML, Javascript y Typescript</li>
          <li> Node con Express</li>
          <li> Lenguaje SQL y gestores de bases de datos relacionales: MySQL & PostgreSQL</li>
          <li> GraphQL</li>
          <li> React</li>
          <li> Nextjs</li>
          <li> Nestjs</li>
        </ul>
      </div>
      <div>
        <h3> Proyectos </h3>
        <div className={'animate__animated animate__fadeIn'}>
          <ul>
            {data.viewer.repositories.nodes
              .filter(repo => repo.homepageUrl != null && repo.homepageUrl != '')
              .map(repo => (
                <li key={repo.url}>
                  <a href={repo.url} target={'_blank'}>
                    {repo.name}
                  </a>
                  <br />
                  <a href={repo.homepageUrl} target={'_blank'}>
                    Homepage
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h3> Contacto... </h3>
        <form onSubmit={sendContact}>
          <input placeholder={'Nombre o Correo'} />
          <input placeholder={'Mensaje'} />
          <button type={'submit'}>Enviar</button>
        </form>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<InitialApolloState> = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GetGithubInfo
  });
  const cache = apolloClient.cache.extract();
  return {
    props: {
      initialApolloState: cache
    },
    revalidate: 1
  };
};

export default Index;
