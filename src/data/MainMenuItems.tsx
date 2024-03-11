import ListIcon from "@mui/icons-material/List";
import Main from "@/pages/Main/Main";
import PersonIcon from "@mui/icons-material/Person";
import TabIcon from "@mui/icons-material/Tab";
import LanguageIcon from "@mui/icons-material/Language";
import TableViewIcon from "@mui/icons-material/TableView";
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import TimerIcon from "@mui/icons-material/Timer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import ProgramsPage from "@/pages/ProgramsPage/ProgramsPage";
import SitesPage from "@/pages/SitesPage/SitesPage";
import ReportPage from "@/pages/ReportPage/ReportPage";
import CalendarPage from "@/pages/CalendarPage/CalendarPage";
import IncidentsPage from "@/pages/IncidentsPage/IncidentsPage";
import TimeTrackingPage from "@/pages/TimeTrackingPage/TimeTrackingPage";
import GeolocationPage from "@/pages/GeolocationPage/GeolocationPage";
import ScreenshotsPage from "@/pages/ScreenshotsPage/ScreenshotsPage";
import PersonsPage from "@/pages/PersonsPage/PersonsPage";
import PersonsSettingsPage from "@/pages/PersonsSettingsPage/PersonsSettingsPage";
import GroupsIcon from '@mui/icons-material/Groups';
import DepartmentsSettingsPage from "@/pages/DepartmentsSettingsPage/DepartmentsSettingsPage";
import JobsSettingsPage from "@/pages/JobsSettingsPage/JobsSettingsPage";
import SchedulesSettingsPage from "@/pages/SchedulesSettingsPage/SchedulesSettingsPage";

const MainMenuItems = {
    statistic: [
        {
            text: 'главная',
            href: 'main',
            icon: <ListIcon/>,
            page: <Main/>
        },
        {
            text: 'сотрудники',
            href: 'persons',
            icon: <PersonIcon/>,
            page: <PersonsPage/>
        },
        {
            text: 'программы',
            href: 'programs',
            icon: <TabIcon/>,
            page: <ProgramsPage/>
        },
        {
            text: 'сайты',
            href: 'sites',
            icon: <LanguageIcon/>,
            page: <SitesPage/>
        },
        {
            text: 'табель',
            href: 'report',
            icon: <TableViewIcon/>,
            page: <ReportPage/>
        },
        {
            text: 'календарь',
            href: 'calendar',
            icon: <CalendarMonthIcon/>,
            page: <CalendarPage/>
        },
        {
            text: 'инциденты',
            href: 'incidents',
            icon: <WarningAmberIcon/>,
            page: <IncidentsPage/>
        },
        {
            text: 'учёт рабочего времени',
            href: 'time-tracking',
            icon: <TimerIcon/>,
            page: <TimeTrackingPage/>
        },
        {
            text: 'местоположение',
            href: 'geolocation',
            icon: <LocationOnIcon/>,
            page: <GeolocationPage/>
        },
        {
            text: 'скриншоты',
            href: 'screenshots',
            icon: <ScreenshotMonitorIcon/>,
            page: <ScreenshotsPage/>
        },
    ],
    settings: [
        {
            text: 'сотрудники',
            href: 'persons',
            icon: <PersonIcon/>,
            page: <PersonsSettingsPage/>

        },
        {
            text: 'отделы',
            href: 'departments',
            icon: <GroupsIcon/>,
            page: <DepartmentsSettingsPage/>

        },
        {
            text: 'должности',
            href: 'jobs',
            icon: <WorkIcon/>,
            page: <JobsSettingsPage/>

        },
        {
            text: 'расписание',
            href: 'schedule',
            icon: <ScheduleIcon/>,
            page: <SchedulesSettingsPage/>

        },




    ]
}
export default MainMenuItems