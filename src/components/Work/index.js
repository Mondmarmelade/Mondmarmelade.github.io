import React from "react";
import Project from "../Project";
import Bergflix from "../../img/Bergflix.png";
import "./style.css";

function Work() {
  return (
    <div className="Work">
      <p className="title">Work</p>
      <Project
        title={"Bergflix"}
        description={
          "Bergflix is a community-based streaming service that is all about creating movies from video games. "
        }
        img={Bergflix}
        url={"https://bergflix.de/"}
      />
    </div>
  );
}

export default Work;
