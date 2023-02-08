import React from 'react';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

function Home() {
  const location = useLocation().state; // Get information from contact page
  const userContext = useUserContext();

  console.log(location);

  const handleClick = () => {
    return userContext?.setIsLoggedIn(currentState => !currentState);
  }
  
  return (
    <div>
      <div>Home Page</div>
      <button type='button' onClick={handleClick}>
        {userContext?.isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  )
}

export default Home;
