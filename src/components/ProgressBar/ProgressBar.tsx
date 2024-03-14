import {FC} from 'react'
import {Box} from '@mui/material'


interface ProgressBarProps {

    progress: number,
    color: string

}

const ProgressBar: FC<ProgressBarProps> = ({progress, color}) => {

    return (
        <Box
            className="ProgressBar"
            sx={{
                width: '100%',
                minWidth: 200,
                height: 10,
                display: 'flex',
                borderRadius: 10,
                overflow: 'hidden',
                background: '#ebeff2'
            }}
        >
            <Box
                sx={{
                    background: color,
                    width: `${progress}%`,
                    height: '100%',
                    borderRadius: 20
                }}/>
        </Box>
    )
}
export default ProgressBar