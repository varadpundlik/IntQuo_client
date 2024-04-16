// app/interview/page.tsx
"use client"
import React, { useState } from 'react';

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    job_role: '',
    compensation: '',
    conducted_on: '',
    status: '',
    result: '',
    questions: [
      {
        question: '',
        user_answer: '',
        ai_answer: '',
        topic: '',
        subtopic: '',
        difficulty: '',
        company: '',
        college: ''
      }
    ]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://intquo-server.onrender.com/interview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data); // Handle response from backend
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='mt-16 h-screen flex justify-center items-center '>
      <form onSubmit={handleSubmit} className='max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='job_role'>
            Job Role:
            <input
              className='text-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              name='job_role'
              value={formData.job_role}
              onChange={handleChange}
              placeholder='Enter job role'
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='compensation'>
            Compensation:
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              name='compensation'
              value={formData.compensation}
              onChange={handleChange}
              placeholder='Enter compensation'
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='conducted_on'>
            Conducted On:
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              name='conducted_on'
              value={formData.conducted_on}
              onChange={handleChange}
              placeholder='Enter date conducted'
            />
          </label>
        </div>
        {/* Add fields for status, result, and questions */}
        {/* Add similar fields for other data */}
        <div className='flex items-center justify-between'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
