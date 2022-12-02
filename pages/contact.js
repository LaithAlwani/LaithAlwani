import { useState } from "react";
import styles from "../styles/contact.module.css";

export default function Contact() {
  const [request, setRequest] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequest({ name: "", email: "", message: "" });
    setSuccess("Request Sent! Thank you");
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off" noValidate>
      {success && <div className={styles.success}>{success}</div>}
      <h1>Contact Us</h1>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={request.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={request.email}
        onChange={handleChange}
      />

      <textarea
        type="text"
        name="message"
        placeholder="Messsage"
        value={request.message}
        onChange={handleChange}
      />

      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
