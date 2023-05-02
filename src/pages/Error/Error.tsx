import { Box, Button, Grid, Heading, Text } from '@chakra-ui/react'
import { StyledContainer } from '@src/styles/globals'
import { useErrorBoundary } from 'react-error-boundary'

interface ErrorProps {
  error: {
    message: string
  }
  resetErrorBoundary: Function
}

export default function Error ({ error, resetErrorBoundary }: ErrorProps) {
  const { resetBoundary } = useErrorBoundary()
  return (
    <Box as="section" height="90dvh" display="flex" alignItems="center" justifyContent="center">
      <StyledContainer>
        <Grid gap="4" placeItems="center">
          <Heading textAlign="center">
            Oops, there was something wrong, please refresh
          </Heading>
          <Text colorScheme="messenger">
            {error.message}
          </Text>
          <Button onClick={() => { resetBoundary() }} colorScheme="linkedin">
            Refresh
          </Button>
        </Grid>
      </StyledContainer>
    </Box>
  )
}
