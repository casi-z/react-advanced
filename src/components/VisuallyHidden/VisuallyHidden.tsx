import {FC} from 'react'
import {Box, useTheme} from '@mui/material'


interface VisuallyHiddenProps {

    children: String,

}


const VisuallyHidden: FC<VisuallyHiddenProps> = ({children}) => {

    const theme = useTheme()


    return (

        <Box
            component={'span'}
            sx={{
                visibility: 'hidden',
                opacity: 0
            }}
        >
            {children}
        </Box>
    )
}
export default VisuallyHidden