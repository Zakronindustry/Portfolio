import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_ewu5qu3',
      'template_vz2t7w3',
      formData,
      'aGM6Lwrz3qNX1nTrt'
    ).then((result) => {
      alert('Message Sent, We will get back to you shortly', result.text);
    }, (error) => {
      alert('An error occurred, Please try again', error.text);
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
  	<section className="bg-[#090325] text-white p-8" id="contact">
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-custom-blue rounded shadow">
      <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-[#090325]"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-[#090325]"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-[#090325]"
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Send Message</button>
    </form>
    <footer className="text-[10px] flex justify-evenly items-center flex-col mt-10">
    &copy; 2024 ZAKRON IT INDUSTRY . PRANAY JAIN 
    </footer>
    </section>
  );
};

export default ContactForm;
