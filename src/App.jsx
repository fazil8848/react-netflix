// App.js
import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Banner from "./Components/Banner/Banner";
import Posters from "./Components/Posters/Posters";
import { API_KEY } from "./constants/constants";
import axios from "./axios";
import {
  Originals,
  Action,
  Comedy,
  Documentaries,
  Horror,
  Romance,
  Trending,
} from "./urls";

function App() {
  const [videoKey, setVideoKey] = useState('');
  const [clickedComponent, setClickedComponent] = useState('');

  const playHandler = (id, title) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        let key = res.data.results.length > 0 ? res.data.results[0].key : '';
        setVideoKey(key);
        setClickedComponent(title); // Set the clicked component title
      })
      .catch((error) => {
        console.error(`Error fetching video for movie ID ${id}:`, error);
        setVideoKey('');
        setClickedComponent('');
      });
  }

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Posters title="Netflix Originals" url={Originals} playHandler={(id) => playHandler(id, "Netflix Originals")} videoKey={videoKey} clickedComponent={clickedComponent} />
      <Posters title="Trending" size url={Trending} playHandler={(id) => playHandler(id, "Trending")} videoKey={videoKey} clickedComponent={clickedComponent} />
      <Posters title="Action" size url={Action} playHandler={(id) => playHandler(id, "Action")} videoKey={videoKey} clickedComponent={clickedComponent} />
      <Posters title="Comedy" size url={Comedy} playHandler={(id) => playHandler(id, "Comedy")} videoKey={videoKey} clickedComponent={clickedComponent} />
      <Posters title="Romance" size url={Romance} playHandler={(id) => playHandler(id, "Romance")} videoKey={videoKey} clickedComponent={clickedComponent} />
      <Posters title="Horror" size url={Horror} playHandler={(id) => playHandler(id, "Horror")} videoKey={videoKey} clickedComponent={clickedComponent} />
      <Posters title="Documentaries" size url={Documentaries} playHandler={(id) => playHandler(id, "Documentaries")} videoKey={videoKey} clickedComponent={clickedComponent} />
    </div>
  );
}

export default App;
