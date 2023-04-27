import React from "react"
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import WebDevelopmentSvg from './../../../img/web.svg'
import MachineLearningSvg from './../../../img/ml.svg'
import BusinessIntelligenceSvg from './../../../img/bi.svg'

import Waves from '../../Waves/Waves'

import "./Header.css"

const itemList = [
  {
    title: 'Web Development',
    Svg: WebDevelopmentSvg,
    text1: (
      <>
        I started my IT career as a web developer and I've been keeping at it on and off ever since.
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
        I've been doing BI and SQL for around a decade and produced dozens of data reports at this point.
      </>
    ),
    text2: (
      <>
        I have strong data analytical and engineering skills and <a className="link" href="https://www.credly.com/users/renaudmathieu/badges?sort=-state_updated_at&page=1" target="_blank">I'm certified</a> in most Microsoft BI tools.
      </>
    ),
  },
  {
    title: 'Machine Learning',
    Svg: MachineLearningSvg,
    text1: (
      <>
        I'm pretty good with Python's data science stuff (Pandas, Scikit-learn, TensorFlow, etc.).
      </>
    ),
    text2: (
      <>
        I also like learning about different Deep Learning architectures (RNNs, GANs, <a className="link" href="https://www.kaggle.com/code/renaudmathieu/transformer-from-scratch" target="_blank">Transformers</a>, etc.).
      </>
    ),
  },
];

function Item({ Svg, title, text1, text2 }) {
  return (
    <Grid xs={4} className="Header__content__text__item">
      <div className="Header__content__text__item__img">
        <Svg className="featureSvg" role="img" />
      </div>
      <div className="Header__content__text__item__desc">
        <h5>{title}</h5>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </Grid>
  );
}

const Header = () => {

  const nameBoxRef = React.useRef()

  const [nameBoxProperties, setNameBoxProperties] = React.useState({
    left: null,
    top: null,
    width: null,
    height: null,
  })

  const defineNameBoxProperties = () => {
    if (nameBoxRef.current) {
      setNameBoxProperties({
        left: nameBoxRef.current.offsetLeft,
        top: nameBoxRef.current.offsetTop,
        width: nameBoxRef.current.offsetWidth,
        height: nameBoxRef.current.offsetHeight,
      })
    }
  }

  const [windowResizing, setWindowResizing] = React.useState(false)

  React.useEffect(() => {
    defineNameBoxProperties()
  }, [])

  React.useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout)

      setWindowResizing(true)

      timeout = setTimeout(() => {
        setWindowResizing(false)
        defineNameBoxProperties()
      }, 500)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize);
  }, [])


  return (
    <>
      <div className="Header">
        <Waves nameBoxProperties={nameBoxProperties} />
        <Box sx={{ flexGrow: 1 }} className="Header__content">
          <div className="Header__content__title">
            <div className="Header__content__title__sub">Hi, I'm</div>
            <div className="Header__content__title__main">
              <span ref={nameBoxRef}>
                Renaud Mathieu
              </span>
            </div>
          </div>

          <Grid container spacing={2} className="Header__content__text">

            {itemList.map((props, idx) => (
              <Item key={idx} {...props} />
            ))}
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default Header
