import React from 'react'
import PropTypes from 'prop-types'

import s from './ContactInfo.styled'
import Contacts from '../../../components/Contatcs'
import menina from '../../../assets/menina.jpeg'

export default function ContactInfo(props) {
  return (
    <s.Container>
      <div>
        <div>
          <div>Converse com {props?.user}</div>
          <s.Image src={menina} height="120px" width="120px" />
        </div>
      </div>
      <Contacts {...props} isDetailPage />
    </s.Container>
  )
}

ContactInfo.propTypes = {
  props: PropTypes.shape({ user: PropTypes.string }),
  user: PropTypes.string,
}
