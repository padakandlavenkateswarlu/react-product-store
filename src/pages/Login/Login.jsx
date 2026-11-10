
import { useState } from "react";
import { Signup } from "../Signup/Signup";

export const Login = () => {
  let [page, setPage] = useState("login");

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <div className="d-flex gap-2 mb-4">
          <button
            className="btn btn-primary w-50"
            onClick={() => setPage("login")}
          >
            Login
          </button>

          <button
            className="btn btn-outline-primary w-50"
            onClick={() => setPage("signup")}
          >
            Signup
          </button>
        </div>

        {page === "login" ? (
          <>
            <h3 className="text-center">Login</h3>

            <input
              type="email"
              className="form-control mt-3"
              placeholder="Enter Email"
            />

            <input
              type="password"
              className="form-control mt-3"
              placeholder="Enter Password"
            />

            <button className="btn btn-success w-100 mt-3">
              Login
            </button>
          </>
        ) : (
          <Signup />
        )}
      </div>
    </div>
  );
};
