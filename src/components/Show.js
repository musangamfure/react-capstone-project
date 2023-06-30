import '../styles/Show.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Show({ Show }) {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    const showId = Show.id;
    navigate(`/ShowDetails/${showId}`);
  };

  return (
    <div className="show-item">
      <img className="show-image" src={Show.image.medium} alt="" />
      <h3 className="show-name">{Show.name}</h3>
      <div className="view-more">
        <button
          type="button"
          onClick={handleShowDetails}
          aria-label="View more info"
          className="details-btn"
        >
          View Details
        </button>
      </div>
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
  }).isRequired,
};

export default Show;
