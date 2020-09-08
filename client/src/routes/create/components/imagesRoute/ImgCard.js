import React from 'react'
import PropTypes from 'prop-types'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

import s from './ImgCard.styled'

export default function ImgCard({
  preview,
  deleteImg,
  handleFileInputChange,
  index,
}) {
  return (
    <>
      <s.Border>
        <img src={preview} alt="chosen" height="130px" width="120px" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <label htmlFor={index}>
            <s.EditContainer>
              <AiFillEdit size={22} />
            </s.EditContainer>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={e => handleFileInputChange(e, true, preview)}
            size={22}
            value=""
            id={index}
            style={{ display: 'none' }}
          />
          <s.DeleteContainer>
            <AiFillDelete onClick={() => deleteImg(preview)} size={22} />
          </s.DeleteContainer>
        </div>
      </s.Border>
    </>
  )
}

ImgCard.propTypes = {
  preview: PropTypes.string,
  deleteImg: PropTypes.func,
  handleFileInputChange: PropTypes.func,
  index: PropTypes.number,
}
