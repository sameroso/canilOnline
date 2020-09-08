import React from 'react'
import PropTypes from 'prop-types'

import s from './HeaderElement.styled'

export default function HeaderElement({
  route,
  setRoute,
  formRoute,
  name,
  mt,
}) {
  return (
    <s.Container
      onClick={() => setRoute(route)}
      mt={mt}
      isRoute={route === formRoute}
    >
      <s.Text>{name}</s.Text>
    </s.Container>
  )
}

HeaderElement.propTypes = {
  route: PropTypes.string,
  setRoute: PropTypes.func,
  formRoute: PropTypes.string,
  name: PropTypes.string,
  mt: PropTypes.string,
}
