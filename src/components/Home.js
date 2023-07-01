import React, { useState } from 'react';
import '../styles/Home.css';
import { useSelector } from 'react-redux';
import Show from './Show';

function Home() {
  const categories = useSelector((state) => state.shows.categories);
  const allCategories = ['All', ...categories];
  const shows = useSelector((state) => state.shows.Shows);
  const bgColors = ['#0C2340', '#1D428A'];

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
              backgroundColor={bgColors[index % bgColors.length]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
