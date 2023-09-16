import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieDetails from "../movieDetails/MovieDetails";
import MoviesPageSidebar from "../moviesPageSidebar/MoviesPageSidebar";
import "./moviesPage.scss";

const MoviesPage = () => {
  const movieId = window.location.pathname.split("/")[2];
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null); // State to hold error message

  useEffect(() => {
    const apiKey = "af6502e937447032ba3ae4a03d480426";

    const getMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
        );

        if (response.status === 200) {
          setMovies(response.data.results.slice(0, 10));
        } else {
          setError("Failed to fetch movie data. Please try again later.");
        }
      } catch (err) {
        // Handle specific error cases
        if (err.code === "ECONNABORTED") {
          setError("Request timed out. Please check your internet connection.");
        } else if (err.response && err.response.status === 404) {
          setError("Movie data not found. Please try a different movie.");
        } else {
          setError("An error occurred. Please try again later.");
        }
      }
    };

    getMovies();
  }, []);

  return (
    <section className="movie-page">
      <div className="sidebar">
        <MoviesPageSidebar />
      </div>
      <div className="details">
        {error ? (
          // Pass the error message as a prop to the ErrorPage component
          <ErrorPage errorMessage={error} />
        ) : (
          <MovieDetails movies={movies} />
        )}
      </div>
    </section>
  );
};

export default MoviesPage;
