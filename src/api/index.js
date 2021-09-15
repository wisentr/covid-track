import axios from "axios";

const url = "https://disease.sh/v3/covid-19";
const urlHistorical = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  } else {
    changeableUrl = `${url}/all`;
  }
  try {
    const { data } = await axios.get(changeableUrl);
    const {
      updated,
      cases,
      todayCases,
      recovered,
      todayRecovered,
      deaths,
      todayDeaths,
    } = data;
    console.log("raw response from fetchData() -> ", data);
    console.log(
      `cases: ${cases}, todayCases: ${todayCases}, recovered: ${recovered}, todayRecovered: ${todayRecovered} deaths :${deaths}, todayDeaths: ${todayDeaths} updated: ${updated}`
    );
    return {
      updated,
      cases,
      todayCases,
      recovered,
      todayRecovered,
      deaths,
      todayDeaths,
    };
  } catch (error) {
    console.error("Something wrong!", error);
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    console.log("countries from api -> ", data);
    return data.map((c) => c?.country);
  } catch (error) {
    console.error("Something wrong!", error);
  }
};

export const fetchHistoricalDataAll = async () => {
  try {
    const { data } = await axios.get(urlHistorical);
    console.log("historical data -> ", data);
    return data;
  } catch (error) {
    console.error("Something wrong!", error);
  }
};
