import "./styles/App.scss";
// import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import FeaturedMovie from "./components/featuredMovie/FeaturedMovie";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");

  const apiKey = "af6502e937447032ba3ae4a03d480426";
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=2022&sort_by=vote_average.desc&vote_count.gte=1000`;

  const fetchPoster = async () => {
    try {
      const response = await axios.get(apiUrl);
      const moviePoster = response.data.results[0]?.poster_path || "";
      setBackgroundImage(`https://image.tmdb.org/t/p/w500${moviePoster}`);
    } catch (err) {
      console.log("Error fetching movie data:", err);
    }
  };

  useEffect(() => {
    fetchPoster();
  });

  return (
    <>
      {/* <Routes>
      <Route path="/" element={<Header />} />
    </Routes> */}
      <Header backgroundImage={backgroundImage} />
      <FeaturedMovie />
      <Footer />
    </>
  );
}

export default App;
