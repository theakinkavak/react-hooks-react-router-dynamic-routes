import React from 'react'
import { Link } from "react-router-dom"

function MoviesList({ movies }) {

  console.log(movies)
  // console.log(movies.1.title) Why not dot notation?
  console.log(movies[1].title)

  const renderMovies = Object.keys(movies).map(movieID => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ))

  return <ul>{renderMovies}</ul>
}

export default MoviesList;