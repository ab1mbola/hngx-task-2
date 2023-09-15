import MovieDetails from "../movieDetails/MovieDetails";
import MoviesPageSidebar from "../moviesPageSidebar/MoviesPageSidebar";
import "./moviesPage.scss";

const MoviesPage = ({ movies }) => {
  // const { id, title, overview, vote_average, poster_path, popularity } = ;
  // movies.length > 0 && movies[currentIndex];

  return (
    <section className="movie-page">
      <div className="sidebar">
        <MoviesPageSidebar />
      </div>
      <div className="details">
        <MovieDetails movies={movies} />
      </div>
    </section>
  );
};

export default MoviesPage;
