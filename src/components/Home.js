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

  const renderBackgroundColor = (index) => {
    const patternIndex = index % 8;
    if (
      patternIndex === 0
      || patternIndex === 3
      || patternIndex === 4
      || patternIndex === 7
    ) {
      return '#0C2340';
    }
    return '#1D428A';
  };

  return (
    <>
      <div className="hero">
        <h1>Shows</h1>
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
          {filteredShows.map((show, index) => (
            <Show
              key={show.id}
              Show={show}
              backgroundColor={renderBackgroundColor(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
