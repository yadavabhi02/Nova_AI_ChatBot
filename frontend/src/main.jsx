import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage'
import Dashboardpage from './routes/dashboardPage/Dashboardpage'
import ChatPage from './routes/chatPage/ChatPage'
import RootLayout from './layouts/rootLayout/RootLayout'
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout'
import SignInPage from './routes/signInPage/signInPage'
import SignUpPage from './routes/signUpPage/signUpPage'

const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children:[
      {
        path:"/",
        element : <Homepage/>,
      },
      {
        path:"/sign-in/*",
        element : <SignInPage/>,
      },
      {
        path:"/sign-up/*",
        element : <SignUpPage/>,
      },
      {
        element:<DashboardLayout/>,
        children:[
          {
            path:"/dashboard",
            element: <Dashboardpage/>,
          },
          {
            path:"/dashboard/chats/:id",
            element:<ChatPage/>,
          },
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
