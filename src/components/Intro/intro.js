import qrcode from "../../font/qr-code.png";
import me from "../../font/me.jpg";
import resume from "../../font/resume.png";
import ezLogo from "../../font/EZReads_Logo.png";
import recLogo from "../../font/RecitalLogo.png";
import keypop from "../../font/keypop.png";
import sidewalk from "../../font/sidewalk.png";
import recital from "../../font/recital.png";
import ezreads from "../../font/ezreads.png";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./intro.css";
function IntroSection() {
  const el = useRef(null);
  const typed = useRef(null);
  const skills = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Front-End Developer.",
        "Back-End Developer.",
        "Software Engineer.",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      smartBackspace: true,
    };
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  //   const typed = new Typed(".element", options);
  return (
    <div id="homepage">
      <div id="introme">
        <img id="qrcode" src={qrcode} alt="qrcode"></img>
        <div id="name" onClick={() => skills.scrollIntoView()}>
          Conner Underhill.
        </div>
        <div id="type">
          <span ref={el} style={{ whiteSpace: "pre" }}></span>
        </div>
        {/* <div>Software Engineer.</div> */}
        {/* <button>Learn More</button> */}
        <div id="links">
          <div
            style={{
              display: "flex",
              marginTop: "150px",
              width: "350px",
              justifyContent: "space-between",
            }}
          >
            <div className="personal">
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vRyZIYZHsEGdSKNcEQCPmKnLs2qJi96f9x2MNE_g6Sec-CVW9We2gBj8MtNez3XzqaMl0RwwED1hqmS/pub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="resume"
                  src={resume}
                  style={{
                    height: "32px",
                    // marginRight: "20px",
                    color: "#4d4d4d",
                  }}
                />
              </a>
              <p>Resume</p>
            </div>
            <div className="personal">
              <a
                href="https://www.linkedin.com/in/conner-underhill-64b3921a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="devicon-linkedin-plain "
                  style={{
                    fontSize: "30px",
                    // paddingRight: "20px",
                    color: "#4d4d4d",
                  }}
                ></i>
              </a>
              <p>LinkedIn</p>
            </div>
            <div className="personal">
              <a
                href="https://github.com/conneru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="devicon-github-original "
                  style={{ fontSize: "30px", color: "#4d4d4d" }}
                >
                  {" "}
                </i>
              </a>
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <p style={{ fontSize: "32px" }}>About.</p>
        <div id="bio">
          <img alt="me" src={me} id="me" />
          <div id="descript">
            Switching careers from a mundane Retail Pharmacy job; Web
            development brought out a whole new creativity in me! I've made apps
            using JavaScript, Python, React, Redux, and Flask along with many
            other packages and technologies! It's very rewarding making a
            functional, interactive, and responsive full-stack website from
            scratch but even the "boring" parts like hunting down and squashing
            bugs in my code satiates my craving for problem solving and
            learning!
          </div>
        </div>
      </div>
      <div id="skills" ref={skills}>
        <p style={{ fontSize: "32px" }}> Skills.</p>
        <div id="skillItems">
          <div className="iconItem">
            <i class="devicon-javascript-plain icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="iconItem">
            <i class="devicon-python-plain icon"></i>
            <p>Python</p>
          </div>
          <div className="iconItem">
            <i class="devicon-react-original icon"></i>
            <p>React.js</p>
          </div>
          <div className="iconItem">
            <i class="devicon-redux-original icon"></i>
            <p>Redux.js</p>
          </div>
          <div className="iconItem">
            <i class="devicon-nodejs-plain icon"></i>
            <p>Node.js</p>
          </div>
          <div className="iconItem">
            <i class="devicon-flask-original icon"></i>
            <p>Flask</p>
          </div>
          <div className="iconItem">
            <i class="devicon-postgresql-plain icon"></i>
            <p>PostgreSQL</p>
          </div>
          <div className="iconItem">
            <i class="devicon-sqlalchemy-plain icon"></i>
            <p>SQLAlchemy</p>
          </div>
          <div className="iconItem">
            <i class="devicon-express-original icon"></i>
            <p>Express.js</p>
          </div>
          <div className="iconItem">
            <i class="devicon-sequelize-plain icon"></i>
            <p>Sequelize</p>
          </div>
          <div className="iconItem">
            <i class="devicon-html5-plain icon"></i>
            <p>HTML5</p>
          </div>
          <div className="iconItem">
            <i class="devicon-css3-plain icon"></i>
            <p>CSS3</p>
          </div>
          <div className="iconItem">
            <i class="devicon-git-plain icon"></i>
            <p>Git</p>
          </div>
          <div className="iconItem">
            <i class="devicon-github-plain icon"></i>
            <p>GitHub</p>
          </div>
          <div className="iconItem">
            <i class="devicon-docker-plain icon"></i>
            <p>Docker</p>
          </div>
          <div className="iconItem">
            <i class="devicon-heroku-original icon"></i>
            <p>Heroku</p>
          </div>
        </div>
      </div>
      <div id="projects">
        <p style={{ fontSize: "32px" }}>Projects.</p>
        <div id="projectItems">
          <div className="project">
            <span
              style={{
                fontFamily: "GT",
                fontSize: "32px",
                color: "#4ca4b0",
              }}
            >
              Keypop
            </span>
            <div className="links">
              <a
                href="https://keypop.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              ||
              <a
                href="https://github.com/conneru/keypop-final "
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
            <img alt="keypop" src={keypop} className="websitePrev" />
            <span>
              A marketplace for mechanical keyboard enthusiaists to buy and sell
              keyboards
            </span>
          </div>

          <div className="project">
            <img
              alt="sidewalk"
              src="https://i.imgur.com/2y2FmRJ.png"
              style={{ width: "100px" }}
            ></img>
            <div className="links">
              <a
                href="https://keypop.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              ||
              <a
                href="https://github.com/conneru/keypop-final "
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
            <img alt="sidewalk" src={sidewalk} className="websitePrev" />
            <p>Sidewalk Surfers</p>
            <span>
              A place for skateboarders to post their favorite spots as well as
              post videos/photos
            </span>
          </div>

          <div className="project">
            <img alt="recital" src={recLogo} className="projLogo"></img>
            <img alt="recital" src={recital} className="websitePrev" />
            <span style={{ margin: "0px" }}>
              Where film lovers can post quotes from their favorite movie or tv
              show
            </span>
          </div>

          <div className="project">
            <img alt="ezreads" src={ezLogo} className="projLogo"></img>
            <img alt="ezreads" src={ezreads} className="websitePrev" />
            <span>
              {" "}
              A place for gamers to keep track of the games they’re playing or
              want to play as well as review them
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
