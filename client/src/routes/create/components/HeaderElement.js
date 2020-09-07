import React from 'react'
import PropTypes from 'prop-types'

import s from './HeaderElement.styled'

export default function HeaderElement({ route, setRoute, formRoute, name }) {
  return (
    <s.Container
      style={{ textAlign: 'center' }}
      onClick={() => setRoute(route)}
    >
      <span>{name}</span>
      {route === formRoute && <hr />}
    </s.Container>
  )
}

HeaderElement.propTypes = {
  route: PropTypes.string,
  setRoute: PropTypes.func,
  formRoute: PropTypes.string,
  name: PropTypes.string,
}
