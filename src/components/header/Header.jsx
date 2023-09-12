import "./header.scss";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";

const Header = ({ backgroundImage }) => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="container" style={containerStyle}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
