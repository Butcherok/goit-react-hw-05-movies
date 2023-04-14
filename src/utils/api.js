import axios from 'axios';

const API_KEY = 'fd0a5f8c566fdaa6a63aeafeb4fed4c5';
const BASE_URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = BASE_URL;

export const fetchMovies = async ({
  fetchParams,
  query = null,
  controller,
}) => {
  const response = await axios(fetchParams, {
    signal: controller.signal,
    params: { api_key: API_KEY, query },
  });
  return response.data;
};
