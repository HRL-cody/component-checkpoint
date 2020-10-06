import React from "react";
import ProfilPhoto from "./components/profile/ProfilPhoto";
import Name from "./components/profile/Hamouda Mdemagh";
import Adress from "./components/profile/aderss";
import Nav from "./components/profile/navbr";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />

      <br></br>
      <div className="body">
        <ProfilPhoto />
        <br></br>

        <Name />
        <br></br>

        <Adress />
        <br></br>
        <backGroundImg />
      </div>
    </div>
  );
}

export default App;
