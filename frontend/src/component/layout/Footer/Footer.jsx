import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download App for Android and Ios Mobile Phone</p>
        <img src={playStore} alt="PlayStore" />
        <img src={appStore} alt="appStore" />
      </div>

      <div className="midFooter">
        <h1>Ecommerce</h1>
        <p>High quality is our first priority</p>
        <p>Copyrights 2022 &copy; MePankajSwamiVaishnav</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/pankaj-swami-vaishnav/">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/pankajvaishnav128/?next=%2Fpankajvaishnav128%2F">
          Instagram
        </a>
        <a href="https://github.com/pankaj7073?tab=repositories">Github</a>
      </div>
    </div>
  );
};

export default Footer;
