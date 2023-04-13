import axios from 'axios';

const API_KEY = 'fd0a5f8c566fdaa6a63aeafeb4fed4c5';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
axios.defaults.baseURL = BASE_URL;

export const fetchMovies = async (controller) => {
  const response = await axios({
    signal: controller.signal,
    params: {
      api_key: API_KEY,
      query: 'batman',
    },
  });
  console.log('object', response);
  return response.data;
};
