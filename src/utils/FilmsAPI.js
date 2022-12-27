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
  console.log(response.data);
  return response.data;
};
const getMovieCreditsByID = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  console.log(response.data.cast);
  return response.data.cast;
};

export { getTrendingMovies, getMovieByID, getMovieCreditsByID };
