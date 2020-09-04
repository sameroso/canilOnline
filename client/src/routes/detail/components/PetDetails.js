import React from 'react'
import PropTypes from 'prop-types'

import s from './PetDetails.styled'
import AngerBar from '../../../components/AngerBar'
import Castrated from './Castrated'

export default function PetDetails({ petInfo }) {
  return (
    <s.BarContainer>
      <div>
        <div style={{ display: 'flex', margin: 'auto' }}>
          <span style={{ textAlign: 'center', margin: ' 15px auto' }}>
            o quão bravo é {petInfo?.name || `esse pet`}
          </span>
        </div>
        <AngerBar
          filledColor="black"
          unFilledColor="green"
          readOnly
          lineHeight="4px"
          initialParam="manso"
          finalParam="bravo"
          lineWidth="10px"
          circleheight="15px"
          defaultValue={petInfo?.angerLevel}
        />
        <div>
          <Castrated />
        </div>
      </div>
    </s.BarContainer>
  )
}

PetDetails.propTypes = {
  petInfo: PropTypes.shape({
    name: PropTypes.string,
    angerLevel: PropTypes.number,
  }),
}
