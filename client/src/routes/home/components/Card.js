import React from 'react'
import PropTypes from 'prop-types'

import s from './Card.styled'
import CardSlider from './CardSlider'
import CardBody from './CardBody'

export default function Card(props) {
  return (
    <s.Container>
      <div>
        <CardSlider />
      </div>
      <div>
        <CardBody
          name={props.name}
          user={props.user}
          age={props.age}
          description={props.description}
        />
      </div>
    </s.Container>
  )
}

Card.propTypes = {
  props: {
    name: PropTypes.string,
    age: PropTypes.string,
    user: PropTypes.string,
    description: PropTypes.string,
  },
  name: PropTypes.string,
  age: PropTypes.string,
  user: PropTypes.string,
  description: PropTypes.string,
}
