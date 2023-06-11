import React from "react";
import BMAC from "../../img/bmc-button.png"
import "./style.css";

function BmacBtn() {
    return (
        //<button className="bmac-btn" onClick={() => window.open("https://www.buymeacoffee.com/Mondmarmelade", "_blank")}>
            <img src={BMAC} className="bmac-img" alt="buymeacoffee button" onClick={() => window.open("https://www.buymeacoffee.com/Mondmarmelade", "_blank")}/>
        //</button>
    );
  }
  
export default BmacBtn;