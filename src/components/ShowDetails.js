import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/ShowDetail.css';

function ShowDetails() {
  const { id } = useParams();
  const shows = useSelector((state) => state.shows.Shows);

  const show = shows.find((show) => show.id.toString() === id);

  if (!show) {
    return <h2>Loading Data</h2>;
  }

  const {
    name, rating, category, summary, image, official, language,
  } = show;
  const Summary = summary
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '')
    .replace(/<b>/g, '')
    .replace(/<\/b>/g, '');

  return (
    <div className="show-details">
      <Link className="back-button" to="/">
        <i className="fa-solid fa-arrow-left" />
        {' '}
        Back
      </Link>
      <div className="details-container">
        <div className="headings">
          <h2>{name}</h2>
          <div className="rating">
            <h3>
              Rating:
              {rating.average}
            </h3>
          </div>
        </div>
        <div className="show-main">
          <img src={image.medium} alt="" />
          <div className="right-section">
            <p>{Summary}</p>
            <div className="show-categories">
              {category.map((categorys) => (
                <span key={categorys}>
                  <b>{categorys}</b>
                </span>
              ))}
            </div>
            <p>
              Language:
              {language}
            </p>
            <div className="official-website">
              <a href={official} target="_blank" rel="noreferrer">
                <p>Visit Official Website </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;
