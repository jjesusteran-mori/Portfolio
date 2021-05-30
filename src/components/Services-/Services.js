import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faDesktop } from "@fortawesome/free-solid-svg-icons";

import "./Services.css";

const Services = () => {
    return (
        <div className="services" id='services'>
            <h1 className="py-3">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faDesktop}
                                />
                            </div>
                            <h3>Web Design</h3>
                            <p>
                                Interaction of preparation, conceptualizing, and
                                organizing content layout. Creation and support
                                of websites
                            </p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faFileCode}
                                />
                            </div>
                            <h3>Web Development</h3>
                            <p>
                                Resposible for planning, coding, and modifying
                                websites. to make outwardly engaging sites that
                                feauter easy to use design and clear navigation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
