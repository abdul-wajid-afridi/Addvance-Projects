import React, { useEffect, useState } from "react";
import "./styles/Login.css";
import db from "../../Firebase/Confiq";
import "aos/dist/aos.css";
import Aos from "aos";
const Login = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Data, setData] = useState([""]);
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (Name == "" || Password == "") {
      alert("please fill the form first");
    } else {
      // const NewData = { Name, Password };
      // setData([...Data, NewData]);
      setName("");
      setPassword("");
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="login__container">
      <form data-aos="flip-left">
        <h3>LOGIN FORM</h3>
        <hr className="hr" />
        <input
          type="text"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="Password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={SubmitHandler} className="login__btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
