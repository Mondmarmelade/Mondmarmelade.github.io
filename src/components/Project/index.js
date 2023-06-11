import React from "react";
import "./style.css";

function Project({ title, description, img, url }) {
  return (
    <div className="project" onClick={() => window.open(url, "_blank")}>
      <img className="projectImg" src={img} alt="" />
      <div className="infos">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default Project;
