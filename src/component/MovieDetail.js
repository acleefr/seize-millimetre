import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetail = ({ match }) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      if (match && match.params && match.params.id) {
        try {
          console.log("Fetching movie details with id: ", match.params.id); // Debugging
          const response = await axios.get(`https://moviesdatabase.p.rapidapi.com/titles/${match.params.id}`, {
            headers: {
              'X-RapidAPI-Key': '0b658eca2bmshe9b79962fc8cc0dp1be884jsnf94e459c4c33', // Utilisation d'une variable d'environnement
              'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
          });
          setMovies(response.data.results[0]);
          console.log(response.data);// Debugging
        } catch (error) {
          console.error("An error occurred while fetching data: ", error); // Debugging
          setLoadingError(true);
        }
      } else {
        console.log("No movie ID found in match params"); // Debugging
      }
    };

    fetchDetails();
  }, [match]);

  return (
    <div>
      {loadingError ? (
        <p>Erreur lors du chargement des données.</p>
      ) : (
        <>
          <h1>{movieDetail.originalTitleText ? movieDetail.originalTitleText.text : 'Loading...'}</h1>
          <p>Année de sortie : {movieDetail.releaseYear ? movieDetail.releaseYear.year : 'Loading...'}</p>
          <img src={movieDetail.primaryImage ? movieDetail.primaryImage.url : ''} alt="Movie Poster" />
        </>
      )}
    </div>
  );
};

export default MovieDetail;
