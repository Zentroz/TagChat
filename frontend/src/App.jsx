import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Index from './pages/Index'
import Layout from './pages/Layout'
import Message from './pages/Message'
import Search from './pages/Search'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />
    },
    {
      path: "/account/signup",
      element: <SignUp />
    },
    {
      path: "/auth/login",
      element: <LogIn />
    },
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/index",
          element: <Index />
        },
        {
          path: "/inbox",
          element: <Message />
        },
        {
          path: "/search",
          element: <Search />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
