// // import React, { useState, useEffect } from 'react';
// // import { Search, Bell, Home, MessageSquare, User, Settings, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// // const MainLayout = () => {
// //   const [teachers, setTeachers] = useState({ total: 70, growth: 2.5 });
// //   const [students, setStudents] = useState({ total: 370, growth: 2.5 });
// //   const [courses, setCourses] = useState({ total: 80 });
// //   const [profileComplete, setProfileComplete] = useState(90);
// //   const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
// //   const [activeTab, setActiveTab] = useState('dashboard');

// //   const teachersList = [
// //     { name: 'Ajay Chauhan', subject: 'Science', image: '/api/placeholder/40/40' },
// //     { name: 'Rahul Jain', subject: 'Math', image: '/api/placeholder/40/40' },
// //     { name: 'Disha', subject: 'Hindi', image: '/api/placeholder/40/40' },
// //     { name: 'Neha Gupta', subject: 'English', image: '/api/placeholder/40/40' }
// //   ];

// //   const studentsList = [
// //     { name: 'Ajay Chauhan', class: '2nd', image: '/api/placeholder/40/40' },
// //     { name: 'Rahul Jain', class: '5th', image: '/api/placeholder/40/40' },
// //     { name: 'Disha', class: '9th', image: '/api/placeholder/40/40' },
// //     { name: 'Neha Gupta', class: '3rd', image: '/api/placeholder/40/40' }
// //   ];

// //   const coursesList = [
// //     { name: 'B.SC Science', duration: 4, status: 'Enroll Student' },
// //     { name: 'B.COM', duration: 3, status: '25-Dec-2024' },
// //     { name: 'BA English', duration: 3, status: '28-Dec-2024' },
// //     { name: 'BCA Computer', duration: 4, status: 'Enroll Student' }
// //   ];

// //   const subjectCards = [
// //     { subject: 'ENGLISH', students: 30 },
// //     { subject: 'MATH', students: 30 },
// //     { subject: 'ECONOMICS', students: 30 },
// //     { subject: 'SCIENCE', students: 30 },
// //     { subject: 'SOCIAL SCIENCE', students: 30 }
// //   ];

// //   return (
// //     <div className="flex min-h-screen bg-[#f6edfc]">
// //       {/* Sidebar */}
// //       <aside className={`transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'} 
// //         bg-white/90 shadow-lg flex flex-col`}>
// //         <div className="p-4 flex justify-between items-center">
// //           <div className="flex items-center gap-2">
// //             <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
// //               <span className="text-2xl font-bold text-white">G</span>
// //             </div>
// //             {!isSidebarCollapsed && <span className="font-bold text-purple-600">RK Institute</span>}
// //           </div>
// //           <button onClick={() => setSidebarCollapsed(!isSidebarCollapsed)} 
// //             className="hover:bg-purple-100 p-2 rounded-lg">
// //             {isSidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
// //           </button>
// //         </div>

// //         <div className="flex-1 px-4">
// //           <div className="space-y-2 mt-8">
// //             {[
// //               { icon: Home, label: 'Dashboard', tab: 'dashboard' },
// //               { icon: MessageSquare, label: 'Chat History', tab: 'chat' },
// //               { icon: User, label: 'Profile', tab: 'profile' },
// //               { icon: Settings, label: 'Settings', tab: 'settings' }
// //             ].map((item) => (
// //               <button
// //                 key={item.tab}
// //                 onClick={() => setActiveTab(item.tab)}
// //                 className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors
// //                   ${activeTab === item.tab ? 'bg-purple-100 text-purple-600' : 'hover:bg-purple-50'}
// //                   ${isSidebarCollapsed ? 'justify-center' : ''}`}
// //               >
// //                 <item.icon className="w-5 h-5" />
// //                 {!isSidebarCollapsed && <span>{item.label}</span>}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="p-4">
// //           <div className={`bg-purple-50 rounded-lg p-4 ${isSidebarCollapsed ? 'text-center' : ''}`}>
// //             <div className="font-semibold text-purple-600">Profile Completed</div>
// //             <div className="mt-2 bg-gray-200 rounded-full h-2">
// //               <div 
// //                 className="bg-purple-600 h-2 rounded-full transition-all duration-500"
// //                 style={{ width: `${profileComplete}%` }}
// //               />
// //             </div>
// //             <div className="mt-2 text-sm text-gray-600">{profileComplete}%</div>
// //           </div>
// //         </div>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 p-6">
// //         {/* Header */}
// //         <header className="flex justify-between items-center mb-8">
// //           <div className="flex items-center gap-4">
// //             <h1 className="text-2xl font-bold text-purple-600">RK Institute</h1>
// //             <span className="text-gray-500">A-11 Janakpuri East, Delhi</span>
// //           </div>
// //           <div className="flex items-center gap-4">
// //             <button className="hover:bg-white/80 p-2 rounded-lg transition-colors">
// //               <Bell className="w-5 h-5" />
// //             </button>
// //             <select className="bg-white/80 px-3 py-2 rounded-lg">
// //               <option>EN</option>
// //               <option>HI</option>
// //             </select>
// //             <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
// //           </div>
// //         </header>

// //         {/* Stats Cards */}
// //         <div className="grid grid-cols-3 gap-6 mb-8">
// //           <div className="bg-white rounded-xl p-6 shadow-sm">
// //             <div className="flex justify-between items-center">
// //               <h3 className="text-lg font-semibold">Total Teachers</h3>
// //               <div className="text-green-500 text-sm">(+{teachers.growth}%)</div>
// //             </div>
// //             <div className="text-3xl font-bold mt-2">{teachers.total}</div>
// //             <div className="mt-4">
// //               <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
// //                 <span>Name</span>
// //                 <span>Subject</span>
// //               </div>
// //               {teachersList.map((teacher, idx) => (
// //                 <div key={idx} className="flex justify-between items-center mb-2">
// //                   <div className="flex items-center gap-2">
// //                     <img src={teacher.image} alt={teacher.name} className="w-8 h-8 rounded-full" />
// //                     <span>{teacher.name}</span>
// //                   </div>
// //                   <span className="text-gray-600">{teacher.subject}</span>
// //                 </div>
// //               ))}
// //               <button className="text-purple-600 hover:underline mt-2">View All</button>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-xl p-6 shadow-sm">
// //             <div className="flex justify-between items-center">
// //               <h3 className="text-lg font-semibold">Total Students</h3>
// //               <div className="text-green-500 text-sm">(+{students.growth}%)</div>
// //             </div>
// //             <div className="text-3xl font-bold mt-2">{students.total}</div>
// //             <div className="mt-4">
// //               <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
// //                 <span>Name</span>
// //                 <span>Class</span>
// //               </div>
// //               {studentsList.map((student, idx) => (
// //                 <div key={idx} className="flex justify-between items-center mb-2">
// //                   <div className="flex items-center gap-2">
// //                     <img src={student.image} alt={student.name} className="w-8 h-8 rounded-full" />
// //                     <span>{student.name}</span>
// //                   </div>
// //                   <span className="text-gray-600">{student.class}</span>
// //                 </div>
// //               ))}
// //               <button className="text-purple-600 hover:underline mt-2">View All</button>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-xl p-6 shadow-sm">
// //             <div className="flex justify-between items-center">
// //               <h3 className="text-lg font-semibold">Total Courses</h3>
// //             </div>
// //             <div className="text-3xl font-bold mt-2">{courses.total}</div>
// //             <div className="mt-4">
// //               <div className="grid grid-cols-4 text-sm text-gray-600 mb-2">
// //                 <span>Course Name</span>
// //                 <span>Duration (Yr)</span>
// //                 <span className="col-span-2">Enrollment Status</span>
// //               </div>
// //               {coursesList.map((course, idx) => (
// //                 <div key={idx} className="grid grid-cols-4 items-center mb-2">
// //                   <span>{course.name}</span>
// //                   <span>{course.duration}</span>
// //                   <span className={`col-span-2 ${
// //                     course.status === 'Enroll Student' ? 'text-purple-600' : ''
// //                   }`}>{course.status}</span>
// //                 </div>
// //               ))}
// //               <button className="text-purple-600 hover:underline mt-2">View All</button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Subject Cards */}
// //         <div className="mb-8">
// //           <div className="flex justify-between items-center mb-4">
// //             <h2 className="text-xl font-semibold">Subject Wise Students</h2>
// //             <div className="flex gap-2">
// //               <button className="p-2 hover:bg-purple-100 rounded-lg">
// //                 <ChevronLeft className="w-5 h-5" />
// //               </button>
// //               <button className="p-2 hover:bg-purple-100 rounded-lg">
// //                 <ChevronRight className="w-5 h-5" />
// //               </button>
// //               <button className="text-purple-600 hover:underline">View All</button>
// //             </div>
// //           </div>
// //           <div className="grid grid-cols-5 gap-6">
// //             {subjectCards.map((subject, idx) => (
// //               <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
// //                 <img src="/api/placeholder/200/150" alt={subject.subject} className="w-full h-32 object-cover rounded-lg mb-4" />
// //                 <h3 className="font-semibold mb-2">{subject.subject}</h3>
// //                 <div className="text-gray-600">
// //                   <div>TOTAL STUDENTS</div>
// //                   <div className="font-semibold">{subject.students}</div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default MainLayout;








// import React, { useState } from 'react';
// import Sidebar from './sidebar';
// import Header from './Header';
// import { TeacherCard } from './Teachercard';
// // import { StudentCard } from './components/StudentCard';
// // import { CourseCard } from './CourseCard';
// import SubjectCards from './Subjectcard';
// import type { Stats, Teacher, Student, Course, SubjectCard } from './type';

// const MainLayout: React.FC = () => {
//   const [teachers, setTeachers] = useState<Stats>({ total: 70, growth: 2.5 });
//   const [students, setStudents] = useState<Stats>({ total: 370, growth: 2.5 });
//   const [courses, setCourses] = useState<Stats>({ total: 80 });
//   const [profileComplete, setProfileComplete] = useState(90);
//   const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [activeTab, setActiveTab] = useState('dashboard');

//   // Sample data
//   const teachersList: Teacher[] = [
//     { id: '1', name: 'John Doe', subject: 'Mathematics', image: '/placeholder.jpg' },
//     { id: '2', name: 'Jane Smith', subject: 'Science', image: '/placeholder.jpg' },
//     { id: '3', name: 'Mike Johnson', subject: 'English', image: '/placeholder.jpg' },
//   ];

//   const studentsList: Student[] = [
//     { id: '1', name: 'Alice Brown', grade: 'Grade 10', image: '/placeholder.jpg' },
//     { id: '2', name: 'Bob Wilson', grade: 'Grade 11', image: '/placeholder.jpg' },
//     { id: '3', name: 'Carol Davis', grade: 'Grade 9', image: '/placeholder.jpg' },
//   ];

//   const coursesList: Course[] = [
//     { id: '1', name: 'Advanced Math', students: 45, image: '/placeholder.jpg' },
//     { id: '2', name: 'Physics 101', students: 38, image: '/placeholder.jpg' },
//     { id: '3', name: 'Literature', students: 42, image: '/placeholder.jpg' },
//   ];

//   const subjectCards: SubjectCard[] = [
//     {
//       id: '1',
//       name: 'Mathematics',
//       teacher: 'John Doe',
//       students: 45,
//       completionRate: 75,
//       image: '/placeholder.jpg',
//     },
//     // Add more subjects as needed
//   ];

//   return (
//     <div className="flex min-h-screen bg-[#f6edfc] transition-colors duration-300">
//       <Sidebar
//         profileComplete={profileComplete}
//         isSidebarCollapsed={isSidebarCollapsed}
//         activeTab={activeTab}
//         onTabChange={setActiveTab}
//         onToggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)}
//       />

//       <main className="flex-1 p-6">
//         <Header 
//           instituteName="RK Institute"
//           location="A-11 Janakpuri East, Delhi"
//         />

//         <div className="grid grid-cols-3 gap-6 mb-8">
//           <TeacherCard stats={teachers} teachers={teachersList} />
//           <StudentCard stats={students} students={studentsList} />
//           <CourseCard stats={courses} courses={coursesList} />
//         </div>

//         <SubjectCards subjects={subjectCards} />
//       </main>
//     </div>
//   );
// };

// export default MainLayout;