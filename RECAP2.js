import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MovieDescription from "./MovieDescription";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies/:movieId" component={() => <MovieDescription movies={movies} />} />
      </Switch>
    </Router>
  );
};

export default App;
