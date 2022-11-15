import React from "react";
import clsx from 'clsx';
import styles from './styles.module.css';
import { ReactComponent as ElephantSvg } from '../../img/elephant.svg';
import { ReactComponent as WebDevelopmentSvg } from '../../img/undraw_developer_activity_ec008c.svg';
import { ReactComponent as MachineLearningSvg } from '../../img/undraw_chat_bot_ec008c.svg';
import { ReactComponent as BusinessIntelligenceSvg } from '../../img/undraw_all_the_data_ec008c.svg';

const FeatureList = [
  {
    title: 'Web Development',
    Svg: WebDevelopmentSvg,
    description: (
      <>
        Web development is the work involved in developing and deploying a website or web app.
      </>
    ),
  },
  {
    title: 'Machine Learning (ML)',
    Svg: MachineLearningSvg,
    description: (
      <>
        ML is a subset of artificial intelligence devoted to understanding and building methods that learn.
      </>
    ),
  },
  {
    title: 'Business Intelligence (BI)',
    Svg: BusinessIntelligenceSvg,
    description: (
      <>
        BI comprises the strategies and technologies used for the data analysis of business information.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div class="container">
          <h1 class="hero__title">Renaud Mathieu</h1>
          <ElephantSvg className={styles.heroSvg} role="img" />
        </div>
      </header>

      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
