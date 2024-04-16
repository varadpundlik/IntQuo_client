// app/interview/page.tsx
"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { headers } from 'next/headers';

type Question = {
  question: string;
  user_answer: string;
  ai_answer: string;
  topic: string;
  subtopic: string;
  difficulty: string;
};

const Page: React.FC = () => {
  // Update formData type to include an array of Question type
  const [formData, setFormData] = useState<{
    job_role: string;
    compensation: string;
    conducted_on: string;
    status: string;
    result: string;
    college: string;
    company: string;
    questions: Question[]; // Array of Question type
  }>({
    job_role: '',
    compensation: '',
    conducted_on: '',
    status: '',
    result: '',
    college: '',
    company: '',
    questions: [
      {
        question: '',
        user_answer: '',
        ai_answer: '',
        topic: '',
        subtopic: '',
        difficulty: '',
      },
    ],
  });

  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        {
          question: '',
          user_answer: '',
          ai_answer: '',
          topic: '',
          subtopic: '',
          difficulty: '',
        },
      ],
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('questions.')) {
      const parts = name.split('.');
      const index = parseInt(parts[1], 10); // Parse the index from the field name
      const field = parts[2]; // Get the field name from the parts
      const updatedQuestions = [...formData.questions];
      // Update the specific field of the question
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        [field]: value,
      };
      setFormData({
        ...formData,
        questions: updatedQuestions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://intquo-server.onrender.com/interview',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      const data = response.data;
      console.log(data); // Handle response from backend
      if(response.status === 201){
        alert('Interview added successfully');
        window.location.href = '/interview';
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='mt-80 h-screen flex justify-center items-center '>
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
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='job_role'>
            Company:
            <input
              className='text-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              name='company'
              value={formData.company}
              onChange={handleChange}
              placeholder='Enter Company'
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='job_role'>
            College:
            <input
              className='text-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              name='college'
              value={formData.college}
              onChange={handleChange}
              placeholder='Enter College'
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='conducted_on'>
            Conducted On:
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='date'
              name='conducted_on'
              value={formData.conducted_on}
              onChange={handleChange}
              placeholder='Enter date conducted'
            />
          </label>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='status'>
            Status:
            <select
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='status'
              value={formData.status}
              onChange={handleChange}
            >
              <option value=''>Select status</option>
              <option value='On-campus'>On-campus</option>
              <option value='Off-campus'>Off-campus</option>
            </select>
          </label>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='result'>
            Result:
            <select
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='result'
              value={formData.result}
              onChange={handleChange}
            >
              <option value=''>Select result</option>
              <option value='Selected'>Selected</option>
              <option value='Rejected'>Rejected</option>
            </select>
          </label>
        </div>
        <div className='mb-4'>
          <button
            type='button'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={addQuestion}
          >
            Add Question
          </button>
        </div>
        {formData.questions.map((question, index) => (
          <div key={index}>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={`questions.${index}.question`}>
                Question {index + 1}:
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  name={`questions.${index}.question`}
                  value={question.question}
                  onChange={handleChange}
                  placeholder={`Enter question ${index + 1}`}
                />
              </label>
            </div>
            {/* Add inputs for other question fields */}
            {/* Example for user_answer */}
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={`questions.${index}.user_answer`}>
                User Answer:
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  name={`questions.${index}.user_answer`}
                  value={question.user_answer}
                  onChange={handleChange}
                  placeholder={`Enter user answer for question ${index + 1}`}
                />
              </label>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={`questions.${index}.ai_answer`}>
                AI Answer:
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  name={`questions.${index}.ai_answer`}
                  value={question.ai_answer}
                  onChange={handleChange}
                  placeholder={`Enter AI answer for question ${index + 1}`}
                />
              </label>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={`questions.${index}.topic`}>
                Topic:
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  name={`questions.${index}.topic`}
                  value={question.topic}
                  onChange={handleChange}
                  placeholder={`Enter topic for question ${index + 1}`}
                />
              </label>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={`questions.${index}.subtopic`}>
                Subtopic:
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  name={`questions.${index}.subtopic`}
                  value={question.subtopic}
                  onChange={handleChange}
                  placeholder={`Enter subtopic for question ${index + 1}`}
                />
              </label>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={`questions.${index}.difficulty`}>
                Difficulty:
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  name={`questions.${index}.difficulty`}
                  value={question.difficulty}
                  onChange={handleChange}
                  placeholder={`Enter difficulty for question ${index + 1}`}
                />
              </label>
            </div>
          </div>          
        ))}
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
