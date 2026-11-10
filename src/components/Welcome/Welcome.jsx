import { useState } from "react";

export const Welcome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container text-center mt-5">

      <h1>Welcome to Our Website</h1>

      {!isLoggedIn ? (
        <div>
          <p>Please login to start your course.</p>

          <button
            className="btn btn-primary"
            onClick={login}
          >
            Login
          </button>
        </div>
      ) : (
        <div>

          <h2 className="mt-4">Welcome Back! 🎉</h2>

          <p>You are successfully logged in.</p>

          <button
            className="btn btn-danger me-2"
            onClick={logout}
          >
            Logout
          </button>

          <button className="btn btn-success">
            Start the Course
          </button>

          <div className="mt-4">
            <h3>Course Details</h3>

            <p>📚 HTML & CSS</p>
            <p>📚 JavaScript</p>
            <p>📚 React JS</p>
            <p>📚 Python</p>
          </div>

        </div>
      )}

    </div>
  );
};