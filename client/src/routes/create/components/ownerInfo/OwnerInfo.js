import React, { useContext } from 'react'

/* import { PetFormContext } from '../../../../context/petForm' */
import { FormNavigationContext } from '../../../../context/formNavigation'
import Adress from './Adrress'
import ArrowsNavigator from '../ArrowsNavigator'

export default function OwnerInfo() {
  /* const { petFormInfo, setPetFormInfo } = useContext(PetFormContext) */
  const { formRoute } = useContext(FormNavigationContext)

  if (formRoute !== 'owner') {
    return null
  }

  return (
    <>
      <ArrowsNavigator backwardArrowRoute="details" />
      <Adress />
    </>
  )
}
