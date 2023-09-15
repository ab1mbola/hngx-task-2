import "./header.scss";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";

const Header = ({ movies, setMovies, isSearched, setIsSearched, input, setInput }) => {
  // const containerStyle = {
  //   backgroundImage: `url(${backgroundImage})`,
  // };

  return (
    <div className="container">
      {/* <Navbar /> */}
      <Hero movies={movies} setMovies={setMovies} isSearched={isSearched} setIsSearched={setIsSearched} input={input} setInput={setInput}/>
    </div>
  );
};

export default Header;
