import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section-title">
        Get in <span>Touch</span>
      </h2>
      <div className="contact-container container grid">
        <div className="contact-data">
          <h3 className="contact-title">Don't be shy !</h3>
          <p className="contact-description">
            Feel free to get in touch with me.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaEnvelopeOpen className="info-icon" />
              <div>
                <span className="info-title">Mail me</span>
                <h4 className="info-description">xxxxx@gmail.com</h4>
              </div>
            </div>
            <div className="info-item">
              <FaPhoneSquareAlt className="info-icon" />
              <div>
                <span className="info-title">Call me</span>
                <h4 className="info-description">xxxxx99</h4>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <Link to="https://facebook.com" className="contact-social-links">
              <FaFacebookF />
            </Link>
            <Link to="https://twitter.com" className="contact-social-links">
              <FaTwitter />
            </Link>
            <Link to="https://youtube.com" className="contact-social-links">
              <FaYoutube />
            </Link>
            <Link to="https://dribble.com" className="contact-social-links">
              <FaDribbble />
            </Link>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-input-group">
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
              />
            </div>
            <div className="form-input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control"
              />
            </div>
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-input-div">
            <textarea
              placeholder="Your Message"
              className="form-control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send a Message
            <span className="button-icon contact-button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
