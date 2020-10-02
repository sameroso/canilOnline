import React, { useState, useContext } from 'react'
import axios from 'axios'

import { PetFormContext } from '../../../../context/petForm'

export default function Adress() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)

  const [cep, setCep] = useState('')

  //function handleCepInputChange() {}

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
            .then(res =>
              setPetFormInfo({ ...petFormInfo, ownerAddress: res.data }),
            )
        }}
      >
        vai
      </button>
      <div>{petFormInfo.ownerAddress?.bairro}</div>
      <div>{petFormInfo.ownerAddress?.localidade}</div>
      <div>{petFormInfo.ownerAddress?.logradouro}</div>
    </>
  )
}
