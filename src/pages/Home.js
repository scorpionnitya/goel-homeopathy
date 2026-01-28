import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>

      {/* Hero Section */}
      <section style={{
        background: "#e8f5e9",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "40px", color: "#2e7d32" }}>
          🌿 Goel Homeopathy
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "20px auto" }}>
          Trusted family homeopathy clinic & medicine store.  
          We provide homeopathic medicines and personalized care.
        </p>
        <button
  onClick={() => navigate("/contact")}
  style={{
    padding: "12px 20px",
    background: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer"
  }}
>
  Book Consultation
</button>

      </section>

      {/* About Section */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Why Goel Homeopathy?</h2>
        <p style={{ maxWidth: "800px", margin: "auto" }}>
          We belong to a doctors family with years of experience in homeopathy.
          Our aim is to combine traditional healing with modern technology to
          make treatment accessible for everyone.
        </p>
      </section>

      {/* Services */}
      <section style={{
        background: "#f9fff9",
        padding: "50px 20px"
      }}>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
          <div style={cardStyle}>💊 Trusted Homeopathic Medicines</div>
          <div style={cardStyle}>👨‍⚕️ Expert Consultation</div>
          <div style={cardStyle}>📋 Personal Treatment Plans</div>
          <div style={cardStyle}>🚚 Easy Medicine Access</div>
        </div>
      </section>

    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  background: "white",
  boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
  fontWeight: "bold"
};

export default Home;
