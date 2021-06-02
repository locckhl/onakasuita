import React from "react";
import "./index.scss";
import logo from "../../logo.svg";
import { Modal, Button } from "react-bootstrap";
import SignIn from "../../components/SignIn/SignIn";
export default function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="row align-middle header-content">
          <div className="col-1 header-logo">
            <img src={logo} alt="" />
          </div>
          <div className="col-9 header-navbar ">
            <ul className="d-flex justify-content-start fs-5">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/review-list">REVIEW LIST</a>
              </li>
              <li>
                <a href="/new-review">CREATE REVIEW</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
            </ul>
          </div>
          <div className="col-2 header-user">
            <SignIn/>
          </div>
        </div>
      </div>
    </header>
  );
}
