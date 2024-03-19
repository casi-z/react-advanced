import {FC, ReactChild} from 'react'
import {Paper, styled, useTheme} from '@mui/material'
import Tooltip from "@mui/material/Tooltip";
import {green, grey, red} from '@mui/material/colors';

const {log} = console

interface DayProps {

    children?: ReactChild,
    color?: 'danger' | 'warning' | 'disable' | 'success',
    toolTip?: string,
}

const Day: FC<DayProps> = ({children, color, toolTip}) => {

    const theme = useTheme()

    const colors = {

        'danger': {
            background: theme.palette.mode === "light" ? '#fc7d7d' : red[400],
            color: '#fff',
        },

        'warning': {
            background: theme.palette.mode === "light" ? '#ffecec' : red[200],
            color: theme.palette.mode === "light" ? '#fc7d7d' : '#000',
        },

        'disable': {
            background: theme.palette.mode === "light" ? '#f5f6f8' : grey[800],
            color: theme.palette.mode === "light" ? '#727982' : '#fff',
        },

        'success': {
            background: theme.palette.mode === "light" ? '#dbf6ef' : green[400],
            color: '#000',
        },

    }

    const DayStyles = styled(Paper)({
        margin: 0,
        padding: '1.7rem 1.5rem',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        color: color && colors[color].color,
        background: color && colors[color].background,


    })


    return (
        <Tooltip title={toolTip}>
            <DayStyles elevation={0} square>
                {children}
            </DayStyles>
        </Tooltip>

    )
}
export default Day