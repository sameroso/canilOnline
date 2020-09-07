import React, { useContext } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

import { FormNavigationContext } from '../../../../context/formNavigation'
import { PetFormContext } from '../../../../context/petForm'
import s from './Detail.styled'

export default function Details() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)
  const { formRoute, setFormRoute } = useContext(FormNavigationContext)

  console.log(setFormRoute)

  if (formRoute !== 'details') return null

  return (
    <s.Container>
      <s.SubContainer>
        <div>Descrição</div>
        <s.TextAreaContainer>
          <TextareaAutosize
            minRows={4}
            style={{
              width: '100%',
              maxWidth: '800px',
              margin: 'auto',
              height: '300px',
              resize: 'vertical',
            }}
            value={petFormInfo.description}
            onChange={e =>
              setPetFormInfo({ ...petFormInfo, description: e.target.value })
            }
          />
        </s.TextAreaContainer>
      </s.SubContainer>
    </s.Container>
  )
}
