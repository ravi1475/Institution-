// import React from 'react';
// import { Home, MessageSquare, User, Settings, ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react';
// import { useTheme } from './ThemeContext';

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
//   const { isDarkMode, toggleTheme } = useTheme();

//   return (
//     <aside className={`transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'} 
//       ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white/90'} shadow-lg flex flex-col`}>
//       {/* Rest of the sidebar code remains the same, just add dark mode classes */}
//       <button
//         onClick={toggleTheme}
//         className="absolute bottom-4 right-4 p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700"
//       >
//         {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//       </button>
//     </aside>
//   );
// };

// export default Sidebar;