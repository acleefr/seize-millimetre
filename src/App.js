import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import Movies from './component/movies';
import MovieDetail from './component/MovieDetail';
import './App.css';


function App() {
  const [movies, setMovies] = useState([]);

  return (
    <Router>
      <div className='body'>
        <Header setMovies={setMovies} />
        <Routes>
          <Route path="/" element={<Movies movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
