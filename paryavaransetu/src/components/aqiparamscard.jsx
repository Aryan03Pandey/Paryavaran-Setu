import React from "react";

function AQIParamsCard(props){
    return <div className="aqi-params-card">
        <p>{props.parameterName}</p>
        <h4>{props.parameterValue}</h4>
    </div>
}

export default AQIParamsCard;