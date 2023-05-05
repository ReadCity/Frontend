import { Box } from "@chakra-ui/react"
import { PuffLoader } from 'react-spinners'

export default function Loader () {
  return (
        <Box className="h-[100dvh] flex items-center justify-center">
            <PuffLoader size={140} color="#FFCA42" />
        </Box>
  )
}
