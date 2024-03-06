
import { ReactChild, FC } from 'react'
import { Box, useTheme } from '@mui/material'
import Page from "@/components/Page/Page";

const { log } = console

interface GeolocationPageProps {
   
   children?: ReactChild,
   
}

const GeolocationPage: FC<GeolocationPageProps> = ({ children }) => {



    return(
      <Box className="GeolocationPage">
          <Page>

          </Page>
      </Box>
    )
}
export default GeolocationPage