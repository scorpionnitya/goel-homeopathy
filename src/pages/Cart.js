function Cart({ cart, removeFromCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>No medicines in cart.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{
            border: "1px solid #ddd",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between"
          }}>
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
        ))
      )}
    </div>
  );
}

export default Cart;
