import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>
        <a
          href="https://github.com/mikadosham/diffread/issues/new"
          className="footer-link"
        >
          Found a bug
        </a>{" "}
        or{" "}
        <a href="mailto:me@adamkhomsi.ca" className="footer-link">
          have feedback
        </a>
        ?
      </p>
      <p style={{ fontSize: "9px" }}>A Khomsi Product</p>
    </footer>
  );
}

export default Footer;
