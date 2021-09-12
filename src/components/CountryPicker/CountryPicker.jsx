import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

function CountryPicker({handlePickCountry}) {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const f = async () => {
      setCountryList(await fetchCountries());
    };
    f();
    console.log("countryList -> ", countryList);
  }, [setCountryList]);

  const countrySelectOptions = countryList.length
    ? countryList.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))
    : null;

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect default="" onChange={(event) => handlePickCountry(event.target.value)  }>
        <option key="global" value="">
          Global
        </option>
        {countrySelectOptions}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
