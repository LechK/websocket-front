import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Loading } from "./components/";

const LazyHome = lazy(() => import("./pages/Home/Home"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LazyHome} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
