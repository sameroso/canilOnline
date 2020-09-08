import React, { useContext } from 'react'
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'

import { PetFormContext } from '../../../../context/petForm'

export default function PetSize() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)

  function handleRadioInputChange(e) {
    setPetFormInfo({ ...petFormInfo, size: e.target.value })
  }

  return (
    <div style={{ margin: '15px 15px' }}>
      <FormLabel component="legend">Porte</FormLabel>
      <RadioGroup
        style={{ flexDirection: 'row' }}
        aria-label="size"
        name="size"
        value={petFormInfo.size}
        onChange={handleRadioInputChange}
      >
        <FormControlLabel
          value="pequeno"
          control={<Radio style={{ color: '#ea4c89' }} />}
          label="pequeno"
        />
        <FormControlLabel
          value="medio"
          control={<Radio style={{ color: '#ea4c89' }} />}
          label="médio"
        />
        <FormControlLabel
          value="grande"
          control={<Radio style={{ color: '#ea4c89' }} />}
          label="grande"
        />
      </RadioGroup>
    </div>
  )
}
