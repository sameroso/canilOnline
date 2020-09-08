import React, { useContext } from 'react'

import HeaderElement from './HeaderElement'
import { FormNavigationContext } from '../../../context/formNavigation'
import s from './Header.styled'

export default function Header() {
  const { formRoute, setFormRoute } = useContext(FormNavigationContext)

  return (
    <s.Container>
      <HeaderElement
        route="images"
        name="imagens"
        setRoute={setFormRoute}
        formRoute={formRoute}
      />
      <HeaderElement
        name="pessoal"
        route="personality"
        setRoute={setFormRoute}
        formRoute={formRoute}
      />
      <HeaderElement
        name="detalhes"
        route="details"
        setRoute={setFormRoute}
        formRoute={formRoute}
      />
      <HeaderElement
        name="jose"
        route="jose"
        setRoute={setFormRoute}
        formRoute={formRoute}
      />
    </s.Container>
  )
}
