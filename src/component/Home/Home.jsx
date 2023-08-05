import React from "react"
import Header from "./Header/Header"
import Projects from "./../Projects/Projects"

const Home = () => {

  const [hue, setHue] = React.useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = React.useState(100)
  const [lightness, setLightness] = React.useState(0)
  const [alpha, setAlpha] = React.useState(1)

  React.useEffect(() => {
    const listener = () => {
      if (window.pageYOffset < 10) {
        setHue(Math.floor(Math.random() * 360))
      }
      setLightness(Math.round(window.pageYOffset / 2) <= 50 ? Math.round(window.pageYOffset / 2) : 50)
      setAlpha(Math.round(window.pageYOffset) <= 100 ? Math.round(window.pageYOffset) : 100)
    }
    document.addEventListener('scroll', listener);
    return () => {
      document.removeEventListener('scroll', listener)
    }

  }, [])

  return (
    <>
      <div className="Home">
        <Header
          hue={hue}
          saturation={saturation}
          lightness={lightness}
          alpha={alpha}
        />
        <Projects
          hue={hue}
          saturation={saturation}
          lightness={lightness}
          alpha={alpha}
        />
      </div>
    </>
  )
}

export default Home