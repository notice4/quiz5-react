import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useContext(MovieContext);
  const isSaved = favorites.some(fav => fav.title === movie.title);
  const imageUrl = movie.thumbnail?.regular?.large || movie.thumbnail?.regular?.medium;

  return (
    <div className="movie-card">
      <div className="thumbnail-container">
        <img src={imageUrl} alt={movie.title} className="thumbnail" />
        
        <button 
          className={`bookmark-btn ${isSaved ? 'saved' : ''}`}
          onClick={() => toggleFavorite(movie)}
          aria-label="Bookmark movie"
        >
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 1H1.5V12.5L6 8.5L10.5 12.5V1ZM10.5 0C11.3284 0 12 0.671573 12 1.5V14L6 8.66667L0 14V1.5C0 0.671573 0.671573 0 1.5 0H10.5Z" fill="none" stroke="white" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>

      <div className="card-meta">
        <span>{movie.year}</span>
        <span className="meta-dot"></span>
        <span>{movie.category}</span>
        <span className="meta-dot"></span>
        <span>{movie.rating}</span>
      </div>

      <h3 className="card-title">{movie.title}</h3>
    </div>
  );
};

export default MovieCard;