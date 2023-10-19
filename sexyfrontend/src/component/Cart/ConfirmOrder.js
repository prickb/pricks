import React, { Fragment } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history.push("/process/payment");
  };

  return (
    <Fragment>

      <main>
        <section className="confirm__order">
          <div className="confirm__order--left">
            <div className="order__info--h1">
              <h1>welcome to the prickly family!!</h1>
            </div>
            <div className="order__info--p">
              <p>
                your order will be packed as soon as we finish doing the prickly dance
                :) ♡
              </p>
            </div>
            <div className="order__info--para">
              <p>
                you can track your order at my account&gt;orders. you will get a
                notification when your order is packed and ready to be shipped, which
                should be within a week of -well- today.
              </p>
              <p>
                for the best unboxing experience and a discount code for your next
                order upload a reel/story tagging us @pricklybypb on Instagram!
              </p>
            </div>
          </div>
          <div className="confirm__order--right">
            <h1>order summary</h1>
            <div className="confirmCartItemsContainer ordered__items">
              <div className="confirmCartItemsContainer ordered__item">
                {cartItems &&
                  cartItems.map((item) => (
                    <div key={item.product}>
                      <div className="ordered__item--img">
                        <img src={item.image} alt="Product" />
                      </div>
                      <div className="ordered__item--info">
                        <Link to={`/product/${item.product}`}>
                          {item.name}
                          {item.quantity}
                        </Link>{" "}
                      </div>
                    </div>
                  ))
                }
              </div>
              <hr />
            </div>
            {/* <div className="ordered__items">
              <div className="ordered__item">
                <div className="ordered__item--img">
                  <img />
                </div>
                <div className="ordered__item--info">
                  <p>item 1</p>
                  <p>quantity</p>
                </div>
                <hr />
              </div>
              <div className="ordered__item">
                <div className="ordered__item--img">
                  <img />
                </div>
                <div>
                  <p>item 1</p>
                  <p>quantity</p>
                </div>
                <hr />
              </div>
              <div className="ordered__item">
                <div className="ordered__item--img">
                  <img />
                </div>
                <div>
                  <p>item 1</p>
                  <p>quantity</p>
                </div>
                <hr />
              </div>
              <div className="ordered__item">
                <div className="ordered__item--img">
                  <img />
                </div>
                <div>
                  <p>item 1</p>
                  <p>quantity</p>
                </div>
                <hr />
              </div>
              <div className="ordered__item">
                <div className="ordered__item--img">
                  <img />
                </div>
                <div>
                  <p>item 1</p>
                  <p>quantity</p>
                </div>
                <hr />
              </div>
            </div> */}
            <div className="cart__total">
              <div className="cart__total--left">
                <p>cart total</p>
                <p className="small__text">shipping</p>
                <p className="small__text">discount</p>
                <p>paid</p>
              </div>
              <div className="cart__total--right">
                <p>₹{subtotal}</p>
                <p className="small__text">₹{shippingCharges}</p>
                {/* <p className="small__text">conditional</p> */}
                <p>₹{totalPrice}</p>
              </div>
            </div>
            <div className="cart__btn">
              <a href="/products" className="btn back__btn">
                back to shop
              </a>
              <a href="../account/account.html" className="track__order">
                track order
              </a>
            </div>
          </div>
        </section>
      </main>





      {/* <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
      {/* <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default ConfirmOrder;
