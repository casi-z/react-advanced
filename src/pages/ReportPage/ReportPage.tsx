import { ReactChild, FC } from 'react'
import { Box, useTheme } from '@mui/material'
import Page from "@/components/Page/Page";
const { log } = console

interface ReportPageProps {
   
   children?: ReactChild,
   
}

const ReportPage: FC<ReportPageProps> = ({ children }) => {


    return(
      <Box className="ReportPage">
          <Page>

          </Page>
      </Box>
    )
}
export default ReportPage