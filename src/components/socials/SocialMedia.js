import React from "react";
import { AiFillGithub, AiFillInstagram} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function SocialMedia() {

  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a 
          href="https://github.com/natoraymond"
          target="_blank"
          rel="nnamdi noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/nnadi-nnamdi-raymond-972abb234/"
          target="_blank"
          rel="namdinnadi noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>

      <li className="social-icons">
        <a
          href="https://www.facebook.com/nnamdi.raymond.1/"
          target="_blank"
          rel="namdinnadi noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaFacebook className="social-icon" />
        </a>
      </li>

      
      <li className="social-icons">
        <a
          href="https://www.instagram.com/raymond_nnamdi/?hl=en"
          target="_blank"
          rel="nnamdinnadi noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:nnamdi.raymondoct@gmail.com"
          target="_blank"
          rel="nnamdinnadi noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
