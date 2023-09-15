import FeaturedMovie from "../featuredMovie/FeaturedMovie";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Homepage = ({ movies, setMovies, isSearched, setIsSearched, input, setInput}) => {
  return (
    <>
      <Header movies={movies} setMovies={setMovies} isSearched={isSearched} setIsSearched={setIsSearched} input={input} setInput={setInput}/>
      <FeaturedMovie movies={movies} isSearched={isSearched} setIsSearched={setIsSearched} input={input} setInput={setInput}/>
      <Footer />
    </>
  );
};

export default Homepage;
