import { Grid, Heading, Image, Text } from '@chakra-ui/react'
import EmptyContentImage from '/no_books.svg'
import { motion } from "framer-motion";
interface EmptyContentProps {
  contentType: string
}

export default function EmptyContent({ contentType }: EmptyContentProps) {
  return (
    <Grid as={motion.div} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} placeItems="center" gap="8" py="12">
      <Image width={216} height={159} src={EmptyContentImage} alt={`There are no ${contentType} are available`} />
      <Heading className="">
        No
        <Text mx="4" as="span" className="text-mySecondary-100">
          {contentType}
        </Text>
        found
      </Heading>
    </Grid>
  )
}
