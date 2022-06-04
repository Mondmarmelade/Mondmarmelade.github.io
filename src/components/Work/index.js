import React from "react";
import Project from "../Project";
import Bergflix from "../../img/Bergflix.png";
import Kahboom from "../../img/Kahboom.png";
import WikiToWiki from "../../img/WikiToWiki.png";
import "./style.css";

function Work() {
  return (
    <div className="Work">
      <Project
        title={"Bergflix"}
        description={
          "Bergflix is a community-based streaming service that is all about creating movies from video games. "
        }
        img={Bergflix}
        url={"https://bergflix.de/"}
      />
      <Project
        title={"Kahboom!"}
        description={"This is a simple-to-use tool to cheat in Kahoot!"}
        img={Kahboom}
        url={"https://github.com/Mondmarmelade/Kahboom"}
      />
      <Project
        title={"WikiToWiki"}
        description={
          "WikiToWiki is a simple browser extension that lets you play the Wikipedia game where you have to get from one article to another in less than 1 minute."
        }
        img={WikiToWiki}
        url={"https://github.com/StandartCoder/WikiToWiki"}
      />
    </div>
  );
}

export default Work;
