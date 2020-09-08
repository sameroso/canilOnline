import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'

import { PetFormContext } from '../../../../context/petForm'

export default function Race() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)

  return (
    <div style={{ margin: '10px 15px', textAlign: 'center' }}>
      <TextField
        id="standard-basic"
        label="Nome (opcional)"
        color="primary"
        value={petFormInfo.name}
        onChange={e => setPetFormInfo({ ...petFormInfo, name: e.target.value })}
      />
    </div>
  )
}
