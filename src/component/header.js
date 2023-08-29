import React from 'react';
import axios from 'axios';

function Header({ setMovies }) {
  
  const searchMovies = async (title) => {
    const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}`,
        params: { exact: 'true', titleType: 'movie' },
        headers: {
          'X-RapidAPI-Key': '0b658eca2bmshe9b79962fc8cc0dp1be884jsnf94e459c4c33',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    try {
      const response = await axios.request(options);
      setMovies(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <input type="text" 
             onKeyPress={(e) => { 
               if (e.key === 'Enter') searchMovies(e.target.value);
             }} 
      />
    </div>
  );
}

export default Header;
