
// import React, { useState, useEffect, ReactNode, Children } from 'react';
// import { 
//   Bell, 
//   Menu, 
//   Sun, 
//   Moon,
//   Search,
//   MessageSquare,
//   Users,
//   BookOpen,
//   Calendar,
//   Settings,
//   HelpCircle,
//   LogOut,
//   Home,
//   X,
//   TrendingUp,
//   IndianRupee ,
  
// } from 'lucide-react';
// import DashboardCard from './DashboardCard';

// import InstitutionDashboard from './Subjectcard';
// import ExamStatisticsDashboard from './ExamStatistics'
// import SalesDashboard from './salesdashboard'



// interface InstituteInfo {
//   name: string;
//   address: string;
//   profileImage: string;
//   status: boolean;
//   chatHistory: number;
//   savedChat: number;
//   profileCompletion: number;
//   isOnline: boolean;
// }

// interface StatCard {
//   title: string;
//   value: number;
//   growth?: number;
//   icon: React.ReactNode;
// }

// interface NavItem {
//   icon: React.ReactNode;
//   label: string;
//   path: string;
// }

// interface Notification {
//   id: number;
//   text: string;
//   time: string;
//   unread: boolean;
// }

// interface SearchResult {
//   type: string;
//   name: string;
//   id: string;
// }

// // interface DashboardProps {
// //     children: ReactNode;
// //   }

  



// const DashboardHeader: React.FC = () => {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem('darkMode') === 'true' || 
//         window.matchMedia('(prefers-color-scheme: dark)').matches;
        
//     }
//     return false;
//   });
//   const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [activeNav, setActiveNav] = useState<string>('Dashboard');
//   const [showNotifications, setShowNotifications] = useState<boolean>(false);
//   const [notifications, setNotifications] = useState<Notification[]>([
//     { id: 1, text: 'New message from John', time: '5m ago', unread: true },
//     { id: 2, text: 'Course update available', time: '1h ago', unread: true },
//     { id: 3, text: 'Student enrollment request', time: '2h ago', unread: false },
//   ]);
//   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
//   const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  
//   const instituteInfo: InstituteInfo = {
//     name: "Institution Dashboard",
//     address: "A-11 Janakpuri East, Delhi",
//     profileImage: "/Im.jpeg",
//     status: true,
//     chatHistory: 0,
//     savedChat: 0,
//     profileCompletion: 90,
//     isOnline: true
//   };

//   const statsCards: StatCard[] = [
//     {
//       title: "Total Revenue",
//       value: 125000,
//       growth: 8.5,
//       icon: <IndianRupee  className="w-10 h-10 text-green-500" />
//     },
//     {
//       title: "Total Teachers",
//       value: 70,
//       growth: 2.5,
//       icon: <Users className="w-10 h-10 text-blue-500" />
//     },
//     {
//       title: "Total Students",
//       value: 370,
//       growth: 2.5,
//       icon: <Users className="w-10 h-10 text-purple-500" />
//     },
//     {
//       title: "Total Courses",
//       value: 80,
//       icon: <BookOpen className="w-10 h-10 text-orange-500" />
//     }
//   ];

// //   const navItems: NavItem[] = [
// //     { icon: <Home className="w-6 h-6" />, label: "Dashboard", path: "/" },
// //     { icon: <MessageSquare className="w-6 h-6" />, label: "Messages", path: "/messages" },
// //     { icon: <Users className="w-6 h-6" />, label: "Students", path: "/students" },
// //     { icon: <BookOpen className="w-6 h-6" />, label: "Courses", path: "/courses" },
// //     { icon: <HelpCircle className="w-6 h-6" />, label: "Sales Analytics", path: "/help" },
// //     { icon: <Calendar className="w-6 h-6" />, label: "Schedule", path: "/schedule" },


    
    

// //     // Just showing the modified item, rest remains same
// //     {
// //       icon: <TrendingUp className="w-6 h-6 animate-pulse text-green-500" />,
// //       label: "Sales Analytics", 
// //       path: "/help"
// //     },
    
   






// //     { icon: <Settings className="w-6 h-6" />, label: "Settings", path: "/settings" },
// //     { icon: <HelpCircle className="w-6 h-6" />, label: "Help", path: "/help" },

// //   ];                    this code for navigation iteam that are simple and good ..


  
//   const navItems: NavItem[] = [
//     {
//       icon: <Home className="w-6 h-6 transition-transform hover:scale-110 hover:text-blue-500" />,
//       label: "Dashboard",
//       path: "/"
//     },
//     {
//       icon: <MessageSquare className="w-6 h-6 animate-bounce hover:text-green-500" />,
//       label: "Messages",
//       path: "/messages"
//     },
//     {
//       icon: <Users className="w-6 h-6 transition-all hover:rotate-12 hover:text-purple-500" />,
//       label: "Students",
//       path: "/students"
//     },
//     {
//       icon: <BookOpen className="w-6 h-6 hover:text-yellow-500 animate-pulse" />,
//       label: "Courses",
//       path: "/courses"
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6 text-green-500 animate-bounce hover:text-green-600" />,
//       label: "Sales Analytics",
     
//       path: "/sales"
//     },
//     {
//       icon: (
//         <Calendar 
//           className="w-6 h-6 transition-all hover:rotate-[360deg] duration-500 hover:text-blue-500" 
//         />
//       ),
//       label: "Schedule",
//       path: "/schedule"
//     },

//     { icon: <Settings className="w-6 h-6" />, label: "Settings", path: "/settings" },
    
//     {
//       icon: (
//         <HelpCircle 
//           className="w-6 h-6 transition-all hover:scale-125 duration-300 hover:text-purple-600" 
//         />
//       ),
//       label: "Help",
//       path: "/help"
//     },
//   ];






//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       document.documentElement.classList.toggle('dark', isDarkMode);
//       localStorage.setItem('darkMode', isDarkMode.toString());
//     }
//   }, [isDarkMode]);

//   const handleSearch = (query: string): void => {
//     setSearchQuery(query);
//     if (query.length > 0) {
//       setSearchResults([
//         { type: 'student', name: 'John Doe', id: '001' },
//         { type: 'course', name: 'Mathematics 101', id: 'C001' },
//         { type: 'teacher', name: 'Prof. Smith', id: 'T001' },
//       ]);
//       setShowSearchResults(true);
//     } else {
//       setSearchResults([]);
//       setShowSearchResults(false);
//     }
//   };

//   const markNotificationAsRead = (id: number): void => {
//     setNotifications(notifications.map(notif => 
//       notif.id === id ? { ...notif, unread: false } : notif
//     ));
//   };

//   const StatCard: React.FC<StatCard> = ({ title, value, growth, icon }) => (
//     <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
//       <div className="flex items-center gap-4">
//         <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
//           {icon}
//         </div>
//         <div>
//           <h3 className="text-gray-500 dark:text-gray-400 text-sm">{title}</h3>
//           <div className="flex items-center gap-2">
//             <span className="text-2xl font-semibold dark:text-white">
//               {title.includes('Revenue') ? `$${value.toLocaleString()}` : value.toLocaleString()}
//             </span>
//             {growth && (
//               <span className="text-green-500 dark:text-green-400 text-sm">
//                 (+{growth}%) ↑
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
//       {/* Sidebar */}
//       <aside className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
//         <div className="p-4 flex items-center gap-4">
//           <img src={instituteInfo.profileImage} alt="Logo" className="w-10 h-10 rounded-full" />
//           {isSidebarOpen && <span className="font-semibold dark:text-white">{instituteInfo.name}</span>}
//         </div>

//         {/* Search Bar */}
//         {isSidebarOpen && (
//           <div className="px-4 mb-6">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => handleSearch(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
//               />
//               {showSearchResults && searchQuery && (
//                 <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
//                   {searchResults.map((result) => (
//                     <div key={result.id} className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b dark:border-gray-700 last:border-b-0">
//                       <div className="font-medium dark:text-white">{result.name}</div>
//                       <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">{result.type}</div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Navigation Items */}
//         <nav className="space-y-2 px-2">
//           {navItems.map((item, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveNav(item.label)}
//               className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200
//                 ${activeNav === item.label 
//                   ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300' 
//                   : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'}
//                 ${!isSidebarOpen && 'justify-center'}`}
//             >
//               {item.icon}
//               {isSidebarOpen && <span>{item.label}</span>}
//             </button>
//           ))}
//         </nav>

//         {/* Logout Button */}
//         <button className="absolute bottom-4 left-0 right-0 mx-2 flex items-center gap-4 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200">
//           <LogOut className="w-6 h-6" />
//           {isSidebarOpen && <span>Logout</span>}
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
//         {/* Header */}
//         <header className="bg-white dark:bg-gray-800 shadow-sm">
//           <div className="flex items-center justify-between px-6 py-4">
//             <button
//               onClick={() => setSidebarOpen(!isSidebarOpen)}
//               className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
//             >
//               <Menu className="w-6 h-6 dark:text-white" />
//             </button>

//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//                 className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
//               >
//                 {isDarkMode ? 
//                   <Sun className="w-6 h-6 text-yellow-500" /> : 
//                   <Moon className="w-6 h-6 text-gray-600" />
//                 }
//               </button>
              
//               <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg">EN</span>
              
//               <div className="relative">
//                 <button
//                   onClick={() => setShowNotifications(!showNotifications)}
//                   className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 relative"
//                 >
//                   <Bell className="w-6 h-6 dark:text-white" />
//                   {notifications.some(n => n.unread) && (
//                     <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
//                   )}
//                 </button>

//                 {showNotifications && (
//                   <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
//                     <div className="p-4 border-b dark:border-gray-700">
//                       <div className="flex items-center justify-between">
//                         <h3 className="font-semibold dark:text-white">Notifications</h3>
//                         <button 
//                           onClick={() => setShowNotifications(false)}
//                           className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
//                         >
//                           <X className="w-5 h-5" />
//                         </button>
//                       </div>
//                     </div>
//                     <div className="max-h-96 overflow-y-auto">
//                       {notifications.map((notif) => (
//                         <div
//                           key={notif.id}
//                           onClick={() => markNotificationAsRead(notif.id)}
//                           className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b dark:border-gray-700 last:border-b-0 
//                             ${notif.unread ? 'bg-purple-50 dark:bg-purple-900/20' : ''}`}
//                         >
//                           <div className="text-sm dark:text-white">{notif.text}</div>
//                           <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notif.time}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Content */}
//         <div className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {statsCards.map((card, index) => (
//               <StatCard key={index} {...card} />
//             ))}
//           </div>
//         </div>
//         <div>
//             <DashboardCard/>
//         </div>
//         {/* <div>

//             <Department/>
//         </div> */}
//         <div>
//             <InstitutionDashboard/>
//         </div>

//         <div>
//         <ExamStatisticsDashboard/>
//         </div>
// <div>
// <SalesDashboard/>
// </div>


//         {/* Footer */}
//         <footer className="bg-white dark:bg-gray-800 shadow-sm text-center p-4 text-sm text-gray-500 dark:text-gray-400">
//           © 2024 RK Institute. All rights reserved.
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default DashboardHeader;
















import React, { useState, useEffect, ReactNode, Children } from 'react';
import { 
  Bell, 
  Menu, 
  Sun, 
  Moon,
  Search,
  MessageSquare,
  Users,
  BookOpen,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  Home,
  X,
  TrendingUp,
  IndianRupee,
  
} from 'lucide-react';
import DashboardCard from './DashboardCard';

import InstitutionDashboard from './Subjectcard';
import ExamStatisticsDashboard from './ExamStatistics'
import SalesDashboard from './salesdashboard'



interface InstituteInfo {
  name: string;
  address: string;
  profileImage: string;
  status: boolean;
  chatHistory: number;
  savedChat: number;
  profileCompletion: number;
  isOnline: boolean;
}

interface StatCard {
  title: string;
  value: number;
  growth?: number;
  icon: React.ReactNode;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

interface Notification {
  id: number;
  text: string;
  time: string;
  unread: boolean;
}

interface SearchResult {
  type: string;
  name: string;
  id: string;
}

// interface DashboardProps {
//     children: ReactNode;
//   }

  



const DashboardHeader: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
        
    }
    return false;
  });
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeNav, setActiveNav] = useState<string>('Dashboard');
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, text: 'New message from John', time: '5m ago', unread: true },
    { id: 2, text: 'Course update available', time: '1h ago', unread: true },
    { id: 3, text: 'Student enrollment request', time: '2h ago', unread: false },
  ]);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  
  const instituteInfo: InstituteInfo = {
    name: "Institution Dashboard",
    address: "A-11 Janakpuri East, Delhi",
    profileImage: "/Im.jpeg",
    status: true,
    chatHistory: 0,
    savedChat: 0,
    profileCompletion: 90,
    isOnline: true
  };

  const statsCards: StatCard[] = [
    {
      title: "Total Revenue",
      value: 125000,
      growth: 8.5,
      icon: <IndianRupee className="w-10 h-10 text-green-500" />
    },
    {
      title: "Total Teachers",
      value: 70,
      growth: 2.5,
      icon: <Users className="w-10 h-10 text-blue-500" />
    },
    {
      title: "Total Students",
      value: 370,
      growth: 2.5,
      icon: <Users className="w-10 h-10 text-purple-500" />
    },
    {
      title: "Total Courses",
      value: 80,
      icon: <BookOpen className="w-10 h-10 text-orange-500" />
    }
  ];

//   const navItems: NavItem[] = [
//     { icon: <Home className="w-6 h-6" />, label: "Dashboard", path: "/" },
//     { icon: <MessageSquare className="w-6 h-6" />, label: "Messages", path: "/messages" },
//     { icon: <Users className="w-6 h-6" />, label: "Students", path: "/students" },
//     { icon: <BookOpen className="w-6 h-6" />, label: "Courses", path: "/courses" },
//     { icon: <HelpCircle className="w-6 h-6" />, label: "Sales Analytics", path: "/help" },
//     { icon: <Calendar className="w-6 h-6" />, label: "Schedule", path: "/schedule" },


    
    

//     // Just showing the modified item, rest remains same
//     {
//       icon: <TrendingUp className="w-6 h-6 animate-pulse text-green-500" />,
//       label: "Sales Analytics", 
//       path: "/help"
//     },
    
   






//     { icon: <Settings className="w-6 h-6" />, label: "Settings", path: "/settings" },
//     { icon: <HelpCircle className="w-6 h-6" />, label: "Help", path: "/help" },

//   ];                    this code for navigation iteam that are simple and good ..


  
  const navItems: NavItem[] = [
    {
      icon: <Home className="w-6 h-6 transition-transform hover:scale-110 hover:text-blue-500" />,
      label: "Dashboard",
      path: "/"
    },
    {
      icon: <MessageSquare className="w-6 h-6 animate-bounce hover:text-green-500" />,
      label: "Messages",
      path: "/messages"
    },
    {
      icon: <Users className="w-6 h-6 transition-all hover:rotate-12 hover:text-purple-500" />,
      label: "Students",
      path: "/students"
    },
    {
      icon: <BookOpen className="w-6 h-6 hover:text-yellow-500 animate-pulse" />,
      label: "Courses",
      path: "/courses"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500 animate-bounce hover:text-green-600" />,
      label: "Sales Analytics",
     
      path: "/sales"
    },
    {
      icon: (
        <Calendar 
          className="w-6 h-6 transition-all hover:rotate-[360deg] duration-500 hover:text-blue-500" 
        />
      ),
      label: "Schedule",
      path: "/schedule"
    },

    { icon: <Settings className="w-6 h-6" />, label: "Settings", path: "/settings" },
    
    {
      icon: (
        <HelpCircle 
          className="w-6 h-6 transition-all hover:scale-125 duration-300 hover:text-purple-600" 
        />
      ),
      label: "Help",
      path: "/help"
    },
  ];






  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDarkMode);
      localStorage.setItem('darkMode', isDarkMode.toString());
    }
  }, [isDarkMode]);

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
    if (query.length > 0) {
      setSearchResults([
        { type: 'student', name: 'John Doe', id: '001' },
        { type: 'course', name: 'Mathematics 101', id: 'C001' },
        { type: 'teacher', name: 'Prof. Smith', id: 'T001' },
      ]);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const markNotificationAsRead = (id: number): void => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, unread: false } : notif
    ));
  };

  const StatCard: React.FC<StatCard> = ({ title, value, growth, icon }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-gray-500 dark:text-gray-400 text-sm">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold dark:text-white">
              {title.includes('Revenue') ? `₹${value.toLocaleString()}` : value.toLocaleString()}
            </span>
            {growth && (
              <span className="text-green-500 dark:text-green-400 text-sm">
                (+{growth}%) ↑
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex items-center gap-4">
          <img src={instituteInfo.profileImage} alt="Logo" className="w-10 h-10 rounded-full" />
          {isSidebarOpen && <span className="font-semibold dark:text-white">{instituteInfo.name}</span>}
        </div>

        {/* Search Bar */}
        {isSidebarOpen && (
          <div className="px-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              {showSearchResults && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                  {searchResults.map((result) => (
                    <div key={result.id} className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b dark:border-gray-700 last:border-b-0">
                      <div className="font-medium dark:text-white">{result.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">{result.type}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="space-y-2 px-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveNav(item.label)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200
                ${activeNav === item.label 
                  ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'}
                ${!isSidebarOpen && 'justify-center'}`}
            >
              {item.icon}
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <button className="absolute bottom-4 left-0 right-0 mx-2 flex items-center gap-4 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200">
          <LogOut className="w-6 h-6" />
          {isSidebarOpen && <span>Logout</span>}
        </button>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <Menu className="w-6 h-6 dark:text-white" />
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                {isDarkMode ? 
                  <Sun className="w-6 h-6 text-yellow-500" /> : 
                  <Moon className="w-6 h-6 text-gray-600" />
                }
              </button>
              
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg">EN</span>
              
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 relative"
                >
                  <Bell className="w-6 h-6 dark:text-white" />
                  {notifications.some(n => n.unread) && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50">
                    <div className="p-4 border-b dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold dark:text-white">Notifications</h3>
                        <button 
                          onClick={() => setShowNotifications(false)}
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          onClick={() => markNotificationAsRead(notif.id)}
                          className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b dark:border-gray-700 last:border-b-0 
                            ${notif.unread ? 'bg-purple-50 dark:bg-purple-900/20' : ''}`}
                        >
                          <div className="text-sm dark:text-white">{notif.text}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notif.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((card, index) => (
              <StatCard key={index} {...card} />
            ))}
          </div>
        </div>
        <div>
            <DashboardCard/>
        </div>
        {/* <div>

            <Department/>
        </div> */}
        <div>
            <InstitutionDashboard/>
        </div>

        <div>
        <ExamStatisticsDashboard/>
        </div>
<div>
<SalesDashboard/>
</div>


        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 shadow-sm text-center p-4 text-sm text-gray-500 dark:text-gray-400">
          © 2024 RK Institute. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default DashboardHeader;



