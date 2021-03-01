import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./movies.css"

function movies({id, year, title,summary, poster, genres}) {
    return ( 
        <Link to={{
            pathname: "./movie-detail",
            state: {  year, title, summary, poster, genres  }
        }}>
             <div className="movie">
             <img src={poster} alt={title} title={title}/>
              <div className="movie-data">
                 <h3 className="movie-title">{title}</h3>
                 <h3 className="movie-year">{year}</h3>
              <ul className ="movie-genres">{genres.map(((genre, index) => <li key={index} className = "genres-genre">{genre}</li>))} </ul>
              <p className="movie-summary">{summary.slice(0, 180)}...</p>
              </div>
            </div>
        </Link>
    )
}

movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default movies