"use client";
import { useState } from "react";
import Header from "../../components/Header";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e, field) => {
    if (field === "name") {
      setName(e.target.value)
      setNameError(false);
    }
    if (field === "email") {
      setEmail(e.target.value)
      setEmailError(false)
    };
    if (field === "message") {
      setMessage(e.target.value)
      setMessageError(false);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!message) {
      setMessageError(true);
    }
    if (message.length > 250) {
      setMessageError(true);
    }
    if (name && email && message && message.length <= 250) {
      setName("");
      setEmail("");
      setMessage("");
      setSuccess("This is just a form test!");
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <Header
          header="contact"
          subHeader="Feel free to contact me by filling out the form below and I will get back to you as soon as I can"
        />
        <form onSubmit={handleSubmit} autoComplete="off">
          {success && <div className="message success">{success}</div>}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="John"
            value={name}
            onChange={(e) => handleChange(e, "name")}
            className={nameError ? "input-error" : ""}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="johnsmith@example.com"
            value={email}
            onChange={(e) => handleChange(e, "email")}
            className={emailError ? "input-error" : ""}
          />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            placeholder="Message should 250 characters or less..."
            value={message}
            onChange={(e) => handleChange(e, "message")}
            className={messageError ? "input-error" : ""}
          />
          <span className={message.length >= 251 ? "message-length error" : "message-length"}>
            {250 - message.length}{" "}
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
