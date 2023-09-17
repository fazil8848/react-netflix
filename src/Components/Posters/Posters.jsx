// Posters.js
import React, { useEffect, useState } from "react";
import "./Posters.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";

function Posters(props) {
  const [videoKey, setVideoKey] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setMovies(res.data.results);
    });
  }, [props.url]);

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const playHandler = (id) => {
    setVideoKey("");
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        let key = res.data.results.length > 0 ? res.data.results[0].key : "";
        setVideoKey(key);
      })
      .catch((error) => {
        console.error(`Error fetching video for movie ID ${id}:`, error);
      });
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
              playHandler(obj.id);
            }}
          />
        ))}
      </div>
      {videoKey && <YouTube videoId={videoKey} opts={opts} />}
    </div>
  );
}

export default Posters;
