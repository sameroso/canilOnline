import React, { useContext } from 'react'
import { FcPlus } from 'react-icons/fc'

import { PetFormContext } from '../../../../context/petForm'
import s from './Vaccination.styled'

export default function Vaccination() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)

  console.log(setPetFormInfo)

  return (
    <s.Container>
      <s.Row>
        <s.Col>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <FcPlus />
            <s.VaccineTableTitle>Vacina</s.VaccineTableTitle>
          </div>
        </s.Col>
        <s.Col>
          <s.VaccineTableTitle>data</s.VaccineTableTitle>
        </s.Col>
      </s.Row>
      {petFormInfo.vaccines.map(vaccine => (
        <s.Row key={vaccine.id}>
          <s.Col>
            <span>{vaccine.name}</span>
          </s.Col>
          <s.Col>
            <span>{vaccine.date.toString()}</span>
          </s.Col>
        </s.Row>
      ))}
    </s.Container>
  )
}
