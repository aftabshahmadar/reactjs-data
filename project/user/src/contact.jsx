import React, { useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Contact() {
  // Refs for each input field
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const messageRef = useRef();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data from refs
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: numberRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await axios.post("http://localhost:5000/contact-us", formData);
      Swal.fire("Form submitted successfully!");
      console.log("Response:", response.data);

       // Clear the form fields
       nameRef.current.value = "";
       emailRef.current.value = "";
       numberRef.current.value = "";
       messageRef.current.value = "";

    } catch (error) {
      console.error("Error submitting the form:", error);
      Swal.fire("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="container mt-5 text-white mb-20">
    <h2 className="mb-4">Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control bg-white text-black custom-input rounded-lg py-3 px-4 text-lg w-full"
          id="name"
          placeholder="Your Name"
          ref={nameRef}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control bg-white text-black custom-input rounded-lg py-3 px-4 text-lg w-full"
          id="email"
          placeholder="Your Email"
          ref={emailRef}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Contact number
        </label>
        <input
          type="number"
          className="bg-white text-black custom-input rounded-lg py-3 px-4 text-lg w-full"
          id="number"
          placeholder="000-000-0000"
          ref={numberRef}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control bg-white text-black custom-input rounded-lg py-3 px-4 text-lg w-full"
          id="message"
          rows="4"
          placeholder="Your Message"
          ref={messageRef}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className=" w-full py-3 text-lg rounded"
        style={{ backgroundColor: "#08314A" }}
      >
        Submit
      </button>
    </form>
  </div>
  
  );
}
