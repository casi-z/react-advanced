
import { ReactChild, FC } from 'react'
import { Box, useTheme } from '@mui/material'
import Page from "@/components/Page/Page";

const { log } = console

interface CalendarPageProps {
   
   children?: ReactChild,
   
}

const CalendarPage: FC<CalendarPageProps> = ({ children }) => {


    return(
      <Box className="CalendarPage">
         <Page>

         </Page>
      </Box>
    )
}
export default CalendarPage