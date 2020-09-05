import React from 'react'
import PropTypes from 'prop-types'

import s from './PetDetails.styled'
import BarLevel from './BarLevel'
import Castrated from './Castrated'
import Dewormed from './Dewormed'
import Race from './Race'
import Vaccinations from './Vaccinations'

export default function PetDetails({ petInfo }) {
  return (
    <s.BarContainer>
      <div>
        <BarLevel
          petInfo={petInfo}
          level={petInfo?.angerLevel}
          mode="bravo"
          initialParam="manso"
          finalParam="bravo"
        />
        <BarLevel
          petInfo={petInfo}
          level={petInfo?.agitationLevel}
          mode="agitado"
          initialParam="calmo"
          finalParam="agitado"
        />
        <s.Info>
          <s.Margin>
            <Castrated />
          </s.Margin>
          <s.Margin>
            <Dewormed />
          </s.Margin>
          <s.Margin>
            <Race race={petInfo?.race} />
          </s.Margin>
        </s.Info>
        <Vaccinations vaccines={petInfo.vaccines} />
      </div>
    </s.BarContainer>
  )
}

PetDetails.propTypes = {
  petInfo: PropTypes.shape({
    name: PropTypes.string,
    angerLevel: PropTypes.number,
    agitationLevel: PropTypes.number,
    vaccines: PropTypes.array,
    race: PropTypes.string,
  }),
}
