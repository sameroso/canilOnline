import React from 'react'

/* import s from './Create.styled' */
import Images from './components/imagesRoute/Images'
import Header from './components/Header'
import OwnerInfo from './components/ownerInfo/OwnerInfo'
import PetPersonalityselector from './components/personalityRoute/PetPersonalitySelector'
import Details from './components/detailsRoute/Detail'
import { PetFormContextProvider } from '../../context/petForm'
import { FormNavigationContextProvider } from '../../context/formNavigation'
import s from './Create.styled'

export default function Create() {
  return (
    <PetFormContextProvider>
      <FormNavigationContextProvider>
        <s.Container>
          <div>
            <Header />
            <Images />
            <PetPersonalityselector />
            <Details />
            <OwnerInfo />
          </div>
        </s.Container>
      </FormNavigationContextProvider>
    </PetFormContextProvider>
  )
}
