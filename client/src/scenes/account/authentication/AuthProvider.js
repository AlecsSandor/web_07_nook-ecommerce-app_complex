import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import { useEffect } from 'react'
import { getToken } from './helpers'
import { API, BEARER } from './authConstants'

// Handling authentication as per Strapi's instruction using authProvider ( check out https://strapi.io/blog/strapi-authentication-with-react ) 
// - this should have been probably done through a custom slice using redux principles ( since the app uses redux already )

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const authToken = getToken()

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true)
    try {
      const response = await fetch(`${API}/users/me`, {
        headers: { Authorization: `${BEARER} ${token}` },
      })
      const data = await response.json()

      setUserData(data)
    } catch (error) {
      console.error(error)

    } finally {
      setIsLoading(false)
    }
  }

  const handleUser = (user) => {
    setUserData(user)
  }

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken)
    }
  }, [authToken])

  return (
    <AuthContext.Provider
      value={{ user: userData, setUser: handleUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
