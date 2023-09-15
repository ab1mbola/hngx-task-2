import "./moviesPageSidebar.scss";

const MoviesPageSidebar = ({ movie }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <a href="/" className="sidebar-header">
          <img
            src="/assets/Logo-tv.svg"
            alt="moviebox logo "
            className="sidebar-logo"
          />
          <h1>MovieBox</h1>
        </a>

        <nav className="sidebar-menu">
          <button className="sidebar-button">
            <img src="/assets/Home.svg" alt="home" />
            <p>Home</p>
          </button>

          <button className="sidebar-button movies">
            <img src="/assets/MovieProjector.svg" alt="movies" />
            <p>Movies</p>
          </button>

          <button className="sidebar-button">
            <img src="/assets/TVShow.svg" alt="tv icon" />
            <p>TV Series</p>
          </button>

          <button className="sidebar-button">
            <img src="/assets/Calendar.svg" alt="calendar icon" />
            <p>Upcoming</p>
          </button>

          <div className="movie-quizes">
            <div className="quizes-card">
              <h3>Play movie quizes and earn free tickets</h3>
              <p>50k people are playing now</p>
              <button>Start playing</button>
            </div>
          </div>

          <button className="sidebar-button">
            <img src="/assets/Logout.svg" alt="logout icon" />
            <p>Log out</p>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default MoviesPageSidebar;
