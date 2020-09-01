import React from 'react'
import PropTypes from 'prop-types'

import s from './DetailBody.styled'
import ContactInfo from './ContactInfo'

export default function DetailBody({ petInfo }) {
  return (
    <s.Container>
      <ContactInfo {...petInfo} />
      <div>
        <s.DescriptionContainer>
          <div>
            <div style={{ margin: '10px 0' }}>
              <span
                style={{
                  fontSize: '22px',
                  fontFamily: "'Cardo', serif",
                }}
              >
                Descrição
              </span>
            </div>
            <s.Description>{petInfo?.description}</s.Description>
          </div>
        </s.DescriptionContainer>
      </div>
    </s.Container>
  )
}

DetailBody.propTypes = {
  petInfo: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
}
