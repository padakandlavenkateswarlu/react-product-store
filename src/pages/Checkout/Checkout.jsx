import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Cartcontext";
import "./Checkout.css";

function Checkout() {

  const { cart } = useContext(CartContext);

  // Customer Details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  // Calculate Total
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  // Place Order
  const handlePlaceOrder = () => {

    if (
      name === "" ||
      phone === "" ||
      address === "" ||
      city === "" ||
      pincode === ""
    ) {
      alert("Please fill all details");
      return;
    }

    alert("Order placed successfully!");
  };

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Checkout
      </h1>

      <div className="row">

        {/* Customer Details */}
        <div className="col-md-7">

          <div className="card p-4">

            <h3 className="mb-4">
              Customer Details
            </h3>

            {/* Name */}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            {/* Phone */}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />

            {/* Address */}
            <textarea
              className="form-control mb-3"
              placeholder="Enter your address"
              rows="4"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
            ></textarea>

            {/* City */}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your city"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
            />

            {/* Pincode */}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter pincode"
              value={pincode}
              onChange={(e) =>
                setPincode(e.target.value)
              }
            />

          </div>

        </div>

        {/* Order Summary */}
        <div className="col-md-5">

          <div className="card p-4">

            <h3 className="mb-4">
              Order Summary
            </h3>

            {cart.map((product) => (

              <div
                key={product.id}
                className="d-flex justify-content-between mb-2"
              >

                <span>
                  {product.title} × {product.quantity}
                </span>

                <span>
                  ${(product.price * product.quantity).toFixed(2)}
                </span>

              </div>

            ))}

            <hr />

            <h4>
              Total: ${total.toFixed(2)}
            </h4>

            {/* Place Order */}
            {cart.length > 0 ? (
              <button
                className="btn btn-success mt-3"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            ) : (
              <Link to="/products" className="btn btn-primary mt-3">
                Browse Products
              </Link>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;