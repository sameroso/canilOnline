import React from 'react'

import s from './RadioBtns.styled'
import RadioBtnSex from './RadioBtnSex'
import RadioBtnCastrated from './RadioBtnCastrated'
import RadioBtnDewormed from './RadioBtnDewormed'
import PetSize from './PetSize'

export default function Castrated() {
  return (
    <s.RadioBtnsContainer>
      <PetSize />
      <RadioBtnCastrated />
      <RadioBtnDewormed />
      <RadioBtnSex />
    </s.RadioBtnsContainer>
  )
}
