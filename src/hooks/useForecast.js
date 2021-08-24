import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [hasForecast, setForecast] = useState(null);
  const [City, setCity] = useState(null);

  const getLocation = async (location) => {
    const { data } = await axios.get(`${REQUEST_URL}/search`, {
      params: { query: location },
    });
    if (!data || data.length === 0) {
      console.log("error");
      setError("No location is finded!");
      setLoading(false);
      return;
    }
    setCity(data[0].title);
    return data[0];
  };

  const getForeCastData = async (woeid) => {
    const { data } = await axios.get(`${REQUEST_URL}/${woeid}`);
    if (!data || data.length === 0) {
      console.log("error2");
      setError("Something went wrong");
      setLoading(false);
      return;
    }
    return data;
  };

  const submitRequest = async ({ location }) => {
    setLoading(true);
    setError(false);
    const city = await getLocation(location);
    console.log(city);
    if (!city?.woeid) return;
    const data = await getForeCastData(city.woeid);
    if (!data) return;
    setLoading(false);
    setForecast(data.consolidated_weather);
  };

  return { isError, isLoading, hasForecast, City, submitRequest };
};

export default useForecast;
