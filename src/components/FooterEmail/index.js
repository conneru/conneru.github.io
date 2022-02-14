import React from "react";

import "./Footer.css";

const EmailFooter = () => {
  return (
    <div className="email-footer">
      <div className="footer-email">
        <a
          href="mailto:underhillconner@gmail.com"
          style={{
            transform: "rotate(90deg)",
            fontSize: "22px",
            textDecoration: "none",
          }}
        >
          underhillconner@gmail.com
        </a>
      </div>
    </div>
  );
};

export default EmailFooter;
