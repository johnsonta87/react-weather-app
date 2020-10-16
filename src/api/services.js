import API from './api'

const AppID = 'ebd2937a3a65fe1b45083ebf5e46b7e3';

export const fetchCurrentWeather = async (city) => {
  try {
    const data = await API.get(`weather?q=${city}&appid=${AppID}`);
    return data;
  }
  catch (e) {
    console.log('We have the error in services', e);
  }
}
