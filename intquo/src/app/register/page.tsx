"use client";
import { useState } from "react";
import Header from "./header";

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
      alert("Form submitted");
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-white flex justify-space-evenly">
        <form
          className="w-1/2 p-6 bg-white rounded shadow px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-6">Register</h1>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2"
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
              className="block text-gray-700 font-bold mb-2"
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
              className="block  text-gray-700 font-bold mb-2"
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
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
          >
            Register
          </button>
        </form>
        <div className="px-50">
          <img src="https://t.pimg.jp/064/613/534/1/64613534.jpg" />
        </div>
      </div>
    </div>
  );
}
