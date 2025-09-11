import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer text-light">
      <div className="container py-5">
        <div className="row text-center text-md-start">
          {/* Company */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">🚀 Monster Technology</h5>
            <p className="footer-text">Crafting digital experiences with creativity and precision.</p>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h6 className="footer-title">Subscribe</h6>
            <form className="footer-form d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
              />
              <button type="submit" className="btn btn-primary">Join</button>
            </form>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-4 text-md-end">
            <h6 className="footer-title">Follow Us</h6>
            <div className="footer-icons">
              <a href="https://facebook.com" className="icon"><i className="bi bi-facebook"></i></a>
              <a href="https://twitter.com" className="icon"><i className="bi bi-twitter"></i></a>
              <a href="https://linkedin.com" className="icon"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com" className="icon"><i className="bi bi-github"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center small mt-3">
          &copy; {new Date().getFullYear()} Monster Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
