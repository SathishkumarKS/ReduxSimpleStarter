import axios from 'axios';

const API_KEY = '42dc563c9eaf27a8eb9e268d3a7e9aff';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const URL = `${BASE_URL}&q=${city},in`;
  const request = axios.get(URL);
  return {type: FETCH_WEATHER, payload: request};
}
