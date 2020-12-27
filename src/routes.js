import React, { lazy, Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import LoadingScreen from "Features/Components/LoadingScreen";
import SearchLayout from "Features/Layouts/SearchLayout";
function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Redirect exact from="/" to="/welcome"/>
        <Route
          exact
          path="/welcome"
          component={lazy(() => import("./Features/Screens/HomeScreen"))}
        />
        <SearchLayout>
          <Route
            exact
            path="/results"
            component={lazy(() => import("./Features/Screens/ResultsList"))}
          />
          <Route
            exact
            path="/EligibilityChecker"
            component={lazy(() =>
              import("./Features/Screens/EligibilityChecker")
            )}
          />
        </SearchLayout>
      </Switch>
    </Suspense>
  );
}

export default Routes;
