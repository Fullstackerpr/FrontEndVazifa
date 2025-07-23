import "./Footer.scss";
import footerLogo from "../../assets/header_icon.svg";
import { MdEmail, MdLocationOn, MdPhone, MdLanguage } from "react-icons/md";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__wrapper container">
        <div className="footer__contact">
          <img src={footerLogo} alt="" />
          <p>
            Lorem ipsum is placeholder text <br /> commonly used in the graphic,
            print, and layouts and visual mockups.
          </p>
          <a href="#">
            <MdEmail /> Company@gmail.com.com
          </a>{" "}
          <br />
          <a href="#">
            <MdPhone /> Phone: (064) 332-1233
          </a>{" "}
          <br />
          <a href="#">
            <MdLocationOn /> 450 Wall Street, USA, New York
          </a>
        </div>
        <div className="footer__info">
          <h4>INFORMATION</h4>
          <p className="p1">New Collection</p>
          <p>About Store</p>
          <p>Contact Us</p>
          <p>Latest News</p>
          <p>Our Sitemap</p>
          <p>Orders History</p>
        </div>
        <div className="footer__menu">
          <h4>FOOTER MENU</h4>
          <p className="p1">Instagram profile</p>
          <p>New Collection</p>
          <p>Contact Us</p>
          <p>Latest News</p>
          <p>Terms & Conditions</p>
          <p>Purchase Theme</p>
        </div>
        <div className="footer__link">
          <h4>USEFUL LINKS</h4>
          <p className="p1">Instagram profile</p>
          <p>New Collection</p>
          <p>Contact Us</p>
          <p>Latest News</p>
          <p>Terms & Conditions</p>
          <p>Purchase Theme</p>
        </div>
        <div className="footer__store">
          <h4>ABOUT THE STORE</h4>
          <p>
            Lorem ipsum is placeholder text <br /> commonly used in the graphic,
            print, and <br /> layouts and visual mockups.
          </p>
          <a href="#">www.company.com</a>
          <div className="footer__icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
          <a href="#"><MdLanguage/> English</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
