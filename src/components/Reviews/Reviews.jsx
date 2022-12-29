import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Review } from './Review';

import { getMovieReviewsByID } from 'utils/FilmsAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviewsByID(movieId).then(rev => setReviews(rev));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(
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
        )
      ) : (
        <div>There is no reviews on this film</div>
      )}
    </div>
  );
};

export default Reviews;
