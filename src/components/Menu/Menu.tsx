import useMenuStyles from './Menu.style'
import { ReactChild, FC, useState } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import MenuItem from '@/components/MenuItem/MenuItem'
import MenuBurger from '@/components/MenuBurger/MenuBurger';
const { log } = console

interface MenuProps {

    children?: ReactChild,

}
const menuItems = [
    {
        name: 'Наша команда',

        href: '/'
    },
    {
        name: 'Статьи',
        href: '/'
    },
    {
        name: 'Видео',
        href: '/'
    },
    {
        name: 'Ногинский колледж',
        href: 'https://nogkolledzh.ru/'
    },

]
const Menu: FC<MenuProps> = ({ children }) => {

    const theme = useTheme()
    const Styles = useMenuStyles(theme)

    const mobileVersion = useMediaQuery((theme: any) => theme.breakpoints.up('sm'))



    return (
        <>
            <Box component={Styles} className="Menu">

                {mobileVersion
                    ?
                    <>

                        {menuItems.map((menuItem, index) =>

                            <MenuItem key={index} href={menuItem.href} >
                                {menuItem.name}
                            </MenuItem>
                        )}
                    </>

                    : <MenuBurger menuItems={menuItems} />

                }

            </Box>

        </>
    )
}
export default Menu