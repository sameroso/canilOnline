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
          email={props.email}
          phone={props.phone}
          faceBook={props.faceBook}
          whatsApp={props.whatsApp}
        />
      </div>
    </s.Container>
  )
}

Card.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    faceBook: PropTypes.string,
    whatsApp: PropTypes.string,
  }),
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.string,
  description: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  faceBook: PropTypes.string,
  whatsApp: PropTypes.string,
}
