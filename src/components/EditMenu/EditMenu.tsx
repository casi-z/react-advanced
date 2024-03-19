import * as React from 'react'
import {FC} from 'react'
import {ListItemIcon, ListItemText, Menu, MenuItem} from '@mui/material'
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EditIcon from "@mui/icons-material/Edit";


interface EditMenuProps {

    onClose: () => void,
    anchorEl: Element | (() => Element) | null | undefined,
    onMenuClick: (name: string) => void,

}

const EditMenu: FC<EditMenuProps> = ({onClose, anchorEl, onMenuClick}) => {

    const open = Boolean(anchorEl);

    const menuItems = [
        {name: 'Открыть', icon: <OpenInNewIcon/>},
        {name: 'Редактировать', icon: <EditIcon/>}

    ]


    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            PaperProps={{
                sx: {width: 320, maxWidth: '100%'}
            }}
        >
            {menuItems.map((item, index) => (

                <MenuItem onClick={() => onMenuClick(item.name)}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>

                </MenuItem>

            ))}


        </Menu>
    )
}
export default EditMenu