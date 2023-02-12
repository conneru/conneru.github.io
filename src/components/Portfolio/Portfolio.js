import "./portfolio.css";
import Intro from "../Into";
import About from "../About/about";
import Projects from "../Projects/projects";
import Skills from "../Skills/skills";
import Contact from "../Contact/Contact";

import under from "../../font/under2.png";
import resume from "../../font/Conner Underhill Resume.pdf";
import { useRef } from "react";
import Work from "../Work/work";

function Portfolio() {
  let skills = useRef(null);
  let about = useRef(null);
  let projects = useRef(null);
  let contact = useRef(null);
  let work = useRef(null);
  function scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav>
        <div className="navBar">
          <div className="links">
            <p id="link1" onClick={() => scroll(about)}>
              <span style={{ color: "#ff0076", marginRight: "5px" }}>01.</span>
              About
            </p>
            <p id="link5" onClick={() => scroll(work)}>
              <span style={{ color: "#ff0076", marginRight: "5px" }}>02.</span>
              Work
            </p>
            <p id="link2" onClick={() => scroll(projects)}>
              {" "}
              <span style={{ color: "#ff0076", marginRight: "5px" }}>03.</span>
              Projects
            </p>
            <p id="link3" onClick={() => scroll(skills)}>
              {" "}
              <span style={{ color: "#ff0076", marginRight: "5px" }}>04.</span>
              Skills
            </p>
            <p id="link4" onClick={() => scroll(contact)}>
              {" "}
              <span
                style={{
                  color: "#ff0076",
                  marginRight: "5px",
                }}
              >
                05.
              </span>
              Contact
            </p>
            <a href={resume} rel="noreferrer" target="_blank" id="resume">
              Resume
            </a>
          </div>
        </div>
        <img alt="logo" src={under} id="logo" />
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
        // className="portfolio-wrapper"
      >
        <div
          style={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Intro />
          <section ref={about}>
            <About />
          </section>
          <section ref={work}>
            <Work />
          </section>
          <section
            ref={projects}
            style={{
              height: "1200px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Projects />
          </section>

          <section ref={skills}>
            <Skills />
          </section>
          <section ref={contact}>
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
