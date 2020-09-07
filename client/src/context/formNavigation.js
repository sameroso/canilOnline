import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const FormNavigationContext = createContext()

export function FormNavigationContextProvider({ children }) {
  const [formRoute, setFormRoute] = useState('images')

  return (
    <FormNavigationContext.Provider value={{ formRoute, setFormRoute }}>
      {children}
    </FormNavigationContext.Provider>
  )
}

FormNavigationContextProvider.propTypes = {
  children: PropTypes.node,
}
