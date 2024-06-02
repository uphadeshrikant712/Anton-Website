import React from "react";
import PageSection from "./PageSection";

import contactImage from "../assets/contact-us.jpg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <PageSection
      name="contact"
      title="Contact"
      subtitle={`Get in Touch: Connecting with Us for Inquiries, Collaborations, and Support.

  `}
    >
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {/* left */}

        <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
          <img
            src={contactImage}
            alt="contact us"
            className="rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple"
          />

          <p className=" py-12 max-w-md">
          "Reach out to us for inquiries, collaborations, or support. We're here to assist you every step of the way.!"
          </p>

          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <div className="flex items-center justify-center rounded-full shadow-md shadow-purple-400 hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaLinkedin size={25} />
            </div>
            <div className="flex items-center justify-center rounded-full shadow-md shadow-purple-300 hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaTwitter size={25} />
            </div>
          </div>
        </div>

        {/* right */}

        <div className="w-full lg:w-1/2 h-full rounded-xl p-4">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;