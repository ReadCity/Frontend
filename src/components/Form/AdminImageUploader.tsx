import { useEffect, useState } from 'react'
import { StyledImageUploader, StyledImageUploaderLabel, StyledPlusIcon, StyledUploadedImage } from './Form.styles'
import PlusIcon from '/plus.svg'

export default function AdminImageUploader ({ formId, inputId, Image, setAuthorImage }: { formId: string, inputId: string, Image?: any, setAuthorImage: any }) {
  const [preview, setPreview] = useState<string | undefined>()
  function handleOnDrop (files: FileList) {
    setAuthorImage(files[0])
  }
  useEffect(() => {
    if (!Image) {
      setPreview(undefined)
      return
    }

    const imageUrl = URL.createObjectURL(Image)
    setPreview(imageUrl)

    return () => { URL.revokeObjectURL(imageUrl) }
  }, [Image])

  return (
        <StyledImageUploader>
            {/* <form action="#"> */}
            <StyledImageUploaderLabel draggable={true}

                onDragStart={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
                onDragLeave={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
                onDragOver={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
                onDrop={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  handleOnDrop(e.dataTransfer.files)
                }}

                form={formId} htmlFor={inputId}>
                <StyledPlusIcon src={PlusIcon} alt="" />
                Image
            </StyledImageUploaderLabel>
            {/* <StyledFormInput id="authorImage" type="number" placeholder="First name" /> */}
            {Image ? <StyledUploadedImage src={preview} width={315} height={315} alt="Author" /> : null}
            {/* </form> */}
        </StyledImageUploader>
  )
}
