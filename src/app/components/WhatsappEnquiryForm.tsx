"use client";
import React, { useState } from "react";

const WHATSAPP_NUMBER = "919496826294";

export default function WhatsappEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    "Hi Malabar Kombucha, I would like to enquire about your products."
  );

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Business Enquiry from ${name} (${email}): %0A${encodeURIComponent(message)}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSend}
      className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col gap-4 max-w-xl mx-auto"
    >
      <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        Business Enquiry
      </h3>
      <input
        type="text"
        required
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 focus:border-green-500 outline-none"
      />
      <input
        type="email"
        required
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 focus:border-green-500 outline-none"
      />
      <textarea
        required
        placeholder="Your Message"
        rows={4}
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 focus:border-green-500 outline-none"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition-colors duration-200 mt-2"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
