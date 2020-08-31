import React from 'react'
import PropTypes from 'prop-types'

import s from './CardBody.styled'
import CardContacts from './CardContatcs'

export default function CardBody({
  name,
  user,
  age,
  description,
  whatsApp,
  faceBook,
  phone,
  email,
}) {
  return (
    <s.Container>
      <s.Header>
        <s.Name>{name}</s.Name>
        <s.Age>{age}</s.Age>
      </s.Header>
      <div>{description}</div>
      <s.Footer>
        <div>
          <s.Owner>{user}</s.Owner>
        </div>
        <CardContacts
          whatsApp={whatsApp}
          faceBook={faceBook}
          phone={phone}
          email={email}
        />
      </s.Footer>
    </s.Container>
  )
}

CardBody.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string.isRequired,
  age: PropTypes.number,
  description: PropTypes.string,
  whatsApp: PropTypes.string,
  faceBook: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
}
