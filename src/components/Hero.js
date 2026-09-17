import profile from "../assets/hanif.jpg";
import resume from "../assets/Resume.pdf";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div className="hero-left" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="eyebrow">Available for graduate opportunities</p>
        <h1>Mohammad Hanif <span>Saipul Bahri</span></h1>
        <h2><Typewriter words={["Electronic Engineering (Computer) Student", "Full Stack Developer", "Software Engineer", "IoT Developer", "Remote Support Engineer"]} loop={0} cursor cursorStyle="|" typeSpeed={75} deleteSpeed={45} /></h2>
        <p className="description">I build reliable web applications, intelligent IoT systems, and software that solves real-world engineering challenges.</p>
        <div className="buttons"><a href="#projects" className="btn-primary">View my work <FaArrowRight /></a><a href={resume} download className="btn-secondary">Download resume <FaDownload /></a></div>
        <div className="socials"><a href="https://github.com/hanifsaipulbahri-cpu" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FaGithub /></a><a href="https://www.linkedin.com/in/hanif-saipulbahri-5a4637311/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><FaLinkedin /></a><a href="mailto:hanif.saipulbahri@gmail.com" aria-label="Email Hanif"><FaEnvelope /></a></div>
      </motion.div>
      <motion.div className="hero-right" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}><div className="portrait-frame"><img src={profile} alt="Mohammad Hanif Saipul Bahri" fetchPriority="high" /></div></motion.div>
    </section>
  );
}

export default Hero;
