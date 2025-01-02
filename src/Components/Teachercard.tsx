// // TeacherCard.tsx
// import React from 'react';
// import type { Stats, Teacher } from './type';

// interface TeacherCardProps {
//   stats: Stats;
//   teachers: Teacher[];
// }

// export const TeacherCard: React.FC<TeacherCardProps> = ({ stats, teachers }) => {
//   return (
//     <div className="bg-white rounded-lg p-4 shadow-md">
//       <h3 className="text-lg font-semibold mb-2">Teachers</h3>
//       <div className="flex justify-between items-center mb-4">
//         <span className="text-2xl font-bold">{stats.total}</span>
//         {stats.growth && (
//           <span className="text-green-500">+{stats.growth}%</span>
//         )}
//       </div>
//       <div className="space-y-2">
//         {teachers.slice(0, 3).map(teacher => (
//           <div  className="flex items-center gap-2">
//             <img 
//               src={teacher.image} 
//               alt={teacher.name} 
//               className="w-8 h-8 rounded-full"
//             />
//             <div>
//               <p className="font-medium">{teacher.name}</p>
//               <p className="text-sm text-gray-500">{teacher.subject}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

