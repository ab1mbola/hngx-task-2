import { useState } from "react";
import "./searchbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const apiKey = "af6502e937447032ba3ae4a03d480426";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = (value) => {
    axios.get(
      "https://api.themoviedb.org/3/movie?api_key=af6502e937447032ba3ae4a03d480426"
    );
  };

  const searchData = () => {
    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`
    );
  };

  const handleChange = (value) => {
    setInput(value);
    // fetchData(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchData();
  };
  

  return (
    <div className="input-wrapper">
      <form onSubmit={handleSearch}>
        <input
          placeholder="What do you want to watch?"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
      <SearchIcon />

      {/* <img src="./assets/Search.svg" alt="Search icon" /> */}
    </div>
  );
};

export default Searchbar;
