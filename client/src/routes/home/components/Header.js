import React from 'react'

import s from './Header.styled'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {
  return (
    <s.div>
      <s.Container>
        <s.Menu>
          <GiHamburgerMenu size={22} color="#9e9ea7" />
          <text>SignIn</text>
        </s.Menu>
      </s.Container>
    </s.div>
  )
}
