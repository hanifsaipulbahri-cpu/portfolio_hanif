import "../css/Contact.css";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaCopy,
} from "react-icons/fa";

import resume from "../assets/Resume.pdf";

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hanif.saipulbahri@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Unable to copy email", error);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Let's Connect</h2>
        <p>
          I'm currently seeking opportunities in Software Engineering, Backend
          Development, Full Stack Development, System Administration, and IT
          Support.
        </p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-card"
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <FaPhoneAlt className="contact-icon" />

          <h3>Phone</h3>

          <a href="tel:+60122363474">+60 12-236 3474</a>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <FaEnvelope className="contact-icon" />

          <h3>Email</h3>

          <a href="mailto:hanif.saipulbahri@gmail.com">
            hanif.saipulbahri@gmail.com
          </a>

          <button
            type="button"
            className="copy-email-btn"
            onClick={handleCopyEmail}
            aria-label="Copy email"
          >
            <FaCopy />
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <FaMapMarkerAlt className="contact-icon" />

          <h3>Location</h3>

          <p>Puncak Alam, Selangor</p>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <FaLinkedin className="contact-icon" />

          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/hanif-saipulbahri-5a4637311/"
            target="_blank"
            rel="noreferrer"
          >
            Visit Profile
          </a>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <FaGithub className="contact-icon" />

          <h3>GitHub</h3>

          <a
            href="https://github.com/hanifsaipulbahri-cpu"
            target="_blank"
            rel="noreferrer"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <FaDownload className="contact-icon" />

          <h3>Resume</h3>

          <a href={resume} download>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
