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
  console.log(response.data.results);
  return response.data.results;
};

export {
  getTrendingMovies,
  getMovieByID,
  getMovieCreditsByID,
  getMovieReviewsByID,
};

// author
// :
// "CinemaSerf"
// author_details
// :
// {name: 'CinemaSerf', username: 'Geronimo1967', avatar_path: '/1kks3YnVkpyQxzw36CObFPvhL5f.jpg', rating: 7}
// content
// :
// "Well we ought not to have expected \"Jake\" (Sam Worthington) and \"Neytiri\" (Zoe Saldana) to have let the grass grow during the intervening years since we were first introduced to the idyllic world of \"Pandora\". Now with four children and their human friend \"Spider\", they are living life to the full. Until, that is, one night they see a new star in the sky. Star? Well, no - it's the ships announcing the return of the human beings, this time even more bent on the conquest of their planet now that the Earth is finally on it's knees. Armed to the hilt with the latest technology and weaponry, and commanded by the essence of the departed \"Col. Quaritch\" - who also now leads a squad of Na'vi-esque avatars of his own - things look ominous for the \"Sully\" family. Realising that they are front and centre for their persecutors, they relocate to (saddle themselves on) a remote, water-based community where they hope, rather unrealistically, to be able to sit it out... This is undoubtedly a beautiful piece of cinema to watch. 3D and IMAX with a classily crafted score from Simon Franglen and a message that trumpets the cruciality of the symbiotic relationships between all creatures that live on a world where co-operation and understanding are vital to the survival of all. Thing is, though, that all of that glorious cinematography starts to get just a bit repetitive after about an hour and the middle portion of this really does drag. Indeed, were this to have been a long \"Blue Planet\" style documentary alerting us to the dangers of mankind's rampant abuse of resources with scant regard to the implications for any other species, then I would have enjoyed it better in three parts with Sir David Attenborough's mellifluous narration. It isn't though, and the story is stretched so terribly thinly that - sorry, sacrilege I know - I was actually bored a bit. It does pick up for the last forty minutes or so as the denouement provides for loads of action-packed pyrotechnics but to be honest, I had sort of lost interest by that point. Certainly, it is a great looking film that offers us food for thought, but as a story - I thought it weak, predictable and at times it does just a little too much of it's own recycling. Indeed - had their children actually done what they were told in the first place, there might not have been much of a story at all! Essential on a big screen."
// created_at
// :
// "2022-12-24T04:46:47.345Z"
// id
// :
// "63a68437d55c3d00a7f58b04"
// updated_at
// :
// "2022-12-24T04:46:47.412Z"
// url
// :
// "https://www.themoviedb.org/review/63a68437d55c3d00a7f58b04"
