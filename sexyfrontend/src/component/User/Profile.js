import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <main className="my__account">
            <section className="my__account--left">
              <div className="category__all">
                <div className="category__menu">
                  <h1>my account</h1>
                  <ul className="category__menu--items">
                    <li className="category__menu--item">
                      <button href="" id="deets">
                        my deets
                      </button>
                    </li>
                    <li className="category__menu--item">
                      <Link to="/orders" id="orders">my orders</Link>
                      {/* <button href="/orders" id="orders">
                        my orders
                      </button> */}
                    </li>
                    <li className="category__menu--item">
                      {/* <Link to={`/order/${params.getValue(params.id, "id")}`} id="wishlist"> order status</Link> */}
                      <button href="" id="wishlist">
                        order status
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="deets my__account--right border__left">
              <div>
                <div className="profile__pic">
                  <img src={"/Profile.png"} alt={user.name} className="profile__pic__img" />
                </div>
                <div className="details">
                  <p>name: {user.name}</p>
                  {/* <p>your prick name:</p> */}
                  <p>registered e-mail: {user.email}</p>
                  {/* <p>password:</p>
                  <p>mobile number:</p>
                  <p>saved address:</p> */}
                  <p><Link to="/password/update">Change Password</Link></p>
                </div>
                <hr />
              </div>
            </section>

            <section className="orders my__account--right border__left">
              <div className="order__status">
                <h1>my orders</h1>
              </div>

              <div>
                <table className="order__details">
                  <tr className="table__heading">
                    <th>order number</th>
                    <th>deets</th>
                    <th>Rs</th>
                    <th>date</th>
                    <th>status</th>
                  </tr>
                  <tr>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                    <td>amet.</td>
                  </tr>
                  <tr>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                    <td>amet.</td>
                  </tr>
                  <tr>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                    <td>amet.</td>
                  </tr>
                  <tr>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                    <td>amet.</td>
                  </tr>
                </table>

              </div>

            </section>
          </main>


          {/* <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div> */

          }
          {/* <div className="myOrdersPage">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="myOrdersTable"
              autoHeight
            />

            <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
          </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
