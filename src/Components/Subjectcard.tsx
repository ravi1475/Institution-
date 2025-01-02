import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Users, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import "./Subjectcard.css";
// Simple Card Components
const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`p-4 pt-0 ${className}`}>{children}</div>
);

// Animation variants
const containerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1 
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5 
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    transition: { 
      duration: 0.3 
    }
  }
};

// Create a CSS module for custom styles
const styles = {
  hideScrollbar: {
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none' as 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
};

interface SubjectCard {
  id: number;
  subject: string;
  totalStudents: number;
  imageUrl: string;
  description: string;
  backgroundColor: string;
}

const subjects: SubjectCard[] = [
  {
    id: 1,
    subject: 'ENGLISH',
    totalStudents: 230,
    imageUrl: 'English.jpg',
  
    description: 'Learn English language and literature with expert guidance.',
    backgroundColor: 'bg-purple-100'
  },
  

  {
    id: 2,
    subject: 'MATH',
    totalStudents: 150,
    imageUrl: '/Math.jpeg',
    description: 'Master mathematical concepts and problem-solving skills.',
    backgroundColor: 'bg-purple-100'
  },
  {
    id: 3,
    subject: 'ECONOMICS',
    totalStudents: 130,
    imageUrl: '/Economics.jpg',
    description: 'Understand economic principles and market dynamics.',
    backgroundColor: 'bg-purple-100'
  },
  {
    id: 4,
    subject: 'SCIENCE',
    totalStudents: 200,
    imageUrl: '/Science.jpg',
    description: 'Explore scientific concepts through practical experiments.',
    backgroundColor: 'bg-purple-100'
  },
  {
    id: 5,
    subject: 'SOCIAL SCIENCE',
    totalStudents: 250,
    imageUrl: '/Social Science.jpg',
    description: 'Study society, history, and cultural developments.',
    backgroundColor: 'bg-purple-100'
  }

  
];

const InstitutionDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<SubjectCard | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const filteredSubjects = subjects.filter(subject =>
    subject.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('subjects-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  };

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 0.5 } },
  // };

  if (loading) {
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-12 w-48 bg-purple-200 rounded"></div>
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-64 h-96 bg-purple-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50 p-6">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Subject Wise Students</h1>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search subjects..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <button 
              className="p-2 rounded-full hover:bg-purple-200 transition-all duration-300 disabled:opacity-50"
              onClick={() => scrollContainer('left')}
              disabled={scrollPosition <= 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-purple-200 transition-all duration-300"
              onClick={() => scrollContainer('right')}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button className="text-purple-600 hover:text-purple-800 font-medium transition-all duration-300">
              View All
            </button>
          </div>
        </div>

        <motion.div 
          id="subjects-container"
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory"
          style={{
            ...styles.hideScrollbar,
            scrollBehavior: 'smooth'
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onScroll={handleScroll}
        >
          {filteredSubjects.map((subject) => (
            <motion.div
              key={subject.id}
              variants={cardVariants}
              whileHover="hover"
              className="snap-center"
              onClick={() => setSelectedSubject(subject)}
            >
              <Card className={`w-64 ${subject.backgroundColor} shadow-lg transform transition-all duration-300 cursor-pointer relative group`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
                <CardHeader className="pb-2">
                  <img 
                    src={subject.imageUrl}
                    alt={`${subject.subject} cover`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-purple-600 font-medium">SUBJECT</p>
                      <h3 className="font-bold text-xl mt-1">{subject.subject}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-purple-600 font-medium">STUDENTS</p>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-purple-600" />
                          <p className="font-bold text-lg">{subject.totalStudents}</p>
                        </div>
                      </div>
                      <button 
                        className="p-2 rounded-full bg-purple-200 hover:bg-purple-300 transition-colors duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSubject(subject);
                        }}
                      >
                        <Info className="w-4 h-4 text-purple-600" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedSubject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSubject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`${selectedSubject.backgroundColor} p-6 rounded-lg max-w-md w-full`}
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedSubject.subject}</h3>
                    <p className="text-purple-600 flex items-center gap-2 mt-2">
                      <Users className="w-4 h-4" />
                      {selectedSubject.totalStudents} Students
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedSubject(null)}
                    className="p-2 hover:bg-purple-200 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-600">{selectedSubject.description}</p>
                <div className="mt-6 flex justify-end">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InstitutionDashboard;