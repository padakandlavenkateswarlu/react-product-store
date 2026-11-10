
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  let { id } = useParams();

  let [product, setProduct] = useState(null);
  let [added, setAdded] = useState(false);

  useEffect(() => {
    async function getProduct() {
      let response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      let data = await response.json();

      setProduct(data);
      setAdded(false);
    }

    getProduct();
  }, [id]);

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
              onClick={() => setAdded(true)}
              disabled={added}
            >
              {added ? "Added" : "Add"}
            </button>

            <button
              className="btn btn-danger"
              onClick={() => setAdded(false)}
              disabled={!added}
            >
              Remove
            </button>

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
