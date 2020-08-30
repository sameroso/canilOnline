import React from 'react'
import PropTypes from 'prop-types'

import s from './CardBody.styled'

export default function CardBody({ name, user, age, description }) {
  return (
    <s.Container>
      <s.Header>
        <s.Name>{name}</s.Name>
        <s.Age>{age}</s.Age>
      </s.Header>
      <div>{description}</div>
      <s.Footer>
        <span>{user}</span>
      </s.Footer>
    </s.Container>
  )
}

CardBody.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string.isRequired,
  age: PropTypes.string,
  description: PropTypes.string,
}
