"use client";
import { useState } from "react";
import Header from "./header";
import Navbar from "../navbar/navbar";
import axios from "axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [passoutYear, setPassoutYear] = useState("");
  const [college, setCollege] = useState("");
  const [currentOrg, setCurrentOrg] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    if (!username) {
      alert("Username is required");
    } else if (!firstName) {
      alert("First name is required");
    } else if (!lastName) {
      alert("Last name is required");
    } else if (!password) {
      alert("Password is required");
    } else if (!password2) {
      alert("Confirm password is required");
    } else if (password !== password2) {
      alert("Passwords do not match");
    } else if (!email) {
      alert("Email is required");
    } else if (!passoutYear) {
      alert("Passout year is required");
    } else if (!college) {
      alert("College is required");
    } else if (!currentOrg) {
      alert("Current organization is required");
    } else if (
      username &&
      firstName &&
      lastName &&
      password &&
      email &&
      passoutYear &&
      college &&
      currentOrg
    ) {
      const user = {
        username,
        first_name:firstName,
        last_name:lastName,
        password,
        email,
        passout_year:passoutYear,
        college,
        currentOrg,
      };

      console.log(user);
      axios.post("http://localhost:5000/user", user).then((res:any) => {
        console.log(res);
        alert("User registered successfully!");
        const token = res.data.data.accessToken;
        localStorage.setItem("token", token);
      });

    }
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-black">
        {/* <Navbar /> */}
        <div className="flex justify-space-evenly bg-gray-800 mx-20 my-20 rounded border">
          <form
            className="w-1/2 p-6 rounded shadow px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold mb-6">Register</h1>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-white font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-white font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-white font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="passoutYear"
                className="block text-white font-bold mb-2"
              >
                Passout Year
              </label>
              <input
                type="number"
                id="passoutYear"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                value={passoutYear}
                onChange={(e) => setPassoutYear(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="college"
                className="block text-white font-bold mb-2"
              >
                College
              </label>
              <input
                type="text"
                id="college"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="currentOrg"
                className="block  text-white font-bold mb-2"
              >
                Current Organization
              </label>
              <input
                type="text"
                id="currentOrg"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                value={currentOrg}
                onChange={(e) => setCurrentOrg(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-700"
            >
              Register
            </button>
          </form>
          <div>
            <img
              className="px-650 pt-10"
              src="https://cdni.iconscout.com/illustration/premium/thumb/fill-registration-form-6492574-5402759.png?f=webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
