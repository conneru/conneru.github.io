import "../Portfolio/portfolio.css";
import image from "../../font/me.jpg";
import "./about.css";
import { useInView } from "react-intersection-observer";
function About() {
  const { ref, inView, entry } = useInView({
    // rootMargin: "-100px",
    threshold: 0,
    triggerOnce: true,
  });
  let style = inView ? "about-container2" : "about-container";
  return (
    <div className={style} ref={ref}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              color: "white ",
              display: "flex",
              fontFamily: "GT",
              fontSize: "40px",
              paddingBottom: "70px",
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
              01.{" "}
            </span>{" "}
            About me
          </div>
          <hr
            style={{
              transform: "rotate(90deg)",

              height: "320px",
              marginBottom: "-400px",
              marginTop: "-130px",
              marginLeft: "170px",
            }}
          />
        </div>

        <div
          id="about"
          style={{
            maxWidth: "400px",
            color: "#c4adb8",
            fontFamily: "GT-Light",
            fontSize: "24px",
            lineHeight: "200%",
            paddingRight: "100px",
            letterSpacing: "2.5px",
          }}
        >
          I'm a web developer born and raised in Raleigh, North Carolina. I love
          problem solving and creating inviting, responsive, and functional
          websites. I take pride in my flexability as a developer whether it's
          working solo in the back end or with a whole team of people in the
          front end I'm your guy!
          {/* Switching careers from a mundane Retail Pharmacy job; Web development
          brought out a whole new creativity in me! I've made apps using
          JavaScript, Python, React, Redux, and Flask along with many other
          packages and technologies! It's very rewarding making a functional,
          interactive, and responsive full-stack website from scratch but even
          the "boring" parts like hunting down and squashing bugs in my code
          satiates my craving for problem solving and learning! */}
        </div>
      </div>
      <div className="overlay">
        <img alt="me" src={image} id="me"></img>
        <div className="meBorder"></div>
      </div>
    </div>
  );
}

export default About;
