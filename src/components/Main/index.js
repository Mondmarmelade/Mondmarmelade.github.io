import React from "react";
import moon from "../../img/Moon.png";
import github from "../../img/GitHub.png";
import twitter from "../../img/Twitter.png";
import instagram from "../../img/Instagram.png";
import SocialBtn from "../SocialBtn";
import BmacBtn from "../bmacBtn/index";
import "./style.css";

function Main() {
  return (
    <div className="Main">
      <img src={moon} className="moon" alt="moon" />
      <div>
        <p>
          <span className="wave">👋</span>Mondmarmelade.
        </p>
        <div className="links">
          <SocialBtn url={"https://github.com/Mondmarmelade"} img={github} />
          <SocialBtn url={"https://twitter.com/MondmarmeIade"} img={twitter} />
          <SocialBtn
            url={"https://www.instagram.com/mondmarmelade/"}
            img={instagram}
          />
        </div>
          <BmacBtn />
      </div>
    </div>
  );
}

export default Main;
