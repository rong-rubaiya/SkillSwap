import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

export default function UpdateProfile() {
  const { user, updateUserProfile, updateExtraProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");
  const [hobbies, setHobbies] = useState(user?.hobbies || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate=useNavigate()

  const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Update Firebase Auth profile
      await updateUserProfile(name, photoURL);

      // Update extra fields
      updateExtraProfile({ phone, address, hobbies });

       Swal.fire({
      icon: "success",
      title: "Profile Updated!",
      text: "Your profile has been updated successfully.",
      showConfirmButton: true,
    });
     navigate('/my-profile')

  } catch (error) {
    console.error(error);
    // SweetAlert error popup
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong while updating your profile.",
    });
   
   
  }
    
  setLoading(false);
  };

  return (
    <div className="w-11/12 mx-auto pb-10 pt-20">
      <div className="max-w-md mx-auto mt-10 p-6 shadow-xl rounded-xl bg-white">
      <h1 className="text-2xl font-bold text-pastecolor mb-4">Update Profile</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
           className="border rounded-sm p-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Photo URL</label>
          <input
            type="text"
            className="border rounded-sm p-1"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold">Phone</label>
          <input
            type="text"
             className="border rounded-sm p-1"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold">Address</label>
          <input
            type="text"
            className="border rounded-sm p-1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold">Hobbies</label>
          <input
            type="text"
            className="border rounded-sm p-1"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btnStyle mt-4"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>

        {message && <p className="mt-2 text-center">{message}</p>}
      </form>
    </div>
    </div>
  );
}
