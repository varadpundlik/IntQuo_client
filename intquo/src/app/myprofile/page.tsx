"use client";
import { useState, useEffect } from "react";

type Props = {};

const Page: React.FC<Props> = () => {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    college: "",
    passout_year: "",
    current_org: "",
    first_name: "",
    last_name: "",
  });

  useEffect(() => {
    fetch("https://intquo-server.onrender.com/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, []);

  return (
    <div className="min-h-screen   flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          User Profile
        </h2>
        <div className="grid grid-cols-1 gap-4 text-gray-700 text-sm">
          <div>
            <span className="font-medium">Username:</span>{" "}
            {profile.username || "-"}
          </div>
          <div>
            <span className="font-medium">Email:</span>{" "}
            {profile.email || "-"}
          </div>
          <div>
            <span className="font-medium">First Name:</span>{" "}
            {profile.first_name || "-"}
          </div>
          <div>
            <span className="font-medium">Last Name:</span>{" "}
            {profile.last_name || "-"}
          </div>
          <div>
            <span className="font-medium">College:</span>{" "}
            {profile.college || "-"}
          </div>
          <div>
            <span className="font-medium">Passout Year:</span>{" "}
            {profile.passout_year || "-"}
          </div>
          <div>
            <span className="font-medium">Current Organization:</span>{" "}
            {profile.current_org || "-"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
