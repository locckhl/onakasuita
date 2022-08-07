import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import UserProfile from "./pages/UserProfile/UserProfile";
import NewReview from "./pages/NewReview/NewReview";
import ReviewList from "./pages/ReviewList/ReviewList";
import ReviewDetail from "./pages/ReviewDetail/ReviewDetail";
import Test from "./lib/api/Test";
import { auth, storeUserInfo } from "./lib/api/user";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import SignIn from "./components/SignIn/SignIn";
import { startApp, unifyUserData } from "fa-package";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    console.log("handle close");
    setShow(false);
  };
  const handleShow = () => {
    console.log("handle show");
    setShow(true);
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
        console.log("newUser, ", newUser);
        console.log("user, ", user.providerData[0]);
        await unifyUserData({
          userProjectId: newUser.id,
          displayName: user.providerData[0].displayName,
          phoneNumber: user.providerData[0].phoneNumber,
          photoUrl: user.providerData[0].photoUrl,
          email: user.providerData[0].email,
        });
      }
      setCurrentUser(newUser);
    });
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.block === true) {
      alert("You are being blocked!!! Please contact admin");
      setTimeout(() => {
        auth.signOut();
        window.location = "/";
      }, 1000);
    }
  }, [currentUser]);

  const logout = () => {
    auth.signOut();
  };

  return (
    <Router>
      <Header currentUser={currentUser} handleShow={handleShow}></Header>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>You need to login in order to do this action !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <SignIn currentUser={currentUser} />E
        </Modal.Footer>
      </Modal>

      <div className="main-content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route exact path="/signin">
          <SignIn />
        </Route> */}

          <Route exact path="/admin">
            <Admin />
          </Route>

          <Route exact path="/user-profile/:id">
            <UserProfile />
          </Route>

          {currentUser && (
            <Route exact path="/new-review">
              <NewReview handleShow={handleShow} currentUser={currentUser} />
            </Route>
          )}

          {/* <Route
            exact
            path="/new-review"
            render={() => {
              handleShow()
              return <Home />;
            }}
          /> */}

          <Route exact path="/review-list">
            <ReviewList />
          </Route>

          <Route exact path="/review-detail/:id">
            <ReviewDetail handleShow={handleShow} />
          </Route>

          <Route exact path="/test-api">
            <Test />
          </Route>
        </Switch>
      </div>

      <Footer></Footer>
    </Router>
  );
}

export default App;
