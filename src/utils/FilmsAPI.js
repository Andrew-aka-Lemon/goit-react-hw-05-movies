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

// const getMovieByID = async id => {};

export { getTrendingMovies };

// adult: false;
// backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg';
// genre_ids: (4)[(878, 12, 14, 28)];
// id: 76600;
// media_type: 'movie';
// original_language: 'en';
// original_title: 'Avatar: The Way of Water';
// overview: 'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.';
// popularity: 11276.345;
// poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg';
// release_date: '2022-12-14';
// title: 'Avatar: The Way of Water';
// video: false;
// vote_average: 8.05;
// vote_count: 1279;

// https://api.themoviedb.org/3/trending/movies/week?api_key=3cfddd5e97fd8d1a3fdf959358de6593
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
