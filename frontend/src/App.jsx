import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LogIn from './pages/LogIn'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
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
