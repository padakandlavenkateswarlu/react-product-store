
export const Signup = () => {
  return (
    <>
      <h3 className="text-center">Signup</h3>

      <input
        type="text"
        className="form-control mt-3"
        placeholder="Enter Name"
      />

      <input
        type="email"
        className="form-control mt-3"
        placeholder="Enter Email"
      />

      <input
        type="password"
        className="form-control mt-3"
        placeholder="Create Password"
      />

      <button className="btn btn-success w-100 mt-3">
        Signup
      </button>
    </>
  );
};
