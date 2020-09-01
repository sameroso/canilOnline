import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import s from './CardBody.styled'
import CardContacts from './CardContatcs'
import { PetInfoContext } from '../../../context/petInfo'

export default function CardBody(props) {
  const {
    name,
    user,
    age,
    description,
    whatsApp,
    faceBook,
    phone,
    email,
  } = props

  const { setPetInfo } = useContext(PetInfoContext)

  return (
    <s.Container>
      <s.Header>
        <div>
          <s.Name>{name}</s.Name>
          <s.Age>{age}</s.Age>
        </div>
        <Link to="/detalhe/jones" onClick={() => setPetInfo(props)}>
          <div>Ver mais</div>
        </Link>
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
