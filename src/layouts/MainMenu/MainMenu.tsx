import {FC, ReactChild, useState} from 'react'
import {
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Paper,
    styled,
    SwipeableDrawer,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material'
import URLUtil from "@/utils/URL";
import mainMenuItems from "@/data/MainMenuItems";
import {IMainMenuItem, IState} from "@/types/types";
import {grey} from "@mui/material/colors";
import {useSelector} from "react-redux";


interface MainMenuProps {

    children?: ReactChild,
    width: number

}

const MainMenu: FC<MainMenuProps> = ({children, width}) => {
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
    const isModalOpen = useSelector((state: IState) => state.modal.open !== '')


    const MainMenuBody = (

        <List
            sx={{overflowY: 'auto'}}
            subheader={
                <ListSubheader component="div">
                    Статистика
                </ListSubheader>
            }

        >
            {mainMenuItems.statistic.map((item, index) => (

                <ListItem
                    sx={{
                        background: URLUtil.hash(1) === item.href ? theme.palette.primary.light : '',
                        borderLeft: '4px solid transparent',
                        borderColor: URLUtil.hash(1) === item.href ? theme.palette.primary.main : '',

                    }}
                    key={index}
                    disablePadding
                >

                    <ListItemButton href={`/#/statistic/${item.href}`}>

                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>

                        <ListItemText sx={{textTransform: 'capitalize'}} primary={item.text}/>

                    </ListItemButton>

                </ListItem>
            ))}

            <Divider/>

            <ListSubheader component="div">
                Настройка
            </ListSubheader>

            {mainMenuItems.settings.map((item: IMainMenuItem, index) => (

                <ListItem
                    sx={{
                        background: URLUtil.hash(1) === item.href ? theme.palette.primary.light : '',
                        borderLeft: '4px solid transparent',
                        borderColor: URLUtil.hash(1) === item.href ? theme.palette.primary.main : '',

                    }}
                    key={index}
                    disablePadding
                >

                    <ListItemButton href={`/#/settings/${item.href}`}>

                        <ListItemIcon color={URLUtil.hash(1) === item.href ? theme.palette.primary.light : 'inherit'}>
                            {item.icon}
                        </ListItemIcon>

                        <ListItemText
                            sx={{
                                textTransform: 'capitalize',
                                color: URLUtil.hash(1) === item.href ? theme.palette.primary.light : 'inherit',
                            }}
                            primary={item.text}
                        />

                    </ListItemButton>

                </ListItem>
            ))}
        </List>

    )

    if (mobileVersion && !isModalOpen) {

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


                    {MainMenuBody}

                </SwipeableDrawer>

            </Root>
        )

    } else if (!mobileVersion) {

        return (
            <Drawer
                sx={{
                    width: width,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: width,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
            >


                <Button
                    href={'/#/statistic/main'}
                    sx={{
                        p: 0,
                        borderRadius: 0,
                        borderWidth: 0
                    }}
                >
                    <Typography
                        sx={{p: 1.5, color: 'text.secondary'}}
                        fontSize={30}
                        textAlign={'center'}
                        component={'h1'}
                        textTransform={'none'}
                    >
                        React Advanced
                    </Typography>
                </Button>

                <Divider/>
                {MainMenuBody}
            </Drawer>
        )

    }

    return <></>
}
export default MainMenu