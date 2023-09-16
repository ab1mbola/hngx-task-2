import { useEffect, useState } from "react";
import "./movieDetails.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";

const MovieDetails = ({ movies }) => {
  const movieId = window.location.pathname.split("/")[2];
  const movieGenre = movies?.filter((item) => item?.id === +movieId);
  const [genres, setGenres] = useState([]);
  const apiKey = "af6502e937447032ba3ae4a03d480426";
  console.log(movies);
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const movieResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`
    );
    const genresResponse = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    );
    if (genresResponse?.status === 200) {
      setMovie(movieResponse?.data);
      setGenres(genresResponse?.data.genres);
    }
  };

  const genreNames = movieGenre.map((id) => {
    const foundGenre = genres?.find(
      (genreItem) => genreItem.id === id.genre_ids[0]
    );
    return foundGenre ? foundGenre.name : null;
  });

  useEffect(() => {
    getMovie();
  }, [movieId]);

  const convertToUTC = (dateString) => {
    const localDate = new Date(dateString);
    const utcDate = new Date(
      Date.UTC(
        localDate.getUTCFullYear(),
        localDate.getUTCMonth(),
        localDate.getUTCDate(),
        localDate.getUTCHours(),
        localDate.getUTCMinutes(),
        localDate.getUTCSeconds()
      )
    );

    return utcDate.toISOString();
  };

  return (
    <div className="movie-page-container">
      <div className="movie-page-content">
        <div className="movie-details-container">
          {movies &&
            movies.map((movies, i) => (
              <div key={movies.id}>
                {movies?.id === +movieId && (
                  <div>
                    <div className="movie-trailer">
                      <iframe
                        data-testid="movie-poster"
                        src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}`}
                        title={movie?.title}
                        allowFullScreen
                        className="rounded-2xl h-[450px] w-full"
                      />
                    </div>
                    <div className="movie-details">
                      <div className="left">
                        <div className="header">
                          <p>
                            <span data-testid="movie-title">
                              {movies.title}
                            </span>{" "}
                            •{" "}
                            <span data-testid="movie-release-date">
                              {convertToUTC(movies.release_date)}
                              {/* {movies.release_date} */}
                            </span>{" "}
                            •{" "}
                            <span data-testid="movie-runtime">{`${movie?.runtime}mins`}</span>
                          </p>
                          {genreNames?.map((value) => (
                            <button>{value}</button>
                            // <button>drama</button>
                          ))}
                        </div>
                        <div className="overview">
                          <p
                            className="overview-description"
                            data-testid="movie-overview"
                          >
                            {movies.overview}
                          </p>

                          {/* <div className="people">
                            <p className="director">
                              Director: <a href="">fhhd</a>
                            </p>

                            <p className="writers">
                              Writers: <a href="">fhhd</a>
                            </p>

                            <p className="stars">
                              Stars: <a href="">fhhd</a>
                            </p>
                          </div>

                          <div className="top-rated">
                            <p className="position">Top rate movie # </p>
                            <span className="nominations">
                              Awards nominations
                              <KeyboardArrowDownIcon />
                            </span>
                          </div> */}
                        </div>
                      </div>
                      <div className="right"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
