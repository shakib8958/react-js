import axios from 'axios';


const URL = "C:\Users\Dell\OneDrive\Desktop\react js\weatherapp\public\image\istockphoto-531889697-612x612.jpg";
const API_KEY = 'YOUR_API_KEY';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;

}
export default fetchWeather;
