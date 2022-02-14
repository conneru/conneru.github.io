import "./NavBar.css";
import under from "../../font/under2.png";
import resume from "../../font/Conner Underhill Resume.pdf";
const NavBar = () => {
  return (
    <nav>
      <div className="navBar">
        <div className="links">
          <p id="link1">
            <span style={{ color: "#ff0076" }}>01.</span>About
          </p>
          <p id="link2">
            {" "}
            <span style={{ color: "#ff0076" }}>02.</span>Skills
          </p>
          <p id="link3">
            {" "}
            <span style={{ color: "#ff0076" }}>03.</span>Projects
          </p>
        </div>
        <a href={resume} rel="noreferrer" target="_blank" id="resume">
          Resume
        </a>
      </div>
      <img alt="logo" src={under} id="logo" />
    </nav>
  );
};

export default NavBar;
