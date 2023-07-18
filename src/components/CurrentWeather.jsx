const CurrentWeather = ({ currentWeather }) => {
  const { cityName, weather, main, wind } = currentWeather;
  const { description, icon } = weather[0];
  const { temp, feels_like, humidity, pressure } = main;

  return (
    <div className="w-full sm:w-96 rounded-md shadow-lg shadow-blue-500/50 text-white bg-slate-600 my-5 mx-auto p-5 pt-0">
      {/* SUMMARY */}
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-lg m-0">{cityName}</p>
          <p className="text-base m-0">{description}</p>
        </div>
        <img src={`weather-icons/${icon}.png`} alt="weather" className="w-24" />
      </div>

      {/* DETAILS */}
      <div className="grid grid-cols-6">
        <p className="col-span-3 font-bold text-5xl md:text-6xl w-auto tracking-tighter my-2">
          {Math.round(temp)}°C
        </p>

        <div className="col-span-3">
          <span className="font-bold underline">Details</span>
          <div className="w-full flex justify-between text-sm md:text-base">
            <span>Feels like</span>
            <span>{Math.round(feels_like)}°C</span>
          </div>
          <div className="w-full flex justify-between text-sm md:text-base">
            <span>Wind</span>
            <span>{wind.speed} m/s</span>
          </div>
          <div className="w-full flex justify-between text-sm md:text-base">
            <span>Humidity</span>
            <span>{humidity}%</span>
          </div>
          <div className="w-full flex justify-between text-sm md:text-base">
            <span>Pressure</span>
            <span>{pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
