import { useState } from "react";
import Header from "./Header";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e, field) => {
    if (field === "name") setName(e.target.value);
    else if (field === "email") setEmail(e.target.value);
    else setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setError("please enter your name");
      return setTimeout(() => {
        setError("");
      }, 2000);
    }
    if (!email) {
      setError("please enter your email");
      return setTimeout(() => {
        setError("");
      }, 2000);
    }
    if (!message) {
      setError("please enter a message");
      return setTimeout(() => {
        setError("");
      }, 2000);
    }

    if (message.length > 250) {
      setError("message is longer than 250 characters");
      return setTimeout(() => {
        setError("");
      }, 2000);
    }

    setName("");
    setEmail("");
    setMessage("");
    setSuccess("Request Sent! Thank you");
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  };
  return (
    <section className="section" id="contact">
      <div className="container">
      <Header
        header="contact"
        subHeader="Feel free to contact me by filling out the form below and I will get back to you as soon as I can"
      />
        <form onSubmit={handleSubmit} autocomplete="off">
          {error && <div className="message error">{error}</div>}
          {success && <div className="message success">{success}</div>}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="John"
            value={name}
            onChange={(e) => handleChange(e, "name")}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="johnsmith@example.com"
            value={email}
            onChange={(e) => handleChange(e, "email")}
          />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="Message should 250 characters or less..."
            value={message}
            onChange={(e) => handleChange(e, "message")}
          />
          <span className={message.length >= 251 ? "message-length error" : "message-length"}>
            {250 - message.length} {" "}
            {message.length < 249 || message.length > 251 ? "charcters" : "charcter"} remaning
          </span>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
