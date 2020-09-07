import React, { useContext } from 'react'

import { FormNavigationContext } from '../../../context/formNavigation'

export default function Header() {
  const { formRoute, setFormRoute } = useContext(FormNavigationContext)

  console.log(formRoute)

  return (
    <div>
      <div onClick={() => setFormRoute('imagens')}>Header</div>
    </div>
  )
}
