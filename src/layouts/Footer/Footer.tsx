import useFooterStyles from './Footer.style'
import {ReactChild, FC} from 'react'

import {Box, Button, Divider, IconButton, Input, Link, useTheme} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

const {log} = console

interface FooterProps {

    children?: ReactChild,
    className?: string,

}

const Footer: FC<FooterProps> = ({children, className}) => {

    const theme = useTheme()
    const Styles = useFooterStyles(theme)


    return (

        <Box className='Footer footer'>


        </Box>
    )
}
export default Footer