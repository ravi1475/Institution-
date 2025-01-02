// import React, { createContext, useContext, useState, useEffect } from 'react';

// type ThemeContextType = {
//   isDarkMode: boolean;
//   toggleTheme: () => void;
// };

// const ThemeContext = createContext<ThemeContextType>({
//   isDarkMode: false,
//   toggleTheme: () => {},
// });

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (isDarkMode) {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//   }, [isDarkMode]);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);