import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import { PetInfoContext } from '../../context/petInfo'
import Carousel from './components/Carousel'
import s from './Detail.styled'

export default function DetailPage({ match }) {
  const { petInfo, setPetInfo } = useContext(PetInfoContext)

  useEffect(() => {
    if (petInfo) {
      console.log(match.params.id)
    }

    function clearPetInfo() {
      setPetInfo(null)
    }

    return clearPetInfo
  })

  return (
    <>
      <s.CarouselContainer>
        <Carousel />
      </s.CarouselContainer>
      <s.Bodycontainer>
        <div>
          <div>{petInfo?.name}</div>
          <div>{petInfo?.description}</div>
        </div>
      </s.Bodycontainer>
    </>
  )
}

DetailPage.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}
