import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

import dog from '../../../assets/cachorro.jpg'
import dog2 from '../../../assets/cachorro-filhote.jpg'
import dog3 from '../../../assets/dog-3.jpg'

import './CardSlider.css'

export default function CardSlider() {
  return (
    <AwesomeSlider>
      <div data-src={dog} />
      <div data-src={dog2} />
      <div data-src={dog3} />
    </AwesomeSlider>
  )
}
