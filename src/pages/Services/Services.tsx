import ReusableHero from '@src/components/ReusableHero'
import { Helmet } from 'react-helmet'

export default function Services () {
  return (
        <>
            <Helmet>
                <title>Services</title>
                <meta name="description" content="There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form." />
            </Helmet>
            <ReusableHero title="Services" description="There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form." />
        </>
  )
}
