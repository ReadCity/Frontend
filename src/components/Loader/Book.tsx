import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, Image, Stack, Text } from '@chakra-ui/react'
import { StyledContainer } from '@src/styles/globals'
import { motion } from "framer-motion";
export function BookLoader({ count = 20, layout = "grid" }: { count?: number, layout?: "flex" | "grid" }) {
  const itemArray = Array(count).fill('')
  return (
    <StyledContainer>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} layout>
        <Grid my="12" templateColumns={["repeat(auto-fit,min(100px,100%))", "repeat(auto-fit,min(150px,100%))", "repeat(auto-fit,min(200px,100%))", "repeat(auto-fit,min(250px,90%))"]} rowGap="4" columnGap="4" justifyContent="center">
          {itemArray.map(() => (
            <Card rounded="lg" overflow="hidden" key={crypto.randomUUID()}>
              <Image p="2" rounded="lg" mt="4" transform={["none", "none", "scale(1.02)"]} cursor="zoom-in" transition="all 500ms ease-in-out" _hover={{
                transform: 'scale(1.05)'
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              }} height={[100, 100, 200]} width={200} className="skeleton-book-img" />
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
