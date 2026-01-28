import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function submitForm(e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    setName("");
    setPhone("");
    setMessage("");
  }

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h1>Contact Us</h1>
      <p>Fill this form and our team will contact you.</p>

      <form onSubmit={submitForm} style={{ display: "grid", gap: "12px" }}>
        <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <textarea placeholder="Your problem / query" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button style={{ background: "#2e7d32", color: "white", border: "none", padding: "10px", borderRadius: "6px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
