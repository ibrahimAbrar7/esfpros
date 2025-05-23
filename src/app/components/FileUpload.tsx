"use client";

import React, { useState } from "react";

const FileUpload = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    description: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dummy Submit:", formData);
    alert("File uploaded (just a demo)!");
  };

  return (
    <section className="flex items-center justify-center bg-white dark:bg-gray-800 px-4 py-6 md:py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl p-8 bg-gray-50 dark:bg-[#0f172a] rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
      >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          📄 File Upload
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />

        <textarea
          name="description"
          placeholder="Say whatever you want."
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          rows={3}
        ></textarea>

        <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Please upload <strong>jpg, png, jpeg, gif & pdf</strong> only
        </div>

        <input
          type="file"
          accept=".jpg,.jpeg,.png,.gif,.pdf"
          onChange={handleFileChange}
          className="w-full mb-4 text-gray-900 dark:text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          File Upload
        </button>
      </form>
    </section>
  );
};

export default FileUpload;
