import useCalendarPageStyles from './CalendarPage.style'
import { ReactChild, FC } from 'react'
import { Box, useTheme } from '@mui/material'
import Page from "@/components/Page/Page";

const { log } = console

interface CalendarPageProps {
   
   children?: ReactChild,
   
}

const CalendarPage: FC<CalendarPageProps> = ({ children }) => {
const theme = useTheme()
const Styles = useCalendarPageStyles(theme)

    return(
      <Box component={Styles} className="CalendarPage">
         <Page>

         </Page>
      </Box>
    )
}
export default CalendarPage