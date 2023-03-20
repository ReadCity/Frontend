import { lazy } from "react";

const ReusableHero = lazy(() => import("@components/ReusableHero"));

export default function Services() {
    return (
        <ReusableHero title="Services" description="There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form." />
    )
}
