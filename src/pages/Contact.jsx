import React, { useState } from "react";
import image from "../assets/Amir1.png";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <div className="bg-black text-white pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Contact Form Section */}
          <div className="lg:w-1/2 w-full">
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                Let's <span className="text-red-400">Work Together</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm available for freelance work and full-time opportunities.
                Let's discuss how we can bring your ideas to life with
                innovative solutions.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3  mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-red-400 text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium">+92 326 1971792</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300 ">
                <FaEnvelope className="text-red-400 text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium ">aliaminamir77@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-red-400 text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Pakistan</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-400 transition-colors text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-400 transition-colors text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Write a Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-400 transition-colors text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-400 transition-colors text-white placeholder-gray-400 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-400 hover:bg-red-500 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full flex justify-center ">
            <div className="relative ">
              <img
                src={image}
                alt="Professional portrait"
                className="bg-gray-900 w-full max-w-md h-auto rounded-2xl shadow-2xl transition-all hover:scale-105 cursor-pointer"
              />
              <span className="absolute inline-flex h-24 w-24 top-2">
                <span className=" w-full h-full rounded-full bg-red-600 opacity-75 animate-ping"></span>
              </span>
              <div className="absolute z-2 -bottom-4 -right-4 w-24 h-24 border-4 border-red-400 rounded-2xl"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-red-400 rounded-full"></div>
              <span className="absolute inline-flex h-20 w-20 top-80 right-0 sm:top-130">
                <span className=" w-full h-full rounded-2xl bg-red-600 opacity-75 animate-ping"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}