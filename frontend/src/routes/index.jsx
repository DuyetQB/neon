import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingSnipper from "components/LoadingSpinner";
const HomePage = lazy(() => import("containers/HomePage"));
const LoginPage = lazy(() => import("containers/LoginPage"));
const RegisterPage = lazy(() => import("containers/RegisterPage"));
const Cart = lazy(() => import("containers/Cart"));

const index = () => {
  return (
    <>
      <Suspense fallback={<LoadingSnipper />}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};
export default index;
