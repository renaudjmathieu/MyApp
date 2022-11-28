import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom/client";
import useInterval from 'use-interval'
import { useSpring, animated } from 'react-spring'
import * as d3 from "d3";

function generateCircles() {
  let circles = [];
  let numItems = 5;

  for(let i=0; i<numItems; i++) {
    circles.push(1);
  }

  return circles;
}

const AnimatedCircles = () => {
  const [visibleCircles, setVisibleCircles] = useState(
    generateCircles()
  )
  const ref = useRef()

  useInterval(() => {
    setVisibleCircles(generateCircles())
  }, 2000)

  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.selectAll("circle")
      .data(visibleCircles, d => d)
      .join(
        enter => (
          enter.append("circle")
              .attr("cx", d => d * 15 + 10)
              .attr("cy", 10)
              .attr("r", 0)
              .attr("fill", "cornflowerblue")
            .call(enter => (
              enter.transition().duration(1200)
                .attr("cy", 10)
                .attr("r", 6)
                .style("opacity", 1)
            ))
        ),
        update => (
          update.attr("fill", "lightgrey")
        ),
        exit => (
          exit.attr("fill", "tomato")
            .call(exit => (
              exit.transition().duration(1200)
                .attr("r", 0)
                .style("opacity", 0)
                .remove()
            ))
        ),
      )
  }, [visibleCircles])

  return (
    <svg
      viewBox="0 0 100 20"
      ref={ref}
    />
  )
}

export default AnimatedCircles