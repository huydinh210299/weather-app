import React from "react";
import numberHelper from "../../helpers/numberHelper";
import dayHelper from "../../helpers/dayHelper";
import "./ForeCastItem.css";

const imgUrlBase = "https://www.metaweather.com/static/img/weather/";

const ForeCastItem = ({ data }) => {
  const { roundNumber } = numberHelper();
  const { getCurrentDay } = dayHelper();
  return (
    <div className="forcast-item">
      <img width="30" src={`${imgUrlBase}${data.weather_state_abbr}.svg`}></img>
      <div>{roundNumber(data.the_temp)} °C</div>
      <div>{getCurrentDay(data.applicable_date)}</div>
    </div>
  );
};

export default ForeCastItem;
