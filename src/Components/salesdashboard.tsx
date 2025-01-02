import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';
import { Calendar } from 'lucide-react';

interface SalesData {
  date: string;
  revenue: number;
  students: number;
  courses: number;
  profit: number;
  completionRate?: number;
  satisfaction?: number;
}

interface SalesDataSet {
  weekly: SalesData[];
  monthly: SalesData[];
}

const salesData: SalesDataSet = {
  weekly: [
    { date: 'Mon', revenue: 15000, students: 25, courses: 12, profit: 8000 },
    { date: 'Tue', revenue: 18000, students: 30, courses: 15, profit: 9500 },
    { date: 'Wed', revenue: 22000, students: 35, courses: 18, profit: 12000 },
    { date: 'Thu', revenue: 21000, students: 32, courses: 16, profit: 11500 },
    { date: 'Fri', revenue: 25000, students: 38, courses: 20, profit: 14000 },
    { date: 'Sat', revenue: 28000, students: 42, courses: 22, profit: 16000 },
    { date: 'Sun', revenue: 20000, students: 28, courses: 14, profit: 10500 }
  ],
  monthly: [
    { date: 'Jan', revenue: 95000, students: 150, courses: 45, profit: 52000, completionRate: 88, satisfaction: 92 },
    { date: 'Feb', revenue: 102000, students: 165, courses: 48, profit: 58000, completionRate: 85, satisfaction: 89 },
    { date: 'Mar', revenue: 108000, students: 175, courses: 52, profit: 62000, completionRate: 90, satisfaction: 94 },
    { date: 'Apr', revenue: 115000, students: 185, courses: 55, profit: 68000, completionRate: 87, satisfaction: 91 },
    { date: 'May', revenue: 125000, students: 195, courses: 58, profit: 72000, completionRate: 89, satisfaction: 93 },
    { date: 'Jun', revenue: 130000, students: 200, courses: 60, profit: 75000, completionRate: 92, satisfaction: 95 },
    { date: 'Jul', revenue: 128000, students: 198, courses: 59, profit: 73000, completionRate: 91, satisfaction: 94 },
    { date: 'Aug', revenue: 135000, students: 210, courses: 62, profit: 78000, completionRate: 88, satisfaction: 92 },
    { date: 'Sep', revenue: 140000, students: 220, courses: 65, profit: 82000, completionRate: 90, satisfaction: 93 },
    { date: 'Oct', revenue: 145000, students: 230, courses: 68, profit: 85000, completionRate: 93, satisfaction: 96 },
    { date: 'Nov', revenue: 150000, students: 240, courses: 70, profit: 88000, completionRate: 91, satisfaction: 94 },
    { date: 'Dec', revenue: 160000, students: 250, courses: 75, profit: 92000, completionRate: 94, satisfaction: 97 }
  ]
};

const SalesDashboard: React.FC = () => {
  const [timePeriod, setTimePeriod] = useState<'weekly' | 'monthly'>('weekly');
  const data = salesData[timePeriod];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Institution Sales Analytics</h2>
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar size={16} />
              <p>{timePeriod === 'weekly' ? 'Current Week' : 'Year 2024'}</p>
            </div>
          </div>
          <select 
            className="px-4 py-2 border rounded-lg bg-white shadow-sm"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value as 'weekly' | 'monthly')}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Revenue & Profit Analysis</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value: number) => `$${value/1000}k`} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload as SalesData;
                        return (
                          <div className="bg-white shadow-lg rounded-lg p-3">
                            <p className="font-medium">{data.date}</p>
                            <p className="text-indigo-600">Revenue: ${data.revenue.toLocaleString()}</p>
                            <p className="text-emerald-600">Profit: ${data.profit.toLocaleString()}</p>
                            {timePeriod === 'monthly' && (
                              <p className="text-gray-500 text-sm">
                                Profit Margin: {((data.profit / data.revenue) * 100).toFixed(1)}%
                              </p>
                            )}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <ReferenceLine
                    y={timePeriod === 'monthly' ? 100000 : 20000}
                    label="Target"
                    stroke="#FF6B6B"
                    strokeDasharray="3 3"
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4F46E5"
                    fillOpacity={1}
                    fill="url(#revenue)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    stroke="#10B981"
                    fillOpacity={1}
                    fill="url(#profit)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Performance Metrics</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" />
                  <YAxis 
                    yAxisId="left" 
                    domain={[0, 'auto']}
                    tickFormatter={(value: number) => `${value}`} 
                  />
                  {timePeriod === 'monthly' && (
                    <YAxis 
                      yAxisId="right" 
                      orientation="right"
                      domain={[60, 100]}
                      tickFormatter={(value: number) => `${value}%`}
                    />
                  )}
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload as SalesData;
                        return (
                          <div className="bg-white shadow-lg rounded-lg p-3">
                            <p className="font-medium">{data.date}</p>
                            <p className="text-blue-600">Students: {data.students}</p>
                            <p className="text-purple-600">Courses: {data.courses}</p>
                            {timePeriod === 'monthly' && data.completionRate && data.satisfaction && (
                              <>
                                <p className="text-orange-600">Completion: {data.completionRate}%</p>
                                <p className="text-green-600">Satisfaction: {data.satisfaction}%</p>
                              </>
                            )}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="students"
                    stroke="#2563EB"
                    strokeWidth={2}
                    dot={timePeriod === 'monthly'}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="courses"
                    stroke="#7C3AED"
                    strokeWidth={2}
                    dot={timePeriod === 'monthly'}
                  />
                  {timePeriod === 'monthly' && (
                    <>
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="completionRate"
                        stroke="#F97316"
                        strokeWidth={2}
                        dot
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="satisfaction"
                        stroke="#10B981"
                        strokeWidth={2}
                        dot
                      />
                    </>
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;