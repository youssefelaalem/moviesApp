import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getAllMoviesOrShows,
} from "../../features/movie/movieSlice";
import { useSelector } from "react-redux";

const Header = (props) => {
  // const location = props.location.pathname;
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const atHome = pathname === "/";
  const movies = useSelector(getAllMoviesOrShows); //why undifine ?

  console.log(movies.movies);
  const [movietrem, setMovieTrem] = useState("");
  const dispatch = useDispatch();

  const submitHandelar = (e) => {
    e.preventDefault();
    if (movietrem === "") return alert("Please Enter a name of movie");
    dispatch(fetchAsyncMovies(movietrem));
    dispatch(fetchAsyncShows(movietrem));
    console.log("len" + movies.length);
    if (movies.length > 0) setMovieTrem("");
  };
  return (
    <>
     <div className="haeder">
        <div className="logo">
          <Link to="/">MovieApp</Link>
        </div>
        {atHome &&  <div className="search-bar">
          <form onSubmit={submitHandelar}>
            <input
              type="text"
              placeholder="Search Movie.."
              value={movietrem}
              onChange={(e) => setMovieTrem(e.target.value)}
            />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>}

        <div className={"user-image"}>
          <img src="../../../user.png" alt="user_Image" />
        </div>
      </div>
    </>
  );
};

export default Header;
