import React from "react";
import AQICard from "./aqicard";
import AQIParamsCard from "./aqiparamscard";

function AQI({ cityName, parameters, aqivalue, category }) {

  // Create an array of parameter names from the object
  const parameterNames = Object.keys(parameters);

  return (
    <div className="aqi">
      <AQICard cityName={cityName} value = {aqivalue} category = {category}/>
      <div className="params">
        {parameterNames.map((paramName, index) => (
          <AQIParamsCard key={index} parameterName={paramName} parameterValue={parameters[paramName]} />
        ))}
      </div>
    </div>
  );
}

export default AQI;
