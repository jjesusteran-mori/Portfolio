import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-nav">
                <ul className="footer__navbar-nav" id="footer-navbar__nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-me">
                            About me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">
                            Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">
                            Experience
                        </a>
                    </li>{" "}
                    <li className="nav-item">
                        <a className="nav-link" href="#porfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact-me">
                            Contact me
                        </a>
                    </li>
                    <li className="footer__nav-item">
                        <a
                            rel="noreferrer"
                            class="nav-link"
                            href="https://www.linkedin.com/in/jesus-delgado-teran-9a1249186/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li className="footer__nav-item">
                        <a
                            rel="noreferrer"
                            class="nav-link"
                            href="https://github.com/jjesusteran-mori"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </li>
                    <li className="footer__nav-item">
                        <a
                            class="nav-link"
                            href="utils/Web Developer Resume.pdf"
                            target="_blank"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__copyright">
                <p class="copyright">© 2020 J Jesus Delgado Teran.</p>
            </div>
        </div>
    );
};

export default Footer;
