import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [values, setValues] = useState([]);
  const [edit, setEdit] = useState(false);

  //Uncontrolled Component
  const inputRef = useRef(null);
  const currentIndex = useRef(null);
  const handleSubmit = () => {
    setInput(inputRef.current.value);
    if (input === "") {
      alert("Please enter some value");
    } else {
      setValues([...values, input]);
    }
    setInput("");
  };
  const handleEdit = (index) => {
    currentIndex.current = index;
    setEdit(true);
    console.log(index);
    setInput(values[index]);
  };
  const handleEditSubmit = () => {
    console.log(currentIndex.current);
    values[currentIndex.current] = input;
    console.log(values);
    setInput("");
    setEdit(false);
  };

  return (
    <React.Fragment>
      <div>Home Page</div>
      <button
        onClick={() => navigate("/order-summary")}
        className="bg-slate-500 p-2 rounded-md text-white"
      >
        Place Order
      </button>
      <div className="pt-2 flex justify-center align-middle">
        <hr />
        <input
          ref={inputRef}
          value={input}
          onInput={(e) => setInput(e.target.value)}
          className="border-2 mr-1 w-52"
          placeholder="Enter a text input here "
        />
        {edit ? (
          <button
            onClick={() => handleEditSubmit()}
            className="bg-slate-500 p-2 rounded-md text-white"
          >
            Submit Edited
          </button>
        ) : (
          <button
            onClick={() => handleSubmit()}
            className="bg-slate-500 p-2 rounded-md text-white"
          >
            submit
          </button>
        )}
      </div>
      <div className="pt-2 flex flex-col justify-center items-center w-full border-2">
        <h1>VALUES HERE</h1>

        {values.map((item, index) => (
          <div
            key={index}
            ref={inputRef}
            onClick={() => handleEdit(index)}
            className="cursor-pointer m-2"
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
