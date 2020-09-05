import React from 'react'
import PropTypes from 'prop-types'

import s from './Vaccinations.styled'

export default function Vaccinations({ vaccines }) {
  const vaccineList = () =>
    vaccines.map((vaccine, i) => {
      const bgRow = i % 2 === 0 ? 'blue' : 'white'

      return (
        <div
          key={vaccine.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '9px 0',
            backgroundColor: bgRow,
          }}
        >
          <div>{vaccine.name}</div>
          <div>{vaccine.date.toString().slice(0, 10)}</div>
        </div>
      )
    })

  return (
    <s.VaxBoder>
      <s.VaxContainer>
        <div style={{ textAlign: 'center' }}>Vacinas</div>
        <hr />
        {vaccineList()}
      </s.VaxContainer>
    </s.VaxBoder>
  )
}

Vaccinations.propTypes = {
  vaccines: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.object,
      id: PropTypes.string,
    }),
  ),
}
