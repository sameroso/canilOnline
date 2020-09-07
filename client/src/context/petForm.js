import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PetFormContext = createContext()

export function PetFormContextProvider({ children }) {
  const [petFormInfo, setPetFormInfo] = useState({
    images: [],
    angerLevel: 0,
    agitationLevel: 0,
    description: '',
  })

  return (
    <PetFormContext.Provider value={{ petFormInfo, setPetFormInfo }}>
      {children}
    </PetFormContext.Provider>
  )
}

PetFormContextProvider.propTypes = {
  children: PropTypes.node,
}
