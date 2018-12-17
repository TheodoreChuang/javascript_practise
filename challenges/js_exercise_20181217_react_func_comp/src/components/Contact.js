import React from "react";

import PhoneContact from "./contact/PhoneContact";
import EmailContact from "./contact/EmailContact";
import TwitterContact from "./contact/TwitterContact";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Details</h2>
      <PhoneContact />
      <EmailContact />
      <TwitterContact />
    </section>
  );
};

export default Contact;
