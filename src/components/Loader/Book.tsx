import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider,  Grid,  Image, Stack, Text } from '@chakra-ui/react'
import { StyledContainer } from '@src/styles/globals'
import { motion } from "framer-motion";
export function BookLoader() {
  const itemArray = Array(20).fill('')
  return (
    <StyledContainer>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} layout>
        <Grid my="12" templateColumns="repeat(auto-fit,min(300px,90%))" rowGap="4" columnGap="4" justifyContent="center">
          {itemArray.map(() => (
            <Card rounded="lg" overflow="hidden" key={crypto.randomUUID()}>
              <Image className="skeleton-book-img" />
              <CardBody>
                <Stack>
                  <Text width="full" className="skeleton skeleton-text" />
                  <Text width="full" className="skeleton skeleton-text" />
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button size="md"
                    className="skeleton"
                    variant="solid"
                    color="transparent"
                  >
                    Read more
                  </Button>
                  <Button size="md"
                    className="skeleton"
                    variant="solid"
                  >
                  </Button>

                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </motion.div>
    </StyledContainer>

  )
}
