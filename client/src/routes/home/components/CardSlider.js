import React from 'react'
import AwesomeSlider from 'react-awesome-slider'

import dog from '../../../assets/dog.png'
import 'react-awesome-slider/dist/styles.css'
import './CardSlider.css'

export default function CardSlider() {
  return (
    <AwesomeSlider bullets={false}>
      <div data-src={dog} />
      <div data-src={dog} />
      <div data-src={dog} />
    </AwesomeSlider>
  )
}
