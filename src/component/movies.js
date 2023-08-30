import React from 'react';
import '../styles/movies.css';

function Movies({ movies }) {
    return (
        <table className='table'>
          <tbody className='cell-body'>
            {Array.isArray(movies) && movies.reduce((rows, movie, index) => {
              if (index % 3 === 0) rows.push([]);
              rows[rows.length - 1].push(movie);
              return rows;
            }, []).map((movieRow, rowIndex) => (
              <tr key={rowIndex}>
                {movieRow.map(movie => (
                  <td className='cell' key={movie.id}>
                    {movie.primaryImage && movie.primaryImage.url ? 
                      <img src={movie.primaryImage.url} alt={movie.originalTitleText.text} width="200" />
                      : 'Image non disponible'}
                    <div className='movie-title'>{movie.originalTitleText.text}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );      
      
}

export default Movies;
