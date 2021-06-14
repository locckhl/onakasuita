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

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
      }
      setCurrentUser(newUser);
    });
  }, []);

  const logout = () => {
    auth.signOut();
  };

  return (
    <Router>
      <Header currentUser={currentUser}></Header>

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

          <Route exact path="/new-review">
            <NewReview />
          </Route>

          <Route exact path="/review-list">
            <ReviewList />
          </Route>

          <Route exact path="/review-detail">
            <ReviewDetail />
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
