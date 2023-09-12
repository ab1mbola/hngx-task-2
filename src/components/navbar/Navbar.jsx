import Searchbar from "../searchbar/Searchbar";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import "./navbar.scss";

const navbar = () => {
  return (
    <nav>
      <div className="moviebox-navbar">
        <div className="logo">
          <a href="/">
            <img src="./assets/Logo.svg" alt="MovieBox Logo" />
          </a>
        </div>

        <div className="search-bar">
          <Searchbar />
        </div>

        <div className="menu">
          <p className="sign-in">Sign in</p>
          <div className="menu-icon">
            <DragHandleIcon />
            {/* <img src="./assets/Menu.svg" alt="hamburger menu icon" /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
