import { ReactChild, FC } from 'react'
import { Box, useTheme } from '@mui/material'
import Page from "@/components/Page/Page";

const { log } = console

interface ScreenshotsPageProps {
   
   children?: ReactChild,
   
}

const ScreenshotsPage: FC<ScreenshotsPageProps> = ({ children }) => {
const theme = useTheme()

    return(
      <Box className="ScreenshotsPage">
          <Page>

          </Page>
      </Box>
    )
}
export default ScreenshotsPage