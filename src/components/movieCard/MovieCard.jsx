import { Link } from "react-router-dom";
import "./movieCard.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
  popularity,
}) => {
  const poster_API = "https://image.tmdb.org/t/p/w500/";

  return (
    <Link to={`/movie/${id}`}>
      <div className="card" data-testid="movie-card">
        <div className="card-body">
          <div className="card-body-img">
            <div className="ratings">
              <div></div>
              <div className="favorite">
                <FavoriteIcon />
              </div>
            </div>
            <img
              src={poster_API + poster_path}
              alt="Movie Poster"
              data-testid="movie-poster"
            />
          </div>
          <p className="release-date" data-testid="movie-release-date">
            {release_date}
          </p>
          <h2 className="title" data-testid="movie-title">
            {title}
          </h2>
          <div className="rating">
            <div className="imdb">
              <img src="/assets/IMDb.svg" alt="imdb logo" />
              <p>{vote_average * 10}/100</p>
            </div>
            <div className="rotten-tomatoes">
              <img src="/assets/Tomato.svg" alt="Rotten Tomatoes icon" />
              <p>{popularity.toFixed(1)}%</p>
            </div>
          </div>
          <p className="genre"></p>
        </div>
      </div>
    </Link  >
  );
};

export default MovieCard;
