import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [p1, p2, p3, p4];

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about">
      <div className="section-title">
        <h2>About Me</h2>
        <p>Get to know me better</p>
      </div>

      <div className="about-wrapper">
        {/* LEFT SIDE */}
        <motion.div
          className="about-image"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Hanif working on engineering and software projects"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about-content"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-card">
            <h3>👨‍💻 About Me</h3>

            <p>
              I'm <strong>Mohammad Hanif bin Saipul Bahri</strong>, a Electronic
              Engineering (Computer) student passionate about developing modern web
              applications, backend systems, and intelligent IoT solutions.
            </p>

            <p>
              Throughout my academic journey, I have built full-stack web
              applications, IoT systems, AI-powered solutions, and database
              applications using modern technologies such as React.js, Spring
              Boot, Java, Python, MySQL, Oracle, MongoDB, and ESP32.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Areas of Expertise</h3>

            <div className="tags">
              <span>React.js</span>
              <span>Spring Boot</span>
              <span>Java</span>
              <span>Python</span>
              <span>REST APIs</span>
              <span>MySQL</span>
              <span>Oracle</span>
              <span>MongoDB</span>
              <span>IoT</span>
              <span>ESP32</span>
              <span>Power BI</span>
              <span>LSTM</span>
              <span>SVM</span>
            </div>
          </div>

          <div className="about-card">
            <h3>🎯 Jobs Seeking</h3>

            <ul>
              <li>Software Engineer</li>
              <li>Full Stack Developer</li>
              <li>Backend Developer</li>
              <li>System Administrator</li>
              <li>Database Administrator</li>
              <li>IT Support Engineer</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
