// Event Booking Images
import e1 from "../assets/projects/event-booking/e1.jpeg";
import e2 from "../assets/projects/event-booking/e2.jpeg";
import e3 from "../assets/projects/event-booking/e3.jpeg";
import e4 from "../assets/projects/event-booking/e4.jpeg";
import e5 from "../assets/projects/event-booking/e5.jpeg";

// GreenSense Images
import g1 from "../assets/projects/greensense/g1.jpeg";
import g2 from "../assets/projects/greensense/g2.jpeg";
import g3 from "../assets/projects/greensense/g3.jpeg";
import g4 from "../assets/projects/greensense/g4.jpeg";
import g5 from "../assets/projects/greensense/g5.jpeg";

// Smart Parking Images
import p1 from "../assets/projects/smart-parking/p1.jpeg";
import p2 from "../assets/projects/smart-parking/p2.jpeg";
import p3 from "../assets/projects/smart-parking/p3.jpeg";
import p4 from "../assets/projects/smart-parking/p4.jpeg";
import p5 from "../assets/projects/smart-parking/p5.jpeg";

// Traffic Light Images
import t1 from "../assets/projects/traffic-light/t1.jpeg";
import t2 from "../assets/projects/traffic-light/t2.jpeg";
import t3 from "../assets/projects/traffic-light/t3.jpeg";
import t4 from "../assets/projects/traffic-light/t4.jpeg";
import t5 from "../assets/projects/traffic-light/t5.jpeg";

const projects = [
  {
    id: "greensense",

    title: "GreenSense",

    featured: true,

    year: "2026",

    image: [g1, g2, g3, g4, g5],

    award: "🥇 Gold Award",

    competition: "RISE UTHM 2026",

    role: "Full Stack Developer for Water Quality Monitoring System",

    description:
      "IoT-based Smart Hydroponic & Aquaponic Monitoring System for real-time water quality monitoring.",

    achievement:
      "Gold Award - International Research & Innovation Symposium Competition (RISE) UTHM 2026.",

    technologies: [
      "ESP32",
      "PHP",
      "Python",
      "MySQL",
      "Power BI",
      "REST API",
      "LSTM",
      "SVM",
    ],

    github: "#",

    demo: "#",
  },

  {
    id: "smart-parking",

    title: "Smart Parking Management System",

    featured: true,

    year: "2026",

    image: [p1, p2, p3, p4, p5],

    award: "🥇 Gold Award",

    competition: "IDP Showcase UTHM 2026",

    role: "Hardware Developer and Hardware Integration",

    description:
      "Smart parking reservation and management system using ESP32 and Firebase.",

    achievement: "Gold Award - IDP Showcase UTHM 2026.",

    technologies: ["ESP32", "Python", "Firebase"],

    github: "#",

    demo: "#",
  },

  {
    id: "traffic-light",

    title: "AI Smart Traffic Light",

    featured: true,

    year: "2026",

    image: [t1, t2, t3, t4, t5],

    award: "🥇 Gold Award & Top 5",

    competition: "RISE UiTM 2026",

    role: "AI Developer",

    description:
      "AI-powered ambulance detection and automatic traffic light priority system.",

    achievement: "Gold Award & Top 5 Award - RISE UiTM 2026.",

    technologies: ["ESP32", "ESP32-CAM", "Python", "Roboflow"],

    github: "#",

    demo: "#",
  },

  {
    id: "event-booking",

    title: "Event Booking System",

    featured: true,

    year: "2026",

    image: [e1, e2, e3, e4, e5],

    award: "Java Stack AI Project",

    competition: "Capstone Project",

    role: "Full Stack Developer",

    description:
      "Online Event Booking System with authentication, admin dashboard and booking management.",

    achievement:
      "Built a complete full-stack web application using React and Spring Boot.",

    technologies: ["React", "Spring Boot", "MongoDB", "REST API", "JWT"],

    github: "#",

    demo: "#",
  },
];

export default projects;
