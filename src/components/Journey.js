import "../css/Journey.css";

function Journey() {
  return (
    <section id="journey" className="journey">
      <div className="section-title">
        <h2>Education & Experience</h2>
        <p>My academic background and professional journey</p>
      </div>

      <div className="journey-container">
        {/* Education */}
        <div className="journey-column">
          <h3 className="journey-heading">🎓 Education</h3>

          <div className="timeline">
            <div className="timeline-item">
              <span>March 2024 – July 2026</span>
              <h3>
                Bachelor's in Electronic Engineering with Honours (Computer)
              </h3>
              <h4>Universiti Tun Hussein Onn Malaysia (UTHM)</h4>
              <p>Current CGPA: 3.70</p>
            </div>

            <div className="timeline-item">
              <span>August 2021 – January 2024</span>
              <h3>Diploma in Electrical Engineering</h3>
              <h4>Universiti Tun Hussein Onn Malaysia (UTHM)</h4>
              <p>CGPA: 3.46</p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="journey-column">
          <h3 className="journey-heading">💼 Work Experience</h3>

          <div className="timeline">
            <div className="timeline-item">
              <span>November 2025 – Present</span>
              <h3>Technician Assistant</h3>
              <h4>GoApps Technology</h4>

              <ul>
                <li>
                  Assisted with system upgrades, patches, and configuration
                  changes.
                </li>
                <li>Performed database backups and recovery procedures.</li>
                <li>Provided hardware and software troubleshooting.</li>
                <li>
                  Performed preventive maintenance to improve system
                  reliability.
                </li>
              </ul>
            </div>

            <div className="timeline-item">
              <span>July 2025 – October 2025</span>
              <h3>Internship</h3>
              <h4>RIZQ Technologies</h4>

              <ul>
                <li>Configured Oracle Restart for client databases.</li>
                <li>Restored Oracle databases using RMAN.</li>
                <li>Managed Oracle Certificates.</li>
              </ul>
            </div>

            <div className="timeline-item">
              <span>July 2023 – February 2024</span>
              <h3>Internship</h3>
              <h4>GoApps Technology</h4>

              <ul>
                <li>Diagnosed and resolved server and system issues.</li>
                <li>Assisted with IT infrastructure improvements.</li>
                <li>Monitored server performance and security.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
