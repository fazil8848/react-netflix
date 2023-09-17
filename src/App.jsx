// App.js
import React from "react";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Banner from "./Components/Banner/Banner";
import Posters from "./Components/Posters/Posters";

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
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Posters title="Netflix Originals" url={Originals} />
      <Posters title="Trending" size url={Trending} />
      <Posters title="Action" size url={Action} />
      <Posters title="Comedy" size url={Comedy} />
      <Posters title="Romance" size url={Romance} />
      <Posters title="Horror" size url={Horror} />
      <Posters title="Documentaries" size url={Documentaries} />
    </div>
  );
}

export default App;
