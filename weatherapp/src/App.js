import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";
import './App.css';

function App() {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "C:\Users\Dell\OneDrive\Desktop\project 's image\DELHI-WEATHER.jpg=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      //setData(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }


  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">
            <img className="weathorIcon"
              src="C:\Users\Dell\OneDrive\Desktop\project 's image\DELHI-WEATHER.jpg"/>

            <h5 className="weathorCity">
              {data?.name}
            </h5>
            <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
          </div>
        </div>
      }

    </div>
  );
}

export default App;