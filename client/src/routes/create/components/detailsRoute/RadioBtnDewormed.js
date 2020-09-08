import React, { useContext } from 'react'
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'

import { PetFormContext } from '../../../../context/petForm'

export default function RadioBtnDewormed() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)

  function handleRadioInputChange(e) {
    setPetFormInfo({ ...petFormInfo, dewormed: e.target.value })
  }

  return (
    <div style={{ margin: '15px 15px' }}>
      <FormLabel component="legend">Vermifugado Recentemente</FormLabel>
      <RadioGroup
        style={{ flexDirection: 'row' }}
        aria-label="gender"
        name="gender1"
        value={petFormInfo.dewormed}
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
