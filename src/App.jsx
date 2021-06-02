import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Admin from "./pages/Admin/Admin";
import UserProfile from "./pages/UserProfile/UserProfile";
import NewReview from "./pages/NewReview/NewReview";
import ReviewList from "./pages/ReviewList/ReviewList";
import ReviewDetail from "./pages/ReviewDetail/ReviewDetail";

function App() {
  return (
    <Router>
      <Header></Header>

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

        <Route exact path="/user-profile">
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

      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
