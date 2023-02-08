import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { axiosInstance } from './utils/axios';
// Importing pages
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Beginning from './pages/Beginning';
import Users from './pages/Users';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import Question from './pages/Question';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<Home />} />
      <Route path='about'>
        <Route index element={<About />} />
        <Route path='beginning' element={<Beginning />} />
      </Route>
      <Route 
        path='users' 
        element={<Users />}
        loader={async () => axiosInstance.get('/users')}
      />
      <Route path='faq' element={<Faq />} />
      <Route 
        path='faq/:questionId'
        element={<Question />}
        loader={async ({ params }) => axiosInstance.get(`/posts/${params.questionId}`)}
      />
      <Route path='contact' element={<Contact />} />
      <Route path='settings' element={<Settings/>} />
    </Route>
  )
);
