import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const PostUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();     //perevent to reload the page
        console.log("Form Data Submitted:", formData);
        // Api logic goes here
        try {
            const response = await fetch("http://localhost:9090/api/save",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log("Employee created: ", data);
            navigate("/")
        } catch (error) {
            console.error("Error creating employee:", error.message);
            
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
            <div className="w-full max-w-md rounded-xl bg-slate-800 p-8 shadow-2xl border border-slate-700">
                
                <h1 className="mb-6 text-3xl font-bold text-center text-white">
                    Add New Employee
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full rounded-md border border-slate-700  px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full rounded-md border border-slate-700 px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full rounded-md border border-slate-700  px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Department Field */}
                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-slate-300 mb-2">
                            Department
                        </label>
                        <input
                            type="text"
                            name="department"
                            id="department"
                            placeholder="Enter Department"
                            value={formData.department}
                            onChange={handleInputChange}
                            className="w-full rounded-md border border-slate-700  px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-md bg-indigo-600 px-4 py-2 font-bold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                    >
                        Post Employee
                    </button>

                </form>
            </div>
        </div>
    );
};

export default PostUser;