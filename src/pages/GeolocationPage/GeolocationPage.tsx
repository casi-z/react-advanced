import useGeolocationPageStyles from './GeolocationPage.style'
import { ReactChild, FC } from 'react'
import { Box, useTheme } from '@mui/material'
import Page from "@/components/Page/Page";

const { log } = console

interface GeolocationPageProps {
   
   children?: ReactChild,
   
}

const GeolocationPage: FC<GeolocationPageProps> = ({ children }) => {
const theme = useTheme()
const Styles = useGeolocationPageStyles(theme)

    return(
      <Box component={Styles} className="GeolocationPage">
          <Page>

          </Page>
      </Box>
    )
}
export default GeolocationPage