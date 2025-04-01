import React, { children } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import HomeBundler from './Pages/HomeBundler';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Profile from './Pages/Profile';
import Logout from './Pages/Logout'

const App = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<AppLayout/> ,
            children: [
                {
                    path:'/',
                    element: <HomeBundler/>
                },
                {
                    path: '/register',
                    element: <Signup/>
                },
                {
                    path: '/login',
                    element: <Login/>
                },
                {
                    path: '/profile',
                    element: <Profile/>
                },
                {
                    path: '/logout',
                    element: <Logout/>
                }
            ]
        }
    ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
