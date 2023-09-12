import "./hero.scss";

const Hero = ({title,
  poster_path,
  vote_average,
  overview,
  }) => {

  const poster_API = "https://image.tmdb.org/t/p/w500/";
  
  return (
    <section>
      <div className="hero">
        <div className="description-box">
          <div className="heading">
            <h1>{title}</h1>
          </div>

          <div className="rating">
            <div className="imdb">
              <img src="./assets/IMDb.svg" alt="imdb logo" />
              <p>{vote_average*10} / 100</p>
            </div>

            <div className="rotten-tomatoes">
              <img src="./assets/Tomato.svg" alt="Rotten Tomatoes Logo" />
              <p>97 %</p>
            </div>
          </div>

          <div className="description">
            <p>
              {overview}
            </p>
          </div>

          <div className="watch-trailer">
            <button>
              <img src="./assets/Play.svg" alt="Play icon" />
              
              <p>WATCH TRAILER</p>
            </button>
          </div>
        </div>
        <div className="pagination-box">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
