import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router/Router';

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
