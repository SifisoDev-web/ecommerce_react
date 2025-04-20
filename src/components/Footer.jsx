import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
  <div className="d-flex align-items-center justify-content-center pb-5">
    <div className="col-md-6">
      <p className="mb-3 mb-md-0">
      Hand-coded by{" "}
        <a
          href="https://swwebsolutions.com"
          className="text-decoration-underline"
          style={{ color: '#ff6600' }}
          target="_blank"
          rel="noreferrer"
        >
          SW_Web_Solutions
        </a>
      </p>

      {/* Social Icons */}
      <div>
        <a
          href="https://github.com/sw_web_solutions"
          className="me-3"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#ff6600', fontSize: '1.5rem' }}
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/sw_web_solutions"
          className="me-3"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#ff6600', fontSize: '1.5rem' }}
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://youtube.com/@sw_web_solutions"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#ff6600', fontSize: '1.5rem' }}
        >
          <i className="fa fa-youtube"></i>
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
