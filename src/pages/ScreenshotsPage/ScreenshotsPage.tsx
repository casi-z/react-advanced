import {FC, ReactChild} from 'react'
import {useTheme} from '@mui/material'
import Page from "@/components/Page/Page";
import ScreenshotsSection from "@/layouts/ScreenshotsSection/ScreenshotsSection";


interface ScreenshotsPageProps {

    children?: ReactChild,

}

const ScreenshotsPage: FC<ScreenshotsPageProps> = ({children}) => {
    const theme = useTheme()

    return (
        <Page>
            <ScreenshotsSection/>
        </Page>
    )
}
export default ScreenshotsPage