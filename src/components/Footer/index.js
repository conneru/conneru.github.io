import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="entire-footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://github.com/conneru" target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-2x" />
          </a>
          &nbsp;
          <a
            href="https://www.linkedin.com/in/conner-underhill-64b3921a2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in fa-2x" />
          </a>
          &nbsp;
          <hr
            style={{
              color: "#fff0f7",
              height: "118px",
            }}
          ></hr>
        </div>
      </div>
    </div>
  );
};

export default Footer;
