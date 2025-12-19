import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:9090/api/getall");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees: ", error.message);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (employeeId) => {
    try {
      const response = await fetch(
        `http://localhost:9090/api/delete/${employeeId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== employeeId)
        );
      }

      console.log(`Employee with Id ${employeeId} deleted successfully...`);
    } catch (error) {
      console.error("Error deleting employee:", error.message);
    }
    console.log("Deleting employee with ID:", employeeId);
  };

  const handleUpdate = (employeeId) => {
    navigate(`/post-employee/${employeeId}`);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 underline">
            Employee Dashboard
          </h2>
          <button
            onClick={() => navigate("/post-employee")}
            className="rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
          >
            Add New Employee
          </button>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden rounded-lg shadow-xl border border-slate-700">
          <table className="min-w-full border-collapse border border-slate-700">
            {/* Table Header */}
            <thead className="bg-slate-800">
              <tr>
                <th
                  scope="col"
                  className="border border-slate-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-slate-200"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="border border-slate-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-slate-200"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="border border-slate-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-slate-200"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="border border-slate-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-slate-200"
                >
                  Department
                </th>
                <th
                  scope="col"
                  className="border border-slate-700 px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-slate-200"
                >
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-slate-900">
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="hover:bg-slate-800 transition-colors duration-150"
                  >
                    <td className="border border-slate-700 px-6 py-4 text-center text-sm font-medium text-white">
                      {employee.name}
                    </td>

                    <td className="border border-slate-700 px-6 py-4 text-center text-sm text-slate-300">
                      {employee.email}
                    </td>

                    <td className="border border-slate-700 px-6 py-4 text-center text-sm text-slate-300">
                      {employee.phone}
                    </td>

                    <td className="border border-slate-700 px-6 py-4 text-center text-sm text-slate-300">
                      <span className="inline-flex items-center rounded-full bg-indigo-900/50 px-2.5 py-0.5 text-xs font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/50">
                        {employee.department}
                      </span>
                    </td>

                    {/* Action Buttons */}
                    <td className="border border-slate-700 px-6 py-4 text-center text-sm font-medium">
                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => handleUpdate(employee.id)}
                          className="rounded bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="rounded bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-red-500"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="border border-slate-700 px-6 py-8 text-center text-sm text-slate-500"
                  >
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
