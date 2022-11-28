import React from "react";
import styles from './styles.module.css';
import '../styles.css';
import Container from 'react-bootstrap/Container';
import Svg from '../../components/D3/Svg';
import Circle from '../../components/D3/Circle';
import Circles from '../../components/D3/Circles';
import AnimatedCircles from '../../components/D3/AnimatedCircles';

function D3() {
  return (
    <div class="main-wrapper">
      <main>
        <Container>
          <AnimatedCircles />
        </Container>
      </main>
    </div>
  );
}

export default D3;
