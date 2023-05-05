import { div, StyledSection } from '@src/styles/globals'
import { Helmet } from 'react-helmet'
import NotFoundImg from '/not-found/404.svg'
export default function NotFound() {
    return (
        <StyledSection>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <div className="flex items-center justify-center">
                <img className="w-1/2 h-full" width={300} height={500} src={NotFoundImg} alt="The page you're looking for is not found..." />
            </div>
        </StyledSection>
    )
}
