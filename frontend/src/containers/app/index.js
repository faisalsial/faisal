import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";
import Login from "../login";
import SignIn from "../signin";
import ProfTest from "../profTest";

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/prof-test" component={ProfTest} />
      
    </main>
  </div>
);

export default App;
