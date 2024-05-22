import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
       
        <span>mayuri2112003@gmail.com</span>
        
        
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/mayuri-patil-92a111220">
          <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/MayuriPatil2810"> 
          <Gitub color="white" size={"3rem"} /></a>
          <a href="https://www.instagram.com/?hl=en">
          <Insta color="white" size={"3rem"} />
          </a>
          
          
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
