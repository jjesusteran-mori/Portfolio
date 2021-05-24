import React from "react";
import Typed from "react-typed";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <div className="header-wraper">
                <div className="main-info">
                    <h1>Web Development</h1>
                    <Typed
                        className="typed-text"
                        strings={[
                            "HTML",
                            "CSS",
                            "Javascript",
                            "MongoDB",
                            "Express",
                            "ReactJS",
                            "NodeJS",
                        ]}
                        typeSpeed={80}
                        backSpeed={40}
                        loop
                    />
                    <button className="btn-main-offer">Contact me</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
