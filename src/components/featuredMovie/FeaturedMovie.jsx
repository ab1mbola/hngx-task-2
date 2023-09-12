import { useEffect, useState } from "react";
import "./featuredMovie.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MovieCard from "../movieCard/MovieCard";

const FeaturedMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=af6502e937447032ba3ae4a03d480426"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results.slice(0, 10));
      });
  }, []);

  return (
    <section>
      <div className="featured-container">
        <div className="featured-text-container">
          <h2>Featured Movie</h2>
          <p>
            <a href="">
              See more <ChevronRightIcon />
            </a>
          </p>
        </div>

        <div className="featured-movies">
          <div className="grid">
            {movies.map((movieReq) => (
              <MovieCard key={movieReq.id} {...movieReq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
