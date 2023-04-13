import React from "react"
import WebDevelopmentSvg from '../../../img/web.svg';
import MachineLearningSvg from '../../../img/ml.svg';
import BusinessIntelligenceSvg from '../../../img/bi.svg';

import "./HomeHeader.css"

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
    <div>
      <div className="text-center">
        <Svg className="featureSvg" role="img" />
      </div>
      <div className="text-center px-md-4">
        <h5>{title}</h5>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>

  );
}

const HomeHeader = () => (
  <>
    <div>
      <div>
        <div>
          <div>Hi, I’m</div>
          <h1>Renaud Mathieu</h1>
          <div>
            <section className="featureSvg">
              <div>
                {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}

              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default HomeHeader