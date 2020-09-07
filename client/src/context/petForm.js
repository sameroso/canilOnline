import React, { createContext, useState, useRef } from 'react'
import PropTypes from 'prop-types'

export const PetFormContext = createContext()

export function PetFormContextProvider({ children }) {
  const [petFormInfo, setPetFormInfo] = useState({ images: [] })
  const imgCounter = useRef(0)

  return (
    <PetFormContext.Provider
      value={{ petFormInfo, setPetFormInfo, imgCounter }}
    >
      {children}
    </PetFormContext.Provider>
  )
}

PetFormContextProvider.propTypes = {
  children: PropTypes.node,
}
