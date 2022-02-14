import sidewalk from "../../font/sidewalk.png";
import keypop from "../../font/keypop.png";
import discourse from "../../font/discourse.png";
import "./projects.css";
import { useInView } from "react-intersection-observer";
function Projects() {
  const { ref, inView, entry } = useInView({
    rootMargin: "-200px",
    threshold: 0,
    triggerOnce: true,
  });
  let style = inView ? "projects-container2" : "projects-container";
  return (
    <div className={style} ref={ref}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex" }}>
          <hr
            style={{
              transform: "rotate(90deg)",

              height: "320px",
              marginBottom: "-400px",
              marginTop: "-132px",
              marginRight: "170px",
            }}
          />
          <div
            style={{
              color: "white ",
              display: "flex",
              justifyContent: "flex-end",
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
              02.{" "}
            </span>{" "}
            Projects
          </div>
        </div>
        {/* --------------------------SIDEWALK SURFERS---------------------------------- */}
        <div className="project-container2">
          <a
            href="https://sidewalk-surfers.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay2">
              <img
                src={sidewalk}
                className="proj-image"
                alt="sidewalk-surfers"
              ></img>
            </div>
          </a>
          <div className="descrip-container2">
            <div className="proj-title2">
              <span className="featured2">Featured Project</span>
              <div>Sidewalk Surfers</div>
            </div>
            <div className="proj-descript2">
              <div className="descript-content">
                A social media application inspired by Instagram that also
                utilizes the Google Maps API. Skaters can highlight their
                favorite skate spots in the LA area as well as post photos and
                videos of the tricks they landed there!
              </div>
            </div>
            <div className="tech">
              <div>
                <span className="tech-list2">React</span>
                <span className="tech-list2">Flask</span>
                <span className="tech-list2">S3</span>
                <span className="tech-list2">Google Maps API</span>
                <span className="tech-list2">Heroku</span>
              </div>
              <div className="proj-links">
                <a
                  href="https://sidewalk-surfers.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-external-link-alt fa-2x"></i>
                </a>
                <a
                  href="https://github.com/owiwamasa/sidewalk-surfer-proj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github-alt fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------DISCOURSE---------------------------------- */}
        <div className="project-container">
          <a
            href="https://discourse-live-chat.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay2">
              <img
                src={discourse}
                className="proj-image"
                alt="sidewalk-surfers"
              ></img>
            </div>
          </a>
          <div className="descrip-container">
            <div className="proj-title">
              <span className="featured">Featured Project</span>
              <div>Discourse</div>
            </div>
            <div className="proj-descript">
              <div className="descript-content2">
                A live chat application inspired by Discord built to gain more
                experience with the MERN stack and websockets using Socket.io.
                Users can create rooms to chat with friends or meet new people
                in real time!
              </div>
            </div>
            <div className="tech2">
              <div>
                <span
                  style={{
                    color: "#b9b2b5",
                    fontSize: "18px",
                    marginLeft: "420px",
                  }}
                >
                  React
                </span>
                <span className="tech-list">Express</span>
                <span className="tech-list">Socket.io</span>
                <span className="tech-list">MongoDB</span>
                <span className="tech-list">S3</span>
              </div>
              <div className="proj-links2">
                <a
                  href="https://discourse-live-chat.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-external-link-alt fa-2x"></i>
                </a>
                <a
                  href="https://github.com/conneru/live-chat-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github-alt fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------KEYPOP---------------------------------- */}
        <div className="project-container2">
          <a
            href="https://keypop.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="overlay2">
              <img
                src={keypop}
                className="proj-image"
                alt="sidewalk-surfers"
              ></img>
            </div>
          </a>
          <div className="descrip-container2">
            <div className="proj-title2">
              <span className="featured">Featured Project</span>
              <div>Keypop</div>
            </div>
            <div className="proj-descript2">
              <div className="descript-content">
                A clone of the popular used clothing marketplace Depop but for
                keyboard enthusiasts. Building mechanical keyboards as a hobby
                is growing fast and with so many reusable and rare parts a
                central marketplace is essential!
              </div>
            </div>
            <div className="tech">
              <div>
                <span
                  style={{
                    color: "#b9b2b5",
                    fontSize: "18px",
                    paddingLeft: "5px",
                  }}
                >
                  React
                </span>
                <span className="tech-list">Flask</span>
                <span className="tech-list">Styled Components</span>
                <span className="tech-list">Heroku</span>
              </div>
              <div className="proj-links">
                <a
                  href="https://keypop.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-external-link-alt fa-2x"></i>
                </a>
                <a
                  href="https://github.com/conneru/keypop-final "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github-alt fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
