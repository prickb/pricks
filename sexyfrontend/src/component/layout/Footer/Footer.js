import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__left">
          <div className="footer__menu">
            <a href="/" className="footer__menu__item">
              home
            </a>
            <a href="/products" className="footer__menu__item">
              shop
            </a>
            <a href="./community/community.html" className="footer__menu__item">
              community
            </a>
            <a href="/" className="footer__menu__item">
              contact us
            </a>
            <a href="/login" className="footer__menu__item">
              login
            </a>
          </div>
          <div className="footer__icons">
            <i className="fa-brands fa-instagram" />
            <i className="fa-regular fa-envelope" />
          </div>
          <div className="footer__menu">
            <a href="/terms" className="footer__menu__item">
              terms and conditions
            </a>
            <a href="/return" className="footer__menu__item">
              shiping and return
            </a>
          </div>
        </div>
        <div className="footer__right">
          <h3>what does it mean to feel prickly</h3>
          <div className="footer__text">
            feeling irritated, happy, sad or simply feeling can be overwhelming
            and we get it. we don't just sell products, our art is a coping
            mechanism when you need one and a source to pass time when you don't.
            welcome to the prickly family- here we give each other a reason to
            believe in our art, and hope that we can all heal together, let art
            heal you. let the art heal everyone.
          </div>
        </div>
      </div>
    </footer>
    // <footer id="footer">
    //   <div className="leftFooter">
    //     <h4>DOWNLOAD OUR APP</h4>
    //     <p>Download App for Android and IOS mobile phone</p>
    //     <img src={playStore} alt="playstore" />
    //     <img src={appStore} alt="Appstore" />
    //   </div>

    //   <div className="midFooter">
    //     <h1>ECOMMERCE.</h1>
    //     <p>High Quality is our first priority</p>

    //     <p>Copyrights 2021 &copy; MeAbhiSingh</p>
    //   </div>

    //   <div className="rightFooter">
    //     <h4>Follow Us</h4>
    //     <a href="http://instagram.com/meabhisingh">Instagram</a>
    //     <a href="http://youtube.com/6packprogramemr">Youtube</a>
    //     <a href="http://instagram.com/meabhisingh">Facebook</a>
    //   </div>
    // </footer>
  );
};

export default Footer;
