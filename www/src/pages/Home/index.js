import React from "react";
import styles from './styles.module.css';
import clsx from 'clsx';
import ElephantSvg from '../../img/elephant.svg';
import WebDevelopmentSvg from '../../img/undraw_developer_activity_ec008c.svg';
import MachineLearningSvg from '../../img/undraw_chat_bot_ec008c.svg';
import BusinessIntelligenceSvg from '../../img/undraw_all_the_data_ec008c.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FeatureList = [
  {
    title: 'Web Development',
    Svg: WebDevelopmentSvg,
    text: (
      <>
        Web development is the work involved in developing and deploying a website or web app.
      </>
    ),
  },
  {
    title: 'Machine Learning (ML)',
    Svg: MachineLearningSvg,
    text: (
      <>
        ML is a subset of artificial intelligence devoted to understanding and building methods that learn.
      </>
    ),
  },
  {
    title: 'Business Intelligence (BI)',
    Svg: BusinessIntelligenceSvg,
    text: (
      <>
        BI comprises the strategies and technologies used for the data analysis of business information.
      </>
    ),
  },
];

function Feature({ Svg, title, text }) {
  return (

    <Col lg={4} >
      <div className="text-center">
      <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text-center px-md-4">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>

    </Col>

  );
}

function Home() {
  return (
    <div class="main-wrapper">
      <header className={styles.banner}>
        <Container>
          <h1 class="hero__title">Renaud Mathieu</h1>
          <ElephantSvg className={styles.heroSvg} role="img" />
        </Container>
      </header>
      <main>
        <Container>
          <section className={styles.features}>
            <Row>
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}

            </Row>
          </section>
        </Container>
      </main>
    </div>
  );
}

export default Home;
