import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'

import { FormNavigationContext } from '../../../context/formNavigation'
import s from './ArrowsNavigator.styled'

export default function ArrowsNavigator({
  fowardArrowRoute,
  backwardArrowRoute,
}) {
  const { setFormRoute } = useContext(FormNavigationContext)

  return (
    <s.NavigatorContainer>
      {backwardArrowRoute && (
        <s.ArrowContainer>
          <FaArrowCircleLeft
            size={24}
            onClick={() => setFormRoute(backwardArrowRoute)}
            color="#0d0c22"
          />
        </s.ArrowContainer>
      )}
      {fowardArrowRoute && (
        <s.ArrowContainer>
          <FaArrowCircleRight
            size={24}
            onClick={() => setFormRoute(fowardArrowRoute)}
            color="#0d0c22"
          />
        </s.ArrowContainer>
      )}
    </s.NavigatorContainer>
  )
}

ArrowsNavigator.propTypes = {
  fowardArrowRoute: PropTypes.string,
  backwardArrowRoute: PropTypes.string,
}
