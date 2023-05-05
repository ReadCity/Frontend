import { Image, Link, Text } from "@chakra-ui/react"
import ProstudyLogo from '/prostudy.webp'
export default function Copyright() {
    return (
        <div className="grid text-center justify-center items-center text-[17px] leading-[200%] tracking-[-0.01em] text-[#B4C7E7] md:flex">
            Powered by <Text as="strong" className="font-bold">
                <Link target="blank" href="https://infinity.uz">
                    <Image className="max-h-[40px] mt-2 object-cover" src={ProstudyLogo} width={200} height={30} alt="Infinity Prostudy. For more info, please visit infinity.uz" loading="lazy" title="Powered by infinity.uz" />
                </Link>
            </Text>
        </div>
    )
}
