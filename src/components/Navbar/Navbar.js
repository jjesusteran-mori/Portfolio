import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <button
                id="navbar__toggler"
                className="navbar-toggler ms-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <FontAwesomeIcon icon={faEllipsisH} />
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ms-auto" id="navbar__nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            about me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Experience
                        </a>
                    </li>{" "}
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
