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
        <img src={preview} alt="chosen" height="100px" width="100px" />
        <div
          style={{
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-around',
            color: 'green',
          }}
        >
          <label htmlFor={index}>
            <AiFillEdit size={22} />
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={e => {
              console.log(typeof e.target.files[0].name)
              handleFileInputChange(e, true, preview)
            }}
            size={22}
            value=""
            id={index}
            style={{ display: 'none' }}
          />
          <AiFillDelete onClick={() => deleteImg(preview)} size={22} />
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
