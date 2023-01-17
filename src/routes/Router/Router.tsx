import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Blog from '../../Pages/Blog/Blog/Blog';
import Contact from '../../Pages/Contact/Contact/Contact';
import Courses from '../../Pages/Courses/Courses/Courses';
import Home from '../../Pages/Home/Home/Home';

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
            }
        ]
    }
]);