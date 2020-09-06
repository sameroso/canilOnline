import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

import s from './AddImg.styled'

export default function AddImg() {
  const [previewSource, setPreviewSource] = useState([])

  const hanfleFileInputChange = e => {
    const file = e.target.files[0]

    previewFile(file)
  }

  const previewFile = file => {
    const reader = new FileReader()

    if (!file) return

    reader.readAsDataURL(file)

    reader.onloadend = () => {
      setPreviewSource([...previewSource, reader.result])
    }
  }

  return (
    <>
      <form>
        <input type="file" onChange={hanfleFileInputChange} accept="image/*" />
      </form>
      {previewSource &&
        previewSource.map(preview => (
          <img
            src={preview}
            alt="chosen"
            key={preview}
            height="50px"
            width="50px"
          />
        ))}
      <s.Container>
        <Carousel
          dynamicHeight={true}
          width={'100%'}
          useKeyboardArrows={true}
          axis="horizontal"
        >
          {previewSource &&
            previewSource.map(preview => (
              <img src={preview} alt="chosen" key={preview} />
            ))}
        </Carousel>
      </s.Container>
    </>
  )
}
