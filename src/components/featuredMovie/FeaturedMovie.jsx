import { useEffect, useState } from "react";
import "./featuredMovie.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MovieCard from "../movieCard/MovieCard";
import MoviesPage from "../moviesPage/MoviesPage";

const FeaturedMovie = ({ movies, isSearched, setIsSearched }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <section>
      <div className="featured-container">
        {!isSearched ? (
          <div className="featured-text-container">
            <h2>Featured Movie</h2>
            <p>
              <a href="">
                See more <ChevronRightIcon />
              </a>
            </p>
          </div>
        ) : (
          <div></div>
        )}

        <div className="featured-movies">
          <div className="grid">
            {movies.map((movie) => (
              <MovieCard movies={movies} key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </div>

      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </section>
  );
};

export default FeaturedMovie;
