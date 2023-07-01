import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import ShowDetails from './components/ShowDetails';
import { fetchAllShows } from './redux/shows/showSlice';
import Header from './components/NavBar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShows());
  }, [dispatch]);

  return (
    <main className="main-container">
      <Routes>
        <Route exact path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/ShowDetails/:id" element={<ShowDetails />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
