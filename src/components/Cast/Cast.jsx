import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getMovieCreditsByID } from 'utils/FilmsAPI';
import { ActorCard } from 'components/Cast/ActorCard';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCreditsByID(movieId).then(cast => setCast(cast));
  }, [movieId]);

  return (
    <CastGallery>
      {cast.length > 0 ? (
        cast.map(({ credit_id, name, character, profile_path }) => (
          <ActorCard
            key={credit_id}
            name={name}
            character={character}
            photo={profile_path}
          />
        ))
      ) : (
        <div>We have no information about cast in this movie</div>
      )}
    </CastGallery>
  );
};

export default Cast;

const CastGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
