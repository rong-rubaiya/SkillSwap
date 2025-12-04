import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';


export default function AddSkills() {
  const [skill, setSkill] = useState({
    skillName: '',
    providerName: '',
    providerEmail: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill({ ...skill, [name]: value });
  };

  const handleAddSkill = () => {
    if (skill.skillName.trim() !== '') {
      setSkills([...skills, skill]);
      setSkill({
        skillName: '',
        providerName: '',
        providerEmail: '',
        price: '',
        description: '',
        category: '',
        image: ''
      });
    }
  };

  const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  

  return (
   <div className='w-11/12 py-16 flex justify-center items-center pl-12'>
      
       <section className=" w-full sm:w-3/4 lg:w-1/2  my-16 px-6 rounded shadow bg-white">
      <h2 className="text-3xl font-bold my-6 text-pastecolor text-center">Add Your Skills</h2>

      <div className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          name="skillName"
          value={skill.skillName}
          onChange={handleChange}
          placeholder="Skill Name"
          className="p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-bgpastecolor"
        />
        <input
          type="text"
          name="providerName"
          value={skill.providerName}
          onChange={handleChange}
          placeholder="Provider Name"
          className="p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-bgpastecolor"
        />
        <input
          type="email"
          name="providerEmail"
          value={skill.providerEmail}
          onChange={handleChange}
          placeholder="Provider Email"
          className="p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-bgpastecolor"
        />
        <input
          type="number"
          name="price"
          value={skill.price}
          onChange={handleChange}
          placeholder="Price ($)"
          className="p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-bgpastecolor"
        />
        <input
          type="text"
          name="category"
          value={skill.category}
          onChange={handleChange}
          placeholder="Category"
          className="p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-bgpastecolor"
        />
        <input
          type="text"
          name="image"
          value={skill.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-bgpastecolor"
        />
        <textarea
          name="description"
          value={skill.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-bgpastecolor"
        />
        <button onClick={handleAddSkill} className="btnStyle mt-2">
          Add Skill
        </button>
      </div>

     
    </section>

   </div>
  );
}
