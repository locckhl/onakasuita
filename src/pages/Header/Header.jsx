import React from "react";
import "./index.scss";
import logo from "../../assets/images/logo2.png";
import { Modal, Button } from "react-bootstrap";
import SignIn from "../../components/SignIn/SignIn";
export default function Header({ currentUser }) {
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
                <a href="/admin">
                  {/* Or user profile */}
                  <span>Welcome admin</span>
                </a>
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
