import React, { useContext, useState, useRef } from 'react'
import { GrFormAdd } from 'react-icons/gr'
import { FaCameraRetro } from 'react-icons/fa'

import ImgCard from './ImgCard'
import s from './Images.styled'
import { PetFormContext } from '../../../../context/petForm'
import { FormNavigationContext } from '../../../../context/formNavigation'
import ArrowsNavigator from '../ArrowsNavigator'
import { handleFileSubmit } from '../../../../helpers/ImageHelpers'
import CropModal from './CropModal'

export default function AddImg() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)
  const { formRoute } = useContext(FormNavigationContext)
  const imageEditInfo = useRef()

  const handleFileInputChange = (e, isEditing, preview) => {
    const file = e.target.files[0]

    if (!file) return

    if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) return
    handleFileSubmit(
      file,
      isEditing,
      preview,
      petFormInfo,
      setPetFormInfo,
      setIsModalOpen,
      imageEditInfo,
    )
  }

  function deleteImg(rawImgSelected) {
    const arr = [...petFormInfo.images]
    const index = petFormInfo.images.findIndex(imageObj => {
      return imageObj.raw === rawImgSelected
    })

    arr.splice(index, 1)
    setPetFormInfo({ ...petFormInfo, images: arr })
  }

  function resizeImage(rawImgSelected) {
    const arr = [...petFormInfo.images]

    const index = petFormInfo.images.findIndex(imageObj => {
      return imageObj.raw === rawImgSelected
    })

    imageEditInfo.current = {
      index,
      userImagesArr: arr,
      previous: arr[index],
    }
    setIsModalOpen(true)
  }

  if (formRoute !== 'images') {
    return null
  }

  return (
    <>
      <CropModal
        imageEditInfo={imageEditInfo}
        rawImg={
          imageEditInfo.current?.userImagesArr[imageEditInfo.current?.index]
            ?.raw || petFormInfo.images[petFormInfo.images.length - 1]?.raw
        }
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        petFormInfo={petFormInfo}
        setPetForminfo={setPetFormInfo}
      />
      <ArrowsNavigator fowardArrowRoute="personality" />
      <s.SelecFileBtnContainer>
        <s.SelecFileBtn htmlFor="btn">
          <GrFormAdd color="white!important" />
          <FaCameraRetro color="#ea4c89" />
        </s.SelecFileBtn>
      </s.SelecFileBtnContainer>
      <form>
        <input
          type="file"
          onChange={handleFileInputChange}
          accept="image/*"
          value=""
          id="btn"
          style={{ display: 'none' }}
        />
      </form>
      <s.ImgCardContainer>
        {petFormInfo.images.length > 0 &&
          petFormInfo.images.map((preview, i) => {
            return (
              preview.cropped && (
                <ImgCard
                  key={preview.cropped}
                  preview={preview.cropped}
                  rawImg={preview.raw}
                  deleteImg={deleteImg}
                  resizeImage={resizeImage}
                  handleFileInputChange={handleFileInputChange}
                  index={i}
                />
              )
            )
          })}
      </s.ImgCardContainer>
    </>
  )
}
