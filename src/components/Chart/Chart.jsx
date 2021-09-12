import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyUpdate } from "../../api";

import styles from "./Chart.module.css";

function Chart({ data: { confirmed, recovered, deaths }, pickedCountry }) {
  const [dailyData, setDailyData] = useState([]);
  //   const [state, setstate] = useState({});
  useEffect(() => {
    const f = async () => {
      setDailyData(await fetchDailyUpdate());
    };
    f();
  }, []);

  useEffect(() => {
    console.log("dailyData -> ", dailyData);
  }, [dailyData]);

  const lineChart = dailyData?.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
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
            data: [confirmed.value, recovered.value, deaths.value],
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
