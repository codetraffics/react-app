const Cart = () => {
  const items = ["Mobile Phone", "Laptop", "Airpod", "Watch", "Microphone"];

  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}
      <h4>Products in Cart</h4>
      {items.map((item) => (
        <ul key={Math.random()}>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
};

export default Cart;
