
import { ReactChild, FC } from 'react'
import { Button, useTheme } from "@mui/material";
import styled from "styled-components";

const { log } = console

interface MenuItemProps {

    children: String,
    startIcon?: ReactChild,
    href?: string,
    sx?: {},
    onClick?: () => void,
    onKeyDown?: () => void,
    key?: number,
    className?: string

}

const MenuItem: FC<MenuItemProps> = ({ children, startIcon, sx, href, className }) => {

   

    const theme = useTheme() 
 const Styles = styled.a`
      
        text-transform: none;
        border-radius: 0;
        white-space: nowrap;
        color: ${theme.palette.text.disabled};
      
        text-align: center;
        font-family: 'Montserrat';
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 173.333% */
      
      &.SignInButton{
        padding: 2% 0%;
        
      }
    `

    return (
        <Button
            component={Styles}
            startIcon={startIcon}
            sx={sx}
            href={href}
            variant='text'
            className={`MenuItem ${className}`}
        >
            {children}
        </Button>
    )
}
export default MenuItem