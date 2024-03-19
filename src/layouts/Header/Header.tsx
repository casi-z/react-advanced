import React, {FC, ReactChild, useRef, useState} from 'react'
import {AppBar, Button, Divider, Grid, ListItemIcon, ListItemText, Menu, MenuItem, useTheme,} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from "@mui/material/IconButton";
import {DarkMode, EditNote, LightMode} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {toggleThemeModeAction} from "@/store/themeReducer";
import MainMenu from "@/layouts/MainMenu/MainMenu";
import LogoutIcon from '@mui/icons-material/Logout';

interface HeaderProps {

    children?: ReactChild,
    drawerWidth: number

}


const Header: FC<HeaderProps> = ({children, drawerWidth}) => {

    const anchorEl = useRef<HTMLButtonElement | null>(null);

    const [open, setOpen] = useState<boolean>(false);

    // const themeMode = useSelector((state: IState) => state.theme.mode)
    const dispatch = useDispatch()

    const theme = useTheme()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    function handleToggleThemeMode() {
        dispatch(toggleThemeModeAction())

    }


    return (
        <>
            <AppBar
                elevation={0}
                position="fixed"
                sx={{
                    width: {xs: '100%', md: `calc(100% - ${drawerWidth}px)`},
                    ml: {xs: 0, md: `${drawerWidth}px`},
                    background: theme.palette.background.paper,

                }}
            >
                <Grid
                    container
                    justifyContent={'flex-end'}

                >

                    <Button
                        sx={{
                            color: 'text.primary',
                            borderLeft: '1px solid',
                            borderRight: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 0,
                        }}
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
                        <MenuItem onClick={handleClose}>

                            <ListItemIcon>

                                <EditNote/>

                            </ListItemIcon>

                            <ListItemText primary={'Администрирование'}/>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>

                            <ListItemIcon>

                                <LogoutIcon color={"error"}/>

                            </ListItemIcon>

                            <ListItemText
                                sx={{
                                    color: '#000'
                                }}
                                primary={'Выход'}
                            />


                        </MenuItem>

                    </Menu>

                    <IconButton
                        onClick={handleToggleThemeMode}

                    >
                        {theme.palette.mode === 'light' ? <LightMode/> : <DarkMode/>}
                    </IconButton>


                </Grid>
                <Divider/>
            </AppBar>
            <MainMenu width={drawerWidth}/>
        </>
    )
}
export default Header