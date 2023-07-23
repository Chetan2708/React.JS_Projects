import { FaEnvelopeOpen, FaPhoneSquareAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { FiSend } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ickeghm",
        "template_7zs4vcc",
        form.current,
        "VWYYnnIG9YJLEVxE1"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Some Error occurred! Try again");
        }
      );
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0%",
        opacity: 1,
      },
      transition: { delay: 0.3 },
    },
  };
  return (
    <section className="contact section">
      <h2 className="section-title">
        Hire <span>ME</span>
      </h2>
      <div className="contact-container container grid">
        <div className="contact-data">
          <motion.h3 {...animations.h1} className="contact-title">
            {`Let's Build Something Together!`}
          </motion.h3>
          <p className="contact-description">
            Thank you for visiting my portfolio website! Please fill out the
            contact form if you have any questions or would like to make an
            inquiry. I will react as soon as possible and look forward to
            speaking with you. {`Let's`} collaborate to make something
            spectacular!
          </p>
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelopeOpen className="info-icon" />
              <span className="info-title">
                <a href="mailto:chetangupta12344@gmail.com" className="mail">
                  Mail me
                </a>
              </span>
              <h4 className="info-desc">
                <a href="mailto:chetangupta12344@gmail.com" className="mail">
                  chetangupta12344@gmail.com
                </a>
              </h4>
            </div>
            <div className="info-item">
              <FaPhoneSquareAlt className="info-icon" />
              <span className="info-title">
                <a href="tel:+917006596750" className="mail">
                  Call me
                </a>
              </span>
              <h4 className="info-desc">
                <a href="tel:+917006596750" className="mail">
                  +91 7006596750
                </a>
              </h4>
            </div>
          </div>
          <div className="contact-socials">
            <SocialIcon
              url="https://www.facebook.com/profile.php?id=100012327823451"
              target="_blank"
            />
            <SocialIcon url="https://github.com/Chetan2708" target="_blank" />
            <SocialIcon
              url="https://www.instagram.com/_chetan2708/"
              target="_blank"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/chetan-gupta2708/"
              target="_blank"
            />
          </div>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-input-group">
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
                name="user_name"
                required
              />
            </div>
            <div className="form-input-div">
              <input
                type="email"
                placeholder="Your E-mail"
                className="form-control"
                name="user_email"
                required
              />
            </div>
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form-control"
                name="user_subject"
                required
              />
            </div>
          </div>
          <div className="form-input-div">
            <textarea
              placeholder="Your Message"
              className="form-control"
              name="message"
            ></textarea>
            <button className="button" type="submit">
              Send Message
              <span className="button-icon">
                <FiSend />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
