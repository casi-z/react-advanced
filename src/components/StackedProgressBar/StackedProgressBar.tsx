import useStackedProgressBarStyles from './StackedProgressBar.style'
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
    const theme = useTheme()
    const Styles = useStackedProgressBarStyles(theme)

    return (
        <Box component={Styles} className="StackedProgressBar">
            {data.map((item, index) =>
                <Box
                    sx={{
                        background: item.color,
                        width: `${item.progress}%`,
                        borderRadius: index === data.length - 1 ? 10 : 0
                    }}
                    className={'StackedProgressBar__body'}
                >

                </Box>
            )}

        </Box>
    )
}
export default StackedProgressBar