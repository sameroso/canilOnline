import React, { useState } from 'react'
import axios from 'axios'

export default function Adress() {
  const [cep, setCep] = useState('')

  return (
    <>
      <input value={cep} onChange={e => setCep(e.target.value)} />
      <button
        onClick={() => {
          if (cep.length < 8) {
            return
          }
          axios.post('/api/searchCep', { cep })
        }}
      >
        vai
      </button>
    </>
  )
}
