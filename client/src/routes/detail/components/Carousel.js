import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import dog from '../../../assets/cachorro.jpg'
import dog2 from '../../../assets/cachorro-filhote.jpg'
import dog3 from '../../../assets/dog-3.jpg'
import s from './Carousel.styled'

export default function PetCarousel() {
  return (
    <s.Container>
      <Carousel
        dynamicHeight={true}
        width={'100%'}
        useKeyboardArrows={true}
        axis="horizontal"
      >
        <div>
          <img src={dog} />
        </div>
        <div>
          <img src={dog2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={dog3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </s.Container>
  )
}
