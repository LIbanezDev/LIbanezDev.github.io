import React from 'react';
import a from 'next/link';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const SocialData = styled.i`
  margin-right: 20px;
  font-size: 20px;
  color: black;
`;

const Header = () => {
  return (
    <>
      <Row className={'mt-4'}>
        <Col lg={12}>
          <h1> Lucas Vergara Ibañez </h1>
        </Col>
        <Col lg={12}>
          <p> Estudiante de Informática, 20 años, Santiago de Chile </p>
        </Col>
        <Col>
          <a href={'https://github.com/LIbanezDev'} target={'_blank'}>
            <SocialData className='fa fa-github' />
          </a>
          <a href={'https://www.linkedin.com/in/lucas-ignacio-vergara-iba%C3%B1ez-b22673166/'} target={'_blank'}>
            <SocialData className='fa fa-linkedin' />
          </a>
          <a href={'/CV_Lucas_Vergara.pdf'} download>
            <SocialData className='fa fa-address-card' />
          </a>
        </Col>
      </Row>
    </>
  )
    ;
};

export default Header;
