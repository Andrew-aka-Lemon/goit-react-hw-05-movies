import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getMovieCreditsByID } from 'utils/FilmsAPI';
import { ActorCard } from 'components/ActorCard';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCreditsByID(movieId).then(cast => setCast(cast));
  }, [movieId]);

  if (cast === null) {
    return;
  }

  return (
    <CastGallery>
      {cast.map(({ credit_id, name, character, profile_path }) => (
        <ActorCard
          key={credit_id}
          name={name}
          character={character}
          photo={profile_path}
        />
      ))}
    </CastGallery>
  );
};

const CastGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;