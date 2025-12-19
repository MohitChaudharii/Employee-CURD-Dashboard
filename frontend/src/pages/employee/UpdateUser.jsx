import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams(); //Get the ID from the URL
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    });

    // 1. Fetch user data when component loads
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:9090/api/get/${id}`);
                const data = await response.json();
                setFormData(data); // Pre-fill the form with existing data
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // 2. Handle the Update Logic
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:9090/api/update/${id}`, {
                method: "PATCH", // Use PUT (or PATCH) for updates
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("User updated: ", data);

            if (response.ok) {
                navigate("/"); // Redirect to Dashboard after success
            } else {
                console.error("Failed to update user");
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-white  px-4 py-12">
            <div className="w-full max-w-md rounded-xl bg-slate-800 p-8 shadow-2xl border border-slate-700">
                
                <h1 className="mb-6 text-3xl font-bold text-center text-white">
                    Edit Employee
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
                            // Fixed: Changed text color to white and background to dark for readability
                            className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
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
                            className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
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
                            className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
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
                            className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-md bg-indigo-600 px-4 py-2 font-bold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                    >
                        Update Employee
                    </button>
                    
                    {/* Cancel Button */}
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="w-full rounded-md bg-slate-700 px-4 py-2 font-bold text-white transition-colors hover:bg-slate-600 focus:outline-none"
                    >
                        Cancel
                    </button>

                </form>
            </div>
        </div>
    );
}

export default UpdateUser;