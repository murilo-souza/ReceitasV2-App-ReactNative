import { createContext, ReactNode, useState } from 'react'

interface AuthContextData {
  name: string
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [name, setName] = useState('')

  return (
    <AuthContext.Provider value={{ name }}>{children}</AuthContext.Provider>
  )
}
