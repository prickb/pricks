import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";

const categories = [
  "secented candles",
  "stickers",
  "notebooks",
  "notepads",
  "art prints",
  "upcoming",

];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  console.log("Products from Redux state:", products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category));
  }, [dispatch, keyword, currentPage, price, category, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          {/* <h2 className="productsHeading">Products</h2> */}





          <div className="filterBox">
            {/* <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            /> */}

            {/* <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul> */}

            {/* <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset> */}
          </div>


          <main>
            <section className="category__position">
              <div className="category__position--left">
                {/* <div className="category__all"> */}

                {/* <div className="category__menu">
                  <h1>shop by category</h1>

                  <ul className=" category__menu--items">
                    {categories.map((category) => (
                      <li
                        className="category-link category__menu--item"
                        key={category}
                        onClick={() => setCategory(category)}
                      >
                        {category}
                      </li>
                    ))}
                  </ul> */}
                <label>
                  <input type="checkbox" className="checkbox" />
                  <div className="toggle">
                    <span className="top_line common"></span>
                    <span className="middle_line common"></span>
                    <span className="bottom_line common"></span>
                  </div>
                  {/* <div className="category__position--left"></div> */}
                  <div className="category__slide">
                    <h1>shop by category</h1>
                    <ul className="category__slide--ul">
                      {categories.map((category) => (
                        <li
                          className="category__slide--li"
                          key={category}
                          onClick={() => setCategory(category)}
                        >
                          <button>{category}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </label>

                {/* <ul className="category__menu--items">
                      <li className="category__menu--item">
                        <button id="scented__candles">scented candles</button>
                      </li>
                      <li className="category__menu--item">
                        <button id="stickers">stickers</button>
                      </li>
                      <li className="category__menu--item">
                        <button id="notebooks">notebooks</button>
                      </li>
                      <li className="category__menu--item">
                        <button id="notepads">notepads</button>
                      </li>
                      <li className="category__menu--item">
                        <button id="art__prints">art prints</button>
                      </li>
                      <li className="category__menu--item">
                        <button id="upcoming">upcoming</button>
                      </li>
                    </ul> */}
                {/* </div> */}
                {/* </div> */}
              </div>
              <div className="category__position--right scented__candles border__left"><div className="products">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                {resultPerPage < count && (
                  <div className="paginationBox">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                  </div>
                )}
              </div>
              </div>

            </section>

          </main>
          {/* <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div> */}



        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
