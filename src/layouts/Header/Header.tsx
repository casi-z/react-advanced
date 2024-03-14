import React, {FC, ReactChild, useRef, useState} from 'react'
import {Button, Grid, Menu, MenuItem, Paper, useTheme,} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from "@mui/material/IconButton";
import {DarkMode, LightMode} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {toggleThemeModeAction} from "@/store/themeReducer";


interface HeaderProps {

    children?: ReactChild,

}


const Header: FC<HeaderProps> = ({children}) => {

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
        // if(themeMode === 'dark'){
        //     dispatch(setThemeModeAction('light'))
        // } else {
        //     dispatch(setThemeModeAction('dark'))
        // }
    }

    return (
        <Paper elevation={0}>
            <Grid
                container
                justifyContent={'flex-end'}

            >

                <Button
                    sx={{
                        color: 'text.primary',
                        borderLeft: '1px solid #eaeaea',
                        borderRight: '1px solid #eaeaea',
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
                    <MenuItem onClick={handleClose}>Администрирование</MenuItem>
                    <MenuItem onClick={handleClose}>Выход</MenuItem>
                </Menu>

                <IconButton
                    onClick={handleToggleThemeMode}

                >
                    {theme.palette.mode === 'light' ? <LightMode/> : <DarkMode/>}
                </IconButton>


            </Grid>
        </Paper>
    )
}
export default Header