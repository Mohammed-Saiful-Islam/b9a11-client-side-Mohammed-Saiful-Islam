import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import Dhaka from './components/Dhaka.jsx';
import CapeTown from './components/CapeTown.jsx';
import London from './components/London.jsx';
import WashingtonDC from './components/WashingtonDC.jsx';
import Brasilla from './components/Brasilla.jsx';
import Canberra from './components/Canberra.jsx';
import AddAssignment from './components/AddAssignment.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('https://coffee-store-server-dun-delta.vercel.app/coffee')
  },
  {
    path: "addCoffee",
    element: <AddCoffee />
  },
  {
    path: "addAssignment",
    element: <AddAssignment />
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`https://coffee-store-server-dun-delta.vercel.app/coffee/${params.id}`)
  }, {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path:'/users',
    element:<Users/>,
    loader: ()=> fetch('https://coffee-store-server-dun-delta.vercel.app/user')
  },
  {
    path:'/dhaka',
    element:<Dhaka/>
  },
  {
    path:'/capetown',
    element:<CapeTown/>
  },
  {
    path:'/london',
    element:<London/>
  },
  {
    path:'/washingtondc',
    element: <WashingtonDC/>
  },
  {
    path: '/brasilla',
    element :<Brasilla/>
  },
  {
    path: '/canberra',
    element:<Canberra/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
