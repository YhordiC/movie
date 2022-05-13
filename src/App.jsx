
import style from "./App.module.css"
import React from "react";
import { MovieDetails } from "./pages/movieDetails";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandigPage } from "./pages/LandigPage";

export function App() {
  return (
    <Router>

      <header>
       <div className={style.containerLink}>
       <Link to="/">
          <h1 className={style.titulo}>🍿🍿<h2>Movies</h2>🍿🍿</h1>
        </Link>
         </div> 
        
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