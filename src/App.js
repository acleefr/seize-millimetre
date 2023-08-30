import React, { useState } from 'react';
import Header from './component/header';
import Movies from './component/movies';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  
  return (
    <div className='body'>
      <Header setMovies={setMovies} />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
