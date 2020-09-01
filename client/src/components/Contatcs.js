import React from 'react'
import PropTypes from 'prop-types'
import { IoLogoWhatsapp } from 'react-icons/io'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { AiTwotonePhone, AiTwotoneMail } from 'react-icons/ai'

import s from './Contacts.styled'
import {
  formatFacebookString,
  formatWhatsApp,
  formatPhone,
} from '../helpers/contactInfoHelper'

export default function CardContacts({
  phone,
  email,
  whatsApp,
  faceBook,
  isDetailPage,
}) {
  return (
    <s.Container isDetailPage={isDetailPage}>
      <s.Flex isDetailPage={isDetailPage}>
        <a
          href={`https://wa.me/${whatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp color="green" size={28} />
        </a>
        <s.Font isDetailPage={isDetailPage}>{formatWhatsApp(whatsApp)}</s.Font>
      </s.Flex>
      <s.Flex isDetailPage={isDetailPage}>
        <a
          href="https://www.facebook.com/samer.kayali.7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookBoxFill color="blue" size={28} />
        </a>
        <s.Font isDetailPage={isDetailPage}>
          {formatFacebookString(faceBook)}
        </s.Font>
      </s.Flex>
      <s.Flex isDetailPage={isDetailPage}>
        <a href="tel:+55-31-99156-6498">
          <AiTwotonePhone color="blue" size={28} />
        </a>
        <s.Font isDetailPage={isDetailPage}>{formatPhone(phone)}</s.Font>
      </s.Flex>
      <s.Flex isDetailPage={isDetailPage}>
        <a href="tel:+55-31-99156-6498">
          <AiTwotoneMail color="blue" size={28} />
        </a>
        <s.Font isDetailPage={isDetailPage}>{email}</s.Font>
      </s.Flex>
    </s.Container>
  )
}

CardContacts.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  whatsApp: PropTypes.string,
  faceBook: PropTypes.string,
  isDetailPage: PropTypes.bool,
}
