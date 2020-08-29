import React from 'react'

import Card from './Card'
import mockAnimalData from '../../../mocks/animalData'
import s from './List.styled'

export default function List() {
  const data = mockAnimalData.map(data => <Card {...data} key={data.id} />)

  return <s.Container>{data}</s.Container>
}
