import React, { useLayoutEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

function Settings() {
  const userContext = useUserContext();
  
  if (!userContext?.isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <div>Settings Page</div>
  )
}

export default Settings;
