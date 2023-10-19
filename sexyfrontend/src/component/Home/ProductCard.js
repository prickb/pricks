import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const ProductCard = ({ product }) => {
  // const options = {
  //   value: product.ratings,
  //   readOnly: true,
  //   precision: 0.5,
  // };
  return (
    <Link className="productCard category__product" to={`/product/${product._id}`}>
      {product.images && product.images[0] && product.images[0].url ? (
        <div className="category__product--image">< img src={product.images[0].url} alt={product.name} />
        </div>) : (<div>No Image Availabe</div>)
      }
      <div className="category__product--description">
        <p>{product.name}</p>
        <div>
          <span className="productCardSpan">
            {" "}
            ({product.numOfReviews} Reviews)
          </span>
        </div>
        <span>{`₹${product.price}`}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
