import useMenuBurgerStyles from './MenuBurger.style'
import {ReactChild, FC, useState, useEffect} from 'react'
import {Box, Button, Divider, Drawer, IconButton, useTheme} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@/components/MenuItem/MenuItem';
import {IMenuItem} from '@/types/types';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../Logo/Logo';

const {log} = console

interface MenuBurgerProps {

    children?: ReactChild,
    menuItems: IMenuItem[],

}

const MenuBurger: FC<MenuBurgerProps> = ({children, menuItems}) => {

    const theme = useTheme() 
 const Styles = useMenuBurgerStyles(theme)


    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleOpen = () => {
        setIsOpen(true)
        log(1)


    }
    useEffect(() => {
        log(isOpen)
    },[isOpen])

    return (<>

        <IconButton onClick={handleOpen}>

            <MenuIcon color='primary'/>

        </IconButton>

        <Drawer
            component={Styles}
            open={isOpen}
            anchor={'right'}
            onClose={() => setIsOpen(false) }


        >

            <Box role="presentation" className='menu-burger__items'>

                {menuItems.map((menuItem, index) => (

                    <MenuItem
                        key={index}
                        href={menuItem.href}
                        onClick={handleClose}
                    >
                        {menuItem.name}
                    </MenuItem>

                ))}

                <Divider/>

            </Box>


            <Logo/>


        </Drawer>

    </>)
}
export default MenuBurger