import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/lomsadze123/movie-api/refs/heads/main/data.json')
      .then(response => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    const saved = localStorage.getItem('savedMovies');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const toggleFavorite = (movie) => {
    let updated;
    if (favorites.some(fav => fav.title === movie.title)) {
      updated = favorites.filter(fav => fav.title !== movie.title);
    } else {
      updated = [...favorites, movie];
    }
    setFavorites(updated);
    localStorage.setItem('savedMovies', JSON.stringify(updated));
  };

  return (
    <MovieContext.Provider value={{ movies, favorites, toggleFavorite, loading }}>
      {children}
    </MovieContext.Provider>
  );
};