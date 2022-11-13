import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Web Development',
    Svg: require('@site/static/img/undraw_developer_activity_re_39tg.svg').default,
    description: (
      <>
        Web development is the work involved in developing and deploying a website or web app.
      </>
    ),
  },
  {
    title: 'Machine Learning (ML)',
    Svg: require('@site/static/img/undraw_chat_bot_re_e2gj.svg').default,
    description: (
      <>
        ML is a subset of artificial intelligence (AI) devoted to understanding and building methods that learn.
      </>
    ),
  },
  {
    title: 'Business Intelligence (BI)',
    Svg: require('@site/static/img/undraw_all_the_data_re_hh4w.svg').default,
    description: (
      <>
        BI comprises the strategies and technologies used for the data analysis of business information.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
