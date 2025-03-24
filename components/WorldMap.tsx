"use client"

import { useState, useRef, useLayoutEffect } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import ReactDOM from "react-dom"

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const markers = [
  { name: "New York", coordinates: [-74.006, 40.7128], value: 8954 },
  { name: "London", coordinates: [-0.1276, 51.5074], value: 7439 },
  { name: "Tokyo", coordinates: [139.6917, 35.6895], value: 9314 },
  { name: "Shanghai", coordinates: [121.4737, 31.2304], value: 8147 },
  { name: "Singapore", coordinates: [103.8198, 1.3521], value: 6891 },
]

const WorldMap = () => {
  const [tooltipContent, setTooltipContent] = useState("")
  const tooltipRef = useRef(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)

  useLayoutEffect(() => {
    const { height } = tooltipRef.current.getBoundingClientRect()
    setTooltipHeight(height)
  }, [tooltipContent])

  const tooltipX = 0
  const tooltipY = 0
  const targetRect = { left: 0, top: 0, bottom: 0 } // Placeholder, needs actual values

  return (
    <>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />)
          }
        </Geographies>
        {markers.map(({ name, coordinates, value }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              onMouseEnter={() => setTooltipContent(`${name}: ${value}`)}
              onMouseLeave={() => setTooltipContent("")}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
      {tooltipContent &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            style={{
              position: "absolute",
              left: tooltipX,
              top: tooltipY,
              backgroundColor: "white",
              padding: "10px",
              border: "1px solid black",
              zIndex: 1000,
            }}
          >
            {tooltipContent}
          </div>,
          document.body,
        )}
    </>
  )
}

export default WorldMap

