import "./styles/App.scss";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./components/hompage/Homepage";
import ErrorPage from "./components/errorPage/ErrorPage";
import MoviesPage from "./components/moviesPage/MoviesPage";

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=af6502e937447032ba3ae4a03d480426"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 10));
      });
  }, []);

  // const [moviePosters, setMoviePosters] = useState([]);

  // const apiKey = "af6502e937447032ba3ae4a03d480426";
  const [isSearched, setIsSearched] = useState(false);

  const error = {
    code: "ERR_BAD_REQUEST",
    message: "Request failed with status code 404",
  };

  console.log(movies);

  return (
    <>
      <ErrorPage>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage
                  movies={movies}
                  setMovies={setMovies}
                  isSearched={isSearched}
                  setIsSearched={setIsSearched}
                  input={input}
                  setInput={setInput}
                />
              }
            />
          </Routes>
          <Routes>
            <Route path="/movie/:id" element={<MoviesPage movies={movies} />} />
          </Routes>

          {/* <Routes>
          <Route path="*" element={<ErrorPage />} error={error} />
        </Routes> */}
        </BrowserRouter>
      </ErrorPage>

      {/* <MoviesPage /> */}
    </>
  );
}

export default App;
