import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kareem.m.ali.gad@gmail.com</span>
        <div className="f-icons">
          <a target="_blank" href="https://www.facebook.com/kareemmMohsen99/"> <Facebook color="white" size={"3rem"} /></a>
          <a target="_blank" href="https://www.instagram.com/kareemmoohsen/"> <Insta color="white" size={"3rem"} /></a>
          <a target="_blank" href="https://github.com/KareemMohsenAli?tab=repositories"> <Gitub color="white" size={"3rem"} /></a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
