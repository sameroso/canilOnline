import React, { useState, useContext } from 'react'
import axios from 'axios'

import { PetFormContext } from '../../../../context/petForm'

export default function Adress() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)

  console.log(petFormInfo)

  const [cep, setCep] = useState('')

  return (
    <>
      <input value={cep} onChange={e => setCep(e.target.value)} />
      <button
        onClick={() => {
          if (cep.length < 8) {
            return
          }
          axios
            .post('/api/getAddress', { cep })
            .then(res => setPetFormInfo({ ...petFormInfo, ownerAddress: res }))
        }}
      >
        vai
      </button>
      <div>{petFormInfo.ownerAddress?.bairro}</div>
    </>
  )
}
