import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Feed from "./pages/Feed";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/" component={Profile} />
        <Route exact path="/feed/:username" component={Feed} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
