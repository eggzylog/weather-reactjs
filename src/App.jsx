import { useState } from 'react';
import axios from 'axios';
import { CURRENT_WEATHER_API_KEY, CURRENT_WEATHER_URL } from './utils/api';
import CurrentWeather from './components/CurrentWeather';
import Search from './components/Search';
import Forecast from './components/Forecast';
import Footer from './components/Footer';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const onSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    try {
      const currentWeatherFetched = await axios.get(
        `${CURRENT_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
      );
      setCurrentWeather({
        ...currentWeatherFetched.data,
        cityName: searchData.label,
      });

      const forecastWeatherFetched = await axios.get(
        `${CURRENT_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
      );
      setForecast({
        ...forecastWeatherFetched.data,
        cityName: searchData.label,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-4 p-4">
      <h1 className="text-center text-4xl my-4">Weather App</h1>
      <Search onSearchChange={onSearchChange} />
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      {forecast && <Forecast forecast={forecast} />}
      {currentWeather ? (
        <Footer />
      ) : (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 ">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
