import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["x", "Car", "SUV"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];

export const options = {
  hAxis: {
    title: "Time",
  },
  vAxis: {
    title: "Popularity",
  },
  series: {
    1: { curveType: "function" },
  },
};

export default function Linechart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}
