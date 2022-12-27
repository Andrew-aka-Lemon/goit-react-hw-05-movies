function getGenres(genres) {
  const arr = [];

  for (let index = 0; index < genres.length; index++) {
    const name = Object.values(genres[index]);
    arr.push(name[1]);
  }
  return arr.join(', ');
}

export { getGenres };
