import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PetInfoContext = createContext()

export function PetInfoContextProvider({ children }) {
  const [petInfo, setPetInfo] = useState(null)

  return (
    <PetInfoContext.Provider value={{ petInfo, setPetInfo }}>
      {children}
    </PetInfoContext.Provider>
  )
}

PetInfoContextProvider.propTypes = {
  children: PropTypes.node,
}
