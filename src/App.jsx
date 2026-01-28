// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import CheckoutPage from './pages/CheckoutPage';
import ReceiptPage from './pages/ReceiptPage';
import SpokenEnglishLanding from './pages/SpokenEnglishLanding';
import ClassSelector from './pages/ClassSelector';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('selector');
  const [selectedClass, setSelectedClass] = useState(null);
  const [enrollmentData, setEnrollmentData] = useState(null);

  const renderPage = () => {
    switch(currentPage) {
      case 'selector':
        return <ClassSelector onSelectClass={(classType) => {
          setSelectedClass(classType);
          setCurrentPage('landing');
        }} />;
      case 'landing':
        if (selectedClass === 'spoken-english') {
          return <SpokenEnglishLanding onEnroll={() => setCurrentPage('checkout')} onBack={() => setCurrentPage('selector')} />;
        }
        return <LandingPage onEnroll={() => setCurrentPage('checkout')} onBack={() => setCurrentPage('selector')} />;
      case 'checkout':
        return <CheckoutPage 
          selectedClass={selectedClass}
          onBack={() => setCurrentPage('landing')} 
          onSuccess={(data) => {
            setEnrollmentData(data);
            setCurrentPage('receipt');
          }} 
        />;
      case 'receipt':
        return <ReceiptPage data={enrollmentData} />;
      default:
        return <ClassSelector onSelectClass={(classType) => {
          setSelectedClass(classType);
          setCurrentPage('landing');
        }} />;
    }
  };

  return <div className="min-h-screen bg-white">{renderPage()}</div>;
};

export default App;