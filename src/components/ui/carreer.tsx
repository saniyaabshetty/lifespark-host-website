"use client";

import React from "react";
import { useForm } from "react-hook-form";

const CareerForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full m-12 max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">We're Hiring</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Primary contact</label>
            <input
              type="text"
              id="contact"
              {...register('contact', { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.contact && <p className="text-red-500 text-xs mt-1">Contact is required</p>}
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              id="date"
              {...register('date', { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">Start date is required</p>}
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Why do you want to join Lifspark Technologies?</label>
            <textarea
              id="reason"
              {...register('reason', { required: true })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
            {errors.reason && <p className="text-red-500 text-xs mt-1">Reason is required</p>}
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
            <input
              type="file"
              id="resume"
              {...register('resume', { required: true })}
              className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.resume && <p className="text-red-500 text-xs mt-1">Resume is required</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-800 text-white px-4 py-2 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
