import {FC, ReactChild} from 'react'
import {Grid, useTheme} from '@mui/material'
import Page from "@/components/Page/Page";
import ScreenshotsSection from "@/layouts/ScreenshotsSection/ScreenshotsSection";


interface ScreenshotsPageProps {

    children?: ReactChild,

}

const ScreenshotsPage: FC<ScreenshotsPageProps> = ({children}) => {
    const theme = useTheme()

    return (
        <Page>
            <Grid item xs={12} mt={2}>
                <ScreenshotsSection/>
            </Grid>
        </Page>
    )
}
export default ScreenshotsPage