import {FC, ReactChild} from 'react'

import {Box} from '@mui/material';


interface FooterProps {

    children?: ReactChild,
    className?: string,

}

const Footer: FC<FooterProps> = ({children, className}) => {


    return (

        <Box className='Footer footer'>


        </Box>
    )
}
export default Footer