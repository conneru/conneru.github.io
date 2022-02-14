import "../Portfolio/portfolio.css";
function Intro() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: "1.5%",
      }}
    >
      <div style={{ position: "relative" }}>
        <h2
          style={{
            color: "#ff0076",
            fontSize: "25px",
            position: "relative",
            left: "10px",
          }}
          className="name"
        >
          Hi, my name is
        </h2>

        <h1
          style={{
            fontFamily: "GT",
            position: "relative",
            color: "#fff0f7",
            fontWeight: "200",
            letterSpacing: "8px",
            margin: "0px",
            bottom: "20px",
            fontSize: "70px",
          }}
          className="name2"
        >
          Conner Underhill.
        </h1>
        <h1
          style={{
            color: "#c4adb8",
            fontFamily: "GT",
            letterSpacing: "10px",
            fontSize: "70px",
            position: "relative",
            bottom: "80px",
            left: "17%",
          }}
          className="name3"
        >
          Web Developer.
        </h1>
      </div>
    </div>
  );
}

export default Intro;
