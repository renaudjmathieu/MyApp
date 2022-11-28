import React from "react";
import styles from './styles.module.css';
import '../styles.css';
import Container from 'react-bootstrap/Container';
import Svg from '../../components/D3/Svg';

function D3() {
  return (
    <div class="main-wrapper">
      <main>
        <Container>
          <Svg />
        </Container>
      </main>
    </div>
  );
}

export default D3;
