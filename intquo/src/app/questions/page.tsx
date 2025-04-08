"use client";
import React, { useState, useEffect } from "react";

interface Question {
  id: number;
  question: string;
  user_answer: string;
  ai_answer: string;
  topic: string;
  subtopic: string;
  difficulty: string;
  college: string;
  company: string;
}

const Page: React.FC = () => {
  const [data, setData] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://intquo-server.onrender.com/question")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = async (type: "topic" | "college" | "company") => {
    const response = await fetch(
      `https://intquo-server.onrender.com/question/${type}/${search}`
    );
    const result = await response.json();
    if (result.length === 0) {
      alert("No data found");
    } else {
      setData(result);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Search by topic, college, or company"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button
              onClick={() => handleSearch("topic")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
            >
              Search by Topic
            </button>
            <button
              onClick={() => handleSearch("college")}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
            >
              Search by College
            </button>
            <button
              onClick={() => handleSearch("company")}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
            >
              Search by Company
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center text-lg font-medium text-gray-600">
            Loading...
          </div>
        ) : (
          <div className="grid gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.question}
                </h3>
                <div className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Your Answer:</span>{" "}
                  {item.user_answer}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">AI Answer:</span>{" "}
                  {item.ai_answer}
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  <span className="bg-gray-200 px-2 py-1 rounded">
                    Topic: {item.topic}
                  </span>
                  <span className="bg-gray-200 px-2 py-1 rounded">
                    Subtopic: {item.subtopic}
                  </span>
                  <span className="bg-gray-200 px-2 py-1 rounded">
                    Difficulty: {item.difficulty}
                  </span>
                  <span className="bg-gray-200 px-2 py-1 rounded">
                    College: {item.college}
                  </span>
                  <span className="bg-gray-200 px-2 py-1 rounded">
                    Company: {item.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
