import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import covidImage from "./images/volodymyr-hryshchenko-XLNo-18vqDg-unsplash.jpg";

function App() {
  const [data, setdata] = useState({});
  const [pickedCountry, setPickedCountry] = useState("");
  useEffect(() => {
    const f = async () => {
      const data = await fetchData();
      console.log("data -> ", data);
      setdata(data);
    };
    f();
  }, []);
  console.log("pickedCountry -> ", pickedCountry);

  const handlePickCountry = async (country) => {
    const fetchedData = await fetchData(country);
    console.log("[country,data]", "[ ", country, fetchedData, " ]");
    setPickedCountry(country);
    setdata(fetchedData);
  };
  return (
    <div className={styles.container}>
      <img src={covidImage} alt="covid19" className={styles.image} />
      <Cards data={data} />
      <CountryPicker handlePickCountry={handlePickCountry} />
      <Chart data={data} pickedCountry={pickedCountry} />
    </div>
  );
}

export default App;
