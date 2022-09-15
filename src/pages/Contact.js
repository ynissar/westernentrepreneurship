import React from "react";
import { ContactUs } from "../components/ContactUs";
import Subheader from "../components/Subheader";

function Contact() {
  return (
    <div>
      <Subheader title="Contact" subtitle={"Shoot us a message!"}></Subheader>
      <div className="flex justify-center mt-12">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
}

export default Contact;
