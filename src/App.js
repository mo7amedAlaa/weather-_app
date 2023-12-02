import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [data, setData] = useState(null);
  const [cityName, setCityName] = useState(' ');
  const [loading, setLoading] = useState(false);

  const getWeater = async () => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=1449c5a4b0a866c78619a165e1e1b9dc`
      )
      .then((res) => {
        setData(res.data);
        console.log(data);
        setLoading(false);
      })
      .catch(() => {
        setData(null);
      });
  };

  return (
    <div className="App flex justify-center items-center ">
      <div className="container bg-opacity-50  bg-neutral-600  font-mono uppercase      bg-blend-overlay   o rounded-xl p-5 w-2/4 h-3/4 text-center">
        <h1 className="text-center text-6xl text-white font-extrabold mb-6  ">
          Weather App
        </h1>
        <div className=" mb-5">
          <input
            type="text"
            placeholder="Enter your city name"
            className="p-1.5 rounded-lg  text-lg font-semibold me-4"
            onChange={(e) => setCityName(e.target.value)}
          />
          <button
            className="px-3 py-1.5 uppercase rounded-lg bg-emerald-400 text-lg font-semibold  "
            onClick={() => getWeater()}
          >
            Get weather
          </button>
        </div>
        {data ? (
          <div className=" flex-col  justify-between  content-between items-center  h-60 mt-10   text-center text-lg text-white ">
            <div className="col ">
              <label htmlFor="temp">Temp: </label>
              {loading ? 'loading' : <span id="temp">{data.main.temp} °C</span>}
            </div>
            <div className="col">
              <label htmlFor="temp">humidity: </label>
              {loading ? (
                'loading'
              ) : (
                <span id="temp">{data.main.humidity} g.m-3</span>
              )}
            </div>
            <div className="col   ">
              <label htmlFor="temp">pressure: </label>
              {loading ? (
                'loading'
              ) : (
                <span id="temp">
                  {data.main.pressure} m<sup>2</sup>
                </span>
              )}
            </div>
          </div>
        ) : (
          <h1 className="text-red-600 text-lg  ">
            Sure you Enter Correct Country
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
