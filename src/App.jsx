
import style from "./App.module.css"
import React from "react";
import { MovieDetails } from "./pages/movieDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandigPage } from "./pages/LandigPage";

export function App() {
  return (
    <Router>

      <header>
        <Link to="/">
          <h1 className={style.titulo}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route path={"/movies/:movieId"}> <MovieDetails /> </Route>
          <Route path="/"> <LandigPage /> </Route>

        </Switch>
      </main>

    </Router>

  )
}