import { useCart } from "react-use-cart";
import MainLayout from "../main";

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  console.log(items);

  if (isEmpty) return <p>Your cart is empty</p>;
  const LayoutCart = () => {
    return (
      <div className="container">
        <div className="col-12">
          <h1>Cart ({totalUniqueItems})</h1>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.quantity} x {item.name} &mdash;
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  return <MainLayout content={<LayoutCart />} />;
};

export default Cart;
