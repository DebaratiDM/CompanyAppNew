/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


export const Navbar = () => {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          {/* <h1 className="logo mr-auto">
            <a href="index.html">
              <img className="hello" src="./assets/img/logo.png" alt="logo" />
            </a>
          </h1> */}

          <a href="index.html" className="logo mr-auto">
            <img
              src="assets/img/logo.png"
              alt="logo sm"
              className="img-fluid"
            />
          </a>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="index.html">Home</a>
              </li>

              <li className="drop-down">
                <a href="#">About</a>
                <ul>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="testimonials.html">Testimonials</a>
                  </li>
                  <li className="drop-down">
                    <a href="#">Deep Drop Down</a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-social-links">
            <a href="#" className="twitter">
              <i className="icofont-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="icofont-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="icofont-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="icofont-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
