import React from 'react'

/* import s from './Create.styled' */
import Images from './components/imagesRoute/Images'
import Header from './components/Header'
import PetPersonalityselector from './components/personalityRoute/PetPersonalitySelector'
import Details from './components/detailsRoute/Detail'
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
        <div>
          <PetPersonalityselector />
        </div>
        <div>
          <Details />
        </div>
      </FormNavigationContextProvider>
    </PetFormContextProvider>
  )
}
