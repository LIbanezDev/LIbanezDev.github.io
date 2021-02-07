import React from 'react';
import a from 'next/link';

const Header = () => {
  return (
    <header>
      <h1> Lucas Vergara Ibañez </h1>
      <div>
        <a href={'https://github.com/LIbanezDev'} target={'_blank'}>
          <i className='fa fa-github' style={{ marginRight: 20, fontSize: 30, color: 'black' }} />
        </a>
        <a href={'https://www.linkedin.com/in/lucas-ignacio-vergara-iba%C3%B1ez-b22673166/'} target={'_blank'}>
          <i className='fa fa-linkedin' style={{ marginRight: 20, fontSize: 30, color: 'black' }} />
        </a>
        <a href={'/CV_Lucas_Vergara.pdf'} download>
          <i className='fa fa-address-card' style={{ marginRight: 20, fontSize: 30, color: 'black' }} />
        </a>
      </div>
    </header>
  );
};

export default Header;
