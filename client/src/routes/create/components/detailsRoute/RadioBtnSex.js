import React, { useContext } from 'react'
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'

import { PetFormContext } from '../../../../context/petForm'

export default function RadioBtnSex() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)

  function handleRadioInputChange(e) {
    setPetFormInfo({ ...petFormInfo, sex: e.target.value })
  }

  return (
    <div style={{ margin: '15px 15px' }}>
      <FormLabel component="legend">Sexo</FormLabel>
      <RadioGroup
        style={{ flexDirection: 'row' }}
        aria-label="gender"
        name="gender1"
        value={petFormInfo.sex}
        onChange={handleRadioInputChange}
      >
        <FormControlLabel
          value="male"
          control={<Radio style={{ color: '#ea4c89' }} />}
          label="macho"
        />
        <FormControlLabel
          value="female"
          control={<Radio style={{ color: '#ea4c89' }} />}
          label="femea"
        />
      </RadioGroup>
    </div>
  )
}
