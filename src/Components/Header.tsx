// Header.tsx
import React from 'react';

interface HeaderProps {
  instituteName: string;
  location: string;
}

const Header: React.FC<HeaderProps> = ({ instituteName, location }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold">{instituteName}</h1>
      <p className="text-gray-500">{location}</p>
    </div>
  );
};

export default Header;

// Sidebar.tsx
// import React from 'react';

// interface SidebarProps {
//   profileComplete: number;
//   isSidebarCollapsed: boolean;
//   activeTab: string;
//   onTabChange: (tab: string) => void;
//   onToggleSidebar: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({
//   profileComplete,
//   isSidebarCollapsed,
//   activeTab,
//   onTabChange,
//   onToggleSidebar
// }) => {
//   const tabs = [
//     { id: 'dashboard', label: 'Dashboard' },
//     { id: 'teachers', label: 'Teachers' },
//     { id: 'students', label: 'Students' },
//     { id: 'courses', label: 'Courses' }
//   ];

//   return (
//     <div className={`bg-white shadow-md ${isSidebarCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
//       <div className="p-4">
//         <button 
//           onClick={onToggleSidebar}
//           className="w-full p-2 rounded hover:bg-gray-100"
//         >
//           {isSidebarCollapsed ? '→' : '←'}
//         </button>
//       </div>

//       <div className="p-4">
//         <div className="mb-4">
//           <p className="text-sm">Profile Complete</p>
//           <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//             <div 
//               className="bg-purple-600 h-2 rounded-full" 
//               style={{ width: `${profileComplete}%` }}
//             />
//           </div>
//         </div>

//         <nav className="space-y-2">
//           {tabs.map(tab => (
//             <button
//               key={tab.id}
//               onClick={() => onTabChange(tab.id)}
//               className={`w-full p-2 rounded text-left ${
//                 activeTab === tab.id ? 'bg-purple-100 text-purple-600' : 'hover:bg-gray-100'
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;