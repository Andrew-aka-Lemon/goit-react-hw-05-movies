import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Review } from './Review';

import { getMovieReviewsByID } from 'utils/FilmsAPI';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviewsByID(movieId).then(rev => setReviews(rev));
  }, [movieId]);

  if (reviews.length === 0) {
    return <div>There is no reviews on this film</div>;
  }

  return (
    <div>
      {reviews.map(
        ({ author, content, updated_at, url, id, author_details }) => (
          <Review
            key={id}
            nickname={author_details.username}
            author={author}
            text={content}
            postTime={updated_at}
            link={url}
          />
        )
      )}
    </div>
  );
};
