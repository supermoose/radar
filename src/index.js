import React from "react";
import ReactDOM from "react-dom";
import { Radar } from "@nivo/radar";
import "./styles.css";

const data = [
  {
    taste: "fruity",
    chardonay: 82,
    carmenere: 64,
    syrah: 76
  },
  {
    taste: "bitter",
    chardonay: 30,
    carmenere: 83,
    syrah: 71
  },
  {
    taste: "heavy",
    chardonay: 63,
    carmenere: 45,
    syrah: 104
  },
  {
    taste: "strong",
    chardonay: 100,
    carmenere: 73,
    syrah: 73
  },
  {
    taste: "sunny",
    chardonay: 64,
    carmenere: 112,
    syrah: 72
  }
];

const theme = {
  axis: {
    ticks: {
      text: {
        fill: 'rgba(255, 255, 255, .35)'
      }
    },
  },
  grid: {
    line: {
      stroke: "rgba(255, 255, 255, .15)",
      strokeDasharray: "6 4"
    }
  },
  dots: {
    text: {
      fill: "#2d374d",
      fontSize: 12,
      fontWeight: 800
    }
  },
  tooltip: {
        container: {
            background: '#2d374d',
            color: 'inherit',
            boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
            fontFamily: "monospace"
        }
    }
};

const App = () => (
  <div className="App">
    <h3>Radar - dot label color</h3>
    <Radar
      width={500}
      height={500}
      margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
      data={data}
      indexBy="taste"
      keys={["chardonay", "carmenere"]}
      colors={["#ddcb38", "#2b70e2"]}
      theme={theme}
      dotSize={30}
      enableDotLabel={true}
      dotLabelYOffset={4}
      gridShape="linear"
    />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
