import React from "react";
import "./Portfolio.css";
import FoodConnect from "../../utils/images/FoodConnect4U.png";
import Grannies from "../../utils/images/grannies.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-3">Portfolio</h1>
                <div className="image-box-wrapper">
                    <div className="portfolio-image-box">
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
                    <div className="portfolio-image-box">
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
                    <div className="portfolio-image-box">
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
                    <div className="portfolio-image-box">
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
        </div>
    );
};

export default Portfolio;
