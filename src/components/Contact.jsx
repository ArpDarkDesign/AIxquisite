import React, { useState, useEffect } from "react";
import { contact, cc } from "../assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    error: "",
    success: false,
  });

  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    let timer;
    if (formData.success) {
      timer = setTimeout(() => {
        setFormData({ ...formData, success: false });
        setIsSending(false); // Stop the animation when the message is sent successfully
      }, 2000); // Adjusted timing for the success message to display for 2 seconds
    }
    if (formData.error) {
      timer = setTimeout(() => {
        setFormData({ ...formData, error: "" });
      }, 2000); // Adjusted timing for the error message to display for 2 seconds
    }
    return () => clearTimeout(timer);
  }, [formData.success, formData.error]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setFormData({
        ...formData,
        error: "Name and email are required fields.",
        success: false,
      });
    } else {
      setIsSending(true); // Start the animation when the button is clicked
      // Simulate sending message (replace with actual submission logic)
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
          error: "",
          success: true,
        });
      }, 3000); // Adjusted timing for the "sending" animation to display for 3 seconds
    }
  };

  return (
    <div id="community" className="py-16 ">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 md:order-2">
          <img
            src={contact}
            alt="Contact"
            className="mx-auto md:ml-auto md:mr-0 rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:order-1 md:pr-8">
          <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-300">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 bg-gray-900 text-white px-4 py-2"
                  required
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 bg-gray-900 text-white px-4 py-2"
                  required
                  placeholder="Enter Your E-mail"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300">
                  Your Message <span className="text-sm">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-400 bg-gray-900 text-white px-4 py-2"
                  placeholder="Got a question, idea, or AI project in mind? Let's chat!"
                ></textarea>
              </div>
              {formData.error && (
                <p className="text-red-500">{formData.error}</p>
              )}
              {formData.success && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              <div className="text-center mt-6">
                {/* Conditional rendering for the button */}
                {!isSending ? (
                  <button
                    type="submit"
                    className="text-white  px-8 py-3 rounded-full hover:from-gray-900 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
                    onClick={handleSubmit}
                  >
                    Submit Request <span role="img" aria-label="rocket">🚀</span>
                  </button>
                ) : (
                  <div className="relative">
                    {/* Animated GIF as the sending animation */}
                    <img
                      src={cc}
                      alt="Sending..."
                      className="mx-auto"
                      style={{ maxHeight: "100px" }} // Adjust the maxHeight as needed
                    />
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
