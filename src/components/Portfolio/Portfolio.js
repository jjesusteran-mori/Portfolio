import React from "react";
import "./Portfolio.css";
import FoodConnect from "../../utils/images/FoodConnect4U.png";
import Grannies from "../../utils/images/grannies.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
    const openPopupboxFoodConnect = () => {
        const content = (
            <>
                <img
                    className="portfolio-image-popupbox"
                    src={FoodConnect}
                    alt="Food Connect..."
                />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos illo quo asperiores assumenda molestiae,
                    accusamus ad facere expedita officiis dolore architecto
                    harum, quam, laboriosam ex magni placeat nam quia
                    reprehenderit!
                </p>
                <div className="portfolio-link-popupbox">
                    <a
                        className="hyper-link"
                        rel="noreferrer"
                        href="https://tinyurl.com/y4p9e6d9"
                        target="_blank"
                    >
                        Website
                    </a>
                    <a
                        className="hyper-link"
                        rel="noreferrer"
                        href="https://tinyurl.com/y3yv4vuc"
                        target="_blank"
                    >
                        GitHub
                    </a>
                </div>
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigFoodConnect = {
        titleBar: {
            enable: true,
            text: "FoodConnect",
        },
        fadeIn: true,
        fadeInSpeed: 2000,
    };

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-3">Portfolio</h1>
                <div className="image-box-wrapper row">
                    <div
                        className="portfolio-image-box col-lg-3 col-md-4 cd-sm-12"
                        onClick={openPopupboxFoodConnect}
                    >
                        <img
                            className="portfolio-image"
                            src={FoodConnect}
                            alt=""
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                    {/*  */}
                    <div className="portfolio-image-box col-lg-3 col-md-4 cd-sm-12">
                        <img
                            className="portfolio-image"
                            src={Grannies}
                            alt=""
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                    {/*  */}
                    <div className="portfolio-image-box col-lg-3 col-md-4 cd-sm-12">
                        <img
                            className="portfolio-image"
                            src={Grannies}
                            alt=""
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                    {/*  */}
                    <div className="portfolio-image-box col-lg-3 col-md-4 cd-sm-12">
                        <img
                            className="portfolio-image"
                            src={FoodConnect}
                            alt=""
                        />
                        <div className="overflow"></div>
                        <FontAwesomeIcon
                            className="portfolio-icon"
                            icon={faSearchPlus}
                        />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigFoodConnect} />
        </div>
    );
};

export default Portfolio;
