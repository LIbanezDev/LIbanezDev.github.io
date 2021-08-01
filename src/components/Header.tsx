import React from 'react';
import a from 'next/link';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const SocialData = styled.i`
  margin-right: 20px;
  font-size: 20px;
  color: black;
  align-content: flex-end;
`;

const Title = styled.h1`
  color: #df0399;
  font-size: 40px;
`;

const Subtitle = styled.h2`
  color: #322f2f;
  font-size: 25px;
`;

const Header = () => {
  return (
    <>
      <Row className={'mt-4'}>
        <Col lg={12}>
          <Title> Lucas Vergara Ibañez </Title>
          <div className='d-flex'>
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
        </Col>
        <Col lg={12}>
          <Subtitle> Estudiante de Informática - 20 años - Santiago de Chile </Subtitle>
        </Col>
      </Row>
    </>
  );
};

export default Header;
