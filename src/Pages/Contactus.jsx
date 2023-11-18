import axios from "axios";
import { useState } from "react";

function Contactus(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handlemessag = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3003/api/messages", {
        name,
        email,
        subject,
        message,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <>
   
      <div className="container border mt-5">
        <h3 className="card-header text-center bg-primary text-light rounded p-3">
          Contact us Foam
        </h3>
        <form onSubmit={handlemessag}>
          <label htmlFor="name">Enter your name</label>
          <div className="form-floating mb-3">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="name"
              placeholder="Mr x"
            />
          </div>

          <label htmlFor="email">Enter your email</label>
          <div className="form-floating mb-3">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>

          <label htmlFor="subject">Subject</label>
          <div className="form-floating mb-3">
            <input
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              type="text"
              className="form-control"
              id="subject"
              placeholder="For query"
            />
          </div>

          <label htmlFor="message">Enter your message</label>
          <div className="form-floating mb-3">
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              id="message"
            ></textarea>
          </div>

          <button className="btn btn-warning" type="submit">
            Send message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contactus;
