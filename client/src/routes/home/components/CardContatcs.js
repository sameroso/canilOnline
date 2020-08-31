import React from 'react'
import PropTypes from 'prop-types'
import { IoLogoWhatsapp } from 'react-icons/io'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { AiTwotonePhone, AiTwotoneMail } from 'react-icons/ai'

import s from './CardContacts.styled'
import {
  formatFacebookString,
  formatWhatsApp,
  formatPhone,
} from '../../../helpers/contactInfoHelper'

export default function CardContacts({ phone, email, whatsApp, faceBook }) {
  return (
    <s.Container>
      <s.Flex>
        <a
          href={`https://wa.me/${whatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp color="green" size={28} />
        </a>
        <s.Font>{formatWhatsApp(whatsApp)}</s.Font>
      </s.Flex>
      <s.Flex>
        <a
          href="https://www.facebook.com/samer.kayali.7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookBoxFill color="blue" size={28} />
        </a>
        <s.Font>{formatFacebookString(faceBook)}</s.Font>
      </s.Flex>
      <s.Flex>
        <a href="tel:+55-31-99156-6498">
          <AiTwotonePhone color="blue" size={28} />
        </a>
        <s.Font>{formatPhone(phone)}</s.Font>
      </s.Flex>
      <s.Flex>
        <a href="tel:+55-31-99156-6498">
          <AiTwotoneMail color="blue" size={28} />
        </a>
        <s.Font>{email}</s.Font>
      </s.Flex>
    </s.Container>
  )
}

CardContacts.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  whatsApp: PropTypes.string,
  faceBook: PropTypes.string,
}
