import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router";
import Swal from "sweetalert2";

const SingleSkill = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
 
  const skill = data.find((item) => item.skillId === Number(id));

  // Form state
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
      return;
    }

    // Show success toast
    Swal.fire({
      icon: "success",
      title: "Request for session booked successfully",
      showConfirmButton: false,
      timer: 2000,
    });

    // Clear form
    setForm({ name: "", email: "" });
  };

  if (!skill) {
    return (
      <div className="w-11/12 mx-auto text-center mt-20 text-2xl font-bold text-red-500">
        Skill not found
      </div>
    );
  }

  return (
   <div className="w-11/12 mx-auto pt-26 pb-9 flex justify-center items-center ">
     <div className=" w-3/4 p-8 border border-gray-300 shadow-2xl rounded-4xl">
      {/* Skill Info */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-64 object-cover rounded shadow mb-4 md:mb-0"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-pastecolor">{skill.skillName}</h1>
          <p><span className="font-semibold">Provider:</span> {skill.providerName}</p>
          <p><span className="font-semibold">Ratings:</span> {skill.rating}</p>
          <p><span className="font-semibold">Email:</span> {skill.providerEmail}</p>
          <p><span className="font-semibold">Price:</span> ${skill.price}</p>
          <p><span className="font-semibold">Category:</span> {skill.category}</p>
          <p className="italic">{skill.description}</p>
        </div>
      </div>

      {/* Book Session Form */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-pastecolor">Book a Session</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-bgpastecolor"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-bgpastecolor"
          />
          <button type="submit" className="btnStyle">
            Request Session
          </button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default SingleSkill;
