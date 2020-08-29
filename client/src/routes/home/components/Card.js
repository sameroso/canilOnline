import React from 'react'
import PropTypes from 'prop-types'

export default function Card(props) {
  return (
    <div style={{ width: '30%', margin: '10px' }}>
      <div>
        <span>{props.name}</span>
      </div>
      <div>
        <span>{props.age}</span>
      </div>
      <div>
        <span>{props.user}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  props: {
    name: PropTypes.string,
    age: PropTypes.string,
    user: PropTypes.string,
  },
  name: PropTypes.string,
  age: PropTypes.string,
  user: PropTypes.string,
}
