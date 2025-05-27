import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ConsultationModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_d38679m", // Your service ID
        "template_l11bsy4", // New template ID for consultations
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          message: form.message,
        },
        "02uQMqk_AnYi45TZP" // Your public key
      )
      .then(() => {
        alert("Consultation request sent!");
        onClose();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-pink-50 w-full max-w-lg p-6 md:p-8 rounded-xl shadow-xl relative">
        <button
          className="absolute top-4 right-4 text-2xl text-black hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Schedule a Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 text-black">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border rounded p-3"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border rounded p-3"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full border rounded p-3"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Tell us what you're looking for..."
            rows="5"
            className="w-full border rounded p-3"
            required
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="inline-block w-full font-semibold px-6 py-3 rounded  bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
