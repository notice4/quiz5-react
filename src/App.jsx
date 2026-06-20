import React, { useContext, useState } from 'react';
import { MovieProvider, MovieContext } from './context/MovieContext';
import Sidebar from './components/Sidebar';
import MovieCard from './components/MovieCard';

const MainApp = () => {
  const { movies, loading } = useContext(MovieContext);
  const [searchQuery, setSearchQuery] = useState('');
  const tvSeriesOnly = movies.filter(movie => movie.category === 'TV Series');
  const filteredSeries = tvSeriesOnly.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-layout">
      <Sidebar />
      
      <main className="main-content">
        <div className="search-container">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 22L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search for TV series" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <h1 className="page-title">TV Series</h1>

        {loading ? (
          <div style={{color: '#8a919f'}}>Loading series...</div>
        ) : (
          <div className="movie-grid">
            {filteredSeries.map(movie => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

function App() {
  return (
    <MovieProvider>
      <MainApp />
    </MovieProvider>
  );
}

export default App;