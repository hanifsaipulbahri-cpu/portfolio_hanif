import "../css/Certificates.css";
import certificates from "../data/certificates";
import CertificateCard from "./CertificateCard";

function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="section-title">
        <h2>Certificates</h2>
        <p>Continuous Learning & Professional Development</p>
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
