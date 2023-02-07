import { useInView } from "react-intersection-observer";
import "./work.css";

function Work() {
  const { ref, inView, entry } = useInView({
    rootMargin: "-100px",
    threshold: 0,
    triggerOnce: true,
  });
  let style = inView ? "work-container2" : "work-container";
  return (
    <div className={style} ref={ref}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <hr
            style={{
              transform: "rotate(90deg)",

              height: "320px",
              marginBottom: "-400px",
              marginTop: "-132px",
              marginLeft: "190px",
            }}
          />
          <div
            style={{
              color: "white ",
              display: "flex",
              justifyContent: "flex-end",
              fontFamily: "GT",
              fontSize: "40px",
              paddingBottom: "70px",
              marginLeft: "170px",
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
            Work Experience
          </div>
        </div>

        <div
          //   id="about"
          style={{
            // maxWidth: "400px",
            color: "#c4adb8",
            fontFamily: "GT-Light",
            fontSize: "24px",
            lineHeight: "200%",
            // paddingRight: "100px",
            letterSpacing: "2.5px",
            // marginBottom: "500px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
              flexDirection: "column",
              //   alignItems: "flex-end",
              //   marginRight: "-100px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "30px" }}>Envestnet, Inc.</span>
                <span style={{ color: "#ff0076", fontSize: "22px" }}>
                  Developer Evangelist & Product Manager
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  //   marginRight: "-100px",
                }}
              >
                <span style={{ fontSize: "20px" }}>Raleigh,NC</span>
                <span style={{ fontSize: "20px" }}>April 2022 - Present</span>
              </div>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                lineHeight: "150%",
                flexDirection: "column",
              }}
            >
              <span>
                <span style={{ color: "#ff0076" }}>➢</span> Corresponded with
                partnered firms acting as a point of contact for questions or
                concerns with any of the 700+ REST API routes provided
              </span>
              <br />
              <span>
                <span style={{ color: "#ff0076" }}>➢</span> Developed multiple
                customer-facing CodePen pages demonstrating proper workflows
                using REST APIs written using JavaScript, HTML, and CSS
              </span>
              <br />
              <span>
                <span style={{ color: "#ff0076" }}>➢</span> Developed an
                internal tool to automate the process of generating text files
                containing REST API routes written in Java
              </span>
              <br />
              <span>
                <span style={{ color: "#ff0076" }}>➢</span> Authored Postman
                collections, code samples, and general documentation for
                multiple REST API products located on a centralized developer
                portal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
