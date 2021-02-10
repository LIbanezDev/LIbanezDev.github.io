import React from 'react';
import a from 'next/link';
import styled from 'styled-components';

const SocialData = styled.i`
  margin-right: 20px;
  font-size: 30px;
  color: black;
`

const Header = () => {
  return (
    <header>
      <h1> Lucas Vergara Ibañez </h1>
      <div>
        <a href={'https://github.com/LIbanezDev'} target={'_blank'}>
          <SocialData className='fa fa-github' />
        </a>
        <a href={'https://www.linkedin.com/in/lucas-ignacio-vergara-iba%C3%B1ez-b22673166/'} target={'_blank'}>
          <SocialData className='fa fa-linkedin' />
        </a>
        <a href={'/CV_Lucas_Vergara.pdf'} download>
          <SocialData className='fa fa-address-card' />
        </a>
      </div>
    </header>
  );
};

export default Header;
