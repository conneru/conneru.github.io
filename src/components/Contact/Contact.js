import { useInView } from "react-intersection-observer";
import "./Contact.css";
function Contact() {
  const { ref, inView, entry } = useInView({
    rootMargin: "-100px",
    threshold: 0,
    triggerOnce: true,
  });
  let style = inView ? "contact-container2" : "contact-container";
  return (
    <div className={style} ref={ref}>
      <div
        style={{
          color: "white ",
          display: "flex",
          justifyContent: "center",
          fontFamily: "GT",
          fontSize: "40px",
          paddingBottom: "20px",
        }}
      >
        <span
          style={{
            color: "#ff0076",
            fontFamily: "Monoid",
            fontSize: "30px",
            paddingTop: "8px",
            paddingRight: "5px",
            marginBottom: "50px",
          }}
        >
          05.{" "}
        </span>{" "}
        What's next?
      </div>

      <a
        href="mailto:underhillconner@gmail.com"
        style={{
          textDecoration: "none",
          color: "#ff0076",
        }}
      >
        <div className="contact-button">Contact me</div>
      </a>
      <div
        style={{
          color: "#c4adb8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "GT-Light",
          fontSize: "26px",
          marginBottom: "100px",
        }}
      >
        I'm actively looking for work so please don't hesitate to get in touch!
      </div>
    </div>
  );
}

export default Contact;
