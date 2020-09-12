import React, { useContext } from 'react'

import { FormNavigationContext } from '../../../../context/formNavigation'
import { PetFormContext } from '../../../../context/petForm'
import ArrowsNavigator from '../ArrowsNavigator'
import BarLevel from '../../../../components/BarLevel'

export default function PetPersonalitySelector() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)
  const { formRoute } = useContext(FormNavigationContext)

  if (formRoute !== 'personality') return null

  return (
    <>
      <ArrowsNavigator fowardArrowRoute="details" backwardArrowRoute="images" />
      <BarLevel
        mode="bravo"
        readOnly={false}
        level={petFormInfo.angerLevel}
        setLevel={level =>
          setPetFormInfo({ ...petFormInfo, angerLevel: level })
        }
        filledColor="black"
        unFilledColor="green"
      />
      <BarLevel
        mode="agitado"
        readOnly={false}
        level={petFormInfo.agitationLevel}
        setLevel={level =>
          setPetFormInfo({ ...petFormInfo, agitationLevel: level })
        }
        filledColor="black"
        unFilledColor="green"
      />
    </>
  )
}
