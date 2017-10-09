import axios from 'axios';

const API_KEY='711a3b7adb441bbfb920219ffb2be383';

const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER='FETCH_WAETHER';

export function fetchWeather(city)
{
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.request(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    }
    
}