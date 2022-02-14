import React from "react";
// Import the custom "useRouteMatch" hook from React Router
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {

  // useRouteMatch return a special object with info
  // about the currently matched route
  const match = useRouteMatch();
  console.log(match.url);

  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      <Route path={`${match.url}/:movieId`}>
        {/* adding the movies object as a prop to MovieShow*/}
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
