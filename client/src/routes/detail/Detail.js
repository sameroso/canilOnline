import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import { PetInfoContext } from '../../context/petInfo'
import Carousel from './components/Carousel'
import DetailBody from './components/DetailBody'
import s from './Detail.styled'

export default function DetailPage() {
  const { petInfo, setPetInfo } = useContext(PetInfoContext)

  useEffect(() => {
    if (petInfo) {
      console.log(petInfo)
    }

    function clearPetInfo() {
      setPetInfo(null)
    }

    return clearPetInfo
  })

  return (
    <>
      <s.NameContainer>
        <s.Name>{petInfo?.name}</s.Name>
      </s.NameContainer>
      <s.CarouselContainer>
        <Carousel />
      </s.CarouselContainer>
      <s.Bodycontainer>
        <DetailBody petInfo={petInfo} />
      </s.Bodycontainer>
    </>
  )
}

DetailPage.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}
