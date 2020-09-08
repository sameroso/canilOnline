import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PetFormContext = createContext()

export function PetFormContextProvider({ children }) {
  const [petFormInfo, setPetFormInfo] = useState({
    name: '',
    images: [],
    angerLevel: null,
    agitationLevel: null,
    description: '',
    sex: '',
    castrated: '',
    dewormed: '',
    race: '',
    size: '',
    age: '',
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
