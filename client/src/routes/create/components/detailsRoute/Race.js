import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'

import { PetFormContext } from '../../../../context/petForm'

export default function Race() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)

  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <TextField
        id="standard-basic"
        label="Raça"
        color="primary"
        value={petFormInfo.race}
        onChange={e => setPetFormInfo({ ...petFormInfo, race: e.target.value })}
      />
    </div>
  )
}
