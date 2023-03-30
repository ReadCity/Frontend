import { lazy } from "react";
import { Helmet } from "react-helmet";
const Hero = lazy(() => import("@components/Hero"));
export default function Home() {
    return (
        <>
            <Helmet>
                <title>readcity.uz</title>
                <meta name="description" content="There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form." />
            </Helmet>
            <Hero />
        </>
    )
}
