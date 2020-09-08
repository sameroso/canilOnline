import React from 'react'
import PropTypes from 'prop-types'

import MeasureBar from './MeasureBar'
import s from './BarLevel.styled'

export default function BarLevel({
  petInfo,
  mode,
  level,
  initialParam,
  finalParam,
  setLevel,
  readOnly,
}) {
  return (
    <s.Container>
      <s.TextContainer>
        <s.Text>
          o quão {mode} é {petInfo?.name || `esse pet`}
        </s.Text>
      </s.TextContainer>
      <MeasureBar
        level={level}
        setLevel={setLevel}
        filledColor="#2c7d93"
        unFilledColor="#9e9ea7"
        readOnly={readOnly}
        lineHeight="4px"
        initialParam={initialParam}
        finalParam={finalParam}
        lineWidth="10px"
        circleheight="15px"
        defaultValue={level}
        barSize={5}
      />
    </s.Container>
  )
}

BarLevel.propTypes = {
  petInfo: PropTypes.shape({
    angerLevel: PropTypes.number,
    name: PropTypes.string,
  }),
  level: PropTypes.number,
  mode: PropTypes.string,
  initialParam: PropTypes.string,
  finalParam: PropTypes.string,
  readOnly: PropTypes.bool,
  setLevel: PropTypes.func,
}
