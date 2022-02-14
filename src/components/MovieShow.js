import React from 'react'
import { useParams, useRouteMatch } from "react-router-dom";
 
function MovieShow({ movies }) {
    // call useParams to access the "params" from the url
    const params = useParams();
    console.log(params);
    // const match = useRouteMatch();
    // console.log(match)

    return (
    <div>
        {/* <h3>{movies[match.params.movieId].title}</h3> */}
        {/* Access the "movieId" stored in "params" to render
            information about selected movie*/}
        <h3>{movies[params.movieId].title}</h3>
    </div>
  )
}

export default MovieShow;