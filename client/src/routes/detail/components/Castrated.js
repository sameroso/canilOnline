import React from 'react'
import PropTypes from 'prop-types'

import s from './Castrated.styled'

export default function Castrated({ isCastrated }) {
  const castrationInfo = () => {
    if (isCastrated === true) {
      return <div>é vacinado</div>
    } else if (isCastrated === false) {
      return <div>não vacinado</div>
    } else {
      return <div>não informado</div>
    }
  }

  return (
    <s.Border>
      <s.Container>
        <s.TitleContainer>
          <s.Text>castrado?</s.Text>
          <s.Line color="black" />
        </s.TitleContainer>
        <div>{castrationInfo()}</div>
      </s.Container>
    </s.Border>
  )
}

Castrated.propTypes = { isCastrated: PropTypes.bool }
