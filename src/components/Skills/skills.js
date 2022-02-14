import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./skills.css";
function Skills({ isVisible }) {
  const { ref, inView, entry } = useInView({
    rootMargin: "-200px",
    threshold: 0,
    triggerOnce: true,
  });
  let style = inView ? "skill-container2" : "skill-container";
  return (
    <div className={style} ref={ref}>
      <div id="skills" style={{ display: "flex" }}>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              color: "white ",
              display: "flex",
              justifyContent: "flex-start",
              fontFamily: "GT",
              fontSize: "40px",
              paddingBottom: "40px",
            }}
          >
            <span
              style={{
                color: "#ff0076",
                fontFamily: "Monoid",
                fontSize: "30px",
                paddingTop: "8px",
                paddingRight: "5px",
              }}
            >
              03.{" "}
            </span>{" "}
            Skills
          </div>
          <hr
            style={{
              transform: "rotate(90deg)",

              height: "320px",
              marginBottom: "-50px",
              marginTop: "-130px",
              marginLeft: "170px",
            }}
          />
        </div>
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
          <div className="iconItem">
            <i class="devicon-mongodb-plain icon"></i>
            <p>MongoDB</p>
          </div>
          <div className="iconItem">
            <i class="devicon-socketio-original icon"></i>
            <p>Socket.io</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
