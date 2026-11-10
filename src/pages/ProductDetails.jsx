
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function getProduct() {
      setProduct(null);
      setError("");
      setAdded(false);

      try {
        const response = await fetch(
          `https://dummyjson.com/products/${id}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Unable to load this product.");
        }

        const data = await response.json();
        setProduct(data);
      } catch (loadError) {
        if (loadError.name !== "AbortError") {
          setError(loadError.message);
        }
      }
    }

    getProduct();
    return () => controller.abort();
  }, [id]);

  if (error) {
    return (
      <p className="container mt-5 text-center" role="alert">
        {error}
      </p>
    );
  }

  if (!product) {
    return (
      <h3 className="text-center mt-5">
        Loading...
      </h3>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card p-4">
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
              style={{
                maxHeight: "350px",
                objectFit: "contain",
              }}
            />
          </div>

          <div className="col-md-7">
            <h2>{product.title}</h2>

            <p>{product.description}</p>

            <h4>Price: ${product.price}</h4>

            <p>Category: {product.category}</p>

            <p>Rating: ⭐ {product.rating}</p>

            <button
              className="btn btn-success me-2"
              onClick={() => {
                addToCart(product);
                setAdded(true);
              }}
            >
              {added ? "Add Another" : "Add to Cart"}
            </button>

            {added && (
              <Link to="/cart" className="btn btn-primary">
                View Cart
              </Link>
            )}

            <div>
              <Link
                to="/products"
                className="btn btn-secondary mt-3"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
