export default function objectToFormData (object: object) {
  const newFormData = new FormData()
  Object.entries(object).forEach((entry) => {
    if (entry[0] === 'file') {
      newFormData.append('file', entry[1][0])
      return
    }
    newFormData.append(entry[0], entry[1])
  })
  return newFormData
}
