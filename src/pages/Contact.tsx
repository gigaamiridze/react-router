import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/', {
      state: {
        name: 'Giga',
        age: 18,
      }
    });
  }

  return (
    <>
      <div>Contact Page</div>
      <button type='button' onClick={handleNavigation}>Go to Home</button>
    </>
  )
}

export default Contact;
