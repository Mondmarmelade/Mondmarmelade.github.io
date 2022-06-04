import React from "react";
import "./style.css";

function SocialBtn({ url, img }) {
  return (
    <button className="icon" onClick={() => window.open(url, "_blank")}>
      <img src={img} className="icon-img" alt="github" />
    </button>
  );
}

export default SocialBtn;
