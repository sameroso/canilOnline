import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const PetFormContext = createContext()

export function PetFormContextProvider({ children }) {
  const [petFormInfo, setPetFormInfo] = useState({
    name: '',
    images: [],
    angerLevel: null,
    agitationLevel: null,
    description: '',
    sex: '',
    castrated: '',
    dewormed: '',
    race: '',
    size: '',
    age: '',
    vaccines: [{ id: '1', name: 'V8', date: Date.now() }],
    ownerAddress: {
      bairro: 'Centro',
      cep: '36570-043',
      complemento: '',
      ddd: '31',
      gia: '',
      ibge: '3171303',
      lat: -20.7554,
      localidade: 'Viçosa',
      logradouro: 'Rua Floriano Peixoto',
      lon: -42.8838,
      siafi: '5427',
      uf: 'MG',
    },
  })

  return (
    <PetFormContext.Provider value={{ petFormInfo, setPetFormInfo }}>
      {children}
    </PetFormContext.Provider>
  )
}

PetFormContextProvider.propTypes = {
  children: PropTypes.node,
}
