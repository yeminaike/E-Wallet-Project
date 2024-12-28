import React, { useState } from 'react'

export default function SignUpForm() {

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phone_number: '',
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://signupform-rs0t.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message); // Display success message
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };
  return (
    <div className="w-full  md:px-[1rem] px-2 md:w-[90%]  ">


      <div className="text-black text-[1.9rem] font-medium  text-center   [@media(max-width:550px)]:mt-10 ">
        <p className="text-[#000] font-medium text-[1.9rem] text-center ">Welcome!👋</p>
        <p className="text-[#000] font-normal text-[1.15rem] px-[0.5rem] max-w-[100%] ">Sign up by entering the information below</p>
      </div>

      <form onSubmit={handleSubmit}>


<div className="mt-[3rem] w-full  [@media(max-width:640px)]:mx-1  [@media(max-width:640px)]:text-center ">
      <input
        type="text"
        placeholder="First Name"
          name="FirstName"
        value={formData?.FirstName}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300  mt-2 outline-none rounded-md"
      />

      <input
        type="text"
        placeholder="Last Name"
         name="LastName"
         
        value={formData?.SecondName}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300  mt-2 outline-none rounded-md"
      />

        <input
        type="email"
        name="email"
        placeholder="email"
        value={formData?.email}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300  mt-2 outline-none rounded-md"
      />

      <input
        type="tel"
        placeholder="phone number"
        name="phone_number"
        value={formData?.phone_number}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300  mt-2 outline-none rounded-md"
      />


      <div className="flex items-center justify-center mt-10">
      <button className='bg-[#55229E] w-full text-white rounded-2xl p-[1rem]'>Sign Up</button>
      </div>
     
      </div>

</form>
     
     
    </div>
  );
}