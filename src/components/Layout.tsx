import React, { FC } from 'react';
import Header from './Header';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

interface LayoutProps {
  title?: string;
  description: string;
}

const Container = styled.div`
  font-family: Inter, serif;
  margin: 50px;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name='description' content='Portafolio de Lucas Ignacio Vergara Ibañez' />
        <meta name='keywords' content='portafolio, portfolio, resume, software development.' />
        <meta name="author" content="Lucas Vergara Ibañez" />
        <title> {title || 'Lucas Vergara Ibañez'} </title>
        <link rel='icon' type='image/jpg' href={'cat_moon.jpg'} />
      </Head>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
