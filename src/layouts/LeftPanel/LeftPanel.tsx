import useLeftPanelStyles from './LeftPanel.style'
import {ReactChild, FC, useEffect} from 'react'
import {
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, ListSubheader, Paper,
    useTheme
} from '@mui/material'
import URLUtil from "@/utils/URLutil";
import leftPanelItems from "@/data/LeftPanelItems";
import {ILeftPanelItem} from "@/types/types";

const {log} = console

interface LeftPanelProps {

    children?: ReactChild,

}

const LeftPanel: FC<LeftPanelProps> = ({children}) => {
    const theme = useTheme()
    const Styles = useLeftPanelStyles(theme)




    return (
        <Grid
            className={'LeftPanel'}
            item
            xs={2}
            component={Styles}
        >
            <Paper className={'LeftPanel__body'} elevation={2}>

                <List
                    className={'list'}
                    subheader={
                        <ListSubheader component="div">
                            Статистика
                        </ListSubheader>
                    }

                >
                    {leftPanelItems.statistic.map((item, index) => (

                        <ListItem className={`list-item current-${URLUtil.path(1) === item.href}`} key={index} disablePadding>

                            <ListItemButton href={`/statistic/${item.href}`}>

                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>

                                <ListItemText className={'list-item__text'} primary={item.text}/>

                            </ListItemButton>

                        </ListItem>
                    ))}

                <Divider/>

                <ListSubheader component="div">
                    Настройка
                </ListSubheader>

                    {/*{leftPanelItems.settings.map((item: ILeftPanelItem) => (*/}

                    {/*    <ListItem className={'list-item'} disablePadding>*/}

                    {/*        <ListItemButton href={`statistic/${item.href}`}>*/}

                    {/*            <ListItemIcon>*/}
                    {/*                {item.icon}*/}
                    {/*            </ListItemIcon>*/}

                    {/*            <ListItemText className={'list-item__text'} primary={item.text}/>*/}

                    {/*        </ListItemButton>*/}

                    {/*    </ListItem>*/}
                    {/*))}*/}
                </List>
            </Paper>
        </Grid>
    )
}
export default LeftPanel