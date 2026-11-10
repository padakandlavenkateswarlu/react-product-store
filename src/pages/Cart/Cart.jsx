import React, { useContext, useState } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";

function Cart() {

  const {
    cart,
    removeFromCart
  } = useContext(CartContext);

  const [quantities, setQuantities] = useState({});

  // Increase Quantity
  const increaseQuantity = (id) => {
    setQuantities((previous) => ({
      ...previous,
      [id]: (previous[id] || 1) + 1
    }));
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setQuantities((previous) => ({
      ...previous,
      [id]: Math.max(
        (previous[id] || 1) - 1,
        1
      )
    }));
  };

  // Remove Product
  const handleRemove = (id) => {

    removeFromCart(id);

    setQuantities((previous) => {

      const updated = {
        ...previous
      };

      delete updated[id];

      return updated;
    });
  };

  // Calculate Total
  const total = cart.reduce(
    (sum, product) => {

      const quantity =
        quantities[product.id] || 1;

      return (
        sum +
        product.price * quantity
      );
    },
    0
  );

  // Checkout
  const handleCheckout = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (

        <h2 className="text-center">
          Your cart is empty
        </h2>

      ) : (

        <>
          {cart.map((product) => {

            const quantity =
              quantities[product.id] || 1;

            return (
              <div
                className="card mb-3"
                key={product.id}
              >

                <div className="row g-0 align-items-center">

                  {/* Product Image */}
                  <div className="col-md-2">

                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover"
                      }}
                    />

                  </div>

                  {/* Product Details */}
                  <div className="col-md-5">

                    <div className="card-body">

                      <h4>
                        {product.name}
                      </h4>

                      <p>
                        {product.description}
                      </p>

                      <h5>
                        ₹{product.price}
                      </h5>

                    </div>

                  </div>

                  {/* Quantity */}
                  <div className="col-md-3">

                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        decreaseQuantity(
                          product.id
                        )
                      }
                    >
                      -
                    </button>

                    <span className="mx-3">
                      {quantity}
                    </span>

                    <button
                      className="btn btn-success"
                      onClick={() =>
                        increaseQuantity(
                          product.id
                        )
                      }
                    >
                      +
                    </button>

                    <br />

                    {/* Remove Button */}
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() =>
                        handleRemove(
                          product.id
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

          {/* Total */}
          <div className="text-end">

            <h2>
              Total: ₹{total}
            </h2>

            {/* Checkout Button */}
            <button
              className="btn btn-primary"
              onClick={handleCheckout}
            >
              Checkout
            </button>

          </div>

        </>
      )}

    </div>
  );
}

export default Cart;