import React from 'react'

/* import s from './Create.styled' */
import Images from './components/Images'
import Header from './components/Header'
import { PetFormContextProvider } from '../../context/petForm'
import { FormNavigationContextProvider } from '../../context/formNavigation'

export default function Create() {
  return (
    <PetFormContextProvider>
      <FormNavigationContextProvider>
        <Header />
        <div>
          <Images />
        </div>
      </FormNavigationContextProvider>
    </PetFormContextProvider>
  )
}
