import styled from 'styled-components';
import PropTypes from 'prop-types';

import placeholder from 'images/ProfilePlaceholder.jpg';

export const ActorCard = ({ name, character, photo }) => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200/';

  let imgSource = placeholder;

  if (photo !== null) {
    imgSource = `${BASE_IMG_URL}${photo}`;
  }

  return (
    <Card>
      <img src={imgSource} alt={`Actor ${name}`} />
      <p>{name}</p>
      <p>{character}</p>
    </Card>
  );
};

ActorCard.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string,
  photo: PropTypes.string,
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
`;
