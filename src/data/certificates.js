import oracleADB from "../assets/certificates/eCertificate_ Oracle_Autonomous_Database.pdf";
import oracleData from "../assets/certificates/eCertificate_ Oracle_Data_Platform.pdf";
import oracleMySQL from "../assets/certificates/eCertificate_Oracle_MySQL_Heatwave.pdf";
import fullstack from "../assets/certificates/cert_sena_traffic_system.pdf";
import aiot from "../assets/certificates/Certificate_AIOT.pdf";
import ftth from "../assets/certificates/Certificate_CA1C.pdf";

const certificates = [
  {
    title: "Oracle Autonomous Database Cloud 2025 Certified Professional",
    issuer: "Oracle",
    year: "2025",
    description:
      "Professional certification in Oracle Autonomous Database Cloud administration and deployment.",
    link: oracleADB,
  },

  {
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    description:
      "Foundational certification covering Oracle Data Platform technologies and cloud database concepts.",
    link: oracleData,
  },

  {
    title: "Oracle MySQL HeatWave Implementation Certified Associate (REL 1)",
    issuer: "Oracle",
    year: "2025",
    description:
      "Certification in implementing and managing MySQL HeatWave solutions.",
    link: oracleMySQL,
  },

  {
    title: "Certified Full Stack Java with AI",
    issuer: "Professional Training",
    year: "2025",
    description:
      "Completed training in Spring Boot, React.js, REST APIs, MongoDB, and AI integration.",
    link: fullstack,
  },

  {
    title: "Certificate of Achievement – Data-Driven Decision Making",
    issuer: "AIoT & V-ONE",
    year: "2025",
    description:
      "Completed training in AIoT technologies and V-ONE data analytics.",
    link: aiot,
  },

  {
    title: "Certificate of Proficiency – CA1C Fiber-To-The-Home (FTTH)",
    issuer: "Professional Training",
    year: "2023",
    description:
      "Completed practical training in FTTH indoor installation and testing.",
    link: ftth,
  },
];

export default certificates;
