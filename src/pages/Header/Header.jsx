import React, { useEffect, useState } from "react";
import "./index.scss";
import logo from "../../assets/images/logo2.png";
import SignIn from "../../components/SignIn/SignIn";
import { auth, getUserById } from "../../lib/api/user";

export default function Header({handleShow}) {
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
          <div className="col-7 header-navbar ">
            <dl className="d-flex justify-content-start fs-5">
              <dd>
                <a href="/">HOME</a>
              </dd>
              <dd>
                <a href="/review-list">REVIEW LIST</a>
              </dd>
              <dd>
                <a href="/new-review" onClick={(e)=>{
                  if(!currentUser){
                    e.preventDefault()
                    handleShow()
                  }
                }}>CREATE REVIEW</a>
              </dd>
              <dd>
                <a href="#">CONTACT US</a>
              </dd>
              {currentUser && currentUser.admin ? (
                <dd>
                  <a href="/admin">ADMIN</a>
                </dd>
              ) : (
                ""
              )}
            </dl>
          </div>
          <div className="col-4 header-user">
            <div className="d-flex justify-content-end ">
              <div className="me-4">
                {currentUser ? (
                  <a href={`/user-profile/${currentUser.id}`}>
                    <span>Welcome {currentUser.username}</span>
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className="e-4">
                <SignIn currenmtUser={currentUser} />
                {/* <div className="btn btn-primary">Sign out</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
