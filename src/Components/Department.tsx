import React from "react";

const departments = [
  {
    id: 1,
    name: "Data Science",
    image: "https://via.placeholder.com/150",
    students: 120,
    duration: "2 Years",
    status: "Active",
    progress: 70,
  },
  {
    id: 2,
    name: "Web Development",
    image: "https://via.placeholder.com/150",
    students: 150,
    duration: "1.5 Years",
    status: "Active",
    progress: 85,
  },
  {
    id: 3,
    name: "Graphic Design",
    image: "https://via.placeholder.com/150",
    students: 90,
    duration: "1 Year",
    status: "Inactive",
    progress: 40,
  },
];

const Department: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 p-8">
      <h1 className="text-5xl font-bold text-white text-center mb-10 drop-shadow-lg">
        Department Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((department) => (
          <div
            key={department.id}
            className="relative bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50">
            {/* Image Section */}
            <img
              src={department.image}
              alt={department.name}
              className="w-full h-48 object-cover rounded-md mb-4 shadow-md"
            />
            {/* Department Details */}
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              {department.name}
            </h2>
            <p className="text-gray-700 mb-1">
              <strong>Total Students:</strong> {department.students}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Duration:</strong> {department.duration}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Status:</strong> <span className={`font-bold ${department.status === "Active" ? "text-green-500" : "text-red-500"}`}>{department.status}</span>
            </p>
            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full animate-pulse"
                style={{ width: `${department.progress}%` }}
              ></div>
            </div>
            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 rounded-lg hover:shadow-lg hover:scale-110 transition">
                View Details
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-lg hover:shadow-lg hover:scale-110 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
