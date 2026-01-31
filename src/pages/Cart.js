import { useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>No medicines in cart.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                style={{
                  background: "crimson",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "6px 10px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Proceed Button */}
          <button
            onClick={() => navigate("/contact")}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "12px",
              background: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Proceed to Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
