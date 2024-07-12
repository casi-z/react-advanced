import ListIcon from "@mui/icons-material/List";
import Main from "@/pages/Main/Main";
import PersonIcon from "@mui/icons-material/Person";
import PersonsPage from "@/pages/PersonsPage/PersonsPage";
import PersonsSettingsPage from "@/pages/PersonsSettingsPage/PersonsSettingsPage";

const MainMenuItems = {
    statistic: [
        {
            text: 'главная',
            href: 'main',
            icon: <ListIcon/>,
            page: <Main/>
        },
        {
            text: 'Тестовая страница',
            href: 'persons',
            icon: <PersonIcon/>,
            page: <PersonsPage/>
        },
    ],
    settings: [
        {
            text: 'Тестовая страница 2',
            href: 'persons',
            icon: <PersonIcon/>,
            page: <PersonsSettingsPage/>

        },


    ]
}
export default MainMenuItems