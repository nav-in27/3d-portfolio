import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";

import HoverLinks from "./HoverLinks";

import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/nav-in27" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://linkedin.com/in/naveen-r-19a160326"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="/resume.pdf"
        target="_blank"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
