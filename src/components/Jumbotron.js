import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import titelimg from '../assets/titelbild.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${titelimg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 50vh;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Wilkommen</h1>
        <p>im casa</p>
      </Container>
    </Jumbo>
  </Styles>
)