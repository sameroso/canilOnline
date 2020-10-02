import React from 'react'
import PropTypes from 'prop-types'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { GiResize } from 'react-icons/gi'
import s from './ImgCard.styled'

export default function ImgCard({
  preview,
  rawImg,
  deleteImg,
  handleFileInputChange,
  index,
  resizeImage,
}) {
  return (
    <>
      <s.Border>
        <img src={preview} alt="chosen" height="130px" width="130px" />
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
            onChange={e => handleFileInputChange(e, true, rawImg)}
            size={22}
            value=""
            id={index}
            style={{ display: 'none' }}
          />
          <s.DeleteContainer>
            <AiFillDelete onClick={() => deleteImg(rawImg)} size={22} />
          </s.DeleteContainer>
          <s.ResizeContainer>
            <GiResize size={22} onClick={() => resizeImage(rawImg)} />
          </s.ResizeContainer>
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
  rawImg: PropTypes.string,
  resizeImage: PropTypes.func,
}
