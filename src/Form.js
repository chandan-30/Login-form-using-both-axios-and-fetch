import { useState } from "react";
import axios from "axios";
const Form = () => {
  const url =
    "https://axios-and-fetch-bad57-default-rtdb.firebaseio.com/register.json";
  console.log(url);
  const [option, setOption] = useState("axios");
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    pass: "",
    email: "",
    confirmPass: ""
  });
  const { name, pass, email, confirmPass } = data;
  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length < 5) {
      setError("UserName should have atleast 5 characters! ");
      return;
    }
    if (pass !== confirmPass) {
      console.log(pass, confirmPass);
      setError("Passwords do not match!");
      return;
    }
    if (option === "axios") {
      axios.post(url, data).then(() => alert("Registration was succesfull"));
    } else {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json" // Set the content type to JSON
          // Add any other headers if needed
        },
        body: JSON.stringify(data) // Convert the data to a JSON string
      };

      fetch(url, requestOptions).then((response) => {
        if (response.ok) {
          alert("Registration was succesfull");
        }
      });
    }
  };
  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const radioHandler = (e) => {
    setOption(e.target.value);
  };
  return (
    <>
      <h2> Login Form with Axios & Fetch API</h2>
      <div className="checkboxContainer">
        <input
          type="radio"
          name="axios"
          value="axios"
          checked={option === "axios"}
          onChange={radioHandler}
        />
        <label htmlFor="axios"> Axios </label>
        <input
          type="radio"
          name="fetch"
          checked={option === "fetch"}
          value="fetch"
          onChange={radioHandler}
        />
        <label htmlFor="fetch"> Fetch </label>
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="UserName"
          onChange={changeHandler}
          required
        />
        <br />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          onChange={changeHandler}
          required
        />
        <br />
        <input
          type="password"
          name="confirmPass"
          placeholder="Confirm Password"
          onChange={changeHandler}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          required
        />
        <br />
        <p> {error} </p>
        <input type="submit" />
      </form>
    </>
  );
};
export default Form;
