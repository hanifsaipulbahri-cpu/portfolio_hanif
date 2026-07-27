import "../css/Hero.css";
import profile from "../assets/hanif.jpg";
import resume from "../assets/Resume.pdf";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight
} from "react-icons/fa";

function Hero() {

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="intro">👋 Hello, I'm</p>

        <h1>
          Mohammad Hanif <span>bin Saipul Bahri</span>
        </h1>

        <h2>
          <Typewriter
            words={[
              "Electronic Engineering (Computer) Student",
              "Full Stack Developer",
              "Software Engineer",
              "IoT Developer",
              "Remote Support Engineer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
          />
        </h2>

        <p className="description">
          Passionate about developing scalable web applications, intelligent IoT
          solutions, and software that solves real-world challenges. Experienced
          with React, Spring Boot, Java, MySQL, and ESP32-based systems.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn-primary">
            View Projects
            <FaArrowRight />
          </a>

          <a href={resume} download>
            Download Resume
            <FaDownload />
          </a>
        </div>

        <div className="socials">
          <a href="https://github.com/hanifsaipulbahri-cpu">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/hanif-saipulbahri-5a4637311/">
            <FaLinkedin />
          </a>

          <a href="mailto:hanif.saipulbahri@email.com">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profile} alt="Hanif" />
      </motion.div>
    </section>
  );

}

export default Hero;