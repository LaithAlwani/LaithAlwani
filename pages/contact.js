import styles from "../styles/contact.module.css";

export default function contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Contact us</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea type="text" name="name" />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    
  );
}
