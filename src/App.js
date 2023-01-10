import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MovieCard from './MovieCard';
import './App.css';

// http://www.omdbapi.com/?i=tt3896198&apikey=6init4af6600

const API_URL = 'http://omdbapi.com?apikey=64af6600';

const movie = {
  Title: 'Film Title Poem',
  Year: '2016',
  imdbID: 'tt6947176',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNTljYTkzMTYtZmZmMy00OGU1LTk0ODQtNWI4MzQ2MjZhMTg5XkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_SX300.jpg',
};

function App() {
  const [movies, setmovies] = useState([]);
  const [searchmovie, setsearchmovie] = useState('');
  useEffect(() => {
    const searchmovies = async (title) => {
      const response = await fetch(`${API_URL}&s={title}`);

      const data = await response.json();
      setmovies(data.Search);
    };
    searchmovies('spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='search the movie'
          value={searchmovie}
          onChange={(e) => {
            setsearchmovie(e.target.value);
          }}
        ></input>
        <img
          className='SearchIcon'
          src={SearchIcon}
          alt='search'
          onClick={() => {}}
        ></img>
      </div>

      <div className='container'>
        {movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie, index) => (
              <div key={index}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
