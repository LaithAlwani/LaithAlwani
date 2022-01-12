import { useState } from "react";
import styles from "../styles/contact.module.css";

export default function contact() {
  const [request, setRequest] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(request);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      autoComplete="off"
      noValidate
    >
      <h1>Contact us</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={request.name}
          onChange={handleChange}
          
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={request.email}
          onChange={handleChange}
          
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          type="text"
          name="message"
          value={request.message}
          onChange={handleChange}
          
        />
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
