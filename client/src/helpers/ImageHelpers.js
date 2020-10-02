export function handleFileSubmit(
  file,
  isEditing,
  rawImagePreview,
  petFormInfo,
  setPetFormInfo,
  setOpen,
  imageEditInfo,
) {
  const reader = new FileReader()

  reader.readAsDataURL(file)

  reader.onloadend = () => {
    const isImageNew = compareIfImageAlreadyExists(petFormInfo, reader)

    if (!isImageNew) return
    if (isEditing)
      return editImage(
        reader.result,
        rawImagePreview,
        petFormInfo,
        setPetFormInfo,
        setOpen,
        imageEditInfo,
      )

    addImg(reader.result, petFormInfo, setPetFormInfo, setOpen, imageEditInfo)
  }
}

function compareIfImageAlreadyExists(petFormInfo, reader) {
  let imageIsNew = true

  petFormInfo.images.forEach(obj => {
    if (obj.raw === reader.result) {
      imageIsNew = false
    }
  })

  return imageIsNew
}

function addImg(result, petFormInfo, setPetFormInfo, setOpen, imageEditInfo) {
  imageEditInfo.current = undefined

  const obj = { raw: result }
  const arr = [...petFormInfo.images, obj]

  setPetFormInfo({
    ...petFormInfo,
    images: arr,
  })
  setOpen(true)
}

function editImage(
  result,
  rawImagePreview,
  petFormInfo,
  setPetFormInfo,
  setOpen,
  imageEditInfo,
) {
  const obj = { raw: result }
  const userImagesArr = [...petFormInfo.images]
  const index = petFormInfo.images.findIndex(imageData => {
    return imageData.raw === rawImagePreview
  })

  const prev = userImagesArr[index]

  userImagesArr[index] = obj
  imageEditInfo.current = {
    index,
    userImagesArr,
    previous: prev,
  }
  setPetFormInfo({ ...petFormInfo, images: userImagesArr })
  setOpen(true)
}

function getCroppedImg(image, crop) {
  const canvas = document.createElement('canvas')
  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height

  canvas.width = crop.width
  canvas.height = crop.height

  const ctx = canvas.getContext('2d')

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height,
  )

  return canvas.toDataURL('image/jpeg')
}

export async function cropImg(image, crop, fileName, setCropImg) {
  const croppedImg = await getCroppedImg(image, crop, fileName)

  setCropImg(croppedImg)
}

// A few JavaScript Functions for Images and Files
// Author: Justin Mitchel
// Source: https://kirr.co/ndywes

// Convert a Base64-encoded string to a File object
/* export function base64StringtoFile(base64String, filename) {
  var arr = base64String.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}

// Download a Base64-encoded file

export function downloadBase64File(base64Data, filename) {
  var element = document.createElement('a')

  element.setAttribute('href', base64Data)
  element.setAttribute('download', filename)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

// Extract an Base64 Image's File Extension
export function extractImageFileExtensionFromBase64(base64Data) {
  return base64Data.substring(
    'data:image/'.length,
    base64Data.indexOf(';base64'),
  )
}

// Base64 Image to Canvas with a Crop
export function image64toCanvasRef(canvasRef, image64, pixelCrop) {
  const canvas = canvasRef // document.createElement('canvas');

  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  const ctx = canvas.getContext('2d')
  const image = new Image()

  image.src = image64

  image.onload = function () {
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    )
  }
} */
