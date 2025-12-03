import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
   <div className="w-11/12 mx-auto pb-10 pt-30">
   
    <div className="max-w-md mx-auto  p-6 shadow-xl rounded-xl bg-white">
      <h1 className="text-2xl font-bold text-pastecolor mb-4">My Profile</h1>

      <img
        src={user.photoURL || "https://i.ibb.co/GV0Vf0y/user.png"}
        alt="User"
        className="w-28 h-28 rounded-full mx-auto mb-5 border shadow-md"
      />

      <div className="text-lg space-y-2">
        <p><strong>Name:</strong> {user.displayName || "N/A"}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
        <p><strong>Address:</strong> {user.address || "N/A"}</p>
        <p><strong>Hobbies:</strong> {user.hobbies || "N/A"}</p>
      </div>

      <Link to="/update-profile">
        <button className="btnStyle mt-6">Update Profile</button>
      </Link>
    </div>

   </div>
  );
}
