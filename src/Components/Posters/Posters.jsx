// Posters.js
import React, { useEffect, useState } from "react";
import "./Posters.css";
import axios from "../../axios";
import { imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";

function Posters(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setMovies(res.data.results);
    });
  }, [props.url]);

  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            className={props.size ? "small_posters" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
            key={obj.id}
            onClick={() => {
              props.playHandler(obj.id);
            }}
          />
        ))}
      </div>
      {props.clickedComponent === props.title && props.videoKey && <YouTube videoId={props.videoKey} opts={opts} />}
    </div>
  );
}

export default Posters;