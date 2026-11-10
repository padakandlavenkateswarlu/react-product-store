
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

export const Products = () => {
  let [productsD, setProducts] = useState([]);
  let [page, setPage] = useState(1);
  let [search, setsearch] = useState("");
  let [categorylist, setCategorylist] = useState([]);
  let [category, setcategory] = useState("All");
  let [loading, setLoading] = useState(true);

  let cardsperPage = 10;

  useEffect(() => {
    async function renderApi() {
      let productsdata = await fetch(
        "https://dummyjson.com/products?limit=100"
      );

      let { products } = await productsdata.json();
      
      setProducts(products);
      setLoading(false);
    }

    renderApi();
  }, []);

  useEffect(() => {
    async function getcategories() {
      let response = await fetch(
        "https://dummyjson.com/products/category-list"
      );

      let data = await response.json();

      setCategorylist(data);
    }

    getcategories();
  }, []);

  let filteredProducts = productsD.filter((pro) => {
    let searchMatch = pro.title
      .toLowerCase()
      .includes(search.toLowerCase());

    let categoryMatch =
      category === "All" || pro.category === category;

    return searchMatch && categoryMatch;
  });

  let currentProducts = filteredProducts.slice(
    (page - 1) * cardsperPage,
    page * cardsperPage
  );

  let totalPages = Math.ceil(
    filteredProducts.length / cardsperPage
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>

      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
              setPage(1);
            }}
          >
            <option value="All">All Categories</option>

            {categorylist.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <center>
          <Loader />
        </center>
      ) : (
        <>
          <p>Total Products: {filteredProducts.length}</p>

          <div className="row">
            {currentProducts.length === 0 ? (
              <h4 className="text-center">No products found</h4>
            ) : (
              currentProducts.map((pro) => (
                <div className="col-md-4 mb-4" key={pro.id}>
                  <div className="card h-100">
                    <Link
                      to={`/products/${pro.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <img
                        src={pro.thumbnail}
                        className="card-img-top"
                        alt={pro.title}
                        style={{
                          height: "250px",
                          objectFit: "contain",
                        }}
                      />
                    </Link>

                    <div className="card-body">
                      <Link
                        to={`/products/${pro.id}`}
                        className="text-decoration-none text-dark"
                      >
                        <h5 className="card-title">
                          {pro.title}
                        </h5>
                      </Link>

                      <p className="card-text">
                        {pro.description}
                      </p>

                      <h6>Price: ${pro.price}</h6>

                      <Link
                        to={`/products/${pro.id}`}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {totalPages > 0 && (
            <div className="text-center mt-3 mb-4">
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((btn) => (
                <button
                  key={btn}
                  className={`btn mx-1 ${
                    page === btn
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setPage(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
