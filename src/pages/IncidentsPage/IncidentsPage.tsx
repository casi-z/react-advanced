import useIncidentsPageStyles from './IncidentsPage.style'
import { ReactChild, FC } from 'react'
import { Box, useTheme } from '@mui/material'
import Page from "@/components/Page/Page";

const { log } = console

interface IncidentsPageProps {
   
   children?: ReactChild,
   
}

const IncidentsPage: FC<IncidentsPageProps> = ({ children }) => {
const theme = useTheme()
const Styles = useIncidentsPageStyles(theme)

    return(
      <Box component={Styles} className="IncidentsPage">
          <Page>

          </Page>
      </Box>
    )
}
export default IncidentsPage