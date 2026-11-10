import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { CartContext } from "../../context/Cartcontext";

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn btn-primary mt-3">
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          {cart.map((product) => (
            <div className="card mb-3" key={product.id}>
              <div className="row g-0 align-items-center">
                <div className="col-md-2 text-center">
                  <Link to={`/products/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                    />
                  </Link>
                </div>

                <div className="col-md-6">
                  <div className="card-body">
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <h5>${product.price.toFixed(2)}</h5>
                  </div>
                </div>

                <div className="col-md-4 text-center pb-3 pb-md-0">
                  <button
                    className="btn btn-outline-secondary"
                    aria-label={`Decrease quantity of ${product.title}`}
                    onClick={() =>
                      updateQuantity(product.id, product.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span className="mx-3">{product.quantity}</span>
                  <button
                    className="btn btn-outline-secondary"
                    aria-label={`Increase quantity of ${product.title}`}
                    onClick={() =>
                      updateQuantity(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <p className="mt-2 mb-1">
                    Subtotal: ${(product.price * product.quantity).toFixed(2)}
                  </p>
                  <button
                    className="btn btn-danger btn-sm mt-1"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-end mb-5">
            <h2>Total: ${total.toFixed(2)}</h2>
            <Link to="/checkout" className="btn btn-primary">
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;