import {FC, ReactChild} from 'react'
import {Box} from '@mui/material'
import Page from "@/components/Page/Page";


interface CalendarPageProps {

    children?: ReactChild,

}

const CalendarPage: FC<CalendarPageProps> = ({children}) => {


    return (
        <Box className="CalendarPage">
            <Page>

            </Page>
        </Box>
    )
}
export default CalendarPage