import React from "react"
import * as d3 from "d3"

import "./Waves.css"

const Waves = ({ nameBoxProperties }) => {
  const ref = React.useRef()

  const height = nameBoxProperties.top + nameBoxProperties.height
  const width = window.innerWidth

  const limit1 = (nameBoxProperties.left + (nameBoxProperties.width / 2)) / width
  const limit2 = (nameBoxProperties.left + nameBoxProperties.width) / width

  const pointCount = 15
  const lineCount = 1

  const xScale = d3.scaleLinear()
    .domain([0, pointCount - 1])
    .range([0, width])

  const yScale = d3.scaleLinear()
    .domain([0, 50])
    .range([0, height])

  const prevData = d3.range(pointCount).map((i) => {

    //Wave property : Stating point
    let value = 20
    if (i < (pointCount * limit1)) {
      value = 0
    }
    else if (i < (pointCount * limit2)) {
      value = 10
    }

    return value + Math.random() * 10
  });

  const data = d3.range(lineCount).map((i) => {
    if (i == 0) {
      return prevData
    } else {
      const next_data = prevData.map((v, k, e) => {
        return v + Math.random() * 2
      });

      prevData = next_data
      return next_data
    }
  });
  const [lines, setLines] = React.useState(data)

  const line = d3.area()
    .x(function (d, i) {
      return xScale(i)
    })
    .y(function (d, i) {
      return yScale(d)
    })
    .y0(function (d, i) {
      return yScale(yScale.domain()[0])
    })
    .y1(function (d, i) {
      return yScale(d)
    });

  let vector = d3.range(lineCount).map((i) => {
    return d3.range(pointCount).map((j) => {

      //Wave property : Speed
      let value = 1
      if (j < (pointCount * limit1)) {
        value = 0.3
      }
      else if (j < (pointCount * limit2)) {
        value = 0.4
      }

      return lines[i][j] < value ? 1 * value : -1 * value
    })
  })

  React.useEffect(() => {
    if (ref.current) {
      const svgElement = d3.select(ref.current)

      svgElement.selectAll("path").remove()

      const path = svgElement.append('g')
        .attr('class', 'Waves__line')
        .selectAll("path")
        .data(d3.range(0, lineCount))
        .enter()
        .append('path')
        .datum(data[0])
        .attr("d", line.curve(d3.curveBasis))

      const interval = setInterval(() => {

        const path = svgElement
          .selectAll("path")

        path.each(function (d, i) {
          data[i] = data[i].map((v, k) => {
            if (k == 0 || k == pointCount - 1) {
              return v
            }
            else {

              //Wave property : Height
              let p1 = 45
              let p2 = 0.9
              if (k < (pointCount * limit1)) {
                p1 = 15
                p2 = 0.3
              }
              else if (k < (pointCount * limit2)) {
                p1 = 20
                p2 = 0.4
              }
              if (vector[i][k] > 0 && v > p1) {
                vector[i][k] = -1 * p2
              }
              if (vector[i][k] < 0 && v < 10) {
                vector[i][k] = 1 * p2
              }
              return v + 1 * vector[i][k]
            }
          })

          d3.select(this)
            .datum(data[i])
            .transition(
              d3.transition()
                .duration(500)
                .ease(d3.easeSin))
            .attr("d", line.curve(d3.curveBasis))
        })
      }, 100)
      return () => clearInterval(interval)
    }
  }, [nameBoxProperties])


  return (
    <div className="Waves" >
      <svg ref={ref}
        height={height}
        width={width}
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop style={{ stopColor: "#000", stopOpacity: 0.2 }} offset={0} />
            <stop style={{ stopColor: "#000", stopOpacity: 0.3 }} offset={limit1} />
            <stop style={{ stopColor: "#000", stopOpacity: 0.6 }} offset={limit2} />
            <stop style={{ stopColor: "#000", stopOpacity: 1 }} offset={1} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Waves