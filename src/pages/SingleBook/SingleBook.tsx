/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Loader from "@src/components/Loader";
import BookOrder from "../Order";
import useOrderDialogStore from "@src/features/order-dialog";
import { useParams } from "react-router-dom";
import { StyledContainer, StyledTextContainer } from "@styles/globals";
import { StyledTwoCols } from "@src/styles/components";
import { Helmet } from "react-helmet";
import { axiosClient, BASE_URL } from "@src/main";
import { useQuery } from "@tanstack/react-query";
import { type BookModel } from "@src/models/book";
import { Box, Button, ButtonGroup, Grid, Heading, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { CategoryBooks } from "@src/components/CategoryBooks";
import { BreadCrumb } from "@components/BreadCrumb";
import pathGenerator from "@src/utils/path-generator";
export default function SingleBook() {
    const { colorMode } = useColorMode();
    const { id } = useParams();
    const { data: book, isLoading } = useQuery({
        queryKey: ["books", id],
        queryFn: async (): Promise<BookModel> => {
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            return await (await axiosClient.get("/book/" + id)).data.data;
        }
    });
    const { toggle } = useOrderDialogStore();
    if (isLoading || !book) return <Loader />
    const paths = pathGenerator([["Home", "/"], [book.title, `/books/${id as string}`]])
    return (
        <>
            <Box as="section" py="24">
                <Helmet>
                    <title>{book.title}</title>
                    <meta name="description" content={book.desc} />
                </Helmet>
                <StyledContainer>
                    <BreadCrumb paths={paths} />
                    <StyledTwoCols gap="2rem">
                        <StyledTextContainer className="grid items-center justify-center place-content-center" margin="0" maxWidth="520px">
                            <Stack spacing="1rem" mb="8">
                                <Heading color={"teal"}>
                                    {book?.title}
                                </Heading>
                                <Text sx={{
                                    wordSpacing: ".2rem"
                                }} fontFamily="Poppins" fontWeight="light"
                                    color={colorMode === "light" ? "blackAlpha.900" : "gray.100"}
                                >
                                    {book?.desc}
                                </Text>
                            </Stack>

                            <Box className="grid gap-3 sm:flex md:gap-4 lg:gap-8 items-center  mb-10">
                                <Grid pos="relative" pl="1.5rem" gap="2" _before={{
                                    content: "''",
                                    pos: "absolute",
                                    top: "5px",
                                    left: 0,
                                    w: "16px",
                                    h: "16px",
                                    rounded: "full",
                                    background: "teal"
                                }} >
                                    <Heading fontSize={["sm", "md", "lg", "xl", "2xl"]} as="h3" color={"teal"}>
                                        Pages
                                    </Heading>
                                    <Text color={colorMode === "light" ? "blackAlpha.900" : "gray.100"}>
                                        {book?.pages}
                                    </Text>
                                </Grid>
                                <Grid pos="relative" pl="1.5rem" gap="2" _before={{
                                    content: "''",
                                    pos: "absolute",
                                    top: "5px",
                                    left: 0,
                                    w: "16px",
                                    h: "16px",
                                    rounded: "full",
                                    background: "teal"
                                }}>
                                    <Heading fontSize={["sm", "md", "lg", "xl", "2xl"]} as="h3" color={"teal"}>
                                        Rating
                                    </Heading>
                                    <Text>
                                        {Array(book?.rating).fill("").map(() => (
                                            <StarIcon key={crypto.randomUUID()} color={colorMode === "light" ? "blackAlpha.800" : "gray.100"} />
                                        ))}
                                    </Text>
                                </Grid>
                                <Grid pos="relative" pl="1.5rem" gap="2" _before={{
                                    content: "''",
                                    pos: "absolute",
                                    top: "5px",
                                    left: 0,
                                    w: "16px",
                                    h: "16px",
                                    rounded: "full",
                                    background: "teal"
                                }}>
                                    <Heading fontSize={["sm", "md", "lg", "xl", "2xl"]} as="h3" color={"teal"}>
                                        Price
                                    </Heading>
                                    <Text fontFamily="Poppins" fontWeight="light" color={colorMode === "light" ? "blackAlpha.900" : "gray.100"}>
                                        {book.price} UZS
                                    </Text>
                                </Grid>
                            </Box>
                            <ButtonGroup>
                                <Button onClick={() => { toggle(); }} bg={"teal"} colorScheme="red" color={colorMode === "light" ? "white" : "gray.100"}>
                                    Order now
                                </Button>
                            </ButtonGroup>
                        </StyledTextContainer>
                        <Image maxW="full" className="skeleton" src={`${BASE_URL as string}/${book?.image.img}`} rounded="lg" width={400} height={500} loading="lazy" alt={book?.desc} />
                    </StyledTwoCols>
                    <BookOrder bookId={String(id)} />
                </StyledContainer>
            </Box>
            {/* @ts-ignore */}
            <CategoryBooks title="You might also like" categoryId={Number(book.category.id)} />
        </>
    )
}
