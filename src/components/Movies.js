import React from "react";
import propTypes from "prop-types";
import "./Movies.css";
import { Link } from "react-router-dom";
import "./Detail.css"

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${title}`, //주소창에 title을 넣어주기 위해 이렇게 표시할 수 있다.
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
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
          <p className="movie__summary">{summary.slice(0, 100)}...</p>
          {/* <button
          className="button_for_summary"
          id={id + "button"}
          onClick={clickbutton}
        >
          Description
        </button> */}
        </div>
      </div>
    </Link>
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
