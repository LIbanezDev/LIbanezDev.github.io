import React, { FC } from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

interface LayoutProps {
  title?: string;
  description: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' key='viewport' />
        <meta name='description' content='Portafolio de Lucas Ignacio Vergara Ibañez' />
        <meta name='keywords' content='portafolio, portfolio, resume, software development.' />
        <meta name='author' content='Lucas Vergara Ibañez' />
        <title> {title || 'Inicio - Portafolio'} </title>
        <link rel='icon' href={'favicon.ico'} />
      </Head>
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
