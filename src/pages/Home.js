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
          onClick={() => navigate("/appointment")}
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

      {/* Why Us */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Why Goel Homeopathy?</h2>
        <p style={{ maxWidth: "800px", margin: "auto" }}>
          We belong to a doctors family with years of experience in homeopathy.
          Our aim is to combine traditional healing with modern technology.
        </p>
      </section>

    </div>
  );
}

export default Home;