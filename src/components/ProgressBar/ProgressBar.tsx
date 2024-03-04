import useProgressBarStyles from './ProgressBar.style'
import {ReactChild, FC} from 'react'
import {Box, useTheme} from '@mui/material'

const {log} = console

interface ProgressBarProps {

    progress: number,
    color: string

}

const ProgressBar: FC<ProgressBarProps> = ({progress, color}) => {
    const theme = useTheme()
    const Styles = useProgressBarStyles(theme)

    return (
        <Box component={Styles} className="ProgressBar">
            <Box sx={{background: color, width: `${progress}%`}} className={'ProgressBar__body'}></Box>
        </Box>
    )
}
export default ProgressBar