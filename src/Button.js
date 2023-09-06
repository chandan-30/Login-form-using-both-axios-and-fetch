import { useState, useEffect } from "react";
const Button = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(count + 1);
  }, []);
  return (
    <>
      <h1> {count} </h1>
      <button onClick={clickHandler}>Click me </button>
    </>
  );
};

export default Button;
