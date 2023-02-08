import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; 
import { router } from './Routes';
import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  )
}

export default App;
