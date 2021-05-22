import React from "react";
import author from "../../utils/images/me.png";

import "./AboutMe.css";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                        <img className="profile-img" src={author} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <div className="about-me__container">
                        <h1 className="about-heading">About Me</h1>
                        <p>
                            Hello there! My name is Jesus, and for the past year
                            and a half, I've been focused on building and
                            optimizing the performance of user-centric websites.
                            Proficient at combining technical, analytical, and
                            problem-solving skills to create dynamic, high-speed
                            websites, apps, and platforms that help businesses
                            gain a competitive advantage and boost income.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
