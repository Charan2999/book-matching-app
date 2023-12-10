import React from "react";
import "../Contact/Contact.css";
import contactme from "../../assets/contactme.svg";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-content">
          <div className="profile-image">
            <img src={contactme} alt="Profile" />
          </div>
          <div className="contact-details">
            <h1>Contact Me</h1>
            <p>Feel free to reach out to me through the following messengers:</p>

            <div className="social-links">
              <p>
                LinkedIn:
                <a
                  href="https://www.linkedin.com/in/charan-m-464ab522a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  charan-m-464ab522a
                </a>
              </p>
              <p>
                Github:
                <a
                  href="https://github.com/Charan2999/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Charan2999
                </a>
              </p>
              <p>
                Gmail:
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                  title="Please copy the Ninja ID first"
                >
                  mc862939@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
