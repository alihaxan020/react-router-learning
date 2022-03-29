import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div>Home Page</div>
      <button
        onClick={() => navigate("/order-summary")}
        className="bg-slate-500 p-2 rounded-md text-white"
      >
        Place Order
      </button>
    </React.Fragment>
  );
};

export default Home;
