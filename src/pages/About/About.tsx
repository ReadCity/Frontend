import ReusableHero from "@src/components/ReusableHero";
import { Helmet } from "react-helmet";

export default function About() {
    return (
        <>
            <Helmet>
                <title>About</title>
                <meta name="description" content="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form." />
            </Helmet>
            <ReusableHero title="About" description="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form." />
        </>
    )
}
