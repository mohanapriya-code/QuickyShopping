import React from "react";
import "./Contact.css";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactcontainer">
        <h1>Contact Us</h1>

        <div className="contactbox">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-form"
          >
            <input
              type="hidden"
              name="access_key"
              value="0fee022a-f65c-448a-b83f-12380b2b345f"
            />

            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Enter Message!"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="listed">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="contacticons" />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="contacticons" />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="contacticons" />
          </a>
          <a
            href="mailto:support@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineMailOutline className="contacticons" />
          </a>
          <a href="tel:+1234567890">
            <FaPhone className="contacticons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
