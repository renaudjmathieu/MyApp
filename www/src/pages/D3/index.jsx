import React from "react";
import * as d3 from "d3";
import styles from './styles.module.css';
import '../styles.css';
import Container from 'react-bootstrap/Container';
import Chart from '../../components/D3/Chart';
import Circle from '../../components/D3/Circle';
import Circles from '../../components/D3/Circles';
import AnimatedCircles from '../../components/D3/AnimatedCircles';
import data from './data/my_weather_data.json';

function D3() {
  return (
    <div class="main-wrapper">
      <main>
        <Container>
          <Chart Data={data} />
        </Container>
      </main>
    </div>
  );
}

export default D3;
