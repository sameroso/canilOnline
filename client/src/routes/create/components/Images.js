import React, { useContext } from 'react'

import ImgCard from './ImgCard'
import s from './Images.styled'
import { PetFormContext } from '../../../context/petForm'
import { FormNavigationContext } from '../../../context/formNavigation'

export default function AddImg() {
  const { petFormInfo, setPetFormInfo } = useContext(PetFormContext)
  const { formRoute } = useContext(FormNavigationContext)

  const handleFileInputChange = (e, isEditing, preview) => {
    const file = e.target.files[0]

    previewFile(file, isEditing, preview)
  }

  const previewFile = (file, isEditing, imagePreview) => {
    let isImageNew = true
    const reader = new FileReader()

    if (!file) return

    reader.readAsDataURL(file)

    reader.onloadend = () => {
      petFormInfo.images.forEach(preview => {
        if (preview === reader.result) {
          isImageNew = false
        }
      })

      if (!isImageNew) return
      if (isEditing) return editImage(reader.result, imagePreview)

      setPetFormInfo({
        ...petFormInfo,
        images: [...petFormInfo.images, reader.result],
      })
    }
  }

  function editImage(source, preview) {
    const arr = [...petFormInfo.images]
    const index = petFormInfo.images.indexOf(preview)

    arr[index] = source

    setPetFormInfo({ ...petFormInfo, images: arr })
  }

  function deleteImg(previewSelected) {
    const arr = [...petFormInfo.images]
    const index = petFormInfo.images.indexOf(previewSelected)

    arr.splice(index, 1)
    setPetFormInfo({ ...petFormInfo, images: arr })
  }

  if (formRoute !== 'imagens') {
    return null
  }

  return (
    <>
      <s.SelecFileBtnContainer>
        <s.SelecFileBtn htmlFor="btn">Imagens</s.SelecFileBtn>
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
          petFormInfo.images.map((preview, i) => (
            <ImgCard
              preview={preview}
              key={preview}
              deleteImg={deleteImg}
              handleFileInputChange={handleFileInputChange}
              index={i}
            />
          ))}
      </s.ImgCardContainer>
    </>
  )
}
