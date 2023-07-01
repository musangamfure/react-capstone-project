import '../styles/Show.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

function Show({ Show, backgroundColor }) {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    const showId = Show.id;
    navigate(`/ShowDetails/${showId}`);
  };

  return (
    <div className="show-item" style={{ backgroundColor }}>
      <button
        type="button"
        onClick={handleShowDetails}
        aria-label="View more info"
        className="details-btn"
      >
        <BsArrowRightCircle />
      </button>
      <img className="show-image" src={Show.image.medium} alt="" />
      <h3 className="show-name">{Show.name}</h3>
      <h3 className="show-rating">{Show.rating.average}</h3>
    </div>
  );
}

Show.propTypes = {
  Show: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      medium: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      average: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Show;
