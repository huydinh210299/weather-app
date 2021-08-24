import React, { Fragment } from "react";
import { Col, Row } from "antd";
import ForeCastItem from "../forcast_item/ForeCastItem";
import dayHelper from "../../helpers/dayHelper";
import numberHelper from "../../helpers/numberHelper";
import "./Forecast.css";

const Forecast = ({ forecast, city }) => {
  const { getCurrentDay, getCurrentDate } = dayHelper();
  const { roundNumber } = numberHelper();
  console.log(forecast);
  return (
    <Row gutter={16} style={{ height: "100%" }}>
      <Col
        className="gutter-row weather-image current-day dflex-column-between"
        span="8"
      >
        <div>
          <div className="font-25-bold">
            {getCurrentDay(forecast[0].applicable_date)}
          </div>
          <div>! {city}</div>
          <div>{getCurrentDate(forecast[0].applicable_date)}</div>
        </div>
        <div>
          <div className="font-25-bold">
            {roundNumber(forecast[0].the_temp)}°C
          </div>
          <div>{forecast[0].weather_state_name}</div>
        </div>
      </Col>
      <Col
        className="gutter-row dflex-column-between"
        span="16"
        style={{ paddingRight: "15px" }}
      >
        <div>
          <span className="dflex-row-between">
            <div className="font-13-bold">predictability</div>
            <div>{forecast[0].predictability} %</div>
          </span>
          <span className="dflex-row-between">
            <div className="font-13-bold">humidity</div>
            <div>{forecast[0].humidity} %</div>
          </span>
          <span className="dflex-row-between">
            <div className="font-13-bold">wind</div>
            <div>{roundNumber(forecast[0].wind_speed)} km/h</div>
          </span>
          <span className="dflex-row-between">
            <div className="font-13-bold">air pressure</div>
            <div>{forecast[0].air_pressure} mb</div>
          </span>
          <span className="dflex-row-between">
            <div className="font-13-bold">max temp</div>
            <div>{roundNumber(forecast[0].max_temp)} °C</div>
          </span>
          <span className="dflex-row-between">
            <div className="font-13-bold">min temp</div>
            <div>{roundNumber(forecast[0].min_temp)} °C</div>
          </span>
        </div>
        <div className="dflex-row-between forecast-wrapper">
          {forecast.map(
            (data, index) =>
              index != 0 && (
                <ForeCastItem data={data} key={index}></ForeCastItem>
              )
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Forecast;
