import React, { useState } from 'react';
import Header from './component/header';
import Movies from './component/movies';

function App() {
  const [movies, setMovies] = useState([]);
  
  return (
    <div>
      <Header setMovies={setMovies} />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
