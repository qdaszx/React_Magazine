import React from "react";

import { BrowserRouter, Route } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Login from "../pages/Login";
import PostList from "../pages/PostList";
import SignUp from "../pages/SignUp";
import Header from "../components/Header";
import Grid from "../elements/Grid";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <ConnectedRouter history={history}>
          <Header/>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
