import {FC, ReactChild} from 'react'
import {Box} from '@mui/material'
import Page from "@/components/Page/Page";


interface GeolocationPageProps {

    children?: ReactChild,

}

const GeolocationPage: FC<GeolocationPageProps> = ({children}) => {


    return (
        <Box className="GeolocationPage">
            <Page>

            </Page>
        </Box>
    )
}
export default GeolocationPage