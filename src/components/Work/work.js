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
                <span style={{ color: "#ff0076" }}>➢</span> Created and
                delivered technical{" "}
                <span style={{ color: "#ff0076" }}>documentation</span> to
                assist developers in using
                <span style={{ color: "#ff0076" }}> APIs</span> and integrating
                products into their workflows.
              </span>
              <br />
              <span>
                <span style={{ color: "#ff0076" }}>➢</span>Managed relationships
                with partnered firms and{" "}
                <span style={{ color: "#ff0076" }}>API</span> customers,
                providing support and ensuring successful integration of
                Envestnet's <span style={{ color: "#ff0076" }}>APIs</span>.
              </span>
              <br />
              <span>
                <span style={{ color: "#ff0076" }}>➢</span> Developed{" "}
                <span style={{ color: "#ff0076" }}>sample code</span> and{" "}
                <span style={{ color: "#ff0076" }}>demos</span> to showcase
                proper implementation of Envestnet’s technology and{" "}
                <span style={{ color: "#ff0076" }}>APIs</span>.
              </span>
              <br />
              <span>
                <span style={{ color: "#ff0076" }}>➢</span> Worked closely with
                engineering teams to ensure timely and high-quality delivery of
                new <span style={{ color: "#ff0076" }}>API documentation</span>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
