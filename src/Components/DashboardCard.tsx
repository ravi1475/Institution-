import React from "react";
import { BookOpen, Users, GraduationCap, Sparkles, Target, Award } from "lucide-react";

const DashboardCard: React.FC = () => {
  const data = [
    {
      title: "Total Teachers",
      count: 42,
      growth: "1.5%",
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      decorativeIcon: <Sparkles className="w-5 h-5 text-purple-400 absolute top-3 right-3" />,
      items: [
        { image: "/Ankit.jpeg", name: "Ajay Chauhan", detail: "Science" },
        { image: "/Riya.jpeg", name: "Riya Sharma", detail: "Mathematics" },
      ],
      detailLabel: "Subject",
      gradient: "from-violet-700 via-purple-700 to-indigo-700",
    },
    {
      title: "Total Students",
      count: 856,
      growth: "2.5%",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      decorativeIcon: <Target className="w-5 h-5 text-blue-400 absolute top-3 right-3" />,
      items: [
        { image: "/Ajay1.jpeg", name: "Ankit Verma", detail: "2nd" },
        { image: "/Priya.jpeg", name: "Priya Singh", detail: "3rd" },
      ],
      detailLabel: "Class",
      gradient: "from-blue-700 via-indigo-700 to-blue-700",
    },
    {
      title: "Total Courses",
      count: 24,
      growth: "3.5%",
      icon: <BookOpen className="w-8 h-8 text-indigo-800" />,
      decorativeIcon: <Award className="w-5 h-5 text-indigo-400 absolute top-3 right-3" />,
      items: [
        { image: "/api/placeholder/40/40", name: "Mathematics", duration: "1 Yr", detail: "Active" },
        { image: "/api/placeholder/40/40", name: "Science", duration: "2 Yr", detail: "Ongoing" },
      ],
      detailLabel: "Status",
      gradient: "from-indigo-700 via-purple-700 to-blue-700",
    },
  ];

  return (
    <div className="flex flex-nowrap gap-7 p-4 overflow-x-auto">
      {/* Profile Card */}
      <div className="min-w-[350px] bg-gradient-to-br from-purple-200 via-white to-blue-200 rounded-lg shadow-md p-4 flex flex-col items-center text-center">
        <div className="relative">
          <img
            src="/download.jpeg"
            alt="Profile"
            className="w-16 h-16 rounded-full border-3 border-white object-cover shadow-md"
          />
        </div>
        <h2 className="text-lg font-bold text-gray-800 mt-">Maharshi Dayanand University</h2>
        <p className="text-sm text-gray-600"> Rohtak</p>
        <button className="mt-4 px-4 py-1.5 text-sm text-white bg-gradient-to-r from-purple-700 to-blue-700 rounded-full shadow-sm">
          Edit Profile
        </button>
        <div className="mt-4 w-full text-left space-y-2">
          <div className="flex justify-between items-center text-xs text-gray-700 p-1.5 rounded">
            <span>Status</span>
            {/* <div className="flex justify-between text-sm text-gray-700 p-2 rounded-lg hover:bg-gray-50">
            <span>Chat History</span>
             <span className="font-medium">156</span>
           </div> */}
            <div className="flex items-center">
              <span className="mr-1.5 text-green-600 font-medium">Online</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-700 p-1.5 rounded">
            
            <span>Chat History</span>
            <span className="font-medium">156</span>
          </div>
          <div className="flex justify-between text-xs text-gray-700 p-1.5 rounded">
            
            <span>Saved Chat</span>
            <span className="font-medium">43</span>
          </div>

          <div className="flex justify-between text-xs text-gray-700 p-1.5 rounded">
            
            <span>Profile Completed</span>
            <span className="font-medium">90%</span>
          </div>
        </div>
      </div>

      {/* Data Cards */}
      {data.map((card, index) => (
        <div
          key={index}
          className={`min-w-[280px] rounded-lg shadow-md p-4 bg-gradient-to-r ${card.gradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-white opacity-95"></div>
          {card.decorativeIcon}
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800">
                    {card.title}
                  </h3>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                    {card.count}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  +{card.growth}
                </span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-1 text-gray-600">Profile</th>
                    <th className="text-left px-1 text-gray-600">Name</th>
                    <th className="text-left px-1 text-gray-600">{card.detailLabel}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {card.items.map((item, i) => (
                    <tr key={i}>
                      <td className="py-2 px-1">
                        <img
                          src={item.image}
                          alt="Avatar"
                          className="w-8 h-8 rounded-lg object-cover shadow-sm"
                        />
                      </td>
                      <td className="px-1 font-medium text-gray-700">{item.name}</td>
                      <td className="px-1">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          item.detail === 'Active' ? 'bg-green-100 text-green-700' :
                          item.detail === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {item.detail}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="mt-3 w-full py-1.5 text-xs font-medium bg-white/60 rounded-lg text-gray-700 shadow-sm">
              View All
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;