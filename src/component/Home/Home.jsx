import React from "react"
import HomeHeader from "./HomeHeader/HomeHeader"
import Projects from "./../Projects/Projects"

const Home = () => (
  <>
      <div className="Home">
        <HomeHeader />
        <div className="Home__content">
          <Projects />
        </div>
      </div>
  </>
)

export default Home