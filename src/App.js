import "./App.css";
import useForecast from "./hooks/useForecast";
import Forecast from "./component/forecast/Forecast";
import SearchForm from "./component/form/SearchForm";
import { Spin } from "antd";

function App() {
  const { isError, isLoading, hasForecast, City, submitRequest } =
    useForecast();
  return (
    <div className="App">
      <div style={{ fontSize: "30px", textAlign: "center", color: "white" }}>
        Weather <b>Forecast</b>
      </div>
      {!hasForecast && (
        <div className="box">
          <SearchForm handleRequest={submitRequest}></SearchForm>
          {isLoading && <Spin style={{ width: "100%", marginTop: "10px" }} />}
        </div>
      )}

      {hasForecast && (
        <div className="box forecast">
          <Forecast forecast={hasForecast} city={City}></Forecast>
        </div>
      )}
    </div>
  );
}

export default App;
