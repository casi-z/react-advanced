import {ReactChild, FC, useEffect, useState} from 'react'
import {
    CssBaseline,
    Divider, Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, ListSubheader, Paper, styled, SwipeableDrawer, Typography, useMediaQuery,
    useTheme
} from '@mui/material'
import URLUtil from "@/utils/URLutil";
import leftPanelItems from "@/data/LeftPanelItems";
import {ILeftPanelItem} from "@/types/types";
import {grey} from "@mui/material/colors";
import Global from "@mui/styled-engine-sc/GlobalStyles";

const {log} = console

interface LeftPanelProps {

    children?: ReactChild,

}

const LeftPanel: FC<LeftPanelProps> = ({children}) => {
    const theme = useTheme()

    const [open, setOpen] = useState<boolean>(false);

    const StyledBox = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],

    }));

    const Root = styled('div')(({theme}) => ({
        height: '100%',
        backgroundColor:
            theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
    }));

    const drawerBleeding = 49;

    const Puller = styled('div')(({theme}) => ({
        width: 30,
        height: 6,
        backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        left: 'calc(50% - 15px)',
    }));

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const mobileVersion = useMediaQuery(theme.breakpoints.down('md'));

    const LeftPanelBody = (
        <Paper
            sx={{
                overflow: 'scroll'
            }}
            className={'LeftPanel__body'}
            elevation={2}
        >

            <List

                className={'list'}
                subheader={
                    <ListSubheader component="div">
                        Статистика
                    </ListSubheader>
                }

            >
                {leftPanelItems.statistic.map((item, index) => (

                    <ListItem className={`list-item current-${URLUtil.path(1) === item.href}`} key={index}
                              disablePadding>

                        <ListItemButton href={`/statistic/${item.href}`}>

                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>

                            <ListItemText className={'list-item__text'} sx={{textTransform: 'capitalize'}} primary={item.text}/>

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
    )

    if(mobileVersion){

        return (

            <Root>


                <SwipeableDrawer
                    anchor="bottom"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={drawerBleeding}
                    disableSwipeToOpen={false}
                    PaperProps={{
                        sx: {
                            height: `calc(70% - ${drawerBleeding}px)`,
                            overflow: 'visible',

                        }
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <StyledBox
                        elevation={2}
                        sx={{
                            position: 'absolute',
                            top: -drawerBleeding,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            visibility: 'visible',
                            right: 0,
                            left: 0,
                        }}
                    >
                        <Puller className={'puller'}/>

                        <Typography sx={{p: 2, color: 'text.secondary'}}>Меню</Typography>

                    </StyledBox>

                    {LeftPanelBody}

                </SwipeableDrawer>
            </Root>
        )

    } else {

        return (
            <Drawer variant="permanent">
                {LeftPanelBody}
            </Drawer>

        )

    }
}
export default LeftPanel