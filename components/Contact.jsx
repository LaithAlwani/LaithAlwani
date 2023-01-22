import { useState } from "react";
import Header from "./Header";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");

  const handleChange = (e, field) => {
    if (field === "name") setName(e.target.value);
    else if (field === "email") setEmail(e.target.value);
    else setMessage(e.target.value);
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
    <section className="section">
      <Header
        header="contact"
        subHeader="Feel free to contact me by filling out the form below and I will get back to you as soon as I can"
      />
      <div className="container">
        <form onSubmit={handleSubmit} autoComplete="off" id="contact">
          {success && <div className="success">{success}</div>}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => handleChange(e, "name")}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleChange(e, "email")}
            required
          />
          <label htmlFor="message">Message</label>
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
      </div>
    </section>
  );
}
