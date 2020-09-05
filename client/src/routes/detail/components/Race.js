import React from 'react'
import PropTypes from 'prop-types'

import s from './Race.styled'

export default function Race({ race }) {
  const raceInfo = () => {
    if (race) {
      return <div>{race}</div>
    } else {
      return <div>não informado</div>
    }
  }

  return (
    <s.Border>
      <s.Container>
        <s.TitleContainer>
          <s.Text>raça</s.Text>
          <s.Line color="black" />
        </s.TitleContainer>
        <div>{raceInfo()}</div>
      </s.Container>
    </s.Border>
  )
}

Race.propTypes = { race: PropTypes.string }
