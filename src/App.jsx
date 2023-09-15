import "./styles/App.scss";
// import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import FeaturedMovie from "./components/featuredMovie/FeaturedMovie";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/hompage/Homepage";
import Searchbar from "./components/searchbar/Searchbar";
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

  console.log(movies);

  return (
    <>
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
      </BrowserRouter>

      {/* <MoviesPage /> */}
    </>
  );
}

export default App;
