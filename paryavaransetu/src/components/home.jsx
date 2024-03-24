import React, { useState, useEffect } from "react";
import Hero from "./hero";
import SearchBar from "./searchbar";
import AQI from './aqi';
import WaterTable from "./waterTable";

function Home() {
  const [city, setCity] = useState("Delhi");
  const [category, setCategory] = useState("Healthy");
  const [parameters, setParameters] = useState({
    CO: 0,
    NO2: 0,
    Ozone: 0,
    PM10: 0,
    PM25: 0,
    SO2: 0,
  });
  const [aqivalue, setAqivalue] = useState(0);

  const URL = `https://api.ambeedata.com/latest/by-city?city=${city}`;

  async function aqiCall() {
    try {
      const data = await fetch(URL, {
        method: "GET",
        headers: {
          "x-api-key": "2cda2ae88ee8bc75f8dc5c269bf72c647c5c26e6f7681381fb853414c695751f",
          "content-type": "application/json",
        },
      });
      const res = await data.json();
      return res;
    } catch (error) {
      console.error("Error fetching AQI data:", error);
      return null;
    }
  }

  const handleSearch = async (term) => {
    const object = await aqiCall();
    if (object) {
      const array = object.stations;
      const values = array[0];
      setCity(term);
      setParameters({
        CO: values.CO,
        NO2: values.NO2,
        Ozone: values.OZONE,
        PM10: values.PM10,
        PM25: values.PM25,
        SO2: values.SO2,
      });
      setAqivalue(values.AQI);
      setCategory(values.aqiInfo.category);
      console.log(parameters);
    }
  };

  useEffect(() => {
    handleSearch(city); // Call the API initially with the default city
  }, []);

  return (
    <section>
      <Hero />
      <SearchBar onSubmit={handleSearch} />

      <AQI cityName={city} parameters={parameters} aqivalue={aqivalue} category = {category}/>

      <WaterTable />      

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}

export default Home;
