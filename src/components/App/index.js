import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import Home from "../Home";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import Overview from "../Overview";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import About from "../About";
import Blog from "../Blog";
import GetYourReport from "../GetYourReport";

import * as ROUTES from "../../constants/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import BlogDetails from "../BlogDetails/BlogDetails";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.Home} component={Home} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.About} component={About} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.Overview} component={Overview} />
      <Route path={ROUTES.Blog} component={Blog} />
      <Route path={ROUTES.GetYourReport} component={GetYourReport} />
      <Route path={ROUTES.BlogDetails} component={BlogDetails} />
    </div>
  </Router>
);

export default App;
