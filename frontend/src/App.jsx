import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

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
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
