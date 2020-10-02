import React, { useRef, useState } from 'react'
import { Modal } from '@material-ui/core'
import ReactCrop from 'react-image-crop'
import PropTypes from 'prop-types'

import { cropImg } from '../../../../helpers/ImageHelpers'
import s from './CropModal.styled'
import './CropModal.css'

export default function CropModal({
  rawImg,
  isModalOpen,
  setIsModalOpen,
  petFormInfo,
  setPetForminfo,
  imageEditInfo,
}) {
  const [croppedImg, setCroppedImg] = useState()
  const htmlImgLoaded = useRef()
  const [crop, setCrop] = useState({
    aspect: 1 / 1,
    unit: '%',
    x: 20,
    y: 20,
    width: 50,
    height: 50,
  })

  function cancelSubmit() {
    const arr = imageEditInfo?.current?.userImagesArr || [...petFormInfo.images]

    if (imageEditInfo.current) {
      arr[imageEditInfo.current.index] = imageEditInfo.current?.previous
    } else {
      arr.pop()
    }

    setPetForminfo({ ...petFormInfo, images: arr })
    setIsModalOpen(false)
  }

  function displayCroppedImg() {
    const arr = imageEditInfo?.current?.arr || [...petFormInfo.images]

    if (imageEditInfo.current && croppedImg !== 'data:,') {
      arr[imageEditInfo.current.index].cropped = croppedImg
    } else if (imageEditInfo.current) {
      arr[imageEditInfo.current.index].cropped =
        arr[imageEditInfo.current.index].raw
    } else if (croppedImg !== 'data:,') {
      arr[arr.length - 1].cropped = croppedImg
    } else {
      arr[arr.length - 1].cropped = arr[arr.length - 1].raw
    }
    setPetForminfo({
      ...petFormInfo,
      images: arr,
    })
    setIsModalOpen(false)
  }

  return (
    <div>
      <Modal open={isModalOpen} onClose={cancelSubmit} className="modalStyle">
        <s.CropperContainer>
          <s.CropperStyle>
            <div>Redimensione a imagem como desejar</div>
            <div>
              <ReactCrop
                style={{
                  margin: 'auto',
                }}
                src={rawImg}
                crop={crop}
                onChange={newCrop => {
                  setCrop(newCrop)
                }}
                onComplete={crop => {
                  cropImg(htmlImgLoaded.current, crop, 'samin', setCroppedImg)
                }}
                onImageLoaded={target => {
                  htmlImgLoaded.current = target
                }}
              />
            </div>
            <div>
              <button onClick={displayCroppedImg}>resize</button>
              <button onClick={cancelSubmit}>cancelar</button>
            </div>
          </s.CropperStyle>
        </s.CropperContainer>
      </Modal>
    </div>
  )
}

CropModal.propTypes = {
  rawImg: PropTypes.string,
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  petFormInfo: PropTypes.object,
  setPetForminfo: PropTypes.func,
  imageEditInfo: PropTypes.object,
}
