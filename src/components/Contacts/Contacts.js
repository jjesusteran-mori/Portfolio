import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_2y3i1qv";
    const templateID = "portfolio_temp";
    const myUserID = "user_A4iXqrmwXXTEuunEhvp0C";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description,
            },
            myUserID
        );
        r.target.reset();
    };

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs
            .send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage(
                    "Sent successfully! I'll contact you as soon as possible."
                );
            })
            .catch((err) => console.error(`Something went wrong ${err}`));
    };

    return (
        <div className="contacts-container">
            <div className="contacts-container__text">
                <h1>Contact Me</h1>
                <p>
                    please fill out the form and describe your project needs and
                    ill contact you as soon as possible.
                </p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="contact__contact-me container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="contacts__border">
                        <div className="contacts__input col-xs-12">
                            {/* name input */}
                            <input
                                className="form-control user-input"
                                type="text"
                                placeholder="Name"
                                name="name"
                                ref={register({
                                    required: "Please enter your name",
                                    maxLength: {
                                        value: 20,
                                        message:
                                            "Please enter a name with fewer than 20 characters",
                                    },
                                })}
                            />
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* phone input */}
                            <input
                                className="form-control user-input"
                                type="text"
                                placeholder="Phone Number"
                                name="phone"
                                ref={register({
                                    required: "Please add phone number",
                                })}
                            />
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            {/* email input */}
                            <input
                                className="form-control user-input"
                                type="email"
                                placeholder="Email"
                                name="email"
                                ref={register({
                                    required: "Please provide an email",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid Email",
                                    },
                                })}
                            />
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* subject input */}
                            <input
                                className="form-control user-input"
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                ref={register({
                                    required:
                                        "OOPS, you forgot to add the subject.",
                                })}
                            />
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                        <div className="contacts__description col-xs-12">
                            {/* descriotion */}
                            <textarea
                                id="description"
                                className="form-control user-input"
                                type="text"
                                placeholder="Please enter a briefy discription of your project..."
                                name="description"
                                ref={register({
                                    required:
                                        "Please describe your project needs...",
                                })}
                            ></textarea>
                            <span className="error-message">
                                {errors.description &&
                                    errors.description.message}
                            </span>
                            <button
                                className="btn-main-offer contact-btn"
                                type="submit"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
