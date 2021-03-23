import React from "react";
import propTypes from "prop-types";
import "./Movies.css";
import App from "./App";


function Movie({ id, year, title, summary, poster, genres }) {
    return (
    <div className="movies__movie">
      <div className="movie">
        <div className="img__container">
          <img
            className="movie__image"
            src={poster}
            alt={title}
            title={title.toString()}
          />
        </div>
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p id={id + "summary"}></p>
        <p className="movie__summary">{summary.slice(0,100)}...</p>
        {/* <button
          className="button_for_summary"
          id={id + "button"}
          onClick={clickbutton}
        >
          Description
        </button> */}
      </div>
    </div>
  );
// //   function clickbutton() {
// //     console.log(id);
// //     console.log(summary);
    
//     //const summary_id = document.getElementById(id + "summary");
//   }
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie; //잊지 말것
