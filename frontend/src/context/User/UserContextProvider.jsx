import UserContext from "./UserContext";
import { useState, useEffect } from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [logged, setLogged] = useState(true)

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      setLogged(false)
    } else {
      setLogged(true)
    }
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser, logged, setLogged }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider