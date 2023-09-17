import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";

function Banner() {
  const [movie, setMovie] = useState({});
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setMovie(res.data.results);
      });
  }, []);

  useEffect(() => {
    if (Array.isArray(movie) && movie.length > 0) {
      const interval = setInterval(() => {
        setCurrIndex((prevIndex) => (prevIndex + 1) % movie.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [movie]);

  const currMovie = movie[currIndex];
  const movieTitle = currMovie && (currMovie.title || currMovie.name);

  return (
    <div
      style={{
        backgroundImage: `url(${
          currMovie ? imageUrl + currMovie.backdrop_path : ""
        })`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movieTitle}</h1>
        <div className="banner-btn">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{currMovie ? currMovie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
