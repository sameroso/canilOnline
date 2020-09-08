import React, { useContext } from 'react'
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'

import { PetFormContext } from '../../../../context/petForm'

export default function CastratedRadioBtn() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)

  function handleRadioInputChange(e) {
    setPetFormInfo({ ...petFormInfo, castrated: e.target.value })
  }

  return (
    <div style={{ margin: '15px 15px' }}>
      <FormLabel component="legend">Castrado</FormLabel>
      <RadioGroup
        style={{ flexDirection: 'row' }}
        aria-label="castrated"
        name="castrated1"
        value={petFormInfo.castrated}
        onChange={handleRadioInputChange}
      >
        <FormControlLabel
          value="sim"
          control={<Radio style={{ color: '#ea4c89' }} />}
          label="sim"
        />
        <FormControlLabel
          value="nao"
          control={<Radio style={{ color: '#ea4c89' }} />}
          label="não"
        />
        <FormControlLabel
          value="naosei"
          control={<Radio style={{ color: '#ea4c89' }} />}
          label="não sei"
        />
      </RadioGroup>
    </div>
  )
}
