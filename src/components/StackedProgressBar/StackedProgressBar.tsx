import {ReactChild, FC} from 'react'
import {Box, useTheme} from '@mui/material'

const {log} = console

interface IStackedProgressBarData {

    progress: number,
    color: string

}

interface StackedProgressBarProps {

    data: IStackedProgressBarData[]

}

const StackedProgressBar: FC<StackedProgressBarProps> = ({data}) => {



    return (
        <Box
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
            {data.map((item, index) =>
                <Box
                    sx={{
                        background: item.color,
                        width: `${item.progress}%`,
                        borderTopRightRadius: index === data.length - 1 ? 10 : 0,
                        borderBottomRightRadius: index === data.length - 1 ? 10 : 0,
                        height: '100%',
                    }}

                >

                </Box>
            )}

        </Box>
    )
}
export default StackedProgressBar