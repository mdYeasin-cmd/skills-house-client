import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Blog from '../../Pages/Blog/Blog/Blog';
import Contact from '../../Pages/Contact/Contact/Contact';
import Courses from '../../Pages/Courses/Courses/Courses';
import Home from '../../Pages/Home/Home/Home';
import LogIn from '../../Pages/ManageUsers/LogIn/LogIn';
import SignUp from '../../Pages/ManageUsers/SignUp/SignUp';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
]);