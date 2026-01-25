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


// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [enrollmentData, setEnrollmentData] = useState(null);

  const renderPage = () => {
    switch(currentPage) {
      case 'landing':
        return <LandingPage onEnroll={() => setCurrentPage('checkout')} />;
      case 'checkout':
        return <CheckoutPage onBack={() => setCurrentPage('landing')} onSuccess={(data) => {
          setEnrollmentData(data);
          setCurrentPage('receipt');
        }} />;
      case 'receipt':
        return <ReceiptPage data={enrollmentData} />;
      default:
        return <LandingPage onEnroll={() => setCurrentPage('checkout')} />;
    }
  };

  return <div className="min-h-screen bg-white">{renderPage()}</div>;
};

export default App;