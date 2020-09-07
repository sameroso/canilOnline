import React, { useContext } from 'react'

import { FormNavigationContext } from '../../../../context/formNavigation'
import { PetFormContext } from '../../../../context/petForm'
import BarLevel from '../../../../components/BarLevel'

export default function PetPersonalitySelector() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)
  const { formRoute, setFormRoute } = useContext(FormNavigationContext)

  console.log(setFormRoute)

  if (formRoute !== 'personality') return null

  return (
    <>
      <BarLevel
        initialParam="manso"
        finalParam="bravo"
        mode="bravo"
        readOnly={false}
        level={petFormInfo.angerLevel}
        setLevel={level =>
          setPetFormInfo({ ...petFormInfo, angerLevel: level })
        }
        filledColor="black"
        unFilledColor="green"
        lineHeight="4px"
        lineWidth="10px"
        circleheight="15px"
      />
      <BarLevel
        initialParam="calmo"
        finalParam="agitado"
        mode="agitado"
        readOnly={false}
        level={petFormInfo.agitationLevel}
        setLevel={level =>
          setPetFormInfo({ ...petFormInfo, agitationLevel: level })
        }
        filledColor="black"
        unFilledColor="green"
        lineHeight="4px"
        lineWidth="10px"
        circleheight="15px"
      />
    </>
  )
}
