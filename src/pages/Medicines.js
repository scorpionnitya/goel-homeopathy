import { useState } from "react";

const allMedicines = [
  { name: "Arnica Montana", use: "Injury, pain, swelling", category: "Pain", price: "₹120" },
  { name: "Belladonna", use: "Fever, headache, inflammation", category: "Fever", price: "₹95" },
  { name: "Nux Vomica", use: "Digestion, stress, constipation", category: "Digestion", price: "₹110" },
  { name: "Rhus Toxicodendron", use: "Joint pain, stiffness", category: "Pain", price: "₹130" },
  { name: "Bryonia Alba", use: "Cough, cold, fever", category: "Fever", price: "₹100" },
  { name: "Pulsatilla", use: "Digestive issues, hormonal imbalance", category: "Digestion", price: "₹115" },
  { name: "Aconitum Napellus", use: "Fever, anxiety, shock", category: "Fever", price: "₹105" },
  { name: "Calcarea Carbonica", use: "Digestion, fatigue, bone health", category: "Digestion", price: "₹125" },
  { name: "Colocynthis", use: "Abdominal pain, cramps", category: "Pain", price: "₹90" },
  { name: "Gelsemium", use: "Fever, flu, weakness", category: "Fever", price: "₹115" },
  { name: "Lycopodium", use: "Digestive issues, bloating", category: "Digestion", price: "₹120" },
  { name: "Hypericum Perforatum", use: "Nerve pain, injuries", category: "Pain", price: "₹130" },
  { name: "Ferrum Phosphoricum", use: "Fever, inflammation", category: "Fever", price: "₹100" },
  { name: "Carbo Vegetabilis", use: "Digestion, bloating", category: "Digestion", price: "₹110" },
  { name: "Magnesia Phosphorica", use: "Muscle cramps, spasms", category: "Pain", price: "₹95" },
  { name: "Sulphur", use: "Skin issues, digestion", category: "Digestion", price: "₹115" },
  { name: "Chamomilla", use: "Teething pain, irritability", category: "Pain", price: "₹90" },
  { name: "Antimonium Crudum", use: "Digestive issues, skin problems", category: "Digestion", price: "₹120" }
];

function Medicines({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredMedicines = allMedicines.filter((med) => {
    const matchName = med.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || med.category === category;
    return matchName && matchCategory;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>💊 Our Homeopathy Medicines</h1>

      {/* Search & Filter */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search medicine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "200px" }}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: "8px" }}>
          <option>All</option>
          <option>Pain</option>
          <option>Fever</option>
          <option>Digestion</option>
        </select>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>
        {filteredMedicines.map((med, index) => (
          <div key={index} style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            background: "#f9fff9"
          }}>
            <h3>{med.name}</h3>
            <p><b>Use:</b> {med.use}</p>
            <p><b>Category:</b> {med.category}</p>
            <p><b>Price:</b> {med.price}</p>

            <button
              onClick={() => {
                addToCart(med);
                alert("Medicine added to cart");
              }}
              style={{
                padding: "8px 12px",
                background: "#2e7d32",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicines;
