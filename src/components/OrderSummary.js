import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div>Order Confirmed!</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </React.Fragment>
  );
};

export default OrderSummary;
