import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// import Navbar from './components/Navbar';

const API_URL = 'http://www.omdbapi.com?apikey=5be401a7';

const movie1 = {
        "Title": "Pathan",
        "Year": "1962",
        "imdbID": "tt0176010",
        "Type": "movie",
        "Poster": "N/A"
    }


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, [])
    return (
        <>
        <div className='app'>
            {/* <h1>Movie.fy</h1> */}
            

            <div className='search'>
                <input 
                placeholder='Search for Movies'
                value={searchTerm}
                onChange= {(e) => setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>:-( Can't Find A Movie</h2>
                    </div>
                )
            }
                
        </div>
        </>
    )
}

export default App;