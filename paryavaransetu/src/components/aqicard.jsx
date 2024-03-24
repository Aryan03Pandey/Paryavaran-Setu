import React from "react";

function AQICard(props) {
  let circleStyle = {};
  let qualityStyle = {};

  if (props.value < 50) {
    circleStyle = { borderColor: "green" };
    qualityStyle = { backgroundColor: "green" };
  }
  else if(props.value < 100){
    circleStyle = { borderColor: "yellow" };
    qualityStyle = { backgroundColor: "yellow" };
  }
  else if(props.value < 150){
    circleStyle = { borderColor: "orange" };
    qualityStyle = { backgroundColor: "orange" };
  }
  else if(props.value > 150){
    circleStyle = { borderColor: "red" };
    qualityStyle = { backgroundColor: "red" };
  }

  return (
    <div className="aqi-card">
      <div className="left" style={circleStyle}>
        <p>AQI</p>
        <h1>{props.value}</h1>
        <p className="quality" style={qualityStyle}>{props.category}</p>
      </div>

      <div className="right">
        <h1>{props.cityName.charAt(0).toUpperCase() + props.cityName.slice(1)}</h1>
        <p>{new Date().toDateString()}</p>
      </div>
    </div>
  );
}

export default AQICard;
