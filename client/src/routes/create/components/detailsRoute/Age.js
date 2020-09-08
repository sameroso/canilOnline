import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'

import { PetFormContext } from '../../../../context/petForm'

export default function Race() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)

  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <TextField
        type="number"
        id="standard-basic"
        label="Idade (anos)"
        color="primary"
        value={petFormInfo.age}
        onChange={e => setPetFormInfo({ ...petFormInfo, age: e.target.value })}
      />
    </div>
  )
}
