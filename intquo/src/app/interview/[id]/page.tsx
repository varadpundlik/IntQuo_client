"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

type Props = {};

const Page: React.FC<Props> = () => {
  const [data, setData] = useState({
    company: "",
    college: "",
    conducted_on: "",
    job_role: "",
    compensation: 0,
    status: "",
    result: "",
    Questions: [],
    User: { username: "" },
  });
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const id = pathname.split("/")[2];
    fetch(`https://intquo-server.onrender.com/interview/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {loading ? (
          <div className="text-center text-lg text-gray-600">Loading...</div>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {data.job_role} Interview at {data.company}
            </h1>
            <div className="text-sm text-gray-700 space-y-1 mb-6">
              <p>
                <span className="font-medium">College:</span> {data.college}
              </p>
              <p>
                <span className="font-medium">Conducted On:</span>{" "}
                {data.conducted_on}
              </p>
              <p>
                <span className="font-medium">Status:</span> {data.status}
              </p>
              <p>
                <span className="font-medium">Result:</span> {data.result}
              </p>
              <p>
                <span className="font-medium">Compensation:</span> ₹
                {data.compensation}
              </p>
              <p>
                <span className="font-medium">Posted by:</span>{" "}
                {data.User.username}
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Questions
            </h2>
            <div className="space-y-6">
              {data.Questions.map((question: any) => (
                <div
                  key={question.id}
                  className="bg-gray-50 p-5 rounded-xl border border-gray-200"
                >
                  <p className="text-gray-800 font-medium mb-1">
                    {question.question}
                  </p>
                  <p className="text-sm text-gray-700 mb-1">
                    <span className="font-medium">Your Answer:</span>{" "}
                    {question.user_answer}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-medium">AI Answer:</span>{" "}
                    {question.ai_answer}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                    <span className="bg-gray-200 px-2 py-1 rounded">
                      Topic: {question.topic}
                    </span>
                    <span className="bg-gray-200 px-2 py-1 rounded">
                      Subtopic: {question.subtopic}
                    </span>
                    <span className="bg-gray-200 px-2 py-1 rounded">
                      Difficulty: {question.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
