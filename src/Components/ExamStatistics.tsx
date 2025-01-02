import React, { useState, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Calendar } from 'lucide-react';

type TimeSpentData = {
  day: string;
  hours: number;
  label?: string;
}[];

type TopStudent = {
  rank: number;
  name: string;
  score: number;
  period: string;
};

type MetricData = {
  label: string;
  percentage: number;
  color: string;
  info?: string;
};

type TimePeriod = 'weekly' | 'monthly' | 'yearly';

const ExamStatisticsDashboard = () => {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('weekly');

  const timeSpentDataMap = {
    weekly: [
      { day: 'Mon', hours: 11, label: '2h 13m' },
      { day: 'Tue', hours: 2, label: '2h 00m' },
      { day: 'Wed', hours: 8, label: '8h 00m' },
      { day: 'Thu', hours: 6, label: '6h 00m' },
      { day: 'Fri', hours: 4, label: '4h 00m' },
      { day: 'Sat', hours: 5, label: '5h 00m' },
      { day: 'Sun', hours: 4, label: '4h 00m' }
    ],
    monthly: [
      { day: 'Week 1', hours: 25, label: '25h 00m' },
      { day: 'Week 2', hours: 30, label: '30h 00m' },
      { day: 'Week 3', hours: 22, label: '22h 00m' },
      { day: 'Week 4', hours: 28, label: '28h 00m' }
    ],
    yearly: [
      { day: 'Jan', hours: 85, label: '85h 00m' },
      { day: 'Feb', hours: 92, label: '92h 00m' },
      { day: 'Mar', hours: 78, label: '78h 00m' },
      { day: 'Apr', hours: 88, label: '88h 00m' },
      { day: 'May', hours: 95, label: '95h 00m' },
      { day: 'Jun', hours: 70, label: '70h 00m' },
      { day: 'Jul', hours: 85, label: '85h 00m' },
      { day: 'Aug', hours: 82, label: '82h 00m' },
      { day: 'Sep', hours: 91, label: '91h 00m' },
      { day: 'Oct', hours: 88, label: '88h 00m' },
      { day: 'Nov', hours: 79, label: '79h 00m' },
      { day: 'Dec', hours: 86, label: '86h 00m' }
    ]
  };

  const metricsMap = {
    weekly: [
      { label: 'Weekly Progress', percentage: 78, color: 'text-orange-500', info: 'Progress through weekly assignments and tasks' },
      { label: 'Attendance Rate', percentage: 92, color: 'text-emerald-500', info: 'Weekly class attendance percentage' },
      { label: 'Assignment Completion', percentage: 85, color: 'text-purple-500', info: 'Percentage of completed assignments this week' }
    ],
    monthly: [
      { label: 'Monthly Progress', percentage: 65, color: 'text-orange-500', info: 'Overall progress for the current month' },
      { label: 'Average Score', percentage: 88, color: 'text-emerald-500', info: 'Average test scores this month' },
      { label: 'Participation Rate', percentage: 72, color: 'text-purple-500', info: 'Student participation in monthly activities' }
    ],
    yearly: [
      { label: 'Admission Rate', percentage: 82, color: 'text-orange-500', info: 'Yearly admission success rate' },
      { label: 'Syllabus Coverage', percentage: 95, color: 'text-emerald-500', info: 'Yearly curriculum completion rate' },
      { label: 'Fee Collection', percentage: 89, color: 'text-purple-500', info: 'Annual fee collection status' }
    ]
  };

  const topStudentsMap = {
    weekly: [
      { rank: 1, name: 'Joseph', score: 98, period: 'This Week' },
      { rank: 2, name: 'Andrew', score: 95, period: 'This Week' },
      { rank: 3, name: 'Kareen', score: 92, period: 'This Week' }
    ],
    monthly: [
      { rank: 1, name: 'Michael', score: 96, period: 'This Month' },
      { rank: 2, name: 'Sarah', score: 94, period: 'This Month' },
      { rank: 3, name: 'David', score: 91, period: 'This Month' }
    ],
    yearly: [
      { rank: 1, name: 'Emma', score: 99, period: 'This Year' },
      { rank: 2, name: 'James', score: 98, period: 'This Year' },
      { rank: 3, name: 'Sophie', score: 97, period: 'This Year' }
    ]
  };

  const timeSpentData = timeSpentDataMap[timePeriod];
  const metrics = metricsMap[timePeriod];
  const topStudents = topStudentsMap[timePeriod];

  const getTotalHours = () => {
    const total = timeSpentData.reduce((acc, curr) => acc + curr.hours, 0);
    return `${total}h ${Math.round(Math.random() * 59)}m`;
  };

  const handleMouseMove = useCallback((data: any) => {
    if (data?.activeLabel) {
      setHoveredDay(data.activeLabel);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredDay(null);
  }, []);

  const CircularProgress = ({ 
    data,
    isSelected,
    onSelect 
  }: { 
    data: MetricData;
    isSelected: boolean;
    onSelect: () => void;
  }) => (
    <motion.div 
      className="flex items-center gap-4 group cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      onClick={onSelect}
    >
      <div className="relative w-20 h-20">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            className="stroke-gray-200"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="10"
          />
          <motion.circle
            className={`stroke-current ${data.color}`}
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: data.percentage / 100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">{data.percentage}%</span>
        </div>
      </div>
      
      <div className="flex flex-col">
        <span className={`font-medium ${isSelected ? data.color : 'text-gray-700'}`}>
          {data.label}
        </span>
        <div className="flex items-center gap-1">
          <Info size={16} className="text-gray-400" />
          <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
            Click for details
          </span>
        </div>
      </div>
    </motion.div>
  );

  const TimeSpentChart = () => (
    <div className="h-64 relative">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={timeSpentData} 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="day" 
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}h`}
          />
          <Tooltip
            cursor={{ fill: 'rgba(79, 70, 229, 0.1)' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white shadow-lg rounded-lg p-3">
                    <p className="font-medium">{payload[0].payload.day}</p>
                    <p className="text-blue-600">{payload[0].value}h spent</p>
                    {payload[0].payload.label && (
                      <p className="text-gray-500 text-sm">{payload[0].payload.label}</p>
                    )}
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar
            dataKey="hours"
            radius={[4, 4, 0, 0]}
            fill="#4F46E5"
          >
            {timeSpentData.map((entry, index) => (
              <motion.rect
                key={`bar-${index}`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Exam Grade Statistics</h2>
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar size={16} />
              <p>{getTotalHours()} time spent</p>
            </div>
          </div>
          <select 
            className="px-4 py-2 border rounded-lg bg-white shadow-sm"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value as TimePeriod)}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Time Spent</h3>
            <TimeSpentChart />
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-gray-700">Key Metrics</h3>
            <div className="space-y-6">
              {metrics.map((metric) => (
                <CircularProgress
                  key={metric.label}
                  data={metric}
                  isSelected={selectedMetric === metric.label}
                  onSelect={() => setSelectedMetric(metric.label)}
                />
              ))}
            </div>
            
            <AnimatePresence>
              {selectedMetric && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gray-50 rounded-lg p-4 mt-4"
                >
                  <p className="text-sm text-gray-600">
                    {metrics.find(m => m.label === selectedMetric)?.info}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-6">Top Students</h3>
          <div className="flex justify-center items-end space-x-8">
            {topStudents.map((student) => (
              <motion.div
                key={student.name}
                className="flex flex-col items-center space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center
                  ${student.rank === 1 ? 'bg-orange-100' : 
                    student.rank === 2 ? 'bg-purple-100' : 'bg-green-100'}`}>
                  <span className={`text-2xl font-bold
                    ${student.rank === 1 ? 'text-orange-500' : 
                      student.rank === 2 ? 'text-purple-500' : 'text-green-500'}`}>
                    {student.rank}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">{student.name}</span>
                  <span className="text-sm text-gray-500">{student.score}%</span>
                  <span className="text-xs text-gray-400">{student.period}</span>
                </div>
                <motion.div
                  className={`w-24 rounded-t-lg ${
                    student.rank === 1
                      ? 'bg-orange-400 h-32'
                      : student.rank === 2
                      ? 'bg-purple-400 h-24'
                      : 'bg-green-400 h-20'
                  }`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamStatisticsDashboard;