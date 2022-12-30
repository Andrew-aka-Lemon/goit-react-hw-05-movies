import PropTypes from 'prop-types';

export const Review = ({ author, text, postTime, link, nickname }) => {
  const datePost = new Date(postTime).toLocaleDateString();
  return (
    <div>
      <h3>
        <span>{author} aka </span>
        <a href={link}>{nickname}</a>
      </h3>

      <p>{datePost}</p>
      <p>{text}</p>
    </div>
  );
};

Review.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  nickname: PropTypes.string,
  postTime: PropTypes.string,
};
