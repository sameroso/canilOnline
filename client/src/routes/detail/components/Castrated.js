import React from 'react'
import PropTypes from 'prop-types'

export default function Castrated({ isCastrated }) {
  const x = () => {
    if (isCastrated === true) {
      return <div>é vacinado</div>
    } else if (isCastrated === false) {
      return <div>não vacinado</div>
    } else {
      return <div>não informado</div>
    }
  }

  return (
    <div style={{ margin: '30px 0 ' }}>
      <div>O cão é castrado?</div>
      <div>{x()}</div>
    </div>
  )
}

Castrated.propTypes = { isCastrated: PropTypes.bool }
