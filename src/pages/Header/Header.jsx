import React, { useEffect, useState } from "react";
import "./index.scss";
import logo from "../../assets/images/logo2.png";
import { Modal, Button } from "react-bootstrap";
import SignIn from "../../components/SignIn/SignIn";
import { auth, getUserById } from "../../lib/api/user";

export default function Header({}) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      let newUser = null;
      if (user) {
        newUser = await getUserById(auth.currentUser.uid);
      }
      setCurrentUser(newUser);
    });
  }, []);
  return (
    <header>
      <div className="container-fluid">
        <div className="row align-middle header-content">
          <div className="col-1 header-logo">
            <div>
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-8 header-navbar ">
            <dl className="d-flex justify-content-start fs-5">
              <dd>
                <a href="/">HOME</a>
              </dd>
              <dd>
                <a href="/review-list">REVIEW LIST</a>
              </dd>
              <dd>
                <a href="/new-review">CREATE REVIEW</a>
              </dd>
              <dd>
                <a href="#">CONTACT US</a>
              </dd>
            </dl>
          </div>
          <div className="col-3 header-user">
            <div className="row">
              <div className="col">
                {currentUser ? (
                  currentUser.admin ? (
                    <a href="/admin">
                      <span>Welcome admin</span>
                    </a>
                  ) : (
                    <a href="/admin">
                      <span>Welcome {currentUser.username}</span>
                    </a>
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="col">
                <SignIn currentUser={currentUser} />
                {/* <div className="btn btn-primary">Sign out</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
