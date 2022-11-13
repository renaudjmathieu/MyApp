import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Web Development',
    Svg: require('@site/static/img/undraw_developer_activity_re_39tg.svg').default,
    description: (
      <>
        Web development is the work involved in developing a website for the Internet or an intranet.
      </>
    ),
  },
  {
    title: 'Machine Learning',
    Svg: require('@site/static/img/undraw_chat_bot_re_e2gj.svg').default,
    description: (
      <>
        Machine learning (ML) is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks.
      </>
    ),
  },
  {
    title: 'Business Intelligence',
    Svg: require('@site/static/img/undraw_all_the_data_re_hh4w.svg').default,
    description: (
      <>
        Business intelligence comprises the strategies and technologies used by enterprises for the data analysis and management of business information.
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
