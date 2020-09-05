import React from 'react'
import PropTypes from 'prop-types'

import s from './Dewormed.styled'

export default function Dewormed({ isDewormed }) {
  const dewormingInfo = () => {
    if (isDewormed === true) {
      return <div>sim</div>
    } else if (isDewormed === false) {
      return <div>não </div>
    } else {
      return <div>não informado</div>
    }
  }

  return (
    <s.Border>
      <s.Container>
        <s.TitleContainer>
          <s.Text>Vermifugado recentenmente?</s.Text>
          <s.Line color="black" />
        </s.TitleContainer>
        <div>{dewormingInfo()}</div>
      </s.Container>
    </s.Border>
  )
}

Dewormed.propTypes = { isDewormed: PropTypes.bool }
