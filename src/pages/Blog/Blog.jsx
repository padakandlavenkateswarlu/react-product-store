import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import "./Blog.css";

const Blog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=10");
        if (!response.ok) {
          throw new Error("Unable to load products.");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (loadError) {
        setError(loadError.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <main className="blog-container">
      <h1>Product Blog</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <p className="blog-error" role="alert">{error}</p>
      ) : (
        <div className="blog-cards">
          {products.map((product, index) => (
            <article
              className="blog-card"
              key={product.id}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Link
                to={`/products/${product.id}`}
                className="blog-image-link"
              >
                <img src={product.thumbnail} alt={product.title} />
              </Link>

              <div className="blog-content">
                <Link
                  to={`/products/${product.id}`}
                  className="blog-title-link"
                >
                  <h2>{product.title}</h2>
                </Link>
                <p>{product.description}</p>
                <h3>Price: ${product.price}</h3>
                <Link
                  to={`/products/${product.id}`}
                  className="blog-details-button"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default Blog;
