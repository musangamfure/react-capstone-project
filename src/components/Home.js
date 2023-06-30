import React, { useState } from 'react';
import '../styles/Home.css';
import { useSelector } from 'react-redux';
import Show from './Show';

function Home() {
  const categories = useSelector((state) => state.shows.categories);
  const allCategories = ['All', ...categories];
  const shows = useSelector((state) => state.shows.Shows);

  const [filteredCategory, setFilteredCategory] = useState('All');

  const filteredShows = filteredCategory === 'All'
    ? shows
    : shows.filter((show) => show.category.includes(filteredCategory));
  const handleCategory = (event) => {
    setFilteredCategory(event.target.value);
  };

  return (
    <>
      <div className="hero">
        <div className="title" />
        <div className="filter">
          <span>Categories</span>
          <select onChange={handleCategory}>
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="shows-container">
        <div className="shows-grid">
          {filteredShows.map((show) => (
            <Show key={show.id} Show={show} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
