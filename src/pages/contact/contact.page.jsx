import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./contact.page.styles.scss";

const ContactPage = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const { name, email, msg } = userInput;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput({ ...userInput, [name]: value });
  };
  const toastifySuccess = () => {
    toast.success("Form sent!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const templateParams = {
      name: name,
      email: email,
      message: msg,
    };
    await emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setUserInput({
      name: "",
      email: "",
      msg: "",
    });
    toastifySuccess();
  };

  return (
    <div className="contact-container">
      <h1 className="box-shadow">Contact</h1>
      <div className="contact-content">
        <h2 className="contact-title">Wanna know more?</h2>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="group">
            <input
              className="form-input"
              name="name"
              onChange={handleChange}
              value={name}
              required
            />

            <label className="form-input-label">Full Name</label>
          </div>

          <div className="group">
            <input
              className="form-input"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />

            <label className="form-input-label">Email</label>
          </div>

          <div className="group">
            <textarea
              className="form-input"
              name="msg"
              onChange={handleChange}
              value={msg}
              required
            />

            <label className="form-input-label">
              What would you like to say
            </label>
          </div>

          <input type="submit" className="button" value="Submit" />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactPage;
