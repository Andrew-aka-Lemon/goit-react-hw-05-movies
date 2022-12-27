import axios from 'axios';

const AUTH_TOKEN = '3cfddd5e97fd8d1a3fdf959358de6593';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: AUTH_TOKEN,
};

const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/week');
  return response.data;
};

const getMovieByID = async id => {
  const response = await axios.get(`/movie/${id}`);

  return response.data;
};
const getMovieCreditsByID = async id => {
  const response = await axios.get(`/movie/${id}/credits`);

  return response.data.cast;
};

const getMovieReviewsByID = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
};

export {
  getTrendingMovies,
  getMovieByID,
  getMovieCreditsByID,
  getMovieReviewsByID,
};
