import React from "react";
import "./style.css";
import wtp from "../../assets/icons/icons8-whatsapp-ios-16-32.png";
import phone from "../../assets/icons/icons8-phone-call-outline-32.png";
import gmail from "../../assets/icons/icons8-gmail-logo-ios-16-32.png";
import { useState } from "react";
const index = () => {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function checkSub() {
    if (name != "" && email != "" && message != "") {
      setSubmit(true);
    }
  }
  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeMail(event) {
    setEmail(event.target.value);
  }
  function handleChangeMessage(event) {
    setMessage(event.target.value);
  }
  return (
    <section id="contact" className="contact-section">
      <div className="text">
        <span>send me a message via</span>
        <h3>Contact</h3>
      </div>
      <div className="forms">
        {submit ? (
          <div className="thank-you-meesage">
            <h5>Message Recieved!</h5>
            <p>thank you {name}</p>
            <small>want to send another message?</small>
            <button onClick={() => setSubmit(false)}>
              send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={() => checkSub()}
            method="post"
            action="mailto:hassanaabdll1@gmail.com"
          >
            <input
              onChange={handleChangeName}
              type="text"
              required
              name=""
              id=""
              placeholder="enter your  name"
            />
            <input
              onChange={handleChangeMail}
              required
              type="email"
              name=""
              id=""
              placeholder="enter your  email"
            />
            <textarea
              required
              onChange={handleChangeMessage}
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}

        <div className="forms-text">
          <p>
            If you have any questions or want to make me an offer, please feel
            free to drop me a line or more. I'll get back to you as soon as I
            can. I'm also available for collaborations. Reach out and let's
            TechNet (Connect). Also available via
          </p>
          <a href="tel:08102920194">
            <img src={phone} alt="" />
          </a>
          <a href="https://wa.me/08102920194">
            <img src={wtp} alt="" />
          </a>
          <a href="mailto:hassanaabdll1@gmail.com">
            <img src={gmail} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default index;
