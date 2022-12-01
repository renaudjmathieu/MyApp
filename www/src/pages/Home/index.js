import React from "react";
import styles from './styles.module.css';
import '../styles.css';
import clsx from 'clsx';
import ElephantSvg from '../../img/elephant.svg';
import WebDevelopmentSvg from '../../img/web.svg';
import MachineLearningSvg from '../../img/ml.svg';
import BusinessIntelligenceSvg from '../../img/bi.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FeatureList = [
  {
    title: 'Web Development',
    Svg: WebDevelopmentSvg,
    text1: (
      <>
        I started my IT career as a web developer and I have been keeping at it on and off ever since.
      </>
    ),
    text2: (
      <>
        Nowadays, I mostly do React and I also have a strong interest in D3 and data viz on the web.
      </>
    ),
  },
  {
    title: 'Business Intelligence (BI)',
    Svg: BusinessIntelligenceSvg,
    text1: (
      <>
        I've been doing BI for a decade and I'm a bona fide expert in SQL and making reports at this point.
      </>
    ),
    text2: (
      <>
        I have strong data analytical and engineering skills and <a className="link" href="https://www.credly.com/users/renaudmathieu/badges?sort=-state_updated_at&page=1" target="_blank">I'm certified</a> in like all of the Microsoft BI tools.
      </>
    ),
  },
  {
    title: 'Machine Learning (ML)',
    Svg: MachineLearningSvg,
    text1: (
      <>
        I'm pretty good in Python and the data science stuff (Pandas, Scikit-learn, Beautiful Soup, etc.).
      </>
    ),
    text2: (
      <>
        Currently, I'm learning and 💛 all things Deep Learning (NLP, Computer Vision, GANs, etc.).
      </>
    ),
  },
];

function Feature({ Svg, title, text1, text2 }) {
  return (
    <Col lg={4} >
      <div className="text-center">
      <Svg className={clsx(styles.featureSvg, 'featureSvg')} role="img" />
      </div>
      <div className="text-center px-md-4">
        <h5>{title}</h5>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </Col>

  );
}

function Home() {
  return (
    <div class="main-wrapper">
      <header className="banner">
        <Container>
          <h1>Renaud Mathieu</h1>
          <ElephantSvg className={clsx(styles.bannerSvg, 'bannerSvg')} role="img" />
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
