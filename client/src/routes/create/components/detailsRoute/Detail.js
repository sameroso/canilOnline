import React, { useContext } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import { FormNavigationContext } from '../../../../context/formNavigation'
import { PetFormContext } from '../../../../context/petForm'
import Race from './Race'
import Age from './Age'
import Name from './Name'
import Vaccination from './Vaccination'
import RadioBtns from './RadioBtns'
import s from './Detail.styled'

export default function Details() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)
  const { formRoute, setFormRoute } = useContext(FormNavigationContext)

  console.log(setFormRoute)

  if (formRoute !== 'details') return null

  return (
    <s.Container>
      <s.SubContainer>
        <s.InputsContainer>
          <Name />
          <Race />
          <Age />
        </s.InputsContainer>
        <s.FormContainer>
          <RadioBtns />
        </s.FormContainer>
        <s.VaccinationContainer>
          <Vaccination />
        </s.VaccinationContainer>
        <div>
          <div style={{ margin: '10px 20px' }}>
            <s.Description>Descrição</s.Description>
          </div>
          <s.TextAreaContainer>
            <TextareaAutosize
              minRows={4}
              style={{
                width: '100%',
                maxWidth: '800px',
                height: '300px',
                resize: 'vertical',
                margin: '10px',
                backgroundColor: '#F9F8FD',
                borderRadius: '5px',
                border: '2px solid #ea4c89',
              }}
              value={petFormInfo.description}
              onChange={e =>
                setPetFormInfo({ ...petFormInfo, description: e.target.value })
              }
            />
          </s.TextAreaContainer>
        </div>
      </s.SubContainer>
    </s.Container>
  )
}
