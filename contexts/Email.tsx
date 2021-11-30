import React, { useState } from 'react'

export const EmailContext = React.createContext<{
  email: string,
  changeEmail (email: string): void
}>({
  email: "",
  changeEmail: (email) => { return }
})

export const EmailProvider = ({ children }: { children: JSX.Element }) => {
  const [email, setEmail] = useState("")

  const changeEmail = (email: string): void => {
    setEmail(email)
  }

  return <EmailContext.Provider value={{ email, changeEmail }}>{children}</EmailContext.Provider>

}