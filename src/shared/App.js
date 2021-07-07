import React from "react";

import {BrowserRouter, Route} from "react-router-dom"
import Login from "../pages/Login";
import PostList from "../pages/PostList";
import SignUp from "../pages/SignUp";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
