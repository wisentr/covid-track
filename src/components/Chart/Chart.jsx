import React, { useState, useEffect } from "react";
import { fetchHistoricalDataAll } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

function Chart({ data: { cases, recovered, deaths }, pickedCountry }) {
  //   const [state, setstate] = useState({});
  const [dailyData, setDailyData] = useState({});
  //   const [state, setstate] = useState({});
  useEffect(() => {
    const f = async () => {
      setDailyData(await fetchHistoricalDataAll());
    };
    f();
  }, []);


  const lineChart = dailyData?.cases ? (
    <Line
      data={{
        labels: Object.keys(dailyData.cases),
        datasets: [
          {
            data: Object.values(dailyData.cases),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: Object.values(dailyData.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = cases ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Dead"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255, 0.5)",
              "rgba(0,255,0, 0.5)",
              "rgba(255,0,0, 0.5)",
            ],
            data: [cases, recovered, deaths],
          },
        ],
      }}
      options={{
        plugins: {
          legend: { display: false },
          title: { display: true, text: `Current state in ${pickedCountry}` },
        },
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>
      {pickedCountry ? barChart : lineChart}
    </div>
  );
}

export default Chart;
