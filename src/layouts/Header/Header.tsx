import React, {ReactChild, FC, useState, MouseEventHandler, useContext, useEffect, useRef} from 'react'
import {Avatar, Box, Button, Container, Grid, Menu, MenuItem, Paper, useTheme,} from '@mui/material';
import useHeaderStyles from './Header.style'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const {log} = console

interface HeaderProps {

    children?: ReactChild,

}


const Header: FC<HeaderProps> = ({children}) => {

    const theme = useTheme()
    const Styles = useHeaderStyles(theme)
    const anchorEl = useRef<HTMLButtonElement | null>(null);

    const [open, setOpen] = useState<boolean>(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Paper elevation={0}>
            <Grid
                container
                className='Header'
                component={Styles}
                justifyContent={'flex-end'}

            >

                <Button
                    className={'Header__account-button'}
                    endIcon={<KeyboardArrowDownIcon/>}
                    size={'large'}
                    ref={anchorEl}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    variant={'text'}
                >
                    Демо Администратор
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl.current}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Администрирование</MenuItem>
                    <MenuItem onClick={handleClose}>Выход</MenuItem>
                </Menu>

            </Grid>
        </Paper>
    )
}
export default Header