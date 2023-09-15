import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer">
          <div className="socials">
            <a href="">
              <FacebookIcon />
            </a>
            <a href="">
              <InstagramIcon />
            </a>
            <a href="">
              <TwitterIcon />
            </a>
            <a href="">
              <YouTubeIcon />
            </a>
          </div>

          <div className="links">
            <a href="">Conditions of Use</a>
            <a href="">Privacy & Policy</a>
            <a href="">Press Room</a>
          </div>

          <div className="copyright">
            <p>© 2023 MovieBox by </p>
            &nbsp;
            <p> Mustapha Samuel</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
