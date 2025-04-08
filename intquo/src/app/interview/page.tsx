"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

type Props = {};

const Page: React.FC<Props> = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://intquo-server.onrender.com/interview")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Interviews</h1>
          <Link
            href="/interview/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            + Add Interview
          </Link>
        </div>

        {loading ? (
          <div className="text-center text-gray-600 text-lg">Loading...</div>
        ) : data.length === 0 ? (
          <div className="text-center text-gray-500">No interviews found.</div>
        ) : (
          <ul className="space-y-4">
            {data.map((item: any) => (
              <li key={item.id}>
                <Link href={`/interview/${item.id}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.job_role}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {item.company} • {item.college}
                    </p>
                    <p className="mt-2 text-blue-600 hover:underline text-sm">
                      Read Interview →
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Page;
