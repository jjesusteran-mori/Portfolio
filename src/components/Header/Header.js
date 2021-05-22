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
                            "React",
                            "Node",
                            "Express",
                        ]}
                        typeSpeed={80}
                        backSpeed={40}
                        loop
                    />
                    <a href="" className="btn-main-offer">
                        Contact me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
