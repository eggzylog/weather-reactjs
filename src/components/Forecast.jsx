import { WEEK_DAYS } from '../utils/constants';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const Forecast = ({ forecast }) => {
  const dayInAWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <Accordion
        allowZeroExpanded
        className="w-full md:w-[75%] lg:w-[50%] mx-auto"
      >
        <span className="text-2xl font-semibold">Daily</span>
        {forecast.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="bg-gray-200 rounded-2xl h-12 m-1 p-5 flex items-center cursor-pointer text-lg">
                  <img
                    src={`weather-icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="w-10"
                  />
                  <span className="text-gray-900 flex flex-1 m-4">
                    {forecastDays[idx]}
                  </span>
                  <span className="flex flex-1 m-4 text-sm md:text-base">
                    {item.weather[0].description}
                  </span>
                  <span className="text-gray-600 hidden md:block">
                    {Math.round(item.main.temp_min)} °C /{' '}
                    {Math.round(item.main.temp_max)} °C
                  </span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 py-1 px-4 gap-x-4">
                <div className="flex items-center h-8 justify-between">
                  <span className="text-gray-700">Pressure</span>
                  <span>{item.main.pressure} hPa</span>
                </div>
                <div className="flex items-center h-8 justify-between">
                  <span className="text-gray-700">Humidity</span>
                  <span>{item.main.humidity}%</span>
                </div>
                <div className="flex items-center h-8 justify-between">
                  <span className="text-gray-700">Clouds</span>
                  <span>{item.clouds.all}</span>
                </div>
                <div className="flex items-center h-8 justify-between">
                  <span className="text-gray-700">Wind Speed</span>
                  <span>{item.wind.speed} m/s</span>
                </div>
                <div className="flex items-center h-8 justify-between">
                  <span className="text-gray-700">Sea Level</span>
                  <span>{item.main.sea_level} m</span>
                </div>
                <div className="flex items-center h-8 justify-between">
                  <span className="text-gray-700">Feels like</span>
                  <span>{Math.round(item.main.feels_like)} °C</span>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
