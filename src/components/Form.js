import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { ReactComponent as Logo } from "../style/assets/logo.svg";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import "../style/form.css"

function Form() {

  const buttonStyle = {
    color: "white",
    backgroundColor: "#7510F7",
    border: "none",
  };

  const [result, setResult] = useState()

  function sendEmail(e) {
    e.preventDefault();
    const service = process.env.REACT_APP_SERVICE;
    const publicKey = process.env.REACT_APP_KEY;
    emailjs.sendForm(`${service}`, 'template_blu9im5', e.target, `${publicKey}`)
      .then((result) => {
        console.log(result.text);
        setResult(result.text)
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }


  return (
    <div className="form-container">
      <div className="home-container">
        <Link to="/">  <button className="button-link"><Logo id="logo-form" /></button></Link>
      </div>

      <div className="form flex-center">
        <form action="index.html" autoComplete="off" onSubmit={sendEmail}>
          <div className="input-container">
            <input type="text" name="from_name" className="input" placeholder="Name" required />
          </div>
          <div className="input-container">
            <input type="email" name="email" className="input" placeholder="Email" required />
          </div>
          <div className="input-container">
            <input type="text" name="subject" className="input" placeholder="Subject" required />
          </div>
          <div className="input-container textarea">
            <textarea name="message" className="input" placeholder="Message" required></textarea>
          </div>
          <Button type="submit" variant="light" style={buttonStyle} id="button-form">Send</Button>
        </form>

      </div>
      {result === "OK" && <h2 style={{ color: "white" }}>Your message has been sent!</h2>}
    </div>

  )
}

export default Form
