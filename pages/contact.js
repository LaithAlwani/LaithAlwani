import { useState } from "react";
import styles from "../styles/contact.module.css";

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  
  const [success, setSuccess] = useState("");

  const handleChange = (e, field) => {
    if (field === "name")
      setName(e.target.value);
    else if (field === "email")
      setEmail(e.target.value)
    else
      setMessage(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      setName("");
      setEmail("");
      setMessage("");
      setSuccess("Request Sent! Thank you");
      setTimeout(() => {
        setSuccess("");
      }, 2000);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      {success && <div className={styles.success}>{success}</div>}
      <h1>Contact Us</h1>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => handleChange(e, "name")}
        required
      />

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => handleChange(e, "email")}
        required
      />

      <textarea
        type="text"
        name="message"
        placeholder="Messsage"
        value={message}
        onChange={(e) => handleChange(e, "message")}
        required
      />

      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}
