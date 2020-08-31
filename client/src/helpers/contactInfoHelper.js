export const formatFacebookString = faceBookString => {
  const formattedString = faceBookString.split('/')

  return formattedString[3]
}

export const formatWhatsApp = whatsApp => {
  const ddd = whatsApp.slice(2, 4)
  const defaultDigit = whatsApp.slice(4, 5)
  const firstNumbers = whatsApp.slice(5, 9)
  const lastNumbers = whatsApp.slice(9, whatsApp.length)

  return `(${ddd}) ${defaultDigit} ${firstNumbers}-${lastNumbers}`
}

export const formatPhone = phone => {
  const ddd = phone.slice(0, 2)
  const defaultDigit = phone.slice(2, 3)
  const firstNumbers = phone.slice(3, 7)
  const lastNumbers = phone.slice(7, phone.length)

  return `(${ddd}) ${defaultDigit} ${firstNumbers}-${lastNumbers}`
}
