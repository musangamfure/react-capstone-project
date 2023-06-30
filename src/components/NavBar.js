import '../styles/header.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleTheme = () => {
    setDarkTheme(!darkTheme);

    const mainContainer = document.querySelector('.main-container');
    mainContainer.classList.toggle('dark');
  };

  return (
    <>
      <header className="header">
        <h1>Movies App</h1>
        {darkTheme ? (
          <div
            className="theme-light hidden"
            onClick={handleTheme}
            onKeyDown={handleTheme}
            role="button"
            tabIndex={0}
          >
            <i className="fa-solid fa-moon" />
          </div>
        ) : (
          <div
            className="theme-dark"
            onClick={handleTheme}
            onKeyDown={handleTheme}
            role="button"
            tabIndex={0}
          >
            <i className="fa-solid fa-sun" />
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
