import { createContext, useState, useContext } from 'react';

const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState([]);
  
  return (
    <DisplayContext.Provider value={{ submissions, setSubmissions }}>
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplayContext = () => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error('useDisplayContext must be used within a DisplayProvider');
  }
  return context;
};