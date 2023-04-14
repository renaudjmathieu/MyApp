import React from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import WebDevelopmentSvg from '../../../img/web.svg';
import MachineLearningSvg from '../../../img/ml.svg';
import BusinessIntelligenceSvg from '../../../img/bi.svg';

import "./HomeHeader.css"

const itemList = [
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
        Currently, I'm learning and 💛 all things Deep Learning (RNNs, GANs, Transformers, etc.).
      </>
    ),
  },
];

function Item({ Svg, title, text1, text2 }) {
  return (
    <Grid xs={4} className="HomeHeader__content__text__item">
      <div className="HomeHeader__content__text__item__img">
        <Svg className="featureSvg" role="img" />
      </div>
      <div className="HomeHeader__content__text__item__desc">
        <h5>{title}</h5>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </Grid>
  );
}

const HomeHeader = () => (
  <>
    <div className="HomeHeader">

      <Box sx={{ flexGrow: 1 }} className="HomeHeader__content">
        <Grid container spacing={2} className="HomeHeader__content__text">
          <Grid xs={12}>
            <div className="HomeHeader__content__text__title">
              <span>Hi, I'm</span>
              <h1>Renaud Mathieu</h1>
            </div>

          </Grid>
          {itemList.map((props, idx) => (
            <Item key={idx} {...props} />
          ))}
        </Grid>
      </Box>
    </div>
  </>
)

export default HomeHeader