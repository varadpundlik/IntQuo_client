"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Animation from "../ui/assests/login-animate.svg";

type Props = {};

const Page: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    fetch("https://intquo-server.onrender.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
          window.location.href = "/myprofile";
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-black">
        {/* <Navbar /> */}
        <div className="flex flex-col md:flex-row justify-center items-center bg-gray-800 mx-2 md:mx-20 my-20 rounded border">
          <form
            className="w-full md:w-1/2 p-6 rounded shadow px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
          <div className="flex justify-center items-center">
            <Image src={Animation} alt="Login Animation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
