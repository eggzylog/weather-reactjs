import axios from 'axios';

export const geoOptions = async (inputValue) => {
  const geoApiOptions = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: {
      minPopulation: '1000000',
      namePrefix: inputValue,
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(geoApiOptions);

    const cities = response.data.data;

    const options = cities.map((city) => ({
      value: `${city.latitude} ${city.longitude}`,
      label: `${city.name}, ${city.countryCode}`,
    }));

    return { options };
  } catch (error) {
    console.error(error);
  }
};

export const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5';
export const CURRENT_WEATHER_API_KEY = import.meta.env.VITE_CURRENT_WEATHER_API_KEY;
