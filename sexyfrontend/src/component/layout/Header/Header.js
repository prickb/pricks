import React from "react";
// import { ReactNavbar } from "overlay-navbar";
// import logo from "../../../images/logo.png";

// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

const Header = () => {
  return (<>
    <>
      {/* <header className="main-header"> */}
      {/* <marquee className="note">
          new notepads waiting for you to not(e)ice them!
        </marquee> */}
      {/* <div> */}
      {/* <div class="main__header--pricks"> */}
      {/* <a href="/" className="main-header__pricks">
            pricklybypb
          </a> */}
      {/* </div> */}
      {/* <nav class="main-nav"> */}
      {/* <div className="bar">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-xmark" id="hdcross"></i>
          </div> */}
      {/* <div className="headerbar">
            <ul className="main-nav__items--small">
              <li className="main-nav__item--small">
                <a href="./index.html">home</a>
              </li>
              <li className="main-nav__item--small">
                <a href="./categories/categories.html" class="shop">shop</a>
              </li>
              <li className="main-nav__item--small">
                <a href="./community/community.html">community</a>
              </li>
              <li className="main-nav__item--small">
                <a href="">about us</a>
              </li>
              <li className="main-nav__item--small" ><a href="./login/login.html">login</a>
              </li>
              <li className="main-nav__item--small">
                <a href="">search</a>
              </li>
              <li className="main-nav__item--small">
                <a href="./account/account.html">my account</a>
              </li>
              <li className="main-nav__item--small">
                <a href="./cart/cart.html"><img src="../images/cart__img.png" alt="" class="cart__icon" /></a>
              </li>
            </ul>
          </div>
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <a href="/">home</a>
            </li>
            <li className="main-nav__item">
              <a href="/products" className="shop">
                shop
              </a>
            </li>
            <li className="main-nav__item">
              <a href="/about">community</a>
            </li> */}
      {/* <li className="main-nav__item">
              <a href="">about us</a>
            </li> */}
      {/* <li className="main-nav__item">
              <a href="/account">my account</a>
            </li>
            <li className="main-nav__item">
              <a href="/cart">
                <img src="../images/cart__img.png" alt="" className="cart__icon" />
              </a>
            </li>
          </ul>
          {/* </nav> */}
      {/* </div>
      // </header> */}

      <header className="main-header">
        <marquee className="note">
          new notepads waiting for you to not(e)ice them!
        </marquee>
        {/* <div> */}
        <ul className="nav-bar">
          <li className="main-header__pricks">pricklybypb</li>
          <input type="checkbox" id="check" />
          <span className="main-nav__items">
            <li className="main-nav__item">
              <a href="/">home</a>
            </li>
            <li className="main-nav__item">
              <a href="/products" className="shop">
                shop
              </a>
            </li>
            <li className="main-nav__item">
              <a href="/about">community</a>
            </li>
            {/* <li className="main-nav__item">
          <a href="">about us</a>
        </li> */}
            <li className="main-nav__item">
              <a href="/account">my account</a>
            </li>
            <li className="main-nav__item">
              <a href="/cart">
                <img src="../pimages/cart__img.png" alt="" className="cart__icon" />
              </a>
            </li>
            <label htmlFor="check" className="close-menu">
              <i className="fa-solid fa-chevron-right"></i>
            </label>
          </span>
          <label htmlFor="check" className="open-menu">
            <i className="fas fa-bars" />
          </label>
        </ul>
        {/* </div> */}
      </header>


    </>
  </>)
  // <ReactNavbar {...options} />;
};

export default Header;
